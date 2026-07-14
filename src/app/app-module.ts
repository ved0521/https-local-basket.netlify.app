import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from './app-routing-module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CommonModule } from '@angular/common'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import { Shell } from './Components/shell/shell';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Home } from './Components/home/home';
import { Layout } from './Components/layout/layout';
import { ServicesComponent } from './Components/services/services.component';
import { ProductsComponent } from './Components/products/products.component';
import { ContactComponent } from './Components/contact/contact.component';
import { PrivacyPolicyComponent } from './Components/privacy-policy/privacy-policy.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';

@NgModule({
  declarations: [
   Shell,
   Layout,
   Header,
   Footer,
    Home,
  ],

  imports: [
  HttpClientModule,
   BrowserModule,
    ProductsComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule ,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDividerModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatBottomSheetModule,

    // Standalone components must go here
    ServicesComponent,
    ProductsComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    AboutUsComponent,
],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [Shell]
})
export class AppModule { }
