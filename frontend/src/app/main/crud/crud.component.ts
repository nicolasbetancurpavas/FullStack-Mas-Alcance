import { Component, OnInit } from '@angular/core';
import { ServiciosRegister } from 'src/app/services/ServicesRegister';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public data: any = []
  constructor(public servicesR: ServiciosRegister) { }

  ngOnInit() {
    this.servicesR.getRegister().subscribe(res => {
      this.data = res.data
      console.log(this.data)
    })
  };

  deleteRegisterid(id: number) {
    Swal.fire({
      title: '¿Eliminar registro?',
      text: 'quedara eliminado totalmente de los registros',
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicesR.deleteRegister(id).subscribe(res => {
          console.log(res);
          this.servicesR.getRegister().subscribe(res => {
            this.data = res.data;
          });
        });
      }
    });
  }
}

