/**
 * Среда, числитель 3,4,5 пары
 *
 * Тут пока кажется мне, что прям числитель указать нельзя, не предусмотрено,
 * можно укзать только занятие раз в две недели, что по смыслу и есть это, только
 * это может быть и знаменатель
 */
const condition_23: SimpleCondition = {
  complex_conditions: [
    {
      name: "Услоик",
      scope: {
        subject: null,
        study_groups: null,
        lesson_types: null,

        date_start: "",
        date_end: "",
      },

      /**
       * Задаем раз в две недели
       */
      time: {
        once_per_two_weeks: true,
        same_lessons_consequtive: false,

        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,
      },
    },
  ],

  /**
   * Разрешаем только среду
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.unavailable,
    },
    {
      //Вт
      day: 2,
      availability: Availability.unavailable,
    },
    {
      //Ср
      day: 3,
      availability: Availability.available,
    },
    {
      //Чт
      day: 4,
      availability: Availability.unavailable,
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
   * Разрешаем 3, 4, 5 пары
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 2,
      availability: Availability.unavailable,
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