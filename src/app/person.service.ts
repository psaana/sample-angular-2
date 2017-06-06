import { Injectable } from '@angular/core';
import { Student } from './person';
//import { SomeOtherService } from './some-other.service';
import { STUDENT } from './mock-student';

@Injectable()
export class PersonService{
  
  getStudents() : Promise<Student[]> {
    return Promise.resolve(STUDENT); 
  }

}