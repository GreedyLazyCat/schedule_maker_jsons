/**
 * Очень желательно практику (1 пара в неделю) у обеих групп в один день (идеально - подряд идущие пары)
 *
 *
 * 1 пара в неделю не задать
 */
const condition_28: SimpleCondition = {
  complexConditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null,
        studyGroups: [
          {
            id: 1,
            name: "ИВТ-41БО",
            studyUnitId: 1,
            studyDirectionId: 1,
          },
        ],

        lessonTypes: [
          {
            id: 234,
            name: "practice",
          },
        ],

        dateStart: "",
        dateEnd: "",
      },

      time: {
        oncePerTwoWeeks: false,
        sameLessonsConsequtive: true,

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
      },

      lessonConnections: [
        {
          type: "the_same_day_as",
          connectionSubjects: {
            subject: null,
            studyGroups: [
              {
                id: 2,
                name: "ИВТ-42БО",
                studyUnitId: 1,
                studyDirectionId: 2,
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
