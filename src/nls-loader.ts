type Translations = Record<string, string>;

interface NlsEntry {
	module: string;
	key: string;
	msg: string;
}

const sidexTranslations: Record<string, Translations> = {
	'zh-cn': {
		'remote.pick.placeholder': '选择一个选项来打开远程窗口',
		'remote.pick.connectToTunnel': '连接到隧道…',
		'remote.pick.tunnelsProvider': '远程隧道',
		'remote.pick.connectToHost': '连接到主机…',
		'remote.pick.sshProvider': '远程 SSH',
		'remote.pick.wsl': '连接到 WSL…',
		'remote.pick.wslProvider': '远程 WSL',
		'remote.pick.container': '在容器中打开文件夹…',
		'remote.pick.containerProvider': '开发容器',
		'remote.pick.codespace': '连接到 Codespace…',
		'remote.pick.codespaceProvider': 'GitHub Codespaces',
		'remote.codespace.tokenPrompt': '具有 codespace 范围的 GitHub 个人访问令牌',
		'remote.codespace.none': '未找到此帐户的 Codespace。',
		'remote.codespace.pick': '选择一个 Codespace',
		'remote.codespace.connected': '已连接到 Codespace: {0}',
		'remote.codespace.failed': 'Codespace 连接失败: {0}',
		'explorerViewlet.cloneRepository': '你可以在本地克隆一个仓库。\n{0}',
		remoteExplorer: '远程资源管理器',
		remoteExplorerViewIcon: '远程资源管理器视图图标。',
		'sidex.remote.refresh': '刷新远程资源管理器',
		'sidex.remote.openExplorer': '远程资源管理器',
		'remote.signInMicrosoft': '使用 Microsoft 登录',
		'remote.signInGitHub': '使用 GitHub 登录',
		'remote.ssh.noHosts': '未在 ~/.ssh/config 中找到 SSH 目标',
		'remote.ssh.empty': '~/.ssh/config 中没有 SSH 目标 — 在下方添加',
		'remote.codespaces.empty': '未找到 Codespace',
		'remote.containers.noContainers': '未找到运行中的容器',
		'remote.section.tunnels': '隧道',
		'remote.section.ssh': 'SSH',
		'remote.section.codespaces': 'GitHub Codespaces',
		'remote.section.containers': '开发容器',
		'remote.signIn': '登录',
		'remote.connect': '连接',
		'remote.tunnels': '隧道',
		'remote.ssh': 'SSH',
		'remote.codespaces': 'GitHub Codespaces',
		'remote.containers': '开发容器',
		'remote.wsl': 'WSL 目标',
		'remote.codespaces.signIn': '使用 GitHub 登录以查看你的 Codespace'
	},
	ja: {
		'remote.pick.placeholder': 'リモートウィンドウを開くオプションを選択',
		'remote.pick.connectToTunnel': 'トンネルに接続…',
		'remote.pick.connectToHost': 'ホストに接続…',
		'remote.pick.wsl': 'WSL に接続…',
		'remote.pick.container': 'コンテナーでフォルダーを開く…',
		'remote.pick.codespace': 'Codespace に接続…',
		remoteExplorer: 'リモート エクスプローラー'
	},
	ko: {
		'remote.pick.placeholder': '원격 창을 여는 옵션 선택',
		'remote.pick.connectToTunnel': '터널에 연결…',
		'remote.pick.connectToHost': '호스트에 연결…',
		'remote.pick.wsl': 'WSL에 연결…',
		'remote.pick.container': '컨테이너에서 폴더 열기…',
		'remote.pick.codespace': 'Codespace에 연결…',
		remoteExplorer: '원격 탐색기'
	},
	ru: {
		sidexChatIcon: 'Значок SideX',
		sidex: 'SideX',
		toggleSidex: 'Показать или скрыть SideX',
		sidexStatusBarToggle: 'Показать или скрыть SideX',
		sidexToggle: 'SideX',
		auxToggle: 'Дополнительная боковая панель',
		toggleAux: 'Показать или скрыть дополнительную боковую панель',
		sidexInlineEdit: 'SideX: встроенное редактирование',
		showSidexPanel: 'Показать панель SideX',
		sidexSearch: 'Поиск…',
		sidexOpenFolder: 'Открыть папку…',
		sidexCloneRepository: 'Клонировать репозиторий…',
		sidexRecentProjects: 'Недавние проекты…',
		sidexNewWindow: 'Новое окно',
		sidexCloseFolder: 'Закрыть папку',
		sidexSettings: 'Настройки SideX',
		sidexUsage: 'Использование SideX',
		sidexEditorSettings: 'Настройки редактора',
		sidexCommandPalette: 'Палитра команд…',
		sidexKeyboardShortcuts: 'Сочетания клавиш',
		sidexExtensions: 'Расширения',
		sidexConfigureSnippets: 'Настроить фрагменты кода',
		sidexTasks: 'Задачи',
		sidexThemes: 'Темы',
		sidexCheckForUpdates: 'Проверить обновления…',
		sidexDocs: 'Документация',
		sidexCommunity: 'Присоединиться к сообществу',
		sidexSettingsGeneral: 'Общие',
		sidexSettingsUsage: 'Использование',
		sidexSettingsModels: 'Модели',
		sidexSettingsCustomizations: 'Настройка',
		sidexSettingsTools: 'Инструменты и MCP',
		sidexSettingsConfiguration: 'Конфигурация',
		sidexSettingsPreferences: 'Параметры',
		sidexSettingsNotifications: 'Уведомления',
		sidexSettingsIndexing: 'Индексирование и статистика',
		sidexSettingsPrivacy: 'Конфиденциальность',
		sidexBuiltInAgent: 'Включить встроенный агент SideX',
		sidexBuiltInAgentDescription:
			'Запускать локальный сервер агента SideX. Это не влияет на внешние и системные агенты.',
		sidexDefaultModel: 'Модель ИИ по умолчанию',
		sidexDefaultAgentMode: 'Режим агента по умолчанию',
		sidexAutoScroll: 'Автопрокрутка сообщений',
		sidexAgentMode: 'Агент',
		sidexPlanMode: 'План',
		sidexAskMode: 'Спросить',
		sidexDefaultAgentModeDescription: 'Выберите возможности агента по умолчанию для новой задачи в рабочей области.',
		sidexAutoScrollDescription: 'Автоматически прокручивать беседу вниз при получении нового сообщения.',
		sidexDefaultModelEmptyDescription: 'Добавьте модель в разделе «Модели», чтобы выбрать её для новых бесед.',
		sidexConfigureModels: 'Настроить модели',
		sidexNoDefaultModel: 'Без значения по умолчанию (использовать первую доступную)',
		sidexDefaultModelDescription: 'Выберите модель ИИ, с которой по умолчанию будут начинаться новые беседы.',
		sidexSettingsToggleSidebar: 'Показать или скрыть боковую панель',
		sidexSettingsEditor: 'редактор настроек',
		sidexSettingsTitle: 'Настройки',
		sidexSettingsPrevious: 'Предыдущая',
		sidexSettingsNext: 'Следующая',
		sidexSettingsMaximizeModalEditor: 'Развернуть редактор на весь экран',
		sidexSettingsRestoreModalEditor: 'Восстановить размер редактора',
		sidexSettingsCloseModalEditor: 'Закрыть редактор (Esc)',
		sidexSettingsSearch: 'Поиск настроек',
		sidexSettingsTableOfContents: 'Содержание настроек',
		sidexSettingsEditorSettings: 'Настройки редактора',
		sidexSettingsEditorSettingsDescription: 'Настройте внешний вид и поведение редактора',
		sidexSettingsOpen: 'Открыть',
		sidexSettingsNew: 'НОВОЕ',
		sidexSettingsKeyboardShortcuts: 'Сочетания клавиш',
		sidexSettingsKeyboardShortcutsDescription: 'Настройте сочетания клавиш',
		sidexSettingsImportVsCode: 'Импортировать настройки из VS Code',
		sidexSettingsImportVsCodeDescription: 'Импортируйте существующую конфигурацию',
		sidexSettingsImport: 'Импортировать',
		sidexSettingsImportComingSoon: 'Скоро появится — импорт настроек VS Code пока недоступен.',
		sidexSettingsResetDismissedDialogs: 'Сбросить диалоги «Больше не спрашивать»',
		sidexSettingsResetDismissedDialogsDescription: 'Показать ранее скрытые диалоги',
		sidexSettingsShow: 'Показать',
		sidexSettingsDialogsReset: 'Все диалоги сброшены.',
		sidexSettingsSystemNotifications: 'Системные уведомления',
		sidexSettingsSystemNotificationsDescription: 'Показывать уведомления операционной системы',
		sidexSettingsMenuBarIcon: 'Значок в строке меню',
		sidexSettingsMenuBarIconDescription: 'Показывать значок в системном лотке или строке меню',
		sidexSettingsCompletionSound: 'Звук завершения',
		sidexSettingsCompletionSoundDescription: 'Воспроизводить звук при завершении операций',
		sidexSettingsDataSharing: 'Передача данных',
		sidexSettingsDataSharingDescription:
			'Помогите улучшать SideX, передавая анонимные данные об использовании. Код и личные данные никогда не собираются.',
		sidexSettingsModelsDescription:
			'Добавляйте идентификаторы моделей, доступные у ваших провайдеров. Пока модель не добавлена здесь, она не включена.',
		sidexSettingsSearchModels: 'Поиск моделей',
		sidexSettingsNoModelsAdded: 'Модели ещё не добавлены. Добавьте идентификатор модели ниже, чтобы включить её.',
		sidexSettingsAddModel: '+ Добавить модель',
		sidexSettingsModelIdPlaceholder: 'Идентификатор модели (например, anthropic/claude-opus-4.6)',
		sidexSettingsLoadingModels: 'Загрузка моделей…',
		sidexSettingsNoReportedModels: 'Провайдер пока не сообщил модели — введите идентификатор вручную ниже.',
		sidexSettingsModelsAvailable: 'Доступно: {0}. Выберите модель или введите свой идентификатор:',
		sidexSettingsProviderModelsUnavailable:
			'Не удалось получить список моделей у этого провайдера — введите идентификатор вручную ниже.',
		sidexSettingsCustomProvider: 'Другой провайдер',
		sidexSettingsAdd: 'Добавить',
		sidexSettingsCancel: 'Отмена',
		sidexSettingsApiKeys: 'Ключи API',
		sidexSettingsApiKeysDescription:
			'Настройте ключи API провайдеров, чтобы использовать модели через собственные учётные записи.',
		sidexSettingsConfigured: 'Настроенные',
		sidexSettingsMoreProviders: 'Ещё провайдеров: {0}',
		sidexSettingsProviderNoKeyDescription:
			'{0} не требует ключа. Укажите ниже базовый URL, если сервис запущен не по адресу по умолчанию.',
		sidexSettingsProviderConsoleDescription:
			'Получите ключ в <a href="{0}" class="sidex-settings-link" target="_blank">{1}</a>, чтобы использовать его модели через свою учётную запись.',
		sidexSettingsProviderKeyDescription: 'Введите ключ API, чтобы использовать модели {0} через свою учётную запись.',
		sidexSettingsProviderEnvironmentDescription:
			' Автоматически используется, если переменная {0} уже задана в оболочке.',
		sidexSettingsProviderEndpointDescription:
			' У этого провайдера нет конечной точки по умолчанию, поэтому ниже требуется базовый URL.',
		sidexSettingsApiKeyPlaceholder: 'Введите ключ API {0}',
		sidexSettingsBaseUrlPlaceholder: 'Базовый URL (обязательно, например https://ваш-узел/v1)',
		sidexSettingsImportModels: 'Импортировать модели',
		sidexSettingsImportingModels: 'Импорт моделей…',
		sidexSettingsModelsImported: 'Добавлено моделей: {0}.',
		sidexSettingsNoNewModels: 'Новых моделей не найдено.',
		sidexSettingsDetectedOnMachine: 'Обнаружено на этом компьютере',
		sidexSettingsDetectedOnMachineDescription:
			'Учётные данные и серверы моделей, которые SideX может использовать без настройки. Учётная запись не требуется.',
		sidexSettingsNoLocalModelServer: 'Локальный сервер моделей не найден',
		sidexSettingsNoLocalModelServerDescription:
			'Запустите Ollama или LM Studio и снова откройте эту панель, чтобы использовать локальные модели без ключа.',
		sidexSettingsLocalServerReady: '{0} — готов',
		sidexSettingsServerModels: 'Моделей: {0}; адрес: {1}',
		sidexSettingsServerNoModels: 'Сервер запущен по адресу {0}, но модели ещё не загружены.',
		sidexSettingsSubscriptionLogin: 'Вход по подписке, а не оплачиваемый ключ API.',
		sidexSettingsEnvironmentKey: 'Используется ключ из вашей оболочки. Введённый выше ключ имеет приоритет.',
		sidexSettingsProviderEndpointRequired:
			'У {0} нет конечной точки по умолчанию — введите базовый URL для сохранения.',
		sidexSettingsAccountLabel: 'Учётная запись {0}',
		sidexSettingsDisconnect: 'Отключить',
		sidexSettingsConnect: 'Подключить',
		sidexSettingsAccountExpired: 'Выполнен выход или срок действия истёк. Войдите в {0} снова, затем подключитесь.',
		sidexSettingsConnectedAs: 'Подключено — {0}',
		sidexSettingsConnectedAt: 'Подключено — используется вход из {0}',
		sidexSettingsSignedInAs: 'Выполнен вход как {0}. Подключитесь, чтобы использовать модели {1}.',
		sidexSettingsAccountFoundAt: 'Найдено в {0}. Подключитесь, чтобы использовать модели {1}.',
		sidexSettingsNotSignedIn: 'На этом компьютере не выполнен вход в {0}.',
		sidexSettingsUsingEnvironment: '{0} — используется {1}',
		sidexSettingsYourEnvironment: 'ваше окружение',
		sidexSettingsDisconnectAccount: 'Отключить {0}?',
		sidexSettingsDisconnectAccountDescription: 'SideX перестанет использовать вход {0} для моделей {1}.',
		sidexSettingsDisconnectAccountNotice: 'Сама учётная запись не изменится — SideX лишь перестанет читать её данные.',
		sidexSettingsSignedInAccount: 'учётную запись, в которую выполнен вход на этом компьютере',
		sidexSettingsConnectAccountDescription: 'SideX будет использовать вход {0} ({1}) для запуска моделей {2}.',
		sidexSettingsConnectAccountNotice:
			'Учётные данные читаются из {0} и передаются только серверу агента, запущенному на этом компьютере. Они никогда не отправляются куда-либо ещё и не показываются в приложении.',
		sidexSettingsConnectAccount: 'Подключить {0}?',
		sidexSettingsSubscriptionCaution:
			'Это вход по подписке, а не оплачиваемый ключ API. Его использование в другом приложении может противоречить условиям {0} — ввод ключа API выше полностью исключает этот риск.',
		sidexSettingsConnectingAccount: 'Подключение учётной записи {0}…',
		sidexSettingsDisconnectingAccount: 'Отключение учётной записи {0}…',
		sidexSettingsConnectedModelsAdded: 'Подключено — добавлено моделей: {0}.',
		sidexSettingsRulesSkillsHooks: 'Правила, навыки и хуки',
		sidexSettingsRulesSkillsHooksDescription: 'Добавляйте знания предметной области и рабочие процессы для агента',
		sidexSettingsRules: 'Правила',
		sidexSettingsRulesDescription: 'Направляйте поведение агента: стандарты кода, практики и соглашения',
		sidexSettingsNoRulesYet: 'Правил пока нет',
		sidexSettingsNewRule: 'Новое правило',
		sidexSettingsSkills: 'Навыки',
		sidexSettingsSkillsDescription: 'Специализированные возможности, помогающие агенту выполнять конкретные задачи',
		sidexSettingsNoSkillsYet: 'Навыков пока нет',
		sidexSettingsNewSkill: 'Новый навык',
		sidexSettingsRulesScope: 'Область правил',
		sidexSettingsRulesScopeDescription: 'Фильтруйте правила и навыки по области пользователя или проекта',
		sidexSettingsThirdPartyIntegrations: 'Подключать сторонние плагины, навыки и другие конфигурации',
		sidexSettingsThirdPartyIntegrationsDescription: 'Автоматически импортировать из других инструментов',
		sidexSettingsAll: 'Все',
		sidexSettingsUser: 'Пользователь',
		sidexSettingsProject: 'Проект',
		sidexSettingsEdit: 'Изменить',
		sidexSettingsHooks: 'Хуки',
		sidexSettingsHooksDescription: 'Хуки жизненного цикла, запускаемые при событиях агента',
		sidexSettingsNoHooksConfigured: 'Хуки не настроены. Управляйте ими в разделе настроек «Хуки».',
		sidexSettingsEnabled: 'Включено',
		sidexSettingsDisabled: 'Отключено',
		sidexSettingsContext: 'Контекст',
		sidexSettingsWebSearchTool: 'Инструмент веб-поиска',
		sidexSettingsAutoAcceptWebSearch: 'Автоматически принимать веб-поиск',
		sidexSettingsAutoAcceptWebSearchDescription: 'Включается режимом автозапуска «Выполнять всё»',
		sidexSettingsWebFetchTool: 'Инструмент загрузки веб-страниц',
		sidexSettingsAutoRun: 'Автозапуск',
		sidexSettingsAutoRunMode: 'Режим автозапуска',
		sidexSettingsAutoRunEverything: 'Выполнять всё (без песочницы)',
		sidexSettingsAutoRunAsk: 'Запрашивать подтверждение',
		sidexSettingsAutoRunSandboxed: 'В песочнице',
		sidexSettingsAllowBackground: 'Разрешить SideX работать в фоне',
		sidexSettingsAllowBackgroundDescription:
			'SideX продолжит работу при переключении бесед. Команды терминала могут выполняться в фоне в зависимости от настройки автозапуска.',
		sidexSettingsAutoOpenEditedFiles: 'Автоматически открывать изменённые файлы',
		sidexSettingsAutoOpenEditedFilesDescription: 'Открывать в фоне файлы, которые SideX создаёт или изменяет.',
		sidexSettingsPreview: 'Предпросмотр SideX',
		sidexSettingsPreviewDescription:
			'SideX открывает в браузере предпросмотры запущенных им серверов разработки, встраивая их в рабочий процесс.',
		sidexSettingsGitignoreAccess: 'Доступ к .gitignore',
		sidexSettingsGitignoreAccessDescription:
			'Разрешить SideX, Tab и Supercomplete просматривать и изменять файлы в .gitignore.',
		sidexSettingsAutoWebRequests: 'Автоматические веб-запросы',
		sidexSettingsAutoWebRequestsDescription:
			'Отключено (ручное подтверждение), список разрешений (только одобренные источники), Turbo (всегда загружать)',
		sidexSettingsAllowlist: 'Список разрешений',
		sidexSettingsTurbo: 'Турбо',
		sidexSettingsAddCommandPattern:
			'Введите шаблон команды для добавления в «{0}» (например, «git *» или «npm run test»):',
		sidexSettingsEditCommandPattern: 'Изменить шаблон команды:',
		sidexSettingsNoItems: 'Нет элементов',
		sidexSettingsOriginsHint:
			'Источники должны включать схему и порт, если он нестандартный (например, «https://github.com» или «http://localhost:3000»).',
		sidexSettingsAllowedOrigins: 'Разрешённые источники',
		sidexSettingsAllowedOriginsDescription: 'Источники, с которых SideX автоматически загружает URL',
		sidexSettingsAddOrigin: 'Введите URL источника для добавления (например, «https://api.github.com»):',
		sidexSettingsEditOrigin: 'Изменить URL источника:',
		sidexSettingsExport: 'Экспортировать',
		sidexSettingsImportOrigins: 'Импорт разрешённых источников из CSV/TXT…',
		sidexSettingsExportOrigins: 'Экспорт списка разрешённых источников в CSV…',
		sidexSettingsResetDefaults: 'Сбросить к значениям по умолчанию',
		sidexSettingsResetOriginsConfirmation: 'Сбросить разрешённые источники к значениям по умолчанию?',
		sidexSettingsNoWorkspaceOpen: 'Рабочая область не открыта',
		sidexSettingsNoWorkspaceOpenDescription:
			'Откройте папку (Файл > Открыть папку), чтобы индексировать кодовую базу для быстрого поиска.',
		sidexSettingsLoadingIndexStats: 'Загрузка статистики индекса…',
		sidexSettingsCodebaseIndexing: 'Индексирование кодовой базы',
		sidexSettingsComputing: 'Выполняется вычисление…',
		sidexSettingsFileCount: 'Файлов: {0}',
		sidexSettingsIndexingInProgress: 'Индексирование…',
		sidexSettingsSync: 'Синхронизировать',
		sidexSettingsDeleteIndex: 'Удалить индекс',
		sidexSettingsDeleting: 'Удаление…',
		sidexSettingsRemoteIndexDescription:
			'Кодовая база индексируется на этом компьютере с помощью ключевого поиска BM25, а результаты дополняются настроенным удалённым семантическим индексом через SIDEX_CLOUD_API. Туда отправляются поисковые запросы — сам код никогда не покидает этот компьютер.',
		sidexSettingsLocalIndexDescription:
			'Кодовая база индексируется на этом компьютере с помощью ключевого поиска BM25. Ничего не покидает этот компьютер — облачный индекс не настроен.',
		sidexSettingsAutoIndex: 'Автоматически индексировать новые папки',
		sidexSettingsAutoIndexDescription: 'Автоматически переиндексировать при изменении файлов',
		sidexSettingsRespectGitignore: 'Учитывать .gitignore',
		sidexSettingsRespectGitignoreDescription: 'Пропускать файлы и каталоги, указанные в .gitignore',
		sidexSettingsInstantGrep: 'Мгновенный grep',
		sidexSettingsInstantGrepDescription: 'Использовать локальный индекс для быстрого grep по кодовой базе',
		sidexSettingsTauriUnavailable: 'Tauri недоступен.',
		sidexSettingsLoading: 'Загрузка…',
		sidexSettingsUsageUnavailable: 'Данные об использовании недоступны.',
		sidexSettingsMonthly: 'Ежемесячно',
		sidexSettingsPlanLimitsUnavailable:
			'Лимиты плана появятся здесь после ответа этой учётной записи на запрос использования.',
		sidexSettingsApiKeyUsageDescription:
			'У ключей API нет пятичасового или еженедельного лимита сессии — ниже указаны расходы, записанные SideX.',
		sidexSettingsExtraUsage: 'Дополнительное использование',
		sidexSettingsTokensInSidex: 'Токены в SideX',
		sidexSettingsTokensDirection: 'Входящие: {0}; исходящие: {1}; {2}',
		sidexSettingsTokensDirectionNoCost: 'Входящие: {0}; исходящие: {1}',
		sidexSettingsAllProviders: 'Все провайдеры',
		sidexSettingsUsageSourceDescription: 'Полосы сессий берутся из подключённой учётной записи Claude Code или Codex.',
		sidexSettingsResetsAt: 'Сброс: {0}',
		sidexSettingsResetsInMinutes: 'Сброс через {0} мин.',
		sidexSettingsResetsInHours: 'Сброс через {0} ч · {1}',
		sidexSettingsRemaining: 'Осталось: {0}',
		sidexSettingsUsageOfLimit: '{0} из {1}',
		sidexSettingsNotEnabledOnPlan: 'Не включено в этом плане',
		sidexSettingsConnectedAccount: 'Подключённая учётная запись',
		sidexSettingsApiKey: 'Ключ API',
		sidexSettingsRecordedInSidex: 'Записано в SideX',
		remoteExplorer: 'Удалённый обозреватель',
		remoteExplorerViewIcon: 'Значок представления удалённого обозревателя.',
		'sidex.remote.refresh': 'Обновить удалённый обозреватель',
		'sidex.remote.connect': 'Подключиться к удалённой среде',
		'sidex.remote.openExplorer': 'Удалённый обозреватель',
		'sidex.remote.openWindow': 'Подключиться к…',
		'sidex.remote.signInTunnel': 'Войти в удалённые туннели',
		'remote.notImplemented': 'Подключение к {0} скоро появится',
		'remote.connect': 'Подключиться',
		'remote.pick.placeholder': 'Выберите вариант, чтобы открыть удалённое окно',
		'remote.pick.connectToTunnel': 'Подключиться к туннелю…',
		'remote.pick.tunnelsProvider': 'Удалённые туннели',
		'remote.pick.connectToHost': 'Подключиться к узлу…',
		'remote.pick.sshProvider': 'Удалённый SSH',
		'remote.pick.wsl': 'Подключиться к WSL…',
		'remote.pick.wslProvider': 'Удалённый WSL',
		'remote.pick.container': 'Открыть папку в контейнере…',
		'remote.pick.containerProvider': 'Контейнеры разработки',
		'remote.pick.codespace': 'Подключиться к Codespace…',
		'remote.pick.codespaceProvider': 'GitHub Codespaces',
		'remote.codespace.tokenPrompt': 'Персональный токен доступа GitHub с областью codespace',
		'remote.codespace.none': 'Для этой учётной записи не найдено Codespaces.',
		'remote.codespace.pick': 'Выберите Codespace',
		'remote.codespace.connected': 'Подключено к Codespace: {0}',
		'remote.codespace.failed': 'Не удалось подключиться к Codespace: {0}',
		'remote.github.code': 'Код {0} скопирован в буфер обмена. Вставьте его на GitHub, чтобы войти.',
		'remote.github.timeout': 'Время ожидания входа через GitHub истекло.',
		'remote.github.success': 'Выполнен вход в GitHub. Теперь можно просматривать Codespaces и туннели.',
		'remote.signInMicrosoft': 'Войти с учётной записью Microsoft',
		'remote.signInGitHub': 'Войти с учётной записью GitHub',
		'remote.signIn': 'Войти',
		'remote.tunnelsProvider': 'Удалённые туннели',
		'remote.tunnels': 'Туннели',
		'remote.ssh': 'SSH',
		'remote.ssh.noHosts': 'В ~/.ssh/config не найдено SSH-узлов',
		'remote.ssh.manual': 'Добавить новый SSH-узел…',
		'remote.ssh.manualHint': 'пользователь@узел[:порт]',
		'remote.ssh.pick': 'Выберите SSH-узел из ~/.ssh/config',
		'remote.ssh.empty': 'В ~/.ssh/config нет SSH-узлов — добавьте один ниже',
		'remote.ssh.enter': 'Введите пользователь@узел[:порт]',
		'remote.ssh.invalid': 'Недопустимый формат узла',
		'remote.ssh.connected': 'Подключено к {0}@{1}',
		'remote.ssh.failed': 'Не удалось подключиться по SSH: {0}',
		'remote.codespaces.signIn': 'Войдите через GitHub, чтобы увидеть свои Codespaces',
		'remote.codespaces.empty': 'Codespaces не найдены',
		'remote.codespaces': 'GitHub Codespaces',
		'remote.wsl': 'Дистрибутивы WSL',
		'remote.wsl.unavailable': 'WSL недоступен на этом компьютере. Для WSL требуется Windows 10/11 с установленным WSL.',
		'remote.wsl.default': '(по умолчанию)',
		'remote.wsl.pick': 'Выберите дистрибутив WSL',
		'remote.wsl.connected': 'Подключено к WSL: {0}',
		'remote.wsl.failed': 'Не удалось подключиться к WSL: {0}',
		'remote.containers': 'Контейнеры разработки',
		'remote.containers.noContainers': 'Запущенные контейнеры не найдены',
		'remote.container.openConfig': 'Открыть папку с devcontainer.json…',
		'remote.container.configHint': 'Введите путь к файлу devcontainer.json',
		'remote.container.noRunning':
			'Запущенные контейнеры не найдены. Запустите контейнер через Docker/Podman или выберите файл devcontainer.json ниже.',
		'remote.container.pick': 'Выберите запущенный контейнер или devcontainer.json',
		'remote.container.enterPath': 'Путь к devcontainer.json',
		'remote.container.connected': 'Подключено к контейнеру: {0}',
		'remote.container.failed': 'Не удалось подключиться к контейнеру: {0}',
		'host.tooltip': 'Удалённая среда — подключено к {0}',
		'noHost.tooltip': 'Открыть удалённое окно',
		'sidex.update.available': 'Доступно обновление SideX {0}.',
		'sidex.update.installNow': 'Установить сейчас',
		'sidex.update.downloadTooltip': 'Скачать и установить обновление в фоновом режиме',
		'sidex.update.later': 'Позже',
		'sidex.update.remindLater': 'Напомнить позже',
		'sidex.update.ready': 'SideX {0} успешно скачан и готов к установке.',
		'sidex.update.restart': 'Перезапустить для обновления',
		'sidex.update.restartTooltip': 'Перезапустить SideX, чтобы применить обновление',
		'sidex.update.nextRestart': 'Применить при следующем перезапуске',
		'sidex.git.filter': 'Фильтровать ветки, тайники, теги…',
		'sidex.git.loading': 'Загрузка…',
		'sidex.git.errorLoading': 'Не удалось загрузить данные',
		'sidex.git.selected': 'выбрана',
		'sidex.git.localBranches': 'Локальные ветки',
		'sidex.git.remoteBranches': 'Удалённые ветки',
		'sidex.git.tags': 'Теги',
		'sidex.git.stashes': 'Тайники',
		'sidex.git.newBranch': 'Создать ветку…',
		'sidex.git.renameBranch': 'Переименовать ветку…',
		'sidex.git.deleteBranch': 'Удалить ветку…',
		'sidex.git.fetchAll': 'Получить все удалённые изменения',
		'sidex.git.pull': 'Получить изменения',
		'sidex.git.push': 'Отправить изменения',
		'sidex.git.commit': 'Создать коммит…',
		'sidex.git.mergeBranch': 'Слить ветку…',
		'sidex.git.rebase': 'Перебазировать…',
		'sidex.git.stashChanges': 'Спрятать изменения…',
		'sidex.git.popStash': 'Извлечь из тайника…',
		'sidex.git.applyStash': 'Применить тайник…',
		'sidex.chat.newChat': 'Новый чат',
		'sidex.chat.searchChats': 'Поиск чатов…',
		'sidex.chat.pin': 'Закрепить',
		'sidex.chat.archive': 'Архивировать',
		'sidex.chat.rename': 'Переименовать',
		'sidex.chat.delete': 'Удалить',
		'sidex.chat.more': 'Дополнительно',
		'sidex.chat.openBrowser': 'Открыть браузер',
		'sidex.chat.usage': 'Использование',
		'sidex.chat.configureRules': 'Настроить правила',
		'sidex.chat.configureSkills': 'Настроить навыки',
		'sidex.chat.editMemories': 'Изменить память',
		'sidex.chat.mcps': '{0} MCP',
		'sidex.chat.configureMcpServers': 'Настроить MCP-серверы',
		'sidex.chat.noPastChats': 'Предыдущих чатов нет',
		'sidex.chat.untitled': 'Без названия',
		'sidex.chat.dropFiles': 'Перетащите файлы, чтобы прикрепить',
		'sidex.chat.inputPlaceholder': 'Планируйте, разрабатывайте, используйте / для команд и @ для контекста',
		'sidex.chat.contextUsage': 'Показать подробное использование контекста',
		'sidex.chat.attach': 'Прикрепить',
		'sidex.chat.send': 'Отправить',
		'sidex.chat.stop': 'Остановить',
		'sidex.chat.environmentMode': 'Режим подключения к среде SideX',
		'sidex.chat.local': 'Локальная',
		'sidex.chat.worktree': 'Рабочее дерево',
		'sidex.chat.cloud': 'Облако',
		'sidex.chat.worktreeSoon': 'Режим рабочего дерева — скоро',
		'sidex.chat.cloudSoon': 'Облачный режим — скоро',
		'sidex.chat.soon': 'скоро',
		'sidex.chat.noModelsEnabled': 'Нет включённых моделей — включите модели в настройках',
		'sidex.chat.ultraMode': 'Режим ULTRA',
		'sidex.chat.effort': 'Уровень усилий',
		'sidex.chat.reasoningNone': 'Нет',
		'sidex.chat.reasoningLow': 'Низкий',
		'sidex.chat.reasoningMedium': 'Средний',
		'sidex.chat.reasoningHigh': 'Высокий',
		'sidex.chat.reasoningUltra': 'Ультра',
		'sidex.chat.unresolvedMention': 'Не удалось разрешить: {0}',
		'sidex.chat.removeAttachment': 'Удалить {0}',
		'sidex.chat.attachedImage': 'Прикреплённое изображение',
		'sidex.chat.copy': 'Копировать',
		'sidex.chat.thought': 'Размышление',
		'sidex.chat.elapsedSeconds': '{0} с',
		'sidex.chat.elapsedMinutes': '{0} мин {1} с',
		'sidex.chat.elapsedMinutesOnly': '{0} мин',
		'sidex.chat.running': 'Выполняется…',
		'sidex.chat.completed': 'Завершено',
		'sidex.chat.failed': 'Сбой',
		'sidex.chat.reject': 'Отклонить',
		'sidex.chat.accept': 'Принять',
		'sidex.chat.expandDiff': 'Развернуть различия',
		'sidex.chat.collapseDiff': 'Свернуть различия',
		'sidex.chat.cancel': 'Отмена',
		'sidex.chat.confirm': 'Подтвердить',
		'sidex.chat.planReady': 'План готов к проверке',
		'sidex.chat.planImplementationNotice': 'Агент хочет начать реализацию (см. его план выше в беседе).',
		'sidex.chat.keepPlanning': 'Продолжить планирование',
		'sidex.chat.approvePlan': 'Одобрить план',
		'sidex.chat.allow': 'Разрешить',
		'sidex.chat.runCommand': 'Выполнить команду',
		'sidex.chat.runBackgroundProcess': 'Запустить фоновый процесс',
		'sidex.chat.killProcess': 'Завершить процесс',
		'sidex.chat.writeTo': 'Записать в',
		'sidex.chat.edit': 'Изменить',
		'sidex.chat.patch': 'Применить патч',
		'sidex.chat.replaceIn': 'Заменить в',
		'sidex.chat.editNotebook': 'Изменить блокнот',
		'sidex.chat.commit': 'Создать коммит',
		'sidex.chat.runRepl': 'Запустить REPL',
		'sidex.chat.runPowerShell': 'Запустить PowerShell',
		'sidex.chat.deleteFile': 'Удалить',
		'sidex.chat.configureProviders': 'Настроить провайдеров',
		'sidex.chat.connectedProviders': 'Подключённые провайдеры',
		'sidex.chat.providers': 'Провайдеры',
		'sidex.chat.noProviders': 'Провайдеры ещё не подключены. Добавьте ключ API ниже, чтобы начать чат.',
		'sidex.chat.apiKey': 'Ключ API',
		'sidex.chat.environment': 'Окружение',
		'sidex.chat.cliLogin': 'Вход через CLI',
		'sidex.chat.localServer': 'Локальный сервер',
		'sidex.chat.toolRead': 'Прочитано: {0}',
		'sidex.chat.toolWrote': 'Записано: {0}',
		'sidex.chat.toolEdited': 'Изменено: {0}',
		'sidex.chat.toolCreated': 'Создано: {0}',
		'sidex.chat.toolDeleted': 'Удалено: {0}',
		'sidex.chat.toolRan': 'Выполнено: {0}',
		'sidex.chat.toolSearchedFor': 'Поиск: «{0}»',
		'sidex.chat.toolFoundMatching': 'Найдены файлы по шаблону: «{0}»',
		'sidex.chat.toolGitStatus': 'Проверено состояние Git',
		'sidex.chat.toolGitLog': 'Просмотрен журнал Git',
		'sidex.chat.toolDiffed': 'Сравнено: {0}',
		'sidex.chat.toolCommitted': 'Создан коммит: {0}',
		'sidex.chat.toolListed': 'Показано: {0}',
		'sidex.chat.toolReadMultiple': 'Прочитано несколько файлов',
		'sidex.chat.toolInspectedSymbol': 'Изучен символ в {0}',
		'sidex.chat.toolFoundDefinition': 'Найдено определение в {0}',
		'sidex.chat.toolFoundReferences': 'Найдены ссылки в {0}',
		'sidex.chat.toolFile': 'файл',
		'sidex.chat.toolRevertUnavailable': 'Откат недоступен: не найден локальный мост инструментов',
		'sidex.chat.toolRevertFailed': 'Не удалось откатить изменения: {0}',
		'sidex.chat.toolRevertMissingContent':
			'Нельзя откатить изменения: исходное содержимое файла неизвестно в этом сеансе',
		'sidex.chat.toolRevertNotice': '{0} — файл на диске НЕ восстановлен. Перечитайте его, чтобы проверить состояние.'
	}
};

