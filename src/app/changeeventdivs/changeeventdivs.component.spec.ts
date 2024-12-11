import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeeventdivsComponent } from './changeeventdivs.component';

describe('ChangeeventdivsComponent', () => {
  let component: ChangeeventdivsComponent;
  let fixture: ComponentFixture<ChangeeventdivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeeventdivsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeeventdivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
