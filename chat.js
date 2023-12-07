const axios = require('axios');
const OpenAI = require('openai');
const url='https://api.openai.com/v1/chat/completions'



async function fetchData(){

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
    };

    const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: 'Say this is a test!' }],
        temperature: 0.7
    };


    const response=await axios.post(url,requestData,{
        headers: headers,
 
    })
    return response.data
}




const openai = new OpenAI();

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "Say this is a test" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

main();
