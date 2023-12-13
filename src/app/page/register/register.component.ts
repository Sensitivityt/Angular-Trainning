import {
  Component, NgModule, enableProdMode, ViewChild,
} from '@angular/core';
import { DxValidatorComponent,} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { Service } from './../../app.service';


const sendRequest = function (value:any) {
  const invalidEmail = 'test@dx-email.com';
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value !== invalidEmail);
    }, 1000);
  });
};

@Component({
  selector: 'demo-app',
  providers: [Service],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})

export class RegisterComponent {
  @ViewChild('targetValidator', { static: false }) validator!: DxValidatorComponent;

  password = '';

  confirmPassword = '';

  passwordMode = 'password';

  confirmPasswordMode = 'password';

  maxDate: Date = new Date();

  cityPattern = '^[^0-9]+$';

  namePattern: any = /^[^0-9]+$/;

  phonePattern: any = /^[02-9]\d{9}$/;

  countries: string[];

  phoneRules: any = {
    X: /[02-9]/,
  };

  passwordButton: any = {
    icon: 'https://js.devexpress.com/Angular/Demos/WidgetsGallery/JSDemos/images/icons/eye.png',
    type: 'default',
    onClick: () => {
      this.passwordMode = this.passwordMode === 'text' ? 'password' : 'text';
    },
  };

  confirmPasswordButton: any = {
    icon: 'https://js.devexpress.com/Angular/Demos/WidgetsGallery/JSDemos/images/icons/eye.png',
    type: 'default',
    onClick: () => {
      this.confirmPasswordMode = this.confirmPasswordMode === 'text' ? 'password' : 'text';
    },
  };

  constructor(service: Service) {
    this.maxDate = new Date(this.maxDate.setFullYear(this.maxDate.getFullYear() - 21));
    this.countries = service.getCountries();
  }

  passwordComparison = () => this.password;

  checkComparison() {
    return true;
  }

  asyncValidation(params:any) {
    return sendRequest(params.value);
  }

  onPasswordChanged() {
    if (this.confirmPassword) {
      this.validator.instance.validate();
    }
  }

  onFormSubmit = function (e:any) {
    notify({
      message: 'You have submitted the form',
      position: {
        my: 'center top',
        at: 'center top',
      },
    }, 'success', 3000);

    e.preventDefault();
  };
}
