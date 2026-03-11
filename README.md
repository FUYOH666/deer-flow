# DeerFlow — форк с поддержкой русского и тайского

> Форк [bytedance/deer-flow](https://github.com/bytedance/deer-flow) с полной поддержкой русского и тайского языков.

**DeerFlow** — SuperAgent для исследований, кода и творчества. С sandbox, памятью, инструментами и skills обрабатывает задачи от минут до часов.

## Отличия форка

- **Адаптация для личного использования** — нейтральный «Ассистент» вместо DeerFlow, без брендинга в UI и ответах
- **Русский и тайский** в UI и ответах агента
- **Локальная модель** — без облачных API, без IP в репозитории
- Голосовые сообщения в Telegram (ASR)
- Форматирование Markdown в Telegram (жирный, курсив, ссылки)
- Меню команд (/new, /help и др.)

📖 [README на русском](docs/README_RU.md) · 📖 [README ภาษาไทย](docs/README_TH.md)

## Установка

```bash
make config
make install
make dev
```

Приложение: http://localhost:2026

## Конфигурация

### Переменные окружения (`.env`)

Создайте `.env` в корне по образцу `.env.example`:

| Переменная | Назначение |
|------------|------------|
| `LOCAL_AI_LLM_BASE_URL` | LLM (llama.cpp), должен заканчиваться на `/v1` |
| `LOCAL_AI_ASR_BASE_URL` | ASR для голосовых в Telegram (например, `http://your-tailscale-ip:8001`) |
| `TELEGRAM_BOT_TOKEN` | Токен бота от @BotFather |
| `TELEGRAM_ALLOWED_USER_ID` | (опционально) Только этот user может писать боту. Узнать ID: @userinfobot. Не задано = все |
| `TAVILY_API_KEY` | Поиск в интернете (web search) |

### Язык ответов агента

В `config.yaml`:

```yaml
response_language: "ru"   # агент отвечает на русском
# или
response_language: "th"   # агент отвечает на тайском
```

Если не указано — агент следует языку пользователя.

### Язык интерфейса

Settings → Appearance → Language: English, 中文, Русский, ไทย.

---

## Оригинальный проект

- [github.com/bytedance/deer-flow](https://github.com/bytedance/deer-flow)
- [deerflow.tech](https://deerflow.tech/)
