export default async function chatWithLlama(prompt) {
  const MODEL_NAME = "llama3-70b-8192";

  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || "API request failed");
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "No response";
  } catch (error) {
    console.error("Groq API Error:", error);
    return `Error: ${error.message}`;
  }
}
