import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  model = new SendMessage();

  constructor() { }

  ngOnInit() {
    this.model.valid = false;
    this.sendForm = {
    'sendControl': new FormControl(this.model.name, [
      Validators.required,
      Validators.minLength(4)
    ])
  };
  }

  get diagnostic() { return JSON.stringify(this.model); }

  isValidMessage():boolean{

    return true;
  }

  submitContactForm(){
    if(this.isValidMessage()){

    }
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
