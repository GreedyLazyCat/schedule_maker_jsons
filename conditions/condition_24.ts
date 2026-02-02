/**
 * БЕЗ пятниц, желательно дни подряд и впихнуть в 2 дня. Идеально - среда + четверг
 */
const condition_24: SimpleCondition = {
  /**
   * Пятницу зарещаем, все кроме четверга и среды - нежелательно.
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.undesirable,
    },
    {
      //Вт
      day: 2,
      availability: Availability.undesirable,
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
      availability: Availability.unavailable,
    },
    {
      //Сб
      day: 6,
      availability: Availability.undesirable,
    },
  ],

  /**
   * Разрешаем все пары
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
      availability: Availability.available,
    },
    {
      lesson_index: 5,
      availability: Availability.available,
    },
    {
      lesson_index: 6,
      availability: Availability.available,
    },
    {
      lesson_index: 7,
      availability: Availability.available,
    },
    {
      lesson_index: 8,
      availability: Availability.available,
    },
  ],

  /**
   * Рабочие дни подряд
   */
  consequitive_working_days: true,

  /**
   * "Впихваем" в два дня
   */
  working_days_count: 2,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};