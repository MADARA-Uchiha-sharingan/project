export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  categoryId: string;
  isFeatured?: boolean;
  spiceLevel?: string;
  prepTime?: string;
}
