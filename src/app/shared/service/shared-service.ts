import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { RsideBar } from '../interfaces/interfaces';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    public rSidebar_Id_Data$: BehaviorSubject<RsideBar[]> = new BehaviorSubject<RsideBar[]>([]);
    constructor() { }

}