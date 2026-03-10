import {
  CompassIcon,
  GraduationCapIcon,
  ImageIcon,
  MicroscopeIcon,
  PenLineIcon,
  ShapesIcon,
  SparklesIcon,
  VideoIcon,
} from "lucide-react";

import type { Translations } from "./types";

function pluralSteps(count: number): string {
  const n = count % 100;
  const m = n % 10;
  if (n >= 11 && n <= 14) return `${count} шагов`;
  if (m === 1) return `${count} шаг`;
  if (m >= 2 && m <= 4) return `${count} шага`;
  return `${count} шагов`;
}

export const ruRU: Translations = {
  // Locale meta
  locale: {
    localName: "Русский",
  },

  // Common
  common: {
    home: "Главная",
    settings: "Настройки",
    delete: "Удалить",
    rename: "Переименовать",
    share: "Поделиться",
    openInNewWindow: "Открыть в новом окне",
    close: "Закрыть",
    more: "Ещё",
    search: "Поиск",
    download: "Скачать",
    thinking: "Размышление",
    artifacts: "Файлы",
    public: "Публичный",
    custom: "Пользовательский",
    notAvailableInDemoMode: "Недоступно в демо-режиме",
    loading: "Загрузка...",
    version: "Версия",
    lastUpdated: "Обновлено",
    code: "Код",
    preview: "Предпросмотр",
    cancel: "Отмена",
    save: "Сохранить",
    install: "Установить",
    create: "Создать",
  },

  // Welcome
  welcome: {
    greeting: "Снова здравствуйте!",
    description:
      "Добро пожаловать в 🦌 DeerFlow — супер-агент с открытым исходным кодом. С встроенными и пользовательскими навыками DeerFlow помогает искать в интернете, анализировать данные и создавать презентации, веб-страницы и многое другое.",

    createYourOwnSkill: "Создайте свой навык",
    createYourOwnSkillDescription:
      "Создайте свой навык, чтобы раскрыть возможности DeerFlow. С пользовательскими навыками DeerFlow может помогать искать в интернете, анализировать данные и создавать презентации, веб-страницы и многое другое.",
  },

  // Clipboard
  clipboard: {
    copyToClipboard: "Копировать",
    copiedToClipboard: "Скопировано",
    failedToCopyToClipboard: "Не удалось скопировать",
    linkCopied: "Ссылка скопирована",
  },

  // Input Box
  inputBox: {
    placeholder: "Чем могу помочь сегодня?",
    createSkillPrompt:
      "Создадим новый навык по шагам с помощью `skill-creator`. Для начала — что должен уметь этот навык?",
    addAttachments: "Добавить вложения",
    mode: "Режим",
    flashMode: "Быстрый",
    flashModeDescription: "Быстро и эффективно, но может быть менее точно",
    reasoningMode: "Размышление",
    reasoningModeDescription:
      "Сначала обдумывание, затем действие — баланс между скоростью и точностью",
    proMode: "Pro",
    proModeDescription:
      "Размышление, планирование и выполнение — более точные результаты, может занять больше времени",
    ultraMode: "Ultra",
    ultraModeDescription:
      "Режим Pro с подагентами для распределения работы; лучше всего для сложных многошаговых задач",
    reasoningEffort: "Уровень рассуждений",
    reasoningEffortMinimal: "Минимальный",
    reasoningEffortMinimalDescription: "Поиск + прямой ответ",
    reasoningEffortLow: "Низкий",
    reasoningEffortLowDescription: "Простая проверка логики + поверхностный вывод",
    reasoningEffortMedium: "Средний",
    reasoningEffortMediumDescription:
      "Многоуровневый анализ логики + базовая верификация",
    reasoningEffortHigh: "Высокий",
    reasoningEffortHighDescription:
      "Полноценный логический вывод + многопутевая верификация + обратная проверка",
    searchModels: "Поиск моделей...",
    surpriseMe: "Сюрприз",
    surpriseMePrompt: "Удиви меня",
    followupLoading: "Генерация уточняющих вопросов...",
    followupConfirmTitle: "Отправить предложение?",
    followupConfirmDescription:
      "В поле ввода уже есть текст. Выберите, как отправить.",
    followupConfirmAppend: "Добавить и отправить",
    followupConfirmReplace: "Заменить и отправить",
    suggestions: [
      {
        suggestion: "Написать",
        prompt: "Напиши блог-пост о последних трендах по теме [topic]",
        icon: PenLineIcon,
      },
      {
        suggestion: "Исследовать",
        prompt: "Проведи глубокое исследование по теме [topic] и обобщи результаты.",
        icon: MicroscopeIcon,
      },
      {
        suggestion: "Собрать",
        prompt: "Собери данные из [source] и создай отчёт.",
        icon: ShapesIcon,
      },
      {
        suggestion: "Изучить",
        prompt: "Изучи тему [topic] и создай руководство.",
        icon: GraduationCapIcon,
      },
    ],
    suggestionsCreate: [
      {
        suggestion: "Веб-страница",
        prompt: "Создай веб-страницу о [topic]",
        icon: CompassIcon,
      },
      {
        suggestion: "Изображение",
        prompt: "Создай изображение о [topic]",
        icon: ImageIcon,
      },
      {
        suggestion: "Видео",
        prompt: "Создай видео о [topic]",
        icon: VideoIcon,
      },
      {
        type: "separator",
      },
      {
        suggestion: "Навык",
        prompt:
          "Создадим новый навык по шагам с помощью `skill-creator`. Для начала — что должен уметь этот навык?",
        icon: SparklesIcon,
      },
    ],
  },

  // Sidebar
  sidebar: {
    newChat: "Новый чат",
    chats: "Чаты",
    recentChats: "Недавние чаты",
    demoChats: "Демо-чаты",
    agents: "Агенты",
  },

  // Agents
  agents: {
    title: "Агенты",
    description:
      "Создавайте и управляйте пользовательскими агентами с индивидуальными промптами и возможностями.",
    newAgent: "Новый агент",
    emptyTitle: "Пользовательских агентов пока нет",
    emptyDescription:
      "Создайте первого агента с индивидуальным системным промптом.",
    chat: "Чат",
    delete: "Удалить",
    deleteConfirm:
      "Вы уверены, что хотите удалить этого агента? Это действие нельзя отменить.",
    deleteSuccess: "Агент удалён",
    newChat: "Новый чат",
    createPageTitle: "Создайте своего агента",
    createPageSubtitle:
      "Опишите агента, которого хотите — я помогу создать его через диалог.",
    nameStepTitle: "Назовите нового агента",
    nameStepHint:
      "Только буквы, цифры и дефисы — сохраняется в нижнем регистре (например, code-reviewer)",
    nameStepPlaceholder: "например, code-reviewer",
    nameStepContinue: "Продолжить",
    nameStepInvalidError:
      "Недопустимое имя — используйте только буквы, цифры и дефисы",
    nameStepAlreadyExistsError: "Агент с таким именем уже существует",
    nameStepCheckError: "Не удалось проверить доступность имени — попробуйте снова",
    nameStepBootstrapMessage:
      "Имя нового агента — {name}. Давайте настроим его **SOUL**.",
    agentCreated: "Агент создан!",
    startChatting: "Начать чат",
    backToGallery: "К галерее",
  },

  // Breadcrumb
  breadcrumb: {
    workspace: "Рабочее пространство",
    chats: "Чаты",
  },

  // Workspace
  workspace: {
    officialWebsite: "Официальный сайт DeerFlow",
    githubTooltip: "DeerFlow на GitHub",
    settingsAndMore: "Настройки и ещё",
    visitGithub: "DeerFlow на GitHub",
    reportIssue: "Сообщить об ошибке",
    contactUs: "Связаться с нами",
    about: "О DeerFlow",
  },

  // Conversation
  conversation: {
    noMessages: "Сообщений пока нет",
    startConversation: "Начните диалог, чтобы увидеть сообщения здесь",
  },

  // Chats
  chats: {
    searchChats: "Поиск чатов",
  },

  // Page titles (document title)
  pages: {
    appName: "DeerFlow",
    chats: "Чаты",
    newChat: "Новый чат",
    untitled: "Без названия",
  },

  // Tool calls
  toolCalls: {
    moreSteps: (count: number) => `ещё ${pluralSteps(count)}`,
    lessSteps: "Меньше шагов",
    executeCommand: "Выполнить команду",
    presentFiles: "Показать файлы",
    needYourHelp: "Нужна ваша помощь",
    useTool: (toolName: string) => `Использовать инструмент «${toolName}»`,
    searchFor: (query: string) => `Поиск «${query}»`,
    searchForRelatedInfo: "Поиск связанной информации",
    searchForRelatedImages: "Поиск связанных изображений",
    searchForRelatedImagesFor: (query: string) =>
      `Поиск связанных изображений для «${query}»`,
    searchOnWebFor: (query: string) => `Поиск в интернете «${query}»`,
    viewWebPage: "Просмотр веб-страницы",
    listFolder: "Список папки",
    readFile: "Читать файл",
    writeFile: "Записать файл",
    clickToViewContent: "Нажмите, чтобы просмотреть содержимое файла",
    writeTodos: "Обновить список задач",
    skillInstallTooltip: "Установить навык и сделать его доступным для DeerFlow",
  },

  // Uploads
  uploads: {
    uploading: "Загрузка...",
    uploadingFiles: "Загрузка файлов, подождите...",
  },

  // Subtasks
  subtasks: {
    subtask: "Подзадача",
    executing: (count: number) =>
      count === 1
        ? "Выполняется подзадача"
        : `Выполняется ${count} подзадач параллельно`,
    in_progress: "Выполняется подзадача",
    completed: "Подзадача выполнена",
    failed: "Подзадача не выполнена",
  },

  // Settings
  settings: {
    title: "Настройки",
    description: "Настройте внешний вид и поведение DeerFlow.",
    sections: {
      appearance: "Внешний вид",
      memory: "Память",
      tools: "Инструменты",
      skills: "Навыки",
      notification: "Уведомления",
      about: "О программе",
    },
    memory: {
      title: "Память",
      description:
        "DeerFlow автоматически учится на ваших диалогах в фоне. Эти воспоминания помогают DeerFlow лучше понимать вас и давать более персонализированные ответы.",
      empty: "Нет данных памяти для отображения.",
      rawJson: "Сырой JSON",
      markdown: {
        overview: "Обзор",
        userContext: "Контекст пользователя",
        work: "Работа",
        personal: "Личное",
        topOfMind: "В фокусе внимания",
        historyBackground: "История",
        recentMonths: "Последние месяцы",
        earlierContext: "Более ранний контекст",
        longTermBackground: "Долгосрочный фон",
        updatedAt: "Обновлено",
        facts: "Факты",
        empty: "(пусто)",
        table: {
          category: "Категория",
          confidence: "Уверенность",
          confidenceLevel: {
            veryHigh: "Очень высокая",
            high: "Высокая",
            normal: "Обычная",
            unknown: "Неизвестно",
          },
          content: "Содержимое",
          source: "Источник",
          createdAt: "Создано",
          view: "Просмотр",
        },
      },
    },
    appearance: {
      themeTitle: "Тема",
      themeDescription:
        "Выберите, как интерфейс следует за устройством или остаётся фиксированным.",
      system: "Системная",
      light: "Светлая",
      dark: "Тёмная",
      systemDescription: "Автоматически следовать системным настройкам.",
      lightDescription: "Яркая палитра с высоким контрастом для дневного времени.",
      darkDescription: "Приглушённая палитра, снижает нагрузку на глаза.",
      languageTitle: "Язык",
      languageDescription: "Переключение между языками.",
    },
    tools: {
      title: "Инструменты",
      description: "Управление конфигурацией и статусом MCP-инструментов.",
    },
    skills: {
      title: "Навыки агента",
      description:
        "Управление конфигурацией и статусом навыков агента.",
      createSkill: "Создать навык",
      emptyTitle: "Навыков пока нет",
      emptyDescription:
        "Поместите папки с навыками в папку `/skills/custom` в корне DeerFlow.",
      emptyButton: "Создать первый навык",
    },
    notification: {
      title: "Уведомления",
      description:
        "DeerFlow отправляет уведомление о завершении только когда окно неактивно. Это удобно для длительных задач — можно переключиться на другое дело и получить уведомление по готовности.",
      requestPermission: "Запросить разрешение на уведомления",
      deniedHint:
        "Разрешение на уведомления отклонено. Включите его в настройках сайта в браузере.",
      testButton: "Отправить тестовое уведомление",
      testTitle: "DeerFlow",
      testBody: "Это тестовое уведомление.",
      notSupported: "Ваш браузер не поддерживает уведомления.",
      disableNotification: "Отключить уведомления",
    },
    acknowledge: {
      emptyTitle: "Благодарности",
      emptyDescription: "Благодарности и упоминания будут отображаться здесь.",
    },
  },
};
