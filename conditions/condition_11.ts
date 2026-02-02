/**
 * Для Направление 1 и Направление 2 занятия: 1 раз в 2 недели - лекции. Следующее занятие - практика.
 * Лекции для всего потока. Практики - занятия по группам. Для Направление 3 - как обычно.
 * Просьба более 4-х пар в день не назначать. Занятия уместить в 2 дня. Без субботы.
 */
const condition_11: SimpleCondition = {
  /**
   * Разрешаем все дни, кроме субботы
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
      availability: Availability.unavailable,
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
   * Уместить в два дня
   */
  working_days_count: 2,

  /**
   * Не более 4ех занятий в день
   */
  lesson_limit: 4,

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        study_groups: null,
        lesson_types: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        date_end: "",
        date_start: "",
      },

      /**
       * Указываем, что занятия по раз в две недели. (получается по лекциям)
       */
      time: {
        once_per_two_weeks: true,
        same_lessons_consequtive: false,
      },

      /**
       * В связи с другими занятиями указываем, что чередуем с практиками
       */
      lesson_connections: [
        {
          type: "alternate_with",
          connection_subjects: {
            lesson_types: [
              {
                id: 1,
                name: "practice",
              },
            ],
          },
        },
      ],
    },
  ],
};