import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { InscriptionComponent } from './home/inscription/inscription.component';
import { AcceuilComponent } from './home/acceuil/acceuil.component';
import { ConnexionComponent } from './home/connexion/connexion.component';
import { TodoListComponent } from './user/todo-list/todo-list.component';
import { AddTodoComponent } from './user/add-todo/add-todo.component';
import { UpdateTodoComponent } from './user/update-todo/update-todo.component';

//import bibliothéque de creation de formulaire
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

//import bibliothéque communication avec http
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './services/user.service';

import {
  ToastrModule,
  ToastNoAnimation,
  ToastNoAnimationModule
} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    AcceuilComponent,
    ConnexionComponent,
    TodoListComponent,
    AddTodoComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
