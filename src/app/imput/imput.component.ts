import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imput',
  templateUrl: './imput.component.html',
  styleUrls: ['./imput.component.css']
})
export class ImputComponent {
  @Input() myName:string = "";
  @Input() myType:string = "";
  @Input() myLabel:string = "";
  writeOrNot:boolean = false;
  checkOnLen($event: Event):void {
    let target = $event.target as HTMLInputElement;
    if(target.value.length) {
      this.writeOrNot = true;
    } else {
      this.writeOrNot = false;
    }
  }
}
