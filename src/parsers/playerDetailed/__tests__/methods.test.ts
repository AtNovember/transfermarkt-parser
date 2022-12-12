import { list } from '../methods';

// Entities
import { createPlayer } from '../../../entities/player';

import { JEST_ASYNC_TIMEOUT } from '../../../settings';

describe('src/parsers/player/methods.ts', () => {
    describe('list', () => {
        it(
            'Should return correct result for Manchester City, 17/18 (281, 2018)',
            async () => {
                const response = [
                    createPlayer({
                        id: 238223,
                        name: 'Ederson',
                        birthday: '1993-08-17',
                        nationalities: ['Brazil', 'Portugal'],
                        number: 31,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 40423,
                        name: 'Claudio Bravo',
                        birthday: '1983-04-13',
                        nationalities: ['Chile', 'Spain'],
                        number: 1,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 339253,
                        name: 'Daniel Grimshaw',
                        birthday: '1998-01-16',
                        nationalities: ['England'],
                        number: 32,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 371021,
                        name: 'Arijanet Muric',
                        birthday: '1998-11-07',
                        nationalities: ['Kosovo', 'Montenegro'],
                        number: 49,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 186590,
                        name: 'John Stones',
                        birthday: '1994-05-28',
                        nationalities: ['England'],
                        number: 5,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 176553,
                        name: 'Aymeric Laporte',
                        birthday: '1994-05-27',
                        nationalities: ['France'],
                        number: 14,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 54781,
                        name: 'Nicolás Otamendi',
                        birthday: '1988-02-12',
                        nationalities: ['Argentina'],
                        number: 30,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 90681,
                        name: 'Eliaquim Mangala',
                        birthday: '1991-02-13',
                        nationalities: ['France', 'Belgium'],
                        number: 15,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 9594,
                        name: 'Vincent Kompany',
                        birthday: '1986-04-10',
                        nationalities: ['Belgium', 'DR Congo'],
                        number: 4,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 340460,
                        name: 'Philippe Sandler',
                        birthday: '1997-02-10',
                        nationalities: ['Netherlands'],
                        number: 34,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 210178,
                        name: 'Pablo Marí',
                        birthday: '1993-08-31',
                        nationalities: ['Spain'],
                        number: null,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 282199,
                        name: 'Erik Palmer-Brown',
                        birthday: '1997-04-24',
                        nationalities: ['United States'],
                        number: null,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 277723,
                        name: 'Cameron Humphreys',
                        birthday: '1998-08-22',
                        nationalities: ['England'],
                        number: null,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 466794,
                        name: 'Eric García',
                        birthday: '2001-01-09',
                        nationalities: ['Spain'],
                        number: 50,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 157495,
                        name: 'Benjamin Mendy',
                        birthday: '1994-07-17',
                        nationalities: ['France', 'Senegal'],
                        number: 22,
                        photoUrl: null,
                        position: 'Left-Back',
                    }),
                    createPlayer({
                        id: 203853,
                        name: 'Oleksandr Zinchenko',
                        birthday: '1996-12-15',
                        nationalities: ['Ukraine'],
                        number: 35,
                        photoUrl: null,
                        position: 'Left-Back',
                    }),
                    createPlayer({
                        id: 95424,
                        name: 'Kyle Walker',
                        birthday: '1990-05-28',
                        nationalities: ['England'],
                        number: 2,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 145707,
                        name: 'Danilo',
                        birthday: '1991-07-15',
                        nationalities: ['Brazil'],
                        number: 3,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 26267,
                        name: 'Fernandinho',
                        birthday: '1985-05-04',
                        nationalities: ['Brazil'],
                        number: 25,
                        photoUrl: null,
                        position: 'Defensive Midfield',
                    }),
                    createPlayer({
                        id: 114365,
                        name: 'Luke Brattan',
                        birthday: '1990-03-08',
                        nationalities: ['Australia', 'England'],
                        number: null,
                        photoUrl: null,
                        position: 'Defensive Midfield',
                    }),
                    createPlayer({
                        id: 395239,
                        name: 'Claudio Gomes',
                        birthday: '2000-07-23',
                        nationalities: ['France', 'Guinea-Bissau'],
                        number: 81,
                        photoUrl: null,
                        position: 'Defensive Midfield',
                    }),
                    createPlayer({
                        id: 53622,
                        name: 'Ilkay Gündogan',
                        birthday: '1990-10-24',
                        nationalities: ['Germany'],
                        number: 8,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 50362,
                        name: 'Fabian Delph',
                        birthday: '1989-11-21',
                        nationalities: ['England', 'Guyana'],
                        number: 18,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 406635,
                        name: 'Phil Foden',
                        birthday: '2000-05-28',
                        nationalities: ['England'],
                        number: 47,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 447661,
                        name: 'Douglas Luiz',
                        birthday: '1998-05-09',
                        nationalities: ['Brazil'],
                        number: null,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        birthday: '1997-06-28',
                        id: 261504,
                        name: 'Aleix García',
                        nationalities: ['Spain'],
                        number: null,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 103559,
                        name: 'Mix Diskerud',
                        birthday: '1990-10-02',
                        nationalities: ['United States', 'Norway'],
                        number: null,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 226739,
                        name: 'Anthony Cáceres',
                        birthday: '1992-09-29',
                        nationalities: ['Australia', 'Uruguay'],
                        number: null,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 484551,
                        name: 'Taylor Richards',
                        birthday: '2000-12-04',
                        nationalities: ['England'],
                        number: null,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        birthday: '1999-10-07',
                        id: 382553,
                        name: 'Luke Bolton',
                        nationalities: ['England'],
                        number: null,
                        photoUrl: null,
                        position: 'Right Midfield',
                    }),
                    createPlayer({
                        id: 88755,
                        name: 'Kevin De Bruyne',
                        birthday: '1991-06-28',
                        nationalities: ['Belgium'],
                        number: 17,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 35518,
                        name: 'David Silva',
                        birthday: '1986-01-08',
                        nationalities: ['Spain'],
                        number: 21,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 314678,
                        name: 'Brahim Díaz',
                        birthday: '1999-08-03',
                        nationalities: ['Spain', 'Morocco'],
                        number: 55,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 429790,
                        name: 'Luka Ilic',
                        birthday: '1999-07-02',
                        nationalities: ['Serbia'],
                        number: null,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 406640,
                        name: 'Felix Nmecha',
                        birthday: '2000-10-10',
                        nationalities: ['England', 'Germany'],
                        number: 61,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 466802,
                        name: 'Adrián Bernabé',
                        birthday: '2001-05-26',
                        nationalities: ['Spain'],
                        number: 82,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 134425,
                        name: 'Raheem Sterling',
                        birthday: '1994-12-08',
                        nationalities: ['England', 'Jamaica'],
                        number: 7,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 192565,
                        name: 'Leroy Sané',
                        birthday: '1996-01-11',
                        nationalities: ['Germany', 'France'],
                        number: 19,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 417346,
                        name: 'Jack Harrison',
                        birthday: '1996-11-20',
                        nationalities: ['England'],
                        number: null,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 345654,
                        name: 'Marlos Moreno',
                        birthday: '1996-09-20',
                        nationalities: ['Colombia'],
                        number: null,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 241641,
                        name: 'Bernardo Silva',
                        birthday: '1994-08-10',
                        nationalities: ['Portugal'],
                        number: 20,
                        photoUrl: null,
                        position: 'Right Winger',
                    }),
                    createPlayer({
                        id: 171424,
                        name: 'Riyad Mahrez',
                        birthday: '1991-02-21',
                        nationalities: ['Algeria', 'France'],
                        number: 26,
                        photoUrl: null,
                        position: 'Right Winger',
                    }),
                    createPlayer({
                        id: 225452,
                        name: 'Patrick Roberts',
                        birthday: '1997-02-05',
                        nationalities: ['England'],
                        number: null,
                        photoUrl: null,
                        position: 'Right Winger',
                    }),
                    createPlayer({
                        id: 392763,
                        name: 'Ian Poveda',
                        birthday: '2000-02-09',
                        nationalities: ['England', 'Colombia'],
                        number: 83,
                        photoUrl: null,
                        position: 'Right Winger',
                    }),
                    createPlayer({
                        id: 26399,
                        name: 'Sergio Agüero',
                        birthday: '1988-06-02',
                        nationalities: ['Argentina', 'Spain'],
                        number: 10,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                    createPlayer({
                        id: 363205,
                        name: 'Gabriel Jesus',
                        birthday: '1997-04-03',
                        nationalities: ['Brazil'],
                        number: 33,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                ];
                await expect(list(281, '2018')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return correct result for Bayer 04 Leverkusen, 17/18 (15, 2018)',
            async () => {
                const response = [
                    createPlayer({
                        id: 48015,
                        name: 'Lukas Hradecky',
                        birthday: '1989-11-24',
                        nationalities: ['Finland', 'Slovakia'],
                        number: 1,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 16498,
                        name: 'Ramazan Özcan',
                        birthday: '1984-06-28',
                        nationalities: ['Austria'],
                        number: 28,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 38346,
                        name: 'Thorsten Kirschbaum',
                        birthday: '1987-04-20',
                        nationalities: ['Germany'],
                        number: 24,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 85543,
                        name: 'Niklas Lomb',
                        birthday: '1993-07-28',
                        nationalities: ['Germany'],
                        number: 36,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 320954,
                        name: 'Tomasz Kucz',
                        birthday: '1999-07-06',
                        nationalities: ['Poland'],
                        number: null,
                        photoUrl: null,
                        position: 'Goalkeeper',
                    }),
                    createPlayer({
                        id: 196357,
                        name: 'Jonathan Tah',
                        birthday: '1996-02-11',
                        nationalities: ['Germany', "Cote d'Ivoire"],
                        number: 4,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 324351,
                        name: 'Panagiotis Retsos',
                        birthday: '1998-08-09',
                        nationalities: ['Greece'],
                        number: 3,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 29993,
                        name: 'Sven Bender',
                        birthday: '1989-04-27',
                        nationalities: ['Germany'],
                        number: 5,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 59032,
                        name: 'Aleksandar Dragovic',
                        birthday: '1991-03-06',
                        nationalities: ['Austria', 'Serbia'],
                        number: 6,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 206386,
                        name: 'Tin Jedvaj',
                        birthday: '1995-11-28',
                        nationalities: ['Croatia'],
                        number: 16,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 389079,
                        name: 'Jan Boller',
                        birthday: '2000-03-14',
                        nationalities: ['Germany'],
                        number: 33,
                        photoUrl: null,
                        position: 'Centre-Back',
                    }),
                    createPlayer({
                        id: 228433,
                        name: 'Wendell',
                        birthday: '1993-07-20',
                        nationalities: ['Brazil'],
                        number: 18,
                        photoUrl: null,
                        position: 'Left-Back',
                    }),
                    createPlayer({
                        id: 30059,
                        name: 'Lars Bender',
                        birthday: '1989-04-27',
                        nationalities: ['Germany'],
                        number: 8,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 202591,
                        name: 'Benjamin Henrichs',
                        birthday: '1997-02-23',
                        nationalities: ['Germany', 'Ghana'],
                        number: null,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 119211,
                        name: 'Mitchell Weiser',
                        birthday: '1994-04-21',
                        nationalities: ['Germany'],
                        number: 23,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 346328,
                        name: 'Jakub Bednarczyk',
                        birthday: '1999-01-02',
                        nationalities: ['Poland', 'Germany'],
                        number: null,
                        photoUrl: null,
                        position: 'Right-Back',
                    }),
                    createPlayer({
                        id: 34787,
                        name: 'Julian Baumgartlinger',
                        birthday: '1988-01-02',
                        nationalities: ['Austria'],
                        number: 15,
                        photoUrl: null,
                        position: 'Defensive Midfield',
                    }),
                    createPlayer({
                        id: 389078,
                        name: 'Adrian Stanilewicz',
                        birthday: '2000-02-22',
                        nationalities: ['Poland', 'Germany'],
                        number: null,
                        photoUrl: null,
                        position: 'Defensive Midfield',
                    }),
                    createPlayer({
                        id: 187492,
                        name: 'Julian Brandt',
                        birthday: '1996-05-02',
                        nationalities: ['Germany'],
                        number: 10,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 89701,
                        name: 'Charles Aránguiz',
                        birthday: '1989-04-17',
                        nationalities: ['Chile'],
                        number: 20,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 118847,
                        name: 'Dominik Kohr',
                        birthday: '1994-01-31',
                        nationalities: ['Germany'],
                        number: 21,
                        photoUrl: null,
                        position: 'Central Midfield',
                    }),
                    createPlayer({
                        id: 309400,
                        name: 'Kai Havertz',
                        birthday: '1999-06-11',
                        nationalities: ['Germany'],
                        number: 29,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 335100,
                        name: 'Sam Schreck',
                        birthday: '1999-01-29',
                        nationalities: ['Germany'],
                        number: 30,
                        photoUrl: null,
                        position: 'Attacking Midfield',
                    }),
                    createPlayer({
                        id: 387626,
                        name: 'Leon Bailey',
                        birthday: '1997-08-09',
                        nationalities: ['Jamaica'],
                        number: 9,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 428791,
                        name: 'Paulinho',
                        birthday: '2000-07-15',
                        nationalities: ['Brazil'],
                        number: 7,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 336002,
                        name: 'Herdi Bukusu',
                        birthday: '2000-04-03',
                        nationalities: ['Germany', 'Angola'],
                        number: null,
                        photoUrl: null,
                        position: 'Left Winger',
                    }),
                    createPlayer({
                        id: 61087,
                        name: 'Karim Bellarabi',
                        birthday: '1990-04-08',
                        nationalities: ['Germany', 'Morocco'],
                        number: 38,
                        photoUrl: null,
                        position: 'Right Winger',
                    }),
                    createPlayer({
                        id: 82009,
                        name: 'Kevin Volland',
                        birthday: '1992-07-30',
                        nationalities: ['Germany'],
                        number: 31,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                    createPlayer({
                        id: 193782,
                        name: 'Lucas Alario',
                        birthday: '1992-10-08',
                        nationalities: ['Argentina', 'Italy'],
                        number: 13,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                    createPlayer({
                        id: 201311,
                        name: 'Isaac Kiese Thelin',
                        birthday: '1992-06-24',
                        nationalities: ['Sweden', 'DR Congo'],
                        number: null,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                    createPlayer({
                        id: 173491,
                        name: 'Joel Pohjanpalo',
                        birthday: '1994-09-13',
                        nationalities: ['Finland'],
                        number: 17,
                        photoUrl: null,
                        position: 'Centre-Forward',
                    }),
                ];
                await expect(list(15, '2018')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for NO provided params',
            async () => {
                const response = [];
                await expect(list(undefined, undefined)).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
        it(
            'Should return empty array for INcorrect params',
            async () => {
                const response = [];
                await expect(list(-999, 'aaa')).resolves.toEqual(response);
            },
            JEST_ASYNC_TIMEOUT,
        );
    });
});