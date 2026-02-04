/**
 * Очень желательно практику (1 пара в неделю) у обеих групп в один день (идеально - подряд идущие пары)
 *
 *
 * 1 пара в неделю не задать
 */
const condition_28: SimpleCondition = {
  complex_conditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        study_groups: [
          {
            id: 1,
            name: "ИВТ-41БО",
            study_unit_id: 1,
            study_direction_id: 1,
          },
        ],

        lesson_types: [
          {
            id: 234,
            name: "practice",
          },
        ],

        date_start: "",
        date_end: "",
      },

      time: {
        once_per_two_weeks: false,
        same_lessons_consequtive: true,
      },

      lesson_connections: [
        {
          type: "the_same_day_as",
          connection_subjects: {
            subject: null,
            study_groups: [
              {
                what_groups: null,
                which_groups: [
                  {
                    id: 2,
                    name: "ИВТ-42БО",
                    study_unit_id: 1,
                    study_direction_id: 2,
                  },
                ],
              },
            ],
            lesson_type: {
              id: 1,
              name: "lecture",
            },
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
