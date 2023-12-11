import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs';
import { LocationService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  blogs$ = this.locationService.allBlogs$;
  searchTerm: string = '';

  myControl = new FormControl('');
  filteredOptions$!: Observable<any[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.filteredOptions$ = this.myControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      switchMap(value => {
        const filterValue = value?.toLowerCase();

        return this.blogs$.pipe(
          map(blogs =>
            blogs.filter(blog => blog.title.toLowerCase().includes(filterValue) || blog.details.toLowerCase().includes(filterValue))
          )
        );
      }),
      // tap(x => console.log(x))
    );
  }

}
