import { Component, OnInit, ViewChild } from '@angular/core';
import { SampleDirectiveDirective } from '../directives/sample-directive.directive'
@Component({
  selector: 'app-directive-sample',
  templateUrl: './directive-sample.component.html',
  styleUrls: ['./directive-sample.component.css']
})
export class DirectiveSampleComponent implements OnInit {

  @ViewChild('headid') el
  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    console.log("hoo", this.el.nativeElement.value)
  }

}
