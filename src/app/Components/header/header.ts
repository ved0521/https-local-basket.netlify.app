import { AfterViewInit, Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements AfterViewInit {
  isScrolled = false;
  isMenuOpen = false;
  selectedMenu = 'home';
  showInfoStrip = true;
  sections = ['sliderSection', 'services', 'products', 'aboutus', 'contact'];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.toLowerCase().startsWith('/home')) {
          this.showInfoStrip = true;
        } else {
          this.showInfoStrip = false;
          this.selectedMenu = '';
        }
      }
    });
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) this.scrollTo(fragment);
    });
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;

    if (!this.router.url.toLowerCase().startsWith('/home')) {
      this.router.navigate(['/home']).then(() => setTimeout(() => this.scrollTo(menu), 200));
    } else {
      this.scrollTo(menu);
      history.replaceState(null, '', '#' + menu);
    }

    this.isMenuOpen = false; 
  }

  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    for (let section of this.sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.selectedMenu = section;
          break;
        }
      }
    }
  }
 goToHome() {
  this.selectedMenu = 'home';
  this.isMenuOpen = false;

  if (this.router.url.toLowerCase().startsWith('/home')) {
    // Already on home page → just scroll to slider section
    const el = document.getElementById('sliderSection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    // Navigate to home, then scroll after route change
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        const el = document.getElementById('sliderSection');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    });
  }
}
}


