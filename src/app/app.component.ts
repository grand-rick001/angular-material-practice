import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  selectedIndex: number | null = 0;
  ngOnInit() {}

  logChange(index: number | null) {
    this.selectedIndex = index;
    console.log(index);
  }
  
}
