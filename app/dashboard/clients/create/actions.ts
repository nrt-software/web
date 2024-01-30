import { schema } from "./schema";

const initialState = {
  message: "",
};

export async function create(
  prevState: typeof initialState | null,
  formData: FormData
) {
  const name = formData.get("message");
  console.log("all", formData.values());
  const validatedFields = schema.safeParse({ name });

  if (!validatedFields.success) {
    return {
      message: `error: ${validatedFields.error.flatten().fieldErrors.name}`,
    };
  }

  console.log('formData.get("message")', formData.get("message"));

  // e.g. insert to DB
  await fetch("/clients");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: `success: ${formData.get("message")}`,
  };
}
