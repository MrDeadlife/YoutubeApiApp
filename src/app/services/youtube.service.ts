import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YoutubeResponse } from '../models/youtube.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  private youtubeApiURl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyBtxBnNfwKuyVcdkhLu7RIvLGC0FN87H_w';
  private channelUrl = 'UUEuOwB9vSL1oPKGNdONB4ig';
  private nextPageToken = '';

  constructor(private http: HttpClient) {}

  getVideos() {
    const url = `${this.youtubeApiURl}/playlistItems`;

    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '15')
      .set('playlistId', this.channelUrl)
      .set('key', this.apiKey)
      .set('pageToken', this.nextPageToken);

    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }

  getNextVideos(nextTokenPage: string) {
    nextTokenPage = this.nextPageToken;
  }
}
