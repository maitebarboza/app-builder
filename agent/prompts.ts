export const plannerPrompt = (userPrompt: string) => `
You are the PLANNER agent. Convert the user prompt into a COMPLETE engineering project plan

User request: ${userPrompt}
`;