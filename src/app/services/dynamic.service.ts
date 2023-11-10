import { Injectable, Type } from '@angular/core';
import { DynamicContentComponent } from '../components/dynamic-content/dynamic-content.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  constructor() { }
  getData() {
    return [
      {
        component: DynamicContentComponent,
        inputs: {
          headline: 'Home',
          body: 'This is home!',
        },
      },
      {
        component: DynamicContentComponent,
        inputs: {
          headline: 'doraemon',
          body: 'get me a gadget, doraemon',
        },
      },
    ] as {component: Type<any>, inputs: Record<string, unknown>}[];
  }
}
