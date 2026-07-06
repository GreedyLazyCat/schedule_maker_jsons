/**
 * пн 1 и 2 пара, пт 1 и 2 пара
 */
const condition_10: SimpleCondition = {
  /**
   * Разрешаем пн и пт
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
      availability: "unavailable",
    },
    {
      //Сб
      day: 6,
      availability: "available",
    },
  ],

  /**
   * Разрешаем 1 и 2 пару
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