export async function loadNlsMessages(): Promise<void> {
	const locale = localStorage.getItem('vscode.nls.locale');
	console.log('[SideX NLS] locale from localStorage:', locale);

	if (!locale || locale.toLowerCase().startsWith('en')) {
		return;
	}

	let extensionId = localStorage.getItem('vscode.nls.languagePackExtensionId');
	console.log('[SideX NLS] extensionId from localStorage:', extensionId);

	if (!extensionId) {
		extensionId = await detectInstalledLanguagePack(locale);
		if (extensionId) {
			localStorage.setItem('vscode.nls.languagePackExtensionId', extensionId);
			console.log('[SideX NLS] auto-detected language pack:', extensionId);
		} else {
			console.warn('[SideX NLS] No language pack found for locale:', locale);
			await loadSidexOnlyMessages(locale);
			return;
		}
	}

	try {
		const translations = (await loadFromDisk(extensionId)) ?? (await loadFromGallery(extensionId));

		if (!translations) {
			console.warn('[SideX NLS] No translations found for', extensionId);
			return;
		}

		const sidexExtra = getSidexTranslations(locale);

		const indexRes = await fetch('/nls.messages.json');
		if (indexRes.ok) {
			const contentType = indexRes.headers.get('content-type') ?? '';
			if (contentType.includes('json')) {
				const nlsEntries: NlsEntry[] = await indexRes.json();
				if (nlsEntries.length > 0) {
					(globalThis as any)._VSCODE_NLS_MESSAGES = nlsEntries.map(
						entry => translations[scopedTranslationKey(entry.module, entry.key)] ?? sidexExtra?.[entry.key] ?? entry.msg
					);
					(globalThis as any)._VSCODE_NLS_LANGUAGE = locale;
					console.log(`[SideX NLS] Loaded ${nlsEntries.length} translations for ${locale} (indexed mode)`);
					return;
				}
			}
		}

		(globalThis as any)._VSCODE_NLS_TRANSLATIONS = sidexExtra ?? {};
		(globalThis as any)._VSCODE_NLS_LANGUAGE = locale;
		console.log(`[SideX NLS] Loaded ${Object.keys(translations).length} translations for ${locale} (key mode)`);
	} catch (e) {
		console.warn('[SideX NLS] Failed to load translations:', e);
	}
}

