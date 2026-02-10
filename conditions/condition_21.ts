/**
 * объединить все потоки; 1 пара в неделю до середины семестра
 */
const condition_21: SimpleCondition = {
  //Здесь тоже основная работа в сложном условии

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        lesson_types: null,

        study_groups: null,

        date_start: "",

        /**
         * Задаем дату конца действия условия как середину семестра
         */
        date_end: "",
      },

      time: {
        lesson_alternation: LessonAlternationType.usual,
        lesson_consecutiveness: LessonConsecutiveness.not_important,

        lesson_amount: 1,

        once_per_two_weeks: false,
        same_lessons_consequtive: false,
      },
    },
    /**
     * В этом условии объеденим потоки
     */
    {
      name: "Условие 2",
      scope: {
        subject: null,
        lesson_types: null,

        study_groups: [
          {
            id: 1,
            name: "ИВТ-41Бо",
            study_direction_id: 1,
            study_unit_id: 1,
          },

          // Все группы какого-то направления
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
                id: 2,
                name: "ИТ-41Бо",
                study_direction_id: 2,
                study_unit_id: 2,
              },
              //Тут все остальные направления
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

  /**
   * Ставим один рабочий день
   */
  working_days_count: 1,

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};
