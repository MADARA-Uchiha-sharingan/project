import { 
  users, type User, type InsertUser,
  categories, type Category, type InsertCategory,
  menuItems, type MenuItem, type InsertMenuItem
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getAllCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Menu Item methods
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItemById(id: number): Promise<MenuItem | undefined>;
  getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]>;
  getFeaturedMenuItems(): Promise<MenuItem[]>;
  createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private menuItems: Map<number, MenuItem>;
  private userCurrentId: number;
  private categoryCurrentId: number;
  private menuItemCurrentId: number;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.menuItems = new Map();
    this.userCurrentId = 1;
    this.categoryCurrentId = 1;
    this.menuItemCurrentId = 1;
    
    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Create categories based on the exact menu provided
    const teaBeverages = await this.createCategory({ name: "Tea & Hot Beverages", description: "Hot drinks including tea, coffee, and lassi" });
    const softDrinks = await this.createCategory({ name: "Soft Drinks", description: "Refreshing non-alcoholic beverages" });
    const hardDrinks = await this.createCategory({ name: "Hard Drinks", description: "Alcoholic beverages including beer, rum, and whiskey" });
    const cigarettes = await this.createCategory({ name: "Cigarettes", description: "Various cigarette options" });
    const breakfast = await this.createCategory({ name: "Breakfast", description: "Morning favorites to start your day" });
    const noodles = await this.createCategory({ name: "Noodles", description: "Various noodle dishes" });
    const macaroni = await this.createCategory({ name: "Macaroni", description: "Delicious macaroni dishes" });
    const chowmein = await this.createCategory({ name: "Chowmein", description: "Flavorful chowmein varieties" });
    const thukpa = await this.createCategory({ name: "Thukpa", description: "Tibetan-style noodle soups" });
    const momo = await this.createCategory({ name: "Mo:Mo", description: "Traditional Nepali dumplings" });
    const sausageTofu = await this.createCategory({ name: "Sausage & Tofu", description: "Sausage and tofu specialties" });
    const friedSekuwa = await this.createCategory({ name: "Fried & Sekuwa Dishes", description: "Fried meat dishes and grilled delicacies" });
    const nonVegKhaja = await this.createCategory({ name: "Non-Veg Khaja Set", description: "Traditional non-vegetarian Nepali platters" });
    const vegKhaja = await this.createCategory({ name: "Veg Khaja Set", description: "Traditional vegetarian Nepali platters" });
    const khanaSet = await this.createCategory({ name: "Khana Set", description: "Complete Nepali meals" });
    const friedRice = await this.createCategory({ name: "Fried Rice", description: "Various fried rice options" });
    const saladsSnacks = await this.createCategory({ name: "Salads & Snacks", description: "Light bites and fresh salads" });
    const desserts = await this.createCategory({ name: "Desserts", description: "Sweet treats to finish your meal" });

    // Tea & Hot Beverages
    await this.createMenuItem({
      name: "Green Tea",
      price: 60,
      shortDescription: "A soothing and refreshing tea packed with antioxidants",
      description: "Our green tea is sourced from the finest tea gardens of Nepal, offering a refreshing taste with health benefits of antioxidants.",
      image: "/attached_assets/Green Tea.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "3 mins"
    });

    await this.createMenuItem({
      name: "Milk Tea",
      price: 40,
      shortDescription: "Traditional Nepali tea with milk, sugar, and spices for a rich taste",
      description: "A comforting blend of premium black tea, milk, sugar, and aromatic spices like cardamom and cinnamon, prepared the traditional Nepali way.",
      image: "/attached_assets/Milk Tea.png",
      categoryId: teaBeverages.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Black Tea",
      price: 20,
      shortDescription: "Strong and aromatic plain tea without milk",
      description: "A robust and aromatic black tea served without milk, perfect for those who prefer the pure taste of tea leaves.",
      image: "/attached_assets/Black Tea.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "3 mins"
    });

    await this.createMenuItem({
      name: "Lemon Tea",
      price: 30,
      shortDescription: "A citrusy twist to black tea with fresh lemon juice",
      description: "Refreshing black tea infused with the zesty flavor of freshly squeezed lemon juice, perfect for a refreshing drink any time of day.",
      image: "/attached_assets/Lemon Tea.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "4 mins"
    });

    await this.createMenuItem({
      name: "Milk Coffee",
      price: 100,
      shortDescription: "Creamy and smooth coffee with milk and sugar",
      description: "A comforting cup of rich coffee brewed with locally sourced beans, served with creamy milk and sugar to your preference.",
      image: "/attached_assets/Milk Coffee.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Black Coffee",
      price: 50,
      shortDescription: "Strong and bold coffee without milk",
      description: "A bold and rich coffee served without milk, allowing you to enjoy the pure, intense flavor of our premium coffee beans.",
      image: "/attached_assets/Black Coffee.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "4 mins"
    });

    await this.createMenuItem({
      name: "Hot Lemon Water",
      price: 50,
      shortDescription: "Warm and refreshing drink with lemon, great for digestion",
      description: "A simple yet invigorating hot drink made with fresh lemon juice, warm water, and a touch of honey, perfect for soothing the throat and aiding digestion.",
      image: "/attached_assets/Lemon Tea.png", // Using lemon tea image as placeholder
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "3 mins"
    });

    await this.createMenuItem({
      name: "Banana Lassi",
      price: 150,
      shortDescription: "A creamy yogurt-based drink blended with fresh bananas",
      description: "A refreshing and nutritious drink made with fresh yogurt blended with ripe bananas and a hint of cardamom, topped with a sprinkle of nuts.",
      image: "/attached_assets/Banana lassi.png",
      categoryId: teaBeverages.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "7 mins"
    });

    await this.createMenuItem({
      name: "Plain Lassi",
      price: 100,
      shortDescription: "A refreshing, sweet yogurt drink to cool you down",
      description: "A classic yogurt-based drink that's both refreshing and nutritious, sweetened to perfection and served chilled.",
      image: "/attached_assets/Plain lassi.png",
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Milk",
      price: 50,
      shortDescription: "Fresh and nutritious warm or cold milk",
      description: "Pure, fresh milk served according to your preference - hot, cold, or at room temperature. A simple and nutritious beverage.",
      image: "/attached_assets/Plain lassi.png", // Using plain lassi image as placeholder
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    await this.createMenuItem({
      name: "Curd",
      price: 70,
      shortDescription: "Thick and creamy natural yogurt, perfect for digestion",
      description: "Freshly made yogurt with a smooth and creamy texture, served chilled. Rich in probiotics and perfect for digestive health.",
      image: "/attached_assets/Plain lassi.png", // Using plain lassi image as placeholder
      categoryId: teaBeverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    // Hard Drinks
    await this.createMenuItem({
      name: "Tuborg Beer",
      price: 600,
      shortDescription: "Smooth and crisp Danish-style lager beer",
      description: "A premium Danish-style lager with a smooth, crisp taste, served ice-cold for the perfect refreshment.",
      image: "/attached_assets/Tuborg beer.png",
      categoryId: hardDrinks.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Gorkha Beer",
      price: 450,
      shortDescription: "A locally brewed strong beer with a bold flavor",
      description: "A traditional Nepali beer with a strong, distinctive taste that showcases local brewing traditions, served chilled.",
      image: "/attached_assets/Gorkha beer.png",
      categoryId: hardDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Gorkha Mini Beer",
      price: 250,
      shortDescription: "A smaller version of Gorkha beer for a lighter option",
      description: "The same great taste as Gorkha beer in a smaller serving, perfect for those who want to enjoy beer in moderation.",
      image: "/attached_assets/Gorkha Mini beer.png",
      categoryId: hardDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Khukuri Rum XXX",
      price: 550,
      shortDescription: "A rich and strong dark rum (quarter glass)",
      description: "A premium Nepali dark rum known for its rich, strong flavor with notes of molasses and spices, served neat or with your choice of mixer.",
      image: "/attached_assets/Khukuri Rum XXX.png",
      categoryId: hardDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    await this.createMenuItem({
      name: "8848 Vodka",
      price: 625,
      shortDescription: "A premium vodka with a smooth finish (quarter glass)",
      description: "Named after the height of Mt. Everest, this premium vodka offers a clean, smooth taste with minimal burn, perfect for sipping or in cocktails.",
      image: "/attached_assets/8848 Vodka.png",
      categoryId: hardDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    await this.createMenuItem({
      name: "Old Durbar Whiskey",
      price: 750,
      shortDescription: "High-quality aged whiskey with a smoky aroma (quarter glass)",
      description: "A distinguished Nepali whiskey known for its balanced smoky aroma and rich taste, aged to perfection and best enjoyed neat or on the rocks.",
      image: "/attached_assets/Old Durbar whiskey.png",
      categoryId: hardDrinks.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    // Breakfast
    await this.createMenuItem({
      name: "Toasted Bread with Omelet",
      price: 200,
      shortDescription: "Crispy toast served with a fluffy omelet (2 sets)",
      description: "Start your day with perfectly toasted bread accompanied by a fluffy, seasoned omelet made with farm-fresh eggs.",
      image: "/attached_assets/Toasted Bread and omlete.png",
      categoryId: breakfast.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "10 mins"
    });

    await this.createMenuItem({
      name: "Toasted Bread with Jam/Honey",
      price: 150,
      shortDescription: "Toasted bread with sweet jam or honey (2 sets)",
      description: "Crispy, golden-brown toast served with your choice of sweet fruit jam or locally-sourced honey for a delightful breakfast.",
      image: "/attached_assets/Toasted Bread with Honey and Jam and Omelette.png",
      categoryId: breakfast.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "7 mins"
    });

    await this.createMenuItem({
      name: "Boiled Egg",
      price: 80,
      shortDescription: "Simple yet nutritious boiled eggs (2 pieces)",
      description: "Perfectly boiled eggs cooked to your preference, served with a sprinkle of salt and pepper - a simple, protein-packed breakfast option.",
      image: "/attached_assets/Boiled Egg.png",
      categoryId: breakfast.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "8 mins"
    });

    await this.createMenuItem({
      name: "Omelet & Paratha",
      price: 100,
      shortDescription: "A combination of omelet and crispy paratha",
      description: "A satisfying breakfast featuring a flavorful omelet paired with freshly made crispy paratha, a perfect combination of taste and texture.",
      image: "/attached_assets/Omelette and Paratha.png",
      categoryId: breakfast.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Onion Pakora",
      price: 80,
      shortDescription: "Crunchy deep-fried onion fritters (8 pieces)",
      description: "Crispy fritters made from thinly sliced onions dipped in a spiced chickpea flour batter and deep-fried to golden perfection.",
      image: "/attached_assets/Onion Pakora.png",
      categoryId: breakfast.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Paneer Pakora",
      price: 250,
      shortDescription: "Crispy deep-fried cottage cheese fritters (8 pieces)",
      description: "Soft cottage cheese cubes coated in a spiced chickpea flour batter and deep-fried to create a crispy outer layer with a soft, melty center.",
      image: "/attached_assets/Paneer Pakora.png",
      categoryId: breakfast.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Mushroom Pakora",
      price: 200,
      shortDescription: "Golden-fried mushrooms with a crispy coating (8 pieces)",
      description: "Fresh mushrooms dipped in a seasoned batter and deep-fried until golden and crispy, served with mint chutney for a delicious appetizer.",
      image: "/attached_assets/Mushroom Pakora.png",
      categoryId: breakfast.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    // Noodles
    await this.createMenuItem({
      name: "Noodle Soup",
      price: 50,
      shortDescription: "Warm and comforting noodle soup",
      description: "A soothing soup with thin noodles in a flavorful broth, garnished with fresh herbs and vegetables for a comforting meal.",
      image: "/attached_assets/noodle soup.png",
      categoryId: noodles.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Egg Noodle Soup",
      price: 80,
      shortDescription: "Classic noodle soup with an added egg",
      description: "Our delicious noodle soup enhanced with a farm-fresh egg, creating a more substantial and protein-rich meal.",
      image: "/attached_assets/Egg Noodle Soup.png",
      categoryId: noodles.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Veg Fried Noodles",
      price: 100,
      shortDescription: "Stir-fried noodles with fresh vegetables",
      description: "Noodles stir-fried to perfection with a colorful medley of fresh vegetables and our special sauce for a flavorful vegetarian dish.",
      image: "/attached_assets/Veg Fried Noodles.png",
      categoryId: noodles.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Egg Fried Noodles",
      price: 150,
      shortDescription: "Fried noodles tossed with egg and spices",
      description: "Stir-fried noodles mixed with scrambled eggs and seasoned with our special blend of spices for a savory and satisfying meal.",
      image: "/attached_assets/Egg Fried Noodles.png",
      categoryId: noodles.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Chicken Fried Noodles",
      price: 200,
      shortDescription: "Flavorful stir-fried noodles with chicken",
      description: "A delicious combination of stir-fried noodles with tender pieces of chicken and fresh vegetables, seasoned with our special sauce blend.",
      image: "/attached_assets/Egg Fried Noodles.png", // Using egg noodles image as placeholder
      categoryId: noodles.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    // Macaroni
    await this.createMenuItem({
      name: "Macaroni with Egg",
      price: 80,
      shortDescription: "Soft macaroni mixed with scrambled eggs",
      description: "Tender macaroni pasta tossed with fluffy scrambled eggs and seasoned with herbs and spices for a simple yet satisfying meal.",
      image: "/attached_assets/Egg Fried Noodles.png", // Using noodle image as placeholder
      categoryId: macaroni.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Veg Fried Macaroni",
      price: 100,
      shortDescription: "Stir-fried macaroni with vegetables",
      description: "Macaroni pasta stir-fried with a colorful medley of fresh vegetables and our special house sauce for a flavorful vegetarian option.",
      image: "/attached_assets/Veg Fried Noodles.png", // Using veg noodles image as placeholder
      categoryId: macaroni.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "18 mins"
    });

    await this.createMenuItem({
      name: "Egg Fried Macaroni",
      price: 150,
      shortDescription: "Macaroni sautéed with eggs and spices",
      description: "A hearty dish of macaroni pasta stir-fried with scrambled eggs, vegetables, and a blend of aromatic spices for a satisfying meal.",
      image: "/attached_assets/Egg Fried Noodles.png", // Using egg noodles image as placeholder
      categoryId: macaroni.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    // Chowmein
    await this.createMenuItem({
      name: "Veg Fried Chowmein",
      price: 60,
      shortDescription: "Stir-fried noodles with fresh vegetables",
      description: "A popular street food featuring stir-fried noodles with a colorful mix of crunchy vegetables and our special sauce blend.",
      image: "/attached_assets/Veg Chowmein.png",
      categoryId: chowmein.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Egg Fried Chowmein",
      price: 90,
      shortDescription: "Classic chowmein with scrambled eggs",
      description: "Stir-fried chowmein noodles tossed with fluffy scrambled eggs, vegetables, and our house seasoning for a flavorful meal.",
      image: "/attached_assets/Veg Chowmein.png", // Using veg chowmein image as placeholder
      categoryId: chowmein.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "18 mins"
    });

    await this.createMenuItem({
      name: "Chicken Fried Chowmein",
      price: 120,
      shortDescription: "Chowmein loaded with tender chicken pieces",
      description: "A hearty plate of stir-fried chowmein noodles combined with juicy chicken pieces, fresh vegetables, and our signature sauce.",
      image: "/attached_assets/Veg Chowmein.png", // Using veg chowmein image as placeholder
      categoryId: chowmein.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    // Thukpa
    await this.createMenuItem({
      name: "Plain Thukpa",
      price: 120,
      shortDescription: "A Tibetan-style noodle soup with mild spices",
      description: "A hearty Tibetan-style soup with thick noodles, vegetables, and mild spices in a flavorful broth, perfect for cold days.",
      image: "/attached_assets/Veg Thuppa.png",
      categoryId: thukpa.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Chicken Thukpa",
      price: 200,
      shortDescription: "Hearty noodle soup with shredded chicken",
      description: "A warm and filling Tibetan-style soup featuring handmade noodles in a rich broth with tender shredded chicken and vegetables.",
      image: "/attached_assets/Veg Thuppa.png", // Using veg thukpa image as placeholder
      categoryId: thukpa.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Egg Thukpa",
      price: 160,
      shortDescription: "Traditional thukpa with eggs",
      description: "A comforting noodle soup combining thick noodles in a flavorful broth with soft-boiled eggs, creating a protein-rich and satisfying meal.",
      image: "/attached_assets/Veg Thuppa.png", // Using veg thukpa image as placeholder
      categoryId: thukpa.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "22 mins"
    });

    // Mo:Mo
    await this.createMenuItem({
      name: "Steamed Veg Mo:Mo",
      price: 100,
      shortDescription: "Healthy steamed dumplings with vegetable stuffing",
      description: "Delicate dumplings filled with a flavorful mix of finely chopped vegetables and spices, steamed to perfection and served with tomato-based dipping sauce.",
      image: "/attached_assets/Steamed Veg MoMO.png",
      categoryId: momo.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Steamed Chicken Mo:Mo",
      price: 130,
      shortDescription: "Classic dumplings filled with minced chicken",
      description: "Traditional Nepali dumplings filled with minced chicken, herbs and spices, steamed until tender and served with a spicy tomato sauce.",
      image: "/attached_assets/Steamed Veg MoMO.png", // Using veg momo image as placeholder
      categoryId: momo.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Fried Chicken Mo:Mo",
      price: 170,
      shortDescription: "Crispy deep-fried chicken dumplings",
      description: "Our popular chicken momos deep-fried to golden perfection, creating a crispy exterior while maintaining a juicy filling inside.",
      image: "/attached_assets/spicy fried chilli momo.png", // Using chili momo image as placeholder
      categoryId: momo.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Mo:Mo Sadeko",
      price: 200,
      shortDescription: "Spicy and tangy marinated Mo:Mo",
      description: "Steamed momos tossed with a tangy mix of spices, chili, garlic, and fresh herbs to create a flavorful and zesty dish.",
      image: "/attached_assets/spicy fried chilli momo.png", // Using chili momo image as placeholder
      categoryId: momo.id,
      isFeatured: false,
      spiceLevel: "Hot",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Chili Fried Mo:Mo",
      price: 200,
      shortDescription: "Spicy stir-fried Mo:Mo with chili sauce",
      description: "Steamed momos tossed in a fiery chili sauce with bell peppers and onions, creating a perfect blend of heat and flavor in every bite.",
      image: "/attached_assets/spicy fried chilli momo.png",
      categoryId: momo.id,
      isFeatured: true,
      spiceLevel: "Hot",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Jhol Mo:Mo",
      price: 175,
      shortDescription: "Mo:Mo served in a warm and flavorful soup",
      description: "Steamed momos served in a hot, aromatic broth flavored with spices, herbs, and a touch of garlic and sesame, perfect for cold days.",
      image: "/attached_assets/Jhol momo.png",
      categoryId: momo.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Combo Mo:Mo Set",
      price: 300,
      shortDescription: "A platter of assorted Mo:Mo varieties",
      description: "A delightful sampling of different momo varieties including steamed, fried, and jhol momos, perfect for sharing or trying multiple flavors.",
      image: "/attached_assets/Steamed Veg MoMO.png", // Using veg momo image as placeholder
      categoryId: momo.id,
      isFeatured: true,
      spiceLevel: "Varies",
      prepTime: "35 mins"
    });

    // Sausage & Tofu
    await this.createMenuItem({
      name: "Chicken Sausage",
      price: 400,
      shortDescription: "Juicy grilled chicken sausages",
      description: "Premium chicken sausages grilled to juicy perfection, seasoned with herbs and served with a side of tangy dipping sauce.",
      image: "/attached_assets/Sausage fry.png",
      categoryId: sausageTofu.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Veg Sausage",
      price: 400,
      shortDescription: "Plant-based sausages with a smoky flavor",
      description: "Delicious vegetarian sausages made from a savory blend of plant proteins and spices, grilled to achieve a satisfying smoky flavor.",
      image: "/attached_assets/Onion Pakora.png", // Using pakora image as placeholder
      categoryId: sausageTofu.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Veg Tofu",
      price: 400,
      shortDescription: "Soft and protein-rich tofu",
      description: "Premium tofu prepared with herbs and spices, lightly fried to give it a golden exterior while maintaining its soft interior.",
      image: "/attached_assets/Paneer Pakora.png", // Using paneer image as placeholder
      categoryId: sausageTofu.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "18 mins"
    });

    // Fried & Sekuwa Dishes
    await this.createMenuItem({
      name: "Chicken Fry",
      price: 250,
      shortDescription: "Deep-fried crispy chicken pieces",
      description: "Tender chicken pieces marinated in Nepali spices and deep-fried until golden and crispy, served with a side of spicy tomato sauce.",
      image: "/attached_assets/Chicken fry.png",
      categoryId: friedSekuwa.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Fish Fry",
      price: 300,
      shortDescription: "Golden-fried fresh fish",
      description: "Fresh fish fillets coated in a seasoned batter and deep-fried to achieve a crispy golden exterior while keeping the fish tender and moist inside.",
      image: "/attached_assets/Fish Fry.png",
      categoryId: friedSekuwa.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Chicken Sekuwa",
      price: 350,
      shortDescription: "Spicy and smoky grilled chicken",
      description: "Traditional Nepali-style grilled chicken marinated in a blend of spices and herbs, cooked over an open flame for an authentic smoky flavor.",
      image: "/attached_assets/Chicken fry.png", // Using chicken fry image as placeholder
      categoryId: friedSekuwa.id,
      isFeatured: false,
      spiceLevel: "Hot",
      prepTime: "30 mins"
    });

    // Non-Veg Khaja Set
    await this.createMenuItem({
      name: "Fish Khaja Set",
      price: 400,
      shortDescription: "A traditional platter with fried fish and sides",
      description: "A complete meal featuring crispy fried fish served with beaten rice, spicy potato, pickles, and seasonal vegetables for a satisfying Nepali experience.",
      image: "/attached_assets/Fish Fry.png", // Using fish fry image as placeholder
      categoryId: nonVegKhaja.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Chicken Khaja Set",
      price: 350,
      shortDescription: "A full meal set with chicken and Nepali accompaniments",
      description: "A hearty platter with grilled or fried chicken accompanied by beaten rice, alu tama, pickles, and green vegetables - a true taste of Nepal.",
      image: "/attached_assets/Chicken fry.png", // Using chicken fry image as placeholder
      categoryId: nonVegKhaja.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Combo Chicken Khaja Set",
      price: 550,
      shortDescription: "A mix of chicken, sausage, and gravy",
      description: "An elaborate Nepali platter featuring chicken, sausage, and rich gravy, served with beaten rice, achar, and seasonal vegetables.",
      image: "/attached_assets/Chicken fry.png", // Using chicken fry image as placeholder
      categoryId: nonVegKhaja.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "35 mins"
    });

    // Veg Khaja Set
    await this.createMenuItem({
      name: "Veg Khaja Set",
      price: 200,
      shortDescription: "A delicious vegetarian snack platter",
      description: "A vegetarian delight featuring beaten rice, spicy potato, stir-fried vegetables, pickles, and seasonal greens - perfect for a light meal.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: vegKhaja.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Combo Veg Khaja Set",
      price: 450,
      shortDescription: "A combination of veg dishes with paneer",
      description: "An extensive vegetarian platter with paneer, mixed vegetables, beaten rice, pickles, and local delicacies for a complete Nepali dining experience.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: vegKhaja.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    // Khana Set
    await this.createMenuItem({
      name: "Veg Khana Set",
      price: 250,
      shortDescription: "A full Nepali vegetarian meal",
      description: "The traditional Nepali meal featuring steamed rice, lentil soup (dal), mixed vegetable curry, spinach, pickle, and yogurt.",
      image: "/attached_assets/Veg khana set.png",
      categoryId: khanaSet.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Chicken Khana Set",
      price: 400,
      shortDescription: "Rice with chicken curry and sides",
      description: "A hearty meal with steamed rice, chicken curry, lentil soup, seasonal vegetables, pickle, and yogurt - a complete Nepali dining experience.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: khanaSet.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Fish Khana Set",
      price: 500,
      shortDescription: "A complete meal with fish and accompaniments",
      description: "Steamed rice served with freshly prepared fish curry, lentil soup, sautéed vegetables, pickle, and yogurt for a nutritious and flavorful meal.",
      image: "/attached_assets/Fish Fry.png", // Using fish fry image as placeholder
      categoryId: khanaSet.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Mutton Khana Set",
      price: 550,
      shortDescription: "Hearty meal with tender mutton curry",
      description: "A premium Nepali thali featuring rice, rich mutton curry slow-cooked with traditional spices, lentil soup, vegetables, and accompaniments.",
      image: "/attached_assets/Mutton Khana set.png",
      categoryId: khanaSet.id,
      isFeatured: true,
      spiceLevel: "Hot",
      prepTime: "35 mins"
    });

    // Fried Rice
    await this.createMenuItem({
      name: "Fried Jeera Rice",
      price: 100,
      shortDescription: "Aromatic cumin-flavored rice",
      description: "Basmati rice stir-fried with cumin seeds, giving it a distinctive aroma and flavor, perfect as a side dish or light meal.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: friedRice.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Veg Fried Rice",
      price: 150,
      shortDescription: "Fried rice loaded with vegetables",
      description: "Flavorful rice stir-fried with a colorful medley of fresh vegetables and aromatic spices, a perfect quick meal or side dish.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: friedRice.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "18 mins"
    });

    await this.createMenuItem({
      name: "Egg Fried Rice",
      price: 200,
      shortDescription: "Fried rice mixed with egg",
      description: "Savory rice stir-fried with scrambled eggs, vegetables, and our special sauce blend for a protein-rich and satisfying dish.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: friedRice.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Chicken Fried Rice",
      price: 250,
      shortDescription: "Chicken-infused stir-fried rice",
      description: "A hearty dish of rice stir-fried with tender chicken pieces, vegetables, and our special blend of seasonings.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: friedRice.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Mixed Fried Rice",
      price: 250,
      shortDescription: "Fried rice with eggs and chicken",
      description: "The ultimate fried rice combining both chicken and eggs with vegetables, creating a complete and flavorful meal in a single dish.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: friedRice.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    // Salads & Snacks
    await this.createMenuItem({
      name: "Masala Papad",
      price: 50,
      shortDescription: "Spiced and crunchy papadum",
      description: "Crispy papadum topped with a tangy mix of finely chopped onions, tomatoes, and spices, a perfect appetizer or accompaniment.",
      image: "/attached_assets/Onion Pakora.png", // Using pakora image as placeholder
      categoryId: saladsSnacks.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "8 mins"
    });

    await this.createMenuItem({
      name: "Green Salad",
      price: 150,
      shortDescription: "Fresh and healthy mixed greens",
      description: "A refreshing mix of seasonal greens, cucumbers, tomatoes, carrots, and onions, lightly dressed with lemon juice and herbs.",
      image: "/attached_assets/Veg khana set.png", // Using veg khana image as placeholder
      categoryId: saladsSnacks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "10 mins"
    });

    await this.createMenuItem({
      name: "Fruit Salad",
      price: 350,
      shortDescription: "A colorful mix of fresh fruits",
      description: "A delightful medley of seasonal fruits, freshly cut and served with a honey yogurt dressing or as pure fresh fruit.",
      image: "/attached_assets/Rice Pudding.png", // Using rice pudding image as placeholder
      categoryId: saladsSnacks.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "15 mins"
    });

    // Desserts
    await this.createMenuItem({
      name: "Rice Pudding",
      price: 250,
      shortDescription: "Creamy and sweet Nepali-style kheer",
      description: "A rich and creamy traditional dessert made by slowly cooking rice with milk, sugar, and cardamom, garnished with nuts and raisins.",
      image: "/attached_assets/Rice Pudding.png",
      categoryId: desserts.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "45 mins"
    });

    await this.createMenuItem({
      name: "Ice Cream",
      price: 80,
      shortDescription: "Cool and creamy ice cream",
      description: "Premium ice cream in various flavors, the perfect sweet treat to end your meal on a refreshing note.",
      image: "/attached_assets/Rice Pudding.png", // Using rice pudding image as placeholder
      categoryId: desserts.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    // Cigarettes
    await this.createMenuItem({
      name: "Bijuli",
      price: 10,
      shortDescription: "Affordable local cigarette (3 pieces)",
      description: "A budget-friendly local cigarette option available in a pack of three pieces.",
      image: "/attached_assets/Black Coffee.png", // Using placeholder image
      categoryId: cigarettes.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Khukuri",
      price: 10,
      shortDescription: "Strong and bold single-stick cigarette",
      description: "A locally popular single cigarette known for its strong flavor profile.",
      image: "/attached_assets/Black Coffee.png", // Using placeholder image
      categoryId: cigarettes.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Sikhar-Ice (Blue)",
      price: 20,
      shortDescription: "A menthol-infused smooth cigarette",
      description: "A premium cigarette with a cooling menthol flavor for a smooth smoking experience.",
      image: "/attached_assets/Black Coffee.png", // Using placeholder image
      categoryId: cigarettes.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });
    
    // Soft Drinks
    await this.createMenuItem({
      name: "Coke",
      price: 60,
      shortDescription: "Classic carbonated cola for a refreshing fizz",
      description: "The world-famous cola served ice-cold for that perfect refreshing fizz to complement your meal.",
      image: "/attached_assets/Black Coffee.png", // Using coffee image as placeholder
      categoryId: softDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Fanta",
      price: 60,
      shortDescription: "Sweet and citrusy orange-flavored soda",
      description: "A bubbly orange-flavored soda with a sweet, fruity taste that pairs well with any meal.",
      image: "/attached_assets/Black Coffee.png", // Using coffee image as placeholder
      categoryId: softDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Sprite",
      price: 60,
      shortDescription: "Lemon-lime soda with a crisp and tangy taste",
      description: "A refreshing lemon-lime flavored soda that's crisp, clean, and caffeine-free.",
      image: "/attached_assets/Black Coffee.png", // Using coffee image as placeholder
      categoryId: softDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Mix Fruit Juice",
      price: 100,
      shortDescription: "A blend of fresh seasonal fruits for a nutritious drink",
      description: "A vitamin-packed juice made from a blend of seasonal fruits, freshly squeezed and served chilled.",
      image: "/attached_assets/Black Coffee.png", // Using coffee image as placeholder
      categoryId: softDrinks.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Red Bull",
      price: 150,
      shortDescription: "Energy drink to keep you active and refreshed",
      description: "The world-famous energy drink that gives you wings when you need an extra boost of energy.",
      image: "/attached_assets/Black Coffee.png", // Using coffee image as placeholder
      categoryId: softDrinks.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "1 min"
    });

    await this.createMenuItem({
      name: "Jhol Mo:Mo",
      price: 175,
      shortDescription: "Mo:Mo served in a warm and flavorful soup",
      description: "Traditional momos served in a light, flavorful broth seasoned with timur (Szechuan pepper), sesame, and spices for a unique taste experience.",
      image: "/attached_assets/Jhol momo.png",
      categoryId: momo.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    // Fried & Sekuwa
    await this.createMenuItem({
      name: "Chicken Fry",
      price: 250,
      shortDescription: "Deep-fried crispy chicken pieces",
      description: "Tender chicken pieces marinated in special spices and deep-fried to crispy perfection, served with mint chutney and sliced onions.",
      image: "/attached_assets/Chicken fry.png",
      categoryId: friedSekuwa.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Fish Fry",
      price: 300,
      shortDescription: "Golden-fried fresh fish",
      description: "Fresh fish fillets coated in a seasoned batter and deep-fried until golden and crispy on the outside while remaining tender inside.",
      image: "/attached_assets/Fish Fry.png",
      categoryId: friedSekuwa.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Sausage Fry",
      price: 250,
      shortDescription: "Pan-fried sausages with herbs",
      description: "Juicy sausages pan-fried to perfection with aromatic herbs, creating a savory dish with a slightly crispy exterior.",
      image: "/attached_assets/Sausage fry.png",
      categoryId: friedSekuwa.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    // Khana Set
    await this.createMenuItem({
      name: "Veg Khana Set",
      price: 250,
      shortDescription: "A full Nepali vegetarian meal",
      description: "A complete traditional Nepali meal featuring steamed rice, lentil soup (dal), seasonal vegetable curry, pickles (achar), and yogurt (dahi).",
      image: "/attached_assets/Veg khana set.png",
      categoryId: khanaSet.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Mutton Khana Set",
      price: 550,
      shortDescription: "Hearty meal with tender mutton curry",
      description: "A hearty Nepali meal centered around a rich, slow-cooked mutton curry, served with steamed rice, lentil soup, pickles, and seasonal vegetables.",
      image: "/attached_assets/Mutton Khana set.png",
      categoryId: khanaSet.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "35 mins"
    });

    // Desserts
    await this.createMenuItem({
      name: "Rice Pudding",
      price: 250,
      shortDescription: "Creamy and sweet Nepali-style kheer",
      description: "A traditional Nepali dessert made with rice cooked in milk, sugar, and cardamom, garnished with nuts for a delightful sweet ending to your meal.",
      image: "/attached_assets/Rice Pudding.png",
      categoryId: desserts.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "45 mins"
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Category methods
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }
  
  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }
  
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.categoryCurrentId++;
    const category: Category = { 
      ...insertCategory, 
      id,
      description: insertCategory.description || null 
    };
    this.categories.set(id, category);
    return category;
  }
  
  // Menu Item methods
  async getAllMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }
  
  async getMenuItemById(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }
  
  async getMenuItemsByCategory(categoryId: number): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.categoryId === categoryId
    );
  }
  
  async getFeaturedMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.isFeatured
    );
  }
  
  async createMenuItem(insertMenuItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.menuItemCurrentId++;
    const menuItem: MenuItem = { 
      ...insertMenuItem, 
      id,
      isFeatured: insertMenuItem.isFeatured || false,
      spiceLevel: insertMenuItem.spiceLevel || null,
      prepTime: insertMenuItem.prepTime || null
    };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }
}

export const storage = new MemStorage();
