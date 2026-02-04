/**
 * Желательно все группы и все предметы в один день, не важно в какой. Группы желательно объеденить.
 *
 * Это опять же "в один день" можно решить, через настройку простого условия, но только потому, что это распрострняется
 * на все предметы, но когда дело доходит до конретных предметов, групп занятий или типов занятий такое уже не сделать.
 */
const condition_39: SimpleCondition = {
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

  working_days_count: 1,

  /**
   * Дальше задаем объединение групп, указываем в области определние одно направление например
   * а дальше в связи с другими занятиями и группами другие направления.
   */
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

          // ... Тут как бы какое-нибудь одно направление
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
                study_direction_id: 1
              },
              // ... А дальше группы с других направлений
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