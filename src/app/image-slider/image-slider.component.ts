import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  // path : string = 'holstein.png'
  paths = [
    'holstein.png',
    'brown-swiss.jpg',
    'charolais.jpg',
    'hereford.jpg',
    'montbeliarde.jpg'
  ]
  imageSliderObservable = new Observable<string> (
    (observer) => {
      let i = 0;
      setInterval(
        ()  => {
          if (i === this.paths.length) {
            i = 0 ;
          } else {
            observer.next(this.paths[i++])
          }
        }, 1500
      )
    }
  )
  constructor() { }

  ngOnInit(): void {
    /* this.imageSliderObservable.subscribe(
      (path) => {this.path = path}
    )*/
  }

}
