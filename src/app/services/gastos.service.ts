import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Gastos } from '../interfaces/gastos';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  private _storage: Storage | null = null;
  private readonly CONTACTOS_KEY = "contactos"; // Clave de almacenamiento
  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
    console.log('Ionic Storage inicializado');
  }


    async obtenerGastos(): Promise<Gastos[]> {
      if (!this._storage) {
        await this.init(); // Asegúrate de inicializar antes de acceder
      }
      const gastos = (await this._storage?.get(this.CONTACTOS_KEY)) || [];
      console.log('gastos desde Storage:', gastos);
      return gastos;
    }

     // Guardar un nuevo contacto
  async agregarContacto(contacto: Gastos) {
    const gastos = await this.obtenerGastos();
    gastos.push(contacto);
    await this._storage?.set(this.CONTACTOS_KEY, gastos);
  }

  // Editar un contacto existente
  async editarContacto(id: number, contactoActualizado: Gastos) {
    const gastos = await this.obtenerGastos();
    const index = gastos.findIndex((c) => c.id === id);
    if (index !== -1) {
      gastos[index] = contactoActualizado;
      await this._storage?.set(this.CONTACTOS_KEY, gastos);
    }
  }

    // Actualizar un contacto
    async actualizarGasto(gasto: Gastos): Promise<void> {
      const contactos = await this.obtenerGastos();

      // Buscar el índice del contacto en el array
      const index = contactos.findIndex(c => c.id === gasto.id);

      // Si el contacto existe, lo actualizamos
      if (index !== -1) {
        contactos[index] = gasto; // Reemplazamos el contacto con los nuevos valores
        await this._storage?.set(this.CONTACTOS_KEY, contactos); // Guardamos los cambios
      }
    }

   // Eliminar un contacto
   async eliminarContacto(id: number) {
    const contactos = await this.obtenerGastos();
    const contactosFiltrados = contactos.filter((c) => c.id !== id);
    await this._storage?.set(this.CONTACTOS_KEY, contactosFiltrados);
  }
}
