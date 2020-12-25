import { Component, Input, OnInit } from '@angular/core';
import { OrderProvider } from '../../providers/order-provider';

@Component({
  selector: 'app-order-histroy',
  templateUrl: './order-histroy.component.html',
  styleUrls: ['./order-histroy.component.scss'],
})
export class OrderHistroyComponent implements OnInit {
  @Input("customerId") expanded: string = null; // get the customerId passed from parent component.

constructor(private orderProvider: OrderProvider)
{
  
}
  ngOnInit(): void {
  this.orderProvider.
  }


/*8
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false }
    ];
  }**/

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

}
