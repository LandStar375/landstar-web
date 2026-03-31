export interface Vehicle {
  id: string;
  name: string;
  type: string;
  image: string;
  seats: number;
  transmission: "Automatic" | "Manual";
  featured: boolean;
  pricePerDay: number;
  fuelType: string;
  bags: number;
  badge: string;
  bestFor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ValidationErrors {
  [field: string]: string;
}

export interface ButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "vehiclePrimary" | "vehicleSecondary";
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export interface VehicleCardProps {
  vehicle: Vehicle;
  phoneNumber: string;
}
