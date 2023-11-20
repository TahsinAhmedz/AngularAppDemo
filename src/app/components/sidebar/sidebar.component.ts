import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  list$ = this.locationService.allLocations$;
  searchTerm: string = '';

  constructor(private locationService: LocationService) {}
}
