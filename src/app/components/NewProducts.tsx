import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
    {
        img: "/images/men-j.jpg",
        title: "Jacket",
        desc: "MEN Yarn Fleece Ful-Zip Jacket",
        rating: 4,
        price: "45.00"
    },
    {
        img: "/images/g-shoe.jpg",
        title: "Party Wear",
        desc: "Women Party Wear Shoes",
        rating: 3,
        price: "25.00"
    },
    {
        img: "/images/watches.jpg",
        title: "Women Watch",
        desc: "Women Wear Stylish Watch",
        rating: 1,
        price: "15.00"
    },
    {
        img: "/images/w-jacket.jpg",
        title: "Women Jacket",
        desc: "GRACE KARIN Women's Trench Jacket Abercrombie & Fitch",
        rating: 5,
        price: "45.00"
    },
    {
        img: "/images/frocks.jpg",
        title: "Party Dress",
        desc: "Ribbon Tie Floral Print Flared Dress",
        rating: 2,
        price: "65.00"
    },
    {
        img: "/images/b-shoe.jpg",
        title: "Men Shoes",
        desc: "Converse Mens City Trek Hi Top Trainers - White/Black",
        rating: 4,
        price: "44.00"
    },
    {
        img: "/images/sun-glasses.jpg",
        title: "Sunglasses",
        desc: "Sunglasses Fashion Trendy Classic Sunglasses Luxury Oval Sun Glasses",
        rating: 3,
        price: "20.00"
    },
];

const NewProducts = () => {
    return (
        <div>
            <div className="container pt-16">
                <h2 className="font-medium text-2xl pb-4">New Products</h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
                    {productsData.map((item) => (
                        <ProductCard 
                            key={item.title} 
                            img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            rating={item.rating} 
                            price={item.price} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewProducts;


