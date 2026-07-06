/**
 * По возможности, если будет пара раз в две недели,
 * поставить первой парой + учесть, что есть математики (и совмещаю с другими корпусами)
 *
 * Вот такое "Если" не задать, поэтому задаю просто что, пара раз в две недели и что первой парой.
 */
const condition_17: SimpleCondition = {
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

      time: {
        oncePerTwoWeeks: true,
        sameLessonsConsequtive: false,

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
      },
    },
  ],

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
   * Разрешаем только первую пару
   */
  availableLessons: [
    {
      lessonIndex: 1,
      availability: "available",
    },
    {
      lessonIndex: 2,
      availability: "unavailable",
    },
    {
      lessonIndex: 3,
      availability: "unavailable",
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

  //workingDaysCount здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};