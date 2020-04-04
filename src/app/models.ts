export interface Address {
  city: string;
  state: string;
  zip_code: number;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  address: Address;
}

export interface UserRegistrator {
  id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  address: Address;
}

export interface Comment {
  timestamp: string;
  written_by: User;
  content: string;
  statusChangedTo: string;
  assignee: string | null;
}

export interface CreateComment {
  timestamp: string;
  written_by: string;
  content: string;
  statusChangedTo: string;
  assignee: string | null;
}

export interface Ticket {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  status: string;
  created_by: User;
  assignee: User | null;
  comments: Comment[];
}

export interface DisplayTicket {
  ticket: Ticket;
  badgeClass: string;
}

export interface CreateTicket {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  status: string;
  created_by: string;
  comments: Comment[];
}

export interface TokenResponse {
  token: string;
}

export interface LoginDetails {
  email: string;
  password: string;
}
