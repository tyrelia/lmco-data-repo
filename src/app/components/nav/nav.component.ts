import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service/modal.service.module';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
  }

  openModal($event: Event){
    $event.preventDefault()

    this.modal.toggleModal('addOpp')
  }
  openModal2($event: Event){
    $event.preventDefault()

    this.modal.toggleModal('help')
  }
  openModal3($event: Event){
    $event.preventDefault()

    this.modal.toggleModal('about')
  }
  

}
