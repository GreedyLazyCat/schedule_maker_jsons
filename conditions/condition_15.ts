/**
 * По возможности ставить пары в 210 ауд.
 * Лекции и практики по предмет 3 ставить вместе в один день, и так же по предмет 2.
 */
const condition_15: SimpleCondition = {
  //У простого условия все стандарт, все разрешено, начну с сложного

  complexConditions: [
    // В этом условии ставим, что пары проводим в 210
    {
      name: "Условие 1",
      scope: {
        //Тут думаю должно быть для всех предметов групп и типов занятий
        subject: null,
        studyGroups: null,
        lessonTypes: null,

        dateStart: "",
        dateEnd: "",
      },

      requiredEquipment: {
        classrooms: [
          {
            id: 23,
            number: "201",
            studyUnitId: 1,
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
          studyUnitId: 1,
          electiveCourseGroupId: null,
        },
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

      /**
       * Пишем связь, что для лекци предмета 3, всех групп ставим в один день с практиками (предмет и группы беруться из области примиенения условия)
       */
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
    {
      name: "Условие 3",
      scope: {
        subject: {
          id: 28,
          name: "Предмет 2",
          studyUnitId: 1,
          electiveCourseGroupId: null,
        },
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
