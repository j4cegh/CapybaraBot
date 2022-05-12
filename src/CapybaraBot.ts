import { TextChannel, MessageEmbed } from "discord.js";
import * as fs from "fs";
import { Command } from './commands/Command';
import { Capybara } from './commands/Capybara';
import { BaraProcess } from './commands/BaraProcess';
import { Help } from './commands/Help';

export class CapybaraBot {
    static baraFacts : string[] = [
        "Capybaras are the world’s biggest rodent.",
        "Capybaras are closely related to guinea pigs.",
        "Capybaras are semi-aquatic mammals.",
        "Capybaras can sleep in water.",
        "Capybaras can run as fast as 35 kph.",
        "Capybaras' teeth grow constantly.",
        "Capybaras are extremely picky eaters.",
        "Other animals love sitting on Capybaras.",
        "In some places Capybaras are threatened.",
        "Capybaras are occasionally kept as pets."
    ];
    
    static commands: { [key: string]: Command } = {
        "capybara": new Capybara(),
        "baraprocess": new BaraProcess(),
        "help": new Help()
    }

    static baras : string = fs.readFileSync(`baras.txt`, "utf8");

    static baraProcesses : Array<string> = [];

    static getRandomBara() : string {
        const barasArray = this.baras.split("\n");
        const randomBara = barasArray[Math.floor(Math.random() * barasArray.length)];
        return randomBara;
    }
    
    static getRandomBaraFact() : string {
        const randomBaraFact = this.baraFacts[Math.floor(Math.random() * this.baraFacts.length)];
        return randomBaraFact;
    }
    
    static sendRandomBara(channel: TextChannel) : void {
        var randomBara = this.getRandomBara();
        var randomBaraFact = this.getRandomBaraFact();
    
        const embed = new MessageEmbed()
            .setTitle("Capybara")
            .setDescription(randomBaraFact)
            .setColor("#0099ff")
            .setImage(randomBara)
            .setTimestamp()
        
        channel.send({
            embeds: [ embed ]
        });
    }
}