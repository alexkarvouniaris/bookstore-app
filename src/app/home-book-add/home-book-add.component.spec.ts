import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBookAddComponent } from './home-book-add.component';

describe('HomeBookAddComponent', () => {
  let component: HomeBookAddComponent;
  let fixture: ComponentFixture<HomeBookAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBookAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBookAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
