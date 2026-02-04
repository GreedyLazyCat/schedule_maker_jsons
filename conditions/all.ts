
// /**
//  * первая половина дня
//  */
// const condition_1: SimpleCondition = {
//   /**
//    * Все помечены как доступные
//    */
//   working_days: [
//     {
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Условно, если 2 пара до 12:20, то все занятие после 2ой пары не первая половина дня,
//    * значит разрешаем только 1 и 2ую пару
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * В данном случае просто дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * 1-3 пара, пн, вт, ср
//  */
// const condition_2: SimpleCondition = {
//   /**
//    * Разрешаем нужные дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем с первой по тертью
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * В данном случае просто дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Хотя бы один день не с первой пары. Желательно уместить в з дня и чтобы не подряд. Готова работать по субботам.
//  */
// const condition_3: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       /**
//        * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
//        * это на усмотрение пользователя, я ставлю просто можно
//        */
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * 3 рабочих дня
//    */
//   working_days_count: 3,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,

//   /**
//    * Рабочие дни не подряд
//    */
//   consequitive_working_days: false,

//   /**
//    * Теперь с помощью сложного условия задаем хотябы один день не с первой пары
//    */
//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         /**
//          * null - значит предмет не важен
//          */
//         subject: null,

//         /**
//          * null - распространяется на все типы
//          */
//         lesson_types: null,

//         /**
//          * null - на все группы
//          */
//         study_groups: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * Временные настройки
//        */
//       time: {
//         /**
//          * В текущем варианте возможно только выбрать какой-то конкретный день, например понедельник, и сказать
//          * что в пн у нас занятия не с первой пары, а со 2 по 8.
//          */
//         intervals: [
//           {
//             day: 1,
//             start: 2,
//             end: 8,
//           },
//         ],
//         once_per_two_weeks: false,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],
// };

// /**
//  * Обе пары в один день. Готов работать в субботу
//  */
// const condition_4: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       /**
//        * Тут смотря как трактовать - "готова работать по субботам", может означать "нежелательно, но можно",
//        * это на усмотрение пользователя, я ставлю просто можно
//        */
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Зависит от того, как я понял пожелание, если всего две пары у преподавателя, то просто достаточно
//    * указать, что один рабочий день, если другое - значит надо поработать сложными условиями
//    */
//   working_days_count: 1,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Желательно всё в четверг и пятницу
//  */
// const condition_5: SimpleCondition = {
//   /**
//    * Поскольку "желательно" в пт и чт, тракутую так, что остальные дни "возможные, но не желательные"
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.undesirable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.undesirable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.undesirable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.undesirable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Рабочих дня, потому, что ставим все в пт и чт
//    */
//   working_days_count: 2,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Примечание: один раз в две недели
//  * тут не совсем понимаю к чему оно применяется, в time у ComplexCondition
//  * указано once_per_two_weeks true, но нужно знать область применения такого условия.
//  * Если это конкретный предмет, у конкретных групп, конкретного типа, то это нужно указать.
//  * В моем случае сейчас по всем предметам, у всех групп, всех типов занятия раз в две недели)
//  */
// const condition_6: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,

//   complex_conditions: [
//     {
//       name: "Условие",

//       scope: {
//         /**
//          * null - значит предмет не важен
//          */
//         subject: null,

//         /**
//          * null - распространяется на все типы
//          */
//         lesson_types: null,

//         /**
//          * null - на все группы
//          */
//         study_groups: null,

//         date_start: "",
//         date_end: "",
//       },

//       time: {
//         /**
//          * Ставим флаг, что один раз в две недели
//          */
//         once_per_two_weeks: true,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],
// };

// /**
//  * В идеале утрамбовать во вторник, четверг и пятницу (с окончанием в каждый из этих дней не позже 3 пары).
//  * Можно вместо пятницы задействовать понедельник (там уже без явных ограничений по времени, лучше с утра).
//  *
//  * Настариваем в working_days вторник, четверг и пятницу как доступные, а понедельник как нежелательный.
//  * В availible_lessons запрещаем пары после 3ей.
//  * В сложном условии ставим, что в понедельник с первой по 8 пару.
//  * А остальные с 1 по 3 включительно
//  */
// const condition_7: SimpleCondition = {
//   /**
//    *
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.undesirable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем пары до 3ей включительно
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   working_days_count: 3,

