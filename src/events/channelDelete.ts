import { NonThreadGuildBasedChannel, DMChannel, Message } from 'discord.js';
import Event from '../structures/Event';
import ChannelManager from '../Resources/ChannelManager';
import config from '../../config.json';

const event = new Event('channelDelete', (channel : DMChannel | NonThreadGuildBasedChannel) => {

    if(channel.isTextBased() && !channel.isDMBased() && !channel.isVoiceBased() && channel.guildId === config.GUILD_ID){
        ChannelManager.removeChannelFromDB(channel.id);
    }

})

export {event}