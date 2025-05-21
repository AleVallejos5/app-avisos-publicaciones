import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { addIcons } from 'ionicons';
import { Aviso } from 'src/app/modelo/aviso';
import { cameraOutline, arrowBackOutline, camera } from 'ionicons/icons';
import { Camera, CameraResultType } from '@capacitor/camera';
import { IonHeader, IonToolbar, IonIcon, IonButtons, IonTitle, IonItem,
   IonInput, IonNote, IonButton, IonImg, IonThumbnail } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aviso-formulario',
  templateUrl: './aviso-formulario.component.html',
  styleUrls: ['./aviso-formulario.component.scss'],
  standalone: true,
  imports: [IonImg, IonButton, IonNote, IonInput, IonItem, IonTitle, IonButtons,
     IonIcon, IonToolbar, IonHeader, CommonModule, IonThumbnail, FormsModule],
})
export class AvisoFormularioComponent  implements OnInit {

  //cerrar el formulario
  @Output() onClose = new EventEmitter<void>();
  //guardar el aviso o publicacion
  @Output() onSave = new EventEmitter<Aviso>();

  aviso: Aviso = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: new Date().toISOString() // Fecha actual automática
  };
  // Almacena fotos en base64
  fotos:string[] = []

  constructor() {addIcons({arrowBackOutline,cameraOutline});}

  ngOnInit() {}

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    });
  
    // Validar si la imagen contiene datos en Base64 antes de agregarla
    if (image.base64String) {
      this.fotos.push(`data:image/jpeg;base64,${image.base64String}`);
    }
  }

  cerrarFormulario() {
    this.onClose.emit(); // Cierra el formulario
  }

  guardarAviso() {
    // Emitir el aviso al componente padre
    this.onSave.emit(this.aviso);

    this.cerrarFormulario

    // Notifica al padre para cerrar
    this.cerrarFormulario();
  }

}
