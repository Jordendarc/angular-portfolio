import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  sendMessageForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    company: ['', Validators.required],
    message: ['', Validators.required],
    favoriteColor: ['']
  }, { validators: identityRevealedValidator });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {}

  submitContactForm(){
  }

  identityRevealedValidator(nameRe: RegExp): ValidatorFn {
  return null;
}

}

export class SendMessage {

  constructor(
    public name: string,
    public email: string,
    public company: string,
    public message: string,
    public favoriteColor: string,
    public valid: boolean

  ) {  }

}
