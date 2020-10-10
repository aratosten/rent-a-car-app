import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserSearchComponent } from "./components/user/user-search/user-search.component";
import { VehicleAddComponent } from "./components/vehicle/screens/vehicle-add/vehicle-add.component";
import { VehicleListComponent } from "./components/vehicle/screens/vehicle-list/vehicle-list.component";
import { VehicleRentComponent } from "./components/vehicle/screens/vehicle-rent/vehicle-rent.component";
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
  { path: "vehicle-add", component: VehicleAddComponent },
  { path: "vehicle-list", component: VehicleListComponent },
  { path: "vehicle-rent", component: VehicleRentComponent },

  { path: "user-search", component: UserSearchComponent },
  { path: "user-add", component: UserSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
