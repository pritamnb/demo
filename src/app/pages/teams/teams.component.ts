import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
users: any;
student_data: any;
  constructor(private httpService: HttpClient) {
    this.users = [];
  }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.httpService.get('../../../assets/datatable.json').subscribe(
      data => {
        const countTen = 0;
        // this.users = data as string[];
        this.student_data = data;
        // console.log(this.student_data);
        // console.log(this.users);
        console.log(Object.keys(this.student_data).length);
        const dataCount = Object.keys(this.student_data).length;
        for (let i = 0; i < 10; i++ ) {
          // console.log(i);
          // for (let j = 0; j < 10; j++) {
            console.log(this.student_data[i]);

          //   // console.log(this.users);
          //   // countTen = countTen + 1;
          this.users = this.student_data;
          // }
        }

      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }
}
