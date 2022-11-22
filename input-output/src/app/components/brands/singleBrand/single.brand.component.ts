import {Component, Input} from "@angular/core";

@Component({
  selector: 'app-single-brand',
  templateUrl: './single.brand.component.html',
  styleUrls: ["./single.brand.component.scss"]
})

export class SingleBrandComponent {
  @Input()
  public singleBrandLink!: string
}
