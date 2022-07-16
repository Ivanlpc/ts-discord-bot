import { Client, CommandInteraction } from 'discord.js';
export default class Command {

    private data: object
    private enabled: boolean
    public execute: (client: Client, interaction: CommandInteraction) => Promise<void>

    constructor(data: object, enabled: boolean, execute: (client: Client, interaction: CommandInteraction) => Promise<void>) {
        this.data = data;
        this.enabled = enabled;
        this.execute = execute;
    }

    public getData() {
        return this.data;
    }

    public getEnabled() {
        return this.enabled;
    }
    
}

