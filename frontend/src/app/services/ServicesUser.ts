import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})

export class ServiciosUser {
  public data: any = {}

  constructor(public peticion: HttpClient,) {
  }

  getUsers(): Observable<any> {
    let uri = 'http://localhost:3000/app/mas-alcance/user'
    return this.peticion.get<any>(uri)

  }
  getPost(): Observable<any> {
    let uri = 'http://localhost:3000/app/mas-alcance/post'
    return this.peticion.get<any>(uri)
  }

  searchId(id: number): Observable<any> {
    let uri = `http://localhost:3000/app/mas-alcance/albums/${id}`
    return this.peticion.get<any>(uri)
  }

}


