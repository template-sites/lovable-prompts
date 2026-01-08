// MusicLessonPro Types

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  instrument: Instrument;
  level: SkillLevel;
  lessonDuration: number; // minutes
  lessonFrequency: LessonFrequency;
  ratePerLesson: number;
  notes?: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  address?: string;
  students: Student[];
}

export interface Teacher {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  instruments: Instrument[];
  bio?: string;
  hourlyRate: number;
  color: string; // for calendar display
  createdAt: Date;
}

export interface Lesson {
  id: string;
  studentId: string;
  teacherId: string;
  date: Date;
  time: string;
  duration: number; // minutes
  instrument: Instrument;
  status: LessonStatus;
  notes?: string;
  attachments?: string[];
  createdAt: Date;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  studentId: string;
  amount: number;
  status: InvoiceStatus;
  issueDate: Date;
  dueDate: Date;
  paidDate?: Date;
  lessons: Lesson[];
  lineItems?: LineItem[];
}

export interface LineItem {
  description: string;
  amount: number;
}

export interface PracticeLog {
  id: string;
  studentId: string;
  date: Date;
  duration: number; // minutes
  piece?: string;
  notes?: string;
}

// Enums

export type Instrument =
  | 'Piano'
  | 'Guitar'
  | 'Violin'
  | 'Voice'
  | 'Drums'
  | 'Flute'
  | 'Saxophone'
  | 'Cello'
  | 'Bass'
  | 'Ukulele'
  | 'Other';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type LessonFrequency = 'Weekly' | 'Bi-weekly' | 'Monthly' | 'As needed';

export type LessonStatus = 'Scheduled' | 'Completed' | 'Cancelled' | 'No-show';

export type InvoiceStatus = 'Draft' | 'Pending' | 'Paid' | 'Overdue' | 'Void';

// Settings Types

export interface StudioSettings {
  name: string;
  address?: string;
  phone?: string;
  email: string;
  website?: string;
  instrumentsOffered: Instrument[];
}

export interface ScheduleSettings {
  availability: DayAvailability[];
  defaultLessonDuration: number;
  bufferBetweenLessons: number;
  advanceBookingLimit: number; // days
  cancellationNotice: number; // hours
}

export interface DayAvailability {
  day: string;
  available: boolean;
  startTime?: string;
  endTime?: string;
}

export interface PricingSettings {
  thirtyMinute: number;
  fortyFiveMinute: number;
  sixtyMinute: number;
  lateFee: number;
  lateFeeGracePeriod: number; // days
}
