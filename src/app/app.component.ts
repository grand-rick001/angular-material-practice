import { Component, OnInit, HostListener } from '@angular/core';
import { ResponsiveColumnService } from './services/responsive-column.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'material-code';
  cols: number;

  items: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private responsiveColumnService: ResponsiveColumnService) { 
    this.cols = this.responsiveColumnService.getColumns();
  }

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])

  onResize(event: any) {
    this.cols = this.responsiveColumnService.getColumns();
  }
  
}
