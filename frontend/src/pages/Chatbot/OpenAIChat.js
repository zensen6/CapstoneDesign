
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default async function OpenAIChat({ question, text }) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "The following is a conversation with an AI psychological counselor. The assistant is kind, clever, and very friendly.\n\n"+question+"Human: "+text+"\nAI: ",
        temperature: 0.9,
        max_tokens: 500,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });
    console.log(completion.data.choices);
    return completion.data.choices[0].text;
}