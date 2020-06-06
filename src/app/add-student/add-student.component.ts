import { Component, OnInit } from '@angular/core';
import { Student} from '../models/student';
import { StudentService} from '../student.service';
import { Location} from '@angular/common';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student = new Student();
  submitted = false;

  constructor(
    private studentService: StudentService,
    private location: Location
  ) { }

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  addStudent(): void {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.student);
    this.studentService.addStudent(this.student)
      .subscribe();
  }

  ngOnInit() {
  }

}
