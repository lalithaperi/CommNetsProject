import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatButtonModule,MatToolbarModule, MatDatepickerModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatDatepickerModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class CustomMaterialModule { }