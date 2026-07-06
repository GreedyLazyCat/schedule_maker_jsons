/**
 * Лекцию просьба 1 пару в неделю поставить, последней парой для студентов в выбранный день Практику
 * просьба поставить 1 пару в неделю. Практику обе группы в 1 день
 * по возможности, если требуется - можно объединить их в одну.
 *
 * Что одна пара в неделю не задать (вернее можно, но не в сложном условии, тут нужно костылем
 * ограничение, что максимум одна пара в день и один рабочий день, но это в простом условии и конкретно на лекции
 * это не задать)
 */
const condition_25: SimpleCondition = {
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

        dateEnd: "",
        dateStart: "",
      },

      time: {
        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        lessonAmount: 1,

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,
      },
    },

    //Задаем пракики в выбранный день, допустим выбранный день был Пн
    {
      name: "Условие 2",
      scope: {
        subject: null,
        studyGroups: [
          {
            id: 1,
            name: "ИТ-41БО",
            studyDirectionId: 1,
            studyUnitId: 1,
          },
        ],
        lessonTypes: [
          {
            id: 1,
            name: "practice",
          },
        ],

        dateEnd: "",
        dateStart: "",
      },

      time: {
        lessonPlacement: [
          {
            day: 1,
            placement: "last_lesson",
          },
        ],

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        lessonAmount: 1,

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,
      },

      /**
       * Объединяем со второй группой
       */
      lessonConnections: [
        {
          type: "unite_groups",
          connectionSubjects: {
            studyGroups: [
              {
                id: 1,
                name: "ИТ-42БО",
                studyDirectionId: 1,
                studyUnitId: 1,
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
