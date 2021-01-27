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
import { EmployeeSearchComponent } from "./components/employee/employee-search/employee-search.component";
import { EmployeeAddComponent } from "./components/employee/employee-add/employee-add.component";
import { EmployeeDetailsComponent } from "./components/popups/employee-details/employee-details.component";
import { EmployeeListItemComponent } from "./components/employee/employee-list-item/employee-list-item.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { EmployeeService } from './services/employee.service';
import { ExistingEmailDirective } from './directives/existing-email.directive';
import { RentDateItemComponent } from './components/vehicle/rent-date-item/rent-date-item.component';
import { RentDateListComponent } from './components/vehicle/rent-date-list/rent-date-list.component';

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
    EmployeeSearchComponent,
    EmployeeAddComponent,
    EmployeeDetailsComponent,
    EmployeeListItemComponent,
    MatchPasswordDirective,
    ExistingEmailDirective,
    RentDateItemComponent,
    RentDateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents: [VehicleDetailsComponent, EmployeeDetailsComponent],
})
export class AppModule {}
