/**
 * объединить все потоки; 1 пара в неделю до середины семестра
 */
const condition_21: SimpleCondition = {
  //Здесь тоже основная работа в сложном условии

  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        lessonTypes: null,

        studyGroups: null,

        dateStart: "",

        /**
         * Задаем дату конца действия условия как середину семестра
         */
        dateEnd: "",
      },

      time: {
        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",

        lessonAmount: 1,

        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false,
      },
    },
    /**
     * В этом условии объеденим потоки
     */
    {
      name: "Условие 2",
      scope: {
        subject: null,
        lessonTypes: null,

        studyGroups: [
          {
            id: 1,
            name: "ИВТ-41Бо",
            studyDirectionId: 1,
            studyUnitId: 1,
          },

          // Все группы какого-то направления
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
                id: 2,
                name: "ИТ-41Бо",
                studyDirectionId: 2,
                studyUnitId: 2,
              },
              //Тут все остальные направления
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

  /**
   * Ставим один рабочий день
   */
  workingDaysCount: 1,

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};