//   lesson_limit: 8,

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         /**
//          * null - значит предмет не важен
//          */
//         subject: null,

//         /**
//          * null - распространяется на все типы
//          */
//         lesson_types: null,

//         /**
//          * null - на все группы
//          */
//         study_groups: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * Здесь в интервалах ставим на понедельник с первой по 8ую пару.
//        * А на остальные дни с 1 по 3ю
//        */
//       time: {
//         intervals: [
//           {
//             day: 1,
//             start: 1,
//             end: 8,
//           },
//           {
//             day: 2,
//             start: 1,
//             end: 3,
//           },
//           {
//             day: 3,
//             start: 1,
//             end: 3,
//           },
//           {
//             day: 4,
//             start: 1,
//             end: 3,
//           },
//           {
//             day: 5,
//             start: 1,
//             end: 3,
//           },
//           {
//             day: 6,
//             start: 1,
//             end: 3,
//           },
//         ],
//         once_per_two_weeks: false,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],
// };

// /**
//  * Объединить Предмет 1 и Предмет 2 у разных направлений вместе чтобы ходили и на лекции, и на  практику
//  */
// const condition_8: SimpleCondition = {
//   // ---- Для простого условия все по стандарту начну сразу со сложного

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: {
//           id: 1,
//           name: "Предмет 1",
//           study_unit_id: 1,
//         },

//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ-41БО",
//             study_unit_id: 1,
//           },
//           {
//             id: 2,
//             name: "ИВТ-41БО",
//             study_unit_id: 1,
//           },
//           // .... Допустим тут все необходимые группы этого предмета с одних направлений
//           // Или вообще стоит null указать, чтобы на все группы распространялось
//         ],

//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//           {
//             id: 5,
//             name: "practice",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       lesson_connections: [
//         {
//           type: "subject_union",
//           connection_subjects: {
//             subjects: [
//               {
//                 id: 23,
//                 name: "Предмет 2",
//                 study_unit_id: 2,
//               } as Subject,
//             ],
//             study_groups: [
//               {
//                 id: 1,
//                 name: "ПИЭ-41БО",
//                 study_unit_id: 2,
//               },
//               // И Все остальные группы разных направлений предмета 2
//             ] as StudyGroup[],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Лекции и лабы в один день, лучше с утра прошу поставить занятия компактно в любой день, кроме понедельника
//  */
// const condition_9: SimpleCondition = {
//   /**
//    * Разрешаем все дни, кроме понедельника
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Допустим, что первые две пары - это с утра, поэтому их разрешаем,
//    * остальное ставим нежелательно.
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.undesirable,
//     },
//   ],

//   working_days_count: 1,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: {
//           id: 1,
//           name: "Предмет X",
//           study_unit_id: 1,
//         },

//         study_groups: null,
//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       lesson_connections: [
//         {
//           type: "the_same_day_as",
//           connection_subjects: {
//             subjects: [
//               {
//                 id: 1,
//                 name: "Предмет X",
//                 study_unit_id: 1,
//               },
//             ],
//             lesson_types: [
//               {
//                 id: 2,
//                 name: "practice",
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],
// };

// /**
//  * пн 1 и 2 пара, пт 1 и 2 пара
//  */
// const condition_10: SimpleCondition = {
//   /**
//    * Разрешаем пн и пт
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем 1 и 2 пару
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Для Направление 1 и Направление 2 занятия: 1 раз в 2 недели - лекции. Следующее занятие - практика.
//  * Лекции для всего потока. Практики - занятия по группам. Для Направление 3 - как обычно.
//  * Просьба более 4-х пар в день не назначать. Занятия уместить в 2 дня. Без субботы.
//  */
// const condition_11: SimpleCondition = {
//   /**
//    * Разрешаем все дни, кроме субботы
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Уместить в два дня
//    */
//   working_days_count: 2,

//   /**
//    * Не более 4ех занятий в день
//    */
//   lesson_limit: 4,

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: null,
//         study_groups: null,
//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//         ],

//         date_end: "",
//         date_start: "",
//       },

//       /**
//        * Указываем, что занятия по раз в две недели. (получается по лекциям)
//        */
//       time: {
//         once_per_two_weeks: true,
//         same_lessons_consequtive: false,
//       },

