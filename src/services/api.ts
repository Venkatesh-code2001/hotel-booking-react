import axios from 'axios';
import { Hotel, Room, Booking, CityCount } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://srv-dafstoon74is73bgud30.onrender.com/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Hotel API calls
export const getHotels = async (params?: { city?: string; featured?: boolean; min?: number; max?: number }): Promise<Hotel[]> => {
  const response = await api.get<Hotel[]>('/hotels', { params });
  return response.data;
};

export const getHotelById = async (id: string): Promise<Hotel> => {
  const response = await api.get<Hotel>(`/hotels/${id}`);
  return response.data;
};

export const getCityCounts = async (cities: string[] = ['Hyderabad', 'Delhi', 'Mumbai']): Promise<CityCount[]> => {
  const response = await api.get<CityCount[]>(`/hotels/countByCity?cities=${cities.join(',')}`);
  return response.data;
};

// Room API calls
export const getRoomsByHotel = async (hotelId: string): Promise<Room[]> => {
  const response = await api.get<Room[]>(`/rooms/hotel/${hotelId}`);
  return response.data;
};

// Booking API calls
export const createBooking = async (bookingData: {
  userId?: string;
  hotelId: string;
  roomId?: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  roomCount: number;
  daysCount: number;
}): Promise<Booking> => {
  const response = await api.post<Booking>('/bookings', bookingData);
  return response.data;
};

export const getUserBookings = async (userId: string): Promise<Booking[]> => {
  const response = await api.get<Booking[]>(`/bookings/user/${userId}`);
  return response.data;
};

// Health Check
export const checkBackendHealth = async (): Promise<{ status: string; timestamp: string }> => {
  const response = await api.get('/health');
  return response.data;
};
