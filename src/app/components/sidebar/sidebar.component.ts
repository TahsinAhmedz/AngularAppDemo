import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  list: any[] = [];
  searchTerm: string = '';

  constructor(private locationService: LocationService) {}

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(data => {
      this.list = data;
    });
  }
}
