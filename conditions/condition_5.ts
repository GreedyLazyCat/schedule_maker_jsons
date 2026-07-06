
/**
 * Желательно всё в четверг и пятницу
 */
const condition_5: SimpleCondition = {
  /**
   * Поскольку "желательно" в пт и чт, тракутую так, что остальные дни "возможные, но не желательные"
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
      availability: "undesirable",
    },
    {
      //Ср
      day: 3,
      availability: "undesirable",
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
      availability: "undesirable",
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
   * Рабочих дня, потому, что ставим все в пт и чт
   */
  workingDaysCount: 2,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};