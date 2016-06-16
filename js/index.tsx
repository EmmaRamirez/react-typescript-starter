/// <reference path='../typings/react/react.d.ts' />
/// <reference path='../typings/react/react-dom.d.ts' />
/// <reference path='../node_modules/immutable/dist/immutable.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';

import { HelloProps, App } from './hello';

ReactDOM.render(
  <App compiler='Typescript' framework='React' />,
  document.getElementById('app')
);
