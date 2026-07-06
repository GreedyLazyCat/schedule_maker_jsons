
/**
 * Обе пары в один день. Готов работать в субботу
 */
const condition_4: SimpleCondition = {
  /**
   * Разрешаем все дни
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
      /**
       * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
       * это на усмотрение пользователя, я ставлю просто можно
       */
      availability: "available",
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
   * Зависит от того, как я понял пожелание, если всего две пары у преподавателя, то просто достаточно
   * указать, что один рабочий день, если другое - значит надо поработать сложными условиями
   */
  workingDaysCount: 1,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};