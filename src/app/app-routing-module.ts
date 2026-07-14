import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './Components/layout/layout';
import { Home } from './Components/home/home';
import { ServicesComponent } from './Components/services/services.component';
import { ProductsComponent } from './Components/products/products.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { QuoteComponent } from './Components/quote/quote.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  {
    path: '', component: Layout, children: [
      { path:'home', component: Home },
      { path:'privacy', component: PrivacyPolicyComponent },
      { path:'services', component: ServicesComponent },
      { path:'products', component: ProductsComponent }, 
      { path:'about', component: AboutUsComponent },
      { path:'contact', component: ContactComponent },
      { path:'Quote', component: QuoteComponent },
    ]
  },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
   scrollPositionRestoration: 'enabled',
   anchorScrolling: 'enabled', 
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
