import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { QuestEvent } from '../models/questEvent';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
  public events: QuestEvent[] = [];
  searchEventSubscription: Subscription;

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.searchEventSubscription = this.dataService.filteredEvents.subscribe(events => {
      this.events = events;
    });
    this.dataService.search({
      Category: null,
      City: null,
      EndDate: null,
      Keyword: null,
      StartDate: null,
      Venue: null
    });
  }

  eventClick(event: QuestEvent) {
    this.dataService.selectedEvent = event;
    this.router.navigateByUrl('details');
  }

  ngOnDestroy(): void {
    this.searchEventSubscription.unsubscribe();
  }
}
