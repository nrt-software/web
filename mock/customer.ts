import { faker } from "@faker-js/faker/locale/pt_BR";

export interface CustomerData {
  id: string;
  customer_name: string;
  customer_phone: string;
}

const generateCustomerData = (count: number): Promise<CustomerData[]> => {
  return new Promise((resolve) => {
    const data: CustomerData[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: CustomerData = {
        id: faker.string.uuid(),
        customer_name: faker.person.fullName(),
        customer_phone: faker.phone.number(),
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const getClientById = async (id: string) => {
  const data = await generateCustomerData(40);

  return data.find((client) => client.id === id);
};

export default generateCustomerData;
