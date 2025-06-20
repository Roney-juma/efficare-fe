export interface Session {
  id: string;
  clientName: string;
  clientAvatar?: string;
  time: string;
  date: string;
  type: 'Initial Consultation' | 'Follow-up' | 'Weekly Session';
  status: 'Online' | 'In Person' | 'Pending';
  duration: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  lastSession?: string;
  status: 'Active' | 'Inactive' | 'New';
  upcomingSessions: number;
}

export interface DashboardStats {
  todaysSessions: number;
  thisWeekSessions: number;
  pendingActions: number;
  totalClients: number;
}
