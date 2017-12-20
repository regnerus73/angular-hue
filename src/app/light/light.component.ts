import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LightsComponent, Light } from '../lights/lights.component'

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html'
})
export class LightComponent {
  @Input()
  light: Light;
  @Output()
  refreshEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) { }

  getColor() {
    if (this.light.state.on === true)
      return 'yellow';
    else
      return 'black';
  }

  onClick() {
    const body = {
      on: true
    };
    this.httpClient.put('http://192.168.1.205/api/QwbubLflnNlI1KpESlAkP1xauCm7G1-JTHOd1yBZ7/lights/' + this.light.id + '/state',
      {
        on: !this.light.state.on
      }).subscribe(data => {
        console.log(data);
        this.refreshEventEmitter.emit('');
      });
  }
}
