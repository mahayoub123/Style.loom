export interface CardData {
    id: number;
    iconSrc: string;
    imageSrc?: string;  
    title: string;
    description: string;
  }
  
  export const homeCards :CardData[]= [
    {
      id: 1,
      iconSrc: "/assets/Images/icons/star.png",
      imageSrc: "/assets/Images/images/iconstar.png",
      title: 'Passionate Craftsmanship',
      description: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
    },
    {
      id: 2,
      iconSrc: '/assets/Images/icons/mag2.png',
      imageSrc: '/assets/Images/images/Icon6.png',
      title: 'Fashion Forward',
      description: 'We’re trendsetters, curating styles that empower and inspire confidence.',
    },
    {
      id: 3,
      iconSrc: '/assets/Images/icons/mag3.png',
      imageSrc: '/assets/Images/images/img2.png',
      title: 'Customer-Centric Approach',
      description: 'At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.',
    },
    {
      id: 4,
     iconSrc: '/assets/Images/icons/mag4.png',
      imageSrc: '/assets/Images/images/Icon2.png',
      title: 'Global Inspiration',
      description: 'Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.',
    },
    {
      id: 5,
      iconSrc: '/assets/Images/icons/mag.png',
      imageSrc: '/assets/Images/images/Icon3.png',
      title: 'Empowering Your Style',
      description: 'Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.',
    },
    {
      id: 6,
      iconSrc: '/assets/Images/icons/icon1.png',
      imageSrc: '/assets/Images/images/Icon4.png',
      title: 'Sustainable Practices',
      description: 'StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.',
    },
  ];
  export const contactSection2:CardData[]=[
    {
        id:1,
        iconSrc: '/assets/Images/icons/Icon Container.svg',
        title: 'Eligibility',
        description: 'Items must be unused,with tags attached,and returned within 30 days of delivery.'
      },
      {
        id:2,
        iconSrc: '/assets/Images/icons/Icon Container (1).svg',
        title: 'Process',
        description: 'Initiate returns through our Return Center for a smooth and efficient process.'
      },
      {
        id:3,
        iconSrc: '/assets/Images/icons/Icon Container (5).svg',
        title: 'Refund',
        description: 'Expect a refund to your original payment method within 7-10 business days.'
      },
  ]

  export const contactSection3:CardData[]=[
    {
        id:1,
        iconSrc: '/assets/Images/icons/Icon Container (2).svg',
        title: 'Cancellation Window',
        description: 'Orders can be canceled within 24 hours of placement for a full refund.'
      },
      {
        id:2,
        iconSrc: '/assets/Images/icons/Icon Container (4).svg',
        title: 'Cancellation Process',
        description: 'Visit our Order Management section to cancel your order effortlessly.'
      },
      {
        id:3,
        iconSrc: "/assets/Images/icons/Icon Container (3).svg",
        title: 'Refund Timeline',
        description: 'Refunds for canceled orders are processed within 5-7 business days.'
      },
  ]