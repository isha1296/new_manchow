import React, { useState, useEffect } from 'react';
import ShinyText from './ShinyText';

export default function App() {
  // State variables
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeMenuTab, setActiveMenuTab] = useState('all');
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedDishModal, setSelectedDishModal] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  // WhatsApp Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formOrderType, setFormOrderType] = useState('Home Delivery');
  const [formAddress, setFormAddress] = useState('');
  const [formDishes, setFormDishes] = useState('');
  const [formSpiceLevel, setFormSpiceLevel] = useState('Medium Spicy');
  const [formNotes, setFormNotes] = useState('');

  // Contact Info
  const WHATSAPP_NUMBER = "919876543210";
  const PHONE_DISPLAY = "+91 98765 43210";
  const EMAIL_DISPLAY = "orders@newmanchow.com";
  const ADDRESS_DISPLAY = "New Manchow Restaurant, Main Food Street, MG Road, City Center";

  // Navigation Links
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'story', label: 'Our Story' },
    { id: 'menu', label: 'Food Menu' },
    { id: 'specials', label: 'Wok Specials' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'combos', label: 'Party Combos' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact & Order' },
  ];

  // Scroll active section highlighter
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format Direct WhatsApp Link
  const createWhatsAppLink = (message) => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const msg = `🔥 *NEW MANCHOW - ONLINE ORDER / RESERVATION*\n\n` +
      `*Customer Name:* ${formName || 'Guest'}\n` +
      `*Phone Number:* ${formPhone || 'Not provided'}\n` +
      `*Order Type:* ${formOrderType}\n` +
      `*Delivery Address / Time:* ${formAddress || 'Dine-In'}\n` +
      `*Dishes / Items Selected:* ${formDishes || 'General Inquiry'}\n` +
      `*Spice Level:* ${formSpiceLevel}\n` +
      `*Special Instructions:* ${formNotes || 'None'}\n\n` +
      `Please confirm my order and share total bill / estimated delivery time.`;
    
    window.open(createWhatsAppLink(msg), '_blank');
  };

  // Menu Categories & Items
  const menuCategories = [
    { id: 'all', label: 'All Items' },
    { id: 'soups', label: 'Soups & Dim Sums' },
    { id: 'starters', label: 'Starters & Wok Fries' },
    { id: 'noodles', label: 'Noodles & Rice' },
    { id: 'mains', label: 'Wok Gravies' },
    { id: 'sizzlers', label: 'Sizzlers & Combos' },
    { id: 'desserts', label: 'Drinks & Desserts' },
  ];

  const menuItems = [
    {
      id: 1,
      category: 'soups',
      name: 'Signature Manchow Soup (Crispy Noodles Included)',
      price: '₹190',
      veg: true,
      spicy: '🔥🔥',
      tag: 'Legendary Bestseller',
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80',
      desc: 'Dark garlic coriander broth simmered with wild mushrooms, bamboo shoots, and served with golden fried crispy wonton noodles.',
    },
    {
      id: 2,
      category: 'starters',
      name: 'Dragon Paneer Sizzling Dry',
      price: '₹290',
      veg: true,
      spicy: '🔥🔥🔥',
      tag: 'Chef Signature',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=600&q=80',
      desc: 'Crispy cottage cheese cubes tossed in spicy red chili garlic glaze, cashews, and fiery dragon peppers.',
    },
    {
      id: 3,
      category: 'starters',
      name: 'Crispy Chicken Lollipop (6 Pcs)',
      price: '₹330',
      veg: false,
      spicy: '🔥🔥',
      tag: 'Crowd Favorite',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80',
      desc: 'Wok-charred chicken drums served with hot Schezwan dipping sauce and spring onion garnishing.',
    },
    {
      id: 4,
      category: 'starters',
      name: 'Butter Garlic Chili Prawns',
      price: '₹410',
      veg: false,
      spicy: '🔥🔥',
      tag: 'Seafood Special',
      image: 'https://images.unsplash.com/photo-1559742811-822863646df0?auto=format&fit=crop&w=600&q=80',
      desc: 'Succulent jumbo prawns sautéed in dark butter garlic sauce, bird eye chilis, and fresh coriander.',
    },
    {
      id: 5,
      category: 'noodles',
      name: 'Schezwan Triple Rice & Noodles (Veg)',
      price: '₹310',
      veg: true,
      spicy: '🔥🔥🔥',
      tag: 'Heavy Meal',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80',
      desc: 'Ultimate Indo-Chinese combination of Schezwan fried rice, Hakka noodles, crispy wontons, served with rich red Schezwan gravy.',
    },
    {
      id: 6,
      category: 'noodles',
      name: 'Chicken Singapore Wok Noodles',
      price: '₹320',
      veg: false,
      spicy: '🔥',
      tag: 'Aromatic Wok',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80',
      desc: 'Thin rice noodles tossed in curry aromatic oil, tender shredded chicken, bell peppers, and sesame.',
    },
    {
      id: 7,
      category: 'mains',
      name: 'Classic Chicken Manchurian Gravy',
      price: '₹340',
      veg: false,
      spicy: '🔥🔥',
      tag: 'Classic Pair',
      image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=600&q=80',
      desc: 'Juicy chicken meatballs simmered in soy coriander ginger sauce, perfectly paired with burnt garlic rice.',
    },
    {
      id: 8,
      category: 'mains',
      name: 'Exotic Veg in Black Pepper Sauce',
      price: '₹290',
      veg: true,
      spicy: '🔥🔥',
      tag: 'Healthy Wok',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
      desc: 'Broccoli, babycorn, zucchini, and paneer tossed in freshly crushed Sarawak black pepper reduction.',
    },
    {
      id: 9,
      category: 'sizzlers',
      name: 'New Manchow Ultimate Chicken Sizzler',
      price: '₹490',
      veg: false,
      spicy: '🔥🔥🔥',
      tag: 'Sizzling Hot',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      desc: 'Served on a piping red-hot cast iron plate: Schezwan chicken steak, stir-fried noodles, french fries, and grilled veggies drizzled with garlic glaze.',
    },
    {
      id: 10,
      category: 'soups',
      name: 'Steamed Chicken & Chive Dim Sums (6 Pcs)',
      price: '₹260',
      veg: false,
      spicy: '🔥',
      tag: 'Handmade Daily',
      image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=600&q=80',
      desc: 'Translucent steamed dumplings filled with minced chicken & scallions, served with fiery chili dip.',
    },
    {
      id: 11,
      category: 'desserts',
      name: 'Honey Noodles with Vanilla Ice Cream',
      price: '₹180',
      veg: true,
      spicy: '',
      tag: 'Sweet Crunch',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
      desc: 'Crispy fried flat noodles coated in warm organic honey, roasted sesame, topped with rich vanilla ice cream.',
    },
    {
      id: 12,
      category: 'desserts',
      name: 'Spiced Dragon Fruit & Mint Cooler',
      price: '₹140',
      veg: true,
      spicy: '',
      tag: 'Refreshing Drink',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80',
      desc: 'Chilled muddled dragon fruit blended with kaffir lime, mint leaves, and sparkling club soda.',
    },
  ];

  const filteredMenuItems = activeMenuTab === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeMenuTab);

  // Gallery Categories & Images
  const galleryCategories = [
    { id: 'all', label: 'All Photos' },
    { id: 'dishes', label: 'Signature Dishes' },
    { id: 'kitchen', label: 'Wok Kitchen' },
    { id: 'ambience', label: 'Dining Ambience' },
  ];

  const galleryImages = [
    { id: 1, category: 'dishes', title: 'Signature Manchow Soup with Crispy Noodles', url: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80' },
    { id: 2, category: 'kitchen', title: 'Dragon Wok Charcoal Flame Cooking', url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80' },
    { id: 3, category: 'dishes', title: 'Dragon Paneer Sizzling Dry', url: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80' },
    { id: 4, category: 'ambience', title: 'Obsidian Flame Dark Mood Dining Room', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80' },
    { id: 5, category: 'dishes', title: 'Schezwan Triple Rice & Gravy Bowl', url: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=80' },
    { id: 6, category: 'kitchen', title: 'Handcrafted Steamed Dim Sums Basket', url: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=1000&q=80' },
  ];

  const filteredGallery = activeGalleryTab === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeGalleryTab);

  // Customer Reviews
  const reviews = [
    {
      name: 'Aditya Sharma',
      tag: 'Regular Foodie',
      rating: 5,
      comment: 'The Manchow Soup here is hands down the best in the city! Generous crispy noodles and dark garlic flavor that cures any craving.',
      favoriteDish: 'Favorite: Manchow Soup & Dragon Paneer',
    },
    {
      name: 'Sneha Patel',
      tag: 'Weekend Family Diner',
      rating: 5,
      comment: 'Ordered Schezwan Triple Rice and Chicken Lollipop via WhatsApp. Delivered steaming hot within 25 minutes! Authentic wok hei aroma.',
      favoriteDish: 'Favorite: Schezwan Triple Rice',
    },
    {
      name: 'Karan Mehta',
      tag: 'Office Party Host',
      rating: 5,
      comment: 'Hosted our team lunch with their Schezwan Party Box. The food quantity, spice level options, and packaging were 10/10.',
      favoriteDish: 'Favorite: Ultimate Sizzler & Dim Sums',
    },
  ];

  // Party Combos & Packages
  const combos = [
    {
      id: 'family-feast',
      title: 'Family Indo-Chinese Feast',
      price: '₹1,199',
      serves: 'Serves 3-4 People',
      badge: 'Best Value Combo',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      items: [
        '2x Manchow Soups + Crispy Noodles',
        '1x Dragon Paneer / Chili Chicken Starter',
        '1x Schezwan Fried Rice',
        '1x Hakka Noodles',
        '1x Manchurian Gravy Bowl',
        '2x Soft Beverages / Mint Coolers',
      ],
    },
    {
      id: 'schezwan-party',
      title: 'Schezwan Party Box',
      price: '₹2,499',
      serves: 'Serves 6-8 People',
      badge: 'Party Hit',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80',
      items: [
        '4x Manchow Soups',
        '2x Starters (Chicken Lollipop + Spring Rolls)',
        '2x Wok Rice (Schezwan & Burnt Garlic)',
        '2x Wok Noodles (Hakka & Singapore)',
        '2x Gravies (Chili Paneer & Garlic Chicken)',
        '1x Honey Noodles Dessert Box',
      ],
    },
    {
      id: 'sizzler-delight',
      title: 'Duo Sizzler & Dim Sum Meal',
      price: '₹899',
      serves: 'Serves 2 People',
      badge: 'Date Night Special',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      items: [
        '1x Basket Steamed Dim Sums (6 Pcs)',
        '1x New Manchow Ultimate Sizzler',
        '2x Dragon Fruit Coolers',
        '1x Sizzling Brownie Dessert',
      ],
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'What is the delivery time and range for online WhatsApp orders?',
      a: 'We deliver within a 8 km radius of City Center. Standard delivery time is 25-35 minutes, delivered in heavy-duty thermal insulated leak-proof packaging.'
    },
    {
      q: 'Can I customize the spice levels for dishes?',
      a: 'Yes! When placing your order, you can choose between Mild, Medium Spicy, Authentic Schezwan (Hot), or Extra Dragon Fire (Super Hot).'
    },
    {
      q: 'Do you prepare Pure Vegetarian and Non-Vegetarian food separately?',
      a: '100% Yes! We maintain dedicated, separate wok stations, utensils, chopping boards, and fryers for Vegetarian and Non-Vegetarian cooking.'
    },
    {
      q: 'Do you offer Jain food options without garlic/onion?',
      a: 'Yes, we offer Jain Manchow Soup, Jain Paneer Chili, Jain Veg Noodles, and Jain Fried Rice prepared freshly on request.'
    },
    {
      q: 'How can I book a table for dine-in or reserve for group parties?',
      a: 'Click any "Reserve Table / Order on WhatsApp" button on this site or message us directly at +91 98765 43210 with your preferred time and number of guests.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0705] text-[#F9DCD4] font-sans relative">
      
      {/* ---------------------------------------------------- */}
      {/* STICKY HEADER & NAVBAR */}
      {/* ---------------------------------------------------- */}
      <header className="sticky top-0 z-40 bg-[#0A0705]/95 backdrop-blur-md border-b border-[#FC5A1F]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Branding */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full border-2 border-[#FC5A1F] bg-[#1A0D08] flex items-center justify-center text-xl shadow-lg group-hover:scale-105 transition-transform">
              🔥
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl tracking-wide text-white group-hover:text-[#FC5A1F] transition-colors">
                New Manchow
              </span>
              <span className="text-[10px] tracking-widest text-[#FFB77B] uppercase font-semibold">
                Wok-Fired Indo-Chinese Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors hover:text-[#FC5A1F] ${
                  activeSection === link.id ? 'text-[#FC5A1F] font-bold border-b-2 border-[#FC5A1F] pb-1' : 'text-[#E4BEB3]/80'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={createWhatsAppLink("Hello New Manchow! I would like to order food / reserve a table.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 shadow-lg hover:shadow-[#25D366]/30 transition-all transform hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F9DCD4] hover:text-[#FC5A1F] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1A0D08] border-b border-[#FC5A1F]/30 px-6 py-6 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-[#F9DCD4] hover:text-[#FC5A1F] py-1.5 border-b border-[#FC5A1F]/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={createWhatsAppLink("Hello New Manchow! I want to place a food order on WhatsApp.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#25D366] text-white py-3 rounded-full font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Order via WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>


      {/* ---------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80"
            alt="Wok Flame Cooking"
            className="w-full h-full object-cover scale-105 filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0705] via-[#0A0705]/80 to-[#0A0705]/50" />
        </div>

        {/* Hero Content Box */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          
          {/* Hero Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0D08]/90 backdrop-blur-md border border-[#FC5A1F]/40 shadow-xl">
            <span className="text-[#FC5A1F] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              🔥 Wok-Hei Dragon Flame Cooking
            </span>
            <span className="text-gray-400 text-xs">•</span>
            <ShinyText
              text="✨ Premium Indo-Chinese Dining"
              speed={2.5}
              color="#FFB77B"
              shineColor="#FFFFFF"
              spread={100}
            />
          </div>

          {/* Main Display Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-bold text-white tracking-tight leading-tight">
            New <span className="flame-gradient-text italic font-serif">Manchow</span>
          </h1>

          {/* Sub-tagline */}
          <p className="text-lg sm:text-2xl font-serif italic text-[#FFB77B]">
            Bold Schezwan • Sizzling Starters • Authentic Wok Magic
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#E4BEB3] max-w-2xl mx-auto leading-relaxed">
            Experience high-heat wok cooking where aromatic garlic, dark red chili peppers, fresh herbs, and wok-hei charcoal flames craft unforgettable Indo-Chinese flavors.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={createWhatsAppLink("Hello New Manchow! I want to order food now for fast delivery.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 shadow-xl hover:shadow-[#25D366]/40 transition-all transform hover:-translate-y-1"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              Fast Order on WhatsApp
            </a>

            <a
              href="#menu"
              className="border-2 border-[#FC5A1F] text-[#FC5A1F] hover:bg-[#FC5A1F] hover:text-white px-7 py-3.5 rounded-full font-bold text-base transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <i className="fa-solid fa-utensils mr-2"></i>
              View Food Menu
            </a>

            <a
              href="#combos"
              className="bg-[#1A0D08]/80 hover:bg-[#1A0D08] text-white border border-white/20 px-7 py-3.5 rounded-full font-semibold text-base backdrop-blur-md transition-all shadow-md"
            >
              <i className="fa-solid fa-fire mr-2 text-[#FC5A1F]"></i>
              Party Combos
            </a>
          </div>

          {/* Stat Highlights */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FC5A1F]">15,000+</p>
              <p className="text-xs text-[#E4BEB3] mt-1">Soups Served</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FFB77B]">4.9 ★</p>
              <p className="text-xs text-[#E4BEB3] mt-1">Foodie Rating</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FC5A1F]">30 Mins</p>
              <p className="text-xs text-[#E4BEB3] mt-1">Express Delivery</p>
            </div>
            <div className="glass-card p-4 rounded-2xl text-center">
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#FFB77B]">100%</p>
              <p className="text-xs text-[#E4BEB3] mt-1">Fresh Wok Hei</p>
            </div>
          </div>

        </div>

      </section>


      {/* ---------------------------------------------------- */}
      {/* OUR STORY & HERITAGE SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="story" className="py-20 px-4 bg-[#1A0D08]/70 border-y border-[#FC5A1F]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Food Image Mosaic */}
          <div className="relative space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                alt="Manchow Soup"
                className="rounded-2xl shadow-xl object-cover h-64 w-full border border-[#FC5A1F]/30 hover:scale-105 transition-transform"
              />
              <img
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
                alt="Wok Noodles"
                className="rounded-2xl shadow-xl object-cover h-64 w-full border border-[#FC5A1F]/30 hover:scale-105 transition-transform mt-6"
              />
            </div>
            <div className="glass-card p-4 rounded-2xl border border-[#FC5A1F]/40 flex items-center gap-4 bg-[#25140D]/90 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#FC5A1F]/20 flex items-center justify-center text-[#FC5A1F] text-2xl">
                🔥
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">The Art of High-Heat Wok Hei</h4>
                <p className="text-xs text-[#E4BEB3]">Sealing intense garlic and chili flavors at 800°F wok temperatures.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Story Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
              Crafted with Passion
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
              Where Indo-Chinese Gastronomy Meets High-Flame Wok Artistry
            </h2>
            <p className="text-[#E4BEB3] text-base leading-relaxed">
              At <strong className="text-white">New Manchow</strong>, we honor the legendary fusion of Chinese culinary wok techniques with rich Indian aromatic spices. From our signature simmered dark Manchow broth topped with golden wonton crunch to our sizzler skillets and fiery Schezwan gravies, every dish is prepared fresh to order.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-[#FC5A1F] fa-fire text-[#FC5A1F] text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white text-sm">Wok-Hei Charcoal Fire</h4>
                  <p className="text-xs text-[#E4BEB3]">Smoky wok aroma sealed into every noodle strand.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa-solid fa-[#FC5A1F] fa-pepper-hot text-[#FC5A1F] text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white text-sm">Scratch-Made Sauces</h4>
                  <p className="text-xs text-[#E4BEB3]">Red chili garlic &amp; coriander pastes ground daily.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa-solid fa-leaf text-emerald-400 text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white text-sm">Separate Veg Woks</h4>
                  <p className="text-xs text-[#E4BEB3]">Dedicated pure veg kitchen stations &amp; Jain options.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <i className="fa-solid fa-motorcycle text-[#FFB77B] text-xl mt-1"></i>
                <div>
                  <h4 className="font-semibold text-white text-sm">Hot Insulated Delivery</h4>
                  <p className="text-xs text-[#E4BEB3]">Arrives piping hot with soup wontons packed separately.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={createWhatsAppLink("Hello New Manchow! I want to check food menu and table availability.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FC5A1F] hover:bg-[#E84C0E] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-lg"
              >
                Inquire &amp; Order on WhatsApp
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SIGNATURE FOOD MENU SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="menu" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
            Sizzling Delicacies
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Our Signature Indo-Chinese Menu
          </h2>
          <p className="text-[#E4BEB3] max-w-2xl mx-auto text-base">
            Explore our handcrafted wok soups, fiery Schezwan starters, sizzlers, dim sums, and wok fried noodles.
          </p>
        </div>

        {/* Menu Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveMenuTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeMenuTab === cat.id
                  ? 'bg-[#FC5A1F] text-white shadow-lg shadow-[#FC5A1F]/30 scale-105'
                  : 'bg-[#1A0D08] text-[#E4BEB3] hover:text-white hover:bg-[#25140D] border border-[#FC5A1F]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenuItems.map((item) => (
            <div key={item.id} className="glass-card rounded-2xl overflow-hidden glass-card-hover flex flex-col justify-between border border-[#FC5A1F]/20">
              
              <div className="relative h-48 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute top-3 left-3 bg-[#0A0705]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1.5 border border-white/20">
                  <span className={`w-2.5 h-2.5 rounded-full ${item.veg ? 'bg-emerald-500' : 'bg-red-500'}`}></span>
                  <span className="text-white">{item.veg ? 'Pure Veg' : 'Non-Veg'}</span>
                </div>
                <div className="absolute top-3 right-3 bg-[#FC5A1F] text-white font-bold text-[11px] px-3 py-1 rounded-full shadow-md">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif font-bold text-lg text-white">{item.name}</h3>
                    <span className="font-serif font-bold text-[#FFB77B] text-xl ml-2">{item.price}</span>
                  </div>
                  <p className="text-xs text-[#E4BEB3] leading-relaxed mt-2">{item.desc}</p>
                </div>

                <div className="pt-3 border-t border-[#FC5A1F]/15 flex items-center justify-between">
                  <span className="text-xs text-[#FC5A1F] font-semibold">{item.spicy}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedDishModal(item)}
                      className="border border-[#FC5A1F]/40 hover:bg-[#FC5A1F]/10 text-[#FFB77B] px-3 py-1.5 rounded-lg text-xs font-semibold"
                    >
                      Details
                    </button>
                    <a
                      href={createWhatsAppLink(`Hello New Manchow! I want to order *${item.name}* (${item.price}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md"
                    >
                      <i className="fa-brands fa-whatsapp text-sm"></i>
                      Order
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Order Callout Banner */}
        <div className="mt-16 glass-card p-8 rounded-3xl border border-[#FC5A1F]/30 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#1A0D08] to-[#321A11]">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">Need Customized Spice Levels or Large Group Catering?</h3>
            <p className="text-sm text-[#E4BEB3]">Our master chefs prepare Jain dishes, extra fiery Schezwan, or bulk party boxes.</p>
          </div>
          <a
            href={createWhatsAppLink("Hello New Manchow! I want to place a custom food order / party inquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg whitespace-nowrap"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
            Custom WhatsApp Order
          </a>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* WOK SPECIALS & SIZZLER SHOWCASE */}
      {/* ---------------------------------------------------- */}
      <section id="specials" className="py-20 px-4 bg-[#1A0D08] border-y border-[#FC5A1F]/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
              Signature Wok Magic
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Sizzling Skillets &amp; Manchow Broth Creations
            </h2>
            <p className="text-[#E4BEB3] text-base leading-relaxed">
              Experience the trademark sensation of red-hot cast iron skillets arriving at your table with crackling steam, roasted garlic butter glaze, and rich Schezwan sizzler sauces.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl border border-[#FC5A1F]/20">
                <p className="text-2xl mb-1">🍲</p>
                <h4 className="font-semibold text-white text-sm">Manchow Soup Special</h4>
                <p className="text-xs text-[#E4BEB3]">Served with golden fried wonton crunch.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#FC5A1F]/20">
                <p className="text-2xl mb-1">🍳</p>
                <h4 className="font-semibold text-white text-sm">Sizzler Skillets</h4>
                <p className="text-xs text-[#E4BEB3]">Served on smoking red-hot cast iron plates.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#FC5A1F]/20">
                <p className="text-2xl mb-1">🥟</p>
                <h4 className="font-semibold text-white text-sm">Steamed Dim Sums</h4>
                <p className="text-xs text-[#E4BEB3]">Freshly pleated dumplings in bamboo baskets.</p>
              </div>

              <div className="glass-card p-4 rounded-xl border border-[#FC5A1F]/20">
                <p className="text-2xl mb-1">🌶️</p>
                <h4 className="font-semibold text-white text-sm">Schezwan Triple Rice</h4>
                <p className="text-xs text-[#E4BEB3]">Fried rice + noodles + spicy gravy bowl.</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={createWhatsAppLink("Hello! I want to order the New Manchow Sizzler Special.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FC5A1F] hover:bg-[#E84C0E] text-white font-bold px-7 py-3 rounded-full text-sm flex items-center gap-2 shadow-lg transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
                Order Sizzlers on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#FC5A1F]/30">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                alt="Sizzler Skillet"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* PHOTO GALLERY & LIGHTBOX */}
      {/* ---------------------------------------------------- */}
      <section id="gallery" className="py-24 px-4 bg-[#1A0D08]/40 border-t border-[#FC5A1F]/15">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
              Visual Delight
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Food &amp; Kitchen Gallery
            </h2>
            <p className="text-[#E4BEB3] max-w-2xl mx-auto text-base">
              Explore our mouth-watering dishes, high-flame wok action, and dark mood dining ambience.
            </p>
          </div>

          {/* Gallery Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveGalleryTab(cat.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeGalleryTab === cat.id
                    ? 'bg-[#FC5A1F] text-white font-bold shadow-md scale-105'
                    : 'bg-[#1A0D08] text-[#E4BEB3] hover:text-white border border-[#FC5A1F]/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredGallery.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightboxImage(img)}
                className="group relative h-64 rounded-2xl overflow-hidden border border-[#FC5A1F]/25 cursor-pointer shadow-lg"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                  <span className="text-[#FFB77B] font-serif font-bold text-lg">{img.title}</span>
                  <span className="text-xs text-gray-300 flex items-center gap-1 mt-1">
                    <i className="fa-solid fa-expand text-xs"></i> Click to enlarge
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#1A0D08] rounded-3xl overflow-hidden border-2 border-[#FC5A1F]/50 shadow-2xl animate-scaleUp">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-white/20"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
            <div className="h-[70vh] bg-black">
              <img src={lightboxImage.url} alt={lightboxImage.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-5 bg-[#1A0D08] flex items-center justify-between border-t border-[#FC5A1F]/20">
              <div>
                <h4 className="font-serif font-bold text-white text-xl">{lightboxImage.title}</h4>
                <p className="text-xs text-[#FC5A1F] uppercase tracking-wider mt-0.5">New Manchow Indo-Chinese Dining</p>
              </div>
              <a
                href={createWhatsAppLink(`Hello New Manchow! I saw your dish photo "${lightboxImage.title}" and want to order.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> Order This Dish
              </a>
            </div>
          </div>
        </div>
      )}


      {/* ---------------------------------------------------- */}
      {/* CUSTOMER REVIEWS */}
      {/* ---------------------------------------------------- */}
      <section id="reviews" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
            Foodie Ratings
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            What Our Customers Say
          </h2>
          <p className="text-[#E4BEB3] max-w-2xl mx-auto text-base">
            Read real reviews from Chinese food lovers who enjoy our wok dishes and fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-[#FC5A1F]/25 flex flex-col justify-between space-y-6 glass-card-hover">
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-yellow-400 text-sm">
                  {[...Array(rev.rating)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p className="text-sm text-[#F9DCD4] italic leading-relaxed font-serif">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#FC5A1F]/15 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-white text-base">{rev.name}</h4>
                  <p className="text-xs text-[#FFB77B]">{rev.tag}</p>
                </div>
                <span className="text-[11px] text-gray-400">{rev.favoriteDish}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* PARTY COMBOS & CATERING PACKAGES */}
      {/* ---------------------------------------------------- */}
      <section id="combos" className="py-24 px-4 bg-[#1A0D08]/60 border-y border-[#FC5A1F]/20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
              Party &amp; Family Specials
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Feast Combos &amp; Party Boxes
            </h2>
            <p className="text-[#E4BEB3] max-w-2xl mx-auto text-base">
              Save more with our curated family meal boxes, office party packages, and sizzler meal sets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {combos.map((combo) => (
              <div key={combo.id} className="glass-card rounded-3xl overflow-hidden border border-[#FC5A1F]/30 flex flex-col justify-between glass-card-hover">
                
                <div className="relative h-52 overflow-hidden">
                  <img src={combo.image} alt={combo.title} className="w-full h-full object-cover" />
                  <div className="absolute top-3 right-3 bg-[#FC5A1F] text-white font-bold text-xs px-3 py-1 rounded-full shadow-md">
                    {combo.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#0A0705]/90 px-3 py-1 rounded-lg text-[#FFB77B] font-serif font-bold text-base border border-[#FC5A1F]/30">
                    {combo.price} <span className="text-xs font-sans text-gray-300 font-normal">({combo.serves})</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif font-bold text-2xl text-white">{combo.title}</h3>
                    
                    <div className="space-y-2 pt-2 border-t border-[#FC5A1F]/15">
                      <p className="text-xs font-bold text-[#FC5A1F] uppercase tracking-wider">Combo Includes:</p>
                      <ul className="space-y-1.5 text-xs text-[#F9DCD4]">
                        {combo.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <i className="fa-solid fa-check text-emerald-400 text-xs mt-0.5"></i>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href={createWhatsAppLink(`Hello New Manchow! I want to order the *${combo.title}* (${combo.price}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                    Order Combo Box on WhatsApp
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* FAQS SECTION */}
      {/* ---------------------------------------------------- */}
      <section id="faq" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-[#E4BEB3] text-base">
            Everything you need to know about delivery, spice levels, Jain food options, and reservations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-2xl border border-[#FC5A1F]/20 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left font-serif font-bold text-white text-base sm:text-lg flex items-center justify-between gap-4 hover:text-[#FC5A1F] transition-colors"
              >
                <span>{faq.q}</span>
                <i className={`fa-solid ${openFaq === idx ? 'fa-minus text-[#FC5A1F]' : 'fa-plus text-gray-400'} text-sm`}></i>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-[#E4BEB3] leading-relaxed border-t border-[#FC5A1F]/10 pt-4 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* CONTACT & INSTANT WHATSAPP ORDER FORM */}
      {/* ---------------------------------------------------- */}
      <section id="contact" className="py-24 px-4 bg-[#1A0D08] border-t border-[#FC5A1F]/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Info Cards */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#FC5A1F]/10 border border-[#FC5A1F]/30 text-[#FC5A1F] text-xs font-bold uppercase tracking-widest mb-3">
                Get in Touch
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                Location &amp; Online Orders
              </h2>
              <p className="text-[#E4BEB3] text-base mt-2">
                Visit our restaurant for dine-in or place instant orders for home delivery via WhatsApp!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-5 rounded-2xl border border-[#FC5A1F]/25 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center text-xl shrink-0">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <h4 className="text-xs text-[#E4BEB3] font-semibold uppercase">WhatsApp Orders</h4>
                  <p className="text-sm font-serif font-bold text-white mt-0.5">{PHONE_DISPLAY}</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-[#FC5A1F]/25 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FC5A1F]/20 text-[#FC5A1F] flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-xs text-[#E4BEB3] font-semibold uppercase">Email Us</h4>
                  <p className="text-sm font-serif font-bold text-white mt-0.5">{EMAIL_DISPLAY}</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-[#FC5A1F]/25 flex items-start gap-4 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-[#FC5A1F]/20 text-[#FC5A1F] flex items-center justify-center text-xl shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="text-xs text-[#E4BEB3] font-semibold uppercase">Restaurant Address</h4>
                  <p className="text-sm font-serif font-bold text-white mt-0.5">{ADDRESS_DISPLAY}</p>
                  <p className="text-[11px] text-[#FFB77B] mt-1">Open 7 Days a Week • 11:30 AM – 11:30 PM</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-[#FC5A1F]/30 h-64 shadow-xl">
              <iframe
                title="New Manchow Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.731426749313!2d72.8258!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNDknMzIuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

          {/* Quick Order Form */}
          <div className="glass-card p-8 rounded-3xl border border-[#FC5A1F]/40 shadow-2xl space-y-6">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white">Instant WhatsApp Order Generator</h3>
              <p className="text-xs text-[#E4BEB3] mt-1">Select your dishes to generate a direct WhatsApp message.</p>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Verma"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Order Type</label>
                  <select
                    value={formOrderType}
                    onChange={(e) => setFormOrderType(e.target.value)}
                    className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                  >
                    <option value="Home Delivery">Home Delivery</option>
                    <option value="Dine-In Table Reservation">Dine-In Table Reservation</option>
                    <option value="Takeaway Pickup">Takeaway Pickup</option>
                    <option value="Party Catering Inquiry">Party Catering Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Address / Delivery Area</label>
                  <input
                    type="text"
                    placeholder="Area, Flat No., Landmark..."
                    value={formAddress}
                    onChange={(e) => setFormAddress(e.target.value)}
                    className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Spice Level Preference</label>
                  <select
                    value={formSpiceLevel}
                    onChange={(e) => setFormSpiceLevel(e.target.value)}
                    className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                  >
                    <option value="Mild (Kid Friendly)">Mild (Kid Friendly)</option>
                    <option value="Medium Spicy">Medium Spicy</option>
                    <option value="Authentic Schezwan (Hot)">Authentic Schezwan (Hot)</option>
                    <option value="Extra Dragon Fire (Super Hot)">Extra Dragon Fire (Super Hot)</option>
                    <option value="Jain (No Garlic/Onion)">Jain (No Garlic/Onion)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#E4BEB3] font-semibold mb-1">Dishes &amp; Quantity</label>
                <textarea
                  rows="3"
                  required
                  placeholder="e.g. 2x Manchow Soup, 1x Schezwan Triple Rice, 1x Dragon Paneer..."
                  value={formDishes}
                  onChange={(e) => setFormDishes(e.target.value)}
                  className="w-full bg-[#0A0705] border border-[#FC5A1F]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FC5A1F]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-xl hover:shadow-[#25D366]/30 transition-all"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                Send Food Order on WhatsApp
              </button>
            </form>
          </div>

        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* FOOTER */}
      {/* ---------------------------------------------------- */}
      <footer className="bg-[#050302] border-t border-[#FC5A1F]/20 py-16 px-4 text-xs text-[#E4BEB3]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#FC5A1F] bg-[#1A0D08] flex items-center justify-center text-xl">
                🔥
              </div>
              <span className="font-serif font-bold text-lg text-white">New Manchow</span>
            </div>
            <p className="leading-relaxed">
              Premium wok-fired Indo-Chinese cuisine, sizzling starters, hand-pleated dim sums, and fast online WhatsApp delivery.
            </p>
            <div className="flex items-center gap-3 text-lg text-[#FC5A1F] pt-2">
              <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href={createWhatsAppLink("Hello New Manchow")} className="hover:text-white transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider border-b border-[#FC5A1F]/20 pb-2">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#FC5A1F]">Home</a></li>
              <li><a href="#story" className="hover:text-[#FC5A1F]">Our Story</a></li>
              <li><a href="#menu" className="hover:text-[#FC5A1F]">Food Menu</a></li>
              <li><a href="#specials" className="hover:text-[#FC5A1F]">Wok Specials</a></li>
              <li><a href="#combos" className="hover:text-[#FC5A1F]">Party Combos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider border-b border-[#FC5A1F]/20 pb-2">Menu Highlights</h4>
            <ul className="space-y-2">
              <li><a href="#menu" className="hover:text-[#FC5A1F]">Signature Manchow Soup</a></li>
              <li><a href="#menu" className="hover:text-[#FC5A1F]">Schezwan Triple Rice</a></li>
              <li><a href="#menu" className="hover:text-[#FC5A1F]">Dragon Paneer Sizzling Dry</a></li>
              <li><a href="#menu" className="hover:text-[#FC5A1F]">Chicken Lollipop</a></li>
              <li><a href="#faq" className="hover:text-[#FC5A1F]">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white text-sm mb-4 uppercase tracking-wider border-b border-[#FC5A1F]/20 pb-2">Contact &amp; Hours</h4>
            <p className="mb-2"><strong className="text-white">Phone:</strong> {PHONE_DISPLAY}</p>
            <p className="mb-2"><strong className="text-white">Email:</strong> {EMAIL_DISPLAY}</p>
            <p className="mb-2"><strong className="text-white">Location:</strong> MG Road, City Center</p>
            <p className="text-emerald-400 font-semibold mt-2">Open Daily • 11:30 AM – 11:30 PM</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} New Manchow. All rights reserved.</p>
          <p className="text-[11px] text-gray-500">Wok-Fired Indo-Chinese Culinary Excellence.</p>
        </div>
      </footer>


      {/* ---------------------------------------------------- */}
      {/* FLOATING WHATSAPP BUTTON */}
      {/* ---------------------------------------------------- */}
      <a
        href={createWhatsAppLink("Hello New Manchow! I want to place a food order on WhatsApp.")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center text-3xl shadow-2xl animate-whatsapp-pulse hover:scale-110 transition-transform"
        aria-label="Order on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>


      {/* ---------------------------------------------------- */}
      {/* DISH DETAILS MODAL */}
      {/* ---------------------------------------------------- */}
      {selectedDishModal && (
        <div className="fixed inset-0 z-50 modal-backdrop flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-[#1A0D08] rounded-3xl overflow-hidden border-2 border-[#FC5A1F]/50 shadow-2xl animate-scaleUp p-6 sm:p-8 space-y-6">
            <button
              onClick={() => setSelectedDishModal(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors border border-white/20"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#FC5A1F]/40">
                <img src={selectedDishModal.image} alt={selectedDishModal.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-xs bg-[#FC5A1F]/20 text-[#FC5A1F] font-bold px-2.5 py-0.5 rounded-full">{selectedDishModal.tag}</span>
                <h3 className="font-serif font-bold text-2xl text-white mt-1">{selectedDishModal.name}</h3>
                <p className="font-serif font-bold text-[#FFB77B] text-xl">{selectedDishModal.price}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E4BEB3] leading-relaxed">
              {selectedDishModal.desc}
            </p>

            <div className="space-y-2 border-t border-[#FC5A1F]/15 pt-4">
              <h4 className="text-xs font-bold text-[#FC5A1F] uppercase tracking-wider">Dish Highlights &amp; Customization:</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-white">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-fire text-[#FC5A1F]"></i>
                  <span>Spice Level: {selectedDishModal.spicy || 'Mild/Medium'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-utensils text-[#FFB77B]"></i>
                  <span>Preparation: Fresh Wok-Hei</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-400"></i>
                  <span>Packaging: Leak-Proof Container</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-clock text-cyan-400"></i>
                  <span>Delivery: 25-35 Minutes</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={createWhatsAppLink(`Hello New Manchow! I want to order *${selectedDishModal.name}* (${selectedDishModal.price}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <i className="fa-brands fa-whatsapp text-xl"></i>
                Confirm Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
