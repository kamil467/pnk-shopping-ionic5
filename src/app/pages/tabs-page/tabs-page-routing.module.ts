import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { MarketplacePage } from '../marketplace/marketplace';
import { CategoryListPage } from '../product-category/category';
import { MyOrderPage } from '../my-order/order';
import { SupportPage } from '../support/support';
import { ImagepreloaderDirective } from '../../directive/imagepreloader.directive';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'schedule',
        children: [
          {
            path: '', 
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
       {
        path: 'market',
        children: [
          {
            path: '',
            component: MarketplacePage,
          },
          {
            path:'shoplist/:categoryCode',
            loadChildren:() => import('../shop-list/shoplist.module').then(m=> m.ShopListModule)
         
          },
              {
                path:'product-category-list/:storeCode/:shopName',
                loadChildren:() => import ('../product-category/category.module').then(m => m.CategoryModule)
             },

              {
                path:'product-list/:productCategoryCode/:storeCode/:categoryName',
                loadChildren:() => import ('../product-list/product-list.module').then(m => m.ProductListModule)
             }
             ,
              {
                path:'my-basket',
                loadChildren:() => import ('../my-basket/basket.module').then(m => m.BasketPageModule)
             }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../phone-login/phone-login.module').then(m => m.PhoneLoginPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
     {
        path: 'myorder',
        children: [
          {
            path: '',
            component: MyOrderPage,
          }
        ]
      },
      {
        path: 'support',
        children: [
          {
            path: '',
           loadChildren:() => import("../support/support.module").then(m => m.SupportModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

