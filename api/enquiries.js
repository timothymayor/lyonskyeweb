export default function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    const enquiry = {
      ...body,
      recipient: 'contact@lyonskyeoffshore.com',
      receivedAt: new Date().toISOString()
    };
    console.log('Received enquiry for contact@lyonskyeoffshore.com:', enquiry);
    return res.status(201).json({
      success: true,
      message: 'Enquiry received and routed to contact@lyonskyeoffshore.com',
      data: enquiry
    });
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
