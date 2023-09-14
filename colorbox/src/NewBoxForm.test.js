import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm without crashing', () => {
  render(<NewBoxForm />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm />);
  expect(asFragment()).toMatchSnapshot();
});

test('adds a new box', () => {
  const addBox = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewBoxForm addBox={addBox} />);
  
  const widthInput = getByPlaceholderText('Width');
  const heightInput = getByPlaceholderText('Height');
  const backgroundColorInput = getByPlaceholderText('Background Color');
  const addButton = getByText('Add Box');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(backgroundColorInput, { target: { value: 'red' } });
  fireEvent.click(addButton);

  expect(addBox).toHaveBeenCalled();
});
