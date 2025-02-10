import { createClient } from 'redis';

const redisClient = createClient({
  url: 'redis://default:yRFFxFBjpxDr2IzYTv5JXvBuU3b8ba3K@redis-18503.c265.us-east-1-2.ec2.redns.redis-cloud.com:18503'
});

redisClient.on('error', (err) => console.error('Redis Client Error', err));

export async function connectRedis() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
  return redisClient;
}