"use client";

import LeadForm from '../components/LeadForm';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Leads App</h1>
      <Link href="/leads">
      Go to Leads Page
      </Link>
      <h2>Get An Assessment Of Your Immigration Case</h2>
      <LeadForm />
    </div>
  );
};

export default HomePage;
