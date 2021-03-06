import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }


// Begin Inspection

getInspectionList():Observable<any[]> {

  var x = this.http.get<any>(this.inspectionAPIUrl + '/inspections');

  console.log(x);
   return x;
}

addInspection(data:any) {
  return this.http.post(this.inspectionAPIUrl + '/inspections', data);
}


updateInspection(id:number|string, data:any) {
  return this.http.put(this.inspectionAPIUrl + `/inspections/${id}`,data);
}

deleteInspection(id:number|string) {
  return this.http.delete(this.inspectionAPIUrl + `/inspections/${id}`);
}

// End Inspection


// Begin Inspection Types

getInspectionTypesList():Observable<any[]> {
  return this.http.get<any>(this.inspectionAPIUrl + '/inspectionTypes');
}

addInspectionTypes(data:any) {
 return this.http.post(this.inspectionAPIUrl + '/inspectionTypes', data);
}


updateInspectionTypes(id:number|string, data:any) {
 return this.http.put(this.inspectionAPIUrl + `/inspectionTypes/${id}`,data);
}

deleteInspectionTypes(id:number|string) {
 return this.http.delete(this.inspectionAPIUrl + `/inspectionTypes/${id}`);
}

// End Inspection Types


// Begin Statuses

getStatusList():Observable<any[]> {
  return this.http.get<any>(this.inspectionAPIUrl + '/status');
}

addStatus(data:any) {
 return this.http.post(this.inspectionAPIUrl + '/status', data);
}


updateStatus(id:number|string, data:any) {
 return this.http.put(this.inspectionAPIUrl + `/status/${id}`,data);
}

deleteStatus(id:number|string) {
 return this.http.delete(this.inspectionAPIUrl + `/status/${id}`);
}

// End Statuses

}
