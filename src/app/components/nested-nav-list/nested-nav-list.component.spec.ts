import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedNavListComponent } from './nested-nav-list.component';

describe('NestedNavListComponent', () => {
  let component: NestedNavListComponent;
  let fixture: ComponentFixture<NestedNavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NestedNavListComponent]
    });
    fixture = TestBed.createComponent(NestedNavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
