import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/core/models/departamento.model';
import { DepartamentoService } from 'src/app/core/services/departamento.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  public departamentos : any;
  public departamento;
  public departamento_id : any;
  public url;

  constructor(
    private _departamentoService : DepartamentoService,
  ) {
    this.departamento = new Departamento('', '', '');
    this.url = environment.monolitico;
  }

  ngOnInit(): void {

    this._departamentoService.gtDepartamentos().subscribe(
      response => {
        console.log(response);

        this.departamentos = response;
      }
    )

  }

  //TODO REGISTRAR DEPARTAMENTO

  registrar_departamento(registrarForm : any) {

    if(registrarForm.valid) {

      this._departamentoService.nuevoDepartament(
        {
          nombre : registrarForm.value.nombre,
          encargado : registrarForm.value.encargado,
        }
      ).subscribe(
        response => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Departamento registrado con exito!',
            footer: '<p>EcuaHealth</p>',
            showConfirmButton: false,
            timer: 1500
          })
          this.departamento = new Departamento('', '', '');
          this._departamentoService.gtDepartamentos().subscribe(
            response =>{
              this.departamentos = response
            }
          )
        }
      )

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal!',
        text: 'Rellena todos los campos del formulario!',
        footer: '<p>EcuaHealth</p>',
        showConfirmButton: false,
        timer: 1500
      })
    }

  }

  //TODO REGISTRAR DEPARTAMENTO

  //TODO EDITAR DEPARTAMENTO

  get_id(id:any) {
    this.departamento_id = id
  }

  editar_departamento(editarForm : any) {

    this._departamentoService.gtDepartamento(this.departamento_id).subscribe(
      response => {
        this.departamentos = response;
      }
    )

    if(editarForm.valid) {

      this._departamentoService.updateDepartamento(
        {
          _id : this.departamento_id,
          nombre : editarForm.value.nombre,
          encargado : editarForm.value.encargado,
        }
      ).subscribe(
        response => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Departamento actualizado con éxito!',
            footer: '<p>EcuaHealth</p>',
            showConfirmButton: false,
            timer: 1500
          });
          this._departamentoService.gtDepartamentos().subscribe(
            response =>{
              this.departamentos = response
            }
          )
        }
      )

    }

  }

  //TODO EDITAR DEPARTAMENTO

  //TODO ELIMINAR DEPARTAMENTO

  eliminarDepartamento(id : any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-3',
        cancelButton: 'btn btn-danger mx-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro quieres eliminar el departamento del sistema?',
      text: "No podrás cambiar esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, estoy seguro!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          'Departamento fue eliminado correctamente.',
          'success'
        )

        this._departamentoService.deleteDepartamento(id).subscribe(
          response => {
            this._departamentoService.gtDepartamentos().subscribe(
              response => {
                this.departamentos = response;
              }
            )
          }
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Se canceló la eliminación del departamento',
          'error'
        )
      }
    })

  }

  //TODO ELIMINAR DEPARTAMENTO

}
