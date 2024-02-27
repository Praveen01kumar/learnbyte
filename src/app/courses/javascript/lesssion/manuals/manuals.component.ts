import { Component, OnDestroy, OnInit } from '@angular/core';
import { RsideBar } from 'src/app/shared/interfaces/interfaces';
import { SharedService } from 'src/app/shared/service/shared-service';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.scss']
})
export class ManualsComponent implements OnInit, OnDestroy {

  constructor(public shearedService: SharedService) { }

  ngOnInit(): void { this.callOninIt(); }

  callOninIt() {
    const data: RsideBar[] = [];
    this.shearedService.rSidebar_Id_Data$.next(data);
  }

  ngOnDestroy(): void { this.shearedService.rSidebar_Id_Data$.next([]); }

}
