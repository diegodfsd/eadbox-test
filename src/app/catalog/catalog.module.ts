import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
} from '@angular/material';

import { CoreModule } from '../core/core.module';

import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    CoreModule
  ],
  declarations: [
    CatalogComponent
  ],
  exports: [
    CatalogComponent
  ],
  providers: [
    CatalogService
  ]
})

export class CatalogModule {
}
