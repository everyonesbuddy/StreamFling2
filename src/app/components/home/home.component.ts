import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // No need to listen for DOMContentLoaded, ngOnInit ensures DOM is ready
    this.addMenuClickListener();
  }

  private addMenuClickListener(): void {
    const closeButton = document.querySelector('.lg:hidden button');
    const mobileMenu = document.querySelector('.lg:hidden[role="dialog"]');

    if (closeButton && mobileMenu) {
      this.renderer.listen(closeButton, 'click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  }
}
