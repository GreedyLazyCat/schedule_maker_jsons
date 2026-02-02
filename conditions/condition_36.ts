/**
 * вторник 1 пара
 */
const condition_36: SimpleCondition = {
  /**
   * Разрешаем только вторник
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.unavailable,
    },
    {
      //Вт
      day: 2,
      availability: Availability.available,
    },
    {
      //Ср
      day: 3,
      availability: Availability.unavailable,
    },
    {
      //Чт
      day: 4,
      availability: Availability.unavailable,
    },
    {
      //Пт
      day: 5,
      availability: Availability.unavailable,
    },
    {
      //Сб
      day: 6,
      availability: Availability.unavailable,
    },
  ],

  /**
   * Разрешаем только первую пару
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.available,
    },
    {
      lesson_index: 2,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 3,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 4,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 5,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 6,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 7,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 8,
      availability: Availability.unavailable,
    },
  ],

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};