/**
 * Лекцию просьба 1 пару в неделю поставить, последней парой для студентов в выбранный день Практику
 * просьба поставить 1 пару в неделю. Практику обе группы в 1 день
 * по возможности, если требуется - можно объединить их в одну.
 *
 * Что одна пара в неделю не задать (вернее можно, но не в сложном условии, тут нужно костылем
 * ограничение, что максимум одна пара в день и один рабочий день, но это в простом условии и конкретно на лекции
 * это не задать)
 */
const condition_25: SimpleCondition = {
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

      time: {
        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,

        lesson_amount: 1,

        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },
    },

    //Задаем пракики в выбранный день, допустим выбранный день был Пн
    {
      name: "Условие 2",
      scope: {
        subject: null,
        study_groups: [
          {
            id: 1,
            name: "ИТ-41БО",
            study_direction_id: 1,
            study_unit_id: 1,
          },
        ],
        lesson_types: [
          {
            id: 1,
            name: "practice",
          },
        ],

        date_end: "",
        date_start: "",
      },

      time: {
        lesson_placement: [
          {
            day: 1,
            placement: LessonPlacement.last_lesson,
          },
        ],

        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,

        lesson_amount: 1,

        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },

      /**
       * Объединяем со второй группой
       */
      lesson_connections: [
        {
          type: "unite_groups",
          connection_subjects: {
            study_groups: [
              {
                id: 1,
                name: "ИТ-42БО",
                study_direction_id: 1,
                study_unit_id: 1,
              },
            ],
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
