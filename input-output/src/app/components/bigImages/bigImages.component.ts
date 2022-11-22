import {Component} from "@angular/core";


@Component({
  selector: 'app-big-images',
  templateUrl: './bigImages.component.html',
  styleUrls: ["./bigImages.component.scss"]
})

export class bigImagesComponent {
  public imagesLink: Array<any> = [
    {
      "smallImages":["https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/b/o/bosch-mum_237x316_en.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/d/u/duamondi_246x316_en.jpg"]
    },
    {
    "bigImages":[
      "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/h/a/haier_494x316_en.jpg"]
    }

  ]
}
