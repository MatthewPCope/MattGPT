import {  OpenAI } from 'openai'
const openai = new OpenAI({ apiKey : "",dangerouslyAllowBrowser: true})

export async function sendMsgToOpenAI(input) {
    const res = await openai.chat.completions.create({
        model: "gpt-4",
        messages:[{role: "user", content: input}],
        temperature: 0.7,
    })
    return res.choices[0].message.content
}
