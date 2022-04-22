import { NgModule, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverviewComponent } from './overview/overview.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CustomMaterialModule} from "./core/material.module";
import { MqttServiceService } from './mqtt-service.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule, MatSpinner } from "@angular/material/progress-spinner";
import { MatSelectModule} from '@angular/material/select';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'localhost',
  port: 9001,
  path: '/mqtt'
}
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OverviewComponent,
    ConfigurationComponent,
    StatisticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
    ScrollingModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSelectModule
   
  ],
  providers: [MqttServiceService],
  bootstrap: [AppComponent],

})
export class AppModule
 {
  }

  
 
