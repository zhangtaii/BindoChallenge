'use strict';

const Commodity = {
  name: 'Commodity',
  primaryKey: 'barcode',
  properties: {
    name: 'string',
    desc: 'string',
    price: 'float',
    barcode: 'string',
  }
};


module.exports = {
  schema: [Commodity],
  schemaVersion: 1,
  migration: () => {}
};
