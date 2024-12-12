import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hide-show-toggle',
  templateUrl: './hide-show-toggle.component.html',
  styleUrls: ['./hide-show-toggle.component.scss'],
})
export class HideShowToggleComponent implements OnInit {
  onHideShowBtn(eve: HTMLElement, btn: Event) {
    if (eve.classList.contains('d-none')) {
      eve.classList.remove('d-none');
      let val: string = ((btn.target as HTMLElement).innerHTML = 'Hide');
    } else {
      eve.classList.add('d-none');
      let val: string = ((btn.target as HTMLElement).innerHTML = 'Show');
    }
  }
  onToggleBtn(eve: HTMLElement) {
    eve.classList.toggle('d-none');
  }
  onHideBtn(eve: HTMLElement) {
    eve.classList.add('d-none');
  }
  onShowBtn(eve: HTMLElement) {
    eve.classList.remove('d-none');
  }

  constructor() {}

  ngOnInit(): void {}
}
