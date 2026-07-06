

/**
 * Примечание: один раз в две недели
 * тут не совсем понимаю к чему оно применяется, в time у ComplexCondition
 * указано oncePerTwoWeeks true, но нужно знать область применения такого условия.
 * Если это конкретный предмет, у конкретных групп, конкретного типа, то это нужно указать.
 * В моем случае сейчас по всем предметам, у всех групп, всех типов занятия раз в две недели)
 */
const condition_6: SimpleCondition = {
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

  complexConditions: [
    {
      name: "Условие",

      scope: {
        /**
         * null - значит предмет не важен
         */
        subject: null,

        /**
         * null - распространяется на все типы
         */
        lessonTypes: null,

        /**
         * null - на все группы
         */
        studyGroups: null,

        dateStart: "",
        dateEnd: "",
      },

      time: {
        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
        /**
         * Ставим флаг, что один раз в две недели
         */
        oncePerTwoWeeks: true,
        sameLessonsConsequtive: false,
      },
    },
  ],
};