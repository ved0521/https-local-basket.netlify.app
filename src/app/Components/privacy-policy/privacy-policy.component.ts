import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-privacy-policy',
   standalone: true, 
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
  imports: [CommonModule,RouterModule]
})
export class PrivacyPolicyComponent {
activeSection: string = '';

scrollToSection(id: string) {
  this.activeSection = id; 
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}
}
