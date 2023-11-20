import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = '../../assets/locations.json';

  allLocations$ = this.http.get<any[]>(this.apiUrl);

  constructor(private http: HttpClient) {}

  getLocations(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getObjectById(slug: string): Observable<any> {
    console.log(slug);
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        map(objects => objects.find(obj => obj.slug === slug)),
        tap(x => console.log(slug, x))
      );
  }
}
