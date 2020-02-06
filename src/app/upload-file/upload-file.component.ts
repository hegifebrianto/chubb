import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  canAccess = new FormControl();
  userList: string[] = ['hello@email.com', 'helli@email.com', 'hellu@email.com', 'helle@email.com', 'hella@email.com'];
  
  constructor() { }

  ngOnInit() {
  }

  myUploader(event) {
    //event.files == files to upload
}

}
