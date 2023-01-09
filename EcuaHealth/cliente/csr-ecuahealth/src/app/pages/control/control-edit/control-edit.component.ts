import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Control } from 'src/app/core/models/control.model';
import { ControlService } from 'src/app/core/services/control.service';
import { DepartamentoService } from 'src/app/core/services/departamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-control-edit',
  templateUrl: './control-edit.component.html',
  styleUrls: ['./control-edit.component.css']
})
export class ControlEditComponent implements OnInit {

  public control: any;
  public id: any;
  public activo: any;
  public departamento: any;

  constructor(
    private _route: ActivatedRoute,
    private _departamentoService: DepartamentoService,
    private _router: Router,
    private _controlService: ControlService,
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id']

      this._controlService.gtControl(this.id).subscribe(
        response => {
          this.control = response
        }
      )

      this._departamentoService.gtDepartamentos().subscribe(
        response => {
          this.departamento = response
        }
      )

      this._departamentoService.gtActivos().subscribe(
        response => {
          this.activo = response.activo
        }
      )

    })
  }

  editar_control(editarForm: any) {

    if (editarForm.valid) {

      this._controlService.updateControl(
        {
          _id: this.id,
          fecha: editarForm.value.fecha,
          persona: editarForm.value.persona,
          tiempoDepreciacion: editarForm.value.tiempoDepreciacion,
          idDepartamento: editarForm.value.idDepartamento,
          idActivo: editarForm.value.idActivo,
        }
      ).subscribe(
        response => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Control actualizado con éxito!',
            footer: '<p>EcuaHealth</p>',
            showConfirmButton: false,
            timer: 1500
          });
          this.control = new Control('', '', '', 0, '', '');
          this._router.navigate(['control'])
        }
      )

    }

  }

}
