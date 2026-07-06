/**
 * В идеале утрамбовать во вторник, четверг и пятницу (с окончанием в каждый из этих дней не позже 3 пары).
 * Можно вместо пятницы задействовать понедельник (там уже без явных ограничений по времени, лучше с утра).
 *
 * Настариваем в workingDays вторник, четверг и пятницу как доступные, а понедельник как нежелательный.
 * В availible_lessons запрещаем пары после 3ей.
 * В сложном условии ставим, что в понедельник с первой по 8 пару.
 * А остальные с 1 по 3 включительно
 */
const condition_7: SimpleCondition = {
  /**
   *
   */
  workingDays: [
    {
      //Пн
      day: 1,
      availability: "undesirable",
    },
    {
      //Вт
      day: 2,
      availability: "available",
    },
    {
      //Ср
      day: 3,
      availability: "unavailable",
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
      availability: "unavailable",
    },
  ],

  /**
   * Разрешаем пары до 3ей включительно
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
      availability: "unavailable",
    },
    {
      lessonIndex: 5,
      availability: "unavailable",
    },
    {
      lessonIndex: 6,
      availability: "unavailable",
    },
    {
      lessonIndex: 7,
      availability: "unavailable",
    },
    {
      lessonIndex: 8,
      availability: "unavailable",
    },
  ],

  workingDaysCount: 3,

  lessonLimit: 8,

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
       * Здесь в availability ставим на понедельник с 1-й по 8-ю пару (все available),
       * а на остальные дни (2..6) с 1-й по 3-ю — оставшиеся 4..8 unavailable.
       */
      time: {
        availability: [
          // Понедельник: 1..8 available
          { dayIndex: 1, lessonIndex: 1, type: "available" },
          { dayIndex: 1, lessonIndex: 2, type: "available" },
          { dayIndex: 1, lessonIndex: 3, type: "available" },
          { dayIndex: 1, lessonIndex: 4, type: "available" },
          { dayIndex: 1, lessonIndex: 5, type: "available" },
          { dayIndex: 1, lessonIndex: 6, type: "available" },
          { dayIndex: 1, lessonIndex: 7, type: "available" },
          { dayIndex: 1, lessonIndex: 8, type: "available" },
          // Вторник: 1..3 available, 4..8 unavailable
          { dayIndex: 2, lessonIndex: 1, type: "available" },
          { dayIndex: 2, lessonIndex: 2, type: "available" },
          { dayIndex: 2, lessonIndex: 3, type: "available" },
          { dayIndex: 2, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 8, type: "unavailable" },
          // Среда: 1..3 available, 4..8 unavailable
          { dayIndex: 3, lessonIndex: 1, type: "available" },
          { dayIndex: 3, lessonIndex: 2, type: "available" },
          { dayIndex: 3, lessonIndex: 3, type: "available" },
          { dayIndex: 3, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 8, type: "unavailable" },
          // Четверг: 1..3 available, 4..8 unavailable
          { dayIndex: 4, lessonIndex: 1, type: "available" },
          { dayIndex: 4, lessonIndex: 2, type: "available" },
          { dayIndex: 4, lessonIndex: 3, type: "available" },
          { dayIndex: 4, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 8, type: "unavailable" },
          // Пятница: 1..3 available, 4..8 unavailable
          { dayIndex: 5, lessonIndex: 1, type: "available" },
          { dayIndex: 5, lessonIndex: 2, type: "available" },
          { dayIndex: 5, lessonIndex: 3, type: "available" },
          { dayIndex: 5, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 8, type: "unavailable" },
          // Суббота: 1..3 available, 4..8 unavailable
          { dayIndex: 6, lessonIndex: 1, type: "available" },
          { dayIndex: 6, lessonIndex: 2, type: "available" },
          { dayIndex: 6, lessonIndex: 3, type: "available" },
          { dayIndex: 6, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 8, type: "unavailable" },
        ],

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,
      },
    },
  ],
};