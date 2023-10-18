export interface SampleData {
  email: string;
  name: string;
  phone: string;
  businessPhoneNumberId: number;
  createdAt: string;
  updatedAt: string;
}

const generateSampleData = (count: number): Promise<SampleData[]> => {
  return new Promise((resolve) => {
    const data: SampleData[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: SampleData = {
        email: `email${i}@example.com`,
        name: `User ${i}`,
        phone: `123-456-789${i.toString().padStart(2, "0")}`,
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

export default generateSampleData;
