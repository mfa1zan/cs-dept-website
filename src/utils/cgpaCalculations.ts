export interface Course {
  id: string;
  name: string;
  creditHours: number;
  obtainedMarks?: number;
  totalMarks?: number;
  percentage?: number;
  grade?: string;
  gradePoints?: number;
}

export interface Semester {
  id: string;
  name: string;
  courses: Course[];
  sgpa?: number;
}

export interface GradingSystem {
  [grade: string]: number;
}

export interface GradeScale {
  minPercentage: number;
  gradePoint: number;
  letterGrade: string;
}

export const gradeScale: GradeScale[] = [
  { minPercentage: 80, gradePoint: 4.00, letterGrade: 'A' },
  { minPercentage: 79, gradePoint: 3.94, letterGrade: 'B' },
  { minPercentage: 78, gradePoint: 3.87, letterGrade: 'B' },
  { minPercentage: 77, gradePoint: 3.80, letterGrade: 'B' },
  { minPercentage: 76, gradePoint: 3.73, letterGrade: 'B' },
  { minPercentage: 75, gradePoint: 3.67, letterGrade: 'B' },
  { minPercentage: 74, gradePoint: 3.60, letterGrade: 'B' },
  { minPercentage: 73, gradePoint: 3.53, letterGrade: 'B' },
  { minPercentage: 72, gradePoint: 3.47, letterGrade: 'B' },
  { minPercentage: 71, gradePoint: 3.40, letterGrade: 'B' },
  { minPercentage: 70, gradePoint: 3.33, letterGrade: 'B' },
  { minPercentage: 69, gradePoint: 3.27, letterGrade: 'B' },
  { minPercentage: 68, gradePoint: 3.20, letterGrade: 'B' },
  { minPercentage: 67, gradePoint: 3.13, letterGrade: 'B' },
  { minPercentage: 66, gradePoint: 3.07, letterGrade: 'B' },
  { minPercentage: 65, gradePoint: 3.00, letterGrade: 'B' },
  { minPercentage: 64, gradePoint: 2.93, letterGrade: 'C' },
  { minPercentage: 63, gradePoint: 2.87, letterGrade: 'C' },
  { minPercentage: 62, gradePoint: 2.76, letterGrade: 'C' },
  { minPercentage: 61, gradePoint: 2.70, letterGrade: 'C' },
  { minPercentage: 60, gradePoint: 2.64, letterGrade: 'C' },
  { minPercentage: 59, gradePoint: 2.57, letterGrade: 'C' },
  { minPercentage: 58, gradePoint: 2.50, letterGrade: 'C' },
  { minPercentage: 57, gradePoint: 2.43, letterGrade: 'C' },
  { minPercentage: 56, gradePoint: 2.36, letterGrade: 'C' },
  { minPercentage: 55, gradePoint: 2.30, letterGrade: 'C' },
  { minPercentage: 54, gradePoint: 2.24, letterGrade: 'C' },
  { minPercentage: 53, gradePoint: 2.18, letterGrade: 'C' },
  { minPercentage: 52, gradePoint: 2.12, letterGrade: 'C' },
  { minPercentage: 51, gradePoint: 2.06, letterGrade: 'C' },
  { minPercentage: 50, gradePoint: 2.00, letterGrade: 'C' },
  { minPercentage: 49, gradePoint: 1.90, letterGrade: 'D' },
  { minPercentage: 48, gradePoint: 1.80, letterGrade: 'D' },
  { minPercentage: 47, gradePoint: 1.70, letterGrade: 'D' },
  { minPercentage: 46, gradePoint: 1.60, letterGrade: 'D' },
  { minPercentage: 45, gradePoint: 1.50, letterGrade: 'D' },
  { minPercentage: 44, gradePoint: 1.40, letterGrade: 'D' },
  { minPercentage: 43, gradePoint: 1.30, letterGrade: 'D' },
  { minPercentage: 42, gradePoint: 1.20, letterGrade: 'D' },
  { minPercentage: 41, gradePoint: 1.10, letterGrade: 'D' },
  { minPercentage: 40, gradePoint: 1.00, letterGrade: 'D' },
  { minPercentage: 0, gradePoint: 0.00, letterGrade: 'F' }
];

export const defaultGradingSystem: GradingSystem = {
  'A': 4.0,
  'B': 3.0,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0,
};

