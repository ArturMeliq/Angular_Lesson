import {Component, Input} from "@angular/core";


@Component({
  selector:"header-data-link",
  templateUrl:'./header.data.link.component.html',
  styleUrls:["./header.data.link.component.scss"]
})
export class HeaderDataLinkComponent {
  @Input()
  public dataHeaderLink!:string
}
