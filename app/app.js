import {App, Platform, Storage, SqlStorage} from 'ionic/ionic';
import {ListPage} from './pages/list/list';
import {DataService} from './data/data';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [DataService]
})
export class MyApp {
  constructor(platform: Platform) {
    this.rootPage = ListPage;
    this.platform = platform;
    this.initializeApp();

    platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  initializeApp(){
    this.storage = new Storage(SqlStorage);
    this.platform.ready().then(()=>{
      this.storage.query("CREATE TABLE IF NOT EXISTS todos(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT)").then((data)=>{
        console.log("TABLE CREATED -> " + JSON.stringify(data.res));
      },(error)=>{
        console.log("ERROR -> " + JSON.stringify(error.err));
      });
    }
  }
}
