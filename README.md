# 🍽️ Food Hub Backend

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, Mongoose, MongoDB, JWT, Cloudinary, Multer
- **Authentication:** JWT-based authentication
- **Storage:** Cloudinary for image storage
- **Security:** Bcrypt for password hashing

![diagram-export-2-16-2025-11_07_44-PM](https://github.com/user-attachments/assets/a4161da8-745e-4e8c-a3c4-0bccf54a13fa)

---

## 🚀 Features

### Authentication & Authorization
- Secure login & registration
- Admin & user role-based access control

### Restaurant Management (Admin)
- Add, update, and delete restaurants
- Manage restaurant details

### Menu Management (Admin)
- Add, update, and delete menu items
- Link menus to restaurants

### Order Management
- Place orders
- Track order status
- Admin updates order progress

### User Profile
- Update profile details
- View order history

---

## 📜 API Endpoints

### 🛡️ Authentication
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Login user

### 🍔 Menu Management
- **GET** `/api/menu` - Get all menu items
- **POST** `/api/menu` - Create a new menu item (Admin only)
- **DELETE** `/api/menu/:id` - Delete a menu item (Admin only)

### 🏬 Restaurant Management
- **GET** `/api/restaurants` - Get all restaurants
- **POST** `/api/restaurants` - Add a new restaurant (Admin only)
- **DELETE** `/api/restaurants/:id` - Delete a restaurant (Admin only)

### 🛍️ Order Management
- **POST** `/api/orders` - Place a new order
- **GET** `/api/orders/:userId` - Get orders of a user
- **PATCH** `/api/orders/:orderId/status` - Update order status (Admin only)

---

## 🏗️ Database Models

### 📌 User Model
```typescript
export interface IUser {
  fullname: string;
  email: string;
  password: string;
  contact: number;
  address: string;
  city: string;
  country: string;
  profilePicture: string;
  admin: boolean;
  isVerified?: boolean;
  resetPasswordToken?: string;
  resetPasswordTokenExpiresAt?: Date;
  verificationToken?: string;
  verificationTokenExpiresAt?: Date;
}
```

### 📌 Restaurant Model
```typescript
export interface IRestaurant {
  user: mongoose.Schema.Types.ObjectId;
  restaurantName: string;
  city: string;
  country: string;
  deliveryTime: number;
  cuisines: string[];
  imageUrl: string;
  menus: mongoose.Schema.Types.ObjectId[];
}
```

### 📌 Menu Model
```typescript
export interface IMenu {
  name: string;
  description: string;
  price: number;
  image: string;
}
```

### 📌 Order Model
```typescript
type DeliveryDetails = {
  email: string;
  name: string;
  address: string;
  city: string;
};

type CartItems = {
  menuId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export interface IOrder extends Document {
  user: mongoose.Schema.Types.ObjectId;
  restaurant: mongoose.Schema.Types.ObjectId;
  deliveryDetails: DeliveryDetails;
  cartItems: CartItems;
  totalAmount: number;
  status: "pending" | "confirmed" | "preparing" | "outfordelivery" | "delivered";
}
```

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourrepo/foodhub-backend.git
   cd foodhub-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:
   ```env
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

---

## 🎯 Conclusion
The **Food Hub Backend** is a powerful and scalable system to manage restaurants, menus, and orders with a secure authentication mechanism. It provides admins full control over restaurant operations while ensuring a seamless experience for users.

