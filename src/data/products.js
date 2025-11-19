const proImage =
  "https://image.similarpng.com/file/similarpng/original-picture/2020/08/Paper-coffee-bag-on-transparent-background-PNG.png";

const products = [
  { id: 1, image: proImage, proName: 'Latte', price: '$5', tastingNotes: ['Hazelnut', 'Vanilla', 'Caramel'], origin: 'Ethiopia', Region: 'Southern' },
  { id: 2, image: proImage, proName: 'Cappuccino', price: '$6', tastingNotes: ['Chocolate', 'Nutty', 'Citrus'], origin: 'Colombia', Region: 'Western' },
  { id: 3, image: proImage, proName: 'Espresso', price: '$4', tastingNotes: ['Bitter', 'Smoky', 'Sweet'], origin: 'Brazil', Region: 'Northern' },
  { id: 4, image: proImage, proName: 'Americano', price: '$3', tastingNotes: ['Smooth', 'Bold', 'Clean'], origin: 'Guatemala', Region: 'Central' },
  { id: 5, image: proImage, proName: 'Mocha', price: '$6', tastingNotes: ['Chocolate', 'Rich', 'Creamy'], origin: 'Peru', Region: 'Southern' },
  { id: 6, image: proImage, proName: 'Flat White', price: '$5', tastingNotes: ['Velvety', 'Creamy', 'Nutty'], origin: 'Kenya', Region: 'Eastern' },
  { id: 7, image: proImage, proName: 'Macchiato', price: '$4', tastingNotes: ['Strong', 'Sweet', 'Caramel'], origin: 'Honduras', Region: 'Western' },
  { id: 8, image: proImage, proName: 'Irish Coffee', price: '$7', tastingNotes: ['Whiskey', 'Cream', 'Sweet'], origin: 'Ireland', Region: 'Northern' },
  { id: 9, image: proImage, proName: 'Cortado', price: '$4', tastingNotes: ['Smooth', 'Balanced', 'Light'], origin: 'Spain', Region: 'Western' },
  { id: 10, image: proImage, proName: 'Affogato', price: '$8', tastingNotes: ['Ice Cream', 'Sweet', 'Bold'], origin: 'Italy', Region: 'Southern' },
  { id: 11, image: proImage, proName: 'Cold Brew', price: '$5', tastingNotes: ['Refreshing', 'Smooth', 'Light'], origin: 'Vietnam', Region: 'Southeastern' },
  { id: 12, image: proImage, proName: 'Iced Latte', price: '$5', tastingNotes: ['Vanilla', 'Chilled', 'Creamy'], origin: 'Thailand', Region: 'Eastern' },
  { id: 13, image: proImage, proName: 'Caramel Frappe', price: '$6', tastingNotes: ['Caramel', 'Ice', 'Sweet'], origin: 'USA', Region: 'Midwest' },
  { id: 14, image: proImage, proName: 'Matcha Latte', price: '$7', tastingNotes: ['Matcha', 'Creamy', 'Earthy'], origin: 'Japan', Region: 'Kyoto' },
  { id: 15, image: proImage, proName: 'Vanilla Sweet Cream', price: '$6', tastingNotes: ['Vanilla', 'Smooth', 'Sweet'], origin: 'Costa Rica', Region: 'Central' },
  { id: 16, image: proImage, proName: 'Honey Oat Latte', price: '$6', tastingNotes: ['Honey', 'Oat', 'Smooth'], origin: 'Rwanda', Region: 'Eastern' },
];

export const Products = () => Promise.resolve(products);
