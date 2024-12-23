import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
  import {MatDialogActions,MatDialogClose, MatDialogContent, } from '@angular/material/dialog';
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
  imports:[ CommonModule, MatGridListModule, MatCardModule, MatButtonModule, MatDialogActions,MatDialogClose, MatDialogContent,],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  tiles: Tile[] = [
    {title:'Project Manager',  name: 'Jayvee Apiag ', cols: 12, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/jayvee.png', link:'https://www.facebook.com/zensi.kun' },
    {title:'Business Analyst',  name: 'Paul Andrei Payawal', cols: 6, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/paul.png', link:'https://www.facebook.com/zandro0829' },
    {title:'Solution Architect',  name: 'Rodge Romer Muni', cols: 6, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/muni.png', link:'https://www.facebook.com/rodgeromer.muni' },
    {title:'Technical Lead',  name: 'Ar-jay San Jose', cols: 4, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/arjayy.png', link:'https://www.facebook.com/profile.php?id=100009733811037' },
    {title:'Development Team',  name: 'Bryn Bryx Pido', cols: 4, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/pido.png', link:'https://www.facebook.com/bryn.x0' },
    {title:'Development Team',  name: 'John Adrian Fontelera', cols: 4, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/ja.png', link:'https://www.facebook.com/J3yeyqt/' },
    {title:'Development Team',  name: 'Giovanni Gabat', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/gio.png', link:'https://www.facebook.com/qlovaml' },
    {title:'Development Team',  name: 'John Ron Diza', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/ronn.png', link:'https://www.facebook.com/profile.php?id=100082578690878' },
    {title:'Development Team',  name: 'Keanu Nedruda', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/keanu.png', link:'https://www.facebook.com/leokeanu.yasou' },
    {title:'Development Team',  name: 'John Christian Valdez', cols: 3, rows: 2, color: '#e4e9f7', imagePath: 'assets/images/valdez.png', link:'https://www.facebook.com/profile.php?id=100092209904916' },
  ];
  getImageLink(tile: Tile): string {
    return tile.link;
  }
}
