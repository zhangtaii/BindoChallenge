import {observable, computed} from 'mobx'
import {ListView} from 'react-native'
import api from './api'
import realm from '../realm'

const defaultCommodities = [
  {name: 'Canberra', desc: '2600', price: 12.1, barcode: '1'},
  {name: 'Sydney', desc: '2000', price: 12.2, barcode: '2'},
  {name: 'Melbourne', desc: '3000', price: 12.3, barcode: '3'},
  {name: 'Brisbane', desc: '4000', price: 12.4, barcode: '4'},
  {name: 'Perth', desc: '6000', price: 12.5, barcode: '5'},
  {name: 'Adelaide', desc: '5000', price: 12.6, barcode: '6'},
  {name: 'Hobart', desc: '7000', price: 12.7, barcode: '7'},
  {name: 'Darwin', desc: '0800', price: 12.8, barcode: '8'},
];

class CommodityStore {
  @observable count = 0;
  @observable commodities = [];
  ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  @computed get dataSource() {
    return this.ds.cloneWithRows(this.commodities.slice());
  }

  constructor() {

  }

  subscribeToCommodity() {
    let context = realm.current();
    context.objects('Commodity').addListener((commodities, changes) => {
      console.log('commodities addListener',commodities)
      let data = []
      for (var i = 0; i < commodities.length; i++) {

        var commodity = commodities[i];
        var item = {
          name: commodity.name,
          desc: commodity.desc,
          price: commodity.price,
          barcode: commodity.barcode,
        }
        data.push(item);
      };

      this.commodities = data;

      // this.getAllCommodities()

      // Update UI in response to inserted objects
      changes.insertions.forEach((index) => {
        let insertedCommodity = commodities[index];
      });

      // Update UI in response to modified objects
      changes.modifications.forEach((index) => {
        let modifiedCommodity = commodities[index];
      });
    })
  }

  refreshStore(){
    // this.getAllCommodities()
  }

  async initialise() {
    this.subscribeToCommodity()
    let context = realm.current();
    try {
      let commodities = context.objects('Commodity');
      if (commodities.length > 0) {
        // this.refreshStore()
        this.getAllCommodities()
        return;
      }

      for (var i = 0; i < defaultCommodities.length; i++) {
        var commodity = defaultCommodities[i];

        context.write(() => {
          context.create('Commodity', {
            name: commodity.name,
            desc: commodity.desc,
            price: commodity.price,
            barcode: commodity.barcode,
          });
        });
      }
    } finally {
      context.close();
    }
  }

  getAllCommodities() {
    let context = realm.current();
    var data = [];
    try {
      let commodities = context.objects('Commodity');
      this.count = commodities.length;
      for (var i = 0; i < commodities.length; i++) {
        var commodity = commodities[i];
        var item = {
          name: commodity.name,
          desc: commodity.desc,
          price: commodity.price,
          barcode: commodity.barcode,
        }
        data.push(item);
      }
    } finally {

      context.close();
    }
    this.commodities = data;
  }

  deleteCommodity(barcode) {
    let context = realm.current();
    try {
      let commodity = context
        .objects('Commodity')
        .filtered(`barcode = "${barcode}"`);
      ;

      context.write(() => {
        context.delete(commodity);
      });
      this.refreshStore()

    } finally {
      context.close();
    }
  }

  async addCommodity(name, desc, price, barcode) {
    let context = realm.current();
    try {
      let commodity = context
        .objects('Commodity')
        .filtered(`barcode = "${barcode}"`);

      if (commodity.length > 0) {
        //throw an error to alert
        throw Error('sdfa')
        return;
      }

      context.write(() => {
        context.create('Commodity', {
          name: name,
          desc: desc,
          price: price,
          barcode: barcode
        });
      });
      this.refreshStore()
    } finally {
      context.close();

    }
  }

  clearAllData() {
    let context = realm.current();
    try {
      let commodities = context.objects('Commodity');
      context.write(() => {
        context.delete(commodities);
      });
      this.refreshStore()

    } finally {
      context.close();
    }
  }

}

const commodityStore = new CommodityStore();

export default commodityStore;
