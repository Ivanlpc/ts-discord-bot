import Event from '../structures/Event';
import { NonThreadGuildBasedChannel } from 'discord.js';

const event = new Event('channelCreate', async ( channel: NonThreadGuildBasedChannel): Promise<void> => {
    if(channel.isText()){
        channel.sendTyping();
        
        
    }
})
export { event }