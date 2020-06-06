import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupComponent } from './group/group.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    StudentComponent,
    StudentDetailsComponent,
    GroupDetailsComponent,
    AddGroupComponent,
    GroupComponent,
    AddSubjectComponent,
    SubjectComponent,
    SubjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
