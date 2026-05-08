// ─────────────────────────────────────────────
//  PHOTO DATA — replace src paths with your real images
//  Place images in: public/photos/<category>/your-file.jpg
//  Then reference them as: /photos/maternity/your-file.jpg
// ─────────────────────────────────────────────

export const categories = [
  'All',
  'Maternity',
  'Newborn',
  'Birthday',
  'Family',
  'Graduation',
  'University Events',
  'Music Events',
  'Product',
  'Wedding',
  'Portrait',
];

export const photos = [
  // MATERNITY
  { id: 1,  category: 'Maternity',         src: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=800&q=80', alt: 'Maternity session outdoor' },
  { id: 2,  category: 'Maternity',         src: 'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?w=800&q=80', alt: 'Maternity studio portrait' },
  { id: 3,  category: 'Maternity',         src: 'https://images.unsplash.com/photo-1610631787813-9eeb1a2386cc?w=800&q=80', alt: 'Couple maternity shoot' },

  // NEWBORN
  { id: 4,  category: 'Newborn',           src: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=800&q=80', alt: 'Newborn sleeping' },
  { id: 5,  category: 'Newborn',           src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=800&q=80', alt: 'Newborn with parents' },
  { id: 6,  category: 'Newborn',           src: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80', alt: 'Newborn close up' },

  // BIRTHDAY
  { id: 7,  category: 'Birthday',          src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', alt: 'Birthday shoot' },
  { id: 8,  category: 'Birthday',          src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', alt: 'Birthday celebration' },
  { id: 9,  category: 'Birthday',          src: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&q=80', alt: 'Birthday cake smash' },

  // FAMILY
  { id: 10, category: 'Family',            src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80', alt: 'Family outdoor session' },
  { id: 11, category: 'Family',            src: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800&q=80', alt: 'Family portrait' },
  { id: 12, category: 'Family',            src: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80', alt: 'Family events' },

  // GRADUATION
  { id: 13, category: 'Graduation',        src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', alt: 'Graduation ceremony' },
  { id: 14, category: 'Graduation',        src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?w=800&q=80', alt: 'Graduate portrait' },
  { id: 15, category: 'Graduation',        src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80', alt: 'Graduation cap toss' },

  // UNIVERSITY EVENTS
  { id: 16, category: 'University Events', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80', alt: 'University event' },
  { id: 17, category: 'University Events', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', alt: 'Campus event coverage' },
  { id: 18, category: 'University Events', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80', alt: 'University conference' },

  // MUSIC EVENTS
  { id: 19, category: 'Music Events',      src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80', alt: 'Live concert' },
  { id: 20, category: 'Music Events',      src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', alt: 'Music festival' },
  { id: 21, category: 'Music Events',      src: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&q=80', alt: 'Stage performance' },

  // PRODUCT
  { id: 22, category: 'Product',           src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80', alt: 'Product photography' },
  { id: 23, category: 'Product',           src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80', alt: 'Product shoot' },
  { id: 24, category: 'Product',           src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80', alt: 'Commercial product' },

  // WEDDING
  { id: 25, category: 'Wedding',           src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', alt: 'Wedding ceremony' },
  { id: 26, category: 'Wedding',           src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', alt: 'Wedding couple' },
  { id: 27, category: 'Wedding',           src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', alt: 'Wedding reception' },

  // PORTRAIT
  { id: 28, category: 'Portrait',          src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', alt: 'Portrait session' },
  { id: 29, category: 'Portrait',          src: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80', alt: 'Lifestyle portrait' },
  { id: 30, category: 'Portrait',          src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80', alt: 'Studio portrait' },
];

export const heroImages = [
  { src: '/photos/slide1.jpeg', alt: 'Slide 1', category: 'Event Photography' },
  { src: '/photos/slide2.jpeg', alt: 'Slide 2', category: 'Graduation Photography' },
  { src: '/photos/slide4.jpeg', alt: 'Slide 4', category: 'Real State' },
  { src: '/photos/slide7.jpeg', alt: 'Slide 7', category: 'Birthday Photography' },
  { src: '/photos/slide5.jpeg', alt: 'Slide 5', category: 'Graduation Photography' },
  { src: '/photos/slide8.jpeg', alt: 'Slide 8', category: 'Wedding Photography' },
  { src: '/photos/slide9.jpeg', alt: 'Slide 9', category: 'Product Photography' },
  { src: '/photos/slide10.jpeg', alt: 'Slide 10', category: 'Birthday Photography' },
];
