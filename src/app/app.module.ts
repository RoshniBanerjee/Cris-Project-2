import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntegrationTableComponent } from './integration-table/integration-table.component';
import { ReadIntegrationDataComponent } from './read-integration-data/read-integration-data.component';

@NgModule({
  declarations: [
    AppComponent,
    IntegrationTableComponent,
    ReadIntegrationDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

