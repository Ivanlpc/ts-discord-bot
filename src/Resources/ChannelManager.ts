import DB from "../db";
import IChannel from "../structures/Interfaces/Channel";

export default class ChannelManager {

    static addChannelTranslation(channel: IChannel): void {
        const db = DB.createConnection();
        db.run('INSERT INTO channels VALUES ($channelId, $channelName, $lang, 2)', {
            $channelId: channel.id,
            $channelName: channel.name,
            $lang: channel.lang
        }, (err: Error) => {
            if(err) throw err;
        })
    }

    static removeChannelFromDB(channelId: string) {
        const db = DB.createConnection();
        db.run('DELETE FROM channels WHERE channelId = $channelId', {
            $channelId: channelId
        }, (err: Error) => {
            if(err) throw err;
        })
    }

    static checkActiveChannel(channelId: string):Promise<IChannel> {
        return new Promise((resolve, reject) => {
            const db = DB.createConnection();
            db.get('SELECT * FROM channels WHERE channelId = $channelId', {
                $channelId: channelId
            }, (err: Error | null, rows: any) => {
                if (err) {
                    reject(err)
                } else {
                    if(!rows) return resolve({
                        status: false,
                        name: 'none',
                        id:  'none'
                    })
                    if(rows.length <= 0) return resolve({
                        status: false,
                        name: 'none',
                        id:  'none'

                    })

                    resolve({
                        status: true,
                        name: rows.name, 
                        id: rows.id,
                        lang: rows.lang
                    })
                }
            })
            db.close();
        })
        

    }
}


