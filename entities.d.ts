declare global {
  // ----------- < Сущности > -----------

  /**
   * Учебная единица, для которой генерируется расписание.
   */
  interface StudyUnit {
    id: number;
    name: string;
    type: StudyUnitType;
    /**
     * Дата начала учебной единицы в ISO формате
     */
    startDate: string;
    /**
     * Дата конца учебной единицы в ISO формате
     */
    endDate: string;
    /**
     * Id пользователя-владельца
     */
    ownerId: string;
    /**
     * Длительность занятий (в минутах) по дням, индексы 0..5
     * 0 - понедельник ... 5 - суббота
     */
    lessonDuration: number[];
    /**
     * Максимально возможное количество занятий по дням (0..5)
     */
    maxLessonAmount: number[];
    /**
     * Время начала занятий по дням (0..5) в формате "HH:mm:ss"
     */
    lessonStartTime: string[];
    /**
     * Наличие нулевого занятия по дням (0..5)
     */
    zeroLesson: boolean[];
    createdAt: Date | null;
    archived: boolean;
    pinned: boolean;
  }

  /**
   * Преподаватель/учитель учебного заведения.
   */
  interface Teacher {
    id: number;
    firstName: string;
    lastName: string;
    patronymic?: string | null;
    commentary?: string | null;
    studyUnitId: number;
    /**
     * Полное имя, сгенерированное в БД как объединение фамилии, имени и отчества.
     */
    fullName: string | null;
  }

  /**
   * Тип занятия по предмету (лекция, практика и т.д.).
   * Глобален для всего учебного заведения (не привязан к study_unit).
   */
  interface LessonType {
    id: number;
    name: string;
  }

  /**
   * Предмет учебного заведения (базовое представление, используется в
   * назначениях, связях занятий, варианте расписания).
   */
  interface Subject {
    id: number;
    name: string;
    /**
     * Id группы элективных курсов, к которой относится предмет.
     * null - обычный предмет, не элективный.
     */
    electiveCourseGroupId: number | null;
    studyUnitId: number;
  }

  /**
   * Учебная группа.
   */
  interface StudyGroup {
    id: number;
    name: string;
    studyUnitId: number;
    studyDirectionId: number;
  }

  /**
   * Учебное направление.
   */
  interface StudyDirection {
    id: number;
    name: string;
    studyUnitId: number;
  }

  /**
   * Единица оборудования, возможная в учебном заведении.
   */
  interface EquipmentUnit {
    id: number;
    name: string;
    studyUnitId: number;
  }

  /**
   * Аудитория (базовое представление, используется в связях, требованиях
   * оборудования и в варианте расписания).
   */
  interface Classroom {
    id: number;
    number: string;
    studyUnitId: number;
    capacity: number;
  }

  /**
   * Доступность аудитории на конкретное занятие конкретного дня.
   */
  interface ClassroomAvailability {
    id: number;
    type: Availability;
    /**
     * Номер дня недели (1..6). 1 — понедельник, 6 — суббота.
     */
    dayIndex: number;
    /**
     * Порядковый номер занятия (0..8).
     * 0 — нулевая пара (если включена для этого дня), иначе 1..N.
     */
    lessonIndex: number;
    classroomId: number;
  }

  /**
   * Оборудование конкретной аудитории (id и name берутся из equipmentUnit,
   * count - количество в аудитории).
   */
  interface ClassroomEquipment {
    classroomId: number;
    /**
     * Id единицы оборудования (из таблицы equipmentUnit)
     */
    id: number;
    count: number;
    /**
     * Название оборудования (из таблицы equipmentUnit)
     */
    name: string;
  }

  /**
   * Полное представление предмета, передаваемое в запросе генерации.
   * Содержит группы предмета и количества занятий по типам.
   */
  interface SubjectFull extends Subject {
    ownerId: string | null;
    /**
     * Группы, в которых преподается этот предмет.
     */
    groups: StudyGroup[];
    /**
     * Количество занятий каждого типа по этому предмету.
     * id и name - ссылка на тип занятия (объявлены nullable в типах backend и
     * frontend; на практике из БД lesson_type.id и lesson_type.name - notNull,
     * поэтому фактически null не приходят).
     */
    lessonTypeAmounts: {
      id: number | null;
      name: string | null;
      amount: number;
    }[];
  }

  /**
   * Полное представление аудитории, передаваемое в запросе генерации.
   * Содержит доступность по дням/занятиям и список оборудования.
   */
  interface ClassroomFull extends Classroom {
    ownerId: string | null;
    /**
     * Доступность аудитории: для каждой пары каждого дня.
     * groups - группы, для которых доступность применяется (only).
     */
    availability: {
      availability: ClassroomAvailability;
      groups: StudyGroup[];
    }[];
    /**
     * Оборудование аудитории.
     */
    equipment: ClassroomEquipment[];
  }

  /**
   * Назначение: набор преподавателей, ведущих набор предметов (по набору типов
   * занятий) у набора учебных групп.
   * В отличие от старой модели, поддерживает несколько преподавателей.
   */
  interface AssignmentFull {
    id: number;
    studyUnitId: number;
    ownerId: string | null;
    /**
     * Типы занятий, которые ведутся по этому назначению
     */
    lessonTypes: LessonType[];
    /**
     * Предметы, ведущиеся по этому назначению
     */
    subjects: Subject[];
    /**
     * Преподаватели (один или несколько), ведущие это назначение
     */
    teachers: Teacher[];
    /**
     * Учебные группы, у которых ведется это назначение
     */
    studyGroups: StudyGroup[];
  }

  // ----------- </ Сущности > -----------
}

export {};