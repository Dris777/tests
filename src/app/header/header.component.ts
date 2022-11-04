import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";
import {HttpClient} from "@angular/common/http";
import {Zalupa} from "../zalupa";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  zalupa:Zalupa

  token = '360470d80b63c3d2457e847be2cb3fe337d4a5d534ecbee6f346918d5ecf2db304e986133b8156925292a306ed3d6654d6b1f9a9594bb95ef196151ca9d2ea5a729a9d066500f518b8328a180aad20a5a04b19e832eeeffa2d6e3c517b011eb61851c8f031da5c8b7e069ed59d2e7e07f392bafd1a382cc386216835c3e3c10b';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('http://localhost:1337/api/objects/1/', {
      headers: {
        Authorization: `Bearer ${this.token}`
      },

    }).subscribe(data => this.zalupa = data.data.attributes);


  }
  api() {
    console.log(this.zalupa)
  }
}




