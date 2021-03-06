import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';
import {HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild('fileUpload', {static: false}) fileUpload: ElementRef; files  = [];
  // part = new PartModal();
  constructor(private bookService: BookService, private route: ActivatedRoute) { }
  id: string;
  bookName: any;
  uploadButton = true;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(this.id).subscribe((event: any) => {
      this.bookName = event.book_name;
    });
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data); // file is the key in json
    formData.append('topic', file.topic);
    formData.append('keywords', file.keyword);
    formData.append('price', file.price);
    formData.append('id', this.id);

    file.inProgress = true;
    this.bookService.upload(formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            file.complete = true;
            console.log(file);
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
      if (typeof (event) === 'object') {
        console.log(event.body);
      }
    });
  }

  // For uploading multiple files
  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      this.uploadFile(file);
    });
  }

  onClick() {
    const fileUpload = this.fileUpload.nativeElement; fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        // this.part = new PartModal();
        // this.part.data = file;
        // this.part.keyword="";
        // this.part.topic = "";
        // this.part.
        this.files.push({ data: file, inProgress: false, progress: 0, keyword: '', topic: '', complete: false});
      }

    };
    fileUpload.click();

  }

  onDelete(i: number) {
    this.files.splice(i, i);
  }

  onUpload() {
    this.uploadButton = false;
    this.uploadFiles();
  }

}
