import {config} from "dotenv"
config()
import OpenAI from "openai";

const openai = new OpenAI(
    {apiKey: process.env.OPENAI_API_KEY}
)
import readline from "readline"

const ui = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

ui.prompt()
ui.on("line", async input => {
    main(input)
})

async function main(input) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: input }],
        temperature: 1,
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message.content);
    ui.prompt()
}


//Could you give me a quick summary under 200 words on how good the anime Vinland Saga was and can you write it with lots of emotions and passion. You have to show me that you clearly have watched it, and how that you loved it.
