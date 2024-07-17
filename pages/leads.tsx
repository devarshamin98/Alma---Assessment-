"use client";

import React, { useState } from 'react';
import LeadsList from '../components/LeadsList';
import styles from '../styles/Leads.module.css';
import { Provider } from 'react-redux';
import { store } from '../store/index';



const LeadsPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  if (!authenticated) {
    return (
      <div className={styles.loginContainer}>
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }

  return <Provider store={store}><LeadsList /></Provider>;
};

export default LeadsPage;
