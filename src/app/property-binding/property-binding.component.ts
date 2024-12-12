import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss'],
})
export class PropertyBindingComponent implements OnInit {
  mouseOut(eve: Event) {
    let value: string = ((eve.target as HTMLElement).style.backgroundColor =
      'red');
    let val1: string = ((eve.target as HTMLElement).style.borderRadius = '0%');
    let val2: string = ((eve.target as HTMLElement).style.transition =
      'all 0.4s ease-in-out');
  }
  onMouse(eve: Event) {
    let val: string = ((eve.target as HTMLElement).style.backgroundColor =
      'orange');
    let val1: string = ((eve.target as HTMLElement).style.borderRadius = '50%');
  }

  constructor() {}

  ngOnInit(): void {}
}
