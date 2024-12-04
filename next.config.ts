// Thay thế require bằng import
import middleware from './src/app/middleware';

export default {
  middleware: ['/api/*'], // Chỉ áp dụng cho các API routes
};