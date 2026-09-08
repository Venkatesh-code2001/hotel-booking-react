export interface Room {
  id: string;
  hotelId: string;
  title: string;
  price: number;
  maxPeople: number;
  desc: string;
  roomNumbers: number[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  distance: string;
  title: string;
  desc: string;
  rating: number;
  ratingsCount: string;
  cheapestPrice: number;
  featured: boolean;
  image: string;
  photos: string[];
  rooms?: Room[];
  createdAt?: string;
  updatedAt?: string;
}

export interface DateRangeSelection {
  startDate: Date;
  endDate: Date;
  key: string;
}

export interface SearchOptions {
  adult: number;
  children: number;
  room: number;
}

export interface SearchState {
  destination: string;
  date: DateRangeSelection[];
  options: SearchOptions;
}

export interface Booking {
  id: string;
  userId?: string;
  hotelId: string;
  roomId?: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  roomCount: number;
  daysCount: number;
  status: string;
  hotel?: Hotel;
  room?: Room;
}

export interface CityCount {
  city: string;
  count: number;
}
