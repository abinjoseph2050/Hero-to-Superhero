import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablesComponent } from './promises-observables/observables/observables.component';
import { PromisesComponent } from './promises-observables/promises/promises.component';
import { RouteAboutComponent } from './route-guard/route-about/route-about.component';
import { RouteAccessDeniedComponent } from './route-guard/route-access-denied/route-access-denied.component';
import { RouteAdminComponent } from './route-guard/route-admin/route-admin.component';
import { RouteContactComponent } from './route-guard/route-contact/route-contact.component';
import { RouteEditAboutComponent } from './route-guard/route-edit-about/route-edit-about.component';
import { RouteHomeComponent } from './route-guard/route-home/route-home.component';
import { RouteNotFoundComponent } from './route-guard/route-not-found/route-not-found.component';
import { RouteProductsComponent } from './route-guard/route-products/route-products.component';
import { AuthGuard } from './services/auth.guard';
import { ModuleGuard } from './services/module.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ResolveGuard } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';
//route guard
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: RouteHomeComponent },
  // {
  //   path: 'about',
  //   component: RouteAboutComponent,
  //   canActivateChild: [RoleGuard],
  //   children: [{ path: 'edit', component: RouteEditAboutComponent }],
  // },

  // { path: 'admin', component: RouteAdminComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'contact',
  //   canDeactivate: [NotCompleteGuard],
  //   component: RouteContactComponent,
  // },
  // { path: 'home', component: RouteHomeComponent },
  // { path: 'not-found', component: RouteNotFoundComponent },
  // {
  //   path: 'offers',
  //   canLoad: [ModuleGuard],
  //   loadChildren: () =>
  //     import('./route-offers/route-offers.module').then(
  //       (m) => m.RouteOffersModule
  //     ),
  // },

  // {
  //   path: 'products',
  //   resolve: { data: ResolveGuard },
  //   component: RouteProductsComponent,
  // },

  // { path: 'access-denied', component: RouteAccessDeniedComponent },
  // { path: '**', component: RouteAccessDeniedComponent },

  //Observables and promises
  { path: 'promises', component: PromisesComponent },
  { path: 'observables', component: ObservablesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
