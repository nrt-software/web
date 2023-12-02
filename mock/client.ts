import { faker } from "@faker-js/faker";

export interface ClientData {
  email: string;
  id: string;
  name: string;
  phone: string;
  businessPhoneNumberId: number;
  createdAt: Date;
  updatedAt: Date;
}

const generateClientData = (count: number): Promise<ClientData[]> => {
  return new Promise((resolve) => {
    const data: ClientData[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: ClientData = {
        id: faker.string.uuid(),
        email: faker.internet.email(),
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        businessPhoneNumberId: faker.number.int({ max: 99999, min: 1 }),
        createdAt: faker.date.anytime(),
        updatedAt: faker.date.anytime(),
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getClientById = async (id: string) => {
  const data = await generateClientData(40);

  return data.find((client) => client.id === id);
};

export default generateClientData;
