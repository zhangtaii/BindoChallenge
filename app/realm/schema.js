'use strict';

import schema_v1 from './schema-v1';

class Schema {
  schemas: Array<any>;

  constructor() {
    this.schemas = [
      schema_v1,
    ];
  }

  current() {
    return this.schemas[this.schemas.length - 1];
  }
}

module.exports = Schema;
