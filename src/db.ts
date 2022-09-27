const sqlite3 = require('sqlite3');
const { Database } = require('sqlite3')
export default class DB {

    static createConnection(): typeof Database {
        return new sqlite3.Database('database.db');
    }

    static createTables(): void {
        const db = this.createConnection();
        db.run(`CREATE TABLE IF NOT EXISTS 'channels'(
            channelId INT not null,
            channelName VARCHAR(255) not null,
            lang VARCHAR(4) not null,
            creatorId INT(255) not null
        )`, (err: Error) => {
            if (err) {
                throw Error;
            }
            else {
             
                console.log('Database is ready!');
            }
        })
    }

}
