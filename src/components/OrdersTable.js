import React from 'react';

const sampleData = [
  {
    category: 'Burgers',
    name: 'Cheeseburger',
    options: [],
    price: 5.99,
    cost: 3.50,
    stock: 50
  },
  {
    category: 'Burgers',
    name: 'Double Cheeseburger',
    options: [],
    price: 7.99,
    cost: 4.50,
    stock: 30
  },
  {
    category: 'Fries',
    name: 'Regular Fries',
    options: ['Small', 'Medium', 'Large'],
    price: 2.99,
    cost: 1.50,
    stock: 100
  },
  {
    category: 'Drinks',
    name: 'Coke',
    options: ['Small', 'Medium', 'Large'],
    price: 1.99,
    cost: 0.75,
    stock: 80
  }
];


const tableElements = sampleData.map(item => {
  const {category, name, options, price, cost, stock} = item;
  return (
    <tr className="bg-white">
      <td className="border px-6 py-4">{category}</td>
      <td className="border px-6 py-4">{name}</td>
      <td className="border px-6 py-4">{options}</td>
      <td className="border px-6 py-4">{price}</td>
      <td className="border px-6 py-4">{cost}</td>
      <td className="border px-6 py-4">{stock}</td>
    </tr>
  )
});

const OrdersTable = () => {
  return (
    <div className="flex justify-center pb-14">
      <div className="overflow-hidden border border-gray-200 shadow-lg rounded-lg w-10/12">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Size</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Cost</th>
              <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">In-stock</th>
            </tr>
          </thead>
          <tbody>
            {tableElements}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
