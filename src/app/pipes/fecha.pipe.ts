import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaComunitaria',
  standalone: true
})

export class FechaComunitariaPipe implements PipeTransform {
  transform(fechaString: string | Date): string {
    if (!fechaString) return '';
    
    const fecha = new Date(fechaString);
    const ahora = new Date();
    const diferencia = ahora.getTime() - fecha.getTime();
    
    // Si es hoy
    if (this.esMismoDia(fecha, ahora)) {
      const horas = fecha.getHours();
      const minutos = fecha.getMinutes();
      return `Hoy a las ${this.formatoDosDigitos(horas)}:${this.formatoDosDigitos(minutos)}`;
    }
    
    // Si es ayer
    const ayer = new Date(ahora);
    ayer.setDate(ahora.getDate() - 1);
    if (this.esMismoDia(fecha, ayer)) {
      return 'Ayer';
    }
    
    // Si es esta semana
    if (diferencia < 7 * 24 * 60 * 60 * 1000) {
      const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      return dias[fecha.getDay()];
    }
    
    // Más de una semana
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }

  private esMismoDia(fecha1: Date, fecha2: Date): boolean {
    return fecha1.getFullYear() === fecha2.getFullYear() &&
           fecha1.getMonth() === fecha2.getMonth() &&
           fecha1.getDate() === fecha2.getDate();
  }

  private formatoDosDigitos(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }
}