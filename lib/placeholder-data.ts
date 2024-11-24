import { User, Item, Inventory, Transaction, MarketListing } from "./definition";

// Sample Users
export const users: User[] = [
  {
    id: '1',
    username: 'TreasureHunter',
    email: 'hunter@example.com',
    password: 'hashedpassword123', // In a real app, never store plain text passwords
    balance: 1000,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
  },
  {
    id: '2',
    username: 'AdventurousExplorer',
    email: 'explorer@example.com',
    password: 'hashedpassword456',
    balance: 1500,
    createdAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-02'),
  },
];

// Sample Items
export const items: Item[] = [
  {
    id: 'item1',
    name: 'Golden Compass',
    description: 'A mystical compass that always points to the nearest treasure.',
    basePrice: 1000,
    rarity: 'rare',
    createdAt: new Date('2023-01-01'),
  },
  {
    id: 'item2',
    name: 'Silver Coin',
    description: 'An ancient silver coin from a long-lost civilization.',
    basePrice: 50,
    rarity: 'common',
    createdAt: new Date('2023-01-01'),
  },
  {
    id: 'item3',
    name: 'Enchanted Map',
    description: 'A map that reveals hidden pathways and secret locations.',
    basePrice: 500,
    rarity: 'uncommon',
    createdAt: new Date('2023-01-02'),
  },
];

// Sample Inventory
export const inventories: Inventory[] = [
  {
    id: 'inv1',
    userId: '1',
    itemId: 'item1',
    quantity: 1,
    acquiredAt: new Date('2023-01-05'),
  },
  {
    id: 'inv2',
    userId: '1',
    itemId: 'item2',
    quantity: 5,
    acquiredAt: new Date('2023-01-06'),
  },
  {
    id: 'inv3',
    userId: '2',
    itemId: 'item3',
    quantity: 1,
    acquiredAt: new Date('2023-01-07'),
  },
];

// Sample Transactions
export const transactions: Transaction[] = [
  {
    id: 'trans1',
    sellerId: '2',
    buyerId: '1',
    itemId: 'item1',
    quantity: 1,
    price: 950,
    transactionDate: new Date('2023-01-05'),
  },
  {
    id: 'trans2',
    sellerId: '1',
    buyerId: '2',
    itemId: 'item2',
    quantity: 2,
    price: 45,
    transactionDate: new Date('2023-01-06'),
  },
];

// Sample Market Listings
export const marketListings: MarketListing[] = [
  {
    id: 'list1',
    sellerId: '1',
    itemId: 'item2',
    quantity: 3,
    price: 55,
    listedAt: new Date('2023-01-07'),
    updatedAt: new Date('2023-01-07'),
  },
  {
    id: 'list2',
    sellerId: '2',
    itemId: 'item3',
    quantity: 1,
    price: 550,
    listedAt: new Date('2023-01-08'),
    updatedAt: new Date('2023-01-08'),
  },
];

