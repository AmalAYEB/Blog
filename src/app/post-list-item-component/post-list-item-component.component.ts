import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title: String;
  @Input() content: String;
  loveIts = 0;
  created_at: Date;

  constructor() {
    this.created_at = new Date();
  }

  ngOnInit() {
  }

  increment() {
    this.loveIts++;
  }

  decrement() {
    this.loveIts--;
  }

}
