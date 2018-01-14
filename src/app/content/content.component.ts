import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit {

  ncw = '你吹牛!';
  introduction1 = '你吹牛，网罗古今中外有趣的牛皮故事！';
  introduction2 = '闲来无事，吹个牛皮!各位看官，勿要过于较真！';
  constructor() { }

  ngOnInit() {
  }

}
