export async function fetchProducts() {
  // Simulate an API call to fetch products
  return [
    { id: 1, name: 'Product 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description 3', image: '/path/to/image3.jpg' }
  ];
}
