import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, filter, map, startWith, switchMap, tap } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  locations$ = this.locationService.allLocations$;
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

        return this.locations$.pipe(
          map(locations =>
            locations.filter(location => location.title.toLowerCase().includes(filterValue) || location.details.toLowerCase().includes(filterValue))
          )
        );
      }),
      // tap(x => console.log(x))
    );
  }

}
