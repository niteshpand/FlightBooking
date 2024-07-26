import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { FlightsComponent } from './pages/admin/flights/flights.component';
import { BookingComponent } from './pages/admin/booking/booking.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { CityComponent } from './pages/admin/city/city.component';
import { SearchComponent } from './pages/websites/search/search.component';
import { BookFlightComponent } from './pages/websites/book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    NewFlightComponent,
    FlightsComponent,
    BookingComponent,
    AirportComponent,
    CityComponent,
    SearchComponent,
    BookFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
