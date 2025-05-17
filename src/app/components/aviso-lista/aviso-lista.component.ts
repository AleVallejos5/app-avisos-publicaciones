import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addIcons } from 'ionicons';
import { Aviso } from 'src/app/modelo/aviso';
import { trashOutline, add } from 'ionicons/icons';
import { IonHeader, IonTitle, IonList, IonItem, IonImg, IonLabel,
   IonIcon, IonButton, IonFabButton, IonFab, IonModal,
    IonButtons, IonThumbnail } from "@ionic/angular/standalone";
import { FechaComunitariaPipe } from 'src/app/pipes/fecha.pipe';

@Component({
  selector: 'app-aviso-lista',
  templateUrl: './aviso-lista.component.html',
  styleUrls: ['./aviso-lista.component.scss'],
  standalone: true,
  imports: [IonButtons, IonModal, IonFab, IonFabButton, IonButton, IonIcon, IonLabel,
     IonImg, IonItem, IonList, IonTitle, IonHeader, IonThumbnail, FechaComunitariaPipe],
})
export class AvisoListaComponent  implements OnInit {
  isModalPriceOpen: boolean = false

  //array para los qvisos que comienzan con el array vacio
  @Input() avisos: Aviso[] = []
  @Output() onDelete = new EventEmitter<Aviso>()
  @Output() onAddAviso = new EventEmitter<void>()

  constructor() {addIcons({trashOutline, add});}

  ngOnInit() {}

  clickEliminar(a:Aviso) {
    this.onDelete.emit(a);
    this.setModalPriceOpen(true)
  }

  clickAgregar() {
    this.onAddAviso.emit();
    console.log("ir al form" )
  }

  setModalPriceOpen(abierto:boolean) {
    this.isModalPriceOpen = abierto
  }

}
