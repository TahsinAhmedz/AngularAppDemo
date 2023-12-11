import { Component } from '@angular/core';
import { LocationService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  list$ = this.locationService.allBlogs$;
  searchTerm: string = '';

  constructor(private locationService: LocationService) {}
}
