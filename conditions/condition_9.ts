/**
 * Лекции и лабы в один день, лучше с утра прошу поставить занятия компактно в любой день, кроме понедельника
 */
const condition_9: SimpleCondition = {
  /**
   * Разрешаем все дни, кроме понедельника
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
   * Допустим, что первые две пары - это с утра, поэтому их разрешаем,
   * остальное ставим нежелательно.
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
      availability: Availability.undesirable,
    },
    {
      lesson_index: 4,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 5,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 6,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 7,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 8,
      availability: Availability.undesirable,
    },
  ],

  working_days_count: 1,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: {
          id: 1,
          name: "Предмет X",
          study_unit_id: 1,
        },

        study_groups: null,
        lesson_types: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        date_start: "",
        date_end: "",
      },

      lesson_connections: [
        {
          type: "the_same_day_as",
          connection_subjects: {
            subjects: [
              {
                id: 1,
                name: "Предмет X",
                study_unit_id: 1,
              },
            ],
            lesson_types: [
              {
                id: 2,
                name: "practice",
              },
            ],
          },
        },
      ],
    },
  ],
};
