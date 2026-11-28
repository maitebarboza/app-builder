import { Groq } from "groq-sdk";
import * as prompts from "./prompts.js";
import * as states from "./states.js";
import "dotenv/config";

const groq = new Groq();
const userPrompt = "Create a simple calculator web application";
const prompt = prompts.plannerPrompt(userPrompt);

const chatCompletion = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": prompt
    }
  ],
  "model": "openai/gpt-oss-120b",
  "temperature": 1,
  "max_completion_tokens": 2048,
  "top_p": 1,
  "stream": false,
  "reasoning_effort": "medium",
  "stop": null,
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "presidents",
      "strict": true,
      "schema": states.plan
    }
  }
});

const response = JSON.parse(
  chatCompletion.choices[0]?.message.content!
);

console.log(response);