/**
 * первая половина дня
 */
const condition_1: SimpleCondition = {
  /**
   * Все помечены как доступные
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
   * Условно, если 2 пара до 12:20, то все занятие после 2ой пары не первая половина дня,
   * значит разрешаем только 1 и 2ую пару
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
   * В данном случае просто дефолтное значение
   */
  lessonLimit: 8,
};
