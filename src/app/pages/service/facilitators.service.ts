import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class FacilitatorsService {
    constructor(private http: HttpClient) {

    }

    getAllFacilitatorsData(): Observable<HttpResponse<any>> {
        return this.http.get("assets/facilitatorsData.json", {observe: 'response'});
    }
}