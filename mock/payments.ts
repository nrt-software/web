import { faker } from "@faker-js/faker/locale/pt_BR";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

const generateSampleDataPayment = (count: number): Promise<Payment[]> => {
  return new Promise((resolve) => {
    const data: Payment[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: Payment = {
        id: faker.string.uuid(),
        amount: Number(faker.finance.amount(10, 5000)),
        status: "pending",
        email: faker.internet.email(),
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default generateSampleDataPayment;
