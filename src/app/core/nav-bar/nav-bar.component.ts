import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../services/progress-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavbarComponent implements OnInit {
  progressBarMode: string;

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
    this.progressBarService.update
      .subscribe((mode: string) => {
        this.progressBarMode = mode;
      });
  }
}
