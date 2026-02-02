/**
 * первая половина дня
 */
const condition_1: SimpleCondition = {
  /**
   * Все помечены как доступные
   */
  working_days: [
    {
      day: 1,
      availability: Availability.available,
    },
    {
      day: 2,
      availability: Availability.available,
    },
    {
      day: 3,
      availability: Availability.available,
    },
    {
      day: 4,
      availability: Availability.available,
    },
    {
      day: 5,
      availability: Availability.available,
    },
    {
      day: 6,
      availability: Availability.available,
    },
  ],

  /**
   * Условно, если 2 пара до 12:20, то все занятие после 2ой пары не первая половина дня,
   * значит разрешаем только 1 и 2ую пару
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
   * В данном случае просто дефолтное значение
   */
  lesson_limit: 8,
};