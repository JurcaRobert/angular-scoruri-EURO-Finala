import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-d',
  templateUrl: './echipe-d.component.html',
  styleUrls: ['./echipe-d.component.css']
})
export class EchipeDComponent implements OnInit {

  public countryName:string = 'Anglia';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png";
  public countryName1:string ='Croatia';
  public flagImage1:string ="//ssl.gstatic.com/onebox/media/sports/logos/9toerdOg8xW4CRhDaZxsyw_48x48.png";
  public countryName2:string ='Cehia';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/8AluO-WxpcHtC0KKHmFgvg_48x48.png"
  public countryName3:string ='Scotia';
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/KNmWgtzC7DeN0X-OJEDsMA_48x48.png"
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

