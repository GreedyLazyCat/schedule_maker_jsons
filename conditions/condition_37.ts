/**
 * Прошу поставить занятия пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
 *
 * Снова воспользуемся сложным условием
 */
const condition_37: SimpleCondition = {
  /**
   * Разрешаем пн, пт, сб
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
      availability: Availability.unavailable,
    },
    {
      //Ср
      day: 3,
      availability: Availability.unavailable,
    },
    {
      //Чт
      day: 4,
      availability: Availability.unavailable,
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
   * Разрешенные пары укажем в сложных условиях, эти уже не будут иметь значение по идее
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
       * пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
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
            day: 5,
            start: 1,
            end: 2,
            availablity: Availability.available,
          },
          {
            day: 6,
            start: 1,
            end: 4,
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