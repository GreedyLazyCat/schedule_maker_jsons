/**
 * По возможности совместно с Направление 3
 */
const condition_38: SimpleCondition = {
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

  complex_conditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        lesson_types: null,
        study_groups: [
          {
            id: 1,
            name: "ИТ41-БО",
            study_unit_id: 1,
            study_direction_id: 1
          },

          // ... Далее все группы, которые надо будет объенить далее с Направлеием 3
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
                name: "ИВТ-41БО",
                study_unit_id: 1,
                study_direction_id: 2
              },
              // ... Далее все группы Направления 3
            ],
          },
        },
      ],
    },
  ],

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};