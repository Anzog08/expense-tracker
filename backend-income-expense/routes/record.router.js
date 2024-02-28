import express from "express";
import { getRecords, createRecord } from "../controllers/records.controller.js";

const recordRouter = express.Router();

recordRouter.get("/get-records", getRecords);
recordRouter.post("/create-record", createRecord);

export default recordRouter;
