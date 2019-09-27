import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newhome',
  templateUrl: './newhome.component.html',
  styleUrls: ['./newhome.component.scss']
})
export class NewhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/app/atomAPI']);
  }
  flowcontrol(){
    this.router.navigate(['/app/flowControl'])
  }
}
