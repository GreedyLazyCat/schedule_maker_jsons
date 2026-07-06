declare global {
  // ----------- < Ответ сервера генерации (ScheduleVariant) > -----------

  /**
   * Описывает вариант расписания - результат генерации.
   *
   * Топ-level ключи и поля урока сохраняют snake_case (как ожидает
   * worker-потребитель и фронтенд): day (числовой индекс), start_time,
   * time_start, time_end, alternation_type.
   */
  interface ScheduleVariant {
    days: {
      /**
       * Номер дня недели (1 - понедельник ... 6 - суббота)
       */
      day: number;

      /**
       * Время начала занятий в этот день в ISO формате
       */
      start_time: string;

      /**
       * Список занятий в этот день (flat, не сгруппированы по группам)
       */
      lessons: {
        /**
         * Порядковый номер пары
         */
        index: number;

        /**
         * Группа, для которой выставлено занятия
         */
        group: StudyGroup;

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
      }[];
    }[];
  }

  // ----------- </ Ответ сервера генерации (ScheduleVariant) > -----------
}

export {};