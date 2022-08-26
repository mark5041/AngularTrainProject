import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTratteComponent } from './admin-tratte.component';

describe('AdminTratteComponent', () => {
  let component: AdminTratteComponent;
  let fixture: ComponentFixture<AdminTratteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTratteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTratteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
