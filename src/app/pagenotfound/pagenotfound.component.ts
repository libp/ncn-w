import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PagenotfoundComponent implements OnInit {
  pnf = '您要访问的页面丢失在浩瀚的互联网!';
  constructor() { }

  ngOnInit() {
  }

}
