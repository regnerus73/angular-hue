import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface State {
  on: boolean;
  alert: any;
  reachable: boolean;
}

export interface Light {
  state: State;
  type: string;
  name: string;
  modelid: string;
  manufacturername: string;
  uniqueid: string;
  swversion: string;
  swconfigid: string;
  productid: string;
  id: string;
}

@Component({
  selector: 'app-lights', templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})

export class LightsComponent implements OnInit {
  lights: Light[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.refresh('');
  }

  refresh(event) {
    this.lights = [];
    this.httpClient.get<Light[]>('http://192.168.1.205/api/QwbubLflnNlI1KpESlAkP1xauCm7G1-JTHOd1yBZ7/lights',
      {}).subscribe(
      data => {
        console.log(data);
        for (let d in data) {
          console.log(data[d].state.on);
          data[d].id = d;
          this.lights.push(data[d]);
        }
        this.lights = this.lights.sort((l1, l2) =>
          var A = l1.name.toLowerCase();
          var B = l2.name.toLowerCase();
          if (A < B) {
            return -1;
          } else if (A > B) {
            return 1;
          } else {
            return 0;
          });
      }
      );
  }
}
