import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'material-code';
  spinnerValue = 0;

  ngOnInit() {
    // setInterval(() => {
    //   this.spinnerValue = this.spinnerValue + 1;
    //   if (this.spinnerValue > 100) {
    //     this.spinnerValue = 0;
    //   }
    // }, 100);
  }
  
}
