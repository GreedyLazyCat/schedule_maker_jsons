declare global {
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
       * Дата начала учебной еденицы в ISO формате
       */
      start_date: string;

      /**
       * Дата конца учебной еденицы в ISO формате
       */
      end_date: string;

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
       * Куда ставить занятия - числитель/знаменатель/всегда
       */
      lesson_alternation: LessonAlternationType;

      /**
       * Сколько пар в неделю по предмету.
       * Может находиться только в условии, у которого в области определения задан предмет.
       * Не указано (undefined) - не учитывается.
       */
      lesson_amount?: number;

      /**
       * Как компоновать пары
       */
      lesson_consecutiveness: LessonConsecutiveness;

      /**
       * Расположение пар по дням
       * Если не указано ничего, то значит ничего не применяем
       */
      lesson_placement?: {
        day: number;
        placement: LessonPlacement;
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
   */
  interface ScheduleVariant {
    days: {
      /**
       * День в двух буквенном английском формате
       */
      day: Days;

      /**
       * Время начала занятий в ISO формате
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
           * Время начала пары в ISO формате
           */
          time_start: string;

          /**
           * Время конца пары в ISO формате
           */
          time_end: string;

          /**
           * Тип пары по чередованию
           */
          alternation_type: LessonAlternationType;

          /**
           * Предмет
           */
          subject: Subject;

          /**
           * Аудитория
           */
          classroom: Classroom;

          /**
           * Преподаватель
           */
          teacher: Teacher;
        };
      }[];
    };
  }

  // ----------- </JSON для сервера> -----------
}

export {};
