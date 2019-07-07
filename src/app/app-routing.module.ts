import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './home/inscription/inscription.component';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { ConnexionComponent } from './home/connexion/connexion.component';
import { TodoListComponent } from './user/todo-list/todo-list.component';
import { AddTodoComponent } from './user/add-todo/add-todo.component';
import { UpdateTodoComponent } from './user/update-todo/update-todo.component';

const routes: Routes = [
  {
    path: '',
    component: AcceuilComponent
  },
  {
    path: 'acceuil',
    component: AcceuilComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  },
  {
    path: 'todo-list',
    component: TodoListComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  },
  {
    path: 'update-todo',
    component: UpdateTodoComponent
  },
  {path: 'update-todo/:id', component: UpdateTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
