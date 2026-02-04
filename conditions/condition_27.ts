/**
 * Пара одновременно у двух направлений, схлопнуть их в одну, практика и лекция смешанные будут, 1 пара в неделю
 *
 * 1 пара в неделю не задать.
 */
const condition_27: SimpleCondition = {
  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        study_groups: [
          {
            id: 1,
            name: "ИТ-41Бо",
            study_unit_id: 1,
            study_direction_id: 1
          },

          // ... И далее все группы Направления 1
        ],

        lesson_types: [
          {
            id: 1,
            name: "lecture",
          },
          {
            id: 2,
            name: "practice",
          },
        ],

        date_start: "",
        date_end: "",
      },

      lesson_connections: [
        {
          type: "unite_groups",
          connection_subjects: {
            study_groups: [
              {
                id: 1,
                name: "ИВТ-41Бо",
                study_unit_id: 1,
                study_direction_id: 2,
              },
            ],
            // .... и далее все группы Направление 2
          },
        },
      ],
    },
  ],

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

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};