import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable, map, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  imports: [
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule
  ],
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private http = inject(HttpClient);
  showSuccessPopup: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  inputCtrl = new FormControl('');

  
  contactForm = this._formBuilder.group({
    businessName: [''], 
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    telephone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    message: [''],
    stateGroup: this._formBuilder.control<string[]>([], Validators.required)
  });


  stateGroups: StateGroup[] = [
    { letter: 'Vegetables', names: ['Bird Eye Chili - Green', 'Bird Eye Chili - Red', 'Green Asparagus','White Asparagus'] },
    { letter: 'Fruits', names: ['Mango', 'Guava', 'Durian','Dragon Fruit'] },
    { letter: 'Herbs & Flowers', names: ['Tulip', 'Orchid Flower','Versatile Rose'] },
  ];

  filteredGroups!: Observable<StateGroup[]>;

  ngOnInit() {
    this.filteredGroups = this.inputCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroups(value || ''))
    );
  }
  private _filterGroups(value: string): StateGroup[] {
    const filterValue = value.toLowerCase();
    return this.stateGroups
      .map(group => ({ 
        letter: group.letter,
        names: group.names.filter
        (name => name.toLowerCase().includes(filterValue)) 
      }))
      .filter(group => group.names.length > 0);
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      const values = this.contactForm.value.stateGroup ?? [];
      this.contactForm.patchValue({ stateGroup: [...values, value] });
    }
    event.chipInput!.clear();
    this.inputCtrl.setValue('');
  }
  remove(item: string): void {
    const values = this.contactForm.value.stateGroup ?? [];
    this.contactForm.patchValue({ stateGroup: values.filter(v => v !== item) });
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    const values = this.contactForm.value.stateGroup ?? [];
    const selectedValue = event.option.viewValue;
    this.contactForm.patchValue({ stateGroup: [...values, selectedValue] });
    this.inputCtrl.setValue('');
  }

  onSubmit() {
  if (this.contactForm.invalid) {
    this.contactForm.markAllAsTouched();
    return;
  }

  this.isLoading = true;

const emailData = {
  to: 'info@thelocalbasket.com',
  subject: 'New Contact Form Submission',
      body: `
        <div style='font-family:Arial,sans-serif; max-width:600px; margin:auto; border:1px solid #ddd; padding:20px;'>
          <h2 style="color:#2E86C1; text-align:center;">New Contact Form Submission</h2>
          <hr style="border:none; border-top:1px solid #eee;" />
          <p><strong>Business Name:</strong> ${this.contactForm.value.businessName}</p>
          <p><strong>Name:</strong> ${this.contactForm.value.firstName} ${this.contactForm.value.lastName}</p>
          <p><strong>Email:</strong> ${this.contactForm.value.email}</p>
          <p><strong>Phone:</strong> ${this.contactForm.value.telephone}</p>
          <p><strong>Selected Items:</strong> ${(this.contactForm.value.stateGroup ?? []).join(', ') || 'None'}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color:#f7f7f7; padding:10px; border-radius:5px;">${this.contactForm.value.message}</p>
          <hr style="border:none; border-top:1px solid #eee;" />
          <p style="font-size: 0.9em; color: #999;">This email was generated from your website contact form.</p>
        </div>
      `
    };


  this.http.post('http://localhost:5168/api/email/send', emailData).subscribe({
    next: () => {
      this.isLoading = false;
      this.showSuccessPopup = true;
      this.contactForm.reset();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.setErrors(null);
      });
    },
    error: (err) => {
      console.error('Error sending email:', err);
      this.errorMessage = 'Failed to send email. Please try again later.';
      this.isLoading = false;
    }
  });
  
}

closePopup() {
  this.showSuccessPopup = false;
}
}