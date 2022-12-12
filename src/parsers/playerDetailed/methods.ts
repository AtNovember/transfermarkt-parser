import { JSDOM } from 'jsdom';
import * as moment from 'moment';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { PlayerDetailed, createPlayerDetailed } from '../../entities/playerDetailed';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

/**
 * PLAYER DETAILED
 * @param clubId 
 * @param seasonId 
 * @returns createPlayerDetailed{}
 */
export function list(clubId: number, seasonId: string): Promise<Array<PlayerDetailed>> {

    const parseFn = parse(data => {
        if (!data) {
            console.log('ERROR 1');
            throw ERROR_NOT_FOUND;
        }

        const dom = new JSDOM(data);
      
        return [...dom.window.document.querySelectorAll('#yw1 table.items > tbody > tr')]
            .map((node, index) => {


                let id = node.querySelector('.hauptlink > a').getAttribute("href") || null;
                let number = node.querySelector('td:nth-of-type(1) > div').innerHTML || '-';
                let name = node.querySelector('.hauptlink > a').innerHTML || null;
                let position = node.querySelector('td:nth-of-type(2) > table.inline-table > tbody > tr:nth-of-type(2) > td').innerHTML || null;
                const birthday = node.querySelector('td:nth-of-type(3)').innerHTML || null;
                let nationalities = [...node.querySelectorAll('td:nth-of-type(4) img')].map(img => img.getAttribute('title'));
                // let photoUrl;
                let age = birthday.match(/\(([^)]+)\)/)[1] || null;
                let height = node.querySelector('td:nth-of-type(6)').innerHTML || null;
                let foot = node.querySelector('td:nth-of-type(7)').innerHTML || null;
                let joined = node.querySelector('td:nth-of-type(8)').innerHTML || null;
                // let joined = null;
                // const signedFrom = {
                //     clubId: node.querySelector('td:nth-of-type(9)').innerHTML || null,
                //     // transferFee: node.querySelector('td:nth-of-type(9) > a').getAttribute('title').split(': Ablöse')[1] || null,
                //     // clubTitle: node.querySelector('td:nth-of-type(9) > a').getAttribute('title').split(': Ablöse')[0] || null,
                //     transferFee: '',
                //     clubTitle: ''
                // };
                const signedFrom = node.querySelector('td:nth-of-type(9)').innerHTML || null;
                let contract = node.querySelector('td:nth-of-type(10)').innerHTML || null;
                let marketValue = node.querySelector('td:nth-of-type(11)').innerHTML || null;

                // const photoNode = node.querySelector('table.inline-table img');
                // const photoUrl =
                //     photoNode && photoNode.src ? photoNode.src.replace('small', 'big') : null;
                const photoUrl = null;

                console.log('player', {id, number, name, position, birthday, nationalities, age, height, foot, joined, contract, marketValue, signedFrom, photoUrl});
                

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
