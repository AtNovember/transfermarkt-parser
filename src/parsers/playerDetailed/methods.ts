import { JSDOM } from 'jsdom';
import * as moment from 'moment';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { PlayerDetailed, createPlayerDetailed } from '../../entities/playerDetailed';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(clubId: number, seasonId: string): Promise<Array<PlayerDetailed>> {
    const parseFn = parse(data => {
        if (!data) {
            throw ERROR_NOT_FOUND;
        }

        const dom = new JSDOM(data);

        // Correct page marker
        const markerNode = dom.window.document.querySelector('#verein_head .dataMarktwert p');
        const marker =
            markerNode &&
            markerNode.innerHTML &&
            markerNode.innerHTML.trim() === 'Total market value';
        if (!marker) {
            throw ERROR_NOT_FOUND;
        }

        return [...dom.window.document.querySelectorAll('#yw1 table.items > tbody > tr')]
            .filter(node => node.querySelector('.hauptlink a'))
            .map(node => {
                const linkNode = node.querySelector('.hauptlink a');
                const id = parseInt(linkNode.getAttribute('id'));
                const name = linkNode.innerHTML;

                const numberNode = node.querySelector('.rn_nummer');
                const number = numberNode ? numberNode.innerHTML : '-';

                const photoNode = node.querySelector('table.inline-table img');
                const photoUrl =
                    photoNode && photoNode.src ? photoNode.src.replace('small', 'big') : null;

                const positionNode = node.querySelector('table.inline-table tr:last-child td');
                const position = positionNode.innerHTML || null;

                const birthdayNode = node.querySelector('td:nth-child(3)');
                const birthday = birthdayNode
                    ? moment(birthdayNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                    : null;
                const ageNode = birthdayNode;
                const age = ageNode
                    ? parseInt(ageNode.innerHTML.split('(')[1].split(')')[0])
                    : null;

                const nationalitiesNodes = node.querySelectorAll('td:nth-child(4) > img');
                let nationalities = [];
                if (nationalitiesNodes) {
                    nationalitiesNodes.forEach(nationalityNode => {
                        nationalities.push(nationalityNode ? nationalityNode.title : null);
                    });
                }

                /**
                 * In detailed information about players could be column "Current club", or could not
                 *
                 * for example:
                 * there is no "current club" info:
                 *  - https://www.transfermarkt.com/fc-barcelona/kader/verein/131/saison_id/2021/plus/1
                 * here it has "current club" colunm:
                 *   - https://www.transfermarkt.com/fc-barcelona/kader/verein/131/saison_id/2020/plus/1
                 *
                 * Conclusion.
                 *  There is no column "Current Club" for current season table.
                 *  But there are for all previous seasons.
                 *  That's why all columns next to current club moved right for one item
                 * */

                const currentYear = moment().format('YYYY');
                const isTheLastSeason = parseInt(seasonId) === parseInt(currentYear);

                const heightNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(5)')
                    : node.querySelector('td:nth-child(6)');
                const height = heightNode.innerHTML;

                const footNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(6)')
                    : node.querySelector('td:nth-child(7)');
                const foot = footNode.innerHTML || '-';

                const joinedNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(7)')
                    : node.querySelector('td:nth-child(8)');
                const joined =
                    joinedNode && joinedNode.innerHTML !== '-'
                        ? moment(joinedNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                        : joinedNode.innerHTML;

                const signedFromClubIdNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(8) > a')
                    : node.querySelector('td:nth-child(9) > a') || null;

                const clubId = signedFromClubIdNode
                    ? signedFromClubIdNode.getAttribute('id')
                    : null;
                const signedFromClubTransferFeeNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(8) img')
                    : node.querySelector('td:nth-child(9) img');
                const signedFromClubTransferFeeAttr = signedFromClubTransferFeeNode
                    ? signedFromClubTransferFeeNode.getAttribute('title')
                    : null;

                const transferFee = signedFromClubTransferFeeAttr
                    ? signedFromClubTransferFeeAttr.split(': Ablöse ')[1].split('"')[0]
                    : ''; // "-" значит воспитанник клуба

                const clubTitle = signedFromClubTransferFeeNode
                    ? signedFromClubTransferFeeNode.getAttribute('alt')
                    : null;

                const signedFrom = {
                    clubId,
                    transferFee,
                    clubTitle,
                };

                const contractNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(9)')
                    : node.querySelector('td:nth-child(10)');
                const contract =
                    contractNode && contractNode.innerHTML !== '-'
                        ? moment(contractNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                        : contractNode.innerHTML;

                /**  получаем стоимость игрока */
                const marketValueNode = isTheLastSeason
                    ? node.querySelector('td:nth-child(10)')
                    : node.querySelector('td:nth-child(11)');
                const marketValue = marketValueNode.innerHTML.split('&nbsp;')[0];

                console.log({
                    id,
                    name,
                    birthday,
                    nationalities,
                    number: number === '-' ? null : parseInt(number),
                    photoUrl,
                    position,
                    age,
                    height,
                    foot,
                    joined: null,
                    signedFrom: null,
                    contract: null,
                    marketValue: null,
                });

                return createPlayerDetailed({
                    id,
                    name,
                    birthday,
                    nationalities,
                    number: number === '-' ? null : parseInt(number),
                    photoUrl,
                    position,
                    age,
                    height,
                    foot,
                    joined,
                    signedFrom,
                    contract,
                    marketValue,
                });
            });
    }, []);
    return makeRequest(url.playerDetailed.list(clubId, seasonId)).then(parseFn);
}
