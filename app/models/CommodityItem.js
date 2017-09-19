import {observable, computed, action} from 'mobx'


export default class CommodityItem {
  constructor(props){
    this.name = props.name
    this.desc = props.desc
    this.price = props.price
    // this.barcode = props.barcode
  }

  @observable
  name;
  @observable
  desc;
  @observable
  price;
  // @observable
  // barcode;
  @observable
  finished = false;

  @action
  toggleFinish() {
    this.finished = !this.finished;
  }
}
