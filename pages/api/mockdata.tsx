import { faker } from '@faker-js/faker';

export default (req: any, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { category: string; title: string; BgImage: string; description: string; escrowAmount: string; escrowGoal: string; escrowDeadline: Date; escrowStatus: string; escrowBackers: number; escrowBackersDetails: { name: string; userId: number; avatar: string; date: Date; status: string; amount: number; escrowId: number; }[]; escrowComments: { name: string; userId: number; avatar: string; date: Date; status: string; escrowId: number; comment: string; }[]; }[]): void; new(): any; }; }; }) =>  {
    const mockdata = [];
    const randomBackersDetails = faker.helpers.arrayElements([
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            amount: faker.number.int(),
            escrowId: faker.number.int(),
        },
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            amount: faker.number.int(),
            escrowId: faker.number.int(),
        },
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            amount: faker.number.int(),
            escrowId: faker.number.int(),
        },

    ]);
    const escrowComments = [
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            escrowId: faker.number.int(),
            comment: faker.lorem.paragraph(),
        },
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            escrowId: faker.number.int(),
            comment: faker.lorem.paragraph(),
        },
        {
            name: faker.person.fullName(),
            userId: faker.number.int(),
            avatar: faker.image.avatar(),
            date: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            status: faker.helpers.arrayElement(['active', 'inactive']),
            escrowId: faker.number.int(),
            comment: faker.lorem.paragraph(),
        },
    ];
    for (let i = 0; i < 20; i++) {
        mockdata.push({
            category: faker.helpers.arrayElement(['Movie', 'Music', 'Art', 'Technology', 'Food', 'Fashion', 'Games', 'Publishing', 'Design', 'Comics', 'Crafts', 'Theater', 'Photography', 'Journalism', 'Dance']),
            title: faker.lorem.words(),
            BgImage: faker.helpers.arrayElement([faker.image.url(), 'https://resourceboy.com/wp-content/uploads/2021/10/black-red-mma-fight-night-flyer-template-featuring-sparks-and-flames-thumbnail.jpg', 'https://slidechef.net/wp-content/uploads/2022/09/UFC-Fight-Night.jpg', 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fight-night-poster-video-flyer-template-design-59438897eb386ef5db4cf2c3228e9e3b_screen.jpg?ts=1636994222  ']),
            description: faker.lorem.paragraph(),
            escrowAmount: faker.finance.amount(),
            escrowGoal: faker.finance.amount(),
            escrowDeadline: faker.date.soon({ refDate: '2023-01-01T00:00:00.000Z' }),
            escrowStatus: faker.helpers.arrayElement(['active', 'inactive']),
            escrowBackers: faker.number.int(),
            escrowBackersDetails: randomBackersDetails,
            escrowComments: escrowComments,
            escrowId: faker.number.int(99999),
        });
    }
    // return mockdata;
    // console.log(mockdata);
    res.status(200).send(mockdata)
}
