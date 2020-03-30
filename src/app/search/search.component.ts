import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../models/searchCriteria';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchCriteria: SearchCriteria = {
    Category: null,
    City: null,
    EndDate: null,
    Keyword: null,
    StartDate: null,
    Venue: null
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.search();
  }

  search() {
    this.dataService.search(this.searchCriteria);
  }

  setStartDate(dateString: string) {
    if (!isNaN(Date.parse(dateString))) {
      this.searchCriteria.StartDate = new Date(dateString);
      this.search();
    }
  }

  setEndDate(dateString: string) {
    if (!isNaN(Date.parse(dateString))) {
      this.searchCriteria.EndDate = new Date(dateString);
      this.search();
    }
  }

}
