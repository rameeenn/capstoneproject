import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from './BookingForm';

jest.mock('./mockApi', () => ({
  fetchAvailableTimes: jest.fn(() => Promise.resolve(['12:00 PM', '1:00 PM'])),
}));

describe('BookingForm', () => {
  test('renders the booking form with correct elements', async () => {
    const { getByLabelText, getByText, getByRole } = render(<BookingForm />);

    const dateInput = getByLabelText('Date:');
    const timeSelect = getByLabelText('Time:');
    const numGuestsInput = getByLabelText('Number of Guests:');
    const occasionSelect = getByLabelText('Occasion:');
    const submitButton = getByRole('button', { name: 'Submit' });

    fireEvent.change(dateInput, { target: { value: '2023-08-15' } });
    fireEvent.change(timeSelect, { target: { value: '12:00 PM' } });
    fireEvent.change(numGuestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'anniversary' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(dateInput.value).toBe('2023-08-15');
      expect(timeSelect.value).toBe('12:00 PM');
      expect(numGuestsInput.value).toBe('4');
      expect(occasionSelect.value).toBe('anniversary');
    });
  });
});
