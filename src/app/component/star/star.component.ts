import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() rate: number = 0;
  @Input() productId: number = 0;
  @Output() voted = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  updateStar(vote: any){
    // console.log(vote, this.productId)
    this.voted.emit({
      id: this.productId,
      star: vote
    });
  }
}
