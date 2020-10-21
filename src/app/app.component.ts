import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '[Carregando Titulo...]';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getTitle();
  }

  getTitle()  {
    return this.http.get<any>('http://localhost:5000/teste').subscribe(
      x => {
        this.title = x.titulo;
      }
    );
  }
}
