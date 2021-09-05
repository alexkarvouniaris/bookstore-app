import { EventEmitter, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  model: { filter: any } = { filter: null };

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterChanged(event: any) {
    event.preventDefault();
    this.changed.emit(this.model.filter);
  }

}
