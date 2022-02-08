import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponentsOverviewComponent } from './simple-components-overview.component';

describe('SimpleComponentsOverviewComponent', () => {
  let component: SimpleComponentsOverviewComponent;
  let fixture: ComponentFixture<SimpleComponentsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleComponentsOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponentsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
