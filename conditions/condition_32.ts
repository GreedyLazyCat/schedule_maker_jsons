/**
 * Обязательно — меловая доска. Практики: в одной группе практику веду я,
 * в двух группах — Преподаватель 17. Желательно: первая половина дня (до 3 пары включительно).
 */
const condition_32: SimpleCondition = {
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
   * "Желательно: первая половина дня" истрактую так, что все пары после третьей "Возможны, но не желательны"
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
      availability: "undesirable",
    },
    {
      lessonIndex: 5,
      availability: "undesirable",
    },
    {
      lessonIndex: 6,
      availability: "undesirable",
    },
    {
      lessonIndex: 7,
      availability: "undesirable",
    },
    {
      lessonIndex: 8,
      availability: "undesirable",
    },
  ],

  //workingDaysCount здесь не указан - значит любое кол-во дней

  /**
   * В сложном условии задам только меловую доску,
   * С практиками такое не задать
   */
  complexConditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null, // Или тут конкретный предмет, я не знаю
        lessonTypes: null,
        studyGroups: null,

        dateStart: "",
        dateEnd: "",
      },

      /**
       * В требуемом оборудовании просим меловую доску
       */
      requiredEquipment: {
        classroomEquipment: [
          {
            equipmentUnit: {
              id: 1,
              name: "меловая доска",
              studyUnitId: 1,
            },
            sign: "=",
            count: 1,
          },
        ],
      },
    },
  ],
  /**
   * Дефолтное значение
   */
  lessonLimit: 8,
};