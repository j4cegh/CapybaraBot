import { Message } from "discord.js";

export abstract class Command {
    abstract run(message: Message<boolean>, args: string[]) : void;
}