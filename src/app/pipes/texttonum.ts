import { Pipe,PipeTransform } from "@angular/core"

@Pipe({name:"numtext"})
export class NumToTextCls implements PipeTransform{
  onedigit=['zero','one','two','three','four','five','six','seven','eight','nine']
  twodigit=['ten','twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety','hundred']
  transform(value){
    // if(value<10){
    //   this.onedigit.forEach((e,index)=>{
    //     if(index==value){
    //       return e
    //     }
    //   })
    // }
    switch(value){
      case 1:if(value==1) return "one"
      case 2:if(value==2) return "two"
      case 3:if(value==3) return "three"
      case 4:if(value==4) return "four"
      case 5:if(value==5) return "five"
      case 6:if(value==5) return "six"
      case 7:if(value==5) return "seven"
      case 8:if(value==5) return "eight"
      case 9:if(value==5) return "nine"

    }
  }
}
