import {Platform, Storage, SqlStorage} from 'ionic/ionic';
import {Injectable} from 'angular2/core';

@Injectable()

export class DataService{
  constructor(platform: Platform){
    this.platform = platform;
    this.data = [];
    this.platform.ready().then(()=>{
      this.storage = new Storage(SqlStorage);
    });
  }

  getData(){
      return this.storage.query("SELECT * FROM todos");
  }

  save(item){
    this.platform.ready().then(()=>{
      this.storage.query("INSERT INTO todos (title, description) VALUES ("+item.title+","+item.description+")").then((data)=>{
        console.log(JSON.stringify(data.res));
      }, (error)=>{
        console.log("ERROR -> " + JSON.stringify(error.err));
      });
    });
  }
}
