import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'exercise';
  inputValue!: any
  data: Array<any> = []

  constructor() {

  }


  handleDataAdd() {
    if (this.inputValue) {
      this.data.push(this.inputValue)
    }
  }

  handleDataDelete(ev: any) {
    this.data.splice(ev, 1)
  }
}