async function loadSidexOnlyMessages(locale: string): Promise<void> {
	const sidexExtra = getSidexTranslations(locale);
	if (!sidexExtra) {
		return;
	}

	const indexRes = await fetch('/nls.messages.json');
	if (!indexRes.ok || !(indexRes.headers.get('content-type') ?? '').includes('json')) {
		return;
	}

	const entries: NlsEntry[] = await indexRes.json();
	(globalThis as any)._VSCODE_NLS_MESSAGES = entries.map(entry => sidexExtra[entry.key] ?? entry.msg);
	(globalThis as any)._VSCODE_NLS_LANGUAGE = locale;
}

async function loadFromDisk(extensionId: string): Promise<Translations | null> {
	try {
		const { invoke } = await import('@tauri-apps/api/core');

		const homedir: string | null =
			(await invoke<string>('get_env', { key: 'HOME' }).catch(() => null)) ??
			(await invoke<string>('get_env', { key: 'USERPROFILE' }).catch(() => null));

		if (!homedir) {
			return null;
		}

		const path = `${homedir}/.sidex/extensions/${extensionId}/translations/main.i18n.json`;
		const raw = await invoke<string>('read_file', { path });
		const result = parseBundle(raw);
		if (result) {
			console.log(`[SideX NLS] Loaded translations from disk: ${path}`);
		}
		return result;
	} catch {
		return null;
	}
}

