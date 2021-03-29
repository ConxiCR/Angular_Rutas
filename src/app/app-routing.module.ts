import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { InfoComponent } from './componentes/info/info.component';

const routes: Routes = [
  //ruta raiz
  { path: '', pathMatch: 'full', redirectTo: 'información' },
  //otras rutas
  { path: 'informacion', component: InfoComponent },
  { path: 'sobre', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  //redirigir una ruta
  { path: 'about', redirectTo: 'sobre' },
  //ruta comodin. Si las anteriores no han conseguido responder
  { path: '**', redirectTo: 'contacto' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
