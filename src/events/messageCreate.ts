import Event from '../structures/Event';
import { Message, TextChannel } from 'discord.js';
import IChannel from '../structures/Interfaces/Channel';
import ChannelManager from '../Resources/ChannelManager';
import config from '../../config.json';
import { client } from '..';

const event = new Event('messageCreate', async (message: Message<boolean>): Promise<void> => {
    if(message.author.id === client.user?.id) return;
    if (message.channel.isTextBased() && !message.channel.isDMBased() && message.guildId === config.GUILD_ID) {
        ChannelManager.checkActiveChannel(message.channelId).then((ch : IChannel) => {
            if (!ch.status) return
            console.log('traducir a ',ch.lang, ' el canal ', ch.id, ch.name)
        }).catch((err: Error) => {
            console.log(err)
        })
    }


})
export { event }
