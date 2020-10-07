import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VehicleSearchComponent } from "./screens/vehicle-search/vehicle-search.component";
import { VehicleAddComponent } from "./screens/vehicle-add/vehicle-add.component";
import { VehicleListComponent } from './screens/vehicle-list/vehicle-list.component';
import { VehicleListItemComponent } from './components/vehicle-list-item/vehicle-list-item.component';
import { VehicleListFilterComponent } from './components/vehicle-list-filter/vehicle-list-filter.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { LoginComponent } from './screens/login/login.component';

@NgModule({
  declarations: [AppComponent, VehicleSearchComponent, VehicleAddComponent, VehicleListComponent, VehicleListItemComponent, VehicleListFilterComponent, VehicleDetailsComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
