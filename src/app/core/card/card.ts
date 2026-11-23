import { Component, input } from '@angular/core';
import { Conference } from '../../Model/conference';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  conf=input.required<Conference>();
}
  