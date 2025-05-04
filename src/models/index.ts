export interface AppRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export interface Rating {
  url: string;
  product_name: string;
  reviewer_name: string;
  review_title: string;
  review_date: string;
  review_rating: number;
  review_text: string;
}
