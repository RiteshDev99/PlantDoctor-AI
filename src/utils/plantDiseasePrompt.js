export const Plant_ANALYSIS_PROMPT = `
Analyze this plant leaf image and provide a detailed diagnosis in JSON format.

Return ONLY a JSON object with this exact structure:
{
  "diagnosis": {
    "confidence": 95,
    "disease": "Disease Name",
    "description": "Brief description of the disease"
  },
  "treatments": [
    {
      "icon": "leaf",
      "iconType": "material",
      "title": "Treatment Name",
      "description": "Detailed treatment instructions"
    }
  ]
}

Available icon names:
- For iconType "material": leaf, water, sprout, bug, etc.
- For iconType "ionicons": flask, shield-checkmark, warning, checkmark-circle, etc.

Provide 2-4 treatment options including organic, chemical, and prevention methods.
`;