import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  private courses: any[] = [];
  private page = 1;
  private loadMoreAvailable = false;

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.catalogService.getCourses(this.page)
      .subscribe(result => {
        console.log(result);
        this.loadMoreAvailable = !!result.length;
        this.courses = this.courses.concat(result || []);
      });

    // this.courses = [
    //   {
    //     title: 'Curso de exemplo 1',
    //     logo_url: 'https://cdn.eadbox.com/assets/lousa-fd96c594803578c4bac1f19378540df4e4c3fbb92ca0b67391668cbcd3270470.png',
    //     is_paid: false,
    //     description: 'este é um curso de exemplo'
    //   },
    //   {
    //     title: 'Curso de exemplo 2',
    //     logo_url: 'https://cdn.eadbox.com/assets/lousa-fd96c594803578c4bac1f19378540df4e4c3fbb92ca0b67391668cbcd3270470.png',
    //     is_paid: true,
    //     description: 'este é um curso de exemplo',
    //     price: 120.00
    //   },
    //   {
    //     title: 'Curso de exemplo 3',
    //     logo_url: 'https://cdn.eadbox.com/assets/lousa-fd96c594803578c4bac1f19378540df4e4c3fbb92ca0b67391668cbcd3270470.png',
    //     is_paid: true,
    //     description: 'este é um curso de exemplo',
    //     price: 59.90
    //   },
    //   {
    //     title: 'Curso de exemplo 4',
    //     logo_url: 'https://cdn.eadbox.com/assets/lousa-fd96c594803578c4bac1f19378540df4e4c3fbb92ca0b67391668cbcd3270470.png',
    //     is_paid: false,
    //     description: 'este é um curso de exemplo'
    //   }
    // ];
  }

  paginate(event: any): void {
    console.log('paginate');
    this.page++;
    this.search();
  }
}
