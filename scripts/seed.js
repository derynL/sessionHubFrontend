const { db } = require('@vercel/postgres');
const {
  invoices,
  musicians,
  income,
  clients,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedClients(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "clients" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS clients (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "clients" table`);

    // Insert data into the "clients" table
    const insertedClients = await Promise.all(
      clients.map(async (client) => {
        const hashedPassword = await bcrypt.hash(client.password, 10);
        return client.sql`
        INSERT INTO clients (id, name, email, password)
        VALUES (${client.id}, ${client.name}, ${client.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedClients.length} clients`);

    return {
      createTable,
      clients: insertedClients,
    };
  } catch (error) {
    console.error('Error seeding clients:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    seller_id UUID NOT NULL,
    amount INT NOT NULL,
    status VARCHAR(255) NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (seller_id, amount, status, date)
        VALUES (${invoice.seller_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedMusicians(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "musicians" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS musicians (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "musicians" table`);

    // Insert data into the "musicians" table
    const insertedMusicians = await Promise.all(
      musicians.map(
        (seller) => client.sql`
        INSERT INTO musicians (id, name, email, image_url)
        VALUES (${seller.id}, ${seller.name}, ${seller.email}, ${seller.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedMusicians.length} musicians`);

    return {
      createTable,
      musicians: insertedMusicians,
    };
  } catch (error) {
    console.error('Error seeding musicians:', error);
    throw error;
  }
}

async function seedIncome(client) {
  try {
    // Create the "income" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS income (
        month VARCHAR(4) NOT NULL UNIQUE,
        income INT NOT NULL
      );
    `;

    console.log(`Created "income" table`);

    // Insert data into the "income" table
    const insertedIncome = await Promise.all(
      income.map(
        (item) => client.sql`
        INSERT INTO income (month, income)
        VALUES (${item.month}, ${item.income})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedIncome.length} income`);

    return {
      createTable,
      income: insertedIncome,
    };
  } catch (error) {
    console.error('Error seeding income:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedClients(client);
  await seedMusicians(client);
  await seedInvoices(client);
  await seedIncome(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
