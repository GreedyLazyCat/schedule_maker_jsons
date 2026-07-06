/**
 * Хотя бы один день не с первой пары. Желательно уместить в з дня и чтобы не подряд. Готова работать по субботам.
 *
 * В текущем варианте возможно только выбрать какой-то конкретный день, например понедельник, и сказать
 * что в пн у нас занятия не с первой пары, а со 2 по 8.
 */
const condition_3: SimpleCondition = {
  /**
   * Разрешаем все дни
   */
  workingDays: [
    {
      //Пн
      day: 1,
      availability: "available",
    },
    {
      //Вт
      day: 2,
      availability: "available",
    },
    {
      //Ср
      day: 3,
      availability: "available",
    },
    {
      //Чт
      day: 4,
      availability: "available",
    },
    {
      //Пт
      day: 5,
      availability: "available",
    },
    {
      //Сб
      day: 6,
      /**
       * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
       * это на усмотрение пользователя, я ставлю просто можно
       */
      availability: "available",
    },
  ],

  /**
   * Разрешаем все пары
   */
  availableLessons: [
    {
      lessonIndex: 1,
      availability: "available",
    },
    {
      lessonIndex: 2,
      availability: "available",
    },
    {
      lessonIndex: 3,
      availability: "available",
    },
    {
      lessonIndex: 4,
      availability: "available",
    },
    {
      lessonIndex: 5,
      availability: "available",
    },
    {
      lessonIndex: 6,
      availability: "available",
    },
    {
      lessonIndex: 7,
      availability: "available",
    },
    {
      lessonIndex: 8,
      availability: "available",
    },
  ],

  /**
   * 3 рабочих дня
   */
  workingDaysCount: 3,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,

  /**
   * Рабочие дни не подряд
   */
  consequitiveWorkingDays: false,

  /**
   * Теперь с помощью сложного условия задаем хотябы один день не с первой пары
   */
  complexConditions: [
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
        lessonTypes: null,

        /**
         * null - на все группы
         */
        studyGroups: null,

        dateStart: "",
        dateEnd: "",
      },

      /**
       * Временные настройки
       */
      time: {
        /**
         * В текущем варианте возможно только выбрать какой-то конкретный день, например понедельник, и сказать
         * что в пн у нас занятия не с первой пары, а со 2 по 8.
         * Разворачиваем диапазон { day: 1, start: 2, end: 8 } в 8 по-слотовых записей availability:
         *  - lessonIndex 1 -> "unavailable" (до диапазона)
         *  - lessonIndex 2..8 -> "available" (внутри диапазона)
         */
        availability: [
          { dayIndex: 1, lessonIndex: 1, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 2, type: "available" },
          { dayIndex: 1, lessonIndex: 3, type: "available" },
          { dayIndex: 1, lessonIndex: 4, type: "available" },
          { dayIndex: 1, lessonIndex: 5, type: "available" },
          { dayIndex: 1, lessonIndex: 6, type: "available" },
          { dayIndex: 1, lessonIndex: 7, type: "available" },
          { dayIndex: 1, lessonIndex: 8, type: "available" },
        ],

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,
      },
    },
  ],
};
