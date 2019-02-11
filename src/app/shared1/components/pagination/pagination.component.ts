import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('allItems') allItems: any;
  // tslint:disable-next-line:no-input-rename
  @Input('startIndex') startIndex: any;
  // tslint:disable-next-line:no-input-rename
  @Input('endIndex') endIndex: any;
  // tslint:disable-next-line:no-input-rename
  @Input('pages') pages: any;
  checkAll: boolean;
  constructor(private http: HttpClient) {
    // this.checkAll = false;
  }

  // array of all items to be paged
  // allItems: any[];

  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  totalPages: any;
  ngOnInit() {
    // get dummy data
    // this.http.get('../../../assets/datatable.json').subscribe(data => {
    //   // set items to json response
    //   this.allItems = data as string[];
    //   console.log(this.allItems);
    //   // initialize to page 1
      this.setPage(1);
    // });
    // console.log(this.allItems);

  }

  setPage(page: number) {
    // get pager object from service
    // this.pager = this.pagerService.getPager(this.allItems.length, page);
    this.pager = this.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    // calculate total pages
    this.totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > this.totalPages) {
      currentPage = this.totalPages;
    }

    let startPage: number, endPage: number;
    if (this.totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = this.totalPages;
    } else {
      // more than 10 total pages so calculate start and end pages
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= this.totalPages) {
        startPage = this.totalPages - 9;
        endPage = this.totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end item indexes
    this.startIndex = (currentPage - 1) * pageSize;
    this.endIndex = Math.min(this.startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    this.pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: this.totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      pages: this.pages
    };
  }
}
