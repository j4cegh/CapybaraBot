import { Message, MessageEmbed } from "discord.js";
import { Command } from "../Command";

export class Help extends Command {
    run(message: Message<boolean>, args: string[]) : void {
        const embed = new MessageEmbed()
            .setTitle("Help")
            .setDescription("Here's a list of commands you can use!")
            .setColor("#0099ff")
            .setTimestamp()
            .addField("capybara", "Sends a random capybara.")
            .addField("baraprocess (dev/approved)", "Starts a bara process (sends a random capybara image every few minutes)");
        
        message.channel.send({
            embeds: [
                embed
            ]
        });
    }
}