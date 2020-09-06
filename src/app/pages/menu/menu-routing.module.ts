import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MenuPage } from "./menu.page";

const routes: Routes = [
  {
    path: "menu",
    component: MenuPage,
    children: [
      {
        path: "tabs",
        loadChildren: () =>
          import("../../pages/tabs/tabs.module").then((m) => m.TabsPageModule),
      },
      {
        path: "product",
        loadChildren: () =>
          import("../../pages/Application/product/product.module").then(
            (m) => m.ProductPageModule
          ),
      },
      {
        path: "product/:category",
        loadChildren: () =>
          import("../../pages/Application/product/product.module").then(
            (m) => m.ProductPageModule
          ),
      },
     
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
