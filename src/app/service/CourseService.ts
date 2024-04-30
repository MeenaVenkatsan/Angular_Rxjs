import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../model/course";

@Injectable({
    providedIn:"root"
})
export class CourseService{
    httpClient=inject(HttpClient)
    getCourses():Observable<Course[]>{
        console.log("api service")
        return this.httpClient.get<Course[]>("http://localhost:9200/api/courses")
    }
}