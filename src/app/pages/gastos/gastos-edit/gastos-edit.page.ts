import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gastos } from 'src/app/interfaces/gastos';
import { GastosService } from 'src/app/services/gastos.service';

@Component({
  selector: 'app-gastos-edit',
  templateUrl: './gastos-edit.page.html',
  styleUrls: ['./gastos-edit.page.scss'],
})
export class GastosEditPage implements OnInit {
  contacto: Gastos = {
    id: 0,
    titulo: '',
    categoria: '',
    monto: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contactoService:GastosService
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      await this.cargarContacto(parseInt(id));
    }
  }


  async cargarContacto(id: number) {
    const contactos = await this.contactoService.obtenerGastos();
    this.contacto = contactos.find((contacto) => contacto.id === id)!;
  }

  async guardarEdicion() {
    await this.contactoService.actualizarGasto(this.contacto);
    this.router.navigate(['/gastos-inicio']); // Redirige de vuelta a la lista de contactos
  }
}
