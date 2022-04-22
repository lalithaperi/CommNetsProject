import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './configuration/configuration.component';
import { OverviewComponent } from './overview/overview.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
     {
        path: "",
        component: OverviewComponent

    },
    {
        path: "config",
        component: ConfigurationComponent
    },
    {
        path: "stats",
        component: StatisticsComponent,
       
    },
 
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
