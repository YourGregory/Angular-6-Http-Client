import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent} from '../student/student.component';
import { AddStudentComponent} from '../add-student/add-student.component';
import { StudentDetailsComponent} from '../student-details/student-details.component';
import {GroupComponent} from '../group/group.component';
import {AddGroupComponent} from '../add-group/add-group.component';
import {GroupDetailsComponent} from '../group-details/group-details.component';
import {SubjectComponent} from '../subject/subject.component';
import {AddSubjectComponent} from '../add-subject/add-subject.component';
import {SubjectDetailsComponent} from '../subject-details/subject-details.component';

const routes: Routes = [
   {
     path: 'student',
     component: StudentComponent
   },
   {
     path: 'student/add',
     component: AddStudentComponent
   },
   {
     path: 'student/:id',
     component: StudentDetailsComponent
   },
   {
     path: '',
     redirectTo: 'student',
     pathMatch: 'full'
   },
  {
    path: 'group',
    component: GroupComponent
  },
  {
    path: 'group/add',
    component: AddGroupComponent
  },
  {
    path: 'group/:id',
    component: GroupDetailsComponent
  },
  {
    path: 'subject',
    component: SubjectComponent
  },
  {
    path: 'subject/add',
    component: AddSubjectComponent
  },
  {
    path: 'subject/:id',
    component: SubjectDetailsComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
