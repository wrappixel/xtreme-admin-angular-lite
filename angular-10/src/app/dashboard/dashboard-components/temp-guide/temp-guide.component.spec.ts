import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempGuideComponent } from './temp-guide.component';

describe('TempGuideComponent', () => {
  let component: TempGuideComponent;
  let fixture: ComponentFixture<TempGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
