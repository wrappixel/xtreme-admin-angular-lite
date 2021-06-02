import { Component, OnInit } from '@angular/core';
import { Comment, comments } from './comments-data';

@Component({
  selector: 'app-recent-comments',
  templateUrl: './recent-comments.component.html',
  styleUrls: ['./recent-comments.component.css']
})
export class RecentCommentsComponent implements OnInit {

  userComments: Comment[];

  constructor() {
    this.userComments = comments;
  }

  ngOnInit(): void {
  }

}
