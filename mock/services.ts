import { faker } from "@faker-js/faker/locale/pt_BR";

export interface ServiceData {
  id: string;
  name: string;
  description: string;
  price: string;
}

const generateServiceData = (count: number): Promise<ServiceData[]> => {
  return new Promise((resolve) => {
    const data: ServiceData[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: ServiceData = {
        id: faker.string.uuid(),
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        price: faker.finance.amount(),
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getClientById = async (id: string) => {
  const data = await generateServiceData(40);

  return data.find((client) => client.id === id);
};

export default generateServiceData;
