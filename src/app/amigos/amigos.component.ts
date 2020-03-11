import { Component, OnInit } from '@angular/core';
import { usuario } from '../usuario.model';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  amigos: Array<usuario>;

  constructor(private user: UsuariosService) {
    this.amigos = user.getAmigos('Richie');
  }

  ngOnInit() {
  }

}
