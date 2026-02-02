/**
 * Курс по выбору, поэтому пары для 2 потоков можно объединить. Лекции и практики можно ставить в любом порядке
 */
const condition_14: SimpleCondition = {
  //Начну сразу со сложного условия

  complex_conditions: [
    {
      name: "Условие",
      scope: {
        subject: {
          id: 26,
          name: "Какой-то курс по выбору",
          study_unit_id: 1,
        },
        study_groups: [
          {
            id: 1,
            name: "ИТ-41Бо",
            study_unit_id: 1,
          },
          // .... и далее все группы потока или направления 1
        ],

        lesson_types: null,

        date_start: "",
        date_end: "",
      },

      /**
       * Здесь настраиваем обЪединение групп
       */
      lesson_connections: [
        {
          type: "unite_groups",
          connection_subjects: {
            study_groups: [
              {
                id: 32,
                name: "ИВТ-42БО",
                study_unit_id: 2,
              },
              // ... и далее все группы потока или направления 2, занятия которых надо объеденить с занятиями групп направления 1
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