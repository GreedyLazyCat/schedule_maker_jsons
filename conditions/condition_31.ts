/**
 * Обязательно — меловая доска. Желательно: практики в один день. Желательно: первая половина дня (до 3 пары включительно).
 */
const condition_31: SimpleCondition = {
  /**
   * Разрешаем все дни
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.available,
    },
    {
      //Вт
      day: 2,
      availability: Availability.available,
    },
    {
      //Ср
      day: 3,
      availability: Availability.available,
    },
    {
      //Чт
      day: 4,
      availability: Availability.available,
    },
    {
      //Пт
      day: 5,
      availability: Availability.available,
    },
    {
      //Сб
      day: 6,
      availability: Availability.available,
    },
  ],

  /**
   * "Желательно: первая половина дня" истрактую так, что все пары после третьей "Возможны, но не желательны"
   */
  available_lessons: [
    {
      lesson_index: 1,
      availability: Availability.available,
    },
    {
      lesson_index: 2,
      availability: Availability.available,
    },
    {
      lesson_index: 3,
      availability: Availability.available,
    },
    {
      lesson_index: 4,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 5,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 6,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 7,
      availability: Availability.undesirable,
    },
    {
      lesson_index: 8,
      availability: Availability.undesirable,
    },
  ],

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * В сложном условии задам только меловую доску,
   * про Практики в один день не задать.
   */
  complex_conditions: [
    {
      name: "Условие 1",
      scope: {
        subject: null, // Или тут конкретный предмет, я не знаю
        lesson_types: null,
        study_groups: null,

        date_start: "",
        date_end: "",
      },

      /**
       * В требуемом оборудовании просим меловую доску
       */
      required_equipment: {
        classroom_equipment: [
          {
            equipment_unit: {
              id: 1,
              name: "меловая доска",
              study_unit_id: 1,
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
  lesson_limit: 8,
};