import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { OpportunityComponent } from './opportunity/opportunity.component';



@NgModule({
  declarations: [
    OpportunityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    OpportunityComponent
  ]
})
export class AddOpportunityModule { }
