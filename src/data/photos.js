let id = 1;
const p = (category, src, alt) => ({ id: id++, category, src, alt });

export const categories = [
  'All',
  'Maternity',
  'Gender Reveal',
  'Baby Shower',
  'Birthday',
  'Graduation',
  'Family',
  'University Events',
  'Music Events',
  'Product',
  'Portrait',
  'Real Estate',
  'Wedding',
  'Newborn',
];

export const photos = [
  // MATERNITY
  // p('Maternity', '/photos/maternity/M3.jpg', 'Couple maternity shoot'),
  p('Maternity', '/photos/maternity/M5.jpg', 'Couple maternity shoot'),
  p('Maternity', '/photos/maternity/M2.jpg', 'Couple maternity shoot'),
  p('Maternity', '/photos/maternity/M1.jpg', 'Couple maternity shoot'),
  p('Maternity', '/photos/maternity/M4.jpg', 'Couple maternity shoot'),
  
  // Gender Reveal
  p('Gender Reveal', '/photos/genderReveal/G1.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G3.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G2.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G5.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G4.jpg', 'Gender Reveal'),
  
  // Baby Shower
  p('Baby Shower', '/photos/babyShower/BS2.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS1.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS3.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS4.jpg', 'Baby Shower'),

  
  // BIRTHDAY
  p('Birthday', '/photos/birthday/B2.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B3.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B4.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B11.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B5.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B9.jpg', 'Birthday celebration'),
  p('Birthday', '/photos/birthday/B6.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B10.jpg',  'Birthday celebration'),
  p('Birthday', '/photos/birthday/B8.jpg',  'Birthday celebration'),
  
  // FAMILY
  p('Family', '/photos/family/F4.jpg', 'Family events'),
  p('Family', '/photos/family/F1.jpg', 'Family outdoor session'),
  p('Family', '/photos/family/F2.jpg', 'Family events'),
  p('Family', '/photos/family/F3.jpg', 'Family portrait'),
  
  // GRADUATION
  p('Graduation', '/photos/graduation/Grad1.jpg', 'Graduation cap toss'),
  p('Graduation', '/photos/graduation/Grad8.jpg', 'Graduation cap toss'),
  p('Graduation', '/photos/graduation/Grad4.jpg', 'Graduation ceremony'),
  p('Graduation', '/photos/graduation/Grad9.jpg', 'Graduation ceremony'),
  p('Graduation', '/photos/graduation/Grad2.jpg', 'Graduate portrait'),
  p('Graduation', '/photos/graduation/Grad3.jpg', 'Graduation portrait'),
  p('Graduation', '/photos/graduation/Grad5.jpg', 'Graduation portrait'),
  p('Graduation', '/photos/graduation/Grad6.jpg', 'Graduation cap toss'),
  p('Graduation', '/photos/graduation/Grad7.jpg', 'Graduation portrait'),
  
  // UNIVERSITY EVENTS
  p('University Events', '/photos/uniEvents/U1.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U3.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U4.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U2.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U5.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U6.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U7.jpeg', 'STEIN - UOA'),
  p('University Events', '/photos/uniEvents/U8.jpeg', 'STEIN - UOA'),
  
  // MUSIC EVENTS
  p('Music Events', '/photos/musicEvents/M1.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M6.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M7.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M3.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M2.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M5.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M8.jpeg', 'Clubbing event'),
  p('Music Events', '/photos/musicEvents/M4.jpeg', 'Clubbing event'),
  // p('Music Events', '/photos/musicEvents/M9.jpeg', 'Stage performance'),
  
  // PRODUCT
  p('Product', '/photos/product/p1.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p2.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p3.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p4.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p5.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p6.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p7.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p8.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p9.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p10.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p11.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p12.jpeg', 'Product shoot'),
  p('Product', '/photos/product/p13.jpeg', 'Product shoot'),
  
  // REAL ESTATE
  p('Real Estate', '/photos/realEstate/R1.jpg', 'Real Estate'),
  p('Real Estate', '/photos/realEstate/R2.jpeg', 'Real Estate'),
  p('Real Estate', '/photos/realEstate/R3.jpeg', 'Real Estate'),
  
  // WEDDING
  // p('Wedding', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', 'Wedding ceremony'),
  // p('Wedding', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', 'Wedding couple'),
  // p('Wedding', 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', 'Wedding reception'),

  // NEWBORN
  // p('Newborn', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80', 'Newborn sleeping'),
  // p('Newborn', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80', 'Newborn with parents'),
  // p('Newborn', 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80', 'Newborn close up'),
  
  // PORTRAIT
  p('Portrait', '/photos/portrait/P3.jpeg', 'Portrait session'),
  p('Portrait', '/photos/portrait/P1.jpeg', 'Portrait session'),
  p('Portrait', '/photos/portrait/P8.jpeg', 'Headshot'),
  p('Portrait', '/photos/portrait/P2.jpeg', 'Portrait session'),
  p('Portrait', '/photos/portrait/P4.jpeg', 'Portrait session'),
  p('Portrait', '/photos/portrait/P5.jpeg', 'Portrait session'),
  p('Portrait', '/photos/portrait/P6.jpeg', 'Portrait session'),
];

export const heroImages = [
  { desktop: '/photos/slides/slide1.jpg', mobile: '/photos/slides/slide1.jpg', alt: 'Event',  category: 'Event Photography' },
  { desktop: '/photos/slides/slide2.jpg', mobile: '/photos/slides/slide5.jpeg', alt: 'Graduation',  category: 'Graduation Photography' },
  { desktop: '/photos/slides/slide8.jpg', mobile: '/photos/slides/slide8.jpg', alt: 'Wedding',  category: 'Wedding Photography' },
  { desktop: '/photos/slides/slide4.jpg', mobile: '/photos/slides/slide4.jpg', alt: 'RealEstate',  category: 'Real Estate' },
  { desktop: '/photos/slides/slide10.jpg', mobile: '/photos/slides/slide11.jpg', alt: 'Birthday',  category: 'Birthday Photography' },
  { desktop: '/photos/slides/slide9.jpg', mobile: '/photos/slides/slide9.jpg', alt: 'Product',  category: 'Product Photography' },
  { desktop: '/photos/slides/slide6.jpeg', mobile: '/photos/slides/slide3.jpeg', alt: 'Portrait', category: 'Portrait Photography' },
];