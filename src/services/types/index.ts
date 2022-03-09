export type Announcement = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type DetailsAnnouncement = {
  sold_quantity: number;
  description: string;
} & Announcement;

export type ResponseListAnnouncement = {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Announcement[];
};

export type ResponseDetailsAnnouncement = {
  author: {
    name: string;
    lastname: string;
  };
  items: DetailsAnnouncement;
};
