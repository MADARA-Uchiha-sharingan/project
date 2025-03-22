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
    // Create sample categories
    const beverages = await this.createCategory({ name: "Beverages", description: "Refreshing drinks including tea, coffee, and alcoholic options" });
    const appetizers = await this.createCategory({ name: "Appetizers", description: "Light bites to start your meal" });
    const mainCourse = await this.createCategory({ name: "Main Course", description: "Hearty dishes featuring Nepali specialties" });
    const desserts = await this.createCategory({ name: "Desserts", description: "Sweet treats to finish your meal" });
    const breakfast = await this.createCategory({ name: "Breakfast", description: "Morning favorites to start your day" });

    // Beverages
    await this.createMenuItem({
      name: "Milk Tea",
      price: 120,
      shortDescription: "Traditional Nepali milk tea with spices",
      description: "Our signature milk tea is prepared with premium Ilam tea leaves, fresh milk, and a blend of aromatic spices including cardamom, cinnamon, and cloves.",
      image: "/attached_assets/Milk Tea.png",
      categoryId: beverages.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Green Tea",
      price: 100,
      shortDescription: "Refreshing green tea from Himalayan tea gardens",
      description: "Pure green tea sourced from high-altitude Himalayan tea gardens. Rich in antioxidants and offers a clean, refreshing taste.",
      image: "/attached_assets/Green Tea.png",
      categoryId: beverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "3 mins"
    });

    await this.createMenuItem({
      name: "Lemon Tea",
      price: 110,
      shortDescription: "Black tea with fresh lemon",
      description: "Refreshing black tea served with a slice of fresh lemon and optional honey. Perfect for a light refreshment.",
      image: "/attached_assets/Lemon Tea.png",
      categoryId: beverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "4 mins"
    });

    await this.createMenuItem({
      name: "Milk Coffee",
      price: 150,
      shortDescription: "Freshly brewed coffee with hot milk",
      description: "Our milk coffee is made with locally sourced Himalayan coffee beans, freshly ground and brewed to perfection, served with hot milk.",
      image: "/attached_assets/Milk Coffee.png",
      categoryId: beverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "5 mins"
    });

    await this.createMenuItem({
      name: "Plain Lassi",
      price: 180,
      shortDescription: "Traditional yogurt-based sweet drink",
      description: "Creamy yogurt blended with water, sugar, and a hint of cardamom, topped with pistachios. A refreshing traditional drink perfect for any time of day.",
      image: "/attached_assets/Plain lassi.png",
      categoryId: beverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "7 mins"
    });

    // Alcoholic Beverages
    await this.createMenuItem({
      name: "Gorkha Beer",
      price: 350,
      shortDescription: "Nepal's favorite lager beer",
      description: "Gorkha Beer is Nepal's original beer, brewed using pure Himalayan water and the finest quality malt and hops. Served chilled.",
      image: "/attached_assets/Gorkha Mini beer.png",
      categoryId: beverages.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    await this.createMenuItem({
      name: "Khukuri Rum",
      price: 450,
      shortDescription: "Premium Nepali dark rum",
      description: "Khukuri Rum XXX is a dark rum distilled and bottled in Nepal. It has a rich, smooth flavor with notes of molasses and spices.",
      image: "/attached_assets/Khukuri Rum XXX.png",
      categoryId: beverages.id,
      isFeatured: false,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    await this.createMenuItem({
      name: "Old Durbar Whiskey",
      price: 480,
      shortDescription: "Premium Nepali whiskey",
      description: "Old Durbar is Nepal's premium whiskey, known for its smooth, rich flavor with notes of oak and mild spices. Served neat or on the rocks.",
      image: "/attached_assets/Old Durbar whiskey.png",
      categoryId: beverages.id,
      isFeatured: true,
      spiceLevel: "None",
      prepTime: "2 mins"
    });

    // Appetizers
    await this.createMenuItem({
      name: "Mushroom Pakora",
      price: 220,
      shortDescription: "Crispy mushroom fritters with spices",
      description: "Fresh mushrooms coated in a spiced chickpea flour batter and deep-fried to golden perfection. Served with mint chutney and tamarind sauce.",
      image: "/attached_assets/Mushroom Pakora.png",
      categoryId: appetizers.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Onion Pakora",
      price: 200,
      shortDescription: "Crispy onion fritters with herbs",
      description: "Thinly sliced onions mixed with aromatic herbs, spices and chickpea flour, deep-fried until crispy. A perfect snack for rainy days, served with spicy tomato chutney.",
      image: "/attached_assets/Onion Pakora.png",
      categoryId: appetizers.id,
      isFeatured: false,
      spiceLevel: "Medium",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Paneer Pakora",
      price: 240,
      shortDescription: "Battered and fried cottage cheese",
      description: "Cubes of fresh cottage cheese coated in a spiced chickpea batter and deep-fried until golden brown. Served with mint-coriander chutney.",
      image: "/attached_assets/Paneer Pakora.png",
      categoryId: appetizers.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    await this.createMenuItem({
      name: "Pani Puri",
      price: 180,
      shortDescription: "Hollow crispy puris filled with spicy water",
      description: "Crispy hollow puris filled with spiced potato, chickpeas, and tangy tamarind water. A popular street food that delivers a burst of flavors in every bite.",
      image: "/attached_assets/Pani Puri.png",
      categoryId: appetizers.id,
      isFeatured: true,
      spiceLevel: "Medium to Hot",
      prepTime: "10 mins"
    });

    // Main Course
    await this.createMenuItem({
      name: "Jhol Momo",
      price: 280,
      shortDescription: "Steamed dumplings in spicy soup",
      description: "Jhol Momo is a popular Nepali dish where steamed dumplings filled with seasoned meat or vegetables are served in a spicy, tangy soup made with tomatoes, sesame, and timur (Sichuan pepper).",
      image: "/attached_assets/Jhol momo.png",
      categoryId: mainCourse.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "25 mins"
    });

    await this.createMenuItem({
      name: "Spicy Fried Chilli Momo",
      price: 320,
      shortDescription: "Pan-fried dumplings tossed in spicy sauce",
      description: "Steamed momos that are pan-fried and then tossed in a spicy chili sauce with bell peppers and onions. A fiery twist on the traditional momo.",
      image: "/attached_assets/spicy fried chilli momo.png",
      categoryId: mainCourse.id,
      isFeatured: true,
      spiceLevel: "Hot",
      prepTime: "30 mins"
    });

    await this.createMenuItem({
      name: "Noodle Soup",
      price: 250,
      shortDescription: "Clear broth with noodles and vegetables",
      description: "A comforting bowl of thin noodles in a clear vegetable broth, garnished with green onions, cilantro, and a touch of chili oil. Simple, warming, and delicious.",
      image: "/attached_assets/noodle soup.png",
      categoryId: mainCourse.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "20 mins"
    });

    await this.createMenuItem({
      name: "Mutton Khana Set",
      price: 450,
      shortDescription: "Traditional Nepali meal with mutton curry",
      description: "A complete Nepali meal featuring tender mutton curry, steamed rice, lentil soup, pickles, and seasonal vegetables. An authentic taste of Nepal's culinary heritage.",
      image: "/attached_assets/Mutton Khana set.png",
      categoryId: mainCourse.id,
      isFeatured: true,
      spiceLevel: "Medium",
      prepTime: "35 mins"
    });

    await this.createMenuItem({
      name: "Sausage Fry",
      price: 320,
      shortDescription: "Pan-fried sausages with herbs",
      description: "Juicy pork sausages pan-fried to perfection and garnished with fresh herbs. Served with a tangy dipping sauce on the side.",
      image: "/attached_assets/Sausage fry.png",
      categoryId: mainCourse.id,
      isFeatured: false,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    // Breakfast Items
    await this.createMenuItem({
      name: "Omelette with Paratha",
      price: 260,
      shortDescription: "Fluffy omelette served with flatbread",
      description: "A fluffy herb omelette made with farm-fresh eggs, served with homemade paratha (layered flatbread). Accompanied by fresh chutney and pickles.",
      image: "/attached_assets/Omelette and Paratha.png",
      categoryId: breakfast.id,
      isFeatured: true,
      spiceLevel: "Mild",
      prepTime: "15 mins"
    });

    // Desserts
    await this.createMenuItem({
      name: "Rice Pudding",
      price: 180,
      shortDescription: "Traditional sweet rice pudding with nuts",
      description: "Creamy rice pudding cooked slowly with milk, sugar, and cardamom, garnished with almonds, cashews, and pistachios. A beloved traditional dessert.",
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
