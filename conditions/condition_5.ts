
/**
 * Желательно всё в четверг и пятницу
 */
const condition_5: SimpleCondition = {
  /**
   * Поскольку "желательно" в пт и чт, тракутую так, что остальные дни "возможные, но не желательные"
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
      availability: Availability.undesirable,
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
   * Рабочих дня, потому, что ставим все в пт и чт
   */
  working_days_count: 2,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};