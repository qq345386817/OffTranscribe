import { readFile } from 'node:fs/promises';
import { languages } from './languages.mjs';
export const origin = 'https://offtranscribe.luopeike.com';
export const updated = '2026-10-24';
export const github = 'https://github.com/qq345386817/OffTranscribe';
export const supportEmail = 'cameoshell09@gmail.com';

export const content = {
  en: {
    lang: 'en', prefix: '/', other: '/zh/', otherLabel: '中文',
    nav: ['How it works', 'Support', 'Privacy'], skip: 'Skip to content',
    title: 'OffTranscribe — On-device speech to text for iPhone, iPad & Mac',
    description: 'Turn recordings into text on your device. OffTranscribe uses Apple on-device speech recognition by default, with optional Whisper models. First release is free.',
    headline: 'Your words.<br>On your device.',
    intro: 'Turn recordings into text, then listen, edit, and export. Built for iPhone, iPad, and Mac.',
    cta: 'See how it works', availability: 'Coming to the App Store · First release is free',
    sample: ['Sample transcript', 'Good ideas start with a conversation.', 'Illustrative preview'],
    steps: [
      ['Record or import', 'Capture audio on your device or import existing recordings.'],
      ['Transcribe locally', 'Convert speech to text using on-device recognition.'],
      ['Listen, edit, export', 'Play back audio with the text, make edits, and export.']
    ],
    privacyHeading: 'Private by design.',
    privacyIntro: 'OffTranscribe uses Apple’s on-device speech recognition by default, keeping your audio and transcripts on your device. You can optionally download Whisper Large V3 or Whisper Turbo for on-device transcription. Whisper Turbo is experimental. Language resources may require a download. There are no developer analytics and no automatic cloud transcription.',
    facts: [
      ['On-device by default', 'Uses Apple’s on-device speech recognition so your audio stays on your device.'],
      ['Optional Whisper models', 'Download Large V3 (3.10 GB) or Large V3 Turbo (1.62 GB). Turbo is experimental; additional free space is needed for installation.'],
      ['Language resources', 'System recognition requires a supported device and language. Apple may need to download language resources first.'],
      ['Your content stays local', 'No app analytics, ads, accounts, or automatic cloud transcription. You choose when to export.']
    ],
    supportTitle: 'A little help, when you need it.',
    supportDescription: 'Setup, model downloads, recording, recovery, and export help for OffTranscribe on iOS, iPadOS, and macOS.',
    supportLead: 'Start with the answers below. If something still isn’t working, email the developer at cameoshell09@gmail.com.',
    contact: 'Email support', contactWarning: 'Please start with a short description, app version, OS version, and a non-sensitive error category. Do not attach recordings, transcripts, personal names, device identifiers, or private file paths unless you intentionally choose to share them after discussing the request.',
    faqs: [
      ['Is the app available yet? Is it free?', 'The first release is being prepared for App Store review and is not publicly available yet. Version 1 will be free, with no subscription, in-app purchase, or trial-minute limit. This describes the first release, not a promise about future versions.'],
      ['Which devices and languages are supported?', 'The app requires iOS/iPadOS 26 or macOS 26 or later. Apple system recognition also depends on the device and selected language. If unavailable, the app explains the limitation rather than silently sending audio to a cloud service. Interface language follows your system’s settings; transcription language is selected separately.'],
      ['Do I have to download Whisper?', 'No. Apple on-device recognition is the default. The first-use prompt can be declined, and optional models can be managed later in Settings → Model management. Apple may still need to prepare system language resources.'],
      ['How large are the optional models?', 'Whisper Large V3 FP16 is about 3.10 GB and Large V3 Turbo FP16 about 1.62 GB before delivery compression. Each downloads separately through Apple’s delivery service. Allow additional free space for download staging and installation. Larger models do not guarantee better results for every language or recording.'],
      ['How do I delete or download a model again?', 'Open Settings → Model management. Whisper models support download, cancel, delete, and re-download. Stop active recording, transcription, or installation first. Deleting a model does not delete your recordings or saved text. Interrupted tasks require the same model version to resume. System speech resources are managed by Apple and cannot be deleted here.'],
      ['How do I record, review, and export?', 'Start a recording or import an audio file, choose the audio language and engine, and start transcription. Keep the app open. Open a completed recording to listen, seek, save a separate edited version, or export TXT, Markdown, or SRT. Review names, numbers, and subtitle timing before sharing.'],
      ['What happens if I close the app or lock the phone?', 'Keep OffTranscribe in the foreground for transcription. Saved audio and completed sections support recovery after interruption; do not assume the task will finish while the app is closed or the phone is locked. On iPhone and iPad, recording stops safely when leaving the foreground. On Mac, switching windows can keep work running, while sleep may pause it. Reopen the app and inspect the saved task before resuming.'],
      ['Can it transcribe while I speak?', 'An experimental live-text option works from saved recording pieces and may lag. Temporary text is separate from the final transcript. It is not a guarantee of instant streaming recognition. For reliable delivery, save the recording and review the final transcription.'],
      ['Why did a download or transcription fail?', 'Check the selected language, network availability for resource downloads, and available storage. Prepare the selected engine, keep the app open, then retry the saved task. Turbo is experimental and has known validation limitations. Choose another engine explicitly for a new task if needed; no automatic engine switch occurs.'],
      ['Where is my data? Can the developer recover it?', 'Recordings and text are stored in the app’s local container. There is no developer account or automatic cross-device sync. The developer cannot retrieve local recordings. Your operating system’s backup or your chosen export destination may keep separate copies. Back up important work before deleting the app or recordings.']
    ],
    policyTitle: 'Privacy, in plain language.',
    policyDescription: 'How OffTranscribe handles recordings, transcripts, model downloads, support requests, and visits to this website.',
    policyLead: 'OffTranscribe: Speech to Text is developed by LuoPK. The app processes recordings on your device. This policy also explains the separate network activity involved in model delivery, website hosting, and support.',
    effective: 'Last updated: October 17, 2026',
    policy: [
      ['Recordings and transcripts', 'Audio, original transcripts, edits, and task checkpoints are saved in the app’s local storage. OffTranscribe does not automatically upload this content to the developer or a transcription server. There is no account system or automatic app-level cloud sync.'],
      ['Speech recognition and model downloads', 'Apple SpeechAnalyzer / SpeechTranscriber provides the default on-device recognition. Apple may download or update language resources. Optional Whisper Large V3 and Large V3 Turbo models use Apple-hosted Background Assets and run locally after installation. Resource downloads involve Apple network services, but are not audio or transcript uploads. Device or language limitations do not trigger a silent cloud fallback.'],
      ['Permissions', 'Microphone access is requested when you choose to record. Audio files are accessed when you explicitly select them through the system file picker. You can manage microphone permission in system settings. Denying permission does not authorize background recording.'],
      ['Analytics, advertising, and diagnostics', 'The first release has no app analytics SDK, advertising, tracking identifier, installation identifier, or third-party crash-reporting SDK. OffTranscribe does not automatically send app diagnostics to the developer. Apple may separately process information through its platform services under your system settings and Apple’s policies.'],
      ['Exports, backups, and deletion', 'Exports go to the destination you choose in the system sharing or file interface; that destination has its own data practices. Operating-system backups may contain app data depending on your settings. Delete recordings and optional Whisper models using the app’s controls; deleting a model does not delete saved recordings or text. Copies in backups or export destinations must be managed separately. The developer cannot remotely access, restore, or erase your local content.'],
      ['Purchases', 'Version 1 is free and does not offer subscriptions or in-app purchases. If a future version changes this, the app and this policy will explain the applicable purchase flow before it is introduced.'],
      ['This website', 'This static website is hosted on Cloudflare Pages. We do not add advertising trackers, analytics scripts, cookies, forms, or browser storage. Hosting and security services may process technical request information such as IP addresses, request URLs, and browser headers to deliver and protect the site. Google Search Console is used to manage search visibility and does not add a tracking script to your visit. Cloudflare’s privacy policy applies to its processing.'],
      ['Support requests and external links', 'If you email cameoshell09@gmail.com, we receive the email address, message, and any attachments you choose to send. They are used to respond to your request, not for advertising. Do not send recordings or transcripts by default. Email is handled through Google’s mail service under its own policies. Support messages are retained only as needed to resolve and follow up on the request or meet applicable obligations; you can request deletion by email. If you follow links to GitHub, its policies apply, and public issues can be read by others.'],
      ['Children and policy changes', 'OffTranscribe has no account registration or advertising profiles for children. This website is not designed to solicit children’s personal information. We will update this page if the app’s data practices change. Changes will show a revised date; materially different collection will be explained before it starts.'],
      ['Contact', 'For privacy questions, contact LuoPK through the support page. Describe the question without attaching private recordings or transcripts.']
    ],
    externalPolicies: 'Service privacy policies:', notFound: 'This page isn’t here.', back: 'Back to OffTranscribe', footer: '© 2026 OffTranscribe',
  },
  zh: {
    lang: 'zh-Hans', prefix: '/zh/', other: '/', otherLabel: 'English',
    nav: ['使用流程', '支持', '隐私'], skip: '跳到正文',
    title: 'OffTranscribe — iPhone、iPad 与 Mac 的设备端语音转文字',
    description: '在设备上将录音转为文字，回听、编辑并导出。默认使用 Apple 设备端识别，可选下载 Whisper 模型。首版免费。',
    headline: '你的声音，<br>留在你的设备。',
    intro: '将录音转换为文字，再回听、编辑和导出。为 iPhone、iPad 和 Mac 打造。',
    cta: '了解使用流程', availability: '正在准备 App Store 首发 · 第一版免费',
    sample: ['示例转写', '好的想法，从一次交谈开始。', '功能示意，并非 App 截图'],
    steps: [['录音或导入', '使用设备录音，或导入已有的音频文件。'], ['设备端转写', '通过设备端语音识别，将声音转换为文字。'], ['回听、编辑、导出', '对照文字回听录音，完成修改后导出。']],
    privacyHeading: '隐私，融入设计。',
    privacyIntro: 'OffTranscribe 默认使用 Apple 设备端语音识别，录音和转写保存在你的设备上。也可主动下载 Whisper Large V3 或 Turbo，在本地完成识别。Turbo 为实验性模型。系统语言资源可能需要先下载。App 不接入使用统计，也不自动进行云端转写。',
    facts: [['默认设备端识别', '使用 Apple 设备端语音识别，录音不自动上传。'], ['Whisper 按需下载', 'Large V3 约 3.10 GB，Large V3 Turbo 约 1.62 GB；Turbo 为实验性模型，安装需要额外空间。'], ['按语言准备资源', '系统识别需要设备与语言支持；Apple 可能需要先下载对应语言资源。'], ['内容由你掌控', '没有 App 使用统计、广告、账号或自动云转写；是否导出，由你决定。']],
    supportTitle: '需要帮助时，从这里开始。',
    supportDescription: 'OffTranscribe 的系统识别、模型下载、录音、任务恢复与导出支持说明。',
    supportLead: '可以先查看下面的常见问题。问题仍未解决时，发送邮件至 cameoshell09@gmail.com 联系开发者。',
    contact: '邮件联系支持', contactWarning: '先提供问题描述、App 版本、系统版本及不含隐私的错误类别即可。请勿默认附上录音、转写、人名、设备标识或私密文件路径；如需分享，请先沟通用途，再由你主动决定。',
    faqs: [
      ['App 上架了吗？是否免费？', '第一版正在准备 App Store 审核，目前尚未公开上架。第一版免费，不提供订阅、内购或试用分钟数限制。这是首版安排，不是对未来所有版本永久免费的承诺。'],
      ['支持哪些设备和语言？', 'App 需要 iOS/iPadOS 26 或 macOS 26 及以上版本。Apple 系统识别还取决于具体设备和所选语言。不支持时会说明原因，不会静默将音频送到云端。界面语言跟随系统设置，音频识别语言单独选择。'],
      ['必须下载 Whisper 吗？', '不需要。默认使用 Apple 设备端识别；首次提示可直接跳过，之后再到设置 → 模型管理准备可选模型。系统语言资源仍可能需要由 Apple 下载。'],
      ['两个 Whisper 模型有多大？', 'Whisper Large V3 FP16 原始大小约 3.10 GB，Large V3 Turbo FP16 约 1.62 GB，分发压缩后的下载量可能不同。两个模型分别通过 Apple 托管服务下载；请为下载暂存和安装保留额外空间。更大的模型不保证在所有语言或录音条件下都更准确。'],
      ['如何删除或重新下载模型？', '进入设置 → 模型管理，可以下载、取消、删除或重新下载 Whisper 模型。先停止录音、转写或安装。删除模型不会删除已有录音或文字；暂停的任务需使用相同模型版本恢复。Apple 管理的系统语音资源不提供 App 内删除操作。'],
      ['如何录音、回听和导出？', '开始录音或导入音频，选择音频语言和引擎后转写，并保持 App 在前台。完成后打开记录，可以回听、定位、保存独立编辑稿，并导出 TXT、Markdown 或 SRT。分享前请核对姓名、数字及字幕时间。'],
      ['锁屏或退出后能继续吗？', '转写时请保持 App 在前台。原录音和已完成片段可用于中断恢复，但不保证关闭 App 或锁屏后仍能完成。iPhone 和 iPad 录音离开前台会安全停止；Mac 切换窗口可继续，睡眠时可能暂停。重新打开后，先查看已保存任务，再决定继续。'],
      ['能边说边转换吗？', '提供基于已保存录音片段的实验性临时文字，可能有延迟，与最终转写稿分别保存。这不等于无延迟的流式识别；需要交付的内容应保存录音后完成正式转写和校对。'],
      ['下载或识别失败怎么办？', '检查音频语言、下载所需网络和剩余存储空间，准备好所选引擎，保持 App 打开，再重试已保存任务。Turbo 为实验性模型，仍有验证限制；必要时明确选择其他引擎创建新任务，App 不自动切换引擎。'],
      ['数据存在哪里？开发者能恢复吗？', '录音和文字保存在 App 的本地容器，没有开发者账号或自动跨设备同步。开发者无法取回你的本地录音。系统备份或你选择的导出位置可能保留副本，删除 App 或录音前请备份重要内容。']
    ],
    policyTitle: '用清楚的话，说明隐私。',
    policyDescription: 'OffTranscribe 如何处理录音、文字、模型下载、支持反馈和网站访问。',
    policyLead: 'OffTranscribe: Speech to Text 由 LuoPK 开发。App 在设备本地处理录音。本政策同时说明模型分发、网站托管和主动反馈等独立网络活动。',
    effective: '最后更新：2026 年 10 月 17 日',
    policy: [
      ['录音与文字', '录音、原始转写、编辑稿和任务检查点保存在 App 本地存储中。OffTranscribe 不自动向开发者或转写服务器上传这些内容。App 没有账号系统，也不提供 App 层的自动云同步。'],
      ['识别引擎与资源下载', '默认使用 Apple SpeechAnalyzer / SpeechTranscriber 的设备端识别；Apple 可能下载或更新系统语言资源。可选的 Whisper Large V3 与 Large V3 Turbo 通过 Apple-hosted Background Assets 下载，安装后在本地推理。资源下载使用 Apple 网络服务，但不等于上传录音或文字；设备或语言不支持时，不会静默切换到云端。'],
      ['权限', '只有你选择录音时才请求麦克风权限。音频导入通过系统文件选择器，由你明确选择文件。麦克风权限可在系统设置中管理；拒绝权限不代表允许后台录音。'],
      ['统计、广告与诊断', '首版不接入 App 使用统计 SDK、广告、跟踪标识、安装标识或第三方崩溃遥测，也不自动向开发者发送诊断。Apple 平台服务可能依据你的系统设置及其政策独立处理信息。'],
      ['导出、备份和删除', '导出使用你在系统分享或文件界面选择的目标，其数据处理规则由相应服务决定。系统备份可能根据你的设置包含 App 数据。录音及可选 Whisper 模型可通过 App 提供的操作删除；删除模型不删除已保存录音与文字。备份和导出位置的副本需分别管理，开发者无法远程读取、恢复或删除你的本地内容。'],
      ['购买', '第一版免费，不提供订阅或内购。如果未来版本改变商业安排，会在引入前更新 App 说明与本政策，解释相关购买流程。'],
      ['本网站', '本静态网站托管在 Cloudflare Pages。我们不添加广告跟踪、统计脚本、Cookie、表单或浏览器存储。托管与安全服务可能为提供网页及安全防护而处理 IP 地址、请求网址和浏览器请求头等技术信息。Google Search Console 仅用于管理搜索可见性，不会在访问页面中添加跟踪脚本。Cloudflare 自身的数据处理适用其隐私政策。'],
      ['主动反馈与外部链接', '如你主动向 cameoshell09@gmail.com 发送邮件，我们会收到邮箱地址、消息和你选择发送的附件，仅用于处理及跟进支持请求，不用于广告。请勿默认发送录音或转写。邮件由 Google 邮件服务处理，适用其政策。支持消息只在解决、跟进问题或履行适用义务所需期间保留；你可通过邮件请求删除。如果打开 GitHub 链接，适用 GitHub 的规则；公开 Issue 可被他人阅读。'],
      ['儿童与政策更新', 'OffTranscribe 不建立儿童账号或广告画像，本网站不以收集儿童个人信息为目的。数据处理方式发生变化时会更新本页面及日期；重大新增收集会在开始前说明。'],
      ['联系开发者', '如有隐私问题，请通过支持页联系 LuoPK。描述问题即可，无需附上私密录音或转写。']
    ],
    externalPolicies: '相关服务隐私政策：', notFound: '这个页面不存在。', back: '返回 OffTranscribe', footer: '© 2026 OffTranscribe',
  }
};

for (const language of languages) {
  if (!content[language.key]) content[language.key] = JSON.parse(await readFile(new URL(`./locales/${language.key}.json`, import.meta.url), 'utf8'));
  Object.assign(content[language.key], language);
}
