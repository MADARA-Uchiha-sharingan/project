import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories API
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Menu Items API
  app.get("/api/menu", async (req, res) => {
    try {
      const menuItems = await storage.getAllMenuItems();
      res.json(menuItems);
    } catch (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ message: "Failed to fetch menu items" });
    }
  });

  // Featured Items API
  app.get("/api/menu/featured", async (req, res) => {
    try {
      const featuredItems = await storage.getFeaturedMenuItems();
      res.json(featuredItems);
    } catch (error) {
      console.error("Error fetching featured items:", error);
      res.status(500).json({ message: "Failed to fetch featured items" });
    }
  });

  // Menu Items by Category API
  app.get("/api/menu/category/:categoryId", async (req, res) => {
    try {
      const { categoryId } = req.params;
      const categoryIdNumber = parseInt(categoryId, 10);
      const menuItems = await storage.getMenuItemsByCategory(categoryIdNumber);
      res.json(menuItems);
    } catch (error) {
      console.error("Error fetching menu items by category:", error);
      res.status(500).json({ message: "Failed to fetch menu items by category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
