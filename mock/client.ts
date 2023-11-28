import { faker } from "@faker-js/faker";

export interface ClientData {
  email: string;
  id: string;
  name: string;
  phone: string;
  businessPhoneNumberId: number;
  createdAt: string;
  updatedAt: string;
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
        businessPhoneNumberId: i,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
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
