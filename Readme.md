# Пожелания преподавателей

> Файлы, в которых объявлены типы модели:
> - [`conditions.d.ts`](./conditions.d.ts) — `WishFull`, `SimpleCondition`, `ComplexCondition`;
> - [`entities.d.ts`](./entities.d.ts) — `StudyUnit`, `Teacher`, `LessonType`, `Subject`, `StudyGroup`, `StudyDirection`, `EquipmentUnit`, `Classroom`, `ClassroomAvailability`, `ClassroomEquipment`, `SubjectFull`, `ClassroomFull`, `AssignmentFull`;
> - [`enums.d.ts`](./enums.d.ts) — `Availability`, `LessonAlternationType`, `LessonConsecutiveness`, `LessonPlacement`, `StudyUnitType`, `ScheduleGenerationStatus`;
> - [`lesson_connection_types.d.ts`](./lesson_connection_types.d.ts) — `LessonConnection` (5 вариантов `subject_union` / `the_same_day_as` / `alternate_with` / `different_day_as` / `unite_groups`);
> - [`schedule_generation_query.d.ts`](./schedule_generation_query.d.ts) — `ScheduleGenerationQuery` (полный JSON запроса на генерацию);
> - [`schedule_variant.d.ts`](./schedule_variant.d.ts) — `ScheduleVariant` (ответ сервера генерации).
>
> Примеры того, как реальные пожелания преподавателей превращаются в строгий JSON-формат, лежат в папке [`conditions/`](./conditions/) — по одному файлу на каждое пожелание (`condition_1.ts` … `condition_40.ts`), а также базовый [`conditions/template.ts`](./conditions/template.ts).

## SimpleCondition – общие правила преподавателя

> Объявлен в [`conditions.d.ts`](./conditions.d.ts) (interface `SimpleCondition`). Примеры: [`conditions/condition_1.ts`](./conditions/condition_1.ts), [`conditions/condition_2.ts`](./conditions/condition_2.ts), [`conditions/condition_16.ts`](./conditions/condition_16.ts).

Данный уровень задает базовые настройки, которые
применяются ко всему расписанию преподавателя в рамках выбранного
периода. Объект содержит следующие ключевые поля:

- workingDays – список доступности каждого дня недели
  (принимает значения из `Availability` — см. [`enums.d.ts`](./enums.d.ts):
  available – доступно, undesirable – нежелательно,
  unavailable – недоступно)
- availableLessons – доступность конкретных временных слотов
  (пар) в течение дня;
- lessonLimit – максимальное количество занятий, которое
  допустимо назначить преподавателю в один день
- workingDaysCount – опциональное требование к общему числу
  рабочих дней в неделю
- consequitiveWorkingDays – желаемый режим следования
  рабочих дней (например, подряд или с перерывами)
- projectorNeeded - нужен ли проектор

## ComplexCondition – контекстные правила

> Объявлен в [`conditions.d.ts`](./conditions.d.ts) (interface `ComplexCondition`). Примеры: [`conditions/condition_3.ts`](./conditions/condition_3.ts), [`conditions/condition_7.ts`](./conditions/condition_7.ts), [`conditions/condition_25.ts`](./conditions/condition_25.ts).

Структура объекта _ComplexCondition_ логически разделена на два основных блока: **область определения** и **секцию ограничений** (условий).

**Область определения условий (_scope_)** формирует единый контекст применения правил и включает следующие параметры:
- subject – конкретный учебный предмет (тип `Subject` из [`entities.d.ts`](./entities.d.ts), `null` — любой)

- lessonTypes – типы занятий (например, лекция или практическое занятие) (тип `LessonType[]` из [`entities.d.ts`](./entities.d.ts))
- studyGroups – перечень учебных групп (тип `StudyGroup[]` из [`entities.d.ts`](./entities.d.ts); в typedef поле называется `studyGroups`, не `studentGroups`)
- timeframe (`dateStart` и `dateEnd`) – временной отрезок (интервал дат), на который распространяется действие правила

**Секция ограничений** применяется к сформированной области определения и настраивается через три секции опциональные секции интерфейса:

- **time (Настройка временного расположения и нагрузки)** – агрегирует параметры временного планирования:
  - _availability_ (расположение пар) – целевые дни и конкретные временные слоты для размещения занятий, форма `{ dayIndex, lessonIndex, type: Availability }[]` (см. [`conditions.d.ts`](./conditions.d.ts) → `ComplexCondition.time.availability`);
  - _lessonDayLimits_ (лимиты занятий по дням) – ограничение на количество занятий в рамках одного дня;
  - _lessonAlternation_ (чередование занятий) – цикличность установления занятий (значения из `LessonAlternationType` — см. [`enums.d.ts`](./enums.d.ts): usual — всегда / numerator — числитель / denominator — знаменатель);
  - _lessonAmount_ (количество занятий в неделю) – суммарный лимит занятий на одну учебную неделю;
  - _oncePerTwoWeeks_ (раз в две недели) – флаг, активирующий обязательный пропуск одной недели между занятиями;
  - _sameLessonsConsequtive_ (одинаковые занятия подряд) – рекомендация алгоритму по возможности ставить сущностно одинаковые пары последовательно друг за другом.
  > Примечание: в typedef поле называется `sameLessonsConsequtive` (как в [`conditions.d.ts`](./conditions.d.ts)), не `…Consequitive`.

