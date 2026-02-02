/**
 * Хотя бы один день не с первой пары. Желательно уместить в з дня и чтобы не подряд. Готова работать по субботам.
 */
const condition_3: SimpleCondition = {
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
      /**
       * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
       * это на усмотрение пользователя, я ставлю просто можно
       */
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
   * 3 рабочих дня
   */
  working_days_count: 3,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,

  /**
   * Рабочие дни не подряд
   */
  consequitive_working_days: false,

  /**
   * Теперь с помощью сложного условия задаем хотябы один день не с первой пары
   */
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
       * Временные настройки
       */
      time: {
        /**
         * В текущем варианте возможно только выбрать какой-то конкретный день, например понедельник, и сказать
         * что в пн у нас занятия не с первой пары, а со 2 по 8.
         */
        intervals: [
          {
            day: 1,
            start: 2,
            end: 8,
          },
        ],
        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },
    },
  ],
};