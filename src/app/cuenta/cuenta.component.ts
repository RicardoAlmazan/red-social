import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  Usuario: usuario;
  mostrar: boolean;

  constructor(private user: UsuariosService) { 
    this.Usuario = user.getCuenta('Richie');
  }

  ngOnInit() {
    this.mostrar = false;
  }

}
