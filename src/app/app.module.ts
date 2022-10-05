import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { ContactComponent } from './components/contact/contact.component';
//import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmergingTechComponent } from './components/browse/emerging-tech/emerging-tech.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AddOpportunityModule } from './components/opportunity/add-opportunity.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    SearchbarComponent,
    EmergingTechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AddOpportunityModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
