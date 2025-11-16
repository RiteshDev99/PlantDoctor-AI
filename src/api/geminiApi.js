import {Plant_ANALYSIS_PROMPT} from "../utils/plantDiseasePrompt";

export async function ImageRecognitionWithGemini(base64Image, model = "gemini-2.0-flash") {
    try {
        const body = {
            contents: [
                {
                    parts: [
                        {
                            inline_data: {
                                mime_type: "image/jpeg",
                                data: base64Image, 
                            },
                        },
                        {
                            text: Plant_ANALYSIS_PROMPT,
                        },
                    ],
                },
            ],
        };

        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=AIzaSyAzxm-QOmi45-5jZChi-cco2izfDf2Nb2k`;

        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const json = await res.json();

        if (!json?.candidates?.[0]?.content?.parts) {
            console.error("Gemini API error:", json);
            return null;
        }

        const text = json.candidates[0].content.parts
            .map((p) => p.text || "")
            .join("")
            .trim();

        return text;
    } catch (error) {
        console.error("Gemini Plant Classification failed:", error);
        return null;
    }
}