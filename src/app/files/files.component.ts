import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  files: any = [];

  constructor() { }

  ngOnInit() {

    this.files = [
      {
        id: 1,
        url: 'http://localhost:4200/assets/data/ag.json',
        fileName: 'Quotation File 1',
        filetype: 'pdf',
        fileSize: '8230kb',
        expired: '30 Jan 2021',
        description: 'Quotation untuk nasabah robert dengan premium Rp 3.200.000',
        userAccess: 3
      },
      {
        id: 2,
        url: 'http://localhost:4200/assets/data/ag.json',
        fileName: 'Quotation File 2',
        filetype: 'zip',
        fileSize: '8230kb',
        expired: '30 Jan 2021',
        description: 'Quotation untuk nasabah robert dengan premium Rp 3.200.000',
        userAccess: 1
      },
      {
        id: 3,
        url: 'http://localhost:4200/assets/data/ag.json',
        fileName: 'Gambar Survey',
        filetype: 'jpg',
        fileSize: '8230kb',
        expired: '30 Jan 2021',
        description: 'Quotation untuk nasabah robert dengan premium Rp 3.200.000',
        userAccess: 1
      },
      {
        id: 4,
        url: 'http://localhost:4200/assets/data/ag.json',
        fileName: 'Data master',
        filetype: 'xls',
        fileSize: '8230kb',
        expired: '30 Jan 2021',
        description: 'Quotation untuk nasabah robert dengan premium Rp 3.200.000',
        userAccess: 6
      }
    ]

    // .pdf
    let pdf = 'picture_as_pdf';

    // jpg, png, jpeg
    let image ='photo';

    // doc, docs, xls, xlsx, ppt, pptx
    let doc = 'library_books';

    //zip, rar
    let archive = 'insert_drive_file';

    //other
    let otherFile = 'attach_file';

  } 


  download(data) {
    const name = data.fileName + '.' + data.fileType;
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', data.url);
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
