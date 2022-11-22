import {Component,Input} from "@angular/core";

@Component({
  selector: 'app-items',
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent {
  @Input()
  public title!:any
  @Input()
  public items!:any

}