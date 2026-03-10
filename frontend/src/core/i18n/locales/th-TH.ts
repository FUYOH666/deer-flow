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

export const thTH: Translations = {
  // Locale meta
  locale: {
    localName: "ไทย",
  },

  // Common
  common: {
    home: "หน้าหลัก",
    settings: "การตั้งค่า",
    delete: "ลบ",
    rename: "เปลี่ยนชื่อ",
    share: "แชร์",
    openInNewWindow: "เปิดในหน้าต่างใหม่",
    close: "ปิด",
    more: "เพิ่มเติม",
    search: "ค้นหา",
    download: "ดาวน์โหลด",
    thinking: "กำลังคิด",
    artifacts: "ไฟล์",
    public: "สาธารณะ",
    custom: "กำหนดเอง",
    notAvailableInDemoMode: "ไม่พร้อมใช้งานในโหมดสาธิต",
    loading: "กำลังโหลด...",
    version: "เวอร์ชัน",
    lastUpdated: "อัปเดตล่าสุด",
    code: "โค้ด",
    preview: "ตัวอย่าง",
    cancel: "ยกเลิก",
    save: "บันทึก",
    install: "ติดตั้ง",
    create: "สร้าง",
  },

  // Welcome
  welcome: {
    greeting: "สวัสดีอีกครั้ง!",
    description:
      "ยินดีต้อนรับสู่ 🦌 DeerFlow ซูเปอร์เอเจนต์โอเพนซอร์ส ด้วยสกิลในตัวและสกิลกำหนดเอง DeerFlow ช่วยคุณค้นหาบนเว็บ วิเคราะห์ข้อมูล และสร้างงานอย่างสไลด์ หน้าเว็บ และอื่นๆ ได้เกือบทุกอย่าง",

    createYourOwnSkill: "สร้างสกิลของคุณเอง",
    createYourOwnSkillDescription:
      "สร้างสกิลของคุณเองเพื่อปลดปล่อยพลังของ DeerFlow ด้วยสกิลที่กำหนดเอง DeerFlow สามารถช่วยคุณค้นหาบนเว็บ วิเคราะห์ข้อมูล และสร้างงานอย่างสไลด์ หน้าเว็บ และอื่นๆ ได้เกือบทุกอย่าง",
  },

  // Clipboard
  clipboard: {
    copyToClipboard: "คัดลอก",
    copiedToClipboard: "คัดลอกแล้ว",
    failedToCopyToClipboard: "คัดลอกไม่สำเร็จ",
    linkCopied: "คัดลอกลิงก์แล้ว",
  },

  // Input Box
  inputBox: {
    placeholder: "วันนี้ช่วยอะไรคุณได้บ้าง?",
    createSkillPrompt:
      "เราจะสร้างสกิลใหม่ทีละขั้นตอนด้วย `skill-creator` เริ่มต้นด้วย — สกิลนี้ควรทำอะไรได้บ้าง?",
    addAttachments: "แนบไฟล์",
    mode: "โหมด",
    flashMode: "เร็ว",
    flashModeDescription: "เร็วและมีประสิทธิภาพ แต่อาจไม่แม่นยำ",
    reasoningMode: "ใช้เหตุผล",
    reasoningModeDescription:
      "คิดก่อนทำ สมดุลระหว่างความเร็วและความแม่นยำ",
    proMode: "Pro",
    proModeDescription:
      "คิด วางแผน และดำเนินการ — ผลลัพธ์แม่นยำขึ้น อาจใช้เวลามากขึ้น",
    ultraMode: "Ultra",
    ultraModeDescription:
      "โหมด Pro พร้อมซับเอเจนต์แบ่งงาน เหมาะสำหรับงานหลายขั้นตอนที่ซับซ้อน",
    reasoningEffort: "ระดับการใช้เหตุผล",
    reasoningEffortMinimal: "น้อยที่สุด",
    reasoningEffortMinimalDescription: "ค้นหา + ตอบตรง",
    reasoningEffortLow: "ต่ำ",
    reasoningEffortLowDescription: "ตรวจสอบ logic ง่าย + อนุมานแบบผิวเผิน",
    reasoningEffortMedium: "กลาง",
    reasoningEffortMediumDescription:
      "วิเคราะห์ logic หลายชั้น + ตรวจสอบพื้นฐาน",
    reasoningEffortHigh: "สูง",
    reasoningEffortHighDescription:
      "อนุมาน logic แบบเต็มมิติ + ตรวจสอบหลายเส้นทาง + ตรวจสอบย้อนกลับ",
    searchModels: "ค้นหาโมเดล...",
    surpriseMe: "เซอร์ไพรส์",
    surpriseMePrompt: "เซอร์ไพรส์ฉัน",
    followupLoading: "กำลังสร้างคำถามติดตาม...",
    followupConfirmTitle: "ส่งข้อเสนอแนะ?",
    followupConfirmDescription:
      "คุณมีข้อความในช่องป้อนข้อมูลอยู่แล้ว เลือกวิธีส่ง",
    followupConfirmAppend: "ต่อท้ายและส่ง",
    followupConfirmReplace: "แทนที่และส่ง",
    suggestions: [
      {
        suggestion: "เขียน",
        prompt: "เขียนบล็อกโพสต์เกี่ยวกับเทรนด์ล่าสุดของ [topic]",
        icon: PenLineIcon,
      },
      {
        suggestion: "วิจัย",
        prompt: "ทำการวิจัยเชิงลึกเกี่ยวกับ [topic] และสรุปผลการค้นหา",
        icon: MicroscopeIcon,
      },
      {
        suggestion: "รวบรวม",
        prompt: "รวบรวมข้อมูลจาก [source] และสร้างรายงาน",
        icon: ShapesIcon,
      },
      {
        suggestion: "เรียนรู้",
        prompt: "เรียนรู้เกี่ยวกับ [topic] และสร้างบทช่วยสอน",
        icon: GraduationCapIcon,
      },
    ],
    suggestionsCreate: [
      {
        suggestion: "หน้าเว็บ",
        prompt: "สร้างหน้าเว็บเกี่ยวกับ [topic]",
        icon: CompassIcon,
      },
      {
        suggestion: "รูปภาพ",
        prompt: "สร้างรูปภาพเกี่ยวกับ [topic]",
        icon: ImageIcon,
      },
      {
        suggestion: "วิดีโอ",
        prompt: "สร้างวิดีโอเกี่ยวกับ [topic]",
        icon: VideoIcon,
      },
      {
        type: "separator",
      },
      {
        suggestion: "สกิล",
        prompt:
          "เราจะสร้างสกิลใหม่ทีละขั้นตอนด้วย `skill-creator` เริ่มต้นด้วย — สกิลนี้ควรทำอะไรได้บ้าง?",
        icon: SparklesIcon,
      },
    ],
  },

  // Sidebar
  sidebar: {
    newChat: "แชทใหม่",
    chats: "แชท",
    recentChats: "แชทล่าสุด",
    demoChats: "แชทสาธิต",
    agents: "เอเจนต์",
  },

  // Agents
  agents: {
    title: "เอเจนต์",
    description:
      "สร้างและจัดการเอเจนต์กำหนดเองพร้อมพรอมป์และความสามารถเฉพาะทาง",
    newAgent: "เอเจนต์ใหม่",
    emptyTitle: "ยังไม่มีเอเจนต์กำหนดเอง",
    emptyDescription:
      "สร้างเอเจนต์แรกของคุณพร้อมพรอมป์ระบบเฉพาะทาง",
    chat: "แชท",
    delete: "ลบ",
    deleteConfirm:
      "คุณแน่ใจหรือไม่ว่าต้องการลบเอเจนต์นี้? การดำเนินการนี้ไม่สามารถยกเลิกได้",
    deleteSuccess: "ลบเอเจนต์แล้ว",
    newChat: "แชทใหม่",
    createPageTitle: "ออกแบบเอเจนต์ของคุณ",
    createPageSubtitle:
      "อธิบายเอเจนต์ที่คุณต้องการ — ฉันจะช่วยสร้างผ่านการสนทนา",
    nameStepTitle: "ตั้งชื่อเอเจนต์ใหม่ของคุณ",
    nameStepHint:
      "เฉพาะตัวอักษร ตัวเลข และขีด — เก็บเป็นตัวพิมพ์เล็ก (เช่น code-reviewer)",
    nameStepPlaceholder: "เช่น code-reviewer",
    nameStepContinue: "ดำเนินการต่อ",
    nameStepInvalidError:
      "ชื่อไม่ถูกต้อง — ใช้เฉพาะตัวอักษร ตัวเลข และขีด",
    nameStepAlreadyExistsError: "มีเอเจนต์ชื่อนี้อยู่แล้ว",
    nameStepCheckError: "ตรวจสอบความพร้อมของชื่อไม่ได้ — โปรดลองอีกครั้ง",
    nameStepBootstrapMessage:
      "ชื่อเอเจนต์กำหนดเองใหม่คือ {name} มาเริ่มตั้งค่า **SOUL** กัน",
    agentCreated: "สร้างเอเจนต์แล้ว!",
    startChatting: "เริ่มแชท",
    backToGallery: "กลับไปแกลเลอรี",
  },

  // Breadcrumb
  breadcrumb: {
    workspace: "พื้นที่ทำงาน",
    chats: "แชท",
  },

  // Workspace
  workspace: {
    officialWebsite: "เว็บไซต์อย่างเป็นทางการของ DeerFlow",
    githubTooltip: "DeerFlow บน GitHub",
    settingsAndMore: "การตั้งค่าและอื่นๆ",
    visitGithub: "DeerFlow บน GitHub",
    reportIssue: "รายงานปัญหา",
    contactUs: "ติดต่อเรา",
    about: "เกี่ยวกับ DeerFlow",
  },

  // Conversation
  conversation: {
    noMessages: "ยังไม่มีข้อความ",
    startConversation: "เริ่มการสนทนาเพื่อดูข้อความที่นี่",
  },

  // Chats
  chats: {
    searchChats: "ค้นหาแชท",
  },

  // Page titles (document title)
  pages: {
    appName: "DeerFlow",
    chats: "แชท",
    newChat: "แชทใหม่",
    untitled: "ไม่มีชื่อ",
  },

  // Tool calls
  toolCalls: {
    moreSteps: (count: number) => `อีก ${count} ขั้นตอน`,
    lessSteps: "ขั้นตอนน้อยลง",
    executeCommand: "ดำเนินการคำสั่ง",
    presentFiles: "นำเสนอไฟล์",
    needYourHelp: "ต้องการความช่วยเหลือจากคุณ",
    useTool: (toolName: string) => `ใช้เครื่องมือ "${toolName}"`,
    searchFor: (query: string) => `ค้นหา "${query}"`,
    searchForRelatedInfo: "ค้นหาข้อมูลที่เกี่ยวข้อง",
    searchForRelatedImages: "ค้นหารูปภาพที่เกี่ยวข้อง",
    searchForRelatedImagesFor: (query: string) =>
      `ค้นหารูปภาพที่เกี่ยวข้องสำหรับ "${query}"`,
    searchOnWebFor: (query: string) => `ค้นหาบนเว็บ "${query}"`,
    viewWebPage: "ดูหน้าเว็บ",
    listFolder: "รายการโฟลเดอร์",
    readFile: "อ่านไฟล์",
    writeFile: "เขียนไฟล์",
    clickToViewContent: "คลิกเพื่อดูเนื้อหาไฟล์",
    writeTodos: "อัปเดตรายการงาน",
    skillInstallTooltip: "ติดตั้งสกิลและทำให้พร้อมใช้งานสำหรับ DeerFlow",
  },

  // Uploads
  uploads: {
    uploading: "กำลังอัปโหลด...",
    uploadingFiles: "กำลังอัปโหลดไฟล์ โปรดรอ...",
  },

  // Subtasks
  subtasks: {
    subtask: "งานย่อย",
    executing: (count: number) =>
      count === 1
        ? "กำลังดำเนินงานย่อย"
        : `กำลังดำเนิน ${count} งานย่อยแบบขนาน`,
    in_progress: "กำลังดำเนินงานย่อย",
    completed: "งานย่อยเสร็จสิ้น",
    failed: "งานย่อยล้มเหลว",
  },

  // Settings
  settings: {
    title: "การตั้งค่า",
    description: "ปรับแต่งลักษณะและพฤติกรรมของ DeerFlow",
    sections: {
      appearance: "ลักษณะ",
      memory: "ความทรงจำ",
      tools: "เครื่องมือ",
      skills: "สกิล",
      notification: "การแจ้งเตือน",
      about: "เกี่ยวกับ",
    },
    memory: {
      title: "ความทรงจำ",
      description:
        "DeerFlow เรียนรู้จากบทสนทนาของคุณโดยอัตโนมัติในพื้นหลัง ความทรงจำเหล่านี้ช่วยให้ DeerFlow เข้าใจคุณมากขึ้นและให้ประสบการณ์ส่วนตัวมากขึ้น",
      empty: "ไม่มีข้อมูลความทรงจำที่จะแสดง",
      rawJson: "Raw JSON",
      markdown: {
        overview: "ภาพรวม",
        userContext: "บริบทผู้ใช้",
        work: "งาน",
        personal: "ส่วนตัว",
        topOfMind: "สิ่งที่อยู่ในใจ",
        historyBackground: "ประวัติ",
        recentMonths: "เดือนล่าสุด",
        earlierContext: "บริบทก่อนหน้า",
        longTermBackground: "พื้นหลังระยะยาว",
        updatedAt: "อัปเดตเมื่อ",
        facts: "ข้อเท็จจริง",
        empty: "(ว่าง)",
        table: {
          category: "หมวดหมู่",
          confidence: "ความมั่นใจ",
          confidenceLevel: {
            veryHigh: "สูงมาก",
            high: "สูง",
            normal: "ปกติ",
            unknown: "ไม่ทราบ",
          },
          content: "เนื้อหา",
          source: "แหล่งที่มา",
          createdAt: "สร้างเมื่อ",
          view: "ดู",
        },
      },
    },
    appearance: {
      themeTitle: "ธีม",
      themeDescription:
        "เลือกว่าอินเทอร์เฟซจะตามอุปกรณ์หรือคงที่",
      system: "ระบบ",
      light: "สว่าง",
      dark: "มืด",
      systemDescription: "ตามการตั้งค่าระบบโดยอัตโนมัติ",
      lightDescription: "พาเลตสว่างด้วยคอนทราสต์สูงสำหรับกลางวัน",
      darkDescription: "พาเลตมืดลดแสงจ้าสำหรับการโฟกัส",
      languageTitle: "ภาษา",
      languageDescription: "สลับระหว่างภาษา",
    },
    tools: {
      title: "เครื่องมือ",
      description: "จัดการการกำหนดค่าและสถานะของเครื่องมือ MCP",
    },
    skills: {
      title: "สกิลเอเจนต์",
      description:
        "จัดการการกำหนดค่าและสถานะของสกิลเอเจนต์",
      createSkill: "สร้างสกิล",
      emptyTitle: "ยังไม่มีสกิล",
      emptyDescription:
        "วางโฟลเดอร์สกิลของคุณในโฟลเดอร์ `/skills/custom` ในรูทของ DeerFlow",
      emptyButton: "สร้างสกิลแรก",
    },
    notification: {
      title: "การแจ้งเตือน",
      description:
        "DeerFlow ส่งการแจ้งเตือนเมื่องานเสร็จเฉพาะเมื่อหน้าต่างไม่ใช้งาน มีประโยชน์สำหรับงานที่ใช้เวลานาน — คุณสามารถสลับไปทำงานอื่นและรับการแจ้งเตือนเมื่อเสร็จ",
      requestPermission: "ขออนุญาตการแจ้งเตือน",
      deniedHint:
        "ปฏิเสธการอนุญาตการแจ้งเตือน คุณสามารถเปิดได้ในการตั้งค่าไซต์ในเบราว์เซอร์",
      testButton: "ส่งการแจ้งเตือนทดสอบ",
      testTitle: "DeerFlow",
      testBody: "นี่คือการแจ้งเตือนทดสอบ",
      notSupported: "เบราว์เซอร์ของคุณไม่รองรับการแจ้งเตือน",
      disableNotification: "ปิดการแจ้งเตือน",
    },
    acknowledge: {
      emptyTitle: "กิตติกรรมประกาศ",
      emptyDescription: "เครดิตและกิตติกรรมประกาศจะแสดงที่นี่",
    },
  },
};
