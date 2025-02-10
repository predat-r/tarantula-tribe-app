"use server";
import { createClient } from "redis";

const redisClient = createClient({
  url: process.env.REDIS_FORMULATED_COMPLETE_URL,
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
  return redisClient;
}
