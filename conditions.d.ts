declare global {
  // ----------- < Пожелания (Wish) > -----------

  /**
   * Пожелание преподавателя. Обертывает SimpleCondition с метаданными
   * (id пожелания, teacherId, studyUnitId, ownerId) и полным объектом teacher.
   */
  interface WishFull {
    id: number;
    teacherId: number;
    studyUnitId: number;
    ownerId: string;
    /**
     * Полный объект преподавателя, к которому относится пожелание
     */
    teacher: Teacher;
    /**
     * Условия преподавателя. Хранится в БД как jsonb.
     */
    condition: SimpleCondition;
  }

  /**
   * Простое (общее) условие преподавателя, применяемое ко всему расписанию
   * преподавателя в рамках выбранного периода.
   */
  interface SimpleCondition {
    /**
     * Количество рабочих дней в неделю (1..6).
     * Если не указано - любое.
     */
    workingDaysCount?: number;

    /**
     * Максимальное количество занятий, допустимое назначить преподавателю
     * в один день (0..8).
     */
    lessonLimit: number;

    /**
     * Список доступности каждого дня недели.
     */
    workingDays: {
      /**
       * Номер дня (1..6)
       */
      day: number;
      availability: Availability;
    }[];

    /**
     * Список доступности конкретных временных слотов (пар) в течение дня.
     */
    availableLessons: {
      /**
       * Порядковый номер занятия (0..8).
       * 0 — нулевая пара (если включена для этого дня), иначе 1..N.
       */
      lessonIndex: number;
      availability: Availability;
    }[];

    /**
     * true - рабочие дни должны идти подряд
     * false - НЕ подряд
     * undefined - не важно
     */
    consequitiveWorkingDays?: boolean;

    /**
     * true - нужен проектор
     * false - проектор не нужен
     * undefined - не важно
     */
    projectorNeeded?: boolean;

    /**
     * Список сложных (контекстных) условий
     */
    complexConditions?: ComplexCondition[];
  }

  /**
   * Сложное (контекстное) условие.
   *
   * Логически разделено на область определения (scope) и секцию ограничений
   * (time / requiredEquipment / lessonConnections / connectedLessonGroups).
   *
   * Архитектурное правило: блок connectedLessonGroups несовместим с блоками
   * time, requiredEquipment и lessonConnections.
   */
  interface ComplexCondition {
    /**
     * Название условия
     */
    name: string;

    /**
     * Область применения условия
     */
    scope: {
      /**
       * Предмет. null - все предметы.
       */
      subject: Subject | null;
      /**
       * Типы занятий, на которые распространяется условие. null - все типы.
       */
      lessonTypes: LessonType[] | null;
      /**
       * Учебные группы, на которые распространяется условие. null - все группы.
       */
      studyGroups: StudyGroup[] | null;
      /**
       * Начало временного интервала в ISO формате
       */
      dateStart: string;
      /**
       * Конец временного интервала в ISO формате
       */
      dateEnd: string;
    };

    /**
     * Настройки временного расположения и нагрузки.
     * Несовместим с connectedLessonGroups.
     */
    time?: {
      /**
       * Доступность слотов для размещения занятий (день + номер пары + тип
       * доступности). Frontend-emitted jsonb shape (см.
       * frontend/app/features/condition/schemas/time.schema.ts и
       * useConditionAvailability.ts).
       */
      availability?: {
        /**
         * Номер дня недели (1..6). 1 — понедельник, 6 — суббота.
         */
        dayIndex: number;
        /**
         * Порядковый номер занятия (0..8).
         * 0 — нулевая пара (если включена для этого дня), иначе 1..N.
         */
        lessonIndex: number;
        /**
         * Тип доступности слота.
         */
        type: Availability;
      }[];
      /**
       * Ограничения количества занятий по дням.
       */
      lessonDayLimits?: {
        /**
         * Номер дня недели (1..6). 1 — понедельник, 6 — суббота.
         */
        day: number;
        sign: "=" | "<=";
        limit: number;
      }[];
      /**
       * Чередование занятий (числитель / знаменатель / всегда).
       */
      lessonAlternation: LessonAlternationType;
      /**
       * Суммарный лимит занятий на одну учебную неделю.
       * Имеет смысл только если в scope указан предмет.
       * undefined - не учитывается.
       */
      lessonAmount?: number;
      /**
       * Как компоновать пары.
       */
      lessonConsecutiveness: LessonConsecutiveness;
      /**
       * Расположение пар по дням (первой / последней парой).
       */
      lessonPlacement?: {
        /**
         * Номер дня недели (1..6). 1 — понедельник, 6 — суббота.
         */
        day: number;
        placement: LessonPlacement;
      }[];
      /**
       * true - занятия раз в две недели (пропуск одной недели между занятиями).
       */
      oncePerTwoWeeks: boolean;
      /**
       * true - одинаковые занятия ставить подряд.
       */
      sameLessonsConsequtive: boolean;
    };

    /**
     * Требования к аудиториям и оборудованию.
     * Несовместим с connectedLessonGroups.
     */
    requiredEquipment?: {
      /**
       * Жесткий список конкретных аудиторий. Если указан - алгоритм выбирает
       * из них, иначе подбирает по общим требованиям ниже.
       */
      classrooms?: Classroom[];
      /**
       * Требуемая вместительность аудитории (от и более).
       */
      classroomCapacity?: number;
      /**
       * Требуемое оборудование аудитории.
       */
      classroomEquipment?: {
        /**
         * Единица оборудования
         */
        equipmentUnit: EquipmentUnit;
        sign: "=" | "<=";
        count: number;
      }[];
    };

    /**
     * Связи с другими занятиями и группами (полиморфный union по полю type).
     * Несовместим с connectedLessonGroups.
     */
    lessonConnections?: LessonConnection[];

    /**
     * Связанные группы занятий, распределение которых в строго определенные
     * дни и в жестко заданном порядке требуется выполнить.
     * Строго несовместим с time, requiredEquipment и lessonConnections.
     */
    connectedLessonGroups?: {
      /**
       * День (1..6, 1 — понедельник ... 6 — суббота), к которому привязано занятие.
       */
      day: number;
      /**
       * Занятия группы
       */
      lessons: {
        subject: Subject;
        /**
         * Список групп, принадлежащих занятию
         */
        studyGroups: StudyGroup[];
        /**
         * Аудитории, где требуется провести занятие
         */
        classrooms: Classroom[];
        /**
         * Тип занятия
         */
        lessonType: LessonType;
      }[];
    }[];
  }

  // ----------- </ Пожелания (Wish) > -----------
}

export {};