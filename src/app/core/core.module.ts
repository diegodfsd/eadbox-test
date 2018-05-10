import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
    MatProgressBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

import { NavbarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

import { ProgressBarService } from './services/progress-bar.service';

import { ProgressInterceptor } from './interceptors/progress.interceptor';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent,
    SearchBarComponent,
    FlexLayoutModule
  ],
  declarations: [
    NavbarComponent,
    SearchBarComponent
  ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                ProgressBarService,
                LoggerService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: ProgressInterceptor,
                    deps: [ProgressBarService],
                    multi: true
                }
            ]
        };
    }
}
