import { Component, Input, OnInit } from '@angular/core';

import { hero } from '../model/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css'],
})
export class HeroChildComponent implements OnInit {
  @Input() heros: hero;

  @(Input()('master')) masterName: string;
  constructor() {}

  ngOnInit(): void {}
}
