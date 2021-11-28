import { Component, OnDestroy, OnInit } from '@angular/core';
import { PanZoomAPI, PanZoomConfig } from 'ngx-panzoom';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  panZoomConfig: PanZoomConfig = new PanZoomConfig({ dragMouseButton: "middle", freeMouseWheelFactor: 0.002, zoomLevels: 10});

  panZoomAPI: PanZoomAPI;
  apiSubscription: Subscription;

  divSelected: boolean;

  ngOnInit(): void {
    this.apiSubscription = this.panZoomConfig.api.subscribe( (api: PanZoomAPI) => this.panZoomAPI = api );
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();  // don't forget to unsubscribe.  you don't want a memory leak!
  }

  click() {
    this.divSelected = true;
  }

  dragStart(event: any) {
  }

  drop(event: any) {
  }
}
