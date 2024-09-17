import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattingComponent } from './batting.component';

describe('BattingComponent', () => {
  let component: BattingComponent;
  let fixture: ComponentFixture<BattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
