import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Placeholder authentication logic
    if (email && password) {
      return NextResponse.json({
        success: true,
        message: 'Authentication successful',
        user: { email, role: 'staff' },
        token: 'sample-jwt-token-rolex-cafe',
      });
    }

    return NextResponse.json(
      { success: false, error: 'Email and password required' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Auth failed' },
      { status: 500 }
    );
  }
}
