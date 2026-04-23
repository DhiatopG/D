import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.FEATURABLE_API_KEY;
  const widgetId = process.env.FEATURABLE_WIDGET_ID;

  if (!apiKey || !widgetId) {
    return NextResponse.json({ error: 'Missing API credentials' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://featurable.com/api/v1/widgets/${widgetId}?api_key=${apiKey}`, {
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Featurable API error: ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
