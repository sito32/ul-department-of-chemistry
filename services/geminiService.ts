import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key exists to prevent crashes in dev without key
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const chatWithChemist = async (message: string, history: string[]): Promise<string> => {
  if (!ai) {
    return "AI Assistant is not configured. Please check the API Key.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `You are an AI Lab Assistant for the Department of Chemistry at the University of Layyah, Pakistan. 
    Your goal is to help students with chemical concepts, lab safety procedures, and research summaries.
    - Be academic, professional, and encouraging.
    - Emphasize safety first. If a user asks about a dangerous reaction, prioritize safety warnings compliant with university protocols.
    - Keep answers concise suitable for a chat interface.
    - If you don't know, suggest they contact a faculty member or visit the admin office.`;

    const response = await ai.models.generateContent({
      model: model,
      contents: message, // For a simple chat, we just send the message. In a real app, we'd manage full history object structure.
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the molecular database right now.";
  }
};