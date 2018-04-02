import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-s3-table-list',
  templateUrl: './s3-table-list.component.html',
  styleUrls: ['./s3-table-list.component.css']
})
export class S3TableListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

     AdminLTE.init();
  }

}
