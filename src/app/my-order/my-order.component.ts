import { Component, OnInit } from '@angular/core';
import { RentService } from '../services/rent.service';
import { DatePipe } from '@angular/common';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.scss'
})
export class MyOrderComponent implements OnInit {

  rents: any
  archivedRents: any

  constructor(
    private rentService:RentService,
    private datePipe: DatePipe,
  ){}

  format(date: any): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }

  ngOnInit(): void {
      this.rentService.getRents().subscribe({
        next: (rents) => {
          console.log(rents)
          this.rents = rents;
        }
      })
      this.rentService.getAchivedRents().subscribe({
        next: (rents) => {
          console.log(rents)
          this.archivedRents = rents;
        }
      })
  }

}