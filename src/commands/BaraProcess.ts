import { Message, MessageEmbed, TextChannel } from "discord.js";
import { Command } from "./Command";
import { CapybaraBot } from "../CapybaraBot";

export class BaraProcess extends Command {
    run(message: Message<boolean>, args: string[]) : void {
        if (message.author.id != "846682108054732821" && message.author.id != "825023609831292948")
        {
            message.channel.send("You can't start the bara process!");
            return;
        }
        
        if (CapybaraBot.baraProcesses.includes(message.channel.id)) {
            message.channel.send("Already running a bara process in this channel!");
            return;
        }

        const embed = new MessageEmbed()
            .setTitle("Bara Process")
            .setDescription(`Welcome to the bara process. This will send a random capybara every [specified or 30] minutes in this channel.`)
            .setColor("#0099ff")
            .setTimestamp();

        message.channel.send({
            embeds: [
                embed
            ]
        });

        CapybaraBot.baraProcesses.push(message.channel.id);

        CapybaraBot.sendRandomBara(message.channel as TextChannel);
        
        var time = parseInt(args[0]) || 30;

        setInterval(() => {
            CapybaraBot.sendRandomBara(message.channel as TextChannel);
        }, 1000 * 60 * time);
    }
}