import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'rsidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rsidebar.component.html',
  styleUrls: ['./rsidebar.component.scss']
})
export class RsidebarComponent implements OnInit {
  @Input() rsidebarData: any[] = [];
  current_Id: string = '';
  constructor() { }
  ngOnInit(): void {
    this.current_Id = this.getFirstSectionId();
  }

  scroll(id: string, duration: number = 200) {
    const element = document.querySelector(id);
    this.current_Id = id;
    if (element) {
      const startTime = performance.now();
      const startPosition = window.pageYOffset || document.documentElement.scrollTop;
      const targetPosition = element.getBoundingClientRect().top + startPosition - 50;
      const scrollStep = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startPosition + (targetPosition - startPosition) * progress);
        if (progress < 1) { window.requestAnimationFrame(scrollStep); }
      };
      window.requestAnimationFrame(scrollStep);
    }
  }

  getFirstSectionId() {
    const elementsWithId = document.querySelectorAll('*[id]');
    let firstSectionId: string = '';
    for (let i = 0; i < elementsWithId.length; i++) {
      const element = elementsWithId[i];
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop >= 10) { firstSectionId = element?.id; break; }
    }
    return '#'+firstSectionId;
  }



}
