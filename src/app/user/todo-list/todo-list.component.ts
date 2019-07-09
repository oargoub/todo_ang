import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  titre1 = "Todo List";
  titre2 = "Done";

  todoList = [
    {
      num: 1,
      titre: 'SCSS',
      description: 'Faire une recherche sur SCSS',
      dateAjout: '15 / 06 / 2019',
      dateFin: ''
    },
    {
      num: 2,
      titre: 'Repter mes cours',
      description: 'Repeter le cour du HTML , CSS & Bootstrap',
      dateAjout: '16 / 06 / 2019',
      dateFin: ''
    },
    {
      num: 3,
      titre: 'Refaire mes exercices',
      description: 'Refaire tous les exercices demandé',
      dateAjout: '17 / 06 / 2019',

    }
  ];
  done = [
    {
      num: 1,
      titre: 'Terminer HTML & CSS',
      dateAjout: '15 / 06 / 2019',
      dateFin: '25 / 06 /2019'
    },
    {
      num: 2,
      titre: 'Terminer JS & Bootstrap',
      dateAjout: '16 / 06 / 2019',
      dateFin: '26 / 06 /2019',
    },
    {
      num: 3,
      titre: 'Terminer PHP & SQL',
      dateAjout: '17 / 06 / 2019',
      dateFin: '27 /06 / 2019',
    },
  ];
  
  

  constructor() { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    console.log(token);

    //appel fonction service liste todo
    //appel fonction service liste done
    
  }

  addTo(todo) { 
    this.delete(todo);  
    this.done.push(todo) 
  }

  delete(myTodo) {

    let index = this.todoList.indexOf(myTodo);
    this.todoList.splice(index, 1);

  }

  delete2(finished) {

    let index = this.done.indexOf(finished);
    this.done.splice(index, 1);

  }

}