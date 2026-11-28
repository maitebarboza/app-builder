import { Groq } from "groq-sdk";
import "dotenv/config";

const groq = new Groq();
const userPrompt = "Create a simple calculator web application";
const prompt = `
You are the PLANNER agent. Convert the user prompt into a COMPLETE engineering project plan

User request: ${userPrompt}
`;

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
      "schema": {
        "type": "object",
        "properties": {
          "name": { 
            "type": "string",
            "description": "The name of app to be built"
          },
          "description": { 
            "type": "string",
            "description": "A oneline description of the app to be built, e.g. 'A web application for managing personal finances'"
          },
          "techstack": { 
            "type": "string",
            "description": "The tech stack to be used for the app, e.g. 'python', 'javascript', 'react', 'flask', etc."
          },
          "features": {
            "type": "array",
            "description": "A list of features that the app should have, e.g. 'user authentication', 'data visualization', etc.",
            "items": { "type": "string" }
          },
          "files": {
            "type": "array",
            "description": "A list of files to be created, each with a 'path' and 'purpose'",
            "items": {
              "type": "object",
              "properties": {
                "path": { 
                  "type": "string",
                  "description": "The path to the file to be created or modified"
                },
                "purpose": { 
                  "type": "string",
                  "description": "The purpose of the file, e.g. 'main application logic', 'data processing module', etc."
                }
              },
              "required": ["path", "purpose"],
              "additionalProperties": false
            }
          }
        },
        "required": ["name", "description", "techstack", "features", "files"],
        "additionalProperties": false
      }
    }
  }
});

const response = JSON.parse(
  chatCompletion.choices[0]?.message.content!
);

console.log(response);