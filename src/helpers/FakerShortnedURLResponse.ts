import { faker } from '@faker-js/faker'

export enum StatusLinksEnum {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED'
}

export enum StatusLinksLabelEnum {
    ACTIVE = 'Ativo',
    DISABLED = 'Desativado'
}

export type shortnedURLdataTP ={
    id: string,
    shortnedURL: string
    creationDate: Date
    amountOfClicks: number
    status: StatusLinksEnum
}


function createRandomShortnedUrlResponseData(): shortnedURLdataTP[] {
    const randomString = faker.string.alphanumeric(8);
    const shortenedURLBase = `https://short.ly/${randomString}`;

    const data: shortnedURLdataTP[] = []

    for(let i=0; i <=10; i++ ){
        data.push({
            amountOfClicks: faker.number.int({min:0, max: 1000}),
            creationDate: faker.date.anytime(),
            status: faker.helpers.enumValue(StatusLinksEnum),
            id: faker.string.uuid(),
            shortnedURL: shortenedURLBase
        })
    }

    return data
}

export { createRandomShortnedUrlResponseData }

