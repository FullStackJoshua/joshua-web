import emailjs from "@emailjs/browser";

export async function POST(req: Request): Promise<Response> {
  try {
    const { name, email, message } = await req.json();

    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { name, email, message },
      process.env.EMAILJS_PUBLIC_KEY!
    );

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in API route:", error);

    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
