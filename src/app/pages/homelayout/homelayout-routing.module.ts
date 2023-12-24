import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomelayoutPage } from './homelayout.page';

const routes: Routes = [
  {
    path: '',
    component: HomelayoutPage,
    children: [
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: "search",
        loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: "profile",
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: "categories",
        loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomelayoutPageRoutingModule { }
