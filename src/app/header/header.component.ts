import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
  name = "Shailesh";
  counter = 0;
  public fruit_list = ["Oranges", "Banana", "Grapes", "Mangoes"]
  data: any = {}

  constructor(private http: Http) { 
    console.log('Hello fellow user');
    this.getContacts();
    //this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json()) 
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
      this.fruit_list = ["Kela", "Papaya"]
    })
  }
  ngOnInit() {
  }
  visible = true;

  toggleSpan() {
    this.counter++
    this.visible = !this.visible;
  }

}
