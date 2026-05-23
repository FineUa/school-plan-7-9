import { useState } from "react";
import { KONSPEKTY, WEEK1_DAYS_9, WEEK1_DAYS_7 } from "./week1-data";
import {
  KONSPEKTY_2_4,
  WEEK2_DAYS_9, WEEK3_DAYS_9, WEEK4_DAYS_9,
  WEEK2_DAYS_7, WEEK3_DAYS_7, WEEK4_DAYS_7,
} from "./weeks2-4-data";
import {
  KONSPEKTY_5_8,
  WEEK5_DAYS_9, WEEK6_DAYS_9, WEEK7_DAYS_9, WEEK8_DAYS_9,
  WEEK5_DAYS_7, WEEK6_DAYS_7, WEEK7_DAYS_7, WEEK8_DAYS_7,
} from "./weeks5-8-data";
import {
  KONSPEKTY_9_12,
  WEEK9_DAYS_9, WEEK10_DAYS_9, WEEK11_DAYS_9, WEEK12_DAYS_9,
  WEEK9_DAYS_7, WEEK10_DAYS_7, WEEK11_DAYS_7, WEEK12_DAYS_7,
} from "./weeks9-12-data";

const ALL_KONSPEKTY = {
  ...KONSPEKTY,
  ...KONSPEKTY_2_4,
  ...KONSPEKTY_5_8,
  ...KONSPEKTY_9_12,
};

const WEEK_DAYS_9 = [
  WEEK1_DAYS_9, WEEK2_DAYS_9, WEEK3_DAYS_9, WEEK4_DAYS_9,
  WEEK5_DAYS_9, WEEK6_DAYS_9, WEEK7_DAYS_9, WEEK8_DAYS_9,
  WEEK9_DAYS_9, WEEK10_DAYS_9, WEEK11_DAYS_9, WEEK12_DAYS_9,
];

const WEEK_DAYS_7 = [
  WEEK1_DAYS_7, WEEK2_DAYS_7, WEEK3_DAYS_7, WEEK4_DAYS_7,
  WEEK5_DAYS_7, WEEK6_DAYS_7, WEEK7_DAYS_7, WEEK8_DAYS_7,
  WEEK9_DAYS_7, WEEK10_DAYS_7, WEEK11_DAYS_7, WEEK12_DAYS_7,
];

const COLORS = {
  critical: "#e53e3e",
  high: "#dd6b20",
  medium: "#d69e2e",
  low: "#38a169",
  bg: "#0f1117",
  card: "#1a1d27",
  border: "#2d3148",
  accent: "#6366f1",
  accent2: "#06b6d4",
  text: "#e2e8f0",
  muted: "#94a3b8",
};

// ─── 7 КЛАС ───────────────────────────────────────────────────────────────────

const SUBJECTS_7 = [
  { name: "Алгебра", emoji: "📐", priority: "high", color: "#f97316", weak: false },
  { name: "Геометрія", emoji: "📏", priority: "high", color: "#fb923c", weak: false },
  { name: "Фізика", emoji: "⚡", priority: "critical", color: "#ef4444", weak: true },
  { name: "Хімія", emoji: "🧪", priority: "critical", color: "#dc2626", weak: true },
  { name: "Біологія", emoji: "🌿", priority: "critical", color: "#16a34a", weak: true },
  { name: "Українська мова", emoji: "📝", priority: "medium", color: "#eab308", weak: false },
  { name: "Укр. література", emoji: "📚", priority: "medium", color: "#ca8a04", weak: false },
  { name: "Англійська мова", emoji: "🗣️", priority: "medium", color: "#0ea5e9", weak: false },
  { name: "Історія України", emoji: "🏛️", priority: "medium", color: "#8b5cf6", weak: false },
  { name: "Всесвітня історія", emoji: "🌍", priority: "low", color: "#7c3aed", weak: false },
  { name: "Географія", emoji: "🗺️", priority: "low", color: "#059669", weak: false },
  { name: "Інформатика", emoji: "💻", priority: "low", color: "#6366f1", weak: false },
];

const EXAMS_7 = [
  { subject: "Алгебра", format: "Письмово: контрольна + задачі", time: "90 хв", icon: "📐" },
  { subject: "Геометрія", format: "Письмово: задачі на доведення", time: "60 хв", icon: "📏" },
  { subject: "Фізика ⚠️", format: "Тест + розв'язання задач", time: "90 хв", icon: "⚡" },
  { subject: "Хімія ⚠️", format: "Тест + рівняння реакцій + задачі", time: "90 хв", icon: "🧪" },
  { subject: "Біологія ⚠️", format: "Письмовий тест (30 питань)", time: "60 хв", icon: "🌿" },
  { subject: "Укр. мова", format: "Диктант + тест на грамотність", time: "90 хв", icon: "📝" },
  { subject: "Укр. література", format: "Письмовий твір або тест", time: "90 хв", icon: "📚" },
  { subject: "Англійська мова", format: "Письмо (граматика + текст) + усна", time: "60+20 хв", icon: "🗣️" },
  { subject: "Історія України", format: "Тест або усний іспит", time: "60 хв", icon: "🏛️" },
  { subject: "Всесвітня історія", format: "Тест", time: "45 хв", icon: "🌍" },
  { subject: "Географія", format: "Тест + контурні карти", time: "60 хв", icon: "🗺️" },
];

