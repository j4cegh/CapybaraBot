import { Client, Intents } from 'discord.js';
import { CapybaraBot } from './CapybaraBot';

import * as dotenv from 'dotenv';
dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}!`);
});


client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const command = message.content.split(" ")[0].substring(1);
    const args = message.content.split(" ").slice(1);

    if (message.content.startsWith("!")) {
        if (CapybaraBot.commands[command]) {
            const commandInstance = CapybaraBot.commands[command];
            commandInstance.run(message, args);
        }
    }
})

client.login(process.env.TOKEN);