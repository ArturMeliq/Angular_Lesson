import {Component, Input} from "@angular/core";

interface IItem {
  title: string,
  imageUr: string
}

@Component({
  selector: 'app-single-footer-middle',
  templateUrl: './singleFooterMiddle.component.html',
  styleUrls: ['singleFooterMiddle.component.scss']
})
export class SingleFooterMiddleComponent {
  @Input()
  public item!: IItem
}
