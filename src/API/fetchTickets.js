import axios from 'axios';

const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data || { tickets: [], users: [] }; // Ensure consistent return type
  } catch (error) {
    console.error('Error fetching tickets:', error);
    return { tickets: [], users: [] }; // Return empty structure on error
  }
};
