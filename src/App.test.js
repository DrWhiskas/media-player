/*import { render, screen } from '@testing-library/react';
import Home from './pages/Home';
test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText('REACT MEDIA PLAYER');
  expect(linkElement).toBeInTheDocument();
});
*/

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./pages/Home";

test('render Home component', () =>{
  render(<Home />)
})