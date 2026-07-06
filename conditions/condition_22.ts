/**
 * Первая половина дня, не ставить 1-2пары в понедельник.
 */
const condition_22: SimpleCondition = {
  /**
   * Запрещаем понедельник
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
   * Здесь разрешенные пары не влияют, дальше влияет сложное условие  
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
      availability: "unavailable",
    },
    {
      lessonIndex: 5,
      availability: "unavailable",
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
   * В сложном условии во времени задаем, что во всех днях все пары разрешены,
   * но в пн ставим, что первые две не доступны
   */
  complexConditions: [
    {
      name: "Условия 1",
      scope: {
        subject: null,
        lessonTypes: null,
        studyGroups: null,
        
        dateStart: "",
        dateEnd: ""
      },

      time: {

        availability: [
          // day 1: 3..8 available, 1..2 unavailable
          { dayIndex: 1, lessonIndex: 1, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 2, type: "unavailable" },
          { dayIndex: 1, lessonIndex: 3, type: "available" },
          { dayIndex: 1, lessonIndex: 4, type: "available" },
          { dayIndex: 1, lessonIndex: 5, type: "available" },
          { dayIndex: 1, lessonIndex: 6, type: "available" },
          { dayIndex: 1, lessonIndex: 7, type: "available" },
          { dayIndex: 1, lessonIndex: 8, type: "available" },
          // day 2..6: all 1..8 available
          { dayIndex: 2, lessonIndex: 1, type: "available" },
          { dayIndex: 2, lessonIndex: 2, type: "available" },
          { dayIndex: 2, lessonIndex: 3, type: "available" },
          { dayIndex: 2, lessonIndex: 4, type: "available" },
          { dayIndex: 2, lessonIndex: 5, type: "available" },
          { dayIndex: 2, lessonIndex: 6, type: "available" },
          { dayIndex: 2, lessonIndex: 7, type: "available" },
          { dayIndex: 2, lessonIndex: 8, type: "available" },
          { dayIndex: 3, lessonIndex: 1, type: "available" },
          { dayIndex: 3, lessonIndex: 2, type: "available" },
          { dayIndex: 3, lessonIndex: 3, type: "available" },
          { dayIndex: 3, lessonIndex: 4, type: "available" },
          { dayIndex: 3, lessonIndex: 5, type: "available" },
          { dayIndex: 3, lessonIndex: 6, type: "available" },
          { dayIndex: 3, lessonIndex: 7, type: "available" },
          { dayIndex: 3, lessonIndex: 8, type: "available" },
          { dayIndex: 4, lessonIndex: 1, type: "available" },
          { dayIndex: 4, lessonIndex: 2, type: "available" },
          { dayIndex: 4, lessonIndex: 3, type: "available" },
          { dayIndex: 4, lessonIndex: 4, type: "available" },
          { dayIndex: 4, lessonIndex: 5, type: "available" },
          { dayIndex: 4, lessonIndex: 6, type: "available" },
          { dayIndex: 4, lessonIndex: 7, type: "available" },
          { dayIndex: 4, lessonIndex: 8, type: "available" },
          { dayIndex: 5, lessonIndex: 1, type: "available" },
          { dayIndex: 5, lessonIndex: 2, type: "available" },
          { dayIndex: 5, lessonIndex: 3, type: "available" },
          { dayIndex: 5, lessonIndex: 4, type: "available" },
          { dayIndex: 5, lessonIndex: 5, type: "available" },
          { dayIndex: 5, lessonIndex: 6, type: "available" },
          { dayIndex: 5, lessonIndex: 7, type: "available" },
          { dayIndex: 5, lessonIndex: 8, type: "available" },
          { dayIndex: 6, lessonIndex: 1, type: "available" },
          { dayIndex: 6, lessonIndex: 2, type: "available" },
          { dayIndex: 6, lessonIndex: 3, type: "available" },
          { dayIndex: 6, lessonIndex: 4, type: "available" },
          { dayIndex: 6, lessonIndex: 5, type: "available" },
          { dayIndex: 6, lessonIndex: 6, type: "available" },
          { dayIndex: 6, lessonIndex: 7, type: "available" },
          { dayIndex: 6, lessonIndex: 8, type: "available" },
        ],

        lessonAlternation: "usual",
        lessonConsecutiveness: "not_important",
       
        oncePerTwoWeeks: false,
        sameLessonsConsequtive: false
      }
    }
  ],

  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};