// Pool Owner (Customer)
interface PoolOwner {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "sms";
  status: "active" | "inactive" | "past_due";
  balanceCents: number;
  createdAt: Date;
}

// Pool
interface Pool {
  id: string;
  customerId: string;
  name: string; // "Main Pool", "Spa", "Guest House"
  type: "INGROUND" | "ABOVE_GROUND" | "SPA" | "INFINITY";
  surface: "PLASTER" | "PEBBLE" | "VINYL" | "FIBERGLASS" | "TILE";
  volume: number; // gallons
  isSaltwater: boolean;
  hasHeater: boolean;
  equipment: {
    pump?: string;
    filter?: string;
    heater?: string;
    saltCell?: string;
    cleaner?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  gateCode?: string;
  accessNotes?: string;
  serviceDay: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
  serviceFrequency: "WEEKLY" | "BIWEEKLY" | "MONTHLY";
  servicePriceCents: number;
  status: "active" | "inactive" | "seasonal";
}

// Service Visit
interface ServiceVisit {
  id: string;
  poolId: string;
  technicianId?: string;
  routeId?: string;
  scheduledDate: Date;
  scheduledTime?: string;
  estimatedMinutes: number;
  serviceType: "WEEKLY" | "BIWEEKLY" | "ONE_TIME" | "REPAIR" | "FILTER_CLEAN";
  status: "SCHEDULED" | "EN_ROUTE" | "IN_PROGRESS" | "COMPLETED" | "SKIPPED" | "CANCELLED";
  arrivedAt?: Date;
  completedAt?: Date;
  basePriceCents: number;
  totalCents: number;
  notes?: string;
  skipReason?: string;
}

// Service Log (Proof of Service)
interface ServiceLog {
  id: string;
  serviceVisitId: string;
  poolId: string;
  technicianId: string;

  // Water chemistry
  phLevel?: number; // 7.2-7.6 ideal
  chlorineLevel?: number; // 1-3 ppm ideal
  alkalinity?: number; // 80-120 ppm ideal
  calciumHardness?: number; // 200-400 ppm ideal
  cyanuricAcid?: number; // 30-50 ppm ideal
  saltLevel?: number; // 2700-3400 ppm for salt pools
  waterTemp?: number; // Fahrenheit

  // Chemicals added
  chemicalsAdded: Array<{
    type: string;
    amount: number;
    unit: string;
  }>;

  // Tasks performed
  tasksCompleted: string[];

  // Photos
  beforePhotos: Array<{ url: string; caption?: string }>;
  afterPhotos: Array<{ url: string; caption?: string }>;

  // Notes
  techNotes?: string;
  issuesFound?: string;

  // Equipment status
  pumpPressure?: number;
  filterStatus?: "GOOD" | "NEEDS_CLEANING" | "NEEDS_REPAIR";

  createdAt: Date;
}

// Technician
interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string;
  photoUrl?: string;
  cpoCertified: boolean;
  isActive: boolean;
}

// Invoice
interface Invoice {
  id: string;
  customerId: string;
  reference: string; // INV-2024-001234
  periodStart: Date;
  periodEnd: Date;
  lineItems: Array<{
    description: string;
    quantity: number;
    unitCents: number;
    totalCents: number;
  }>;
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
  status: "DRAFT" | "SENT" | "VIEWED" | "PAID" | "OVERDUE" | "CANCELLED";
  dueDate: Date;
  sentAt?: Date;
  paidAt?: Date;
}

// Route
interface Route {
  id: string;
  technicianId: string;
  date: Date;
  name?: string;
  status: "PLANNED" | "IN_PROGRESS" | "COMPLETED";
  optimizedOrder: string[]; // pool IDs in order
  estimatedMiles?: number;
  estimatedMinutes?: number;
}
