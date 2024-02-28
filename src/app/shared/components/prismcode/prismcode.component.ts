import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-sass';
import 'prismjs/components/prism-scss';

declare const Prism: any;

@Component({
  selector: 'prismcode',
  templateUrl: './prismcode.component.html',
  styleUrls: ['./prismcode.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class PrismcodeComponent implements AfterViewInit, OnChanges {
  @ViewChild('codeEle') codeEle!: ElementRef;
  @Input() code?: string;
  @Input() language?: string;

  constructor() { }

  ngAfterViewInit() {
    Prism.highlightElement(this.codeEle.nativeElement);
  }

  ngOnChanges(changes: any): void {
    if (changes?.code) {
      if (this.codeEle?.nativeElement) {
        this.codeEle.nativeElement.textContent = this.code;
        Prism.highlightElement(this.codeEle.nativeElement);
      }
    }
  }


}
