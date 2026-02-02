/**
 * объединить все потоки; 1 пара в неделю до середины семестра
 *
 * пришлось чуток подумать, но задать можно
 *
 * В простом условии ставим, что рабочи2 день один, а в сложном в ограничении по количеству пар
 * ставим, что только одна пара в день
 */
const condition_21: SimpleCondition = {
  //Здесь тоже основная работа в сложном условии

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        lesson_types: null,

        study_groups: null,

        date_start: "",

        /**
         * Задаем дату конца действия условия как середину семестра
         */
        date_end: "",
      },

      time: {
        lesson_day_limits: [
          {
            day: 1,
            sign: "=",
            limit: 1,
          },

          // .... так все 6 дней

          {
            day: 6,
            sign: "=",
            limit: 1,
          },
        ],

        once_per_two_weeks: false,
        same_lessons_consequtive: false,
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

  /**
   * Ставим один рабочий день
   */
  working_days_count: 1,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};