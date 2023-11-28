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
        id: "728ed52f" + i,
        amount: 100 + i,
        status: "pending",
        email: "m@example.com" + i,
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default generateSampleDataPayment;
