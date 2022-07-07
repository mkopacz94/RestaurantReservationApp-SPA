import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from './directives/ModalDirective';
import { NewReservationModalComponent } from './components/modals/new-reservation-modal/new-reservation-modal.component';
import { ModalBase } from './components/modals/ModalBase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild(ModalDirective, {static: true}) modalHost!: ModalDirective;

  ngOnInit() {
    const modalHostViewContainerRef = this.modalHost.viewContainerRef;
    modalHostViewContainerRef.clear();
    modalHostViewContainerRef.createComponent<ModalBase>(NewReservationModalComponent);
  }
}