- **requiredEquipment (Требования к аудиториям и оборудованию)** – интерфейс позволяет задать как жесткий список конкретных аудиторий (`Classroom[]` из [`entities.d.ts`](./entities.d.ts)), так и общие требования к характеристикам аудитории (`classroomCapacity`, `classroomEquipment[]` с `equipmentUnit: EquipmentUnit`). На основе этих данных система автоматически подбирает свободное помещение, удовлетворяющее критериям. Пример: [`conditions/condition_15.ts`](./conditions/condition_15.ts), [`conditions/condition_31.ts`](./conditions/condition_31.ts), [`conditions/condition_32.ts`](./conditions/condition_32.ts).

- **lessonConnections (Связь занятий)** – задает правила логического и временного взаимодействия с другими учебными занятиями, не входящими в исходную область определения. Полиморфный discriminated union по полю `type` объявлен в [`lesson_connection_types.d.ts`](./lesson_connection_types.d.ts) (тип `LessonConnection`). Выбор конкретного типа связи реализуется через модальное окно, где для каждого варианта динамически валидируются требования к контексту. Примеры: [`conditions/condition_8.ts`](./conditions/condition_8.ts) (`subject_union`), [`conditions/condition_9.ts`](./conditions/condition_9.ts) и [`conditions/condition_28.ts`](./conditions/condition_28.ts) (`the_same_day_as`), [`conditions/condition_11.ts`](./conditions/condition_11.ts) и [`conditions/condition_26.ts`](./conditions/condition_26.ts) (`alternate_with`), [`conditions/condition_20.ts`](./conditions/condition_20.ts), [`conditions/condition_27.ts`](./conditions/condition_27.ts), [`conditions/condition_39.ts`](./conditions/condition_39.ts) (`unite_groups`).

**connectedLessonGroups (Связанные группы занятий)** – финальный опциональный блок модели (см. [`conditions.d.ts`](./conditions.d.ts) → `ComplexCondition.connectedLessonGroups`). Он используется для описания конкретных групп занятий, которые необходимо распределить в строго определенные дни и в жестко заданном порядке.

При проектировании модели было заложено важное архитектурное правило: блок _connectedLessonGroups_ является строго несовместимым с блоками _time_, _requiredEquipment_ и _lessonConnections_. Данное ограничение обусловлено тем, что режим связанных групп задает жесткую фиксацию занятий, в то время как остальные подсекции представляют собой гибкие ограничения для генерирующего алгоритма.

### Связи занятий

> Все 5 вариантов связи объявлены в [`lesson_connection_types.d.ts`](./lesson_connection_types.d.ts) как `SubjectUnionConnection`, `TheSameDayAsConnection`, `AlternateWithConnection`, `DifferentDayAsConnection`, `UniteGroupsConnection`, объединенные в тип `LessonConnection`.

Для реализации различных видов взаимодействия между учебными занятиями в структуре lessonConnections используется полиморфная связь (discriminated union) по полю type. Перечень доступных типов связей и требования к их области видимости (scope) систематизированы в таблице.

| **Тип**          | **Смысл**                                 | **Требования к области определения** | **Interface в [`lesson_connection_types.d.ts`](./lesson_connection_types.d.ts)** |
| ---------------- | ----------------------------------------- | ------------------------------------ | --------------------------------------------------------------------------------- |
| subject_union    | Объединить занятия с другим предметом     | предмет + ровно один тип занятий     | `SubjectUnionConnection` (пример: [`conditions/condition_8.ts`](./conditions/condition_8.ts)) |
| the_same_day_as  | Поставить в один день с другими занятиями | ровно один тип занятий               | `TheSameDayAsConnection` (примеры: [`conditions/condition_9.ts`](./conditions/condition_9.ts), [`conditions/condition_15.ts`](./conditions/condition_15.ts), [`conditions/condition_28.ts`](./conditions/condition_28.ts)) |
| alternate_with   | Чередовать с другими занятиями            | ровно один тип занятий               | `AlternateWithConnection` (примеры: [`conditions/condition_11.ts`](./conditions/condition_11.ts), [`conditions/condition_26.ts`](./conditions/condition_26.ts)) |
| different_day_as | Разнести по разным дням                   | указан предмет                       | `DifferentDayAsConnection` |
| unite_groups     | Объединить группы на занятиях             | предмет + группы                     | `UniteGroupsConnection` (примеры: [`conditions/condition_14.ts`](./conditions/condition_14.ts), [`conditions/condition_20.ts`](./conditions/condition_20.ts), [`conditions/condition_25.ts`](./conditions/condition_25.ts), [`conditions/condition_27.ts`](./conditions/condition_27.ts), [`conditions/condition_38.ts`](./conditions/condition_38.ts), [`conditions/condition_39.ts`](./conditions/condition_39.ts)) |
