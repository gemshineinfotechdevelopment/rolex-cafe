// Order Schema / Model Definition
// (Ready to use with Mongoose / Prisma)

export const OrderSchema = {
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  tableNumber: { type: String, required: true },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Received', 'Preparing', 'Ready', 'Served', 'Cancelled'],
    default: 'Received',
  },
  createdAt: { type: Date, default: Date.now },
};

export default OrderSchema;
