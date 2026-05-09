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
  'Wedding',
  'Newborn',
  'Portrait',
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
  p('Gender Reveal', '/photos/genderReveal/G2.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G3.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G4.jpg', 'Gender Reveal'),
  p('Gender Reveal', '/photos/genderReveal/G5.jpg', 'Gender Reveal'),
  
  // Baby Shower
  p('Baby Shower', '/photos/babyShower/BS2.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS1.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS3.jpg', 'Baby Shower'),
  p('Baby Shower', '/photos/babyShower/BS4.jpg', 'Baby Shower'),

  
  // BIRTHDAY
  // p('Birthday', '/photos/birthday/B1.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B2.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B3.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B4.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B5.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B11.jpeg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B9.jpeg', 'Birthday celebration'),
  p('Birthday', '/photos/birthday/B6.jpg',  'Birthday shoot'),
  p('Birthday', '/photos/birthday/B10.jpg',  'Birthday celebration'),
  p('Birthday', '/photos/birthday/B8.jpg',  'Birthday celebration'),
  // p('Birthday', '/photos/birthday/B7.jpg',  'Birthday celebration'),
  
  // FAMILY
  p('Family', '/photos/family/F3.jpg', 'Family portrait'),
  p('Family', '/photos/family/F1.jpg', 'Family outdoor session'),
  p('Family', '/photos/family/F2.jpg', 'Family events'),
  
  // GRADUATION
  p('Graduation', '/photos/graduation/Grad1.jpg', 'Graduation cap toss'),
  p('Graduation', '/photos/graduation/Grad4.jpg', 'Graduation ceremony'),
  p('Graduation', '/photos/graduation/Grad2.jpg', 'Graduate portrait'),
  p('Graduation', '/photos/graduation/Grad3.jpg', 'Graduation portrait'),
  p('Graduation', '/photos/graduation/Grad5.jpg', 'Graduation portrait'),
  p('Graduation', '/photos/graduation/Grad6.jpg', 'Graduation cap toss'),
  
  // UNIVERSITY EVENTS
  // p('University Events', 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', 'University event'),
  // p('University Events', 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', 'Campus event coverage'),
  // p('University Events', 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', 'University conference'),
  
  // MUSIC EVENTS
  // p('Music Events', 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', 'Live concert'),
  // p('Music Events', 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', 'Music festival'),
  // p('Music Events', 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&q=80', 'Stage performance'),
  
  // PRODUCT
  // p('Product', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', 'Product photography'),
  // p('Product', 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', 'Product shoot'),
  // p('Product', 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80', 'Commercial product'),
  
  // WEDDING
  // p('Wedding', 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', 'Wedding ceremony'),
  // p('Wedding', 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', 'Wedding couple'),
  // p('Wedding', 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', 'Wedding reception'),
  
  // NEWBORN
  // p('Newborn', 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80', 'Newborn sleeping'),
  // p('Newborn', 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80', 'Newborn with parents'),
  // p('Newborn', 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80', 'Newborn close up'),
  
  // PORTRAIT
  // p('Portrait', 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', 'Portrait session'),
  // p('Portrait', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', 'Lifestyle portrait'),
  // p('Portrait', 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', 'Studio portrait'),
];

export const heroImages = [
  { src: '/photos/slides/slide1.jpeg',  alt: 'Slide 1',  category: 'Event Photography' },
  { src: '/photos/slides/slide2.jpeg',  alt: 'Slide 2',  category: 'Graduation Photography' },
  { src: '/photos/slides/slide4.jpeg',  alt: 'Slide 4',  category: 'Real Estate' },
  { src: '/photos/slides/slide7.jpeg',  alt: 'Slide 7',  category: 'Birthday Photography' },
  { src: '/photos/slides/slide5.jpeg',  alt: 'Slide 5',  category: 'Graduation Photography' },
  { src: '/photos/slides/slide8.jpeg',  alt: 'Slide 8',  category: 'Wedding Photography' },
  { src: '/photos/slides/slide9.jpeg',  alt: 'Slide 9',  category: 'Product Photography' },
  { src: '/photos/slides/slide10.jpeg', alt: 'Slide 10', category: 'Birthday Photography' },
];