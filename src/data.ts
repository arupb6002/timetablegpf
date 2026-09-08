export type Branch = 'ME' | 'CV' | 'BM';

export interface WorkingDay {
  date: string;
  working_day: string | null;
  status: 'working' | 'holiday';
  holiday_reason?: string;
}

export interface ClassSession {
  working_day: string;
  branch: Branch;
  start_time: string;
  end_time: string;
  subject: string;
  type?: string;
}

export const workingDays: WorkingDay[] = [
  {
    "date": "2026-08-05",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-06",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-07",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-08",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "2nd Saturday"
  },
  {
    "date": "2026-08-09",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-08-10",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-11",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-12",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-13",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-14",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-15",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Independence Day"
  },
  {
    "date": "2026-08-16",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-08-17",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-18",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-19",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-20",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-21",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-22",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "4th Saturday"
  },
  {
    "date": "2026-08-23",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-08-24",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-25",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-26",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-27",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-28",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-29",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-08-30",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-08-31",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-01",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Tirubhav Tithi of Sri Sri Madhabdeva"
  },
  {
    "date": "2026-09-02",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-03",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-04",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Janmastomi"
  },
  {
    "date": "2026-09-05",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-06",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-09-07",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-08",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-09",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-10",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-11",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-12",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "2nd Saturday / Tirubhav Tithi of Srimanta Sankardeva"
  },
  {
    "date": "2026-09-13",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-09-14",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-15",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-16",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-17",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-18",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-19",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-20",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-09-21",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Janmotsav of Srimanta Sankardeva"
  },
  {
    "date": "2026-09-22",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Karam Puja"
  },
  {
    "date": "2026-09-23",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-24",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-25",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-26",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "4th Saturday"
  },
  {
    "date": "2026-09-27",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-09-28",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-29",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-09-30",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-01",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-02",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Birthday of Mahatma Gandhi"
  },
  {
    "date": "2026-10-03",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-04",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-10-05",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-06",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-07",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-08",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-09",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-10",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "2nd Saturday"
  },
  {
    "date": "2026-10-11",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-10-12",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-13",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-14",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-15",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-16",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-17",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-18",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday / Kati Bihu & Durga Puja"
  },
  {
    "date": "2026-10-19",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Durga Puja & Vijaya Dashomi"
  },
  {
    "date": "2026-10-20",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Durga Puja & Vijaya Dashomi"
  },
  {
    "date": "2026-10-21",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Durga Puja & Vijaya Dashomi"
  },
  {
    "date": "2026-10-22",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-23",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-24",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "4th Saturday"
  },
  {
    "date": "2026-10-25",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday/Lakshmi Puja"
  },
  {
    "date": "2026-10-26",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-27",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-28",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-29",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-30",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-10-31",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-01",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday"
  },
  {
    "date": "2026-11-02",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-03",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-04",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-05",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-06",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-07",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-08",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday/Kali Puja & Diwali"
  },
  {
    "date": "2026-11-09",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-10",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-11",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Bhatri Dwitiya"
  },
  {
    "date": "2026-11-12",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-13",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-14",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "2nd Saturday"
  },
  {
    "date": "2026-11-15",
    "working_day": null,
    "status": "holiday",
    "holiday_reason": "Sunday/Chhath Puja"
  },
  {
    "date": "2026-11-16",
    "working_day": "6WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-17",
    "working_day": "1WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-18",
    "working_day": "2WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-19",
    "working_day": "3WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-20",
    "working_day": "4WD",
    "status": "working",
    "holiday_reason": ""
  },
  {
    "date": "2026-11-21",
    "working_day": "5WD",
    "status": "working",
    "holiday_reason": ""
  }
];

export const timetable: ClassSession[] = [
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (ML)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "MATH(T) (US)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "CHLAB(C1)/PH LAB(C2)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "CHLAB(C1)/PH LAB(C2)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "LIBRARY",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "ENG (SG)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGLAB(M1)/PHLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "1WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGLAB(M1)/PHLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "LIBRARY",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "PHLAB(B1)(GBT)/ENG LAB(B2)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "PHLAB(B1)(GBT)/ENG LAB(B2)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "PHY(GBT)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "MATH (ML)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "PHLAB(M1)/CHLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "PHLAB(M1)/CHLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "2WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "PHY(T) (GBT)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "CHLAB(B1)/ PH LAB(B2) (GBT)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "CHLAB(B1)/ PH LAB(B2) (GBT)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGLAB(C1)/PHLAB (C2)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGLAB(C1)/PHLAB (C2)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "MATH (ML)",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "3WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "MATH (ML)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "BM",
    "start_time": "15:30",
    "end_time": "16:30",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "PHY (MHB)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "PHY(GBT)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "CH LAB(M1) / ENGLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "4WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "CH LAB(M1) / ENGLAB(M2)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "PHY(GBT)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGLAB(B1)/ CH LAB(B2)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGLAB(B1)/ CH LAB(B2)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "LIBRARY",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "CHEM(T)(SM)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "PHY(T) (MHB)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "MATH(T) (ML)",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "5WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "SPORTS AND YOGA",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "CHEM(T) (SM)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "ENG(SG)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "MATH(T) (ML)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "BM",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "ENGINEERING GRAPHICS",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "MATH (ML)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "CHEM (SM)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "CHLAB(C1)/ ENG LAB(C2)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "CV",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "CHLAB(C1)/ ENG LAB(C2)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "09:00",
    "end_time": "10:00",
    "subject": "MATH (US)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "10:00",
    "end_time": "11:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "11:00",
    "end_time": "12:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "12:00",
    "end_time": "13:00",
    "subject": "WORKSHOP PRACTICE",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "13:00",
    "end_time": "13:30",
    "subject": "BREAK",
    "type": "break"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "13:30",
    "end_time": "14:30",
    "subject": "PHY(MHB)",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "14:30",
    "end_time": "15:30",
    "subject": "TUTORIAL",
    "type": "class"
  },
  {
    "working_day": "6WD",
    "branch": "ME",
    "start_time": "15:30",
    "end_time": "16:30",
    "subject": "TUTORIAL",
    "type": "class"
  }
];
