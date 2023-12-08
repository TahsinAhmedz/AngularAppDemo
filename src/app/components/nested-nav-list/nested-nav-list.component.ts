import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nested-nav-list',
  templateUrl: './nested-nav-list.component.html',
  styleUrls: ['./nested-nav-list.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('collapsed <=> expanded', animate('300ms ease-out'))
    ])
  ]
})
export class NestedNavListComponent {
  @Input() menuItems!: any[] | null;

  toggleCollapse(item: any): void {
    if (item.children) {
      item.collapsed = !item.collapsed;
    }
  }

}
