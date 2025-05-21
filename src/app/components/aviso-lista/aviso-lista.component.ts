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

  //array para los avisos que comienzan con el array vacio
  @Input() avisos: Aviso[] = [] // Avisos recibidos del padre
  @Output() onDelete = new EventEmitter<Aviso>() // Evento eliminar
  @Output() onAddAviso = new EventEmitter<void>() // Evento agregar

  constructor() {addIcons({timeOutline,trashOutline,add});}

  ngOnInit() {}

  // metodo click para eliminar
  clickEliminar(aviso: Aviso) {
    this.avisoAEliminar = aviso;
    this.setModalPriceOpen(true); // Abre modal de confirmación
  }

  // metodo que emite aviso a eliminar
  confirmarEliminacion() {
    if (this.avisoAEliminar) {
      this.onDelete.emit(this.avisoAEliminar);
      this.setModalPriceOpen(false);
      this.avisoAEliminar = null;
    }
  }

  // metodo click para agregar un aviso
  clickAgregar() {
    this.onAddAviso.emit(); // Notifica al padre para agregar
  }

  setModalPriceOpen(abierto:boolean) {
    this.isModalPriceOpen = abierto; // Controla el modal
  }

}
