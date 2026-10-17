// Database connection utility for Next.js backend
// Supports MongoDB (Mongoose), Prisma, or PostgreSQL

let isConnected = false;

export async function connectDB() {
  if (isConnected) {
    return { status: 'already_connected' };
  }

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    console.warn('⚠️ DATABASE_URL is not defined in server/.env');
    return { status: 'missing_env' };
  }

  try {
    // Add your ORM / DB driver connection here (e.g. mongoose.connect or prisma.$connect)
    isConnected = true;
    console.log('✅ Connected to Database');
    return { status: 'connected' };
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    throw error;
  }
}
