import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {catchError, map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  components = [];
  private selected: any[];


  constructor(private bookService: BookService, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }


  onSearch(key) {
    this.components = [];
    this.bookService.search(key).pipe(
      map(event => {
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        alert('NO match found');
        return of(`no match`);
      })).subscribe((event: any) => {
      this.components = event;
    });

  }
  onBuild() {
    console.log(this.components);
    this.selected = new Array();
    this.components.forEach((value) => {
      if (value.isSelected == true) {
        this.selected.push(value);
      }
    });
    console.log(this.selected);
    this.dataService.sharedData = this.selected;
    this.router.navigate(['/user/build']);
  }
}
