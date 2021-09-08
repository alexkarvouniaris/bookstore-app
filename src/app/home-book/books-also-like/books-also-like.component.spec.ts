import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAlsoLikeComponent } from './books-also-like.component';

describe('BooksAlsoLikeComponent', () => {
  let component: BooksAlsoLikeComponent;
  let fixture: ComponentFixture<BooksAlsoLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksAlsoLikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAlsoLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
