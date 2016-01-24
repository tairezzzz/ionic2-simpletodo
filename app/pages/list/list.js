import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item'

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(nav:NavController) {

    this.nav = nav;

    this.items=[
      {title:'hi', description:'whats up'},
      {title:'hi2', description:'whats up'},
      {title:'hi3', description:'whats up'},
    ];
  }

  addItem(){
    this.nav.push(AddItemPage,{ListPage:this});
  }
}
