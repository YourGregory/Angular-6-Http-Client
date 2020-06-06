import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {Subject} from '../models/subject';
import {SubjectService} from '../subject.service';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})
export class SubjectDetailsComponent implements OnInit {

  subject = new Subject();
  submitted = false;
  message: string;

  constructor(
    private subjectService: SubjectService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.subjectService.getSubject(id)
      .subscribe(subject => this.subject = subject);
  }

  update(): void {
    this.submitted = true;
    this.subjectService.updateSubject(this.subject)
      .subscribe(result => this.message = 'Subject Updated Successfully');
  }

  delete(): void {
    this.submitted = true;
    this.subjectService.deleteSubject(this.subject.id)
      .subscribe(result => this.message = 'Subject Deleted Successfully');
  }

  goBack(): void {
    this.location.back();
  }

}
