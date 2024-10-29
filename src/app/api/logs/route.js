// src/app/api/log/route.js
import logger from '../../../lib/logger';

export async function POST(request) {
  try {
    const { level = 'info', message } = await request.json();

    // Log pesan hanya di server menggunakan Winston
    logger.log({ level, message });
    return new Response(JSON.stringify({ status: 'Log added successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error logging message', error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
