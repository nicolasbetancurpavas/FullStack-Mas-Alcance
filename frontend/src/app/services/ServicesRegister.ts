import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ServiciosRegister {
  public data: any = {}

  constructor(public peticion: HttpClient,) {
  }

  getRegister(): Observable<any> {
    let uri = 'http://localhost:3000/app/mas-alcance/registers'
    return this.peticion.get<any>(uri)
  }
  deleteRegister(id: number): Observable<any> {
    let uri = `http://localhost:3000/app/mas-alcance/register/${id}`
    return this.peticion.delete<any>(uri)
  }

}


