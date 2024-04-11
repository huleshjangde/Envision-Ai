import { error } from "console";

export async function POST(request: Request) {
  const { prompt } = await request.json();

  console.log(process.env.DB_HOST);

  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(prompt),
    },
  );
  if (response.ok) {
    // Assuming the response contains image data in blob format
    const blob = await response.blob();
    // Create a URL for the blob object
    const imgUrl = URL.createObjectURL(blob);
    // Update the state with the image URL
    return Response.json(
      { fileName: blob },
      {
        status: 200,
      },
    );
  } else {
    return Response.json(
      { error: "failed to generate" },
      {
        status: 500,
      },
    );
  }
}
