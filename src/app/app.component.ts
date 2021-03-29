import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    constructor(private router:Router){
      
    }
    onClick(pRuta:string){
      //tareas previas
      console.log('Se realizan tareas previas');
      //redirijo a cada una de las rutas mediante los botones
      this.router.navigate([pRuta]);
    }
  
}
