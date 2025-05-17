import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addIcons } from 'ionicons';
import { Aviso } from 'src/app/modelo/aviso';
import { trashOutline, add, timeOutline } from 'ionicons/icons';
import { IonHeader, IonTitle, IonList, IonItem, IonImg, IonLabel,
   IonIcon, IonButton, IonFabButton, IonFab, IonModal,
   IonThumbnail, IonContent, IonGrid, IonRow, IonCol, IonToolbar } from "@ionic/angular/standalone";
import { FechaComunitariaPipe } from 'src/app/pipes/fecha.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonCol, IonRow, IonGrid, IonContent, IonModal, IonFab, IonFabButton, IonButton, IonIcon, IonLabel,
     IonImg, IonItem, IonList, IonTitle, IonHeader, IonThumbnail, FechaComunitariaPipe, CommonModule],
})
export class AvisoListaComponent  implements OnInit {
  isModalPriceOpen: boolean = false;
  avisoAEliminar: Aviso | null = null;

  //array para los qvisos que comienzan con el array vacio
  @Input() avisos: Aviso[] = []
  @Output() onDelete = new EventEmitter<Aviso>()
  @Output() onAddAviso = new EventEmitter<void>()

  constructor() {addIcons({timeOutline,trashOutline,add});}

  ngOnInit() {}

  clickEliminar(aviso: Aviso) {
    this.avisoAEliminar = aviso;
    this.setModalPriceOpen(true);
  }

  confirmarEliminacion() {
    if (this.avisoAEliminar) {
      this.onDelete.emit(this.avisoAEliminar);
      this.setModalPriceOpen(false);
      this.avisoAEliminar = null;
    }
  }

  clickAgregar() {
    this.onAddAviso.emit();
  }

  setModalPriceOpen(abierto:boolean) {
    this.isModalPriceOpen = abierto
  }

}
