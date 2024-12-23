import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  name: string;
  title: string;
  imagePath: string;
  link: string;
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  tiles: Tile[] = [

    { title: 'Project Manager', name: 'Paul Andrei Payawal', cols: 6, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/paul.png', link: 'https://www.facebook.com/zandro0829' },
    { title: 'Development Team', name: 'Giovanni Gabat', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/gio.png', link: 'https://www.facebook.com/qlovaml' },
    { title: '', name: '', cols: 3, rows: 2, color: '#e4e9f7', imagePath: '', link: '' },
    { title: 'Development Team', name: 'Jon Aldrick Pagulayann', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/jon.png', link: 'https://www.facebook.com/jon.aldrick.pagulayan' },
    
  ];

  gridCols: number = 12;

  constructor() {}

  ngOnInit() {
    this.updateGridCols();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateGridCols();
  }

  updateGridCols() {
    if (window.innerWidth > 1200) {
      this.gridCols = 12;
      this.tiles.forEach((tile, index) => {
        if (index < 1) {
          tile.cols = 12; // First three tiles span 4 columns each
        } else {
          tile.cols = 3.5; // Rest of the tiles span 3 columns each
        }
        tile.rows = 3; // All tiles span 3 rows
      });
    } else {
      this.gridCols = 1;
      this.tiles.forEach(tile => {
        tile.cols = 1;
        tile.rows = 2;
      });
    }
  }
}

