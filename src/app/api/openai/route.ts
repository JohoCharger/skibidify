import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(request: Request) {
    const text = await request.text();

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: process.env.ASSISTANT!
            },
            {
                role: "user",
                content: text
            }
        ],
        model: "gpt-4o",
    });

    const answer = completion.choices[0].message.content;

    return new Response(JSON.stringify({text: answer}), {status: 200});
}