/**
 * Первая половина дня, не ставить 1-2пары в понедельник.
 */
const condition_22: SimpleCondition = {
  /**
   * Запрещаем понедельник
   */
  working_days: [
    {
      //Пн
      day: 1,
      availability: Availability.unavailable,
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
   * Здесь разрешенные пары не влияют, дальше влияет сложное условие  
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
      availability: Availability.unavailable,
    },
    {
      lesson_index: 5,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 6,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 7,
      availability: Availability.unavailable,
    },
    {
      lesson_index: 8,
      availability: Availability.unavailable,
    },
  ],

  //working_days_count здесь не указан - значит любое кол-во дней

  /**
   * В сложном условии во времени задаем, что во всех днях все пары разрешены,
   * но в пн ставим, что первые две не доступны
   */
  complex_conditions: [
    {
      name: "Условия 1",
      scope: {
        subject: null,
        lesson_types: null,
        study_groups: null,
        
        date_start: "",
        date_end: ""
      },

      time: {

        intervals: [
          {
            day: 1,
            start: 3,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 2,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 3,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 4,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 5,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
          {
            day: 6,
            start: 1,
            end: 8,
            availablity: Availability.available,
          },
        ],

        once_per_two_weeks: false,
        same_lessons_consequtive: false
      }
    }
  ],

  /**
   * Дефолтное значение
   */
  lesson_limit: 8,
};