import {Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item'
import {ItemDetailPage} from '../item-detail/item-detail';

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

  viewItem(item){
    this.nav.push(ItemDetailPage, {item:item});
  }
}
