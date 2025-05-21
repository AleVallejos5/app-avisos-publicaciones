import { Injectable } from '@angular/core';
import { Aviso } from '../modelo/aviso';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private clave = "AGENDA"; // Clave para Preferences

  constructor() {}
  
  // metodo que recupera el aviso en una lista
  async recuperarAvisos(): Promise<Aviso[]> {
    const listado = await Preferences.get({key: this.clave})
    // Si no hay datos, retorna array vacío
    return JSON.parse(listado.value ?? "[]");
  }

  // metodo que guarda los avisos
  async guardar(aviso:Aviso) {
    const listado:Aviso[] = await this.recuperarAvisos()
    listado.push(aviso)
    Preferences.set({key: this.clave, value: JSON.stringify(listado)});
  }

  // metodo para buscar un aviso
  buscarAviso(titulo:string) {}

  // metodo que carga la lista, para buscar aviso a eliminar
  async eliminar(aviso:Aviso): Promise<void> {
    
    const listado: Aviso[] = await this.recuperarAvisos(); //Recuperar la lista

    const nuevaLista = listado.filter(aviso => aviso.titulo !==aviso.titulo); // filtra el aviso

    await Preferences.set({ key: this.clave, value: JSON.stringify(nuevaLista)}); // guarda lista actualizada
  } 

}
