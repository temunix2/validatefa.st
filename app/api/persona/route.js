import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  const body = await request.json();
  const { message, user_id, persona, prompt } = body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content: message }
      ],
    });

    const personaResponse = completion.choices[0].message.content;

    // Here you could log the interaction or save it to a database
    console.log(`User ${user_id} sent to ${persona}: ${message}`);
    console.log(`Persona responded: ${personaResponse}`);

    return NextResponse.json({ response: personaResponse });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}