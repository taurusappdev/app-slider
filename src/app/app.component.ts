import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-slider';

  @ViewChild('video') videoHTML!: ElementRef;
  @ViewChild('btnPausar') btnPausar!: ElementRef;
  @ViewChild('btnPlay') btnPlay!: ElementRef;

  public widthScreen: any
  public heigthScreen: any
  public isPaused: boolean = false

  constructor() {
    this.setFileExtension()
  }

  ngOnInit(): void {
    this.heigthScreen = window.innerHeight
    this.widthScreen = window.innerWidth * 0.90
  }

  onPauseButton() {
    this.isPaused = !this.isPaused
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
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_8uhwj24qgd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_t5s21rgcfd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_w4gf91btfd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_jjymilf4id",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_9lm7da7xjd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://lookerstudio.google.com/embed/reporting/739c7683-7959-444f-a8b0-3e6cdf5c56c3/page/p_aoxls9u6jd",
      ext: "",
      duration: 0,
      frame: true
    },
    {
      item: "https://docs.google.com/spreadsheets/d/1W5ijKPLuJWkgV2uHEUWC_HVdM8NYSxiqvvEY2DVP-cM/edit?gid=1767203708#gid=1767203708",
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
    "autoplaySpeed":6000,
    "dots": true,
    "pauseOnHover": false
  };

  slickInit(e: any) {

  }

  breakpoint(e: any) {

  }

  beforeChange(e:any) {
    if(this.slides[e.nextSlide].ext === 'mp4'){
      const element = this.videoHTML.nativeElement;
      element.play()
      const btnPausar = this.btnPausar.nativeElement;
      const btnPlay = this.btnPlay.nativeElement;

      const duration = 1000 * Math.floor(element.duration)


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

  }

}
