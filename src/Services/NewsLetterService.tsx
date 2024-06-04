import React from 'react';

const API_URL = 'https://cafelab-service-new.onrender.com/newsletter';

export const NewsLetterService = {
  getAll: async () => {
    const response = await fetch(API_URL);
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch newsletters');
  },

  post: async (data: any) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to post newsletter');
  },
};

export default NewsLetterService;

