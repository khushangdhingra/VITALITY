
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { map } from 'rxjs/operators';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';


export interface PeriodicElement {
  id: number;
  class: string;
  createdAt: Date;
  base64Image: string;
}

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'createdAt', 'class','base64Image'];
  dataSource:MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) matsort:MatSort;
  constructor(private alertService: AlertService, private dialogRef:MatDialog) { }




  ngOnInit(): void {
    this.alertService.getAlerts().pipe(
      map((response: any)=>{
        return response;
      })
    ).subscribe(response=>{
      // this.dataSource = response;
      this.dataSource=new MatTableDataSource(response);
     this.dataSource.paginator=this.paginator;

    });

    // this.dataSource.paginator=this.paginator;
        // this.dataSource.sort=this.matsort;

  }


  filterData($event:any){
    this.dataSource.filter=$event.target.value;
  }

  onCreate(element){
    this.dialogRef.open(AlertPopupComponent,{
      data: element
    });
  }

  onChange($event:any){

  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}


export class convert_image{
  imageBase64 : string
    constructor(image : string)
    {
        this.imageBase64 = image
    }



}
