/**
 * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
 *
 * Такое по идее задается сложным условием.
 */
const condition_35: SimpleCondition = {
  /**
   * Разрешаем пн, вт, ср, чт
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
      availability: Availability.unavailable,
    },
    {
      //Сб
      day: 6,
      availability: Availability.unavailable,
    },
  ],

  /**
   * Разрешенные пары придется настраивать в сложном условии
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

  //working_days_count здесь не указан - значит любое кол-во дней

  complex_conditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        study_groups: null,
        lesson_types: null,

        date_start: "",
        date_end: "",
      },
      /**
       * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
       */
      time: {
        intervals: [
          {
            day: 1,
            start: 1,
            end: 2,
            availablity: Availability.available,
          },
          {
            day: 2,
            start: 1,
            end: 2,
            availablity: Availability.available,
          },
          {
            day: 3,
            start: 1,
            end: 3,
            availablity: Availability.available,
          },
          {
            day: 4,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
        ],
        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },
    },
  ],

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};