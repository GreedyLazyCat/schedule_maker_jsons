/**
 * вторник 1 пара
 */
const condition_36: SimpleCondition = {
  /**
   * Разрешаем только вторник
   */
  workingDays: [
    {
      //Пн
      day: 1,
      availability: "unavailable",
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
      availability: "unavailable",
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