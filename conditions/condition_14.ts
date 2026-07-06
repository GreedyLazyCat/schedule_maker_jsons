/**
 * Курс по выбору, поэтому пары для 2 потоков можно объединить. Лекции и практики можно ставить в любом порядке
 */
const condition_14: SimpleCondition = {
  //Начну сразу со сложного условия

  complexConditions: [
    {
      name: "Условие",
      scope: {
        subject: {
          id: 26,
          name: "Какой-то курс по выбору",
          studyUnitId: 1,
          electiveCourseGroupId: null,
        },
        studyGroups: [
          {
            id: 1,
            name: "ИТ-41Бо",
            studyUnitId: 1,
            studyDirectionId: 1,
          },
          // .... и далее все группы потока или направления 1
        ],

        lessonTypes: null,

        dateStart: "",
        dateEnd: "",
      },

      /**
       * Здесь настраиваем обЪединение групп
       */
      lessonConnections: [
        {
          type: "unite_groups",
          connectionSubjects: {
            studyGroups: [
              {
                id: 32,
                name: "ИВТ-42БО",
                studyUnitId: 2,
                studyDirectionId: 2,
              },
              // ... и далее все группы потока или направления 2, занятия которых надо объеденить с занятиями групп направления 1
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