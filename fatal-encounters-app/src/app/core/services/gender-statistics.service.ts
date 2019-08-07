import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GenderStatisticsService {

    constructor(private httpClient: HttpClient) {

    }
    getAverageAge(): Observable<any> {
        const url = "http://localhost:63936/api/FatalEncounters/GetAverageAgeByGender";
        return this.httpClient.get(url).pipe(map((data) => {
            debugger;
            if (!data) {
                return [];
            }
        }));
    }
}