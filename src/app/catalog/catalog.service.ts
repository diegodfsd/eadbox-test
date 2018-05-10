import { Observable, empty } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { environment } from '../../environments/environment';

import { LoggerService } from '../core/services/logger.service';

@Injectable()
export class CatalogService {
    constructor(private http: HttpClient,
        private loggerService: LoggerService,
        private snackBar: MatSnackBar) { }

    getCourses(page: number): Observable<any> {
        const url = `${environment.API_BASE_URL}/search?page=${page}`;
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.get(url, {
            headers: headers,
        }).pipe(catchError((error: any, caught: any) => this.handleError(error, caught)));
    }

    private handleError(error: any, caught: any): Observable<any> {
        this.loggerService.error(`request failed with error: ${error.message}`);
        this.openSnackBar('Error', 'Ops! Não foi possível atender sua solicitação.');

        return empty();
    }

    private openSnackBar(type: string, message: string): void {
        const config: any = new MatSnackBarConfig();
        config.duration = 3000;

        this.snackBar.open(message, type, config);
    }
}
