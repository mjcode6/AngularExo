import { Component } from '@angular/core';
import { SetDisabledStateOption } from '@angular/forms';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  // create array of an object

  salesPersonList: SalesPerson[] = [
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),

  ];


  constructor(){
    
  }

}
