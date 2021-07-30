import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-a',
  templateUrl: './echipe-a.component.html',
  styleUrls: ['./echipe-a.component.css']
})
export class EchipeAComponent implements OnInit {
  public countryName:string = 'Italia';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png";
  public countryName1:string ='Tara Galilor';
  public flagImage1:string ="https://ssl.gstatic.com/onebox/media/sports/logos/1JjnDm6Es30LryHzbudyEw_48x48.png";
  public countryName2:string ='Elvetia';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/1hy9ek4dOIffYULM6k1fqg_48x48.png"
  public countryName3:string ='Turcia';
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/hYrtTF982kN3GcYNdSPL9g_48x48.png"

 public islogIn:boolean = false;
  constructor() { }

  ngOnInit(): void {
  
  }

  public ok():void{
    this.islogIn = true;

  }
  public close():void{
    this.islogIn = false;
  }
}
