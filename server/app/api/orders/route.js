import { NextResponse } from 'next/server';

const ordersStore = [];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: ordersStore,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newOrder = {
      orderId: `ROLEX-${Date.now().toString().slice(-6)}`,
      customerName: body.customerName,
      tableNumber: body.tableNumber,
      items: body.items || [],
      totalAmount: body.totalAmount || 0,
      status: 'Received',
      createdAt: new Date().toISOString(),
    };

    ordersStore.push(newOrder);

    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to process order' },
      { status: 400 }
    );
  }
}
