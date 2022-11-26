import {Component, Input, EventEmitter, Output, OnInit, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
  @Input()
  public index!: number
  @Input()
  public singleDataValue!: any

  public second!: number
  public minute!: any
  public hours!: number

 public intervalID: any

  constructor() {
    setInterval(() => {
      this.singleDataValue = this.singleDataValue - 1
    })
  }

  ngOnInit() {
    if (!this.intervalID){
      this.intervalID = setInterval(() => {
        if (+this.singleDataValue >= 0) {
          this.second = Math.floor(this.singleDataValue % 60)
          this.minute = Math.floor((this.singleDataValue / 60) % 60)
          this.hours = Math.floor(this.singleDataValue / 3600)
        } else {
          console.log(this.index)
          this.deletedElement.emit(this.index)
        }
      })
    }else {
      clearInterval(this.intervalID)
    }

  }

  @Output()
  deletedElement = new EventEmitter<number>()

  handleDelete(index: number) {
    this.deletedElement.emit(index)
  }

  ngOnChanges() {

  }

  ngOnDestroy() {
   clearInterval(this.intervalID)
  }
}
