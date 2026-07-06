/**
 * Пара одновременно у двух направлений, схлопнуть их в одну, практика и лекция смешанные будут, 1 пара в неделю
 *
 * 1 пара в неделю не задать.
 */
const condition_27: SimpleCondition = {
  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        studyGroups: [
          {
            id: 1,
            name: "ИТ-41Бо",
            studyUnitId: 1,
            studyDirectionId: 1
          },

          // ... И далее все группы Направления 1
        ],

        lessonTypes: [
          {
            id: 1,
            name: "lecture",
          },
          {
            id: 2,
            name: "practice",
          },
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
                name: "ИВТ-41Бо",
                studyUnitId: 1,
                studyDirectionId: 2,
              },
            ],
            // .... и далее все группы Направление 2
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