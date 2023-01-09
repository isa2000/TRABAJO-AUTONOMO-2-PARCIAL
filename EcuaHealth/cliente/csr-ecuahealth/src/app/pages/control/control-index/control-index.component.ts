import { Component, OnInit } from '@angular/core';
import { Control } from 'src/app/core/models/control.model';
import { ControlService } from 'src/app/core/services/control.service';
import { DepartamentoService } from 'src/app/core/services/departamento.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-index',
  templateUrl: './control-index.component.html',
  styleUrls: ['./control-index.component.css']
})
export class ControlIndexComponent implements OnInit {

  public controles : any;
  public control;
  public activos : any;
  public activo : any;
  public departamentos : any;
  public control_id : any;
  public url;

  constructor(
    private _controlService : ControlService,
    private _departamentoService : DepartamentoService,
  ) {
    this.control = new Control('', '','', 0,'', '')
    this.url = environment.monolitico;
  }

  ngOnInit(): void {
    this._controlService.gtControles().subscribe(
      response => {
        this.controles = response
      }
    );

    this._departamentoService.gtDepartamentos().subscribe(
      response => {
        console.log(response);

        this.departamentos = response;
      }
    );

    this._departamentoService.gtActivos().subscribe(
      response => {
        this.activos = response.activo;

        response.activo.map((a : any) => {
          console.log(a);

          this._departamentoService.gtActivo(a._id).subscribe(
            response => {
              this.activo = response.activo
            }
          )

        })

      }
    );
  }

    //TODO REGISTRAR DEPARTAMENTO

    registrar_control(registrarForm : any) {

      if(registrarForm.valid) {

        this._controlService.nuevoControl(
          {
            fecha: registrarForm.value.fecha,
            persona: registrarForm.value.persona,
            tiempoDepreciacion: registrarForm.value.tiempoDepreciacion,
            idDepartamento : registrarForm.value.idDepartamento,
            idActivo : registrarForm.value.idActivo,
          }
        ).subscribe(
          response => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Control registrado con exito!',
              footer: '<p>EcuaHealth</p>',
              showConfirmButton: false,
              timer: 1500
            })
            this.control = new Control('', '','', 0,'', '')
            this._controlService.gtControles().subscribe(
              response =>{
                this.controles = response
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

  //TODO ELIMINAR CONTROL

  eliminarControl(id : any) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-3',
        cancelButton: 'btn btn-danger mx-3'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Seguro quieres eliminar el control?',
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
          'Control fue eliminado correctamente.',
          'success'
        )

        this._controlService.deleteControl(id).subscribe(
          response => {
            this._controlService.gtControles().subscribe(
              response => {
                this.controles = response;
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
          'Se canceló la eliminación del control',
          'error'
        )
      }
    })

  }

  //TODO ELIMINAR DEPARTAMENTO

}
