import { Component, ElementRef, ViewChild } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-slider';

  @ViewChild('video') videoHTML!: ElementRef;
  @ViewChild('btnPausar') btnPausar!: ElementRef;
  @ViewChild('btnPlay') btnPlay!: ElementRef;


  constructor() {
    this.setFileExtension()
  }

  slides = [
    {
      item: "1-80.jpg",
      ext: "",
      duration: 0,
      frame: false

    },
    {
      item: "2-80.jpg",
      ext: "",
      duration: 0,
      frame: false

    },
    {
      item: "5_s.jpeg",
      ext: "",
      duration: 0,
      frame: false

    },
    {
      item: "6-80.jpg",
      ext: "",
      duration: 0,
      frame: false

    },
    {
      item: "video1.mp4",
      ext: "",
      duration: 0,
      frame: false
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_f6hxkun0fd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://docs.google.com/spreadsheets/d/1W5ijKPLuJWkgV2uHEUWC_HVdM8NYSxiqvvEY2DVP-cM/pubhtml?widget=true&amp;headers=false",
      ext: "",
      duration: 0,
      frame: false,
      type: "sheet"
    }
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed":1500,
    "dots": true
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e:any) {
    console.log('afterChange');

  }

  beforeChange(e:any) {
    if(this.slides[e.nextSlide].ext === 'mp4'){
      const element = this.videoHTML.nativeElement;
      element.play()
      const btnPausar = this.btnPausar.nativeElement;
      const btnPlay = this.btnPlay.nativeElement;
      console.log(btnPausar);
      const duration = 1000 * Math.floor(element.duration)
      console.log(duration);

      btnPausar.click()
      setTimeout(() => {
        btnPlay.click()
      }, duration)
    }
  }

  getFileExtension(filename:string){
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
  }

  setFileExtension(){
    this.slides.forEach(file => {
      if(file.ext !== "frame") {
        file.ext = this.getFileExtension(file.item)
      }
    })
    console.log(this.slides);

  }

}
