import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ExpandableObject, OrderSummaryToBeDisplayed } from '../../interfaces/order-interface';
import { OrderProvider } from '../../providers/order-provider';

@Component({
  selector: 'app-order-histroy',
  templateUrl: './order-histroy.component.html',
  styleUrls: ['./order-histroy.component.scss'],
})
export class OrderHistroyComponent implements OnInit {
  @Input("customerId") customerId: string = null; // get the customerId passed from parent component.

  expandableObjs:ExpandableObject[];

constructor(private orderProvider: OrderProvider)
{
  
}
  ngOnInit(): void {
  this.orderProvider.getHistoryOrderByOrderSummaryId("summary-id").pipe(map(m =>{
    this.expandableObjs.push(
      {
        expanded:false,
        orderSummary:m
      }
    )
  }));
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
      this.expandableObjs.map(listItem => {
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
