import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CoursesService } from '../service/courses.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  course = {
    name: 'Web Development Application',
    code: 'COMP5348'
  };

  detail = null;

  constructor(private _coursesService: CoursesService) {
    // this.detail = _coursesService.getCourseDetail('DekvhbRMwq4ywSe51G4D');
  }

  ngOnInit() {
  }

}
