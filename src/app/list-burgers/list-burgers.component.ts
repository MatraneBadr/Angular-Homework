import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../../../angular-client/api/burgers.service';
@Component({
  selector: 'app-list-burgers',
  templateUrl: './list-burgers.component.html',
  styleUrls: ['./list-burgers.component.css']
})
export class ListBurgersComponent implements OnInit {
  burgers;
  constructor(private burgersService : BurgersService) { }

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers() : void {
    this.burgers = this.burgersService.listBurgers()
        .subscribe(burgers => this.burgers = burgers);
  }
  
}
