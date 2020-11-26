import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TempGuideComponent } from './temp-guide.component';

describe('TempGuideComponent', () => {
  let component: TempGuideComponent;
  let fixture: ComponentFixture<TempGuideComponent>;

  beforeEach(waitForAsync(() => {
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
