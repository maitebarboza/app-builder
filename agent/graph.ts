import { Groq } from "groq-sdk";
import "dotenv/config";

const groq = new Groq();

const chatCompletion = await groq.chat.completions.create({
  "messages": [
    {
      "role": "user",
      "content": "List all South American presidents inside a JSON object containing a presidents array."
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
      "schema": {
        "type": "object",
        "properties": {
          "presidents": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": { "type": "string" },
                "country": { "type": "string" }
              },
              "required": ["name", "country"],
              "additionalProperties": false
            }
          }
        },
        "required": ["presidents"],
        "additionalProperties": false
      }
    }
  }
});

const response = JSON.parse(
  chatCompletion.choices[0]?.message.content!
);

console.log(response);