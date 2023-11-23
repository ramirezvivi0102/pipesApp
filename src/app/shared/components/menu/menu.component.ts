import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent {

  public menuItems : MenuItem[]=[];
  ngOnInit() {
    this.menuItems = [
      {label:'New', icon: 'pi pi-fw pi-plus'},
      {label:'New', icon: 'pi pi-fw pi-download'},
      {label:'New', icon: 'pi pi-fw pi-refresh'},

    ];
    
  }

}
