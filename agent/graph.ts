import { Groq } from "groq-sdk";
import "dotenv/config";

const groq = new Groq();
let response = "";

const chatCompletion = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": "Who is the president of Brazil? Answer in 1 sentence."
    }
  ],
  "model": "openai/gpt-oss-120b",
  "temperature": 1,
  "max_completion_tokens": 2048,
  "top_p": 1,
  "stream": true,
  "reasoning_effort": "medium",
  "stop": null
});

for await (const chunk of chatCompletion) {
  response += chunk.choices[0]?.delta?.content || "";
}

console.log(response);