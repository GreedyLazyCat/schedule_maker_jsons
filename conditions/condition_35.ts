/**
 * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
 *
 * Такое по идее задается сложным условием.
 */
const condition_35: SimpleCondition = {
  /**
   * Разрешаем пн, вт, ср, чт
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
      availability: "unavailable",
    },
    {
      //Сб
      day: 6,
      availability: "unavailable",
    },
  ],

  /**
   * Разрешенные пары придется настраивать в сложном условии
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

  //workingDaysCount здесь не указан - значит любое кол-во дней

  complexConditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        studyGroups: null,
        lessonTypes: null,

        dateStart: "",
        dateEnd: "",
      },
      /**
       * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
       */
      time: {
        availability: [
          // day 1: 1..2 available, 3..8 unavailable
          { dayIndex: 1, lessonIndex: 1, type: "available" },
          { dayIndex: 1, lessonIndex: 2, type: "available" },
          { dayIndex: 1, lessonIndex: 3, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 8, type: "unavailable" },
          // day 2: 1..2 available, 3..8 unavailable
          { dayIndex: 2, lessonIndex: 1, type: "available" },
          { dayIndex: 2, lessonIndex: 2, type: "available" },
          { dayIndex: 2, lessonIndex: 3, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 8, type: "unavailable" },
          // day 3: 1..3 available, 4..8 unavailable
          { dayIndex: 3, lessonIndex: 1, type: "available" },
          { dayIndex: 3, lessonIndex: 2, type: "available" },
          { dayIndex: 3, lessonIndex: 3, type: "available" },
          { dayIndex: 3, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 8, type: "unavailable" },
          // day 4: 1..8 all available
          { dayIndex: 4, lessonIndex: 1, type: "available" },
          { dayIndex: 4, lessonIndex: 2, type: "available" },
          { dayIndex: 4, lessonIndex: 3, type: "available" },
          { dayIndex: 4, lessonIndex: 4, type: "available" },
          { dayIndex: 4, lessonIndex: 5, type: "available" },
          { dayIndex: 4, lessonIndex: 6, type: "available" },
          { dayIndex: 4, lessonIndex: 7, type: "available" },
          { dayIndex: 4, lessonIndex: 8, type: "available" },
        ],
        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,


        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
      },
    },
  ],

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};