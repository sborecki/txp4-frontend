import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SlotsComponent } from './slots/slots.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

import { PlayerService } from './player.service';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    SlotsComponent,
    ToolbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
