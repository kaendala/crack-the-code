export interface Path {
  id: number;
  name: string;
  slug: string;
  age_range_min_max: string;
  call_out: string;
  number_of_courses: number;
  duration: string;
  amount_usd: string;
  amount_pen: string;
  amount_mxn: string;
  amount_col: string;
  main_color: string;
  has_discount: boolean;
  discount_percentage: string;
  amount_after_discount_usd: string;
  amount_after_discount_pen: string;
  amount_after_discount_mxn: string;
  amount_after_discount_col: string;
  secondary_color: string;
  gradient_colors: string[];
  icon: string;
  description: string;
  order: number;
  courses: Course[];
  level: number;
  has_seo_noindex: boolean;
}

interface Course {
  groups: any[];
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  order_in_learning_path: number;
  amount_pen: string;
  amount_usd: string;
  amount_mxn: string;
  amount_col: string;
  has_discount: boolean;
  discount_percentage: string;
  amount_after_discount_usd: string;
  amount_after_discount_pen: string;
  amount_after_discount_mxn: string;
  amount_after_discount_col: string;
  has_test_month: boolean;
  test_month_amount: string;
  test_month_amount_usd: string;
  test_month_amount_mxn: string;
  test_month_amount_col: string;
}
