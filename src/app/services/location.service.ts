import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'http://localhost:3000/blogs';

  allLocations$ = this.http.get<any[]>(this.apiUrl).pipe(
    // shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBlogById(slug: string): Observable<any> {
    return this.allLocations$
      .pipe(
        // shareReplay(1),
        map(blogs => blogs.find(blog => blog.slug === slug)),
        tap(x => console.log(slug, x)),
      );
  }
}
