export interface RestaurantData {
  blurhash: string;
  launch_date: string;
  location: Array<number>;
  name: string;
  online: boolean;
  popularity: number;
}

export interface SectionData {
  title: string;
  restaurants: Array<RestaurantData>;
}
