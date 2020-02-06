import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { UserListService } from 'app/services/user-list.service';

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
    private userService: UserListService
  ) {

  }

  ngOnInit() {

    this.http.get('/assets/data/agent.json')
      .subscribe((response: any) => {
        console.log(response);
        this.dataRow = response.data;
        console.log(this.dataRow);
      });

    this.userService.getRoleData().subscribe(
      (result: any) => {
        console.log(result);
      });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'role', header: 'Role' },
      { field: 'email', header: 'Email' },
      { field: 'phone', header: 'Phone' },
    ];

  }
  download() {
    console.log('data');
  }

}
