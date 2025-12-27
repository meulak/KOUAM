
import { GoogleGenAI, Type } from "@google/genai";
import { DailyReflection } from "../types";

// Toujours utiliser process.env.API_KEY directement.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getDailyReflection = async (): Promise<DailyReflection> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Tu es le curé Abbé Etienne BAKABA de la paroisse Saint Paul VI de Bonamotongo. Rédige 'Le mot du curé' pour aujourd'hui, un message pastoral encourageant pour tes paroissiens basé sur la liturgie du jour. Inclus un verset biblique central, sa référence, ton message pastoral court, et une prière finale.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verse: { type: Type.STRING },
            reference: { type: Type.STRING },
            reflection: { type: Type.STRING },
            prayer: { type: Type.STRING }
          },
          required: ["verse", "reference", "reflection", "prayer"]
        }
      }
    });

    const jsonStr = response.text?.trim() || "{}";
    return JSON.parse(jsonStr) as DailyReflection;
  } catch (error) {
    console.error("Error fetching daily reflection:", error);
    return {
      verse: "Le Seigneur est mon berger, je ne manque de rien.",
      reference: "Psaume 23, 1",
      reflection: "Chers paroissiens, rappelons-nous que Dieu veille sur chacun de nous avec l'amour d'un père.",
      prayer: "Seigneur, guide les familles de Bonamotongo. Amen."
    };
  }
};

export const chatWithAbbe = async (message: string, history: any[]) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "Tu es l'Abbé Etienne BAKABA, le curé de la Paroisse Saint Paul VI de Bonamotongo. Tu es bienveillant, sage et tu aides les paroissiens avec des questions sur la foi, les horaires de la paroisse, ou le catéchisme. Parle avec douceur et autorité spirituelle. La paroisse se situe à Bonamotongo, Douala.",
    }
  });

  const response = await chat.sendMessage({ message });
  return response.text;
};
