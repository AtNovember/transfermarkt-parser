import { list } from '../methods';

describe('src/api/country/methods.ts', () => {
    const response = [{
        "id": 1,
        "title": "Afghanistan"
    }, {
        "id": 3,
        "title": "Albania"
    }, {
        "id": 4,
        "title": "Algeria"
    }, {
        "id": 239,
        "title": "American Samoa"
    }, {
        "id": 234,
        "title": "American Virgin Islands"
    }, {
        "id": 5,
        "title": "Andorra"
    }, {
        "id": 6,
        "title": "Angola"
    }, {
        "id": 232,
        "title": "Anguilla"
    }, {
        "id": 7,
        "title": "Antigua and Barbuda"
    }, {
        "id": 9,
        "title": "Argentina"
    }, {
        "id": 10,
        "title": "Armenia"
    }, {
        "id": 233,
        "title": "Aruba"
    }, {
        "id": 12,
        "title": "Australia"
    }, {
        "id": 127,
        "title": "Austria"
    }, {
        "id": 13,
        "title": "Azerbaijan"
    }, {
        "id": 14,
        "title": "Bahamas"
    }, {
        "id": 15,
        "title": "Bahrain"
    }, {
        "id": 16,
        "title": "Bangladesh"
    }, {
        "id": 17,
        "title": "Barbados"
    }, {
        "id": 18,
        "title": "Belarus"
    }, {
        "id": 19,
        "title": "Belgium"
    }, {
        "id": 20,
        "title": "Belize"
    }, {
        "id": 21,
        "title": "Benin"
    }, {
        "id": 211,
        "title": "Bermuda"
    }, {
        "id": 22,
        "title": "Bhutan"
    }, {
        "id": 23,
        "title": "Bolivia"
    }, {
        "id": 269,
        "title": "Bonaire"
    }, {
        "id": 24,
        "title": "Bosnia-Herzegovina"
    }, {
        "id": 25,
        "title": "Botsuana"
    }, {
        "id": 26,
        "title": "Brazil"
    }, {
        "id": 231,
        "title": "British Virgin Islands"
    }, {
        "id": 27,
        "title": "Brunei Darussalam"
    }, {
        "id": 28,
        "title": "Bulgaria"
    }, {
        "id": 29,
        "title": "Burkina Faso"
    }, {
        "id": 30,
        "title": "Burundi"
    }, {
        "id": 79,
        "title": "Cambodia"
    }, {
        "id": 31,
        "title": "Cameroon"
    }, {
        "id": 80,
        "title": "Canada"
    }, {
        "id": 32,
        "title": "Cape Verde"
    }, {
        "id": 229,
        "title": "Cayman-Inseln"
    }, {
        "id": 138,
        "title": "Central African Republic"
    }, {
        "id": 171,
        "title": "Chad"
    }, {
        "id": 33,
        "title": "Chile"
    }, {
        "id": 34,
        "title": "China"
    }, {
        "id": 164,
        "title": "Chinese Taipei (Taiwan)"
    }, {
        "id": 83,
        "title": "Colombia"
    }, {
        "id": 35,
        "title": "Comoros"
    }, {
        "id": 85,
        "title": "Congo"
    }, {
        "id": 238,
        "title": "Cookinseln"
    }, {
        "id": 36,
        "title": "Costa Rica"
    }, {
        "id": 38,
        "title": "Cote d'Ivoire"
    }, {
        "id": 37,
        "title": "Croatia"
    }, {
        "id": 88,
        "title": "Cuba"
    }, {
        "id": 260,
        "title": "Curacao"
    }, {
        "id": 188,
        "title": "Cyprus"
    }, {
        "id": 172,
        "title": "Czech Republic"
    }, {
        "id": 39,
        "title": "Denmark"
    }, {
        "id": 41,
        "title": "Djibouti"
    }, {
        "id": 42,
        "title": "Dominica"
    }, {
        "id": 43,
        "title": "Dominican Republic"
    }, {
        "id": 193,
        "title": "DR Congo"
    }, {
        "id": 44,
        "title": "Ecuador"
    }, {
        "id": 2,
        "title": "Egypt"
    }, {
        "id": 45,
        "title": "El Salvador"
    }, {
        "id": 189,
        "title": "England"
    }, {
        "id": 8,
        "title": "Equatorial Guinea"
    }, {
        "id": 46,
        "title": "Eritrea"
    }, {
        "id": 47,
        "title": "Estonia"
    }, {
        "id": 11,
        "title": "Ethiopia"
    }, {
        "id": 250,
        "title": "Falkland Islands"
    }, {
        "id": 208,
        "title": "Faroe Island"
    }, {
        "id": 111,
        "title": "Federated States of Micronesia"
    }, {
        "id": 48,
        "title": "Fiji"
    }, {
        "id": 49,
        "title": "Finland"
    }, {
        "id": 50,
        "title": "France"
    }, {
        "id": 252,
        "title": "French Guiana"
    }, {
        "id": 51,
        "title": "Gabon"
    }, {
        "id": 53,
        "title": "Georgia"
    }, {
        "id": 40,
        "title": "Germany"
    }, {
        "id": 54,
        "title": "Ghana"
    }, {
        "id": 266,
        "title": "Gibraltar"
    }, {
        "id": 56,
        "title": "Greece"
    }, {
        "id": 243,
        "title": "Greenland"
    }, {
        "id": 55,
        "title": "Grenada"
    }, {
        "id": 251,
        "title": "Guadeloupe"
    }, {
        "id": 241,
        "title": "Guam"
    }, {
        "id": 58,
        "title": "Guatemala"
    }, {
        "id": 59,
        "title": "Guinea"
    }, {
        "id": 60,
        "title": "Guinea-Bissau"
    }, {
        "id": 61,
        "title": "Guyana"
    }, {
        "id": 62,
        "title": "Haiti"
    }, {
        "id": 66,
        "title": "Honduras"
    }, {
        "id": 218,
        "title": "Hongkong"
    }, {
        "id": 178,
        "title": "Hungary"
    }, {
        "id": 73,
        "title": "Iceland"
    }, {
        "id": 67,
        "title": "India"
    }, {
        "id": 68,
        "title": "Indonesia"
    }, {
        "id": 71,
        "title": "Iran"
    }, {
        "id": 70,
        "title": "Iraq"
    }, {
        "id": 72,
        "title": "Ireland"
    }, {
        "id": 74,
        "title": "Israel"
    }, {
        "id": 75,
        "title": "Italy"
    }, {
        "id": 76,
        "title": "Jamaica"
    }, {
        "id": 77,
        "title": "Japan"
    }, {
        "id": 78,
        "title": "Jordan"
    }, {
        "id": 81,
        "title": "Kazakhstan"
    }, {
        "id": 82,
        "title": "Kenya"
    }, {
        "id": 246,
        "title": "Kiribati"
    }, {
        "id": 86,
        "title": "Korea, North"
    }, {
        "id": 87,
        "title": "Korea, South"
    }, {
        "id": 244,
        "title": "Kosovo"
    }, {
        "id": 89,
        "title": "Kuwait"
    }, {
        "id": 90,
        "title": "Kyrgyzstan"
    }, {
        "id": 91,
        "title": "Laos"
    }, {
        "id": 92,
        "title": "Latvia"
    }, {
        "id": 94,
        "title": "Lebanon"
    }, {
        "id": 93,
        "title": "Lesotho"
    }, {
        "id": 95,
        "title": "Liberia"
    }, {
        "id": 96,
        "title": "Libya"
    }, {
        "id": 97,
        "title": "Liechtenstein"
    }, {
        "id": 98,
        "title": "Lithuania"
    }, {
        "id": 99,
        "title": "Luxembourg"
    }, {
        "id": 219,
        "title": "Macao"
    }, {
        "id": 100,
        "title": "Macedonia"
    }, {
        "id": 101,
        "title": "Madagascar"
    }, {
        "id": 102,
        "title": "Malawi"
    }, {
        "id": 103,
        "title": "Malaysia"
    }, {
        "id": 104,
        "title": "Maldives"
    }, {
        "id": 105,
        "title": "Mali"
    }, {
        "id": 106,
        "title": "Malta"
    }, {
        "id": 268,
        "title": "Mariana Islands"
    }, {
        "id": 257,
        "title": "Marshall Islands"
    }, {
        "id": 207,
        "title": "Martinique"
    }, {
        "id": 108,
        "title": "Mauritania"
    }, {
        "id": 109,
        "title": "Mauritius"
    }, {
        "id": 110,
        "title": "Mexico"
    }, {
        "id": 112,
        "title": "Moldova"
    }, {
        "id": 113,
        "title": "Monaco"
    }, {
        "id": 114,
        "title": "Mongolia"
    }, {
        "id": 216,
        "title": "Montenegro"
    }, {
        "id": 235,
        "title": "Montserrat"
    }, {
        "id": 107,
        "title": "Morocco"
    }, {
        "id": 115,
        "title": "Mozambique"
    }, {
        "id": 116,
        "title": "Myanmar"
    }, {
        "id": 117,
        "title": "Namibia"
    }, {
        "id": 118,
        "title": "Nauru"
    }, {
        "id": 119,
        "title": "Nepal"
    }, {
        "id": 122,
        "title": "Netherlands"
    }, {
        "id": 236,
        "title": "Neukaledonien"
    }, {
        "id": 120,
        "title": "New Zealand"
    }, {
        "id": 121,
        "title": "Nicaragua"
    }, {
        "id": 123,
        "title": "Niger"
    }, {
        "id": 124,
        "title": "Nigeria"
    }, {
        "id": 261,
        "title": "Niue"
    }, {
        "id": 192,
        "title": "Northern Ireland"
    }, {
        "id": 125,
        "title": "Norway"
    }, {
        "id": 126,
        "title": "Oman"
    }, {
        "id": 242,
        "title": "Osttimor"
    }, {
        "id": 128,
        "title": "Pakistan"
    }, {
        "id": 240,
        "title": "Palästina"
    }, {
        "id": 129,
        "title": "Palau"
    }, {
        "id": 130,
        "title": "Panama"
    }, {
        "id": 131,
        "title": "Papua New Guinea"
    }, {
        "id": 132,
        "title": "Paraguay"
    }, {
        "id": 133,
        "title": "Peru"
    }, {
        "id": 134,
        "title": "Philippines"
    }, {
        "id": 135,
        "title": "Poland"
    }, {
        "id": 136,
        "title": "Portugal"
    }, {
        "id": 228,
        "title": "Puerto Rico"
    }, {
        "id": 137,
        "title": "Qatar"
    }, {
        "id": 249,
        "title": "Réunion"
    }, {
        "id": 140,
        "title": "Romania"
    }, {
        "id": 141,
        "title": "Russia"
    }, {
        "id": 139,
        "title": "Rwanda"
    }, {
        "id": 267,
        "title": "Saint-Martin"
    }, {
        "id": 143,
        "title": "Samoa"
    }, {
        "id": 144,
        "title": "San Marino"
    }, {
        "id": 145,
        "title": "Sao Tome and Principe"
    }, {
        "id": 146,
        "title": "Saudi Arabia"
    }, {
        "id": 190,
        "title": "Scotland"
    }, {
        "id": 149,
        "title": "Senegal"
    }, {
        "id": 215,
        "title": "Serbia"
    }, {
        "id": 151,
        "title": "Seychelles"
    }, {
        "id": 152,
        "title": "Sierra Leone"
    }, {
        "id": 153,
        "title": "Singapore"
    }, {
        "id": 265,
        "title": "Sint Maarten"
    }, {
        "id": 154,
        "title": "Slovakia"
    }, {
        "id": 155,
        "title": "Slovenia"
    }, {
        "id": 69,
        "title": "Solomon Islands"
    }, {
        "id": 156,
        "title": "Somalia"
    }, {
        "id": 159,
        "title": "South Africa"
    }, {
        "id": 262,
        "title": "Southern Sudan"
    }, {
        "id": 157,
        "title": "Spain"
    }, {
        "id": 158,
        "title": "Sri Lanka"
    }, {
        "id": 225,
        "title": "St. Kitts &amp; Nevis"
    }, {
        "id": 230,
        "title": "St. Lucia"
    }, {
        "id": 224,
        "title": "St. Vincent &amp; Grenadinen"
    }, {
        "id": 160,
        "title": "Sudan"
    }, {
        "id": 161,
        "title": "Suriname"
    }, {
        "id": 162,
        "title": "Swaziland"
    }, {
        "id": 147,
        "title": "Sweden"
    }, {
        "id": 148,
        "title": "Switzerland"
    }, {
        "id": 163,
        "title": "Syria"
    }, {
        "id": 237,
        "title": "Tahiti"
    }, {
        "id": 165,
        "title": "Tajikistan"
    }, {
        "id": 166,
        "title": "Tanzania"
    }, {
        "id": 167,
        "title": "Thailand"
    }, {
        "id": 52,
        "title": "The Gambia"
    }, {
        "id": 245,
        "title": "Tibet"
    }, {
        "id": 168,
        "title": "Togo"
    }, {
        "id": 169,
        "title": "Tonga"
    }, {
        "id": 170,
        "title": "Trinidad and Tobago"
    }, {
        "id": 173,
        "title": "Tunisia"
    }, {
        "id": 174,
        "title": "Turkey"
    }, {
        "id": 175,
        "title": "Turkmenistan"
    }, {
        "id": 226,
        "title": "Turks- and Caicosinseln"
    }, {
        "id": 247,
        "title": "Tuvalu"
    }, {
        "id": 176,
        "title": "Uganda"
    }, {
        "id": 177,
        "title": "Ukraine"
    }, {
        "id": 183,
        "title": "United Arab Emirates"
    }, {
        "id": 184,
        "title": "United States"
    }, {
        "id": 179,
        "title": "Uruguay"
    }, {
        "id": 180,
        "title": "Uzbekistan"
    }, {
        "id": 181,
        "title": "Vanuatu"
    }, {
        "id": 256,
        "title": "Vatican"
    }, {
        "id": 182,
        "title": "Venezuela"
    }, {
        "id": 185,
        "title": "Vietnam"
    }, {
        "id": 191,
        "title": "Wales"
    }, {
        "id": 186,
        "title": "Yemen"
    }, {
        "id": 142,
        "title": "Zambia"
    }, {
        "id": 253,
        "title": "Zanzibar"
    }, {
        "id": 187,
        "title": "Zimbabwe"
    }];
    
    describe('list', () => {
        it('Should return correct result', async () => {
            await expect(list()).resolves.toEqual(response);
        });
    });
});
