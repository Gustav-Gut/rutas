import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log('render character');
  }

  toLocations(){
    this.router.navigate(['locations']);
  }

}
