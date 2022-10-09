import { animate, state, style, transition, trigger} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/user';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';






@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],

  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('250ms ease-in-out'))
    ]),

    trigger('slideInOut_burger', [
      state('in_b', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out_b', style({
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition('in_b => out_b', animate('300ms ease-in-out')),
      transition('out_b => in_b', animate('250ms ease-in-out'))
    ]),
  ]





})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;

  public menuState:string = 'out';
  public hamburgerMenuState:string = 'out_b';


  constructor(private basketService: BasketService, private accountService: AccountService,) { }

  ngOnInit() {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;

  }

  public toggleMenu(){
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

  }

  public toggleHamburgerMenu() {
    this.hamburgerMenuState = this.hamburgerMenuState === 'out_b' ? 'in_b' : 'out_b';
  }

  logout() {
    this.accountService.logout();
  }

}
