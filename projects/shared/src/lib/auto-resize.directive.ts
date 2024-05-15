import { AfterContentInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[libAutoResize]',
  standalone: true
})
export class AutoResizeDirective implements AfterContentInit {
  ele!: HTMLInputElement;
  VH=Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  constructor(private el: ElementRef<HTMLInputElement>) {
    this.ele = el.nativeElement as HTMLInputElement; 
  }
  ngAfterContentInit(): void {
      this.ele.style.height =
      this.ele.scrollHeight + 'px'; 
  }

  @HostListener('input') resizeHeight() {    
    if (this.ele.scrollHeight < this.VH/0.7 && this.ele.scrollHeight>this.ele.offsetHeight) {
      this.ele.style.height =
      this.ele.scrollHeight + 'px';
    }
  }
}
