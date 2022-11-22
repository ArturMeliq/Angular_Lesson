import {Component} from "@angular/core";

@Component({
  selector:'app-footer-middle',
  templateUrl:'./footerMiddle.component.html',
  styleUrls:['footerMiddle.component.scss']
})
export class FooterMiddleComponent {
    public items:Array<any> = [
      {
        title:'Stores',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/stores-url.svg'
      },
      {
        title:'Services',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/services.svg'
      },
      {
        title:'Promotions',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/promo-html.svg'
      },
      {
        title:'Gift card',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/gift-card-url.svg'
      },
      {
        title:'Credit',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/creditf.svg'
      },
      {
        title:'FAQ',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/faq.svg'
      },
      {
        title:'Contacts',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/contacts.svg'
      },
      {
        title:'Other',
        imageUr:'https://www.zigzag.am/pub/media/footer_imgs/financial.svg'
      },
    ]
}
