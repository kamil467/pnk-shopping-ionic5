import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppService {
  public loading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  
  public isLoading(state:boolean):void{
    this.loading.next(state);
  }
}