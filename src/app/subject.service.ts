import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject} from './models/subject';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subjectUrl = 'http://localhost:8080/api/subjects';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectUrl);
  }

  getSubject(id: number): Observable<Subject> {
    const url = `${this.subjectUrl}/${id}`;
    return this.http.get<Subject>(url);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(this.subjectUrl, subject, httpOptions);
  }

  deleteSubject(subject: Subject | number): Observable<Subject> {
    const id = typeof subject === 'number' ? subject : subject.id;
    const url = `${this.subjectUrl}/${id}`;

    return this.http.delete<Subject>(url, httpOptions);
  }

  updateSubject(subject: Subject): Observable<any> {
    return this.http.put(this.subjectUrl, subject, httpOptions);
  }
}
