import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

@ViewChild('name')  name !: ElementRef
@ViewChildren(HeaderComponent) headerChildren !: QueryList<HeaderComponent>;

ngOnInit() {
  this.name.nativeElement.innerText = "Pranshu Hotel";
}

  // @ViewChild('user', { read: ViewContainerRef }) vcr !: ViewContainerRef

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }
}

