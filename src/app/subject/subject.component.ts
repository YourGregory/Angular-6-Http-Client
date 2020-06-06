import { Component, OnInit } from '@angular/core';
import {Subject} from '../models/subject';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    return this.subjectService.getSubjects()
      .subscribe(
        subjects => {
          this.subjects = subjects;
        }
      );
  }

}
