"use client";

import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers, materialCells } from '@jsonforms/material-renderers';
import schema from '../schemas/leadFormSchema.json';
import uischema from '../schemas/leadFormUISchema.json';
import axios from 'axios';

const LeadForm = () => {
  const [formData, setFormData] = useState({});

  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setResume(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataToSubmit = new FormData();
      
      formDataToSubmit.append('data', JSON.stringify(formData));
      if (resume) {
        formDataToSubmit.append('resume', resume);
      
      } 
    
      await axios.post('api/leads', formDataToSubmit, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  if (submitted) {
    return <div>Thank You! Your information was submitted.</div>;
  }

  return (
    <div>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={formData}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setFormData(data)}
      />
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default LeadForm;
