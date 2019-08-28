import React from 'react';
import { Provider } from 'mobx-react';

import ShopModel from './src/models/ShopModel';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider shopStore={ShopModel}>{element}</Provider>
);
