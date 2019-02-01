import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  contents: string[];
  p: string;
  constructor(private httpService: HttpClient, private router: Router) {
    this.contents = [];
  }

  ngOnInit() {
    this.getElements();
  }
  onSelected(ch, name, path) {
    console.log(ch);
    console.log(name);
    // console.log(path);
    this.p = path;
    console.log(this.p);
  this.router.navigate([`${this.p}`]);
  }
  getElements() {
    this.httpService.get('../../assets/config.json').subscribe(
      data => {
        this.contents = data as string[];

      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
