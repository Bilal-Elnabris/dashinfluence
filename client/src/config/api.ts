// API Configuration
const isDevelopment = import.meta.env.DEV;

// API Base URL - Use Cloudflare Worker for production, localhost for development
export const API_BASE_URL = isDevelopment
  ? "http://localhost:3000"
  : "https://dashinfluence-forms.dashinfluence.workers.dev";

// API Endpoints
export const API_ENDPOINTS = {
  contact: `${API_BASE_URL}/api/contact`,
  earlyAccess: `${API_BASE_URL}/api/early-access`,
  businessIntake: `${API_BASE_URL}/api/business-intake`,
} as const;

// Helper function to get API URL
export const getApiUrl = (endpoint: string) => {
  return `${API_BASE_URL}${endpoint}`;
};
