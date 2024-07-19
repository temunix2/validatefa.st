import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function extractPersonaResponse(fullResponse) {
  const match = fullResponse.match(/<persona_response>([\s\S]*)<\/persona_response>/);
  return match ? match[1].trim() : fullResponse;
}

export async function POST(request) {
  const body = await request.json();
  const { message, user_id, persona, prompt, writerLevel } = body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: prompt },
        { role: "system", content: `The writer's level is: ${writerLevel}` },
        { role: "user", content: message }
      ],
    });

    const fullPersonaResponse = completion.choices[0].message.content;
    const filteredResponse = extractPersonaResponse(fullPersonaResponse);

    // Here you could log the interaction or save it to a database
    console.log(`User ${user_id} sent to ${persona}: ${message}`);
    console.log(`Persona responded: ${filteredResponse}`);

    return NextResponse.json({ response: filteredResponse });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}