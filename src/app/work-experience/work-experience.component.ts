import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  position: string;
  company: string;
  duration: string;
  description: string;
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperienceList: WorkExperience[] = [
    {
      position: 'Summer Job',
      company: 'Cashier.',
      duration: 'March 2024 - August 2024',
      description: 'Worked as a Cashier in our local marketplace.'
    },
  ];
}
