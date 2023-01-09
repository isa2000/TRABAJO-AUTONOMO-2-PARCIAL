import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/core/services/control.service';
import { DepartamentoService } from 'src/app/core/services/departamento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public departamentos : any;
  public contadorDepa : any;
  public contadorAc : any;
  public contadorCont : any;
  public activos : any;

  constructor(
    private _departamentoService : DepartamentoService,
    private _controlService : ControlService
  ) { }

  ngOnInit(): void {
    this._departamentoService.gtDepartamentos().subscribe(
      response => {
        console.log(response);
        this.departamentos = response;
        this.contadorDepa = response.length
      }
    )

    this._departamentoService.gtActivos().subscribe(
      response => {
        console.log(response);
        this.activos = response.activo;
        this.contadorAc = response.activo.length
      }
    )

    this._controlService.gtControles().subscribe(
      response => {
        console.log(response);
        this.contadorCont = response.length
      }
    )
  }

}
