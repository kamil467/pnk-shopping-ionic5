import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { environment } from "../../environments/environment";

@Injectable({ providedIn: "root" })
export class NotificationProvider {
    constructor( private angularFireStore: AngularFirestore)
    {

    }
    sendNotificationIdToServer(customerId:string,userTokenId:string):Promise<boolean>
    {
    
        const addNotification = this.angularFireStore
                                 .collection(environment.NOTIFICATION)
                                 .add({customerId:customerId,userTokenId:userTokenId})
                                 .then(result =>{
                                     if(result)
                                     {
                                         return true;
                                     }
                                     else{
                                         return false;
                                     }
                                 }).catch((error)=>{
                                     console.error(error);
                                    console.error("some error occurred");
                                    return false;
                                 });
                                 return addNotification;
    }
}