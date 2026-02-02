/**
 * 1-3 пара, пн, вт, ср
 */
const condition_2: SimpleCondition = {
  /**
   * Разрешаем нужные дни
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.available,
    },
    {
      //Вт
      day: 2,
      availability: Availability.available,
    },
    {
      //Ср
      day: 3,
      availability: Availability.available,
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
   * Разрешаем с первой по тертью
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.available,
    },
    {
      lesson_index: 2,
      availability: Availability.available,
    },
    {
      lesson_index: 3,
      availability: Availability.available,
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
   * В данном случае просто дефолтное значение
   */
  lesson_limit: 8,
};