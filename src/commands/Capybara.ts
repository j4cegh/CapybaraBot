import { Message, MessageEmbed } from "discord.js";
import { Command } from "../Command";
import { CapybaraBot } from "../CapybaraBot";

export class Capybara extends Command {
    run(message: Message<boolean>, args: string[]) : void {
        var bara = CapybaraBot.getRandomBara();

        const embed = new MessageEmbed()
            .setTitle("Capybara")
            .setDescription("Here's a capybara!")
            .setImage(bara)
            .setColor("#0099ff")
            .setTimestamp();
        
        message.channel.send({
            embeds: [
                embed
            ]
        });
    }
}