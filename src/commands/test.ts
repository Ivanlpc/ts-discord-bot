import { SlashCommandBuilder } from '@discordjs/builders'
import Command from '../structures/Command';
import { Client, CommandInteraction } from 'discord.js';

    const data = new SlashCommandBuilder()
        .setName('test')
        .setDescription('test')
        .addStringOption(option =>
            option.setName('test')
                .setDescription('test')
                .setRequired(true));

    const enabled: boolean = true;
    
    async function execute(client: Client,  interaction: CommandInteraction): Promise<void> {
        interaction.reply({
            content:'Bot is working!'
        })
    }


const command = new Command(data, enabled, execute);
export {command} 
