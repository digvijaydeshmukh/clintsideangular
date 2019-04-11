import { Component, OnInit } from '@angular/core';
import { NumToTextCls } from '../pipes/texttonum';

@Component({
  selector: 'app-pipe-sample',
  templateUrl: './pipe-sample.component.html',
  styleUrls: ['./pipe-sample.component.css'],
  providers: [ NumToTextCls ]
})
export class PipeSampleComponent implements OnInit {
  tt:any
  numberVal:number;
  constructor(private numtext:NumToTextCls) { }

  ngOnInit() {
  }
  pipeVal(){
    // console.log(this.numberVal);
    return this.tt=this.numtext.transform(this.numberVal)
  //  console.log(this.tt);

  }
}