//       /**
//        * В связи с другими занятиями указываем, что чередуем с практиками
//        */
//       lesson_connections: [
//         {
//           type: "alternate_with",
//           connection_subjects: {
//             lesson_types: [
//               {
//                 id: 1,
//                 name: "practice",
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],
// };

// /**
//  * поставить пары компактно, не ставить пары в четверг и в пятницу занят буду на биофаке
//  * Тут доработка про подряд идущие или не идущие пары.
//  */
// const condition_12: SimpleCondition = {
//   /**
//    * Зарещаем чт и пт
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * суббота со 2 пары)
//  */
// const condition_13 = {
//   /**
//    * Разрешаем субботу как я понял
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Курс по выбору, поэтому пары для 2 потоков можно объединить. Лекции и практики можно ставить в любом порядке
//  */
// const condition_14: SimpleCondition = {
//   //Начну сразу со сложного условия

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: {
//           id: 26,
//           name: "Какой-то курс по выбору",
//           study_unit_id: 1,
//         },
//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ-41Бо",
//             study_unit_id: 1,
//           },
//           // .... и далее все группы потока или направления 1
//         ],

//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * Здесь настраиваем обЪединение групп
//        */
//       lesson_connections: [
//         {
//           type: "unite_groups",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 32,
//                 name: "ИВТ-42БО",
//                 study_unit_id: 2,
//               },
//               // ... и далее все группы потока или направления 2, занятия которых надо объеденить с занятиями групп направления 1
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * По возможности ставить пары в 210 ауд.
//  * Лекции и практики по предмет 3 ставить вместе в один день, и так же по предмет 2.
//  */
// const condition_15: SimpleCondition = {
//   //У простого условия все стандарт, все разрешено, начну с сложного

//   complex_conditions: [
//     // В этом условии ставим, что пары проводим в 210
//     {
//       name: "Условие 1",
//       scope: {
//         //Тут думаю должно быть для всех предметов групп и типов занятий
//         subject: null,
//         study_groups: null,
//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },

//       required_equipment: {
//         classrooms: [
//           {
//             id: 23,
//             number: "201",
//             study_unit_id: 1,
//             capacity: 50,
//           },
//         ],
//       },
//     },

//     //Устанавливаем, что лекции и практики в один день
//     {
//       name: "Условие 2",
//       scope: {
//         subject: {
//           id: 28,
//           name: "Предмет 3",
//           study_unit_id: 1,
//         },
//         study_groups: null,
//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * Пишем связь, что для лекци предмета 3, всех групп ставим в один день с практиками (предмет и группы беруться из области примиенения условия)
//        */
//       lesson_connections: [
//         {
//           type: "the_same_day_as",
//           connection_subjects: {
//             lesson_types: [
//               {
//                 id: 2,
//                 name: "practice",
//               },
//             ],
//           },
//         },
//       ],
//     },
//     {
//       name: "Условие 3",
//       scope: {
//         subject: {
//           id: 28,
//           name: "Предмет 2",
//           study_unit_id: 1,
//         },
//         study_groups: null,
//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       lesson_connections: [
//         {
//           type: "the_same_day_as",
//           connection_subjects: {
//             lesson_types: [
//               {
//                 id: 2,
//                 name: "practice",
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * понедельник-вторник
//  */
// const condition_16: SimpleCondition = {
//   /**
//    * Разрешаем только понедельник вторник
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * По возможности, если будет пара раз в две недели,
//  * поставить первой парой + учесть, что есть математики (и совмещаю с другими корпусами)
//  *
//  * Вот такое "Если" не задать, поэтому задаю просто что, пара раз в две недели и что первой парой.
//  */
// const condition_17: SimpleCondition = {
//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         study_groups: null,
//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },

//       time: {
//         once_per_two_weeks: true,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем только первую пару
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Желательно уложиться в 3 рабочих дня. По возможности лекции на 1-3 парах.
//  * Если объединить мигающую практику по предмет Г у двух групп, то я не обижусь
//  */
// const condition_18: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   working_days_count: 3,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Все занятия поставить в один день, не раньше 3-й пары
//  */
// const condition_19: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем пары начиная с третьей
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   working_days_count: 1,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * объединить все потоки
//  */
// const condition_20: SimpleCondition = {
//   //Здесь тоже основная работа в сложном условии

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: null,
//         lesson_types: null,

//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ11-БО",
//             study_unit_id: 1,
//           },
//           // ... все группы какого-то одного потока, просто для старта
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       lesson_connections: [
//         {
//           type: "unite_groups",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 3,
//                 name: "ИВТ-11БО",
//                 study_unit_id: 1,
//               },
//               // ... все группы остальных потоков
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * объединить все потоки; 1 пара в неделю до середины семестра
//  *
//  * пришлось чуток подумать, но задать можно
//  *
//  * В простом условии ставим, что рабочи2 день один, а в сложном в ограничении по количеству пар
//  * ставим, что только одна пара в день
//  */
// const condition_21: SimpleCondition = {
//   //Здесь тоже основная работа в сложном условии

//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: null,
//         lesson_types: null,

//         study_groups: null,

//         date_start: "",

//         /**
//          * Задаем дату конца действия условия как середину семестра
//          */
//         date_end: "",
//       },

//       time: {
//         lesson_day_limits: [
//           {
//             day: 1,
//             sign: "=",
//             limit: 1,
//           },

//           // .... так все 6 дней

//           {
//             day: 6,
//             sign: "=",
//             limit: 1,
//           },
//         ],

//         once_per_two_weeks: false,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Ставим один рабочий день
//    */
//   working_days_count: 1,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Первая половина дня, не ставить 1-2пары в понедельник.
//  *
//  * Вот тут опять же, либо селектор пар в простом условии доделывать
//  * либо с тем как работает интервалы пар разобраться
//  */
// const condition_22: SimpleCondition = {
//   /**
//    * Запрещаем понедельник
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем пары в первой половине дня (допустим первые 3)
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Среда, числитель 3,4,5 пары
//  *
//  * Тут пока кажется мне, что прям числитель указать нельзя, не предусмотрено,
//  * можно укзать только занятие раз в две недели, что по смыслу и есть это, только
//  * это может быть и знаменатель
//  */
// const condition_23: SimpleCondition = {
//   complex_conditions: [
//     {
//       name: "Услоик",
//       scope: {
//         subject: null,
//         study_groups: null,
//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * Задаем раз в две недели
//        */
//       time: {
//         once_per_two_weeks: true,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],

//   /**
//    * Разрешаем только среду
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем 3, 4, 5 пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * БЕЗ пятниц, желательно дни подряд и впихнуть в 2 дня. Идеально - среда + четверг
//  */
// const condition_24: SimpleCondition = {
//   /**
//    * Пятницу зарещаем, все кроме четверга и среды - нежелательно.
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.undesirable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.undesirable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.undesirable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Рабочие дни подряд
//    */
//   consequitive_working_days: true,

//   /**
//    * "Впихваем" в два дня
//    */
//   working_days_count: 2,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Лекцию просьба 1 пару в неделю поставить, последней парой для студентов в выбранный день Практику
//  * просьба поставить 1 пару в неделю. Практику обе группы в 1 день
//  * по возможности, если требуется - можно объединить их в одну.
//  *
//  * Что одна пара в неделю не задать (вернее можно, но не в сложном условии, тут нужно костылем
//  * ограничение, что максимум одна пара в день и один рабочий день, но это в простом условии и конкретно на лекции
//  * это не задать)
//  */
// const condition_25 = {};

// /**
//  * Желательно: Лекция и практика одной парой каждую неделю и будут чередоваться числитель/знаменатель. 1 пара в неделю получается.
//  * Тоже не задать.
//  */
// const condition_26 = {};

// /**
//  * Пара одновременно у двух направлений, схлопнуть их в одну, практика и лекция смешанные будут, 1 пара в неделю
//  *
//  * 1 пара в неделю не задать.
//  */
// const condition_27: SimpleCondition = {
//   complex_conditions: [
//     {
//       name: "Условие",
//       scope: {
//         subject: null,
//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ-41Бо",
//             study_unit_id: 1,
//           },

//           // ... И далее все группы Направления 1
//         ],

//         lesson_types: [
//           {
//             id: 1,
//             name: "lecture",
//           },
//           {
//             id: 2,
//             name: "practice",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       lesson_connections: [
//         {
//           type: "unite_groups",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 1,
//                 name: "ИВТ-41Бо",
//                 study_unit_id: 1,
//               },
//             ],
//             // .... и далее все группы Направление 2
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Очень желательно практику (1 пара в неделю) у обеих групп в один день (идеально - подряд идущие пары)
//  *
//  *
//  * 1 пара в неделю не задать
//  */
// const condition_28: SimpleCondition = {
//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         study_groups: [
//           {
//             id: 1,
//             name: "ИВТ-41БО",
//             study_unit_id: 1,
//           },
//         ],

//         lesson_types: [
//           {
//             id: 234,
//             name: "practice",
//           },
//         ],

//         date_start: "",
//         date_end: "",
//       },

//       time: {
//         once_per_two_weeks: false,
//         same_lessons_consequtive: true,
//       },

//       lesson_connections: [
//         {
//           type: "the_same_day_as",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 2,
//                 name: "ИВТ-42БО",
//                 study_unit_id: 1,
//               },
//             ],
//             lesson_types: [
//               {
//                 id: 1,
//                 name: "lecture",
//               },
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Желательно не ставить лекцию между двумя практиками разных групп
//  *
//  * Даже не знаю как задавать такое, слишком специфично
//  */
// const condition_29 = {};

// /**
//  * Желательно уместить в 3 дня, можно использовать субботы.
//  */
// const condition_30 = {
//   /**
//    * Разрешаем все дни, но лично я "можно использовать субботы" истрактую так, что
//    * субботы "возможны, но не желательны"
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.undesirable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Указываем, что рабочих дня три
//    */
//   working_days_count: 3,

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Обязательно — меловая доска. Желательно: практики в один день. Желательно: первая половина дня (до 3 пары включительно).
//  */
// const condition_31: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * "Желательно: первая половина дня" истрактую так, что все пары после третьей "Возможны, но не желательны"
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.undesirable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * В сложном условии задам только меловую доску,
//    * про Практики в один день не задать.
//    */
//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null, // Или тут конкретный предмет, я не знаю
//         lesson_types: null,
//         study_groups: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * В требуемом оборудовании просим меловую доску
//        */
//       required_equipment: {
//         classroom_equipment: [
//           {
//             equipment_unit: {
//               id: 1,
//               name: "меловая доска",
//               study_unit_id: 1,
//             },
//             sign: "=",
//             count: 1,
//           },
//         ],
//       },
//     },
//   ],
//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Обязательно — меловая доска. Практики: в одной группе практику веду я,
//  * в двух группах — Преподаватель 17. Желательно: первая половина дня (до 3 пары включительно).
//  */
// const condition_32: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * "Желательно: первая половина дня" истрактую так, что все пары после третьей "Возможны, но не желательны"
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.undesirable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.undesirable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * В сложном условии задам только меловую доску,
//    * С практиками такое не задать
//    */
//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null, // Или тут конкретный предмет, я не знаю
//         lesson_types: null,
//         study_groups: null,

//         date_start: "",
//         date_end: "",
//       },

//       /**
//        * В требуемом оборудовании просим меловую доску
//        */
//       required_equipment: {
//         classroom_equipment: [
//           {
//             equipment_unit: {
//               id: 1,
//               name: "меловая доска",
//               study_unit_id: 1,
//             },
//             sign: "=",
//             count: 1,
//           },
//         ],
//       },
//     },
//   ],
//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * пн-ср., пт, очень желательно с 1 пары
//  */
// const condition_33: SimpleCondition = {
//   /**
//    * Разрешаем пн-ср и пт
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Просто разрешаем все пары, с ними ничего не надо, и так все с первоц
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Только поденедельник любое время
//  */
// const condition_34: SimpleCondition = {
//   /**
//    * Разрешаем только понедельник
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
//  *
//  * Такое по идее задается сложным условием.
//  */
// const condition_35: SimpleCondition = {
//   /**
//    * Разрешаем пн, вт, ср, чт
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешенные пары придется настраивать в сложном условии
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         study_groups: null,
//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },
//       /**
//        * пн - 1-2 пара, вт - 1-2 пара, ср - 1-3 пары, чт - любая пара, пт - выходной
//        */
//       time: {
//         intervals: [
//           {
//             day: 1,
//             start: 1,
//             end: 2,
//           },
//           {
//             day: 2,
//             start: 1,
//             end: 2,
//           },
//           {
//             day: 3,
//             start: 1,
//             end: 3,
//           },
//           {
//             day: 4,
//             start: 1,
//             end: 8,
//           },
//         ],
//         once_per_two_weeks: false,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * вторник 1 пара
//  */
// const condition_36: SimpleCondition = {
//   /**
//    * Разрешаем только вторник
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.unavailable,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.unavailable,
//     },
//   ],

//   /**
//    * Разрешаем только первую пару
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Прошу поставить занятия пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
//  *
//  * Снова воспользуемся сложным условием
//  */
// const condition_37: SimpleCondition = {
//   /**
//    * Разрешаем пн, пт, сб
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.unavailable,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.unavailable,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешенные пары укажем в сложных условиях, эти уже не будут иметь значение по идее
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         study_groups: null,
//         lesson_types: null,

//         date_start: "",
//         date_end: "",
//       },
//       /**
//        * пн 1-2 пары, пт 1-2 пары, сб 1-4 пары
//        */
//       time: {
//         intervals: [
//           {
//             day: 1,
//             start: 1,
//             end: 2,
//           },
//           {
//             day: 5,
//             start: 1,
//             end: 2,
//           },
//           {
//             day: 6,
//             start: 1,
//             end: 4,
//           },
//         ],
//         once_per_two_weeks: false,
//         same_lessons_consequtive: false,
//       },
//     },
//   ],
//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * По возможности совместно с Направление 3
//  */
// const condition_38: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         lesson_types: null,
//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ41-БО",
//             study_unit_id: 1,
//           },

//           // ... Далее все группы, которые надо будет объенить далее с Направлеием 3
//         ],

//         date_start: "",
//         date_end: "",
//       },
//       lesson_connections: [
//         {
//           type: "unite_groups",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 1,
//                 name: "ИВТ-41БО",
//                 study_unit_id: 1,
//               },
//               // ... Далее все группы Направления 3
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  * Желательно все группы и все предметы в один день, не важно в какой. Группы желательно объеденить.
//  *
//  * Это опять же "в один день" можно решить, через настройку простого условия, но только потому, что это распрострняется
//  * на все предметы, но когда дело доходит до конретных предметов, групп занятий или типов занятий такое уже не сделать.
//  */
// const condition_39: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем все пары
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.available,
//     },
//   ],

//   working_days_count: 1,

//   /**
//    * Дальше задаем объединение групп, указываем в области определние одно направление например
//    * а дальше в связи с другими занятиями и группами другие направления.
//    */
//   complex_conditions: [
//     {
//       name: "Условие 1",
//       scope: {
//         subject: null,
//         lesson_types: null,
//         study_groups: [
//           {
//             id: 1,
//             name: "ИТ41-БО",
//             study_unit_id: 1,
//           },

//           // ... Тут как бы какое-нибудь одно направление
//         ],

//         date_start: "",
//         date_end: "",
//       },
//       lesson_connections: [
//         {
//           type: "unite_groups",
//           connection_subjects: {
//             study_groups: [
//               {
//                 id: 1,
//                 name: "ИВТ-41БО",
//                 study_unit_id: 1,
//               },
//               // ... А дальше группы с других направлений
//             ],
//           },
//         },
//       ],
//     },
//   ],

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };

// /**
//  *  Желательно во второй половине дня
//  */
// const condition_40: SimpleCondition = {
//   /**
//    * Разрешаем все дни
//    */
//   working_days: [
//     {
//       //Пн
//       day: 1,
//       availability: Availability.available,
//     },
//     {
//       //Вт
//       day: 2,
//       availability: Availability.available,
//     },
//     {
//       //Ср
//       day: 3,
//       availability: Availability.available,
//     },
//     {
//       //Чт
//       day: 4,
//       availability: Availability.available,
//     },
//     {
//       //Пт
//       day: 5,
//       availability: Availability.available,
//     },
//     {
//       //Сб
//       day: 6,
//       availability: Availability.available,
//     },
//   ],

//   /**
//    * Разрешаем первую половину дня (ну наверное с 1-2 пару)
//    */
//   available_lessons: [
//     {
//       lesson_index: 1,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 2,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 3,
//       availability: Availability.available,
//     },
//     {
//       lesson_index: 4,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 5,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 6,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 7,
//       availability: Availability.unavailable,
//     },
//     {
//       lesson_index: 8,
//       availability: Availability.unavailable,
//     },
//   ],

//   //working_days_count здесь не указан - значит любое кол-во дней

//   /**
//    * Дефолтное значение
//    */
//   lesson_limit: 8,
// };
