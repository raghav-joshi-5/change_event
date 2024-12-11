import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {
  productaddstatus: string = ` no product added yet!`;
  productCount: number = 0;
  onBtnadd() {
    if (this.productCount < 5) {
      this.productCount++;
      this.productaddstatus = `${this.productCount} product added`;
    }
  }
  onBtnremove() {
    if (this.productCount > 1) {
      this.productCount--;
      this.productaddstatus = `${this.productCount} product added`;
    } else {
      this.productaddstatus = `no product added yet!`;
    }
  }

  constructor() {}
  ngOnInit(): void {}

  // onkeyupCb(event: Event) {
  //   let val = (event.target as HTMLInputElement).value;
  //   console.log(val);
  // }
  // onbtnclick(val1: HTMLInputElement) {
  //   console.log(val1.value);
  // }
}
