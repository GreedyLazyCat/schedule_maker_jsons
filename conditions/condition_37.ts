/**
 * Прошу поставить занятия пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
 *
 * Снова воспользуемся сложным условием
 */
const condition_37: SimpleCondition = {
  /**
   * Разрешаем пн, пт, сб
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
      availability: "unavailable",
    },
    {
      //Ср
      day: 3,
      availability: "unavailable",
    },
    {
      //Чт
      day: 4,
      availability: "unavailable",
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
   * Разрешенные пары укажем в сложных условиях, эти уже не будут иметь значение по идее
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
       * пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
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
          // day 5: 1..2 available, 3..8 unavailable
          { dayIndex: 5, lessonIndex: 1, type: "available" },
          { dayIndex: 5, lessonIndex: 2, type: "available" },
          { dayIndex: 5, lessonIndex: 3, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 4, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 5, lessonIndex: 8, type: "unavailable" },
          // day 6: 1..4 available, 5..8 unavailable
          { dayIndex: 6, lessonIndex: 1, type: "available" },
          { dayIndex: 6, lessonIndex: 2, type: "available" },
          { dayIndex: 6, lessonIndex: 3, type: "available" },
          { dayIndex: 6, lessonIndex: 4, type: "available" },
          { dayIndex: 6, lessonIndex: 5, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 6, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 7, type: "unavailable" },
          { dayIndex: 6, lessonIndex: 8, type: "unavailable" },
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