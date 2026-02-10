/**
 * Желательно уложиться в 3 рабочих дня. По возможности лекции на 1-3 парах.
 * Если объединить мигающую практику по предмет Г у двух групп, то я не обижусь
 */
const condition_18: SimpleCondition = {
  /**
   * Разрешаем все дни
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.available,
    },
    {
      //Вт
      day: 2,
      availability: Availability.available,
    },
    {
      //Ср
      day: 3,
      availability: Availability.available,
    },
    {
      //Чт
      day: 4,
      availability: Availability.available,
    },
    {
      //Пт
      day: 5,
      availability: Availability.available,
    },
    {
      //Сб
      day: 6,
      availability: Availability.available,
    },
  ],

  /**
   * Разрешаем все пары
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.available,
    },
    {
      lesson_index: 2,
      availability: Availability.available,
    },
    {
      lesson_index: 3,
      availability: Availability.available,
    },
    {
      lesson_index: 4,
      availability: Availability.available,
    },
    {
      lesson_index: 5,
      availability: Availability.available,
    },
    {
      lesson_index: 6,
      availability: Availability.available,
    },
    {
      lesson_index: 7,
      availability: Availability.available,
    },
    {
      lesson_index: 8,
      availability: Availability.available,
    },
  ],

  working_days_count: 3,

  complex_conditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        study_groups: null,
        lesson_types: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        date_start: "",
        date_end: "",
      },
      time: {
        intervals: [
          {
            day: 1,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
          {
            day: 2,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
          {
            day: 3,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
          {
            day: 4,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
          {
            day: 5,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
          {
            day: 6,
            start: 1,
            end: 4,
            availablity: Availability.available,
          },
        ],
       
        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,
        
        once_per_two_weeks: false,
        same_lessons_consequtive: false
      },
    },
  ],

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};
