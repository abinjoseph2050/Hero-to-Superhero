import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { HighlightDirective } from './highlight.directive';
import { RouteAboutComponent } from './route-guard/route-about/route-about.component';
import { RouteAccessDeniedComponent } from './route-guard/route-access-denied/route-access-denied.component';
import { RouteAdminComponent } from './route-guard/route-admin/route-admin.component';
import { RouteContactComponent } from './route-guard/route-contact/route-contact.component';
import { RouteEditAboutComponent } from './route-guard/route-edit-about/route-edit-about.component';
import { RouteHeaderComponent } from './route-guard/route-header/route-header.component';
import { RouteHomeComponent } from './route-guard/route-home/route-home.component';
import { RouteNotFoundComponent } from './route-guard/route-not-found/route-not-found.component';
import { RouteProductsComponent } from './route-guard/route-products/route-products.component';
import { HomeComponent } from './promises-observables/home/home.component';
import { PromisesComponent } from './promises-observables/promises/promises.component';
import { ObservablesComponent } from './promises-observables/observables/observables.component';
import { HttpInterceptorComponent } from './http-interceptor/http-interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { TrackByComponent } from './track-by/track-by.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import { DirAssignmentComponent } from './dir-assignment/dir-assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    HighlightDirective,
    RouteAboutComponent,
    RouteAccessDeniedComponent,
    RouteAdminComponent,
    RouteContactComponent,
    RouteEditAboutComponent,
    RouteHeaderComponent,
    RouteHomeComponent,
    RouteNotFoundComponent,
    RouteProductsComponent,
    HomeComponent,
    PromisesComponent,
    ObservablesComponent,
    HttpInterceptorComponent,
    TrackByComponent,
    MapComponent,
    ServersComponent,
    ServerComponent,
    DirAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
