import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { Aviso } from '../modelo/aviso';
import { AvisosService } from '../services/avisos.service';
import { AvisoListaComponent } from "../components/aviso-lista/aviso-lista.component";
import { AvisoFormularioComponent } from "../components/aviso-formulario/aviso-formulario.component";
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, AvisoListaComponent, AvisoFormularioComponent, CommonModule],
})
export class HomePage implements OnInit{
  agenda: Aviso[] = [] // Almacena todos los avisos
  mostrandoFormulario: boolean = false// Controla qué vista mostrar

  constructor(private avisosService: AvisosService) {}

  ngOnInit(): void {
    
  }

  async deleteAviso(aviso:Aviso) {
    console.log("Eliminando el contacto de :" + aviso.titulo)
    //llamar al metodo (al servicio) que eliminara los avisos
    await this.avisosService.eliminar(aviso)
    //refresca la lista actualizada
    this.agenda = await this.avisosService.recuperarAvisos()
  }

  mostrarFormulario() {
    //modifica el estado para mostrar el formulario
    this.mostrandoFormulario = true;
  }

  cerrarFormulario() {
    //cambiara el estado para rgrsar a la lista de avisos o publicaciones
    this.mostrandoFormulario = false;
  }
  
  async guardarAviso(aviso: Aviso) {
    // metodo para guardar los nuevos avisos o publicaciones
    await this.avisosService.guardar(aviso);
    // refresca la lista d avisos o publicaciones
    this.agenda = await this.avisosService.recuperarAvisos();
    //recargara la lista actualizada
    this.cerrarFormulario();
  }

}
