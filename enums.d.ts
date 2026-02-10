declare global {
  /**
   * Тип учебной еденицы
   */
  enum StudyUnitType {
    semester = "semester",
    quarter = "quarter",
    trimseter = "trimester",
  }

  /**
   * Тип чередования занятия, числитель, знаменатель или всегда
   */
  enum LessonAlternationType {
    /**
     * Числитель
     */
    numerator = "numerator",

    /**
     * Знаменатель
     */
    denominator = "denominator",

    /**
     * Простановка как обычно, без числителей и знаменталей
     */
    usual = "usual",
  }

  /**
   * Тип компоновки пар
   */
  enum LessonConsecutiveness {
    /**
     * Подряд
     */
    consecutive = "consecutive",

    /**
     * НЕ подряд
     */
    not_consecutive = "not_consecutive",

    /**
     * Не важно
     */
    not_important = "not_important",
  }

  enum LessonPlacement {
    /**
     * Первой парой
     */
    first_lesson = "first_lesson",

    /**
     * Последней парой
     */
    last_lesson = "last_lesson",
  }

  /**
   * Доступность дня
   */
  enum Availability {
    /**
     * Полностью доступен
     */
    available = "available",
    /**
     * Доступен, но не желателен
     */
    undesirable = "undesirable",
    /**
     * Полностью недоступен
     */
    unavailable = "unavailable",
  }

  /**
   * Enum для дней
   */
  enum Days {
    /**
     * Понедельник
     */
    Mo = "Mo",
    /**
     * Вторник
     */
    Tu = "Tu",
    /**
     * Среда
     */
    We = "We",
    /**
     * Четверг
     */
    Th = "Th",
    /**
     * Пятница
     */
    Fr = "Fr",
    /**
     * Суббота
     */
    Sa = "Sa",
  }
}

export {};
