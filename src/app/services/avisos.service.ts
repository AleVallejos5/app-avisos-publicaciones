import { Injectable } from '@angular/core';
import { Aviso } from '../modelo/aviso';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private clave = "AGENDA";

  constructor() {}
  
  // metodo creado para el buen funcionamiento de la aplicacion
  async recuperarAvisos(): Promise<Aviso[]> {
    const listado = await Preferences.get({key: this.clave})
    // si es nulo se usara un array vacio
    return JSON.parse(listado.value ?? "[]");
  }

  //metodo para guardar los avisos o publicaciones
  async guardar(a:Aviso) {
    const listado:Aviso[] = await this.recuperarAvisos()
    listado.push(a)
    Preferences.set({key: this.clave, value: JSON.stringify(listado)});
  }

  //metodo para buscar un aviso
  buscarAviso(titulo:string) {}

  //metodo paraa la carga de la lista, para buscar el aviso que nesesito borrrar
  async eliminar(a:Aviso): Promise<void> {
    
    //Recuperar la lista
    const listado: Aviso[] = await this.recuperarAvisos();

    //aca se filtra la lista del aviso a eliminar
    const nuevaLista = listado.filter(aviso => aviso.titulo !==a.titulo);

    //se guaraddara la lista ya actualizada
    await Preferences.set({ key: this.clave, value: JSON.stringify(nuevaLista)});
  } 

}
