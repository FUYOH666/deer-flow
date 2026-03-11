# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed

- **Адаптация для личного использования**: убран брендинг DeerFlow — нейтральный «Ассистент» в UI, промптах, Telegram, Gateway. Память используется молча (без упоминаний в ответах). Удалены Output Attribution и Deerflow-подпись в frontend-design skill. Приветственные экраны и sidebar — нейтральные формулировки.

### Fixed

- **Telegram channel**: исправлен конфликт event loop — бот не отвечал из‑за `RuntimeError: bound to a different event loop`. Polling теперь работает в том же loop, что и Gateway.

### Added

- **Telegram `allowed_users`**: ограничение доступа — бот отвечает только указанным user ID. Переменная `TELEGRAM_ALLOWED_USER_ID` в `.env`, опциональный синтаксис `$VAR?` в конфиге.
- **CHANGELOG.md**: журнал изменений.
