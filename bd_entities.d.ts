declare global {
  interface ArchivedStudyUnits {
    study_unit_id: number;
    user_id: string;
  }

  interface Assignment {
    id: number;
    study_unit_id: number;
    teacher_id: number;
  }

  interface AssignmentStudyGroups {
    study_group_id: number;
    assignment_id: number;
  }

  interface AssignmentSubjects {
    assignment_id: number;
    subject_id: number;
  }

  interface AssignmentTypes {
    assignment_id: number;
    lesson_type_id: number;
  }

  interface Classroom {
    id: number;
    capacity: number;
    number: string;
    study_unit_id: number;
  }

  interface ClassroomAvailability {
    id: number;
    day_index: number;
    lesson_index: number;
    type: string;
    classroom_id: number;
  }

  interface ClassroomAvailabilityGroups {
    study_group_id: number;
    classroom_availability_id: number;
  }

  interface ClassroomEquipment {
    classroom_id: number;
    equipment_unit_id: number;
    count: number;
    study_unit_id: number;
  }

  interface ElectiveCourseGroup {
    id: number;
  }

  interface ElectiveCourseGroupSubjects {
    elective_course_group_id: number;
    subject_id: number;
  }

  interface EquipmentUnit {
    id: number;
    name: any; // UNKNOWN in DDL
    study_unit_id: number;
  }

  interface LessonType {
    id: number;
    name: string;
  }

  interface LessonTypeAmount {
    subject_id: number;
    lesson_type_id: number;
    amount: number;
  }

  interface PinnedStudyUnits {
    user_id: string;
    study_unit_id: number;
  }

  interface Schedule {
    id: number;
    created_at: Date;
    variant: string;
    study_unit_id: number;
  }

  interface StudyDirection {
    id: number;
    name: string;
    study_unit_id: number;
  }

  interface StudyGroup {
    id: number;
    name: string;
    study_unit_id: number;
    study_direction_id: number;
  }

  interface StudyUnit {
    id: number;
    name: string;
    type: string;
    start_date: Date;
    end_date: Date;
    owner_id: string;
    lesson_duration: number;
    max_lesson_amount: number;
    lesson_start_time: number;
    zero_lesson: number;
    created_at: Date | null;
  }

  interface Subject {
    id: number;
    name: string;
    elective_course: boolean;
    study_unit_id: number;
  }

  interface SubjectGroups {
    study_group_id: number;
    subject_id: number;
  }

  interface Teacher {
    id: number;
    first_name: string;
    last_name: string;
    patronymic: string | null;
    commentary: string | null;
    study_unit_id: number;
  }

  interface User {
    id: string;
    login: string;
    password: string;
  }

  interface Wish {
    id: number;
    teacher_id: number;
    study_unit_id: number;
    condition: string;
  }
}

export {};
