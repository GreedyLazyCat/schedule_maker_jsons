/**
 * Желательно уложиться в 3 рабочих дня. По возможности лекции на 1-3 парах.
 * Если объединить мигающую практику по предмет Г у двух групп, то я не обижусь
 */
const condition_18: SimpleCondition = {
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

  workingDaysCount: 3,

  complexConditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        studyGroups: null,
        lessonTypes: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        dateStart: "",
        dateEnd: "",
      },
      /**
       * По все дням разворачиваем {start: 1, end: 4, available} → 4 available + 4 unavailable
       * на каждый dayIndex (1..6).
       */
      time: {
        availability: [
          // day 1..6: lessonIndex 1..4 available, 5..8 unavailable
          { dayIndex: 1, lessonIndex: 1, type: "available" },
          { dayIndex: 1, lessonIndex: 2, type: "available" },
          { dayIndex: 1, lessonIndex: 3, type: "available" },
          { dayIndex: 1, lessonIndex: 4, type: "available" },
          { dayIndex: 1, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 8, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 1, type: "available" },
          { dayIndex: 2, lessonIndex: 2, type: "available" },
          { dayIndex: 2, lessonIndex: 3, type: "available" },
          { dayIndex: 2, lessonIndex: 4, type: "available" },
          { dayIndex: 2, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 2, lessonIndex: 8, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 1, type: "available" },
          { dayIndex: 3, lessonIndex: 2, type: "available" },
          { dayIndex: 3, lessonIndex: 3, type: "available" },
          { dayIndex: 3, lessonIndex: 4, type: "available" },
          { dayIndex: 3, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 3, lessonIndex: 8, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 1, type: "available" },
          { dayIndex: 4, lessonIndex: 2, type: "available" },
          { dayIndex: 4, lessonIndex: 3, type: "available" },
          { dayIndex: 4, lessonIndex: 4, type: "available" },
          { dayIndex: 4, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 4, lessonIndex: 8, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 1, type: "available" },
          { dayIndex: 5, lessonIndex: 2, type: "available" },
          { dayIndex: 5, lessonIndex: 3, type: "available" },
          { dayIndex: 5, lessonIndex: 4, type: "available" },
          { dayIndex: 5, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 8, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 1, type: "available" },
          { dayIndex: 6, lessonIndex: 2, type: "available" },
          { dayIndex: 6, lessonIndex: 3, type: "available" },
          { dayIndex: 6, lessonIndex: 4, type: "available" },
          { dayIndex: 6, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 8, type: "unavailable" },
        ],

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false
      },
    },
  ],

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};
