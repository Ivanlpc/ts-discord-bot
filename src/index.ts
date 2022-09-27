import path from 'path';
import fs from 'fs';
import config from '../config.json';
import Bot from "./structures/Client";
import { unhandledRejection, uncaughtException } from './Resources/Proccess';

const TOKEN: string = config.TOKEN;
const eventsPath: string = path.join(__dirname, 'events');
const eventsFile: string[] = fs.readdirSync(eventsPath).filter(file => file.endsWith('.ts'));
const commandsPath: string = path.join(__dirname, 'commands');
const commandsFile: string[] = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));
export const client = new Bot();

process.on('unhandledRejection', unhandledRejection);
process.on('uncaughtException', uncaughtException);

//Import events
for (const file of eventsFile) {
	let filePath = path.join(eventsPath, file);
	let {event} = require(filePath);
	client.on(event.getName(), event.execute);
	console.log("\u001b[32m", `[✔] Loaded ${event.getName()} Event`, "\u001b[0m")
}

//Import commands
if (commandsFile.length > 0) {
	for (const file of commandsFile) {
		let filePath = path.join(commandsPath, file);
		let {command} = require(filePath);
		if (command.getEnabled()) {
			client.pushCommand(command.getData().name, command)
			client.pushRestCommand(command.getData().toJSON());
			console.log("\u001b[32m", `[✔] Loaded /${command.getData().name} command`, "\u001b[0m")
		} else {
			console.log("\x1b[31m", `[X] Disabled /${command.getData().name} command`, "\u001b[0m")
		}
	}
}

client.login(TOKEN)