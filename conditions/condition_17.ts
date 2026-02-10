/**
 * По возможности, если будет пара раз в две недели,
 * поставить первой парой + учесть, что есть математики (и совмещаю с другими корпусами)
 *
 * Вот такое "Если" не задать, поэтому задаю просто что, пара раз в две недели и что первой парой.
 */
const condition_17: SimpleCondition = {
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

      time: {
        once_per_two_weeks: true,
        same_lessons_consequtive: false,

        lesson_alternation: LessonAlternationType.usual,
        lesson_placement: LessonPlacement.not_important,
        lesson_consecutiveness: LessonConsecutiveness.not_important,
      },
    },
  ],

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
   * Разрешаем только первую пару
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.available,
    },
    {
      lesson_index: 2,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 3,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 4,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 5,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 6,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 7,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 8,
      availability: Availability.unavailable,
    },
  ],

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};