import { Component } from '@angular/core';
import { SetDisabledStateOption } from '@angular/forms';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {

  // create array of an object

  salesPersonList: SalesPerson[] = [
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 50000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 60000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 45000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 76000),
    new SalesPerson("manoj","suthan","mjcode6@gmail.com", 20000),

  ];


  constructor(){
    
  }

}
