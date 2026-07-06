/**
 * По возможности совместно с Направление 3
 */
const condition_38: SimpleCondition = {
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

  complexConditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        lessonTypes: null,
        studyGroups: [
          {
            id: 1,
            name: "ИТ41-БО",
            studyUnitId: 1,
            studyDirectionId: 1
          },

          // ... Далее все группы, которые надо будет объенить далее с Направлеием 3
        ],

        dateStart: "",
        dateEnd: "",
      },
      lessonConnections: [
        {
          type: "unite_groups",
          connectionSubjects: {
            studyGroups: [
              {
                id: 1,
                name: "ИВТ-41БО",
                studyUnitId: 1,
                studyDirectionId: 2
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
  lessonLimit: 8,
};