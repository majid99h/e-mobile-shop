import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "location",
        loadChildren: () =>
          import("./location/location.module").then(
            (m) => m.LocationPageModule
          ),
      },
      {
        path: "notification",
        loadChildren: () =>
          import("./notification/notification.module").then(
            (m) => m.NotificationPageModule
          ),
      },
      {
        path: "account",
        loadChildren: () =>
          import("./account/account.module").then((m) => m.AccountPageModule),
      },
    ],
  },

  {
    path: "",
    redirectTo: "tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
