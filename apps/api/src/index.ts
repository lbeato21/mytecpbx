import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.post('/fs/xml', async (c) => {
  const body = await c.req.parseBody();
  console.log('FreeSWITCH request:', body.section);
  
  const xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <document type="freeswitch/xml">
    <section name="directory"></section>
  </document>`;
  
  return c.text(xml, 200, { 'Content-Type': 'text/xml' });
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`Hono corriendo en el puerto ${info.port}`);
});