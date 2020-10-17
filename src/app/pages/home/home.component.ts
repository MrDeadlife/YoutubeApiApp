import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { video } from '../../models/youtube.models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: video[] = [];

  constructor(private youtubeService: YoutubeService) {}

  ngOnInit(): void {
    this.cargarVideos();
  }
  cargarVideos(){
    this.youtubeService.getVideos().subscribe((list) => {
      this.videos.push(...list);
      //console.log(this.videos[0]);
    });
  }
  mostrarVideos(video: video) {
    console.log(video);

    Swal.fire({
      html: `
      <iframe width="100%" 
      height="315"
      src="https://www.youtube.com/embed/${video.resourceId.videoId}" 
      frameborder="0" 
      allow="accelerometer; autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture" 
      allowfullscreen>
      </iframe>
      `
    })
    
  }
}
