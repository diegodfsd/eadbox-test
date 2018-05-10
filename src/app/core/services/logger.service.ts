import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor() { }

    public log(message: string): void {
        // TODO: call a infrastructure to persist
        console.log(message);
    }

    public error(message: string, extras = {}): void {
        // TODO: call a infrastructure to persist
        console.error(message, extras);
    }
}
