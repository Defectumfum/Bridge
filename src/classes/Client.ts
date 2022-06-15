import { Client, ClientOptions, Collection } from "discord.js";
import { Command } from "../interfaces/DiscordCommand";

export default class Discord extends Client {
	commands: Collection<string, Command> = new Collection();

	constructor(options: ClientOptions) {
		super(options);
	}
}
