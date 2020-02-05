import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  files1: TreeNode[];
  cols: any[];
  dataRow: TreeNode[];

  constructor(
    private http: HttpClient,
  ) {

 }

  ngOnInit() {

    this.http.get('/assets/data/agent.json')
      .subscribe((response: any) => {
        this.dataRow = response.data;
      });

    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'type', header: 'Type' },
      { field: 'icon', header: 'Icon' },
      { field: 'url', header: 'Url' }
    ];

  }

}
