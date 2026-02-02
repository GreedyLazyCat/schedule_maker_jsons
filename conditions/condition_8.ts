/**
 * Объединить Предмет 1 и Предмет 2 у разных направлений вместе чтобы ходили и на лекции, и на  практику
 */
const condition_8: SimpleCondition = {
  // ---- Для простого условия все по стандарту начну сразу со сложного

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: {
          id: 1,
          name: "Предмет 1",
          study_unit_id: 1,
        },

        study_groups: [
          {
            id: 1,
            name: "ИТ-41БО",
            study_unit_id: 1,
          },
          {
            id: 2,
            name: "ИВТ-41БО",
            study_unit_id: 1,
          },
          // .... Допустим тут все необходимые группы этого предмета с одних направлений
          // Или вообще стоит null указать, чтобы на все группы распространялось
        ],

        lesson_types: [
          {
            id: 1,
            name: "lecture",
          },
          {
            id: 5,
            name: "practice",
          },
        ],

        date_start: "",
        date_end: "",
      },

      lesson_connections: [
        {
          type: "subject_union",
          connection_subjects: {
            subjects: [
              {
                id: 23,
                name: "Предмет 2",
                study_unit_id: 2,
              } as Subject,
            ],
            study_groups: [
              {
                id: 1,
                name: "ПИЭ-41БО",
                study_unit_id: 2,
              },
              // И Все остальные группы разных направлений предмета 2
            ] as StudyGroup[],
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