import {Component, Input} from "@angular/core";

interface IItem {
  title: string
  p: string
  url: string
  sticker_url:string
}

@Component({
  selector: 'app-single-item',
  templateUrl: './singleItem.component.html',
  styleUrls: ["./singleItem.component.scss"]
})
export class SingleItemComponent {
  @Input()
  public item!: IItem
}
