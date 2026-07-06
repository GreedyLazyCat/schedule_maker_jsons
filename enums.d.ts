declare global {
  // ----------- < Enums > -----------

  /**
   * Тип учебной единицы
   */
  type StudyUnitType = "semester" | "quarter" | "trimester";

  /**
   * Доступность.
   * Три состояния: доступно / доступно но нежелательно / недоступно.
   */
  type Availability = "available" | "undesirable" | "unavailable";

  /**
   * Тип чередования занятия.
   * numerator - числитель
   * denominator - знаменатель
   * usual - без чередования (всегда)
   */
  type LessonAlternationType = "numerator" | "denominator" | "usual";

  /**
   * Тип компоновки пар (подряд / не подряд / не важно).
   */
  type LessonConsecutiveness =
    | "consecutive"
    | "not_consecutive"
    | "not_important";

  /**
   * Расположение пары в дне: первой / последней.
   */
  type LessonPlacement = "first_lesson" | "last_lesson";

  /**
   * Статус генерации расписания.
   */
  type ScheduleGenerationStatus = "pending" | "generated" | "failed";

  // ----------- </ Enums > -----------
}

export {};