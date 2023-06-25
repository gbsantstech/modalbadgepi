import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBadgeComponent } from './modal-badge.component';

describe('ModalBadgeComponent', () => {
  let component: ModalBadgeComponent;
  let fixture: ComponentFixture<ModalBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBadgeComponent]
    });
    fixture = TestBed.createComponent(ModalBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
