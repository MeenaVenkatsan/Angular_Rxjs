import {Component, OnInit, inject} from '@angular/core';
import {Course} from "../model/course";
import {interval, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import { CourseService } from '../service/CourseService';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    constructor() {

    }
    courseService=inject(CourseService)
    beginerCourse$:Observable<Course[]>;
    advancedCourse$:Observable<Course[]>;
    // course:any[]=[]
    ngOnInit(){
      const myObservable$=this.courseService.getCourses()
      const course$=myObservable$.pipe(
        map(data=>{ console.log("testing") 
        return data["payload"] 
    })
      )
      this.beginerCourse$=course$.pipe(
        map((data)=>
        data.filter((datum)=>datum.category=="BEGINNER")))
    //     console.log(this.beginerCourse$)
    this.advancedCourse$=course$.pipe(
            map((data)=>
            data.filter((datum)=>datum.category=="ADVANCED")))
    }
}
