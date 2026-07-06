/**
 * объединить все потоки
 */
const condition_20: SimpleCondition = {
  //Здесь тоже основная работа в сложном условии

  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        lessonTypes: null,

        studyGroups: [
          {
            id: 1,
            name: "ИТ11-БО",
            studyUnitId: 1,
            studyDirectionId: 1
          },
          // ... все группы какого-то одного потока, просто для старта
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
                id: 3,
                name: "ИВТ-11БО",
                studyUnitId: 1,
                studyDirectionId: 2,
              },
              // ... все группы остальных потоков
            ],
          },
        },
      ],
    },
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