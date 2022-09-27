import DB from "./db";

function addChannelTranslation(channel: string, creatorId: Number) {
        const db = DB.createConnection();
        db.all('SELECT * FROM channels', (err: any, rows: any) => {
            
            if (err) throw err;
            console.log(rows)
        });
        
    }


addChannelTranslation('12', 12)