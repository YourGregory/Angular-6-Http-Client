import { Component, OnInit } from '@angular/core';
import {Group} from '../models/group';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupService) { }

  ngOnInit() {
    this.getGroups();
  }

  getGroups() {
    return this.groupService.getGroups()
      .subscribe(
        groups => {
          console.log(groups);
          this.groups = groups;
        }
      );
  }
}
