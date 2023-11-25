import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicsPage',
  templateUrl: './basicsPage.component.html',
  styleUrls: ['./basicsPage.component.css']
})
export class BasicsPageComponent  {

  // declaramos las  propiedades 
  public nameLower: string = 'fernando ';
  public nameUpper: string = 'FERNANDO ';
  public fullname: string = 'ferNANdO cArSo ';

  

}
