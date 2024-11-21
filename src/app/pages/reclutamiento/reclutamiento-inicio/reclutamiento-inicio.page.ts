import { Component, OnInit } from '@angular/core';
import { Reclutamiento } from 'src/app/interfaces/reclutamiento';
import { ReclutamientoService } from 'src/app/services/reclutamiento.service';

@Component({
  selector: 'app-reclutamiento-inicio',
  templateUrl: './reclutamiento-inicio.page.html',
  styleUrls: ['./reclutamiento-inicio.page.scss'],
})
export class ReclutamientoInicioPage implements OnInit {

  reclutamientos:Reclutamiento[]=[];

  constructor(private service:ReclutamientoService) { }

  ngOnInit() {
    this.getAll()
  }

  ionViewWillEnter(){
    this.getAll()
  }

  getAll(){
    this.service.getAll().subscribe(
      (response:any)=>{
        this.reclutamientos = response;
      }
    )
  }



  borrar(id:any){
    this.service.delete(id).subscribe((response)=>{
      console.log("Borrardo", response);
      this.getAll();
    });
  }
}
