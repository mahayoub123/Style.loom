import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { shuffleArray } from "./ProductSlice";

interface Faq{
  id:number;
  category:string;
  question:string;
  answer:string;
}
interface FaqState{
  faqs:Faq[];
  currentFaqs:Faq[];
}

const faqs = [
  {
    id: 1,
    category: "Ordering",
    question: "How can I place an order on StyleLoom?",
    answer: "Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.",
  },
  {
    id: 2,
    category: "Ordering",
    question: "Can I modify or cancel my order after placing it?",
    answer: "Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.",
  },
  {
    id: 3,
    category: "Ordering",
    question: "What payment methods do you accept?",
    answer: "We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.",
  },
  {
    id: 4,
    category: "Returns",
    question: "How do I initiate a return?",
    answer: "Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.",
  },
  {
    id: 5,
    category: "Shipping",
    question: "How can I track my order?",
    answer: "Once your order is dispatched, you’ll receive a tracking number via email. Use this number to track your package in real-time on our website.",
  },
  {
    id: 6,
    category: "Returns",
    question: "Do you offer exchanges for products?",
    answer: "At this time, we don’t offer direct product exchanges. If you’d like a different item, please initiate a return and place a new order.",
  },
  {
    id: 7,
    category: "Ordering",
    question: "How do I use a promo code during checkout?",
    answer: "Enter your promo code in the designated field at checkout to apply it to your order before payment.",
  },
  {
    id: 8,
    category: "Ordering",
    question: "Is creating an account necessary for ordering?",
    answer: "You can shop as a guest or create an account for a faster checkout and order tracking.",
  },
  {
    id: 9,
    category: "Ordering",
    question: "Can I change the delivery address after placing the order?",
    answer: "Address changes may not be possible once an order is placed. Please contact customer support immediately for assistance.",
  },
  {
    id: 10,
    category: "Shipping",
    question: "Do you ship internationally?",
    answer: "Yes, we offer worldwide shipping. Shipping fees and delivery time may vary according to your location.",
  },
  {
    id: 11,
    category: "Shipping",
    question: "What are the shipping charges?",
    answer: "Shipping charges depend on your order value and delivery location, and are displayed during the checkout process.",
  },
  {
    id: 12,
    category: "Shipping",
    question: "How long does delivery usually take?",
    answer: "Standard delivery typically takes 3-7 business days, depending on your location and the shipping option selected.",
  },
  {
    id: 13,
    category: "Shipping",
    question: "Can I change my delivery date after ordering?",
    answer: "Once placed, most orders are immediately processed and delivery dates cannot be changed.",
  },
  {
    id: 14,
    category: "Shipping",
    question: "What should I do if my order is delayed?",
    answer: "If your order is delayed, please reach out to our customer support for an update on your shipment status.",
  },
  {
    id: 15,
    category: "Returns",
    question: "What items are non-returnable?",
    answer: "Final sale items, personalized products, and items marked non-returnable cannot be returned or exchanged.",
  },
  {
    id: 16,
    category: "Returns",
    question: "How long do I have to return an item?",
    answer: "You must initiate a return within 15 days of the delivery date to be eligible.",
  },
  {
    id: 17,
    category: "Returns",
    question: "How will I receive my refund after returning an item?",
    answer: "Refunds are issued to your original payment method usually within 5-7 business days after your return is processed.",
  },
  {
    id: 18,
    category: "Returns",
    question: "Do you provide free return shipping?",
    answer: "Return shipping is free for defective or wrong items. Otherwise, a small fee may be deducted from your refund.",
  },
  {
    id: 19,
    category: "Returns",
    question: "Can I get store credit instead of a refund?",
    answer: "Yes, you can choose store credit as your refund method during the return process.",
  },
  {
    id: 20,
    category: "Support",
    question: "How do I contact customer service?",
    answer: "You can contact our support team via the ‘Contact Us’ page, where chat, email, and phone options are available.",
  },
  {
    id: 21,
    category: "Support",
    question: "I received a damaged product, what should I do?",
    answer: "If you receive a damaged item, contact our support team within 48 hours of delivery with photos for a resolution.",
  },
  {
    id: 22,
    category: "Support",
    question: "Do you offer gift wrapping services?",
    answer: "Gift wrapping is available for select products, which you can opt for during the checkout process for an extra fee.",
  },
  {
    id: 23,
    category: "Support",
    question: "Why was my payment declined?",
    answer: "Payments may be declined for security reasons or insufficient funds. Please check your details and try again or use another method.",
  },
  {
    id: 24,
    category: "Support",
    question: "How can I provide feedback about my shopping experience?",
    answer: "You can leave feedback via your order summary page or contact us through the feedback form on our website.",
  },
  {
    id: 25,
    category: "Support",
    question: "Is there a loyalty program available?",
    answer: "Yes, joining StyleLoom Rewards lets you earn points with every purchase, redeemable for discounts.",
  },
  {
    id: 26,
    category: "Ordering",
    question: "Can I preorder items that are out of stock?",
    answer: "You can join the waitlist for select out-of-stock items and will be notified when they're available to order.",
  },
  {
    id: 27,
    category: "Shipping",
    question: "Can I request contactless delivery?",
    answer: "Yes, you can select contactless delivery instructions at checkout for a safe drop-off at your door.",
  },
  {
    id: 28,
    category: "Support",
    question: "Are there size guides available for products?",
    answer: "Size guides can be found on each product page to help you choose the right fit before ordering.",
  },

];
const initialState:FaqState ={
  faqs:faqs,
  currentFaqs: shuffleArray(faqs).slice(0,6),
}
const getFaqsByTab= (tab:string)=>{
  if(tab=="All")
    return shuffleArray(faqs).slice(0,6)
  else
    return faqs.filter((item)=>item.category===tab).slice(0,6)
}
const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setCurrentFaqs:(state:FaqState,action:PayloadAction<string>)=>{
      state.currentFaqs=getFaqsByTab(action.payload)
    }
  },
});

export const {setCurrentFaqs}= faqSlice.actions
export default faqSlice.reducer;
