import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-c',
  templateUrl: './echipe-c.component.html',
  styleUrls: ['./echipe-c.component.css']
})
export class EchipeCComponent implements OnInit {
  public countryName:string = 'Olanda';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/8GEqzfLegwFFpe6X2BODTg_48x48.png";
  public countryName1:string ='Austria';
  public flagImage1:string ="//ssl.gstatic.com/onebox/media/sports/logos/HwYB-wsdd6M2WmLXSkd6Sg_48x48.png";
  public countryName2:string ='Ucraina';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/DQIQtK7N4yrDIqw75pxFHg_48x48.png"
  public countryName3:string ='Macedonia de Nord';
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/JCU93J9GUw6QWkH-RBNulg_48x48.png"
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
