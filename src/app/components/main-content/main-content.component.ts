import { Component, Input, inject } from '@angular/core';
import { DynamicService } from 'src/app/services/dynamic.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {

  private dataList = inject(DynamicService).getData();

  private currentDataIndex = 0;

  get currentData() {
    return this.dataList[this.currentDataIndex];
  }

  displayNextData() {
    this.currentDataIndex++;
    // Reset the current ad index back to `0` when we reach the end of an array.
    if (this.currentDataIndex === this.dataList.length) {
      this.currentDataIndex = 0;
    }
  }
}
