import { Component, Input, OnInit,ElementRef } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service/modal.service.module';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  //providers: [ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalID = ''
  constructor(public modal:ModalService, public el: ElementRef) { 
    
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement)
  }
  closeModal(){
    this.modal.toggleModal(this.modalID)
  }
}
