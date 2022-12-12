import { BASE_HOST } from '../settings';

export const list = (competitionId: string, seasonId: string) => {
    console.log(`${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}/plus/?saison_id=${seasonId}`);
    return `${BASE_HOST}/xxx/startseite/wettbewerb/${competitionId}/plus/?saison_id=${seasonId}`;
    // https://www.transfermarkt.com/super-liga-srbije/startseite/wettbewerb/SER1/plus/?saison_id=2021}
}

export const logo = id => `https://tmssl.akamaized.net//images/wappen/head/${id}.png`;
