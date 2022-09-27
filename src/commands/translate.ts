import { SlashCommandBuilder } from '@discordjs/builders'
import Command from '../structures/Command';
import { Client, ChatInputCommandInteraction, GuildMemberRoleManager, TextChannel, ActionRowBuilder, SelectMenuBuilder } from 'discord.js';
import config from '../../config.json'
import IChannel from '../structures/Interfaces/Channel';
import Channel from '../Resources/ChannelManager';

    const data = new SlashCommandBuilder()
        .setName(config.translate.command_options.name)
        .setDescription(config.translate.command_options.description)
        .addStringOption(option => option.setName('lang').setDescription(config.translate.command_options.language).setRequired(true)
                    .addChoices(
                        { name: 'Spanish', value: 'es' },
                        { name: 'English', value: 'en' }
                    ))

    const enabled: boolean = config.translate.enabled;
    
    async function execute(client: Client,  interaction: ChatInputCommandInteraction) {
        if(interaction.member?.roles instanceof GuildMemberRoleManager){
        if(!interaction.member?.roles.cache.has(config.permissions.translate)) return interaction.reply({content: config.lang.error.no_permission, ephemeral: true});
        }
        
        Channel.addChannelTranslation({
            id: interaction.channelId,
            name: "interaction.channel.name",
            status: true
        });

    }


const command = new Command(data, enabled, execute);
export {command} 
