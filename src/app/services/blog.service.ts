import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, filter, find, map, shareReplay, tap } from 'rxjs';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:3000/blogs';

  allBlogs$ = this.http.get<any[]>(this.apiUrl).pipe(
    // shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  getBlogById(slug: string | null): Observable<Blog> {
    return this.http.get<any>(this.apiUrl + `?slug=${slug}`)
      .pipe(
        // shareReplay(1),
        map(blogs => blogs.find((blog: { slug: string | null; }) => blog.slug === slug)),
        // tap(x => console.log(slug, x)),
      );
  }

  filterBySearch(searchTerm: string): Observable<Blog[]> {
    return this.http.get<any>(this.apiUrl + `?q=${searchTerm}`)
      .pipe(
        // shareReplay(1),
        // tap(x => console.log(searchTerm, x)),
      );
  }
}
