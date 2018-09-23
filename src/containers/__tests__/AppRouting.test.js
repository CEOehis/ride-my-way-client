import React from 'react';
import ReactDOM from 'react-dom';
import AppRouting from '../AppRouting';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouting />, div);
  ReactDOM.unmountComponentAtNode(div);
});
