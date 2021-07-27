import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-e',
  templateUrl: './echipe-e.component.html',
  styleUrls: ['./echipe-e.component.css']
})
export class EchipeEComponent implements OnInit {

  public countryName:string = 'Suedia';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/OkFlRvRsKMWb8Hk20L9Trw_48x48.png";
  public countryName1:string ='Spania';
  public flagImage1:string ="//ssl.gstatic.com/onebox/media/sports/logos/5hLkf7KFHhmpaiOJQv8LmA_48x48.png";
  public countryName2:string ='Slovacia';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/6APs2PMKgCrh97J3QEz5Yg_48x48.png"
  public countryName3:string ='Polonia';
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/yTS_Piy3M1wUBnqU0n5aAw_48x48.png"
//  public calificate:string ="Echipele carea au mers mai departe";
 public islogIn:boolean = false;
//  public seSterge:boolean = false;
  constructor() { }
 
  ngOnInit(): void {
  }
  public ok():void{
    this.islogIn = true;

  }
  public close():void{
    this.islogIn = false;
  }
  // public sterge():void{
  //   this.seSterge = true;
  // }

}

