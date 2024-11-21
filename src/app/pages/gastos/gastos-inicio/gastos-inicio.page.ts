import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Gastos } from 'src/app/interfaces/gastos';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-gastos-inicio',
  templateUrl: './gastos-inicio.page.html',
  styleUrls: ['./gastos-inicio.page.scss'],
})
export class GastosInicioPage implements OnInit {
  alumnoForm: FormGroup = this.fb.group({});
  gastos: Gastos[] = [];
  gastos_filtrados:Gastos[]=[];

  constructor(
    private contactoService: GastosService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  async cargarContactos() {
    this.gastos = await this.contactoService.obtenerGastos();
    this.gastos_filtrados= await this.contactoService.obtenerGastos();
    console.log('Contactos cargados en cargarContactos:', this.gastos);
  }

  async ngOnInit() {
    this.alumnoForm = this.fb.group({
      titulo: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    });
    await this.cargarContactos();

  }

  async ionViewWillEnter(){
    await this.cargarContactos();
  }

  async filtarGasto(event:any){
    const valorBusqueda = event.target.value.toLowerCase();

    if (valorBusqueda && valorBusqueda.trim() !== '') {
      this.gastos_filtrados=this.gastos.
        filter((al)=>{
          return al.categoria.toLowerCase().includes(valorBusqueda);

        });
    }else{
      this.gastos_filtrados=this.gastos;
    }
  }

  async save() {
    if (this.alumnoForm.valid) {
      const contacto: Gastos = this.alumnoForm.value;
      contacto.id = Date.now();
      await this.contactoService.agregarContacto(contacto);

      // Actualizar lista y limpiar formulario
      this.gastos = await this.contactoService.obtenerGastos();
      // this.router.navigate(["/contacto-inicio"]);
    }
  }

  async eliminarContacto(id: number) {
    await this.contactoService.eliminarContacto(id);
    this.gastos = await this.contactoService.obtenerGastos();
  }

}
