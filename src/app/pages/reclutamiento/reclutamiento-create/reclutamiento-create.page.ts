import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reclutamiento } from 'src/app/interfaces/reclutamiento';
import { ReclutamientoService } from 'src/app/services/reclutamiento.service';

@Component({
  selector: 'app-reclutamiento-create',
  templateUrl: './reclutamiento-create.page.html',
  styleUrls: ['./reclutamiento-create.page.scss'],
})
export class ReclutamientoCreatePage implements OnInit {

  alumnoForm: FormGroup= this.fb.group({});


  constructor(private service:ReclutamientoService,
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit() {
    this.alumnoForm = this.fb.group({
      ruc: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      numhijos: ['', [Validators.required]],
      sueldo: ['', [Validators.required]],
      profesion: ['', [Validators.required]],
    });
  }

  save(){
    if (this.alumnoForm.valid) {
      const alumno: Reclutamiento = this.alumnoForm.value;
      this.service.create(alumno).subscribe(response => {
        console.log('Reclutamiento registrado con éxito', response);
        // Aquí puedes redirigir o mostrar un mensaje de éxito
        this.router.navigate(["/reclutamiento-inicio"]);
      }, error => {
        console.error('Error al registrar el reclutamiento', error);
      });
    } else {
      console.log('Formulario no válido');
    }
  }

}
