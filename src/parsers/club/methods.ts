import { JSDOM } from 'jsdom';

// Constants
import { ERROR_NOT_FOUND } from '../../constants/errors';

// Entities
import { Club, createClub } from '../../entities/club';

// Utils
import { makeRequest, parse } from '../../utils';

import url from '../../url';

export function list(competitionId: string, seasonId: string): Promise<Array<Club>> {

    console.log('PARSING STARTED');
    const parseFn = parse(data => {
        if (!data) {
            console.log('ERRR 1111');
            throw ERROR_NOT_FOUND;
        }



        const dom = new JSDOM(data);

        return [...dom.window.document.querySelectorAll('#yw1.grid-view table.items tbody tr')].map((node, index) => {
                const linkNode = node.querySelector('.hauptlink a');
                const id = linkNode.getAttribute('href').split('/')[4];
                return createClub({
                    id,
                    logoUrl: url.club.logo(id),
                    title: linkNode.innerHTML,
                });
            });
    }, []);
    return makeRequest(url.club.list(competitionId, seasonId)).then(parseFn);
}
