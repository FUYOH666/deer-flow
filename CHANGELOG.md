# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed

- **Telegram channel**: исправлен конфликт event loop — бот не отвечал из‑за `RuntimeError: bound to a different event loop`. Polling теперь работает в том же loop, что и Gateway.

### Added

- **Telegram `allowed_users`**: ограничение доступа — бот отвечает только указанным user ID. Переменная `TELEGRAM_ALLOWED_USER_ID` в `.env`, опциональный синтаксис `$VAR?` в конфиге.
- **CHANGELOG.md**: журнал изменений.
