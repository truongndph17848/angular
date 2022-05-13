import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-status',
  templateUrl: './table-status.component.html',
  styleUrls: ['./table-status.component.css']
})
export class TableStatusComponent implements OnInit {
  @Input() status: any;
  constructor() { }

  ngOnInit(): void {
  }

}