const WEEKLY_7 = [
  {
    day: "Понеділок", short: "ПН",
    lessons: [
      { subject: "Алгебра", duration: "1.5 год", color: "#f97316" },
      { subject: "Фізика ⚠️", duration: "1.5 год", color: "#ef4444" },
      { subject: "Українська мова", duration: "1 год", color: "#eab308" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Вівторок", short: "ВТ",
    lessons: [
      { subject: "Геометрія", duration: "1.5 год", color: "#fb923c" },
      { subject: "Хімія ⚠️", duration: "1.5 год", color: "#dc2626" },
      { subject: "Англійська мова", duration: "1 год", color: "#0ea5e9" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Середа", short: "СР",
    lessons: [
      { subject: "Біологія ⚠️", duration: "1.5 год", color: "#16a34a" },
      { subject: "Фізика ⚠️", duration: "1 год", color: "#ef4444" },
      { subject: "Історія України", duration: "1 год", color: "#8b5cf6" },
      { subject: "Всесвітня іст.", duration: "0.5 год", color: "#7c3aed" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Четвер", short: "ЧТ",
    lessons: [
      { subject: "Алгебра", duration: "1 год", color: "#f97316" },
      { subject: "Хімія ⚠️", duration: "1.5 год", color: "#dc2626" },
      { subject: "Укр. мова", duration: "1 год", color: "#eab308" },
      { subject: "Географія", duration: "0.5 год", color: "#059669" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "П'ятниця", short: "ПТ",
    lessons: [
      { subject: "Біологія ⚠️", duration: "1.5 год", color: "#16a34a" },
      { subject: "Геометрія", duration: "1 год", color: "#fb923c" },
      { subject: "Укр. література", duration: "1 год", color: "#ca8a04" },
      { subject: "Англійська", duration: "0.5 год", color: "#0ea5e9" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Субота", short: "СБ",
    lessons: [
      { subject: "Алгебра/Геом. повтор.", duration: "1 год", color: "#f97316" },
      { subject: "Фізика або Хімія ⚠️", duration: "1 год", color: "#ef4444" },
      { subject: "Читання (літ-ра)", duration: "0.5 год", color: "#ca8a04" },
    ],
    total: "2.5 год", type: "weekend",
  },
  {
    day: "Неділя", short: "НД",
    lessons: [
      { subject: "Укр. мова (практика)", duration: "1 год", color: "#eab308" },
      { subject: "Англійська мова", duration: "0.5 год", color: "#0ea5e9" },
      { subject: "Географія/Історія", duration: "0.5 год", color: "#8b5cf6" },
    ],
    total: "2 год", type: "weekend",
  },
];

const MONTHS_7 = [
  {
    month: "ЧЕРВЕНЬ", subtitle: "Місяць 1 — Фундамент", color: "#f97316",
    desc: "Інтенсивний старт: закриваємо базові прогалини з Хімії, Фізики, Біології",
    weeks: [
      {
        week: 1, dates: "1–7 червня", focus: "Вступ у всі предмети",
        topics: [
          { subject: "Алгебра 📐", topic: "Степінь натурального числа. Одночлени та дії з ними" },
          { subject: "Геометрія 📏", topic: "Основні геом. фігури. Точка, пряма, відрізок, кут" },
          { subject: "Фізика ⚡", topic: "Вступ. Фізичні тіла та речовини. Вимірювання величин" },
          { subject: "Хімія 🧪", topic: "Вступ. Предмет хімії. Речовини, молекули, атоми" },
          { subject: "Біологія 🌿", topic: "Різноманітність живих організмів. Царства природи" },
          { subject: "Укр. мова 📝", topic: "Повторення 6 кл. Лексика, частини мови" },
          { subject: "Англійська 🗣️", topic: "Present/Past Simple review. Лексика Unit 1" },
          { subject: "Іст. України 🏛️", topic: "Вступ. Україна у XIV–XV ст." },
        ],
      },
      {
        week: 2, dates: "8–14 червня", focus: "Перші кроки в точних науках",
        topics: [
          { subject: "Алгебра 📐", topic: "Многочлени. Додавання і віднімання многочленів" },
          { subject: "Геометрія 📏", topic: "Трикутники. Ознаки рівності (1 і 2)" },
          { subject: "Фізика ⚡", topic: "Механічний рух. Рівномірний рух. Швидкість, шлях, час" },
          { subject: "Хімія 🧪", topic: "Прості та складні речовини. Хімічні елементи та символи" },
          { subject: "Біологія 🌿", topic: "Царство Бактерії: будова, значення, поширення" },
          { subject: "Укр. мова 📝", topic: "Дієслово. Часи, особи, відміни. Правопис" },
          { subject: "Англійська 🗣️", topic: "Past Simple неправильні дієслова. Тексти" },
          { subject: "Іст. України 🏛️", topic: "Литовська доба. Україна у складі ВКЛ" },
        ],
      },
      {
        week: 3, dates: "15–21 червня", focus: "Поглиблення — природничі науки",
        topics: [
          { subject: "Алгебра 📐", topic: "Множення многочленів. Скорочене множення (формули)" },
          { subject: "Геометрія 📏", topic: "Ознака рівності трикутників (3). Рівнобедрений трикутник" },
          { subject: "Фізика ⚡", topic: "Нерівномірний рух. Прискорення. Задачі на кінематику" },
          { subject: "Хімія 🧪", topic: "Хімічні реакції. Ознаки. Складання рівнянь реакцій" },
          { subject: "Біологія 🌿", topic: "Царство Гриби: будова, різноманітність, значення" },
          { subject: "Укр. мова 📝", topic: "Прикметник. Ступені порівняння. Правопис" },
          { subject: "Англійська 🗣️", topic: "Future Simple / Going to. Modal verbs" },
          { subject: "Іст. України 🏛️", topic: "Польська доба. Берестейська унія (1596)" },
        ],
      },
      {
        week: 4, dates: "22–30 червня", focus: "Алгебраїчні дроби + Сили в природі",
        topics: [
          { subject: "Алгебра 📐", topic: "Розкладання на множники. Алгебраїчні дроби (скорочення)" },
          { subject: "Геометрія 📏", topic: "Прямокутний трикутник. Теорема Піфагора (вступ)" },
          { subject: "Фізика ⚡", topic: "Сила. Сила тяжіння. Вага тіла. Ньютонові закони (1, 2)" },
          { subject: "Хімія 🧪", topic: "Кисень: добування, властивості, застосування" },
          { subject: "Біологія 🌿", topic: "Царство Рослини. Водорості: будова та значення" },
          { subject: "Укр. мова 📝", topic: "Числівник: відмінювання, написання, вживання" },
          { subject: "Англійська 🗣️", topic: "Present Perfect. For / since. Тематична лексика" },
          { subject: "Іст. України 🏛️", topic: "Козацтво. Виникнення Запорізької Січі" },
        ],
      },
    ],
  },
  {
    month: "ЛИПЕНЬ", subtitle: "Місяць 2 — Основний матеріал", color: "#06b6d4",
    desc: "Ключові теми всіх предметів. Особливий акцент на задачах з Фізики та Хімії",
    weeks: [
      {
        week: 5, dates: "1–7 липня", focus: "Закони механіки + Хімічні сполуки",
        topics: [
          { subject: "Алгебра 📐", topic: "Алгебраїчні дроби: множення та ділення. Задачі" },
          { subject: "Геометрія 📏", topic: "Паралельні прямі. Ознаки паралельності. Кути" },
          { subject: "Фізика ⚡", topic: "Тертя. Сила пружності (закон Гука). Рівновага сил" },
          { subject: "Хімія 🧪", topic: "Водень: властивості та застосування. Порівняння з О₂" },
          { subject: "Біологія 🌿", topic: "Вищі спорові рослини: мохи, хвощі, папороті" },
          { subject: "Укр. мова 📝", topic: "Займенник: розряди, відмінювання, правопис" },
          { subject: "Англійська 🗣️", topic: "Conditionals I, II. If-clauses. Практика" },
          { subject: "Іст. України 🏛️", topic: "Хмельниччина. Початок національно-визвольної війни" },
        ],
      },
      {
        week: 6, dates: "8–14 липня", focus: "Тиск + Вода + Рослини",
        topics: [
          { subject: "Алгебра 📐", topic: "Додавання та віднімання алгебраїчних дробів. Задачі" },
          { subject: "Геометрія 📏", topic: "Сума кутів трикутника. Зовнішній кут. Задачі" },
          { subject: "Фізика ⚡", topic: "Тиск твердих тіл та рідин. Закон Паскаля. Задачі" },
          { subject: "Хімія 🧪", topic: "Вода: властивості, жорсткість, роль у природі" },
          { subject: "Біологія 🌿", topic: "Голонасінні рослини. Хвойні: сосна, ялина, ялиця" },
          { subject: "Укр. мова 📝", topic: "Дієприкметник і дієприслівник. Правопис, вживання" },
          { subject: "Англійська 🗣️", topic: "Passive Voice (Present, Past, Future). Вправи" },
          { subject: "Іст. України 🏛️", topic: "Переяславська рада 1654. Гетьманщина" },
        ],
      },
      {
        week: 7, dates: "15–21 липня", focus: "Системи рівнянь + Розчини",
        topics: [
          { subject: "Алгебра 📐", topic: "Лінійні рівняння з 2 змінними. Графік рівняння" },
          { subject: "Геометрія 📏", topic: "Чотирикутники. Паралелограм: властивості та ознаки" },
          { subject: "Фізика ⚡", topic: "Тиск рідин і газів. Сполучені посудини. Атмосферний тиск" },
          { subject: "Хімія 🧪", topic: "Розчини. Концентрація, розчинність. Задачі на розчини" },
          { subject: "Біологія 🌿", topic: "Покритонасінні (квіткові): будова квітки, суцвіття" },
          { subject: "Укр. мова 📝", topic: "Прислівник: розряди, ступені порівняння, правопис" },
          { subject: "Англійська 🗣️", topic: "Reported Speech (пряма і непряма мова). Вправи" },
          { subject: "Іст. України 🏛️", topic: "Руїна. Поділ Гетьманщини. Андрусівське перемир'я" },
        ],
      },
      {
        week: 8, dates: "22–31 липня", focus: "Системи рівнянь + Класи сполук",
        topics: [
          { subject: "Алгебра 📐", topic: "Системи лінійних рівнянь. Метод підстановки та додавання" },
          { subject: "Геометрія 📏", topic: "Прямокутник, ромб, квадрат: властивості та ознаки" },
          { subject: "Фізика ⚡", topic: "Закон Архімеда. Умови плавання тіл. Задачі" },
          { subject: "Хімія 🧪", topic: "Основні класи: оксиди та кислоти. Класифікація, власт." },
          { subject: "Біологія 🌿", topic: "Покритонасінні: класифікація, однодольні і дводольні" },
          { subject: "Укр. мова 📝", topic: "Службові частини мови: прийменник, сполучник, частка" },
          { subject: "Англійська 🗣️", topic: "Лексичні теми. Reading comprehension. Письмо" },
          { subject: "Іст. України 🏛️", topic: "Запорізька Січ у XVII ст. Козацьке суспільство" },
        ],
      },
    ],
  },
  {
    month: "СЕРПЕНЬ", subtitle: "Місяць 3 — Повторення і Іспити", color: "#a855f7",
    desc: "Систематичне повторення, пробні іспити, відпрацювання помилок",
    weeks: [
      {
        week: 9, dates: "1–7 серпня", focus: "Завершення програми",
        topics: [
          { subject: "Алгебра 📐", topic: "Степінь з цілим показником. Стандартний вигляд числа" },
          { subject: "Геометрія 📏", topic: "Коло і круг. Довжина кола. Площа круга та сектора" },
          { subject: "Фізика ⚡", topic: "Робота і потужність. Кінетична і потенціальна енергія" },
          { subject: "Хімія 🧪", topic: "Основи і солі. Класифікація. Повторення всіх класів" },
          { subject: "Біологія 🌿", topic: "Екологія. Середовища існування. Харчові ланцюги" },
          { subject: "Укр. мова 📝", topic: "Синтаксис. Просте речення. Пунктуація. Вправи" },
          { subject: "Англійська 🗣️", topic: "Підготовка до усної частини. Теми для розмови" },
          { subject: "Іст. України 🏛️", topic: "Гетьманщина кін. XVII–XVIII ст. Мазепа" },
        ],
      },
      {
        week: 10, dates: "8–14 серпня", focus: "🔄 ПОВНЕ ПОВТОРЕННЯ всіх предметів", highlight: true,
        topics: [
          { subject: "Алгебра 📐", topic: "ПОВТОРЕННЯ: від одночленів до систем рівнянь. Тести" },
          { subject: "Геометрія 📏", topic: "ПОВТОРЕННЯ: трикутники, чотирикутники, коло. Задачі" },
          { subject: "Фізика ⚡", topic: "ПОВТОРЕННЯ: механіка, тиск, Архімед, енергія. Задачі" },
          { subject: "Хімія 🧪", topic: "ПОВТОРЕННЯ: рівняння реакцій, класи сполук, задачі" },
          { subject: "Біологія 🌿", topic: "ПОВТОРЕННЯ: всі царства живих організмів. Тести" },
          { subject: "Укр. мова 📝", topic: "ПОВТОРЕННЯ: морфологія та синтаксис. Диктанти" },
          { subject: "Англійська 🗣️", topic: "ПОВТОРЕННЯ: граматика + письмо (email / essay)" },
          { subject: "Іст. України 🏛️", topic: "ПОВТОРЕННЯ: хронологія, персоналії, карти" },
        ],
      },
      {
        week: 11, dates: "15–21 серпня", focus: "📝 ПРОБНІ ІСПИТИ", highlight: true,
        topics: [
          { subject: "Понеділок 🗓️", topic: "Пробний іспит: Алгебра (90 хв) + Геометрія (60 хв)" },
          { subject: "Вівторок 🗓️", topic: "Пробний іспит: Фізика (90 хв) + Хімія (90 хв)" },
          { subject: "Середа 🗓️", topic: "Пробний іспит: Біологія (60 хв) + Диктант укр. мова (90 хв)" },
          { subject: "Четвер 🗓️", topic: "Пробний іспит: Іст. України (60 хв) + Англійська (80 хв)" },
          { subject: "П'ятниця 🗓️", topic: "Аналіз помилок пробних іспитів. Робота над слабкими місцями" },
          { subject: "Субота 🗓️", topic: "Додаткова практика: Хімія та Фізика (розбір помилок)" },
          { subject: "Неділя 🗓️", topic: "ВІДПОЧИНОК / легке читання художньої літератури" },
        ],
      },
      {
        week: 12, dates: "22–31 серпня", focus: "🎯 ФІНАЛЬНА ПІДГОТОВКА", highlight: true,
        topics: [
          { subject: "Понеділок 🗓️", topic: "Алгебра: фінальний розбір складних тем і типових задач" },
          { subject: "Вівторок 🗓️", topic: "Хімія: типові задачі, рівняння, класифікація сполук" },
          { subject: "Середа 🗓️", topic: "Фізика: задачі на всі теми. Формули та закони" },
          { subject: "Четвер 🗓️", topic: "Українська мова + Твір з літератури (практика)" },
          { subject: "П'ятниця 🗓️", topic: "Англійська: Speaking + Writing. Усний іспит (симуляція)" },
          { subject: "Субота 🗓️", topic: "Вільне повторення на вибір. Слабкі місця" },
          { subject: "Неділя 🗓️", topic: "ВІДПОЧИНОК перед офіційними іспитами ✅" },
        ],
      },
    ],
  },
];

const TIPS_7 = [
  { icon: "⏱️", title: "Техніка Pomodoro", text: "25 хв роботи → 5 хв перерва. Кожні 4 блоки — довга перерва (20–30 хв)" },
  { icon: "🧪⚡🌿", title: "Слабкі предмети — вранці", text: "Хімія, Фізика, Біологія — завжди на свіжу голову, на початку дня" },
  { icon: "📓", title: "Конспект-шпаргалка", text: "По кожній темі робити 1 сторінку з формулами та ключовими поняттями" },
  { icon: "✅", title: "Тести онлайн", text: "Після кожної теми проходити тест на учи.ua або на освіта.ua для самоперевірки" },
  { icon: "🗓️", title: "Не пропускати дні", text: "Краще 3 год щодня, ніж 8 год раз на тиждень. Регулярність — ключ до успіху" },
  { icon: "💬", title: "Пояснюй вголос", text: "Якщо можеш пояснити тему своїми словами — матеріал засвоєно. Це особливо важливо для Хімії та Фізики" },
];

// ─── 9 КЛАС ───────────────────────────────────────────────────────────────────

const SUBJECTS_9 = [
  { name: "Алгебра", emoji: "📐", priority: "high", color: "#f97316", weak: false },
  { name: "Геометрія", emoji: "📏", priority: "high", color: "#fb923c", weak: false },
  { name: "Фізика", emoji: "⚡", priority: "critical", color: "#ef4444", weak: true },
  { name: "Хімія", emoji: "🧪", priority: "critical", color: "#dc2626", weak: true },
  { name: "Біологія", emoji: "🌿", priority: "critical", color: "#16a34a", weak: true },
  { name: "Інформатика", emoji: "💻", priority: "critical", color: "#8b5cf6", weak: true },
  { name: "Українська мова", emoji: "📝", priority: "medium", color: "#eab308", weak: false },
  { name: "Укр. література", emoji: "📚", priority: "medium", color: "#ca8a04", weak: false },
  { name: "Англійська мова", emoji: "🗣️", priority: "medium", color: "#0ea5e9", weak: false },
  { name: "Історія України", emoji: "🏛️", priority: "medium", color: "#6366f1", weak: false },
  { name: "Всесвітня історія", emoji: "🌍", priority: "low", color: "#7c3aed", weak: false },
  { name: "Географія", emoji: "🗺️", priority: "low", color: "#059669", weak: false },
];

const EXAMS_9 = [
  { subject: "Математика (ДПА) ★", format: "Письмово: алгебра + геометрія. Обов'язковий", time: "120 хв", icon: "📐", dpa: true },
  { subject: "Укр. мова (ДПА) ★", format: "Диктант + тестові завдання. Обов'язковий", time: "90 хв", icon: "📝", dpa: true },
  { subject: "Англійська (ДПА) ★", format: "Письмо (граматика + твір) + усна частина", time: "60+20 хв", icon: "🗣️", dpa: true },
  { subject: "Хімія ⚠️ (профіль)", format: "Тест + рівняння хімічних реакцій + задачі", time: "90 хв", icon: "🧪", dpa: false },
  { subject: "Біологія ⚠️ (профіль)", format: "Письмовий тест: генетика, еволюція, клітина", time: "90 хв", icon: "🌿", dpa: false },
  { subject: "Фізика ⚠️", format: "Тест + розв'язання задач (механіка, оптика, ел.)", time: "90 хв", icon: "⚡", dpa: false },
  { subject: "Інформатика ⚠️", format: "Практичне завдання на ПК + тест", time: "90 хв", icon: "💻", dpa: false },
  { subject: "Географія", format: "Тест + контурні карти", time: "60 хв", icon: "🗺️", dpa: false },
  { subject: "Історія України", format: "Тест або усний іспит", time: "60 хв", icon: "🏛️", dpa: false },
  { subject: "Всесвітня історія", format: "Тест", time: "45 хв", icon: "🌍", dpa: false },
  { subject: "Укр. література", format: "Письмовий твір або тест", time: "90 хв", icon: "📚", dpa: false },
];

const WEEKLY_9 = [
  {
    day: "Понеділок", short: "ПН",
    lessons: [
      { subject: "Алгебра", duration: "1.5 год", color: "#f97316" },
      { subject: "Хімія ⚠️", duration: "1.5 год", color: "#dc2626" },
      { subject: "Українська мова", duration: "1 год", color: "#eab308" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Вівторок", short: "ВТ",
    lessons: [
      { subject: "Геометрія", duration: "1.5 год", color: "#fb923c" },
      { subject: "Біологія ⚠️", duration: "1.5 год", color: "#16a34a" },
      { subject: "Англійська мова", duration: "1 год", color: "#0ea5e9" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Середа", short: "СР",
    lessons: [
      { subject: "Фізика ⚠️", duration: "1.5 год", color: "#ef4444" },
      { subject: "Хімія ⚠️", duration: "1 год", color: "#dc2626" },
      { subject: "Історія України", duration: "1 год", color: "#6366f1" },
      { subject: "Всесвітня іст.", duration: "0.5 год", color: "#7c3aed" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Четвер", short: "ЧТ",
    lessons: [
      { subject: "Алгебра", duration: "1 год", color: "#f97316" },
      { subject: "Біологія ⚠️", duration: "1.5 год", color: "#16a34a" },
      { subject: "Укр. мова", duration: "1 год", color: "#eab308" },
      { subject: "Географія", duration: "0.5 год", color: "#059669" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "П'ятниця", short: "ПТ",
    lessons: [
      { subject: "Фізика ⚠️", duration: "1 год", color: "#ef4444" },
      { subject: "Інформатика ⚠️", duration: "1 год", color: "#8b5cf6" },
      { subject: "Укр. література", duration: "1 год", color: "#ca8a04" },
      { subject: "Англійська", duration: "1 год", color: "#0ea5e9" },
    ],
    total: "4 год", type: "weekday",
  },
  {
    day: "Субота", short: "СБ",
    lessons: [
      { subject: "Математика — повтор", duration: "1 год", color: "#f97316" },
      { subject: "Хімія або Біол. ⚠️", duration: "1 год", color: "#dc2626" },
      { subject: "Інформатика ⚠️", duration: "0.5 год", color: "#8b5cf6" },
    ],
    total: "2.5 год", type: "weekend",
  },
  {
    day: "Неділя", short: "НД",
    lessons: [
      { subject: "Укр. мова (практика)", duration: "0.5 год", color: "#eab308" },
      { subject: "Англійська мова", duration: "0.5 год", color: "#0ea5e9" },
      { subject: "Географія/Іст.", duration: "1 год", color: "#6366f1" },
    ],
    total: "2 год", type: "weekend",
  },
];

const MONTHS_9 = [
  {
    month: "ЧЕРВЕНЬ", subtitle: "Місяць 1 — Фундамент", color: "#f97316",
    desc: "Старт з органічної хімії та генетики. Закриваємо прогалини з Фізики та Інформатики. Математика — квадратна функція.",
    weeks: [
      {
        week: 1, dates: "1–7 червня", focus: "Вступ + повторення бази 8 класу",
        topics: [
          { subject: "Алгебра 📐", topic: "Квадратні рівняння: повторення формул і методів розв'язання" },
          { subject: "Геометрія 📏", topic: "Вектори: поняття, позначення, рівність векторів" },
          { subject: "Фізика ⚡", topic: "Механічні коливання: амплітуда, період, частота. Маятник" },
          { subject: "Хімія 🧪", topic: "Органічна хімія: вступ. Особливості сполук Карбону. Алкани" },
          { subject: "Біологія 🌿", topic: "Молекулярний рівень: хімічний склад клітини. Білки, ліпіди" },
          { subject: "Укр. мова 📝", topic: "Складне речення: поняття, типи. Розділові знаки" },
          { subject: "Англійська 🗣️", topic: "Tenses review (всі часи). Вправи на закріплення" },
          { subject: "Інформатика 💻", topic: "Алгоритми: поняття, властивості, типи алгоритмів" },
        ],
      },
      {
        week: 2, dates: "8–14 червня", focus: "Квадратна функція + Органічна хімія",
        topics: [
          { subject: "Алгебра 📐", topic: "Квадратна функція: графік парабола, вершина, вісь симетрії" },
          { subject: "Геометрія 📏", topic: "Дії з векторами: додавання, віднімання, множення на число" },
          { subject: "Фізика ⚡", topic: "Звукові хвилі: поширення, швидкість, гучність, тембр" },
          { subject: "Хімія 🧪", topic: "Алкени та алкіни: будова, властивості, реакції приєднання" },
          { subject: "Біологія 🌿", topic: "Нуклеїнові кислоти: ДНК і РНК. Будова, функції. Код ДНК" },
          { subject: "Укр. мова 📝", topic: "Складносурядне речення: сполучники, розділові знаки" },
          { subject: "Англійська 🗣️", topic: "Modal verbs (can, must, should, might). Вправи + тексти" },
          { subject: "Інформатика 💻", topic: "Мова програмування Python: змінні, типи даних, введення/виведення" },
        ],
      },
      {
        week: 3, dates: "15–21 червня", focus: "Прогресії + Генетика",
        topics: [
          { subject: "Алгебра 📐", topic: "Арифметична прогресія: означення, формула n-го члена та суми" },
          { subject: "Геометрія 📏", topic: "Координатна площина. Вектори у координатах. Відстань між точками" },
          { subject: "Фізика ⚡", topic: "Електромагнітні коливання. Змінний струм. Трансформатор" },
          { subject: "Хімія 🧪", topic: "Бензен та ароматичні вуглеводні. Властивості, реакції" },
          { subject: "Біологія 🌿", topic: "Генетика: закони Менделя. Моногібридне схрещування" },
          { subject: "Укр. мова 📝", topic: "Складнопідрядне речення: типи підрядних частин. Пунктуація" },
          { subject: "Англійська 🗣️", topic: "Passive Voice (всі часи). Трансформація речень. Практика" },
          { subject: "Інформатика 💻", topic: "Python: умовні оператори (if/elif/else). Логічні вирази" },
        ],
      },
      {
        week: 4, dates: "22–30 червня", focus: "Геометрична прогресія + Спирти + Мітоз",
        topics: [
          { subject: "Алгебра 📐", topic: "Геометрична прогресія: формула, сума, нескінченна прогресія" },
          { subject: "Геометрія 📏", topic: "Подібність трикутників: ознаки подібності. Задачі" },
          { subject: "Фізика ⚡", topic: "Електромагнітні хвилі. Шкала хвиль. Радіозв'язок" },
          { subject: "Хімія 🧪", topic: "Спирти: метанол, етанол, гліцерол. Властивості, застосування" },
          { subject: "Біологія 🌿", topic: "Поділ клітини: мітоз і мейоз. Фази, значення" },
          { subject: "Укр. мова 📝", topic: "Безсполучникове складне речення. Розділові знаки" },
          { subject: "Англійська 🗣️", topic: "Conditionals 1, 2, 3. Mixed conditionals. Практика" },
          { subject: "Інформатика 💻", topic: "Python: цикли (for, while). Задачі на цикли" },
        ],
      },
    ],
  },
  {
    month: "ЛИПЕНЬ", subtitle: "Місяць 2 — Основний матеріал", color: "#06b6d4",
    desc: "Профільні теми: органічна хімія (кислоти, полімери), генетика (дигібридне схрещування), оптика. Поглиблення математики.",
    weeks: [
      {
        week: 5, dates: "1–7 липня", focus: "Комбінаторика + Карбонові кислоти + Еволюція",
        topics: [
          { subject: "Алгебра 📐", topic: "Елементи комбінаторики: перестановки, розміщення, комбінації" },
          { subject: "Геометрія 📏", topic: "Правильні многокутники. Вписане та описане коло. Формули" },
          { subject: "Фізика ⚡", topic: "Оптика: закони відбиття та заломлення світла. Дзеркала" },
          { subject: "Хімія 🧪", topic: "Карбонові кислоти: оцтова, стеаринова. Властивості, естери" },
          { subject: "Біологія 🌿", topic: "Дигібридне схрещування. Закон незалежного успадкування" },
          { subject: "Укр. мова 📝", topic: "Пряма і непряма мова. Цитати. Діалог. Пунктуація" },
          { subject: "Англійська 🗣️", topic: "Reported speech. Перетворення речень. Reading comprehension" },
          { subject: "Інформатика 💻", topic: "Python: функції (def). Параметри та аргументи. Рекурсія" },
        ],
      },
      {
        week: 6, dates: "8–14 липня", focus: "Теорія ймовірностей + Жири + Екологія",
        topics: [
          { subject: "Алгебра 📐", topic: "Теорія ймовірностей: випадкові події, класична ймовірність" },
          { subject: "Геометрія 📏", topic: "Площі: трикутника, паралелограма, трапеції. Задачі" },
          { subject: "Фізика ⚡", topic: "Лінзи: збиральна та розсіювальна. Побудова зображень" },
          { subject: "Хімія 🧪", topic: "Жири: склад, властивості, омилення. Мило та синтетичні мийні засоби" },
          { subject: "Біологія 🌿", topic: "Теорія еволюції Дарвіна. Природний добір. Докази еволюції" },
          { subject: "Укр. мова 📝", topic: "Стилі мовлення. Науковий та публіцистичний стиль. Твір" },
          { subject: "Англійська 🗣️", topic: "Writing: formal letter, email, essay. Структура та кліше" },
          { subject: "Інформатика 💻", topic: "Python: списки, кортежі, словники. Методи роботи" },
        ],
      },
      {
        week: 7, dates: "15–21 липня", focus: "Статистика + Вуглеводи + Антропогенез",
        topics: [
          { subject: "Алгебра 📐", topic: "Статистика: середнє значення, мода, медіана, дисперсія" },
          { subject: "Геометрія 📏", topic: "Декартові координати. Рівняння прямої. Задачі на координати" },
          { subject: "Фізика ⚡", topic: "Будова атома: ядро, електрони. Атомна і ядерна фізика" },
          { subject: "Хімія 🧪", topic: "Вуглеводи: глюкоза, сахароза, крохмаль, целюлоза. Властивості" },
          { subject: "Біологія 🌿", topic: "Антропогенез: походження людини. Расоутворення. Людські раси" },
          { subject: "Укр. мова 📝", topic: "Офіційно-діловий стиль. Заява, резюме, протокол" },
          { subject: "Англійська 🗣️", topic: "Speaking: теми для усного іспиту. Підготовка відповідей" },
          { subject: "Інформатика 💻", topic: "Бази даних: поняття, таблиці, запити. MS Access або SQL" },
        ],
      },
      {
        week: 8, dates: "22–31 липня", focus: "Степенева функція + Білки + Екосистеми",
        topics: [
          { subject: "Алгебра 📐", topic: "Степенева функція: корінь n-го степеня, ірраціональні рівняння" },
          { subject: "Геометрія 📏", topic: "Тригонометрія: синус, косинус, тангенс гострого кута. Задачі" },
          { subject: "Фізика ⚡", topic: "Ядерні реакції. Радіоактивність. Застосування ядерної енергії" },
          { subject: "Хімія 🧪", topic: "Білки: склад, будова, властивості. Роль у живих організмах" },
          { subject: "Біологія 🌿", topic: "Екосистеми: структура, харчові ланцюги, кругообіг речовин" },
          { subject: "Укр. мова 📝", topic: "Синтаксис: відокремлені члени речення. Вставні слова" },
          { subject: "Англійська 🗣️", topic: "Grammar review: всі теми. Пробний тест ДПА" },
          { subject: "Інформатика 💻", topic: "Комп'ютерні мережі: топологія, протоколи, Інтернет, безпека" },
        ],
      },
    ],
  },
  {
    month: "СЕРПЕНЬ", subtitle: "Місяць 3 — Повторення і ДПА", color: "#a855f7",
    desc: "Систематичне повторення всіх тем, пробні ДПА, відпрацювання помилок. Акцент: Математика, Хімія, Біологія (профіль).",
    weeks: [
      {
        week: 9, dates: "1–7 серпня", focus: "Завершення програми + Полімери",
        topics: [
          { subject: "Алгебра 📐", topic: "Нерівності з однією змінною. Системи нерівностей. Задачі" },
          { subject: "Геометрія 📏", topic: "Теорема косинусів і синусів. Розв'язання трикутників" },
          { subject: "Фізика ⚡", topic: "Повторення: механіка, термодинаміка, електрика. Формули" },
          { subject: "Хімія 🧪", topic: "Полімери: поліетилен, поліпропілен, каучук. Властивості та застосування" },
          { subject: "Біологія 🌿", topic: "Біосфера: структура, межі, охорона. Глобальні екологічні проблеми" },
          { subject: "Укр. мова 📝", topic: "Підготовка до диктанту. Орфограми, пунктограми. Практика" },
          { subject: "Англійська 🗣️", topic: "Усна частина: симуляція іспиту. Відповіді на питання" },
          { subject: "Інформатика 💻", topic: "Повторення: алгоритми, Python, БД, мережі. Пробний тест" },
        ],
      },
      {
        week: 10, dates: "8–14 серпня", focus: "🔄 ПОВНЕ ПОВТОРЕННЯ всіх предметів", highlight: true,
        topics: [
          { subject: "Алгебра 📐", topic: "ПОВТОРЕННЯ: рівняння, нерівності, прогресії, функції. Тести" },
          { subject: "Геометрія 📏", topic: "ПОВТОРЕННЯ: вектори, подібність, тригонометрія, площі. Задачі" },
          { subject: "Фізика ⚡", topic: "ПОВТОРЕННЯ: коливання, оптика, атомна фізика. Задачі" },
          { subject: "Хімія 🧪", topic: "ПОВТОРЕННЯ: органічна хімія від алканів до полімерів. Тести" },
          { subject: "Біологія 🌿", topic: "ПОВТОРЕННЯ: клітина, генетика, еволюція, екологія. Тести" },
          { subject: "Укр. мова 📝", topic: "ПОВТОРЕННЯ: синтаксис, пунктуація. Диктанти" },
          { subject: "Англійська 🗣️", topic: "ПОВТОРЕННЯ: граматика + письмо (лист/твір). Тест ДПА" },
          { subject: "Інформатика 💻", topic: "ПОВТОРЕННЯ: практичні задачі на ПК. Тест" },
        ],
      },
      {
        week: 11, dates: "15–21 серпня", focus: "📝 ПРОБНІ ДПА", highlight: true,
        topics: [
          { subject: "Понеділок 🗓️", topic: "Пробний ДПА: Математика (алгебра + геометрія, 120 хв)" },
          { subject: "Вівторок 🗓️", topic: "Пробний ДПА: Укр. мова (диктант 90 хв) + Англійська письмо" },
          { subject: "Середа 🗓️", topic: "Пробний іспит: Хімія (90 хв) + Біологія (90 хв) — профіль" },
          { subject: "Четвер 🗓️", topic: "Пробний іспит: Фізика (90 хв) + Інформатика практика (90 хв)" },
          { subject: "П'ятниця 🗓️", topic: "Аналіз помилок всіх пробних іспитів. Складаємо список помилок" },
          { subject: "Субота 🗓️", topic: "Цілеспрямована робота над помилками: Хімія та Математика" },
          { subject: "Неділя 🗓️", topic: "ВІДПОЧИНОК / прогулянка / художня книга" },
        ],
      },
      {
        week: 12, dates: "22–31 серпня", focus: "🎯 ФІНАЛЬНА ПІДГОТОВКА ДО ДПА", highlight: true,
        topics: [
          { subject: "Понеділок 🗓️", topic: "Математика: фінальний розбір типових задач ДПА" },
          { subject: "Вівторок 🗓️", topic: "Хімія (профіль): всі типи реакцій, задачі, рівняння" },
          { subject: "Середа 🗓️", topic: "Біологія (профіль): генетичні задачі, схеми схрещування" },
          { subject: "Четвер 🗓️", topic: "Укр. мова: диктант + правопис. Англійська: усна частина" },
          { subject: "П'ятниця 🗓️", topic: "Фізика та Інформатика: формули, задачі, практичні завдання" },
          { subject: "Субота 🗓️", topic: "Вільне повторення на вибір. Тільки те, що ще не впевнено" },
          { subject: "Неділя 🗓️", topic: "ПОВНИЙ ВІДПОЧИНОК перед офіційними іспитами ✅" },
        ],
      },
    ],
  },
];

const TIPS_9 = [
  { icon: "⏱️", title: "Техніка Pomodoro", text: "25 хв роботи → 5 хв перерва. Кожні 4 блоки — довга перерва (20–30 хв)" },
  { icon: "🧪🌿", title: "Профіль — пріоритет №1", text: "Хімія і Біологія — профільні предмети для 10 класу. Їм щодня, і завжди на свіжу голову вранці" },
  { icon: "📐", title: "Математика щодня", text: "Хоча б 1 год на добу. Без щоденної практики математика забувається швидко" },
  { icon: "💻", title: "Інформатика — практика", text: "Python вчити лише за ноутбуком. Кожен урок — обов'язково пишемо код руками" },
  { icon: "📓", title: "Шпаргалка-конспект", text: "По кожній темі — 1 аркуш з формулами. Особливо для Хімії (рівняння) та Фізики" },
  { icon: "🎯", title: "ДПА — три обов'язкові", text: "Математика, Укр. мова, Англійська — ДПА. Хімія і Біологія — профільні. Всі п'ять готуємо на 100%" },
];

// ─── КОМПОНЕНТ ────────────────────────────────────────────────────────────────

export default function StudyPlan() {
  const [grade, setGrade] = useState(7);
  const [activeTab, setActiveTab] = useState("overview");
  const [activeMonth, setActiveMonth] = useState(0);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [openKonspekt, setOpenKonspekt] = useState(null); // konspekt_id or null

  const WEEK_DAYS = grade === 7 ? WEEK_DAYS_7 : WEEK_DAYS_9;
  const SUBJECTS = grade === 7 ? SUBJECTS_7 : SUBJECTS_9;
  const EXAMS = grade === 7 ? EXAMS_7 : EXAMS_9;
  const WEEKLY = grade === 7 ? WEEKLY_7 : WEEKLY_9;
  const MONTHS = grade === 7 ? MONTHS_7 : MONTHS_9;
  const TIPS = grade === 7 ? TIPS_7 : TIPS_9;

  const tabs = [
    { id: "overview", label: "Огляд", icon: "🏠" },
    { id: "schedule", label: "Розклад", icon: "📅" },
    { id: "months", label: "Місяці", icon: "📖" },
    { id: "exams", label: "Іспити", icon: "📝" },
    { id: "tips", label: "Поради", icon: "💡" },
  ];

  const handleGradeChange = (g) => {
    setGrade(g);
    setActiveTab("overview");
    setActiveMonth(0);
    setExpandedWeek(null);
  };

  const kData = openKonspekt ? ALL_KONSPEKTY[openKonspekt] : null;

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: COLORS.bg, position: "relative" }}>

      {/* ── KONSPEKT MODAL ── */}
      {kData && (
        <div
          onClick={() => setOpenKonspekt(null)}
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)",
            zIndex: 200, display: "flex", alignItems: "flex-end", justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#1a1d27", borderRadius: "16px 16px 0 0",
              border: "1px solid #2d3148", width: "100%", maxWidth: 480,
              maxHeight: "80vh", overflowY: "auto", padding: "20px 20px 40px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 17, fontWeight: 800, color: "#e2e8f0", lineHeight: 1.3 }}>
                📖 {kData.title}
              </h2>
              <button
                onClick={() => setOpenKonspekt(null)}
                style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 22, cursor: "pointer", flexShrink: 0, marginLeft: 12 }}
              >✕</button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: kData.example ? 16 : 0 }}>
              {kData.points.map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{
                    flexShrink: 0, width: 22, height: 22, borderRadius: "50%",
                    background: "#6366f1", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800,
                  }}>{i + 1}</span>
                  <span style={{ fontSize: 13, color: "#e2e8f0", lineHeight: 1.6 }}>{p}</span>
                </div>
              ))}
            </div>

            {kData.example && (
              <div style={{
                background: "#0f1117", borderRadius: 10,
                border: "1px solid #6366f133", padding: "10px 14px", marginTop: 12,
              }}>
                <div style={{ fontSize: 10, color: "#6366f1", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                  📌 Приклад
                </div>
                <div style={{ fontSize: 13, color: "#a5b4fc", fontFamily: "monospace", lineHeight: 1.6 }}>
                  {kData.example}
                </div>
              </div>
            )}

            <div style={{ marginTop: 16, textAlign: "center", fontSize: 12, color: "#475569" }}>
              Натисни поза вікном або ✕ щоб закрити
            </div>
          </div>
        </div>
      )}

    <div style={{
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: COLORS.bg,
      color: COLORS.text,
      minHeight: "100vh",
      maxWidth: 480,
      margin: "0 auto",
      paddingBottom: 80,
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)",
        padding: "24px 20px 20px",
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        <div style={{ fontSize: 11, color: "#a5b4fc", letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
          ПЛАН НАВЧАННЯ
        </div>

        {/* Grade selector */}
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {[7, 9].map((g) => (
            <button
              key={g}
              onClick={() => handleGradeChange(g)}
              style={{
                flex: 1,
                padding: "8px 0",
                borderRadius: 10,
                border: `2px solid ${grade === g ? "#6366f1" : "#2d3148"}`,
                background: grade === g ? "#6366f1" : "rgba(255,255,255,0.05)",
                color: grade === g ? "#fff" : "#94a3b8",
                fontWeight: 800,
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {g} КЛАС
            </button>
          ))}
        </div>

        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: "#fff", lineHeight: 1.2 }}>
          {grade === 7 ? "7 КЛАС" : "9 КЛАС — ЕКСТЕРНАТ"}
        </h1>
        <div style={{ fontSize: 14, color: "#c7d2fe", marginTop: 4 }}>
          {grade === 7 ? "Річна програма за 3 місяці літа" : "Підготовка до ДПА за 3 місяці · Школа ОПТИМА"}
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {(grade === 7
            ? [{ label: "12 тижнів", sub: "червень–серпень" }, { label: "~25 год", sub: "на тиждень" }, { label: "11 іспитів", sub: "для екстернату" }]
            : [{ label: "12 тижнів", sub: "червень–серпень" }, { label: "~25 год", sub: "на тиждень" }, { label: "3 ДПА + 8", sub: "профільних" }]
          ).map((s, i) => (
            <div key={i} style={{
              flex: 1,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 10,
              padding: "8px 10px",
              textAlign: "center",
            }}>
              <div style={{ fontWeight: 800, fontSize: 15, color: "#e0e7ff" }}>{s.label}</div>
              <div style={{ fontSize: 10, color: "#a5b4fc", marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "16px 16px 0" }}>

        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div>
            <div style={{
              background: grade === 9
                ? "linear-gradient(135deg, #1a1d27, #1a2744)"
                : "linear-gradient(135deg, #7f1d1d, #450a0a)",
              border: `1px solid ${grade === 9 ? "#6366f1" : "#ef4444"}`,
              borderRadius: 12,
              padding: "14px 16px",
              marginBottom: 16,
            }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: grade === 9 ? "#a5b4fc" : "#fca5a5", marginBottom: 6 }}>
                {grade === 9 ? "🎯 Мета: ДПА + вступ у природничий профіль" : "⚠️ Слабкі предмети — пріоритет №1"}
              </div>
              <div style={{ fontSize: 13, color: grade === 9 ? "#c7d2fe" : "#fecaca", lineHeight: 1.5 }}>
                {grade === 9
                  ? "Три обов'язкові ДПА: <strong>Математика, Укр. мова, Англійська</strong>. Профільні: <strong>Хімія і Біологія</strong>. Слабкі місця: Фізика та Інформатика — закриваємо за червень."
                  : "Хімія, Фізика та Біологія — <strong>нові предмети 7-го класу</strong>. Вони займають 40% навчального часу. Починаємо з них щодня."}
              </div>
            </div>

            {/* Subjects grid */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 13, color: COLORS.muted, fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
                Всі предмети
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {SUBJECTS.map((s, i) => (
                  <div key={i} style={{
                    background: COLORS.card,
                    border: `1px solid ${s.weak ? s.color + "66" : COLORS.border}`,
                    borderRadius: 10,
                    padding: "10px 12px",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: s.weak ? `0 0 8px ${s.color}33` : "none",
                  }}>
                    <span style={{ fontSize: 18 }}>{s.emoji}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: s.weak ? s.color : COLORS.text, lineHeight: 1.2 }}>
                        {s.name}
                      </div>
                      <div style={{
                        fontSize: 10,
                        color: s.priority === "critical" ? "#ef4444" : s.priority === "high" ? "#f97316" : s.priority === "medium" ? "#eab308" : COLORS.muted,
                        marginTop: 2,
                      }}>
                        {s.priority === "critical" ? "⚠️ Слабке місце" : s.priority === "high" ? "🔴 Пріоритет" : s.priority === "medium" ? "🟡 Середній" : "🟢 Базовий"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phase plan */}
            <div style={{ marginBottom: 8 }}>
              <div style={{ fontSize: 13, color: COLORS.muted, fontWeight: 600, marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 }}>
                3 Фази навчання
              </div>
              {(grade === 7
                ? [
                    { phase: "Фаза 1", period: "Червень (тижні 1–4)", icon: "🚀", color: "#f97316", desc: "Базовий рівень. Вступ у Фізику, Хімію, Біологію. Закриття прогалин" },
                    { phase: "Фаза 2", period: "Липень (тижні 5–8)", icon: "📚", color: "#06b6d4", desc: "Основний матеріал. Задачі, рівняння, поглиблення всіх тем" },
                    { phase: "Фаза 3", period: "Серпень (тижні 9–12)", icon: "🎯", color: "#a855f7", desc: "Повторення + пробні іспити + фінальна підготовка" },
                  ]
                : [
                    { phase: "Фаза 1", period: "Червень (тижні 1–4)", icon: "🚀", color: "#f97316", desc: "Органічна хімія з нуля, генетика, квадратна функція, Python. Закриваємо прогалини" },
                    { phase: "Фаза 2", period: "Липень (тижні 5–8)", icon: "📚", color: "#06b6d4", desc: "Профільні теми: полімери, білки, вуглеводи. Тригонометрія. Ядерна фізика" },
                    { phase: "Фаза 3", period: "Серпень (тижні 9–12)", icon: "🎯", color: "#a855f7", desc: "Повторення всього + пробні ДПА + фінальна підготовка" },
                  ]
              ).map((p, i) => (
                <div key={i} style={{
                  background: COLORS.card,
                  border: `1px solid ${p.color}44`,
                  borderLeft: `3px solid ${p.color}`,
                  borderRadius: 10,
                  padding: "12px 14px",
                  marginBottom: 8,
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: p.color }}>{p.icon} {p.phase}</span>
                    <span style={{ fontSize: 11, color: COLORS.muted }}>{p.period}</span>
                  </div>
                  <div style={{ fontSize: 13, color: COLORS.text, lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SCHEDULE TAB */}
        {activeTab === "schedule" && (
          <div>
            <div style={{
              background: COLORS.card,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 12,
              padding: "12px 14px",
              marginBottom: 14,
            }}>
              <div style={{ fontSize: 13, color: COLORS.muted, marginBottom: 4 }}>Навантаження на тиждень</div>
              <div style={{ display: "flex", gap: 12 }}>
                <div><span style={{ fontWeight: 800, fontSize: 18, color: "#6366f1" }}>20 год</span><span style={{ fontSize: 11, color: COLORS.muted }}> будні</span></div>
                <div><span style={{ fontWeight: 800, fontSize: 18, color: "#06b6d4" }}>4.5 год</span><span style={{ fontSize: 11, color: COLORS.muted }}> вихідні</span></div>
                <div><span style={{ fontWeight: 800, fontSize: 18, color: "#a855f7" }}>~25 год</span><span style={{ fontSize: 11, color: COLORS.muted }}> всього</span></div>
              </div>
            </div>

            {WEEKLY.map((day, i) => (
              <div key={i} style={{
                background: day.type === "weekend" ? "rgba(99,102,241,0.08)" : COLORS.card,
                border: `1px solid ${day.type === "weekend" ? "#6366f144" : COLORS.border}`,
                borderRadius: 12,
                padding: "12px 14px",
                marginBottom: 8,
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: day.type === "weekend" ? "#a5b4fc" : COLORS.text }}>
                    {day.type === "weekend" ? "🌅" : "📅"} {day.day}
                  </div>
                  <div style={{
                    background: day.type === "weekend" ? "#6366f122" : "#ffffff11",
                    borderRadius: 6, padding: "3px 8px",
                    fontSize: 12, fontWeight: 700,
                    color: day.type === "weekend" ? "#a5b4fc" : COLORS.text,
                  }}>
                    ⏱ {day.total}
                  </div>
                </div>
                {day.lessons.map((lesson, j) => (
                  <div key={j} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    marginBottom: j < day.lessons.length - 1 ? 6 : 0,
                  }}>
                    <div style={{ width: 4, height: 32, borderRadius: 2, background: lesson.color, flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: lesson.color }}>{lesson.subject}</div>
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.muted, flexShrink: 0 }}>{lesson.duration}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* MONTHS TAB */}
        {activeTab === "months" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {MONTHS.map((m, i) => (
                <button key={i} onClick={() => { setActiveMonth(i); setExpandedWeek(null); }} style={{
                  flex: 1,
                  background: activeMonth === i ? m.color : COLORS.card,
                  border: `1px solid ${activeMonth === i ? m.color : COLORS.border}`,
                  borderRadius: 10, padding: "8px 4px",
                  color: activeMonth === i ? "#fff" : COLORS.muted,
                  fontWeight: 700, fontSize: 11, cursor: "pointer", textAlign: "center",
                }}>
                  {m.month.slice(0, 3)}
                </button>
              ))}
            </div>

            <div style={{
              background: `linear-gradient(135deg, ${MONTHS[activeMonth].color}22, ${MONTHS[activeMonth].color}11)`,
              border: `1px solid ${MONTHS[activeMonth].color}44`,
              borderRadius: 12, padding: "14px 16px", marginBottom: 14,
            }}>
              <div style={{ fontWeight: 800, fontSize: 18, color: MONTHS[activeMonth].color }}>
                {MONTHS[activeMonth].month}
              </div>
              <div style={{ fontSize: 13, color: COLORS.text, marginTop: 4, fontWeight: 600 }}>
                {MONTHS[activeMonth].subtitle}
              </div>
              <div style={{ fontSize: 12, color: COLORS.muted, marginTop: 6, lineHeight: 1.5 }}>
                {MONTHS[activeMonth].desc}
              </div>
            </div>

            {MONTHS[activeMonth].weeks.map((week, wi) => {
              const globalWeekIdx = MONTHS.slice(0, activeMonth).reduce((acc, m) => acc + m.weeks.length, 0) + wi;
              const weekDays = WEEK_DAYS[globalWeekIdx];
              const isExpanded = expandedWeek === `${activeMonth}-${wi}`;
              return (
                <div key={wi} style={{
                  background: week.highlight ? `${MONTHS[activeMonth].color}11` : COLORS.card,
                  border: `1px solid ${week.highlight ? MONTHS[activeMonth].color + "66" : COLORS.border}`,
                  borderRadius: 12, marginBottom: 10, overflow: "hidden",
                }}>
                  <div
                    onClick={() => setExpandedWeek(isExpanded ? null : `${activeMonth}-${wi}`)}
                    style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: week.highlight ? MONTHS[activeMonth].color : COLORS.text }}>
                        Тиждень {week.week}: {week.focus}
                        <span style={{ marginLeft: 8, fontSize: 10, background: "#6366f1", color: "#fff", borderRadius: 4, padding: "1px 6px" }}>ПО ДНЯХ</span>
                      </div>
                      <div style={{ fontSize: 11, color: COLORS.muted, marginTop: 2 }}>{week.dates}</div>
                    </div>
                    <div style={{ fontSize: 18, color: COLORS.muted }}>{isExpanded ? "▲" : "▼"}</div>
                  </div>

                  {isExpanded && (
                    <div style={{ borderTop: `1px solid ${COLORS.border}`, padding: "10px 14px 14px" }}>
                      {weekDays ? (
                        // ── DAY-BY-DAY VIEW ──
                        weekDays.map((day, di) => (
                          <div key={di} style={{ marginBottom: 12 }}>
                            <div style={{
                              display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
                              paddingBottom: 4, borderBottom: `1px solid ${COLORS.border}`,
                            }}>
                              <span style={{
                                fontSize: 10, fontWeight: 800, color: day.type === "weekend" ? "#a5b4fc" : MONTHS[activeMonth].color,
                                background: day.type === "weekend" ? "#6366f122" : `${MONTHS[activeMonth].color}22`,
                                borderRadius: 4, padding: "2px 6px",
                              }}>{day.short}</span>
                              <span style={{ fontSize: 12, fontWeight: 700, color: COLORS.text }}>{day.day}</span>
                              <span style={{ fontSize: 11, color: COLORS.muted, marginLeft: "auto" }}>{day.date}</span>
                            </div>
                            {day.lessons.map((lesson, li) => (
                              <div
                                key={li}
                                onClick={() => lesson.kid && setOpenKonspekt(lesson.kid)}
                                style={{
                                  display: "flex", alignItems: "flex-start", gap: 8,
                                  marginBottom: 6, padding: "6px 8px",
                                  borderRadius: 8,
                                  background: lesson.kid ? `${lesson.color}11` : "transparent",
                                  border: `1px solid ${lesson.kid ? lesson.color + "33" : "transparent"}`,
                                  cursor: lesson.kid ? "pointer" : "default",
                                  transition: "opacity 0.15s",
                                }}
                              >
                                <span style={{ fontSize: 14, flexShrink: 0 }}>{lesson.emoji}</span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <div style={{ fontSize: 11, fontWeight: 700, color: lesson.color }}>{lesson.subject} · {lesson.duration}</div>
                                  <div style={{ fontSize: 12, color: COLORS.text, marginTop: 1, lineHeight: 1.4 }}>{lesson.topic}</div>
                                </div>
                                {lesson.kid && (
                                  <span style={{ fontSize: 10, color: lesson.color, flexShrink: 0, marginTop: 2 }}>📖 конспект</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ))
                      ) : (
                        // ── FALLBACK TOPIC VIEW (if no day data) ──
                        (week.topics || []).map((t, ti) => (
                          <div key={ti} style={{
                            display: "flex", gap: 10,
                            marginBottom: ti < week.topics.length - 1 ? 10 : 0,
                            paddingBottom: ti < week.topics.length - 1 ? 10 : 0,
                            borderBottom: ti < week.topics.length - 1 ? `1px solid ${COLORS.border}` : "none",
                          }}>
                            <div style={{ flex: "0 0 110px" }}>
                              <div style={{ fontSize: 11, fontWeight: 700, color: MONTHS[activeMonth].color }}>{t.subject}</div>
                            </div>
                            <div style={{ fontSize: 12, color: COLORS.text, lineHeight: 1.5 }}>{t.topic}</div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* EXAMS TAB */}
        {activeTab === "exams" && (
          <div>
            {grade === 9 && (
              <div style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                border: "1px solid #6366f1",
                borderRadius: 12, padding: "12px 14px", marginBottom: 14,
              }}>
                <div style={{ fontWeight: 700, color: "#a5b4fc", marginBottom: 6 }}>★ ДПА &mdash; обов&apos;язкові іспити</div>
                <div style={{ fontSize: 12, color: "#c7d2fe", lineHeight: 1.6 }}>
                  Державна підсумкова атестація 9 кл. (школа ОПТИМА): <strong>Математика, Укр. мова, Англійська</strong> &mdash; обов&apos;язкові. Хімія та Біологія &mdash; профільні вступні. Уточнюйте повний перелік у школі!
                </div>
              </div>
            )}
            {grade === 7 && (
              <div style={{
                background: "#1e1b4b", border: "1px solid #4338ca",
                borderRadius: 12, padding: "12px 14px", marginBottom: 14,
              }}>
                <div style={{ fontWeight: 700, color: "#a5b4fc", marginBottom: 6 }}>ℹ️ Важливо</div>
                <div style={{ fontSize: 12, color: "#c7d2fe", lineHeight: 1.6 }}>
                  Точний перелік іспитів залежить від школи. Список нижче — <strong>стандартний для екстернату 7 класу</strong>. Уточніть у навчальному закладі!
                </div>
              </div>
            )}

            {EXAMS.map((exam, i) => (
              <div key={i} style={{
                background: COLORS.card,
                border: `1px solid ${exam.dpa ? "#6366f166" : exam.subject.includes("⚠️") ? "#ef444444" : COLORS.border}`,
                borderRadius: 12, padding: "12px 14px", marginBottom: 8,
                boxShadow: exam.dpa ? "0 0 8px #6366f122" : exam.subject.includes("⚠️") ? "0 0 8px #ef444422" : "none",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 700, fontSize: 14,
                      color: exam.dpa ? "#a5b4fc" : exam.subject.includes("⚠️") ? "#ef4444" : COLORS.text,
                      marginBottom: 4,
                    }}>
                      {exam.icon} {exam.subject}
                    </div>
                    <div style={{ fontSize: 12, color: COLORS.muted, lineHeight: 1.5 }}>{exam.format}</div>
                  </div>
                  <div style={{
                    background: "#ffffff11", borderRadius: 8, padding: "4px 8px",
                    fontSize: 12, fontWeight: 700, color: COLORS.accent2,
                    flexShrink: 0, marginLeft: 10, whiteSpace: "nowrap",
                  }}>
                    ⏱ {exam.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TIPS TAB */}
        {activeTab === "tips" && (
          <div>
            <div style={{
              background: "linear-gradient(135deg, #064e3b, #065f46)",
              border: "1px solid #10b981",
              borderRadius: 12, padding: "14px 16px", marginBottom: 14,
            }}>
              <div style={{ fontWeight: 700, color: "#6ee7b7", fontSize: 15, marginBottom: 6 }}>
                🏆 Мета: 3 місяці = 1 рік навчання
              </div>
              <div style={{ fontSize: 13, color: "#a7f3d0", lineHeight: 1.6 }}>
                {grade === 9
                  ? "Здати ДПА та вступити в природничий профіль 10 класу. Регулярність + акцент на Хімію та Біологію — ключ до успіху."
                  : "Це реально, якщо навчатися регулярно і системно. Дотримуйтесь розкладу 6 днів на тиждень."}
              </div>
            </div>

            {TIPS.map((tip, i) => (
              <div key={i} style={{
                background: COLORS.card, border: `1px solid ${COLORS.border}`,
                borderRadius: 12, padding: "14px 16px", marginBottom: 10,
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{tip.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.text, marginBottom: 6 }}>{tip.title}</div>
                <div style={{ fontSize: 13, color: COLORS.muted, lineHeight: 1.6 }}>{tip.text}</div>
              </div>
            ))}

            <div style={{
              background: COLORS.card, border: `1px solid ${COLORS.border}`,
              borderRadius: 12, padding: "14px 16px", marginBottom: 10,
            }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.text, marginBottom: 10 }}>
                🔗 Корисні ресурси
              </div>
              {[
                { name: "учи.ua", desc: "Тести та вправи онлайн (безкоштовно)" },
                { name: "освіта.ua", desc: "Підручники та завдання для екстернату" },
                { name: "YouTube: Алатоні", desc: "Відеоуроки з математики (укр. мова)" },
                { name: "YouTube: Хімія легко", desc: "Відеоуроки з хімії 9 клас" },
                { name: "lms.e-school.net.ua", desc: "Офіційні курси МОН України онлайн" },
              ].map((r, i) => (
                <div key={i} style={{
                  display: "flex", gap: 10,
                  marginBottom: i < 4 ? 10 : 0,
                  paddingBottom: i < 4 ? 10 : 0,
                  borderBottom: i < 4 ? `1px solid ${COLORS.border}` : "none",
                }}>
                  <div style={{ fontSize: 18 }}>📌</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13, color: COLORS.accent2 }}>{r.name}</div>
                    <div style={{ fontSize: 12, color: COLORS.muted }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: "fixed", bottom: 0,
        left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: 480,
        background: "#0d0f18",
        borderTop: `1px solid ${COLORS.border}`,
        display: "flex", zIndex: 100,
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1, background: "transparent", border: "none",
              padding: "10px 4px 12px", cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 3,
              borderTop: activeTab === tab.id ? `2px solid ${COLORS.accent}` : "2px solid transparent",
            }}
          >
            <span style={{ fontSize: 18 }}>{tab.icon}</span>
            <span style={{
              fontSize: 9, fontWeight: 600,
              color: activeTab === tab.id ? COLORS.accent : COLORS.muted,
              textTransform: "uppercase", letterSpacing: 0.5,
            }}>
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
