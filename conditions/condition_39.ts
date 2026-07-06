/**
 * Желательно все группы и все предметы в один день, не важно в какой. Группы желательно объеденить.
 *
 * Это опять же "в один день" можно решить, через настройку простого условия, но только потому, что это распрострняется
 * на все предметы, но когда дело доходит до конретных предметов, групп занятий или типов занятий такое уже не сделать.
 */
const condition_39: SimpleCondition = {
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

  workingDaysCount: 1,

  /**
   * Дальше задаем объединение групп, указываем в области определние одно направление например
   * а дальше в связи с другими занятиями и группами другие направления.
   */
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

          // ... Тут как бы какое-нибудь одно направление
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
                studyDirectionId: 1
              },
              // ... А дальше группы с других направлений
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