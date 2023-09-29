import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteOffersComponent } from './route-offers.component';

const routes: Routes = [{ path: '', component: RouteOffersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteOffersRoutingModule {}
