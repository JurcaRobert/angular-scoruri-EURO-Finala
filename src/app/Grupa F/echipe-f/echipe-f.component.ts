import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-f',
  templateUrl: './echipe-f.component.html',
  styleUrls: ['./echipe-f.component.css']
})
export class EchipeFComponent implements OnInit {

  public countryName:string = 'Franta';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/z3JEQB3coEAGLCJBEUzQ2A_48x48.png";
  public countryName1:string ='Germania';
  public flagImage1:string ="//ssl.gstatic.com/onebox/media/sports/logos/h1FhPLmDg9AHXzhygqvVPg_48x48.png";
  public countryName2:string ='Portugalia';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/HJ3_2c4w791nZJj7n-Lj3Q_48x48.png"
  public countryName3:string ='Ungaria';
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/YEm-U_1zHCmIknmK5sNcIg_48x48.png"
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

