import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    image: string;
    type: string;
    category: string;
    title: string;
    fit: string;
    price: number;
    rating: number;
}
const Products: Product[] = [
    {
        id: 1,
        image: "/assets/Images/images/women4.png",
        type: "Womenswear",
        category: "Womens",
        title: "Elegant Evening Gown",
        fit: "flowing skirt",
        price: 109.99,
        rating: 4.5
    },
    {
        id: 2,
        image: "/assets/Images/images/women2.png",
        type: "Womenswear",
        category: "Womens",
        title: "Timeless A-line Evening Dress",
        fit: "Ankle-length",
        price: 109.99,
        rating: 3.5
    },
    {
        id: 3,
        image: "/assets/Images/images/women3.png",
        type: "Womenswear",
        category: "Womens",
        title: "Floral Bloom Maxi Dress",
        fit: "Slim Fit",
        price: 54.99,
        rating: 2.9
    },
    {
        id: 4,
        image:"/assets/Images/images/women4.png",
        type: "Womenswear",
        category: "Womens",
        title: "Elegant Evening Gown",
        fit: "flowing skirt",
        price: 89.99,
        rating: 3.9
    },
    {
        id: 5,
        image: "/assets/Images/images/women5.png",
        type: "Womenswear",
        category: "Womens",
        title: "Boho Chic Printed Scarf",
        fit: "Lightweight",
        price: 19.99,
        rating: 4.8,
    },
    {
        id: 6,
        image: "/assets/Images/images/women2.png",
        type: "Womenswear",
        category: "Womens",
        title: "Elegant Evening Gown",
        fit: "flowing skirt",
        price: 109.99,
        rating: 3.7
    },
    {
        id: 7,
        image: "/assets/Images/images/mens1.webp",
        type: "Menswear",
        category: "Mens",
        title: "Classic Oxford Blouse",
        fit: "Regular fit",
        price: 49.99,
        rating: 2.6
    },
    {
        id: 8,
        image: "/assets/Images/images/mens2.webp",
        type: "Menswear",
        category: "Mens",
        title: "Slim Fit Dress Blouse",
        fit: "Slim fit",
        price: 54.99,
        rating: 3.7
    },
    {
        id: 9,
        image: "/assets/Images/images/mens3.webp",
        type: "Menswear",
        category: "Mens",
        title: "Casual Linen Blouse",
        fit: "Relaxed fit",
        price: 39.99,
        rating: 5.0
    },
    {
        id: 10,
        image: "/assets/Images/images/mens4.webp",
        type: "Menswear",
        category: "Mens",
        title: "Striped Formal Blouse",
        fit: "Tailored fit",
        price: 59.99,
        rating: 3.3
    },
    {
        id: 11,
        image: "/assets/Images/images/mens5.webp",
        type: "Menswear",
        category: "Mens",
        title: "Short Sleeve Summer Blouse",
        fit: "Loose fit",
        price: 34.99,
        rating: 2.7
    },
    {
        id: 12,
        image: "/assets/Images/images/mens6.webp",
        type: "Menswear",
        category: "Mens",
        title: "Embroidered Evening Blouse",
        fit: "Regular fit",
        price: 64.99,
        rating: 4.6
    },
    {
        id: 13,
        image: "/assets/Images/images/accs1.png",
        type: "Accessories",
        category: "Womens",
        title: "Urban Chic Handbag",
        fit: "Spacious",
        price: 49.99,
        rating: 3.2
    },
    {
        id: 14,
        image: "/assets/Images/images/accs2.png",
        type: "Accessories",
        category: "Womens",
        title: "Timeless Fedora",
        fit: "Any face shape",
        price: 79.99,
        rating: 2.5
    },
    {
        id: 15,
        image: "/assets/Images/images/accs3.png",
        type: "Accessories",
        category: "Womens",
        title: "Wide-Brim Bucket Hat",
        fit: "Any face shape",
        price: 69.99,
        rating: 4.8
    },
    {
        id: 16,
        image: "/assets/Images/images/bag1.png",
        type: "Hand Bag",
        category: "Womens",
        title: "Bold Backpack",
        fit: "Roomy interior",
        price: 129.99,
        rating: 3.9
    },
    {
        id: 17,
        image: "/assets/Images/images/bag2.png",
        type: "Hand Bag",
        category: "Womens",
        title: "Night Out Glam",
        fit: "Compact size",
        price: 79.99,
        rating: 4.3
    },
    {
        id: 18,
        image: "/assets/Images/images/bag4.png",
        type: "Hand Bag",
        category: "Mens",
        title: "Multi Use Bag",
        fit: "Spacious",
        price: 89.99,
        rating: 2.6
    },
    {
        id: 19,
        image: "/assets/Images/images/bag5.png",
        type: "Hand Bag",
        category: "Mens",
        title: "vintage Bag",
        fit: "Spacious",
        price: 99.99,
        rating: 3.2
    },
    {
        id: 20,
        image: "/assets/Images/images/bag6.png",
        type: "Hand Bag",
        category: "Mens",
        title: "Shoulder Carried Bag",
        fit: "Compact Size",
        price: 49.99,
        rating: 2.3
    },
    {
        id: 21,
        image: "/assets/Images/images/hat1.png",
        type: "Accessories",
        category: "Mens",
        title: "Elegant Straw Hat",
        fit: "Fits All",
        price: 29.99,
        rating: 4.8
    },
    {
        id: 22,
        image: "/assets/Images/images/hat2.png",
        type: "Accessories",
        category: "Mens",
        title: "Classic White Hat",
        fit: "Fits All",
        price: 49.99,
        rating: 3.9
    },
    {
        id: 23,
        image: "/images/hat3.png",
        type: "Accessories",
        category: "Mens",
        title: "Elegant Fidora",
        fit: "Fits All",
        price: 59.99,
        rating: 4.4
    },
    {
        id: 24,
        image: "/assets/Images/images/watch1.png",
        type: "Accessories",
        category: "Mens",
        title: "Black Smart Watch",
        fit: "Fits All",
        price: 99.99,
        rating: 2.5
    },
    {
        id: 26,
        image: "/assets/Images/images/watch2.png",
        type: "Accessories",
        category: "Mens",
        title: "Black Vintage Watch",
        fit: "Fits All",
        price: 79.99,
        rating: 3.4
    },
    {
        id: 27,
        image: "/assets/Images/images/watch3.png",
        type: "Accessories",
        category: "Mens",
        title: "Classic Silver Watch",
        fit: "Fits All",
        price: 199.99,
        rating: 4.5
    },
    {
        id: 28,
        image: "/assets/Images/images/kids1.webp",
        type: "Kidswear",
        category: "Kids",
        title: "Princess Sparkle Dress",
        fit: "Age 4-6",
        price: 24.99,
        rating: 3.7
    },
    {
        id: 29,
        image: "/assets/Images/images/kids2.png",
        type: "Kidswear",
        category: "Kids",
        title: "Princess blue Dress",
        fit: "Age 6-8",
        price: 34.99,
        rating: 4.5
    },
    {
        id: 30,
        image: "/assets/Images/images/kids3.png",
        type: "Kidswear",
        category: "Kids",
        title: "white t shirt",
        fit: "Age 3-5",
        price: 39.99,
        rating: 5.0
    },
    {
        id: 31,
        image: "/assets/Images/images/kids4.webp",
        type: "Kidswear",
        category: "Kids",
        title: "baige t shirt",
        fit: "Age 5-7",
        price: 29.99,
        rating: 3.5
    },
    {
        id: 32,
        image: "/assets/Images/images/kids2.png",
        type: "Accessories",
        category: "Kids",
        title: "Princess blue Dress",
        fit: "School Size",
        price: 44.99,
        rating: 2.9
    },
    {
        id: 33,
        image: "/assets/Images/images/kids3.png",
        type: "Kidswear",
        category: "Kids",
        title: "white t shirt",
        fit: "Age 4-8",
        price: 32.99,
        rating: 4.5
    },
    {
        id: 34,
        image: "/assets/Images/images/accs1.png",
        type: "Hand Bag",
        category: "Womens",
        title: "Urban Chic Handbag",
        fit: "Spacious",
        price: 49.99,
        rating: 3.2
    },
    {
        id: 35,
        image: "/assets/Images/images/kidshat1.webp",
        type: "Accessories",
        category: "Kids",
        title: "Cute hat",
        fit: "School Size",
        price: 44.99,
        rating: 2.9
    },
    {
        id: 36,
        image: "/assets/Images/images/kidshat2.webp",
        type: "Accessories",
        category: "Kids",
        title: "Cute hat",
        fit: "School Size",
        price: 44.99,
        rating: 2.9
    },
    

]
export function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
const getItemsByTab = (tab: string) => {
    if (tab === "All") {
        return shuffleArray(Products)
    }
    else
        return Products.filter((item) => item.category === tab)
}

interface ProductState {
    products: Product[],
    currentProducts: Product[],
    openedProduct:Product | null

}
const initialState: ProductState = {
    products: Products,
    currentProducts: shuffleArray(Products),
    openedProduct: null
}

const ProductSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setCurrentProducts:(state,action:PayloadAction<string>)=>{
            state.currentProducts=getItemsByTab(action.payload)
        },
        setOpenedProduct:(state,action:PayloadAction<number>)=>{
            state.openedProduct=state.products.find((item)=>item.id===action.payload) || null
 
        }
    }
})

export default ProductSlice.reducer;
export const { setCurrentProducts,setOpenedProduct } = ProductSlice.actions;
