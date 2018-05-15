'use strict';
export const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/posts-app';
export const TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-posts-app';
export const PORT = process.env.PORT || 8080;