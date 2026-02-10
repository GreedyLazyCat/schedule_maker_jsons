/**
 * В идеале утрамбовать во вторник, четверг и пятницу (с окончанием в каждый из этих дней не позже 3 пары).
 * Можно вместо пятницы задействовать понедельник (там уже без явных ограничений по времени, лучше с утра).
 *
 * Настариваем в working_days вторник, четверг и пятницу как доступные, а понедельник как нежелательный.
 * В availible_lessons запрещаем пары после 3ей.
 * В сложном условии ставим, что в понедельник с первой по 8 пару.
 * А остальные с 1 по 3 включительно
 */
const condition_7: SimpleCondition = {
  /**
   *
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.undesirable,
    },
    {
      //Вт
      day: 2,
      availability: Availability.available,
    },
    {
      //Ср
      day: 3,
      availability: Availability.unavailable,
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
      availability: Availability.unavailable,
    },
  ],

  /**
   * Разрешаем пары до 3ей включительно
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

  working_days_count: 3,

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

      /**
       * Здесь в интервалах ставим на понедельник с первой по 8ую пару.
       * А на остальные дни с 1 по 3ю
       */
      time: {
        intervals: [
          {
            day: 1,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 2,
            start: 1,
            end: 3,
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
            end: 3,
            availablity: Availability.available,
          },
          {
            day: 5,
            start: 1,
            end: 3,
            availablity: Availability.available,
          },
          {
            day: 6,
            start: 1,
            end: 3,
            availablity: Availability.available,
          },
        ],
        
        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,

        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },
    },
  ],
};