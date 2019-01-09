import { Component, OnInit } from '@angular/core';
import { IconServices, Icon} from '../../../services/icon.services';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  icon:Icon[] = [];
  constructor(private _iconService:IconServices) {
  }

  ngOnInit() {
    this.icon = this._iconService.getIcon();
  }

}
