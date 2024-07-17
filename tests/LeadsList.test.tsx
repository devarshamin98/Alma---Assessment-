// tests/LeadsList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LeadsList from '../components/LeadsList';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { addLead } from '../redux/leadsSlice';

test('renders leads list and changes lead state', () => {
  const lead = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    linkedin: 'john.linkedin',
    visas: ['H1B'],
    resume: 'resume.pdf',
    openLongInput: 'I am interested in your company.',
    state: 'PENDING',
  };

  store.dispatch(addLead(lead));

  render(
    <Provider store={store}>
      <LeadsList />
    </Provider>
  );

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Status: PENDING/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Mark as Reached Out/i));

  expect(screen.getByText(/Status: REACHED_OUT/i)).toBeInTheDocument();
});
