import { Component, OnInit } from '@angular/core';
import {Group} from '../models/group';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {GroupService} from '../group.service';
@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  group = new Group();
  submitted = false;
  message: string;

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.groupService.getGroup(id)
      .subscribe(group => this.group = group);
  }

  update(): void {
    this.submitted = true;
    this.groupService.updateGroup(this.group)
      .subscribe(result => this.message = 'Group Updated Successfully');
  }

  delete(): void {
    this.submitted = true;
    this.groupService.deleteGroup(this.group.id)
      .subscribe(result => this.message = 'Group Deleted Successfully');
  }

  goBack(): void {
    this.location.back();
  }
}
