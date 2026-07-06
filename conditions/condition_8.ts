/**
 * Объединить Предмет 1 и Предмет 2 у разных направлений вместе чтобы ходили и на лекции, и на  практику
 */
const condition_8: SimpleCondition = {
  // ---- Для простого условия все по стандарту начну сразу со сложного

  complexConditions: [
    {
      name: "Условие На объединение лекций",
      scope: {
        subject: {
          id: 1,
          name: "Предмет 1",
          studyUnitId: 1,
          electiveCourseGroupId: null,
        },

        studyGroups: [
          {
            id: 1,
            name: "ИТ-41БО",
            studyUnitId: 1,
            studyDirectionId: 1,
          },
          {
            id: 2,
            name: "ИВТ-41БО",
            studyUnitId: 1,
            studyDirectionId: 2,
          },
          // .... Допустим тут все необходимые группы этого предмета с одних направлений
          // Или вообще стоит null указать, чтобы на все группы распространялось
        ],

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
          type: "subject_union",
          connectionSubjects: {
            subject: {
              id: 23,
              name: "Предмет 2",
              studyUnitId: 2,
              electiveCourseGroupId: null,
            },
            studyGroups: [
              {
                whatGroups: null,
                whichGroups: [
                  {
                    id: 1,
                    name: "ПИЭ-41БО",
                    studyUnitId: 2,
                    studyDirectionId: 3,
                  },
                  // И Все остальные группы разных направлений предмета 2
                ],
              },
            ],
            lessonType: {
              id: 1,
              name: "lecture",
            },
          },
        },
      ],
    },

    {
      name: "Условие На объединение практик",
      scope: {
        subject: {
          id: 1,
          name: "Предмет 1",
          studyUnitId: 1,
          electiveCourseGroupId: null,
        },

        studyGroups: [
          {
            id: 1,
            name: "ИТ-41БО",
            studyUnitId: 1,
            studyDirectionId: 1,
          },
          {
            id: 2,
            name: "ИВТ-41БО",
            studyUnitId: 1,
            studyDirectionId: 2,
          },
          // .... Допустим тут все необходимые группы этого предмета с одних направлений
          // Или вообще стоит null указать, чтобы на все группы распространялось
        ],

        lessonTypes: [
          {
            id: 1,
            name: "practice",
          },
        ],

        dateStart: "",
        dateEnd: "",
      },

      lessonConnections: [
        {
          type: "subject_union",
          connectionSubjects: {
            subject: {
              id: 23,
              name: "Предмет 2",
              studyUnitId: 2,
              electiveCourseGroupId: null,
            },
            studyGroups: [
              {
                whatGroups: null,
                whichGroups: [
                  {
                    id: 1,
                    name: "ПИЭ-41БО",
                    studyUnitId: 2,
                    studyDirectionId: 3,
                  },
                  // И Все остальные группы разных направлений предмета 2
                ],
              },
            ],
            lessonType: {
              id: 1,
              name: "practice",
            },
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
