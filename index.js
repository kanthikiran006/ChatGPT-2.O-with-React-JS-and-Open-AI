// 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
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-HQMgbuwvXHEKPA0FzgO9WniK",
    apiKey: 
    "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",
});
const openai = new OpenAIApi(configuration);

async function callApi(){
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
    console.log(response.data.choices[0].text)
}

callApi()

// const express = require("express");
// const app = express();
// const port = 3000
// app.get("/", (req, res) => {
//         res.send('Hello World!')
// });
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// });
