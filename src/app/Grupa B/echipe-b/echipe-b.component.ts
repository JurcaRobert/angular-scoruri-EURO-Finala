import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-echipe-b',
  templateUrl: './echipe-b.component.html',
  styleUrls: ['./echipe-b.component.css']
})

export class EchipeBComponent implements OnInit {
  public countryName:string = 'Belgia';
  public flagImage:string ="//ssl.gstatic.com/onebox/media/sports/logos/6SF7yEoB60bU5knw-M7R5Q_48x48.png";
  public countryName1:string ='Danemarca';
  public flagImage1:string ="//ssl.gstatic.com/onebox/media/sports/logos/LaOvu-pyRqRso6uzff55XA_48x48.png";
  public countryName2:string ='Finlanda';
  public flagImage2:string ="//ssl.gstatic.com/onebox/media/sports/logos/OR16mUDJv-0yTyh-jxlaKQ_48x48.png";
  public countryName3:string = 'Rusia'
  public flagImage3:string ="//ssl.gstatic.com/onebox/media/sports/logos/5Y6kOqiOIv2C1sP9C_BWtA_48x48.png";
  public islogIn:boolean = false;

  constructor() { }

  ngOnInit(): void {
  
  }
  // onApasa(){
  //   this.calificate ="Portugalia";

  // }



  public ok():void{ 
    this.islogIn = true;

  }
  public close():void{
    this.islogIn = false;
  }
  public close2():void{
    this.islogIn = false;
  }
}