async function loadFromGallery(extensionId: string): Promise<Translations | null> {
	const [publisher, name] = extensionId.split('.');
	if (!publisher || !name) {
		return null;
	}

	const urls = [
		`https://marketplace.siden.ai/api/gallery/publishers/${publisher}/vsextensions/${name}/latest/vspackage`,
		`https://open-vsx.org/api/${publisher}/${name}/latest`
	];

	for (const metaUrl of urls) {
		try {
			const meta = await fetch(metaUrl).then(r => (r.ok ? r.json() : null));
			if (!meta?.version) {
				continue;
			}
			const translationUrl = `https://open-vsx.org/vscode/unpkg/${publisher}/${name}/${meta.version}/extension/translations/main.i18n.json`;
			const res = await fetch(translationUrl);
			if (res.ok) {
				const result = parseBundle(await res.text());
				if (result) {
					console.log(`[SideX NLS] Loaded translations from gallery`);
					return result;
				}
			}
		} catch {
			continue;
		}
	}
	return null;
}

function parseBundle(raw: string): Translations | null {
	try {
		const bundles = JSON.parse(raw)?.contents;
		if (!bundles) {
			return null;
		}
		const messages: Translations = {};
		for (const [module, bundle] of Object.entries(bundles)) {
			if (!bundle || typeof bundle !== 'object') {
				continue;
			}
			for (const [key, message] of Object.entries(bundle)) {
				if (typeof message === 'string') {
					messages[scopedTranslationKey(module, key)] = message;
				}
			}
		}
		return messages;
	} catch {
		return null;
	}
}

