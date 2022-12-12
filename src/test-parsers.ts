import * as fs from 'fs';
import * as path from 'path';

import {
    club,
    competition,
    country,
    game,
    matchday,
    player,
    playerDetailed,
    season,
} from './index';
import { laliga } from './source/laliga';


const filename = 'saved_data.json';
const data = [];
// for (let season in laliga) {
//     console.log('SEASON >>', season, laliga[season]);

//     laliga[season].map(club => {
//         playerDetailed
//             .list(club.id, season)
//             .then(players => {
//                 data.push({ players, season, club, transfermarktId: club.id });
//                 console.log('data 111  >>>', data);
//                 return data;
//             })
//             .then(data => {
//                 console.log('__dirname', __dirname);
//                 // fs.writeFileSync(path.join(__dirname, 'temp.json'), JSON.stringify(data));
//                 fs.writeFileSync(path.join(__dirname, filename), JSON.stringify(data));
//             })
//             .catch(error => {
//                 console.log('error', error);
//             })
//             .finally(() => {
//                 console.log('DATA SAVED TO >>', `${__dirname}/${filename}`)
//             });
//     });
// }

console.log('data 333 >>>', data);

// const log = console.log;

// async function main(competitionId: string, seasonId: string) {
//     log(`Getting clubs for ${competitionId}, season ${seasonId}`);
//     const clubs = await club.list(competitionId, seasonId);

//     for (const c of clubs) {
//         log(`Getting players for ${c.title}, (id = ${c.id})`);
//         const players = await player.list(c.id, seasonId);
//         log('Players:');
//         log(players);
//         c.players = players;
//     }

//     // console.log('clubs', clubs);
//     fs.writeFileSync(path.join(__dirname, 'temp.json'), JSON.stringify(clubs));
// }

// main('GB1', '2019');

const seasonIds = [
    '1997',
    '2004',
    // 2005,
    // 2006,
    // 2007,
    // 2008,
    // 2009,
    // 2010,
    // 2011,
    // 2012,
    // 2013,
    // 2014,
    // 2015,
    // 2016,
    // 2017,
    // 2018,
    // 2019,
    // 2020,
    // 2021,
    // 2022,
];

// Club
// club.list('aaa', 'bbb')
for (let i in seasonIds) {
    const seasonId = seasonIds[i];
    console.log('PIDOR >>>', seasonId);
    club.list('SER1', seasonId)
    .then(response => {
        console.log(seasonId, response);
    })
    .catch(error => {
        console.log('error', error);
    });
}
// club.list('ES1', seasonId)
//     .then(response => {
//         console.log(seasonId, response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Competition
// competition
//     .list(-123)
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Country
// country
//     .list()
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Player
// player
//     // .list(undefined, undefined)
//     .list(281, '2018')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// PlayerDetailed
// playerDetailed
//     // .list(undefined, undefined)
//     .list(13, '2004')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Season
// season
//     .list('aaa')
//     // .list('GB1')
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Matchday
// matchday
//     // .list('aaa', 'bbb')
//     // .list('GB1', '2018')
//     // .list('GB1', '2090')
//     .list(undefined, undefined)
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });

// Game
// game.list('GB1', '2019', 3)
// game.list('L1', '2017', 3)
//     // game.list('GB1', '2019', 312312)
//     // game.list('GB1', '2090', 3)
//     // game.list('GB1', '1900', 3)
//     // game.list('aaa', 'bbb', 312312)
//     .then(response => {
//         console.log('response', response);
//     })
//     .catch(error => {
//         console.log('error', error);
//     });
