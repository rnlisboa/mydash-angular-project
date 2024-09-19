import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomersService {
    constructor(private http: HttpClient) {

    }

    getAll(){
        return this.http.get('api/customers').subscribe(customers => {
            console.log(customers)
        })
    }
}