import { Component, Inject, Input, OnInit } from '@angular/core';
import { PeriodicElement } from '../alerts.component';
import { identifierName } from '@angular/compiler';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog.data';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './alert-popup.component.html',
  styleUrls: ['./alert-popup.component.scss']
})
export class AlertPopupComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data:any) {
    // this.id=data.id;
    console.log();
  }

  ngOnInit(): void {}



}

export class convert_image{
  imageBase64 : string
    constructor(image : string)
    {
        this.imageBase64 = image
    }
  }
