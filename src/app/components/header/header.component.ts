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
  searchTerm: string = '';

  myControl = new FormControl('');
  filteredOptions$!: Observable<any[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.filteredOptions$ = this.myControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      switchMap(value => {
        const filterValue = value!?.toLowerCase();

        return this.locationService.filterBySearch(filterValue)
      }),
    );
  }

}
