/**
 * По возможности ставить пары в 210 ауд.
 * Лекции и практики по предмет 3 ставить вместе в один день, и так же по предмет 2.
 */
const condition_15: SimpleCondition = {
  //У простого условия все стандарт, все разрешено, начну с сложного

  complex_conditions: [
    // В этом условии ставим, что пары проводим в 210
    {
      name: "Условие 1",
      scope: {
        //Тут думаю должно быть для всех предметов групп и типов занятий
        subject: null,
        study_groups: null,
        lesson_types: null,

        date_start: "",
        date_end: "",
      },

      required_equipment: {
        classrooms: [
          {
            id: 23,
            number: "201",
            study_unit_id: 1,
            capacity: 50,
          },
        ],
      },
    },

    //Устанавливаем, что лекции и практики в один день
    {
      name: "Условие 2",
      scope: {
        subject: {
          id: 28,
          name: "Предмет 3",
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

      /**
       * Пишем связь, что для лекци предмета 3, всех групп ставим в один день с практиками (предмет и группы беруться из области примиенения условия)
       */
      lesson_connections: [
        {
          type: "the_same_day_as",
          connection_subjects: {
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
    {
      name: "Условие 3",
      scope: {
        subject: {
          id: 28,
          name: "Предмет 2",
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