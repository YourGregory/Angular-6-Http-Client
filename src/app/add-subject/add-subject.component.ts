import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import {Subject} from '../models/subject';
import {SubjectService} from '../subject.service';
@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  subject = new Subject();
  submitted = false;

  constructor(
    private subjectService: SubjectService,
    private location: Location
  ) { }

  newSubject(): void {
    this.submitted = false;
    this.subject = new Subject();
  }

  addSubject(): void {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.subjectService.addSubject(this.subject)
      .subscribe();
  }
  ngOnInit() {
  }

}
