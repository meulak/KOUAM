
import { GoogleGenAI, Type } from "@google/genai";
import { DailyReflection } from "../types";

/**
 * Récupère le message pastoral du jour.
 * Si la clé API est absente ou si l'appel échoue, retourne un message de secours.
 */
export const getDailyReflection = async (): Promise<DailyReflection> => {
  const fallback: DailyReflection = {
    verse: "Le Seigneur est mon berger, je ne manque de rien.",
    reference: "Psaume 23, 1",
    reflection: "Chers paroissiens, rappelons-nous que Dieu veille sur chacun de nous avec l'amour d'un père. En ce jour, que Sa paix habite vos cœurs et vos maisons de Bonamotongo.",
    prayer: "Seigneur, guide les familles de notre paroisse sur le chemin de la fraternité et de la foi. Amen."
  };

  // Vérification de sécurité pour ne pas stopper l'application
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key non définie. Utilisation du message pastoral par défaut.");
    return fallback;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Tu es le curé Abbé Etienne BAKABA de la paroisse Saint Paul VI de Bonamotongo. Rédige 'Le mot du curé' pour aujourd'hui, un message pastoral encourageant pour tes paroissiens basé sur la liturgie du jour. Inclus un verset biblique central, sa référence, ton message pastoral court (maximum 3 phrases), et une prière finale.",
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
    console.error("Erreur lors de la récupération de la réflexion via Gemini:", error);
    return fallback;
  }
};

/**
 * Gère la discussion avec l'assistant IA (Abbé Etienne).
 * Si la clé API est absente, informe poliment l'utilisateur.
 */
export const chatWithAbbe = async (message: string, history: any[]) => {
  if (!process.env.API_KEY) {
    console.warn("Gemini API Key non définie. Le chat ne peut pas être initialisé.");
    return "La paix soit avec vous. Malheureusement, ma connexion spirituelle via ce canal est momentanément indisponible (clé API non configurée). N'hésitez pas à venir me voir au secrétariat de la paroisse !";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "Tu es l'Abbé Etienne BAKABA, le curé de la Paroisse Saint Paul VI de Bonamotongo. Tu es bienveillant, sage et tu aides les paroissiens avec des questions sur la foi, les horaires de la paroisse, ou le catéchisme. Parle avec douceur et autorité spirituelle. La paroisse se situe à Bonamotongo, Douala.",
      }
    });

    const response = await chat.sendMessage({ message });
    return response.text || "Pardonnez-moi, je n'ai pas bien saisi. Pouvez-vous reformuler votre pensée ?";
  } catch (error) {
    console.error("Erreur Chat Gemini:", error);
    return "Une petite difficulté technique nous sépare momentanément. Confions cela au Seigneur et réessayons dans un instant.";
  }
};
