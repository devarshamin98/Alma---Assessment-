"use client";

import React, { useState } from 'react';
import LeadsList from '../components/LeadsList';
import styles from '../styles/Leads.module.css';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Link from 'next/link';

const LeadsPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('[email]', email, password)
    if (email === 'admin' && password === 'admin') {
      setAuthenticated(true);
    }
  }

  if (!authenticated) {
    return (
      <div className={styles.loginContainer}>
        <form onSubmit={onSubmit}>
          <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder='email' />
          <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password' />
          <button className={styles.loginButton} type='submit'>
            Login
          </button>
        </form>
      </div>
    );
  }

  return <Provider store={store}>
    <Link href="/">
      Go to Main page
    </Link>
    <LeadsList />
  </Provider>;
};

export default LeadsPage;
