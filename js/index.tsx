/// <reference path='../typings/react/react.d.ts' />
/// <reference path='../typings/react/react-dom.d.ts' />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<HelloProps, {}> {
  render () {
    return <p>Hello from {this.props.compiler} &amp; {this.props.framework}!</p>;
  }
}

ReactDOM.render(
  <App compiler='Typescript' framework='React' />,
  document.getElementById('app')
);
