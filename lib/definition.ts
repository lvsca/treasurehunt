export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    balance: number;
    createdAt: Date;
    updatedAt: Date;
}

export type Item = {
    id: string;
    name: string;
    description: string;
    basePrice: number;
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legend';
    createdAt: Date;
}

export type Inventory = {
    id: string;
    userId: string;
    itemId: string;
    quantity: number;
    acquiredAt: Date;
};

export type Transaction = {
    id: string;
    sellerId: string;
    buyerId: string;
    itemId: string;
    quantity: number;
    price: number; // Price at the time of transaction
    transactionDate: Date;
};

export type MarketListing = {
    id: string;
    sellerId: string;
    itemId: string;
    quantity: number;
    price: number;
    listedAt: Date;
    updatedAt: Date;
};