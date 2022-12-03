import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var line1 = ['hii'];
    console.log(line1);
    var line2 = ['and'];
    console.log(line2);
  var line3=[...line1,...line2]
    console.log(line3);
  }

 
  

}
