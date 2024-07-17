import { NextApiRequest, NextApiResponse } from 'next';
import * as formidable from 'formidable';
import * as fs from 'fs';
import path from 'path';

const leads = [];

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'File upload error' });
      }

      const lead = {
        ...JSON.parse(fields.data as string),
        id: Date.now(),
        state: 'PENDING',
        resume: files.resume ? `/uploads/${path.basename(files.resume.path)}` : null,
      };

      leads.push(lead);
      return res.status(200).json({ success: true });
    });
  } else if (req.method === 'GET') {
    return res.status(200).json(leads);
  } else if (req.method === 'PUT') {
    const { id, state } = req.body;
    const lead = leads.find((l) => l.id === id);
    if (lead) {
      lead.state = state;
      return res.status(200).json({ success: true });
    }
    return res.status(404).json({ error: 'Lead not found' });
  }
  
}
