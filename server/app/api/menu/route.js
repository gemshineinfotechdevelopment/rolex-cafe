import { NextResponse } from 'next/server';

// Initial sample menu items for Rolex Cafe
const defaultMenu = [
  { id: 'b1', name: 'Paneer Burger', category: 'Burgers', price: 130, isVeg: true },
  { id: 'b2', name: 'Veg Burger', category: 'Burgers', price: 89, isVeg: true },
  { id: 'b4', name: 'Golden Chicken Burger', category: 'Burgers', price: 109, isVeg: false },
  { id: 'vp1', name: 'Margherita Pizza', category: 'Veg Pizza', price: 130, isVeg: true },
  { id: 'cp1', name: 'BBQ Chicken Pizza', category: 'Chicken Pizza', price: 160, isVeg: false },
  { id: 'm1', name: 'Veg Momos', category: 'Momos', price: 80, isVeg: true },
  { id: 'm6', name: 'Chicken Momos', category: 'Momos', price: 120, isVeg: false },
  { id: 'mj1', name: 'Lime Mint', category: 'Mojito', price: 80, isVeg: true },
  { id: 's5', name: 'Oreo Shake', category: 'Shakes', price: 100, isVeg: true },
  { id: 'fc1', name: 'Family Combo', category: 'Family Combo', price: 350, isVeg: true },
  { id: 'cc1', name: 'Chicken Combo', category: 'Chicken Combo', price: 450, isVeg: false },
];

export async function GET() {
  return NextResponse.json({
    success: true,
    data: defaultMenu,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newItem = {
      id: Date.now(),
      ...body,
    };
    return NextResponse.json(
      { success: true, message: 'Menu item created', item: newItem },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
