import {Component, Input} from "@angular/core";

interface IHeaderButton {
  buttonData:[],
  imagesDataUrl:[],
  air:[],
  airData:[]
}

@Component({
  selector: 'app-header-button',
  templateUrl: './header_button.component.html',
  styleUrls: ['./header_button.component.scss']
})

export class HeaderButtonComponent {
  @Input()
  public data!:any



  constructor() {
    console.log(this.data)
  }

}
