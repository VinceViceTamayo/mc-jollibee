const products = [
    {
      id: 1,
      name: '2-pc Chicken Joy',
      href: '#',
      price: '₱163',
      imageSrc: `${process.env.PUBLIC_URL}/images/chicken-joy.png`,
      imageAlt: '2-pc Chicken Joy',
    },
    {
      id: 2,
      name: 'Chicken and Spaghetti',
      href: '#',
      price: '₱140',
      imageSrc: `${process.env.PUBLIC_URL}/images/chicken-spag.png`,
      imageAlt: 'Chicken and Spaghetti',
    },
    {
      id: 3,
      name: 'French Fries',
      href: '#',
      price: '₱40',
      imageSrc: `${process.env.PUBLIC_URL}/images/fries.png`,
      imageAlt: 'French Fries',
    },
    {
      id: 4,
      name: 'Burger',
      href: '#',
      price: '₱40',
      imageSrc: `${process.env.PUBLIC_URL}/images/burger.png`,
      imageAlt: 'Burger',
    },
  ]

const Menu = () => {
return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-center">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
        ))}
        </div>
    </div>
    </div>
)
}

export default Menu;
