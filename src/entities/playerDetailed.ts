interface SignedFrom {
    clubId: string;
    clubTitle: string;
    transferFee: string;
}

export interface PlayerDetailed {
    id: number;
    number: number;
    name: string;
    position: string;
    birthday: string;
    nationalities: string[];
    photoUrl: string;
    age: number;
    height: string;
    foot: string;
    joined: string;
    signedFrom: SignedFrom;
    contract: string;
    marketValue: string;
}

export const createPlayerDetailed = ({
    birthday = null,
    age = null,
    id = null,
    name = null,
    nationalities = [],
    number = null,
    photoUrl = null,
    position = null,
    height = null,
    foot = null,
    joined = null,
    signedFrom = null,
    contract = null,
    marketValue = null,
}: PlayerDetailed): PlayerDetailed => ({
    birthday,
    age,
    id,
    name,
    nationalities,
    number,
    photoUrl,
    position,
    height,
    foot,
    joined,
    signedFrom,
    contract,
    marketValue,
});
