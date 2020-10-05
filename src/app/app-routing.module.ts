import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VehicleDetailsComponent } from "./components/vehicle-details/vehicle-details.component";
import { VehicleListFilterComponent } from "./components/vehicle-list-filter/vehicle-list-filter.component";
import { VehicleListItemComponent } from "./components/vehicle-list-item/vehicle-list-item.component";
import { VehicleAddComponent } from "./screens/vehicle-add/vehicle-add.component";
import { VehicleListComponent } from "./screens/vehicle-list/vehicle-list.component";
import { VehicleSearchComponent } from "./screens/vehicle-search/vehicle-search.component";

const routes: Routes = [
  { path: "", component: VehicleListComponent },
  // { path: "", component: VehicleSearchComponent },
  { path: "vehicle-add", component: VehicleAddComponent },
  { path: "vehicle-list", component: VehicleListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
