import { Component, OnInit } from '@angular/core';
import { ApiPadawanService } from '../service/api-padawan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiPadawanService) { }

  ngOnInit(): void {
  }

}
