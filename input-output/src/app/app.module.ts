import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {SearchComponent} from "./components/search/search.component";
import {HeaderButtonComponent} from "./components/header_button/header_button.component";
import {BannerComponent} from "./components/banner/banner.component";
import {SingleItemComponent} from "./components/items/singleItems/singleItem.component";
import {HeaderDataLinkComponent} from "./components/header/headerLinkData/header.data.link.component";
import {ItemsComponent} from "./components/items/items.component";
import {bigImagesComponent} from "./components/bigImages/bigImages.component";
import {singleBigImageComponent} from "./components/bigImages/singleBigImage/singleBigImage.component";
import {BrandsComponent} from "./components/brands/brands.component";
import {SingleBrandComponent} from "./components/brands/singleBrand/single.brand.component";
import {FooterComponent} from "./components/footer/footer.component";
import {SearchFooterComponent} from "./components/footer/searchFooter/searchFooter.component";
import {FooterMiddleComponent} from "./components/footer/footerMiddle/footerMiddle.component";
import {
  SingleFooterMiddleComponent
} from "./components/footer/footerMiddle/singleFooterMiddle/singleFooterMiddle.component";
import {FooterBottomComponent} from "./components/footer/footerBottom/footerBottom.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDataLinkComponent,
    SearchComponent,
    HeaderButtonComponent,
    BannerComponent,
    ItemsComponent,
    SingleItemComponent,
    bigImagesComponent,
    singleBigImageComponent,
    BrandsComponent,
    SingleBrandComponent,
    FooterComponent,
    SearchFooterComponent,
    FooterMiddleComponent,
    SingleFooterMiddleComponent,
    FooterBottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
