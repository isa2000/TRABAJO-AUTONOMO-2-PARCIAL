import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from 'src/app/core/services/control.service';
import { DepartamentoService } from 'src/app/core/services/departamento.service';

@Component({
  selector: 'app-control-review',
  templateUrl: './control-review.component.html',
  styleUrls: ['./control-review.component.css']
})
export class ControlReviewComponent implements OnInit {

  public control : any;
  public departamento : any;
  public id: any;
  public activo: any;

  constructor(
    private _controlService : ControlService,
    private _departamentoService : DepartamentoService,
    private _route : ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.id = params['id']

      this._controlService.gtControl(this.id).subscribe(
        response => {
          this.control = response

          this._departamentoService.gtDepartamento(response.idDepartamento).subscribe(
            response => {
              this.departamento = response
            }
          )

          this._departamentoService.gtActivo(response.idActivo).subscribe(
            response => {
              this.activo = response.activo
            }
          )

        }
      )
    })
  }

}
