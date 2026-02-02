/**
 * Первая половина дня, не ставить 1-2пары в понедельник.
 *
 * Вот тут опять же, либо селектор пар в простом условии доделывать
 * либо с тем как работает интервалы пар разобраться
 */
const condition_22: SimpleCondition = {
  /**
   * Запрещаем понедельник
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
      availability: Availability.available,
    },
    {
      //Чт
      day: 4,
      availability: Availability.available,
    },
    {
      //Пт
      day: 5,
      availability: Availability.available,
    },
    {
      //Сб
      day: 6,
      availability: Availability.available,
    },
  ],

  /**
   * Разрешаем пары в первой половине дня (допустим первые 3)
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
   * Дефолтное значение
   */
  lesson_limit: 8,
};