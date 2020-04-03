export interface Address {
  city: string;
  state: string;
  zip_code: number;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  role: string;
  address: Address;
}

export interface Comment {
  timestamp: string;
  written_by: User;
  content: string;
}

export interface Ticket {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  status: string;
  created_by: User;
  comments: Comment[];
}
