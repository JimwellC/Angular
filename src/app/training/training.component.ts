import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { CertificationComponent } from './certification/certification.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule, SkillsComponent, CertificationComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {}
