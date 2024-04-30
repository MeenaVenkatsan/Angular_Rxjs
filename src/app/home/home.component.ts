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
        map(data=>data["payload"] ),
        shareReplay(), //eventhough course$ has more subscribers. this makes sure observable is invloked only once.
        tap(()=>console.log("we can create log or to check how many times API call happened."))
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
