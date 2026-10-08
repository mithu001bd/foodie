export type MenuCategory = 'Appetizers' | 'Main Course' | 'Signature Platters' | 'Desserts & Drinks';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  spiceLevel: 0 | 1 | 2 | 3;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Arancini',
    description: 'Crispy saffron risotto balls with black truffle and parmesan aioli.',
    price: 14,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/30737869/pexels-photo-30737869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Beef Tartare Crostini',
    description: 'Hand-chopped raw beef with herb leaves, quail egg yolk, and toasted crostini.',
    price: 18,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/6488855/pexels-photo-6488855.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 1,
  },
  {
    id: 3,
    name: 'Creamy Salmon Roll',
    description: 'Norwegian salmon roll on fresh greens with citrus crème fraîche.',
    price: 16,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/14885401/pexels-photo-14885401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 4,
    name: 'Gourmet Canapés',
    description: 'Assorted chef-curated canapés on artisan white plates. Perfect for sharing.',
    price: 22,
    category: 'Appetizers',
    image: 'https://images.pexels.com/photos/12775025/pexels-photo-12775025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 5,
    name: 'Grilled Ribeye Steak',
    description: 'Juicy ribeye with cracked pepper, hand-cut fries, and grilled green peppers.',
    price: 38,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/27643017/pexels-photo-27643017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 1,
    badge: 'Chef\'s Pick',
  },
  {
    id: 6,
    name: 'Roasted Lamb Loin',
    description: 'Slow-roasted lamb with potato gratin and a velvety white pepper sauce.',
    price: 34,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/4101805/pexels-photo-4101805.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 2,
  },
  {
    id: 7,
    name: 'Pepper Crusted Filet',
    description: 'Tender filet mignon with a peppercorn crust, served on a silver platter.',
    price: 42,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/27643033/pexels-photo-27643033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 2,
  },
  {
    id: 8,
    name: 'Grilled Strip Steak',
    description: 'Perfectly grilled strip steak with house sauce and a charred lemon wedge.',
    price: 36,
    category: 'Main Course',
    image: 'https://images.pexels.com/photos/27305268/pexels-photo-27305268.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 1,
  },
  {
    id: 9,
    name: 'Royal Seafood Platter',
    description: 'Artistic presentation of fresh clams, scallops, and herbs on white porcelain.',
    price: 48,
    category: 'Signature Platters',
    image: 'https://images.pexels.com/photos/15671371/pexels-photo-15671371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 1,
    badge: 'Signature',
  },
  {
    id: 10,
    name: 'Seared Scallops Deluxe',
    description: 'Pan-seared scallops with creamy sauce, fish roe, and microgreens.',
    price: 44,
    category: 'Signature Platters',
    image: 'https://images.pexels.com/photos/12107010/pexels-photo-12107010.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
    badge: 'Signature',
  },
  {
    id: 11,
    name: 'Heritage Vegetable Plate',
    description: 'Gourmet seasonal vegetables with saffron sauce and edible flowers.',
    price: 28,
    category: 'Signature Platters',
    image: 'https://images.pexels.com/photos/1327393/pexels-photo-1327393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 12,
    name: 'Saffron Butter Lobster',
    description: 'Whole lobster with saffron butter, garnished with fresh herbs and citrus.',
    price: 52,
    category: 'Signature Platters',
    image: 'https://images.pexels.com/photos/24289165/pexels-photo-24289165.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 1,
    badge: 'Signature',
  },
  {
    id: 13,
    name: 'Chocolate Strawberry Cake',
    description: 'Decadent chocolate cake layers with fresh strawberries and chocolate rounds.',
    price: 12,
    category: 'Desserts & Drinks',
    image: 'https://images.pexels.com/photos/12927134/pexels-photo-12927134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 14,
    name: 'Tiramisu & Chocolate Drizzle',
    description: 'Classic tiramisu with rich chocolate drizzle and a dusting of cocoa.',
    price: 11,
    category: 'Desserts & Drinks',
    image: 'https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 15,
    name: 'Matcha & Chocolate Gateau',
    description: 'Vibrant matcha and chocolate cake slices from our patisserie.',
    price: 13,
    category: 'Desserts & Drinks',
    image: 'https://images.pexels.com/photos/39240989/pexels-photo-39240989.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
  {
    id: 16,
    name: 'Artisan Dessert Selection',
    description: 'Curated assortment of our finest cakes and pastries from the display.',
    price: 16,
    category: 'Desserts & Drinks',
    image: 'https://images.pexels.com/photos/39240988/pexels-photo-39240988.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    spiceLevel: 0,
  },
];

export interface Offer {
  id: number;
  title: string;
  description: string;
  discount: string;
  code: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  dishName: string;
}

export const offers: Offer[] = [
  {
    id: 1,
    title: '20% OFF Signature Platters',
    description: 'Flat 20% off on all signature platters this week only. Dine-in or takeaway.',
    discount: '20%',
    code: 'TASTE20',
    image: 'https://images.pexels.com/photos/15671371/pexels-photo-15671371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    oldPrice: 48,
    newPrice: 38.4,
    dishName: 'Royal Seafood Platter',
  },
  {
    id: 2,
    title: '15% OFF Main Course',
    description: 'Enjoy 15% off on all main course items every weekday lunch.',
    discount: '15%',
    code: 'LUNCH15',
    image: 'https://images.pexels.com/photos/27643033/pexels-photo-27643033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    oldPrice: 42,
    newPrice: 35.7,
    dishName: 'Pepper Crusted Filet',
  },
  {
    id: 3,
    title: 'Free Dessert',
    description: 'Complimentary dessert on orders above $60. Use code at checkout.',
    discount: 'FREE',
    code: 'SWEET60',
    image: 'https://images.pexels.com/photos/12927134/pexels-photo-12927134.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    oldPrice: 12,
    newPrice: 0,
    dishName: 'Chocolate Strawberry Cake',
  },
];

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    rating: 5,
    review: 'Absolutely the finest dining experience in the city. The saffron butter lobster was divine — every bite felt like art on a plate.',
    date: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'James Okonkwo',
    rating: 5,
    review: 'The ambiance, the service, the food — everything was impeccable. The ribeye steak was cooked to perfection. Will be back!',
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    rating: 5,
    review: 'Celebrated our anniversary here and it was magical. The signature platters are worth every penny. Highly recommend the seafood.',
    date: '3 weeks ago',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    id: 4,
    name: 'Michael Chen',
    rating: 5,
    review: 'Best fine dining in town, hands down. The truffle arancini appetizer was a revelation. Service was warm and professional.',
    date: '1 week ago',
    avatar: 'https://i.pravatar.cc/150?img=7',
  },
  {
    id: 5,
    name: 'Amelia Rodriguez',
    rating: 5,
    review: 'The chocolate strawberry cake is the best dessert I have ever had. The entire experience felt luxurious from start to finish.',
    date: '5 days ago',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
  {
    id: 6,
    name: 'David Thompson',
    rating: 5,
    review: 'Took clients here for dinner and everyone was impressed. The pepper crusted filet was exceptional. A truly world-class restaurant.',
    date: '2 months ago',
    avatar: 'https://i.pravatar.cc/150?img=11',
  },
];
