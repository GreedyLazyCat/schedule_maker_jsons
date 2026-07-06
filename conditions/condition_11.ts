/**
 * Для Направление 1 и Направление 2 занятия: 1 раз в 2 недели - лекции. Следующее занятие - практика.
 * Лекции для всего потока. Практики - занятия по группам. Для Направление 3 - как обычно.
 * Просьба более 4-х пар в день не назначать. Занятия уместить в 2 дня. Без субботы.
 */
const condition_11: SimpleCondition = {
  /**
   * Разрешаем все дни, кроме субботы
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
      availability: "unavailable",
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
   * Уместить в два дня
   */
  workingDaysCount: 2,

  /**
   * Не более 4ех занятий в день
   */
  lessonLimit: 4,

  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: null,
        studyGroups: [
          {
            id: 1,
            name: "ИТ-41",
            studyDirectionId: 1,
            studyUnitId: 1
          },
          // Группы направления 1
          // потом все группы направления два
        ],
        lessonTypes: [
          {
            id: 1,
            name: "lecture",
          },
        ],

        dateEnd: "",
        dateStart: "",
      },

      /**
       * Указываем, что занятия по раз в две недели. (получается по лекциям)
       */
      time: {
        oncePerTwoWeeks: true,
        sameLessonsConsequtive: false,
        
        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
      },

      /**
       * В связи с другими занятиями указываем, что чередуем с практиками
       */
      lessonConnections: [
        {
          type: "alternate_with",
          connectionSubjects: {
            subject: null,
            studyGroups: null,
            lessonType: 
              {
                id: 1,
                name: "practice",
              },
          },
        },
      ],
    },
  ],
};