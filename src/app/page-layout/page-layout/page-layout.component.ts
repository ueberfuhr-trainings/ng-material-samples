import {Component, Input, OnInit} from '@angular/core';

/**
 * An entry that is made into the navigation.
 */
export interface NavigationEntry {

  /**
   * The label of the navigation entry.
   */
  label: string,
  /**
   * The router link.
   */
  routerLink: string,
  /**
   * The material icon, if any should be shown.
   */
  icon?: string

}

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {

  @Input() title = '';
  @Input() navigation: NavigationEntry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
