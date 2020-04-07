// import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
// import { TablesExampleDataSource, TablesExampleItem } from './tables-example-datasource';

export interface TablesExampleItem {
  physicalName: string;
  id: number;
  type: string;
  defaultVal: number;
  format:string;
  length: number;
  bin: string;
}

let EXAMPLE_DATA: TablesExampleItem[] = [
  {id: 1, physicalName: 'LoremIpsum', type: 'Data', defaultVal:20, format:'MM/DD/YY', length:5, bin:'../assets/bin.svg' },
  {id: 2, physicalName: 'Column 1', type: 'Decimal', defaultVal:15, format:'Text', length:1, bin:'../assets/bin.svg' },
  {id: 3, physicalName: 'File_Process_date', type: 'Date', defaultVal:20, format:'abc', length:8, bin:'../assets/bin.svg' },
  {id: 5, physicalName: 'Filler', type: 'Alpha', defaultVal:15, format:'', length:7, bin:'../assets/bin.svg' }
  ];
  let EXAMPLE_DATA2: TablesExampleItem[] = [
    {id: 1, physicalName: 'LoremIpsum', type: 'Data', defaultVal:20, format:'1234', length:1, bin:'../assets/bin.svg' },
    {id: 2, physicalName: 'Column 1', type: 'Date', defaultVal: 0, format:'abc', length:8, bin:'../assets/bin.svg' },
    {id: 3, physicalName: 'Filler', type: 'Numeric', defaultVal: 20, format:'Text', length:7, bin:'../assets/bin.svg' }
    
    ];
    let EXAMPLE_DATA3: TablesExampleItem[] = [
      {id: 1, physicalName: 'LoremIpsum', type: 'Numeric', defaultVal:0, format:'MM/DD/YY', length:100, bin:'../assets/bin.svg' },
      {id: 2, physicalName: 'LoremIpsum', type: 'Numeric', defaultVal:125, format:'abc', length:10, bin:'../assets/bin.svg' }
      ];
  

@Component({
  selector: 'app-tables-example',
  templateUrl: './tables-example.component.html',
  styleUrls: ['./tables-example.component.css']
})
export class TablesExampleComponent implements OnInit {

  dataSourceOne : MatTableDataSource<TablesExampleItem>
  dataSourceTwo : MatTableDataSource<TablesExampleItem>
  dataSourceThree : MatTableDataSource<TablesExampleItem>

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['physicalName', 'type', 'defaultVal', 'format', 'length', 'bin'];

  selectedRowIndex : number;
  selectedDataSourceNumber: number;
  showEditable:boolean = false;
  isInitial: boolean = true;
  expandTb:boolean = false;

  ngOnInit() {
    this.dataSourceOne = new MatTableDataSource(EXAMPLE_DATA)
    this.dataSourceTwo = new MatTableDataSource(EXAMPLE_DATA2)
    this.dataSourceThree = new MatTableDataSource(EXAMPLE_DATA3)

  }

  handleRowClick(datasourceNumber: number, rowIndex: number) {
    this.selectedRowIndex = rowIndex;
    this.selectedDataSourceNumber = datasourceNumber;
    this.isInitial = false;
    this.showEditable = true;
  }

  cancelChange(rowIndex:number){
    this.selectedRowIndex = rowIndex;
    this.isInitial = true;
    this.showEditable = false;
    if(this.showEditable == false) {
      this.isInitial = true;
      event.stopPropagation();
    } else {
      this.isInitial =true;
    }
  }

  addFieldValue(dataSourceNumber: number) {
    let obj: TablesExampleItem = {
      physicalName: '',
      id: null,
      type: '',
      defaultVal: null,
      format:'',
      length: null,
      bin: '',
    };
    if (dataSourceNumber === 1) {
      obj.id = this.dataSourceOne.data[this.dataSourceOne.data.length - 1].id + 1;
      this.dataSourceOne.data.push(obj)
      this.dataSourceOne = new MatTableDataSource(this.dataSourceOne.data)
    } else if (dataSourceNumber === 2) {
      obj.id = this.dataSourceTwo.data[this.dataSourceTwo.data.length - 1].id + 1;
      this.dataSourceTwo.data.push(obj)
      this.dataSourceTwo = new MatTableDataSource(this.dataSourceTwo.data)
    } else if (dataSourceNumber === 3) {
      obj.id = this.dataSourceThree.data[this.dataSourceThree.data.length - 1].id + 1;
      this.dataSourceThree.data.push(obj)
      this.dataSourceThree = new MatTableDataSource(this.dataSourceThree.data)
    }
  }

  // deleteRowData(dataSource, rowNumber) {

  //     dataSource.data.splice(rowNumber-1, 1);
  //     this.dataSourceOne= new MatTableDataSource(dataSource.data);
 
  // }
  // saveRecord(rowIndex:number) {

  // }
 

}
