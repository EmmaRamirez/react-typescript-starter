/// <reference path='../typings/react/react.d.ts' />
/// <reference path='../typings/react/react-dom.d.ts' />
/// <reference path='../node_modules/immutable/dist/immutable.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Immutable from 'immutable';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const map:Immutable.Map<string, number> = Immutable.Map({a: 1, b: 2, c: 3});

export class App extends React.Component<HelloProps, {}> {
  render () {
    return <p>{map.get('b')} Hello from {this.props.compiler} &amp; {this.props.framework}!</p>;
  }
}
