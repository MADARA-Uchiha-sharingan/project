export interface Category {
  id: number;
  name: string;
  description?: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  categoryId: number;
  isFeatured?: boolean;
  spiceLevel?: string;
  prepTime?: string;
}
