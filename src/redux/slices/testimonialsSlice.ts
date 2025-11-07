import { createSlice } from "@reduxjs/toolkit";
import type { Testimonial } from "../types/Testimonialstypes";
const initialState: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "New York, USA",
    image:"/assets/Images/Home page photos/custmor1.png" ,
    rating:"/assets/Images/Home page photos/starsContainer.svg",
    content:
      "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Mumbai, India",
    image:"/assets/Images/Home page photos/custmor2.png",
    rating: "/assets/Images/Home page photos/starsContainer.svg",
    content:
      "Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!",
  },
  {
    id: 3,
    name: "Emily Walker",
    location: "London, UK",
    image: "/assets/Images/Home page photos/custmor3.png",
    rating: "/assets/Images/Home page photos/starsContainer.svg",
    content:
      "Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.",
  },
  {
    id: 4,
    name: "Alejandro Martínez",
    location: "Barcelona, Spain",
    image: "/assets/Images/Home page photos/custmor4.png",
    rating: "/assets/Images/Home page photos/starsContainer.svg",
    content:
      "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Delhi, India",
    image: "/assets/Images/Home page photos/custmor5.png",
    rating: "/assets/Images/Home page photos/starsContainer.svg",
    content:
      "Perfect fit and great quality. These jeans have become my go-to for casual and chic outings.",
  },
  {
    id: 6,
    name: "María Rodríguez",
    location: "Mexico City, Mexico",
    image: "/assets/Images/Home page photos/custmor6.png",
    rating: "/assets/Images/Home page photos/starsContainer.svg",
    content:
      "Stylish sneakers that don’t compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
  },
];

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialSlice.reducer;
