import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { QuestEvent } from '../models/questEvent';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public selectedEventKeyValues: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if (this.dataService.selectedEvent) {
      for (const key in this.dataService.selectedEvent) {
        if (this.dataService.selectedEvent.hasOwnProperty(key)) {
          this.selectedEventKeyValues.push({
            key,
            value: this.dataService.selectedEvent[key]
          });
        }
      }
    }
  }
}
