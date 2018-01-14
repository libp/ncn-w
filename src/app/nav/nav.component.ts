import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  /*文本*/
  newest = '最新';
  hot = '最火';
  blog = '博客';
  about = '关于我';
  Search = '搜索';


  constructor() { }

  ngOnInit() {
  }

}
