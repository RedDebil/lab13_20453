import sql from 'better-sqlite3';
import { resolve } from 'styled-jsx/css';

const dbPath = process.env.DB_PATH || './meals.db';
const db = sql(dbPath);

export async function getMeals(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug){
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}