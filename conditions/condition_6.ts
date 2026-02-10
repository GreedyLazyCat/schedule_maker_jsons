

/**
 * Примечание: один раз в две недели
 * тут не совсем понимаю к чему оно применяется, в time у ComplexCondition
 * указано once_per_two_weeks true, но нужно знать область применения такого условия.
 * Если это конкретный предмет, у конкретных групп, конкретного типа, то это нужно указать.
 * В моем случае сейчас по всем предметам, у всех групп, всех типов занятия раз в две недели)
 */
const condition_6: SimpleCondition = {
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

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,

  complex_conditions: [
    {
      name: "Условие",

      scope: {
        /**
         * null - значит предмет не важен
         */
        subject: null,

        /**
         * null - распространяется на все типы
         */
        lesson_types: null,

        /**
         * null - на все группы
         */
        study_groups: null,

        date_start: "",
        date_end: "",
      },

      time: {
        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,
        /**
         * Ставим флаг, что один раз в две недели
         */
        once_per_two_weeks: true,
        same_lessons_consequtive: false,
      },
    },
  ],
};