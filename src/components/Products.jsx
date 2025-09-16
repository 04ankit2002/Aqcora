import React from "react";

function Products () {
  const productList = [
    {
      id: 1,
      name: "250ml Mineral Water",
      img: "/b2.jpg", // update with correct path from /public or assets
      desc: "Compact and refreshing, perfect for quick hydration on the go.",
    },
    {
      id: 2,
      name: "500ml Mineral Water",
      img: "/b1.jpg",
      desc: "The ideal everyday size, balancing refreshment and portability.",
    },
    {
      id: 3,
      name: "1L Mineral Water",
      img: "/b1.jpg", // you can add another image when available
      desc: "Stay hydrated longer with our 1L bottle, great for home & work.",
    },
  ];

  return (
    <section id="products" className="py-24 ">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Our <span className="text-blue-600">Products</span>
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          💧 AQCORA Mineral Water Bottles – Available in 250ml, 500ml, and 1L.  
          Every pack is sealed for freshness, ensuring safe delivery straight to your hands.
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {productList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center card-hover"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-60 object-contain mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
