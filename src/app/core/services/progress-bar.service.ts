import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class ProgressBarService {
    private requestsRunning = 0;

    public update: Subject<any> = new BehaviorSubject<string>('none');

    public increase(): void {
        this.requestsRunning++;

        if (this.requestsRunning === 1) {
            this.update.next('query');
        }
    }

    public decrease(): void {
        if (this.requestsRunning) {
            this.requestsRunning--;

            if (this.requestsRunning === 0) {
                this.update.next('none');
            }
        }
    }
}
