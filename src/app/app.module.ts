import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./screens/login/login.component";
import { VehicleRentComponent } from "./components/vehicle/screens/vehicle-rent/vehicle-rent.component";
import { VehicleDetailsComponent } from "./components/popups/vehicle-details/vehicle-details.component";
import { VehicleAddComponent } from "./components/vehicle/screens/vehicle-add/vehicle-add.component";
import { VehicleListComponent } from "./components/vehicle/screens/vehicle-list/vehicle-list.component";
import { VehicleSearchComponent } from "./components/vehicle/screens/vehicle-search/vehicle-search.component";
import { VehicleListFilterComponent } from "./components/vehicle/vehicle-list-filter/vehicle-list-filter.component";
import { VehicleListItemComponent } from "./components/vehicle/vehicle-list-item/vehicle-list-item.component";
import { UserSearchComponent } from "./components/user/user-search/user-search.component";
import { UserAddComponent } from "./components/user/user-add/user-add.component";
import { UserDetailsComponent } from "./components/popups/user-details/user-details.component";
import { UserListItemComponent } from "./components/user/user-list-item/user-list-item.component";

@NgModule({
  declarations: [
    AppComponent,
    VehicleSearchComponent,
    VehicleAddComponent,
    VehicleListComponent,
    VehicleListItemComponent,
    VehicleListFilterComponent,
    VehicleDetailsComponent,
    LoginComponent,
    VehicleRentComponent,
    UserSearchComponent,
    UserAddComponent,
    UserDetailsComponent,
    UserListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VehicleDetailsComponent, UserDetailsComponent],
})
export class AppModule {}
