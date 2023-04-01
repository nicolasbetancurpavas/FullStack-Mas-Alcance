import { Component } from '@angular/core';
import { ServiciosUser } from 'src/app/services/ServicesUser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-consults',
  templateUrl: './consults.component.html',
  styleUrls: ['./consults.component.css']
})
export class ConsultsComponent {
  public data: any = [];
  public dataP: any = [];
  public id: any = 0
  public dataAlbum: any = []

  public stateDataUser: boolean = false;
  public stateDataPost: boolean = true;
  public stateDataAlbum: boolean = false;

  public imgOpen: boolean = true

  constructor(public servicios: ServiciosUser) { }

  loadData() {
    this.servicios.getUsers().subscribe(res => {
      this.data = res.data;
    });
    this.stateDataUser = true;
    this.stateDataPost = false;
    this.imgOpen = false
    this.stateDataAlbum = false
    console.log(this.stateDataPost);
  }

  dataPost() {
    this.servicios.getPost().subscribe(res => {
      this.dataP = res.data;
      console.log(this.dataP);
    });

    this.stateDataUser = false;
    this.stateDataPost = true;
    this.imgOpen = false
    this.stateDataAlbum = false
  }

  searchId(event: Event) {
    const element = event.target as HTMLInputElement
    this.id = element.value
    console.log(this.id)
  }

  search() {
    this.servicios.searchId(this.id).subscribe(res => {
      this.dataAlbum = res.data
      console.log(this.dataAlbum)
      console.log(this.dataAlbum.id)
      if (Object.keys(this.dataAlbum).length > 0) {
        Swal.fire({
          icon: 'success',
          title: '¡Consulta exitosa!',
          html: `<div style="color: #2c6bab"> <strong>ID:</strong> ${this.dataAlbum.id}</div>
         <div style="color: #2c6bab"> <strong>IdUser</strong>: ${this.dataAlbum.title}</div>
         <div style="color: #2c6bab"> <strong>Título</strong>: ${this.dataAlbum.title}</div>`
        });
      }
    })
  }
}
