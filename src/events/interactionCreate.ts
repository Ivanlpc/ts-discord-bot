import Event from '../structures/Event';
import config from '../../config.json';
import { client } from "..";
import { Interaction } from 'discord.js';

const event = new Event('interactionCreate', async (interaction: Interaction): Promise<void> => {
    
    if (interaction.isCommand()) {
        let command = client.getCommand(interaction.commandName)
        if (!command) return
        try {
            await command.execute(client, interaction)
        } catch (e) {
            console.log(e);
            interaction.reply({
                content: config.error.command_error,
                ephemeral: true
            })
        }
    }

})
export { event }