/**
 * Желательно: Лекция и практика одной парой каждую неделю и будут чередоваться числитель/знаменатель. 1 пара в неделю получается.
 * Тоже до конца не задать.
 */
const condition_26: SimpleCondition = {
    complexConditions: [
        {
            name: "Условие",
            scope: {
                subject: null,
                studyGroups: null,
                lessonTypes: [
                    {
                        id: 1,
                        name: "lecture"
                    }
                ],

                dateStart: "",
                dateEnd: ""
            },
            lessonConnections: [
                {
                    type: "alternate_with",
                    connectionSubjects: {
                        subject: null,
                        studyGroups: null,
                        lessonType: {
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
  workingDays: [
    {
      //Пн
      day: 1,
      availability: "available",
    },
    {
      //Вт
      day: 2,
      availability: "available",
    },
    {
      //Ср
      day: 3,
      availability: "available",
    },
    {
      //Чт
      day: 4,
      availability: "available",
    },
    {
      //Пт
      day: 5,
      availability: "available",
    },
    {
      //Сб
      day: 6,
      availability: "available",
    },
  ],

  /**
   * Разрешаем все пары
   */
  availableLessons: [
    {
      lessonIndex: 1,
      availability: "available",
    },
    {
      lessonIndex: 2,
      availability: "available",
    },
    {
      lessonIndex: 3,
      availability: "available",
    },
    {
      lessonIndex: 4,
      availability: "available",
    },
    {
      lessonIndex: 5,
      availability: "available",
    },
    {
      lessonIndex: 6,
      availability: "available",
    },
    {
      lessonIndex: 7,
      availability: "available",
    },
    {
      lessonIndex: 8,
      availability: "available",
    },
  ],

  //workingDaysCount здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};
