import { faker } from "@faker-js/faker";

export interface ScheduleData {
  id: string;
  status: string;
  createdAt: Date;
  dateSchedule: Date;
}

const generateScheduleData = (count: number): Promise<ScheduleData[]> => {
  return new Promise((resolve) => {
    const data: ScheduleData[] = [];

    for (let i = 1; i <= count; i++) {
      const sampleItem: ScheduleData = {
        id: faker.string.uuid(),
        createdAt: faker.date.past(),
        status: "pending",
        dateSchedule: faker.date.future(),
      };

      data.push(sampleItem);
    }

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export default generateScheduleData;
