import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyComponentComponent } from './my-component/my-component.component';
import { HeaderComponent } from './header/header.component';
import { MyUiLibModule } from '@org/my-ui-lib';
import { RandomuserService } from '@org/my-ui-lib';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [ MyComponentComponent,HeaderComponent,RouterModule,MyUiLibModule,CommonModule],
  selector: 'org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp2';
}
