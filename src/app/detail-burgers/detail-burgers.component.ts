import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BurgersService } from '../../../angular-client/api/burgers.service';
@Component({
  selector: 'app-detail-burgers',
  templateUrl: './detail-burgers.component.html',
  styleUrls: ['./detail-burgers.component.css']
})
export class DetailBurgersComponent implements OnInit {
  burger;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private burgersService : BurgersService
    ) { }

  ngOnInit(): void {
    this.getBurger();
  }

  getBurger() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.burger = this.burgersService.burgerDetail(id)
        .subscribe(burger => this.burger = burger);
  }

  goBack(): void {
    this.location.back();
  } 
}
