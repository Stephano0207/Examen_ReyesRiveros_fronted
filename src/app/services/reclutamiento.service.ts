import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclutamiento } from '../interfaces/reclutamiento';

@Injectable({
  providedIn: 'root'
})
export class ReclutamientoService {
  constructor(private http:HttpClient) { }
  url:string="http://127.0.0.1:8000/api/reclutamientos";
  getAll(){
    return this.http.get(this.url);
  }

  create(reclutamiento:Reclutamiento){
    return this.http.post(this.url,reclutamiento);
  }

  edit(id:number,reclutamiento:Reclutamiento){
    return this.http.put(`${this.url}/${id}`,reclutamiento);
  }

  getOne(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  delete(id:number){
    console.log(id);
    return this.http.delete(`${this.url}/${id}`);
  }
}
