import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finala',
  templateUrl: './finala.component.html',
  styleUrls: ['./finala.component.css']
})
export class FinalaComponent implements OnInit {
  public finala:string ="Anglia - Italia";
  public flagEngland:string ="//ssl.gstatic.com/onebox/media/sports/logos/DTqIL8Ba3KIuxGkpXw5ayA_48x48.png";
  public flagItalia:string ="//ssl.gstatic.com/onebox/media/sports/logos/joYpsiaYi4GDCqhSRAq5Zg_48x48.png";
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
  
  
 
