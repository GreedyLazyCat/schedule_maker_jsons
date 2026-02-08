export const teachers: Teacher[] = [
  { id: 1, first_name: "Иван", last_name: "Иванов", patronymic: "Иванович", commentary: null, study_unit_id: 1 },
  { id: 2, first_name: "Петр", last_name: "Петров", patronymic: "Петрович", commentary: null, study_unit_id: 1 },
  { id: 3, first_name: "Николай", last_name: "Николаев", patronymic: "Николаевич", commentary: null, study_unit_id: 1 },
  { id: 4, first_name: "Марк", last_name: "Кузнецов", patronymic: "Романович", commentary: null, study_unit_id: 1 },
  { id: 5, first_name: "Ермолай", last_name: "Смирнов", patronymic: "Олегович", commentary: null, study_unit_id: 1 },
];

export const studyGroups: StudyGroup[] = [
  { id: 1, name: "ИТ-11БО", study_unit_id: 1, study_direction_id: 1 },
  { id: 2, name: "ИТ-12БО", study_unit_id: 1, study_direction_id: 1 },
  { id: 3, name: "ИВТ-11БО", study_unit_id: 1, study_direction_id: 2 },
  { id: 4, name: "ИВТ-12БО", study_unit_id: 1, study_direction_id: 2 },
];


export const subjects: Subject[] = [
  { id: 1, name: "Математический Анализ (ИВТ)", elective_course: false, study_unit_id: 1 },
  { id: 2, name: "Математический Анализ (ИТ)", elective_course: false, study_unit_id: 1 },
  { id: 3, name: "Алгебра", elective_course: false, study_unit_id: 1 },
  { id: 4, name: "Дискретная математика", elective_course: false, study_unit_id: 1 },
];


export const subjectGroups: SubjectGroups[] = [
  { study_group_id: 3, subject_id: 1 },
  { study_group_id: 4, subject_id: 1 },

  { study_group_id: 1, subject_id: 2 },
  { study_group_id: 2, subject_id: 2 },

  { study_group_id: 1, subject_id: 3 },
  { study_group_id: 2, subject_id: 3 },
  { study_group_id: 3, subject_id: 3 },
  { study_group_id: 4, subject_id: 3 },

  { study_group_id: 1, subject_id: 4 },
  { study_group_id: 2, subject_id: 4 },
  { study_group_id: 3, subject_id: 4 },
  { study_group_id: 4, subject_id: 4 },
];


export const classrooms: Classroom[] = [
  { id: 1, capacity: 30, number: "201", study_unit_id: 1 },
  { id: 2, capacity: 30, number: "202", study_unit_id: 1 },
  { id: 3, capacity: 30, number: "203", study_unit_id: 1 },
  { id: 4, capacity: 30, number: "204", study_unit_id: 1 },
  { id: 5, capacity: 30, number: "205", study_unit_id: 1 },
];


export const scheduleVariant: ScheduleVariant = {
  days: [
    {
      day: Days.Mo,
      start_time: "2026-02-09T08:30:00",
      group_lessons: [
        {
          group: studyGroups[0],
          lessons: [
            {
              index: 1,
              time_start: "2026-02-09T08:30:00",
              time_end: "2026-02-09T10:00:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[1],
              classroom: classrooms[0],
              teacher: teachers[0],
            },
            {
              index: 2,
              time_start: "2026-02-09T10:10:00",
              time_end: "2026-02-09T11:40:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[2],
              classroom: classrooms[1],
              teacher: teachers[1],
            },
          ],
        },
        {
          group: studyGroups[2],
          lessons: [
            {
              index: 1,
              time_start: "2026-02-09T08:30:00",
              time_end: "2026-02-09T10:00:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[0],
              classroom: classrooms[2],
              teacher: teachers[2],
            },
            {
              index: 2,
              time_start: "2026-02-09T10:10:00",
              time_end: "2026-02-09T11:40:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[3],
              classroom: classrooms[3],
              teacher: teachers[3],
            },
          ],
        },
      ],
    },
    {
      day: Days.We,
      start_time: "2026-02-11T08:30:00",
      group_lessons: [
        {
          group: studyGroups[1],
          lessons: [
            {
              index: 1,
              time_start: "2026-02-11T08:30:00",
              time_end: "2026-02-11T10:00:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[1],
              classroom: classrooms[4],
              teacher: teachers[0],
            },
            {
              index: 2,
              time_start: "2026-02-11T10:10:00",
              time_end: "2026-02-11T11:40:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[2],
              classroom: classrooms[0],
              teacher: teachers[4],
            },
          ],
        },
        {
          group: studyGroups[3],
          lessons: [
            {
              index: 1,
              time_start: "2026-02-11T08:30:00",
              time_end: "2026-02-11T10:00:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[0],
              classroom: classrooms[1],
              teacher: teachers[2],
            },
            {
              index: 2,
              time_start: "2026-02-11T10:10:00",
              time_end: "2026-02-11T11:40:00",
              alternation_type: LessonAlternationType.usual,
              subject: subjects[3],
              classroom: classrooms[2],
              teacher: teachers[3],
            },
          ],
        },
      ],
    },
  ],
};
