import {Component} from "@angular/core";


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ["./brands.component.scss"]
})

export class BrandsComponent {
  public brandsLink: Array<string> = [
    'https://www.zigzag.am/media/mgs_brand/1/3/13sony.jpg',
    'https://www.zigzag.am/media/mgs_brand/1/0/10urbanears.jpg',
    'https://www.zigzag.am/media/mgs_brand/8/p/8panasonic.jpg',
    'https://www.zigzag.am/media/mgs_brand/1/1/11indesit.jpg',
    'https://www.zigzag.am/media/mgs_brand/6/k/6k-array.jpg',
    'https://www.zigzag.am/media/mgs_brand/1/4/14samsung.jpg',
    'https://www.zigzag.am/media/mgs_brand/4/k/4kidchenaid.jpg'
  ]
}
