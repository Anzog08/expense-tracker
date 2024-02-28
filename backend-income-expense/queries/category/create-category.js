import fs from "fs";
import { client } from "../..";

const cateDB =
  "/Users/23LP5619/Desktop/dorj/backend-income-expense/models/users.json";

const createCategory = async (recordType, amount, category, payee, note) => {
  const createCategoryQuery = `INSERT INTO categories(recordType, amount,category,payee,note) VALUES ($1,$2,$3,$4,$5) RETURNING id`;
  const categoryID = await client.query(createCategoryQuery, [
    recordType,
    amount,
    category,
    payee,
    note,
  ]);
  return categoryID;
};

export const createCategoryQuery = async (req, res) => {
  const { recordType, amount, category, payee, note } = req.body;

  try {
    await client.end();
    return categoryID;
  } catch (error) {
    throw new Error(error.message);
  }
};
