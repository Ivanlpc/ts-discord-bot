import Event from '../structures/Event';
import config from '../../config.json';
import { client } from "..";
import {  BaseInteraction } from 'discord.js';


const event = new Event('interactionCreate', async (interaction : BaseInteraction): Promise<void> => {

    if (interaction.isChatInputCommand()) {
        let command = client.getCommand(interaction.commandName)
        if (!command) return
        try {
            await command.execute(client, interaction)
        } catch (e) {
            interaction.reply({
                content: config.lang.error.command_error,
                ephemeral: true
            })
            
        }
    }

})
export { event }