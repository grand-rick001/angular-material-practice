import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveColumnService {
  cols: number = 1;

  constructor() { 
    this.updateCols(window.innerWidth);
  }

  getColumns() {
    this.updateCols(window.innerWidth);
    return this.cols;
  }

  updateCols(windowWidth: number) {
    if (windowWidth <= 476) {
      this.cols = 1;
    } else if (windowWidth <= 768) {
      this.cols = 2;
    } else {
      this.cols = 3;
    }
  }
}
