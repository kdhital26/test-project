import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmit = new EventEmitter<string>();
  @Input() searchText;

  constructor() { }

  ngOnInit(): void {
  }

  filterFacilitators() {
    this.searchEmit.emit(this.searchText);
  }

}
