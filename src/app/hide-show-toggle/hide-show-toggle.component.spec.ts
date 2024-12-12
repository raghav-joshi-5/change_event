import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HideShowToggleComponent } from './hide-show-toggle.component';

describe('HideShowToggleComponent', () => {
  let component: HideShowToggleComponent;
  let fixture: ComponentFixture<HideShowToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HideShowToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HideShowToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
