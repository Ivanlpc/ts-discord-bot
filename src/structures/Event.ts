import { ClientEvents } from 'discord.js';
export default class Event<Key extends keyof ClientEvents>{

    private name: Key;

    public execute: (...args: ClientEvents[Key]) => any;

    public constructor(name: Key, execute:(...args: ClientEvents[Key]) => any){
        this.name = name;   
        this.execute = execute;
        
    }
    
    public getName(): Key {
        return this.name;
    }

    
}