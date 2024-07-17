// tests/LeadForm.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LeadForm from '../components/LeadForm';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

test('renders lead form and submits data', () => {
  render(
    <Provider store={store}>
      <LeadForm />
    </Provider>
  );

  fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });
  fireEvent.change(screen.getByLabelText(/Linkedin/i), { target: { value: 'john.linkedin' } });
  fireEvent.change(screen.getByLabelText(/Visas that you’re interested/i), { target: { value: 'H1B' } });
  fireEvent.change(screen.getByLabelText(/Resume \/ CV \(file upload\)/i), { target: { value: 'resume.pdf' } });
  fireEvent.change(screen.getByLabelText(/Open long input/i), { target: { value: 'I am interested in your company.' } });

  fireEvent.click(screen.getByText(/Submit/i));

  expect(screen.getByText(/Your lead has been submitted successfully./i)).toBeInTheDocument();
});
