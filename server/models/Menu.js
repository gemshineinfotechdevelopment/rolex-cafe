// Menu Item Schema / Model Definition
// (Ready to use with Mongoose / Prisma)

export const MenuSchema = {
  name: { type: String, required: true },
  category: { type: String, required: true }, // 'Coffee', 'Tea', 'Bakery', 'Desserts'
  price: { type: Number, required: true },
  description: { type: String },
  isAvailable: { type: Boolean, default: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
};

export default MenuSchema;
