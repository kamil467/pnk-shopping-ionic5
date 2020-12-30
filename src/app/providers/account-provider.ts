import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, throwError } from "rxjs";
import { catchError, map, timestamp } from "rxjs/operators";
import { environment } from '../../environments/environment';
import { Customer } from "../interfaces/account-interface";

@Injectable({ providedIn: "root" })
export class AccountProvider {

    constructor(private angularFireStore: AngularFirestore)
    {

    }

    // create a user and return a user data with id.
    // returns a promise it should be resolved at caller side.
    createCustomer(customerObj:Customer):Promise<any>
    {
    const{ customerId,...rest} = customerObj;  // remove customerId from object as it is doc id of firebase document.
    const addedTImeStamp = {...rest,timestamp:Date.now()}   // added creation timestamp
    const customerRef = this.angularFireStore
                        .collection(environment.CUSTOMER_COLLECTION)
                        .add(addedTImeStamp)
                        .then(docRef =>{
                            const docId = docRef.id;
                           return ({...customerObj,customerId:docId})
                        }).catch(err =>
                            {
                        this.handleError(err);
                            });

                            return customerRef;

    }
     // get single document from firestore.
     getCustomer(phoneNumber:string):Observable<Customer>
    {
        console.log("Environment variable is :"+environment.CUSTOMER_COLLECTION);
        const customerRef =   this.angularFireStore
                           .collection<Customer>(environment.CUSTOMER_COLLECTION, ref => ref.where("phoneNumber","==",phoneNumber))
                           .snapshotChanges()
                           .pipe(map(data =>{
                               if(data.length > 0)
                               {
                                   const id = data[0].payload.doc.id;
                                   const payload = data[0].payload.doc.data() 
                                   return ({...payload,customerId:id})
                               }
                               else{
                                   return null;
                               }
                           }),
                           catchError(err => this.handleError(err))
                           )
                           
            return customerRef; 

    }


    private handleError(error: HttpErrorResponse,caller:string= null) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
            console.error("Detailed error is :"+error +"and caller is:"+caller);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }
}
