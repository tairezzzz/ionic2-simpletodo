import {Platform, Page, NavController} from 'ionic/ionic';
import {AddItemPage} from '../add-item/add-item'
import {ItemDetailPage} from '../item-detail/item-detail';
import {DataService} from '../../data/data';

@Page({
  templateUrl: 'build/pages/list/list.html'
})
export class ListPage {
  constructor(platform: Platform, nav:NavController, dataService: DataService) {

    this.nav = nav;
    this.dataService = dataService;

    this.items=[];

    platform.ready().then(()=>{
      this.dataService.getData().then((data)=>{
        this.items = [];
        if(data.res.rows.length>0){
          for(var i=0; i<data.res.rows.length;i++){
            this.items.push({title: data.res.rows.item(i).title,
               description: data.res.rows.item(i).description});
          }
        }
      }, (error)=>{
        console.log("ERROR -> " + JSON.stringify(error.err));
      })
    });
  }

  addItem(){
    this.nav.push(AddItemPage,{ListPage:this});
  }

  saveItem(item){
    this.items.push(item);
    this.dataService.save(item);
  }

  viewItem(item){
    this.nav.push(ItemDetailPage, {item:item});
  }
}