function scopedTranslationKey(module: string, key: string): string {
	return `${module}\0${key}`;
}

function localeCandidates(locale: string): [string, string] {
	const normalized = locale.toLowerCase().replace(/_/g, '-');
	return [normalized, normalized.split('-')[0]];
}

function getSidexTranslations(locale: string): Translations | undefined {
	const [normalized, language] = localeCandidates(locale);
	return sidexTranslations[normalized] ?? sidexTranslations[language];
}

const localeToPackName: Record<string, string> = {
	'zh-cn': 'MS-CEINTL.vscode-language-pack-zh-hans',
	'zh-tw': 'MS-CEINTL.vscode-language-pack-zh-hant',
	ja: 'MS-CEINTL.vscode-language-pack-ja',
	ko: 'MS-CEINTL.vscode-language-pack-ko',
	de: 'MS-CEINTL.vscode-language-pack-de',
	fr: 'MS-CEINTL.vscode-language-pack-fr',
	es: 'MS-CEINTL.vscode-language-pack-es',
	it: 'MS-CEINTL.vscode-language-pack-it',
	'pt-br': 'MS-CEINTL.vscode-language-pack-pt-BR',
	ru: 'MS-CEINTL.vscode-language-pack-ru',
	tr: 'MS-CEINTL.vscode-language-pack-tr',
	pl: 'MS-CEINTL.vscode-language-pack-pl',
	cs: 'MS-CEINTL.vscode-language-pack-cs',
	hu: 'MS-CEINTL.vscode-language-pack-hu'
};

async function detectInstalledLanguagePack(locale: string): Promise<string | null> {
	const [normalized, language] = localeCandidates(locale);
	const knownId = localeToPackName[normalized] ?? localeToPackName[language];
	if (!knownId) {
		return null;
	}
	try {
		const { invoke } = await import('@tauri-apps/api/core');
		const homedir: string | null =
			(await invoke<string>('get_env', { key: 'HOME' }).catch(() => null)) ??
			(await invoke<string>('get_env', { key: 'USERPROFILE' }).catch(() => null));
		if (!homedir) {
			return null;
		}
		const path = `${homedir}/.sidex/extensions/${knownId}/translations/main.i18n.json`;
		await invoke<string>('read_file', { path });
		return knownId;
	} catch {
		return null;
	}
}
