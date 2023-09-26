export default defineEventHandler((event) => {
  return {
    offerNo: 'T216',
    offerDate: 'March 6',
    offerTime: '11 am - 12 pm',
    earnings: 30,
    customerName: 'Christopher Nunez',
    customerPhone: '+1 (516) 812-9200',
    customerAddress: '3001 Fulton St, Brooklyn, NY 11208',
    cashAppTag: '$scga12',
    products: [
      {
        name: 'iPhone 13 Pro Max',
        description: '128GB - Unlocked - Flawless',
        price: 750,
        imageSrc: '/img/phone.png',
      },
      {
        name: 'iPhone 13',
        description: '128GB - Unlocked - Good',
        price: 550,
        imageSrc: '/img/phone.png',
      },
    ],
  }
})

