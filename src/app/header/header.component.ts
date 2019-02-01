import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // getSetting: Function;
  settingsElements: any;
  constructor(private httpService: HttpClient, private router: Router) {
    this.settingsElements = [];
  }

  ngOnInit() {
    this.getSetting();
  }
  getSetting() {
    this.httpService.get('../../assets/settings.json').subscribe(data => {
this.settingsElements = data as string[];
console.log(this.settingsElements);

    },
    (err: HttpErrorResponse) => {
      console.log(err.message);
    });
  }
  onSettingSelected(name) {
    console.log(name);
    this.router.navigate([`${name}`]);
    // this.router.navigate(['/info']);

  }
}
