import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  textEditor: boolean;
  datePicker: boolean;
  dragDrop: boolean;
  users: any;
  student_data: any;
  selectedDate: any;
  tooltipArray: any;
  htmlContent: any;
  demo = '# Angular 6';

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];
  tootltipArray = [
    ['bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript'],
    ['fontName', 'fontSize', 'color'],
    ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent'],
    ['cut', 'copy', 'delete', 'removeFormat', 'undo', 'redo'],
    ['paragraph', 'blockquote', 'removeBlockquote', 'horizontalLine', 'orderedList', 'unorderedList'],
    ['link', 'unlink', 'image', 'video', 'preview' ]
];
  constructor(private httpService: HttpClient) {
    this.users = [];
    this.textEditor = false;
    this.datePicker = false;
    this.dragDrop = false;
  }

  ngOnInit() {
    console.log(this.htmlContent);
  }
  onClick(event) {
    const target = event.target;
    console.log(target.attributes.id);
    const ch = target.attributes.id;
    const id = ch.nodeValue;
    console.log(id);
    switch (id) {
      case '1':
        this.textEditor = true;
        this.dragDrop = false;
        this.datePicker = false;
        break;
      case '2':
        this.datePicker = true;
        this.dragDrop = false;
        this.textEditor = false;
        break;
      case '3':
        this.dragDrop = true;
        this.datePicker = false;
        this.textEditor = false;
        break;
    }
  }
  // functionDragDrop() {
    drop(event: CdkDragDrop<string[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
      }
    }
    // hidePreview() { console.log(e.getContent());}
  // }

}

