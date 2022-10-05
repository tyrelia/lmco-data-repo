import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service/modal.service.module';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.forms('addOpp')
 
  }
  ngOnDestroy(): void {
    this.modal.unregister('addOpp')

  }

}
