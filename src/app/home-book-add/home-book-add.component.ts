import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { IBook } from '../shared/interfaces';

@Component({
  selector: 'app-home-book-add',
  templateUrl: './home-book-add.component.html',
  styleUrls: ['./home-book-add.component.scss'],
})
export class HomeBookAddComponent implements OnInit {
  bookForm!: FormGroup;
  errorMessage!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService,
    private _snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.bookForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.maxLength(120),
          Validators.minLength(10),
        ],
      ],
      description: ['', [Validators.required, Validators.maxLength(512), Validators.pattern('^[A-Z].*')]],
      categories: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publisher: [
        '',
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(5),
        ],
      ],
      published: [
        '',
        [Validators.required, Validators.pattern('^([0-9]{4})$')],
      ],
      pages: [[Validators.required, Validators.max(9999)]], //, Validators.pattern('\d{4}$/')]],
      rating: [[Validators.required]],
      isbn: ['', [Validators.required, Validators.pattern('^([0-9]{13})$')]],
      isbn10: ['', [Validators.required, Validators.pattern('^([0-9]{10})$')]],
      image: ['', [Validators.required]],
      subtitle: [''],
      website: [''],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.bookForm.controls;
  }

  submit({ value, valid }: { value: IBook; valid: boolean }): void {
    if (this.bookForm.invalid) {
      return;
    }

    this.dataService.insertBook(value).subscribe((status) => {
      if (status) {
        this._snackbar.open('Your book is added successfully', 'x', {
          duration: 2500,
          panelClass: 'snackbar-success',
        });
        this.router.navigate(['/home/search']);
      } else {
        const insertError = 'Sorry, something went wrong';
        this.errorMessage = insertError;
        this._snackbar.open(this.errorMessage, 'x');
      }
    });
  }
}
