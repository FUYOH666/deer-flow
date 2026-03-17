# DeerFlow

**Deploy a SuperAgent for your team — research, code, long tasks. Local. Multilingual.**

Fork of [bytedance/deer-flow](https://github.com/bytedance/deer-flow) with Russian and Thai support. Neutral branding, local LLM, no cloud APIs.

---

## The Problem

ChatGPT has context limits. Cloud agents send data out. Your team needs a private AI for multi-hour tasks — research, coding, creative work.

## The Solution

Self-hosted SuperAgent with sandbox, memory, tools. Russian, Thai, English. Voice in Telegram. No cloud APIs. Tasks from minutes to hours.

## Results

- **Before:** Context limits, data in the cloud, no voice
- **After:** Full context, your infrastructure, voice messages in Telegram

---

## Quick Start

```bash
make config
make install
make dev
```

App: http://localhost:2026

### Configuration (`.env`)

| Variable | Purpose |
|----------|---------|
| `LOCAL_AI_LLM_BASE_URL` | LLM (llama.cpp), must end with `/v1` |
| `LOCAL_AI_ASR_BASE_URL` | ASR for Telegram voice |
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `TAVILY_API_KEY` | Web search |

### Response language (`config.yaml`)

```yaml
response_language: "ru"   # or "th", "en"
```

---

## Deploy This For Your Business

This is open-source. You can run it yourself.

Or I can deploy, customize, and integrate it for your company in **2 weeks**.

**Fixed price: $3,000** — AI Agent package. Custom deployment, your infrastructure. Includes setup and 30 days of support.

→ **Email:** iamfuyoh@gmail.com  
→ **Telegram:** [@ScanovichAI](https://t.me/ScanovichAI)

---

## Tech Stack

**Fork differences:** Neutral "Assistant" branding, Russian/Thai in UI and responses, local model only, Telegram voice (ASR), Markdown in Telegram, command menu (/new, /help).

**Original:** [bytedance/deer-flow](https://github.com/bytedance/deer-flow) · [deerflow.tech](https://deerflow.tech/)

📖 [README на русском](docs/README_RU.md) · 📖 [README ภาษาไทย](docs/README_TH.md)

**License:** MIT. [scanovich.ai](https://scanovich.ai) · [@FUYOH666](https://github.com/FUYOH666)
