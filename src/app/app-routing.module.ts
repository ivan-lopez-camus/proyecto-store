import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminGuard } from './admin.guard';

import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch:'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
      },
      {
        path: 'contact',
        canActivate:[AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(m=>m.ContactModule)
      },
      {
        path: 'order',
        canActivate:[AdminGuard],
        loadChildren: () => import('./order/order.module').then(m=>m.OrderModule)
      },
      {
        path: 'demo',
        canActivate:[AdminGuard],
        loadChildren: () => import('./demo/demo.module').then(m=>m.DemoModule)
      },
    ]
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m=>m.AdminModule)
  },
  
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
