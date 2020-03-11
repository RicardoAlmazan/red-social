import { Injectable } from '@angular/core';
import { usuario } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  Usuarios: Array<usuario> =
    [
      { nombre: 'Ricardo', userName: 'Richie', email: 'almazan624@gmail.com', clave: 'contrasenia' },
      { nombre: 'Oscar', userName: 'ElProfe', email: 'stk_987@outlook.com', clave: '123456' },
      { nombre: 'Alejandro', userName: 'Alex', email: 'traaf2405@gmail.com', clave: 'restinpeace' }
    ];

  constructor() {

  }

  getAmigos(userName: string) {
    /*let aux: Array<{ nombre: string }>;
    Array.from(this.Usuarios.filter(elem => elem.userName !== userName)).map(amigo => {
      aux.push({ nombre: amigo.nombre });
    })
    return aux;*/
    return this.Usuarios.filter(elem => elem.userName !== userName);
  }

  getCuenta(userName: string){
    return this.Usuarios.filter(elem => elem.userName == userName)[0];
  }
}
