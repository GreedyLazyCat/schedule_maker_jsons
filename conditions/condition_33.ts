/**
 * пн-ср., пт, очень желательно с 1 пары
 */
const condition_33: SimpleCondition = {
  /**
   * Разрешаем пн-ср и пт
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
      availability: "unavailable",
    },
  ],

  /**
   * Просто разрешаем все пары, с ними ничего не надо, и так все с первоц
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

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};