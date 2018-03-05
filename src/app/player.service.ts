import { Injectable } from '@angular/core';
import { Player } from './player';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class PlayerService {

  private serverUrl: string = 'https://txp4-backend.herokuapp.com/api/';
  private getFullUrl: string = this.serverUrl + 'player/get-full/';
  private equipUrl: string = this.serverUrl + 'player/equip/';

  constructor(private http: HttpClient) { }

  getPlayer(playerLogin: string): Observable<Player> {
    console.info("Rquesting API: " + this.getFullUrl + playerLogin);
    return this.http.get<Player>(this.getFullUrl + playerLogin)
      .pipe(
        catchError(this.handleError('getPlayerFailed', null))
      );
  }

  postEquip(playerLogin: string, index: number): Observable<any> {
    console.info("Rquesting API: " + this.equipUrl + playerLogin);
    return this.http.post(this.equipUrl + playerLogin, { perfPartIndex: index })
      .pipe(
        catchError(this.handleError('equipFailed', null))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
    }

}
