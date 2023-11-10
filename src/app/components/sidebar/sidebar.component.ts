import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  c = window.document.getElementById("mySidenav") as HTMLElement;

  /* Set the width of the side navigation to 250px */
openNav() {
  this.c.style.width = "250px";
}

/* Set the width of the side navigation to 0 */
closeNav() {
  this.c.style.width = "0";
}
}
