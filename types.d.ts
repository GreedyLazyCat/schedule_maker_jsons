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
    numerator = "numerator",
    denominator = "denominator",
    always = "always",
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


  // ----------- <СУЩНОСТИ ИЗ БД> -----------
  interface ArchivedStudyUnits {
    study_unit_id: number;
    user_id: string;
  }

  interface Assignment {
    id: number;
    study_unit_id: number;
    teacher_id: number;
  }

  interface AssignmentStudyGroups {
    study_group_id: number;
    assignment_id: number;
  }

  interface AssignmentSubjects {
    assignment_id: number;
    subject_id: number;
  }

  interface AssignmentTypes {
    assignment_id: number;
    lesson_type_id: number;
  }

  interface Classroom {
    id: number;
    capacity: number;
    number: string;
    study_unit_id: number;
  }

  interface ClassroomAvailability {
    id: number;
    day_index: number;
    lesson_index: number;
    type: string;
    classroom_id: number;
  }

  interface ClassroomAvailabilityGroups {
    study_group_id: number;
    classroom_availability_id: number;
  }

  interface ClassroomEquipment {
    classroom_id: number;
    equipment_unit_id: number;
    count: number;
    study_unit_id: number;
  }

  interface ElectiveCourseGroup {
    id: number;
  }

  interface ElectiveCourseGroupSubjects {
    elective_course_group_id: number;
    subject_id: number;
  }

  interface EquipmentUnit {
    id: number;
    name: any; // UNKNOWN in DDL
    study_unit_id: number;
  }

  interface LessonType {
    id: number;
    name: string;
  }

  interface LessonTypeAmount {
    subject_id: number;
    lesson_type_id: number;
    amount: number;
  }

  interface PinnedStudyUnits {
    user_id: string;
    study_unit_id: number;
  }

  interface Schedule {
    id: number;
    created_at: Date;
    variant: string;
    study_unit_id: number;
  }

  interface StudyDirection {
    id: number;
    name: string;
    study_unit_id: number;
  }

  interface StudyGroup {
    id: number;
    name: string;
    study_unit_id: number;
    study_direction_id: number;
  }

  interface StudyUnit {
    id: number;
    name: string;
    type: string;
    start_date: Date;
    end_date: Date;
    owner_id: string;
    lesson_duration: number;
    max_lesson_amount: number;
    lesson_start_time: number;
    zero_lesson: number;
    created_at: Date | null;
  }

  interface Subject {
    id: number;
    name: string;
    elective_course: boolean;
    study_unit_id: number;
  }

  interface SubjectGroups {
    study_group_id: number;
    subject_id: number;
  }

  interface Teacher {
    id: number;
    first_name: string;
    last_name: string;
    patronymic: string | null;
    commentary: string | null;
    study_unit_id: number;
  }

  interface User {
    id: string;
    login: string;
    password: string;
  }

  interface Wish {
    id: number;
    teacher_id: number;
    study_unit_id: number;
    condition: string;
  }

  // ----------- </СУЩНОСТИ ИЗ БД> -----------

  // ----------- <JSON для сервера> -----------

  /**
   * Полный JSON объект для запроса на генерацию расписания
   */
  interface ScheduleGenerationQuery {
    /**
     * Описание учебной еденицы, для которой будет сгенерировано описание
     */
    study_unit: {
      id: number;
      /**
       * Название
       */
      name: string;
      /**
       * Тип учебной еденицы
       */
      type: StudyUnitType;
      /**
       * Дата начала учебной еденицы
       */
      start_date: Date;
      /**
       * Дата конца учебной еденицы
       */
      end_date: Date;
      /**
       * Пользователь, которому принадлежит учебная еденица
       */
      owner_id: string;
      /**
       * Длительность занятия по дням
       * [0-5]
       * 0 - пн
       * ...
       * 5 - сб
       */
      lesson_duration: number[];
      /**
       * Максимально возможное количество занятий по дням
       */
      max_lesson_amount: number[];

      /**
       * Время начала занятий по дням
       */
      lessont_start_time: string[];

      /**
       * Наличие нулевого урока по дням
       */
      zero_lesson: boolean[];

      created_at?: Date;
    };

    /**
     * Преподаватели/учителя учебного заведения
     */
    teachers: {
      id: number;
      /**
       * Имя
       */
      first_name: string;
      /**
       * Фамилия
       */
      last_name: string;
      /**
       * Отчество
       */
      patronymic?: string;

      /**
       * Комментарий
       */
      commentary: string;

      study_unit_id: number;
    }[];

    /**
     * Типы занятий по предметам, например, лекция, практика и т.д.
     */
    lesson_types: {
      id: number;
      /**
       * Название типа предмета
       */
      name: string;
    };

    /**
     * Предметы уч заведения
     */
    subjects: {
      id: number;
      /**
       * Назвние предмета
       */
      name: string;
      /**
       * Количество занятий каждого типа
       */
      lesson_type_lesson_amount: {
        /**
         * Тип занятия
         */
        lesson_type_id: number;
        /**
         * Количество занятий
         */
        amount: number;
      }[];
      study_unit_id: number;
    }[];

    /**
     * Общее оборудовоние возможное в уч заведении
     */
    equipment: {
      id: number;
      /**
       * Название оборудования
       */
      name: string;
      study_unit_id: number;
    }[];

    /**
     * Аудитории
     */
    classrooms: {
      id: number;
      /**
       * Вместительность аудитории
       */
      capacity: number;
      /**
       * Номер аудитории
       */
      number: string;
      study_unit_id: number;

      /**
       * Доступность аудитории.
       */
      availability: {
        /**
         * Номер дня 0-5
         */
        day_index: number;
        /**
         * Какое занятие по счету
         */
        lesson_index: number;
        /**
         * Тип доступности
         */
        type: "available" | "not_available";
        /**
         * id групп только для которых доступна/не доступна аудитория
         */
        study_groups?: StudyGroup[];
      }[];

      /**
       * Оборудование аудитоии
       */
      classroom_equipment: {
        /**
         * Id объекта оборудования
         */
        equipment_id: number;
        /**
         * Количество оборудования
         */
        count: number;
      }[];
    }[];

    /**
     * Учебное направление
     */
    study_directions: {
      id: number;
      /**
       * Название учебного направления
       */
      name: string;

      study_unit_id: number;
    };

    /**
     * Учебные группы
     */
    study_groups: {
      id: number;
      /**
       * Название учебной группы
       */
      name: string;

      /**
       * ID направления, к которому относится группа
       */
      study_direction_id: number;

      study_unit_id: number;
    }[];

    /**
     * Назначения, какой преподаватель, у каких групп, какой предмет и какого типа занятия ведет
     */
    assignments: {
      teacher_id: number;

      subject_ids: number[];

      study_group_ids: number[];

      /**
       * Типы предметов(занятий)
       */
      lesson_type_ids: number[];
    }[];

    /**
     * Пожелания преподавателей
     */
    conditions: SimpleCondition[];
  }

  /**
   * Задает простое условие
   */
  interface SimpleCondition {
    /**
     * Количество рабочих дней
     * Если не указано - любое
     */
    working_days_count?: number;

    /**
     * Ограничение количества пар в день
     */
    lesson_limit: number;

    /**
     * Список доступных рабочих дней
     */
    working_days: {
      /**
       * Номер дня (1-6)
       */
      day: number;
      /**
       * Доступность дня
       */
      availability: Availability;
    }[];

    /**
     * Список доступных занятий
     */
    available_lessons: {
      /**
       * Порядковый номер занятия (1-8)
       */
      lesson_index: number;
      /**
       * Доступность пары
       */
      availability: Availability;
    }[];

    /**
     * true - рабочие дни подряд
     * false - НЕ подряд
     * Поле не указано (undefined) - не важно
     */
    consequitive_working_days?: boolean;

    /**
     * true - проектор нужен
     * false - проектор не нужен
     * Поле не указано (undefined) - не важно
     */
    projector_needed?: boolean;

    /**
     * Список сложных условий
     */
    complex_conditions?: ComplexCondition[];
  }

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
       * Объект- какой-то предмет
       * null - все предметы
       */
      subject: Subject | null;

      /**
       * Типы занятий, на которые распространяется условие
       */
      lesson_types: LessonType[] | null;

      /**
       * Учебные группы, на которые распространяется условие
       */
      study_groups: StudyGroup[] | null;

      /**
       * Начало временного интервала, на которые распространяется временное условие
       */
      date_start: string;

      /**
       * Конец временного интервала, на которые распространяется временное условие
       */
      date_end: string;
    };

    /**
     * Временные настройки приминимые к выбранному в области применения условия
     */
    time?: {
      /**
       * Интервалы пар, когда нужно выставить занятия
       */
      intervals?: {
        day: number;
        start: number;
        end: number;
        availablity: Availability;
      }[];
      /**
       * Ограничения количества пар по дням
       */
      lesson_day_limits?: {
        day: number;
        sign: "=" | "<=";
        limit: number;
      }[];
      /**
       * Занятия раз в две недели
       */
      once_per_two_weeks: boolean;
      /**
       * Одинаковые занятия подряд
       */
      same_lessons_consequtive: boolean;
    };

    /**
     * Необходимые ресурсы и аудитории
     */
    required_equipment?: {
      /**
       * Необходимые аудитории
       */
      classrooms?: Classroom[];

      /**
       * Требуемая вместительность (от и более)
       */
      classroom_capacity?: number;

      /**
       * Необходимое оборудование аудитории
       */
      classroom_equipment?: {
        /**
         * Оборудования {UquipmentUnit}
         */
        equipment_unit: EquipmentUnit;
        /**
         * Знак неравества для количества
         */
        sign: "=" | "<=";
        /**
         * Количество едениц оборудование
         */
        count: number;
      }[];
    };

    /**
     * Связь с другими занятиями и группами
     */
    lesson_connections?: LessonConnection[];


    /**
     * Связанные группы занятий
     */
    connected_lesson_groups?: {
      /**
       * День(1-6), к которому привязано занятие
       * -1 - означает любой день
       */
      day: number;
      /**
       * Занятия
       */
      lessons: {
        /**
         * По какому предмету занятие
         */
        subject: Subject;
        /**
         * Список групп пренадлежащих занятию
         */
        study_groups: StudyGroup[];
        /**
         * Аудитории, где требуется провести занятие
         */
        classrooms: Classroom[];
        /**
         * Тип занятия
         */
        lesson_type: LessonType;
      }[];
    }[];
  }

  /**
   * Описывает вариант расписания в json фомрате для учебной еденицы.
   * На мой взгляд не должно как-то зависеть от учебной еденицы, чтобы можно было гибко
   * и полноценно редактировать сам вариант расписанияю
   */
  interface ScheduleVariant {
    days: {
      /**
       * Номер дня (1-7)
       */
      day: number;

      /**
       * Время начала занятий
       */
      start_time: string;

      /**
       * Занятия групп в этот день
       */
      group_lessons: {
        /**
         * Группа, для которой выставлены занятия
         */
        group: StudyGroup;
        /**
         * Список занятий
         */
        lessons: {
          /**
           * Порядковый номер пары
           */
          index: number;

          /**
           * Время начала пары
           */
          time_start: number;

          /**
           * Время конца пары
           */
          time_end: number;

          /**
           * Тип пары по чередованию
           */
          alternation_type: LessonAlternationType;

          /**
           * Предмет
           */
          subject: string;

          /**
           * Аудитория
           */
          classroom: string;

          /**
           * Преподаватель
           */
          teacher: string;
        };
      }[];
    };
  }

  // ----------- </JSON для сервера> -----------
}

export {};
