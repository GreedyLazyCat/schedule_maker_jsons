/**
 * Лекции и лабы в один день, лучше с утра прошу поставить занятия компактно в любой день, кроме понедельника
 */
const condition_9: SimpleCondition = {
  /**
   * Разрешаем все дни, кроме понедельника
   */
  workingDays: [
    {
      //Пн
      day: 1,
      availability: "unavailable",
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
   * Допустим, что первые две пары - это с утра, поэтому их разрешаем,
   * остальное ставим нежелательно.
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
      availability: "undesirable",
    },
    {
      lessonIndex: 4,
      availability: "undesirable",
    },
    {
      lessonIndex: 5,
      availability: "undesirable",
    },
    {
      lessonIndex: 6,
      availability: "undesirable",
    },
    {
      lessonIndex: 7,
      availability: "undesirable",
    },
    {
      lessonIndex: 8,
      availability: "undesirable",
    },
  ],

  workingDaysCount: 1,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,

  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: null,

        studyGroups: null,
        lessonTypes: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        dateStart: "",
        dateEnd: "",
      },

      lessonConnections: [
        {
          type: "the_same_day_as",
          connectionSubjects: {
            subject: null,
            studyGroups: null,
            lessonType: {
              id: 2,
              name: "practice",
            },
          },
        },
      ],
    },
  ],
};
