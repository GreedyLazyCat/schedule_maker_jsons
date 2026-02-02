
/**
 * Обе пары в один день. Готов работать в субботу
 */
const condition_4: SimpleCondition = {
  /**
   * Разрешаем все дни
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
      /**
       * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
       * это на усмотрение пользователя, я ставлю просто можно
       */
      availability: Availability.available,
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
   * Зависит от того, как я понял пожелание, если всего две пары у преподавателя, то просто достаточно
   * указать, что один рабочий день, если другое - значит надо поработать сложными условиями
   */
  working_days_count: 1,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};