export function getGradeFromMarks(percentage: number): { grade: string; gradePoint: number } {
  for (const scale of gradeScale) {
    if (percentage >= scale.minPercentage) {
      return {
        grade: scale.letterGrade,
        gradePoint: scale.gradePoint
      };
    }
  }
  return { grade: 'F', gradePoint: 0.00 };
}

export function calculatePercentage(obtainedMarks: number, totalMarks: number): number {
  if (totalMarks <= 0) return 0;
  return Math.round((obtainedMarks / totalMarks) * 100);
}

export function calculateCourseGradePoints(
  creditHours: number,
  gradePoint: number
): number {
  return creditHours * gradePoint;
}

export function calculateSGPA(courses: Course[]): number | null {
  let totalCreditHours = 0;
  let totalGradePoints = 0;

  for (const course of courses) {
    if (course.obtainedMarks !== undefined && course.totalMarks !== undefined && course.totalMarks > 0) {
      const percentage = calculatePercentage(course.obtainedMarks, course.totalMarks);
      const { gradePoint } = getGradeFromMarks(percentage);

      totalCreditHours += course.creditHours;
      totalGradePoints += course.creditHours * gradePoint;
    }
  }

  if (totalCreditHours === 0) {
    return null;
  }

  return totalGradePoints / totalCreditHours;
}

export function calculateCGPA(semesters: Semester[]): number | null {
  let totalCreditHours = 0;
  let totalGradePoints = 0;

  for (const semester of semesters) {
    for (const course of semester.courses) {
      if (course.obtainedMarks !== undefined && course.totalMarks !== undefined && course.totalMarks > 0) {
        const percentage = calculatePercentage(course.obtainedMarks, course.totalMarks);
        const { gradePoint } = getGradeFromMarks(percentage);

        totalCreditHours += course.creditHours;
        totalGradePoints += course.creditHours * gradePoint;
      }
    }
  }

  if (totalCreditHours === 0) {
    return null;
  }

  return totalGradePoints / totalCreditHours;
}

export function predictRequiredGPA(
  currentCGPA: number,
  completedCreditHours: number,
  targetCGPA: number,
  remainingCreditHours: number
): number | null {
  if (remainingCreditHours <= 0) {
    return null;
  }

  const currentTotalPoints = currentCGPA * completedCreditHours;
  const targetTotalPoints = targetCGPA * (completedCreditHours + remainingCreditHours);
  const requiredPoints = targetTotalPoints - currentTotalPoints;
  const requiredGPA = requiredPoints / remainingCreditHours;

  if (requiredGPA > 4.0) {
    return null;
  }

  return Math.max(0, requiredGPA);
}

export function getGradeFromGPA(gpa: number): string {
  if (gpa >= 3.7) return 'A';
  if (gpa >= 3.3) return 'A-';
  if (gpa >= 3.0) return 'B+';
  if (gpa >= 2.7) return 'B';
  if (gpa >= 2.3) return 'B-';
  if (gpa >= 2.0) return 'C+';
  if (gpa >= 1.7) return 'C';
  if (gpa >= 1.3) return 'C-';
  if (gpa >= 1.0) return 'D';
  return 'F';
}

export function getGPAClassification(cgpa: number): string {
  if (cgpa >= 3.5) return 'Summa Cum Laude';
  if (cgpa >= 3.2) return 'Magna Cum Laude';
  if (cgpa >= 2.8) return 'Cum Laude';
  if (cgpa >= 2.0) return 'Good Standing';
  return 'Academic Probation';
}

export interface StoredData {
  semesters: Semester[];
  lastUpdated: string;
  gradingSystem: GradingSystem;
}

export function saveToLocalStorage(data: StoredData): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('cgpaCalculatorData', JSON.stringify(data));
  }
}

export function loadFromLocalStorage(): StoredData | null {
  if (typeof window !== 'undefined' && window.localStorage) {
    const stored = localStorage.getItem('cgpaCalculatorData');
    if (stored) {
      try {
        return JSON.parse(stored) as StoredData;
      } catch (e) {
        console.error('Failed to parse stored data:', e);
      }
    }
  }
  return null;
}

export function clearLocalStorage(): void {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('cgpaCalculatorData');
  }
}

export function exportToJSON(data: StoredData): string {
  return JSON.stringify(data, null, 2);
}

export function importFromJSON(jsonString: string): StoredData | null {
  try {
    return JSON.parse(jsonString) as StoredData;
  } catch (e) {
    console.error('Failed to parse JSON:', e);
    return null;
  }
}