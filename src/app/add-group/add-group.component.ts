import { Component, OnInit } from '@angular/core';
import {Group} from '../models/group';
import {GroupService} from '../group.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  group = new Group();
  submitted = false;

  constructor(
    private groupService: GroupService,
    private location: Location
  ) { }

  newGroup(): void {
    this.submitted = false;
    this.group = new Group();
  }

  addGroup(): void {
    this.submitted = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    this.groupService.addGroup(this.group)
      .subscribe();
  }

  ngOnInit() {
  }

}
