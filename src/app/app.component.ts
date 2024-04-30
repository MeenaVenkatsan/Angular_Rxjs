import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from './service/CourseService';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // courseService=inject(CourseService)
  // // course:any[]=[]
  ngOnInit(){
  //   const myObservable$=this.courseService.getCourses()
  //   myObservable$.pipe(
  //     map(data=>data["payload"])
  //   ).subscribe(data=>{
  //     console.log(data[0]) 
  //     console.log(Object.values(data))})
  }
}
