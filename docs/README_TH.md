# DeerFlow — ฟอร์กพร้อมรองรับภาษาไทยและรัสเซีย

ฟอร์ก DeerFlow ที่รองรับภาษาไทยและรัสเซียอย่างสมบูรณ์ทั้งในอินเทอร์เฟซและคำตอบของเอเจนต์

## ความแตกต่าง

- **ภาษาไทยและรัสเซีย** ใน UI และคำตอบของเอเจนต์
- **โมเดลท้องถิ่น** — ไม่ใช้ API บนคลาวด์ ไม่มี IP ใน repository
- ข้อความเสียงใน Telegram (ASR)
- การจัดรูปแบบ Markdown ใน Telegram (ตัวหนา ตัวเอียง ลิงก์)
- เมนูคำสั่งใน Telegram (/new, /help ฯลฯ — พิมพ์ `/`)

## การติดตั้ง

```bash
make config
make install
make dev
```

แอปพลิเคชัน: http://localhost:2026

## การกำหนดค่า

### ตัวแปรสภาพแวดล้อม (`.env`)

สร้างไฟล์ `.env` ในโฟลเดอร์หลักของโปรเจกต์ตามตัวอย่าง `.env.example`:

| ตัวแปร | ความหมาย |
|--------|----------|
| `LOCAL_AI_LLM_BASE_URL` | LLM (llama.cpp) ต้องลงท้ายด้วย `/v1` |
| `LOCAL_AI_ASR_BASE_URL` | ASR สำหรับข้อความเสียงใน Telegram (เช่น `http://your-tailscale-ip:8001`) |
| `TELEGRAM_BOT_TOKEN` | โทเค็นบอทจาก @BotFather |
| `TAVILY_API_KEY` | การค้นหาในอินเทอร์เน็ต (web search) |

### ภาษาของคำตอบเอเจนต์

ใน `config.yaml` ที่โฟลเดอร์หลัก:

```yaml
response_language: "th"   # เอเจนต์ตอบเป็นภาษาไทย
# หรือ
response_language: "ru"   # เอเจนต์ตอบเป็นภาษารัสเซีย
```

หากไม่ระบุ — เอเจนต์จะใช้ภาษาตามผู้ใช้

### ภาษาอินเทอร์เฟซ

ใน Settings → Appearance → Language มีให้เลือก: English, 中文, Русский, ไทย
