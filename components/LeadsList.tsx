import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Leads.module.css';

const LeadsList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await axios.get('/api/leads');
        console.log('Leads data:', response.data); // Log the data to inspect it
        if (Array.isArray(response.data)) {
          setLeads(response.data);
        } else {
          console.error('Data is not an array:', response.data);
        }
      } catch (error) {
        console.error('Error fetching leads:', error);
      }
    };

    fetchLeads();
  }, []);

const handleStatusChange = async (id) => {
  const response = await fetch('api/leads', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: 'REACHED_OUT', id: id })
  });
  return response.json();
}

  return (
    <div className={styles.container}>
      <h1>Leads</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.firstName} {lead.lastName}</td>
              <td>{new Date().toLocaleString()}</td>
              <td>{lead.state}</td>
              <td>{lead.visas.join(', ')}</td>
              <td>
                {lead.state === 'PENDING' && (
                  <button onClick={() => handleStatusChange(lead.id)}>Reach Out</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsList;
