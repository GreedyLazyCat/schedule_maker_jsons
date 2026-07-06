/**
 * БЕЗ пятниц, желательно дни подряд и впихнуть в 2 дня. Идеально - среда + четверг
 */
const condition_24: SimpleCondition = {
  /**
   * Пятницу зарещаем, все кроме четверга и среды - нежелательно.
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
   * Рабочие дни подряд
   */
  consequitiveWorkingDays: true,

  /**
   * "Впихваем" в два дня
   */
  workingDaysCount: 2,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};