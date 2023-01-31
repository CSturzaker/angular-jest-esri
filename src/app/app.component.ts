import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { MapService } from './services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ng-jest';
  
  public view: any = null;
  private mapService: any;
  // The <div> where we will place the map
  @ViewChild('mapViewNode', { static: true }) public mapViewEl!: ElementRef;

  ngOnInit(): any {
    // Initialize MapView and return an instance of MapView
    this.mapService = new MapService(this.mapViewEl);
    this.mapService.initializeMap().then(() => {
      console.log("Map is loaded");
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
