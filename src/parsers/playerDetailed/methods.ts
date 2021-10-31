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

                const heightNode = node.querySelector('td:nth-child(5)');
                const height = heightNode.innerHTML;

                const footNode = node.querySelector('td:nth-child(6)');
                const foot = footNode.innerHTML || '-';

                const joinedNode = node.querySelector('td:nth-child(7)');
                const joined = joinedNode
                    ? moment(joinedNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                    : null;

                const signedFromClubIdNode = node.querySelector('td:nth-child(8) > a');
                const clubId = signedFromClubIdNode
                    ? signedFromClubIdNode.getAttribute('id')
                    : null;
                const signedFromClubTransferFeeNode = node.querySelector('td:nth-child(8) img');
                const signedFromClubTransferFeeAttr = signedFromClubTransferFeeNode
                    ? signedFromClubTransferFeeNode.getAttribute('title')
                    : null;

                const transferFee = signedFromClubTransferFeeAttr
                    ? signedFromClubTransferFeeAttr.split(': Ablöse ')[1].split('"')[0]
                    : '';

                // тут можно получить id прошлого клуба, за сколько купили, и в каком году
                // <a class="vereinprofil_tooltip" id="1041" href="/olympique-lyon/startseite/verein/1041/saison_id/2018">
                // <img src="https://tmssl.akamaized.net/images/wappen/verysmall/1041.png?lm=1581024966" title=": Ablöse €21.50m" alt="Olympique Lyon" class=""></a>

                const signedFrom = {
                    clubId,
                    transferFee,
                };

                const contractNode = node.querySelector('td:nth-child(9)');
                const contract = contractNode
                    ? moment(contractNode.innerHTML, 'MMM DD, YYYY').format('YYYY-MM-DD')
                    : null;

                /**  получаем стоимость игрока */
                const marketValueNode = node.querySelector('td:nth-child(10)');
                const marketValue = marketValueNode.innerHTML.split('&nbsp;')[0];

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
