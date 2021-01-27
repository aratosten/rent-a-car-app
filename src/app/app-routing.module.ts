import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeAddComponent } from "./components/employee/employee-add/employee-add.component";
import { EmployeeSearchComponent } from "./components/employee/employee-search/employee-search.component";
import { VehicleAddComponent } from "./components/vehicle/screens/vehicle-add/vehicle-add.component";
import { VehicleListComponent } from "./components/vehicle/screens/vehicle-list/vehicle-list.component";
import { VehicleRentComponent } from "./components/vehicle/screens/vehicle-rent/vehicle-rent.component";
import { VehicleSearchComponent } from "./components/vehicle/screens/vehicle-search/vehicle-search.component";
import { LoginComponent } from "./screens/login/login.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
  },
  { path: "vehicle-search", component: VehicleSearchComponent },
  { path: "vehicle-list", component: VehicleListComponent },
  { path: "vehicle-add", component: VehicleAddComponent },
  { path: "vehicle-rent", component: VehicleRentComponent },
  { path: "employee-search", component: EmployeeSearchComponent },
  { path: "user-add", component: EmployeeAddComponent },
  { path: "**", redirectTo: "login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
