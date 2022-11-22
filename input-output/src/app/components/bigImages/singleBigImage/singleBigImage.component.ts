import {Component, Input} from "@angular/core";

interface IImages {
  smallImages?:Array<string>
  bigImages?:Array<string>
}

@Component({
  selector: 'app-single-big-image',
  templateUrl: './singleBigImage.component.html',
  styleUrls: ["./singleBigImage.component.scss"]
})

export class singleBigImageComponent {
  @Input()
  public images!: IImages
}
