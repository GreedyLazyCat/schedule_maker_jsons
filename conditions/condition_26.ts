/**
 * Желательно: Лекция и практика одной парой каждую неделю и будут чередоваться числитель/знаменатель. 1 пара в неделю получается.
 * Тоже до конца не задать.
 */
const condition_26: SimpleCondition = {
    complex_conditions: [
        {
            name: "Условие",
            scope: {
                subject: null,
                study_groups: null,
                lesson_types: [
                    {
                        id: 1,
                        name: "lecture"
                    }
                ],

                date_start: "",
                date_end: ""
            },
            lesson_connections: [
                {
                    type: "alternate_with",
                    connection_subjects: {
                        subject: null,
                        study_groups: null,
                        lesson_type: {
                            id: 2,
                            name: "practice"
                        }
                    }
                }
            ]
        }
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
