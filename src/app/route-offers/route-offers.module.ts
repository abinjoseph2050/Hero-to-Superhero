import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteOffersComponent } from './route-offers.component';
import { RouteOffersRoutingModule } from './route-offers.routing.module';

@NgModule({
  declarations: [RouteOffersComponent],
  imports: [CommonModule, RouteOffersRoutingModule],
})
export class RouteOffersModule {}
