import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, map, startWith, tap } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  locations: any[] = [];
  searchTerm: string = '';

  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(data => {
      this.locations = data;
    });


    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(value => this._filter(value || '')),
      tap(x => console.log(x))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.locations.filter(location => location.title.toLowerCase().includes(filterValue) || location.details.toLowerCase().includes(filterValue));
  }
}
