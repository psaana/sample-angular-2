import { Component,OnInit } from '@angular/core';
import { Student } from './person';

import { PersonService } from './person.service';
@Component({
  selector: 'app-root',
  template: `
    <ul>
    <li *ngFor="let Student of students">
        {{Student.name}}
    </li>
  </ul>
 `,
 providers: [PersonService]
 // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //title = 'app works!';
  students:Student[];
constructor(private personService: PersonService) { }
  getStudents(): void {
    this.personService.getStudents().then(students => this.students = students);
  }
  ngOnInit(): void {
    this.getStudents();
  }


}
