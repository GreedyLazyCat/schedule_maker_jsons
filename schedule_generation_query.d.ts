declare global {
  // ----------- < JSON для сервера генерации > -----------

  /**
   * Полный JSON объект для запроса на генерацию расписания.
   *
   * Топ-level ключи сохраняют snake_case (как ожидает worker-потребитель
   * очереди RabbitMQ). Поля вложенных сущностей используют camelCase
   * (как в Drizzle inferSelect и в entity классах backend).
   *
   * Отправляется через RabbitMQ на очередь SG_QUERY_Q по событию
   * schedule_generation_query_event.
   */
  interface ScheduleGenerationQuery {
    /**
     * JWT подписанный backend-ом с секретом WORKER_JWT_SECRET, с issuer
     * 'schedule-server' и audience 'schedule-worker'.
     * Payload: { scheduleId: number, entitlement: { id: string; type: PlanType },
     * jti: string (uuid) }. Действителен 30 минут.
     * Worker должен вернуть токен в ответе, чтобы backend мог убедиться в
     * легитимности запроса.
     */
    token: string;

    /**
     * Описание учебной единицы, для которой будет сгенерировано расписание
     */
    study_unit: StudyUnit;

    /**
     * Преподаватели/учителя учебного заведения
     */
    teachers: Teacher[];

    /**
     * Типы занятий по предметам (лекция, практика и т.д.).
     * Глобальны для всего учебного заведения (не привязаны к study_unit).
     */
    lesson_types: LessonType[];

    /**
     * Предметы учебного заведения (с группами и количествами по типам занятий)
     */
    subjects: SubjectFull[];

    /**
     * Общее оборудование, возможное в учебном заведении
     */
    equipment: EquipmentUnit[];

    /**
     * Аудитории (с доступностью и оборудованием)
     */
    classrooms: ClassroomFull[];

    /**
     * Учебные направления
     */
    study_directions: StudyDirection[];

    /**
     * Учебные группы
     */
    study_groups: StudyGroup[];

    /**
     * Назначения (какие преподаватели, у каких групп, какой предмет и какого
     * типа занятия ведут)
     */
    assignments: AssignmentFull[];

    /**
     * Пожелания преподавателей (по одному на каждого преподавателя)
     */
    wishes: WishFull[];
  }

  // ----------- </ JSON для сервера генерации > -----------
}

export {};