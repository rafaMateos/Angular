import { Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template: `<h2>{{nombre}}</h2>`

})

export class VideojuegosComponent{

  private _nombre = 'VideoJuegos';

  get nombre():String{

    return this.nombre;

  }

}
