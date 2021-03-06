import { Injectable, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { SamDynamicElementBase } from './../sam-dynamic-element/sam-dynamic-element-base';

@Injectable()
export class SamDynamicFormControlService {
  constructor() { }

  toFormGroup(formElems: SamDynamicElementBase<any>[]) {
    let group: any = {};
    formElems.forEach(formElem => {
      group[formElem.elemName] = formElem.required ? new FormControl(formElem.value || '', Validators.required)
        : new FormControl(formElem.value || '');
    });

    let formGroup = new FormGroup(group);
    return formGroup;
  }
}