import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {HttpErrorResponse, HttpParams} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {UserService} from '../../services/user.service';
import {catchError, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  @ViewChild('a', {static: false}) aLink: ElementRef;
  public selected: any;
  public ids: string;
  public toc: any;
  public downloadLink: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private sharedData: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selected = this.sharedData.sharedData;
    console.log('build');
    console.log(this.selected);
  }

  onAddBook(ebookname: string, generatedby: string) {
    console.log(this.selected);
    this.ids = '';
    this.selected.forEach((value) => {
      this.ids = this.ids + value.id + ',';
    });
    this.ids = this.ids.slice(0, this.ids.length - 1);
    ///


    // console.log(httpParams.toString());
    // this.downloadLink = 'localhost:8091/file?';
    // this.downloadLink = this.downloadLink + httpParams.toString();
    // console.log(this.downloadLink);
    this.userService.addBook(11, this.ids, ebookname, generatedby, this.toc).pipe(
      map(event => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return of(` Add Book failed.`);
      })).subscribe((event: any) => {
      // if (typeof (event) === 'object') {
      console.log(event.body);
      this.router.navigate(['/user/userBook']);
      // }
    });
    //
    // this.downloadService.download(this.ids,this.toc).subscribe((event: any) => {
    //   console.log(event.body);
    //   this.downloadLink = event;
    // });
    // this.aLink.nativeElement.click();
    // console.log(this.downloadLink);
    // window.open(this.downloadLink);
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selected, event.previousIndex, event.currentIndex);
  }

}
