import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This reads the API key from your environment variables
});

export async function POST(request) {
  const body = await request.json();
  const { message, user_id } = body;

  // You can add custom instructions or context for the LLM here
  const systemMessage = {
    role: "system",
    content: "You are a helpful assistant. Provide concise and friendly responses."
  };

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can change the model here if needed
      messages: [
        systemMessage, // This sets the behavior of the AI
        { role: "user", content: message } // This is the user's input
      ],
      // You can add more parameters here to control the LLM's behavior
      // For example:
      // temperature: 0.7,
      // max_tokens: 150,
    });

    const botResponse = completion.choices[0].message.content;

    // Here you could log the interaction or save it to a database
    console.log(`User ${user_id} sent: ${message}`);
    console.log(`Bot responded: ${botResponse}`);

    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error('OpenAI API error:', error);
    return NextResponse.json({ error: 'An error occurred while processing your request.' }, { status: 500 });
  }
}