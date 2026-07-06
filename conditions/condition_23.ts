/**
 * Среда, числитель 3,4,5 пары
 *
 * Тут пока кажется мне, что прям числитель указать нельзя, не предусмотрено,
 * можно укзать только занятие раз в две недели, что по смыслу и есть это, только
 * это может быть и знаменатель
 */
const condition_23: SimpleCondition = {
  complexConditions: [
    {
      name: "Услоик",
      scope: {
        subject: null,
        studyGroups: null,
        lessonTypes: null,

        dateStart: "",
        dateEnd: "",
      },

      /**
       * Задаем раз в две недели
       */
      time: {
        oncePerTwoWeeks: true,
        sameLessonsConsequtive: false,

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
      },
    },
  ],

  /**
   * Разрешаем только среду
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
      availability: "unavailable",
    },
    {
      //Ср
      day: 3,
      availability: "available",
    },
    {
      //Чт
      day: 4,
      availability: "unavailable",
    },
    {
      //Пт
      day: 5,
      availability: "unavailable",
    },
    {
      //Сб
      day: 6,
      availability: "unavailable",
    },
  ],

  /**
   * Разрешаем 3, 4, 5 пары
   */
  availableLessons: [
    {
      lessonIndex: 1,
      availability: "unavailable",
    },
    {
      lessonIndex: 2,
      availability: "unavailable",
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
      availability: "unavailable",
    },
    {
      lessonIndex: 7,
      availability: "unavailable",
    },
    {
      lessonIndex: 8,
      availability: "unavailable",
    },
  ],

  //workingDaysCount здесь не указан - значит любое кол-во дней

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};