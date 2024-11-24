import bcrypt from 'bcrypt';
import {
  users,
  items,
  inventories,
  transactions,
  marketListings,
} from '@/lib/placeholder-data';
import { db } from '@vercel/postgres';

const client = await db.connect();

async function seedUsers() {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        balance INTEGER NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10)
        return client.sql`
          INSERT INTO users (id, username, email, password, balance, created_at, updated_at)
          VALUES (${user.id}, ${user.username}, ${user.email}, ${hashedPassword}, ${user.balance}, ${user.createdAt.toISOString()}, ${user.updatedAt.toISOString()})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedItems() {
  try {
    // Create the "items" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS items (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        base_price INTEGER NOT NULL,
        rarity VARCHAR(50) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    console.log(`Created "items" table`);

    // Insert data into the "items" table
    const insertedItems = await Promise.all(
      items.map(async (item) => {
        return client.sql`
          INSERT INTO items (id, name, description, base_price, rarity, created_at, updated_at)
          VALUES (${item.id}, ${item.name}, ${item.description}, ${item.basePrice}, ${item.rarity}, ${item.createdAt.toISOString()})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedItems.length} items`);

    return {
      createTable,
      items: insertedItems,
    };
  } catch (error) {
    console.error('Error seeding items:', error);
    throw error;
  }
}

async function seedInventories() {
  try {
    // Create the "inventories" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS inventories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        item_id UUID NOT NULL,
        quantity INTEGER NOT NULL,
        acquired_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (item_id) REFERENCES items(id)
      );
    `;

    console.log(`Created "inventories" table`);

    // Insert data into the "inventories" table
    const insertedInventories = await Promise.all(
      inventories.map(async (inventory) => {
        return client.sql`
          INSERT INTO inventories (id, user_id, item_id, quantity, acquired_at)
          VALUES (${inventory.id}, ${inventory.userId}, ${inventory.itemId}, ${inventory.quantity}, ${inventory.acquiredAt.toISOString()})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedInventories.length} inventory items`);

    return {
      createTable,
      inventories: insertedInventories,
    };
  } catch (error) {
    console.error('Error seeding inventories:', error);
    throw error;
  }
}

async function seedTransactions() {
  try {
    // Create the "transactions" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        seller_id UUID NOT NULL,
        buyer_id UUID NOT NULL,
        item_id UUID NOT NULL,
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL,
        transaction_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (seller_id) REFERENCES users(id),
        FOREIGN KEY (buyer_id) REFERENCES users(id),
        FOREIGN KEY (item_id) REFERENCES items(id)
      );
    `;

    console.log(`Created "transactions" table`);

    // Insert data into the "transactions" table
    const insertedTransactions = await Promise.all(
      transactions.map(async (transaction) => {
        return client.sql`
          INSERT INTO transactions (id, seller_id, buyer_id, item_id, quantity, price, transaction_date)
          VALUES (${transaction.id}, ${transaction.sellerId}, ${transaction.buyerId}, ${transaction.itemId}, ${transaction.quantity}, ${transaction.price}, ${transaction.transactionDate.toISOString()})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedTransactions.length} transactions`);

    return {
      createTable,
      transactions: insertedTransactions,
    };
  } catch (error) {
    console.error('Error seeding transactions:', error);
    throw error;
  }
}

async function seedMarketListings() {
  try {
    // Create the "market_listings" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS market_listings (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        seller_id UUID NOT NULL,
        item_id UUID NOT NULL,
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL,
        listed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (seller_id) REFERENCES users(id),
        FOREIGN KEY (item_id) REFERENCES items(id)
      );
    `;

    console.log(`Created "market_listings" table`);

    // Insert data into the "market_listings" table
    const insertedListings = await Promise.all(
      marketListings.map(async (listing) => {
        return client.sql`
          INSERT INTO market_listings (id, seller_id, item_id, quantity, price, listed_at, updated_at)
          VALUES (${listing.id}, ${listing.sellerId}, ${listing.itemId}, ${listing.quantity}, ${listing.price}, ${listing.listedAt.toISOString()}, ${listing.updatedAt.toISOString()})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedListings.length} market listings`);

    return {
      createTable,
      marketListings: insertedListings,
    };
  } catch (error) {
    console.error('Error seeding market listings:', error);
    throw error;
  }
}

async function main() {
  await seedUsers();
  await seedItems();
  await seedInventories();
  await seedTransactions();
  await seedMarketListings();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});

