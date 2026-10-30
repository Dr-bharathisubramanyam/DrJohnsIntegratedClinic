import { Language } from './translations';

export interface Doctor {
  id: string;
  name: string;
  nameLocal?: Record<Language, string>;
  title: Record<Language, string>;
  roleLabel: Record<Language, string>;
  credentials: string;
  regNumber?: string;
  image: string;
  cvPdf: string;
  phone: string;
  email: string;
  experienceYears: string;
  aboutText: Record<Language, string>;
  specialties: Record<Language, string[]>;
  education: {
    period: string;
    degree: Record<Language, string>;
    institution: Record<Language, string>;
  }[];
  experience: {
    period: string;
    role: Record<Language, string>;
    hospital: Record<Language, string>;
    details?: Record<Language, string>;
  }[];
  researchPublications: {
    title: Record<Language, string>;
    details: string;
  }[];
  membershipsOrHonors: Record<Language, string[]>;
}

export const doctorsData: Doctor[] = [
  {
    id: 'dr-min',
    name: 'Dr. KYUNG JIN MIN TCM',
    nameLocal: {
      en: 'Dr. KYUNG JIN MIN TCM',
      ko: '민경진 박사 (Dr. KYUNG JIN MIN)',
      zh: '闵庚珍 博士 (Dr. KYUNG JIN MIN)',
      ja: 'ミン・ギョンジン 博士 (Dr. KYUNG JIN MIN)',
    },
    title: {
      en: 'Clinic Director · Traditional Chinese Medicine (TCM)',
      ko: '대표원장 · 중의학 의학박사 / 침구추나학 전문의',
      zh: '院长 · 中医学医学博士 / 针灸推拿专科',
      ja: '院長 · 中医学医学博士 / 鍼灸推拿専門医',
    },
    roleLabel: {
      en: 'Director',
      ko: '대표원장',
      zh: '院长',
      ja: '院長',
    },
    credentials: 'BSc, MSc (Internal Med), PhD (Acupuncture & Tuina - Tianjin TCM Univ)',
    image: '/assets/aistudio/dr-kyung-jin-min_b1f8082a.png',
    cvPdf: '/assets/aistudio/Dr_Min_Kyung_Jin_-_Profile__1__a056f519.pdf',
    phone: '+91 72006 47975',
    email: 'tcmdoctor96@gmail.com',
    experienceYears: '18+ Years Experience',
    aboutText: {
      en: 'Dr. Kyung Jin Min is a veteran Traditional Chinese Medicine physician holding a Bachelor, Master, and PhD in Acupuncture & Tuina from the renowned Tianjin University of TCM in China. Mentored by academician Prof. Shi Xuemin (pioneer of stroke rehabilitation acupuncture), Dr. Min combines intensive hospital experience across China, Korea, and India with deep expertise in neuro-acupuncture, gastrointestinal healing, and herbal therapeutics.',
      ko: '민경진 원장은 중국 명문 톈진중의약대학에서 학사, 석사(중의내과), 박사(침구추나학) 학위를 취득한 베테랑 중의학 전문의입니다. 중국 국예 침구학의 거두 스쉐민(石學敏) 원사의 가르침을 받아 뇌졸중 후유증 재활, 만성 난치성 질환, 소화기 질환 및 통증 치료에서 세계적 수준의 임상 전문성을 보유하고 있습니다.',
      zh: '闵庚珍院长于中国天津中医药大学本硕博连读，获针灸推拿学博士学位，师从国医大师石学敏院士。先后在天津中医药大学第一附属医院消化科、脑卒中康复中心及中韩国际医院从事临床诊疗与科研，深耕针刺脑血管病康复、慢性萎缩性胃炎及疑难痛症调理十余载。',
      ja: 'ミン・ギョンジン院長は、中国の名門・天津中医薬大学にて学士、修士（中医内科学）、博士（鍼灸推拿学）を取得した中医学のスペシャリストです。中国鍼灸界の泰斗・石学敏院士の指導を受け、脳卒中リハビリ、難治性慢性疾患、胃腸病、頑固な疼痛治療において豊富な臨床実績を誇ります。',
    },
    specialties: {
      en: [
        'Stroke & Neurological Rehabilitation (Xingnao Kaiqiao Protocol)',
        'Hypertension & Primary Cardiovascular Regulation (Acupuncture at ST9)',
        'Chronic Atrophic Gastritis (CAG) & Gastrointestinal Disorders',
        'Post-Stroke Incontinence & Constipation Therapeutics',
        'Xinhe Fire Therapy, Weight Loss & Pain Management',
        'Traditional Chinese Herbal Formulas & Pulse Diagnosis',
      ],
      ko: [
        '뇌졸중 후유증 및 신경계 재활 (성뇌개규 침법)',
        '본태성 고혈압 응급 및 심혈관 조절 (인영혈 ST9 침술 연구)',
        '만성 위축성 위염(CAG) 및 위장관 질환 어혈 변증 치료',
        '뇌졸중 후 요실금 및 변비 개선 전문 침구 치료',
        '신허 온열 화침(Xinhe Fire Therapy) 및 만성 통증 조절',
        '체질 맞춤 전통 한약 탕제 배합 및 맥진',
      ],
      zh: [
        '脑卒中偏瘫及神经系统康复（醒脑开窍针刺法）',
        '原发性高血压急症针刺人迎穴(ST9)降压调理',
        '基于血瘀理论治疗慢性萎缩性胃炎(CAG)及胃肠病',
        '中风后尿失禁及顽固性便秘综合针刺治疗',
        '新合火疗法、温通祛寒与慢性疼痛管理',
        '经方中药辨证处方与四诊合参',
      ],
      ja: [
        '脳卒中後遺症・神経機能リハビリ（醒脳開竅鍼法）',
        '本態性高血圧および心血管系の鍼灸調整（人迎穴 ST9）',
        '慢性萎縮性胃炎（CAG）および消化器系疾患の血オ弁証治療',
        '脳卒中後の排尿障害・頑固な便秘への鍼灸アプローチ',
        '火療（温熱刺激療法）による代謝促進・疼痛管理',
        '伝統生薬方剤の調合と精密な脈診',
      ],
    },
    education: [
      {
        period: '2007 - 2010',
        degree: {
          en: 'Doctoral Degree (PhD) in Acupuncture & Tuina',
          ko: '침구추나학 의학박사',
          zh: '针灸推拿学医学博士',
          ja: '鍼灸推拿学医学博士',
        },
        institution: {
          en: 'Tianjin University of Traditional Chinese Medicine, China',
          ko: '중국 톈진중의약대학교',
          zh: '中国天津中医药大学',
          ja: '中国・天津中医薬大学',
        },
      },
      {
        period: '2004 - 2007',
        degree: {
          en: 'Master’s Degree (MSc) in Traditional Chinese Internal Medicine',
          ko: '중의내과학 석사',
          zh: '中医内科学医学硕士',
          ja: '中医内科学医学修士',
        },
        institution: {
          en: 'Tianjin University of Traditional Chinese Medicine, China',
          ko: '중국 톈진중의약대학교',
          zh: '中国天津中医药大学',
          ja: '中国・天津中医薬大学',
        },
      },
      {
        period: '1996 - 2004',
        degree: {
          en: 'Bachelor’s Degree (BSc) in Traditional Chinese Medicine',
          ko: '중의학 의학사',
          zh: '中医学医学学士',
          ja: '中医学医学学士',
        },
        institution: {
          en: 'Tianjin University of Traditional Chinese Medicine, China',
          ko: '중국 톈진중의약대학교',
          zh: '中国天津中医药大学',
          ja: '中国・天津中医薬大学',
        },
      },
    ],
    experience: [
      {
        period: '2010 - Present',
        role: {
          en: 'Clinic Director',
          ko: '대표원장',
          zh: '院长',
          ja: '院長',
        },
        hospital: {
          en: 'Tianjin Baeknyeon Korean Medicine Clinic & Dr John TCM Wellness Clinic',
          ko: '톈진 백년클리닉 및 닥터존 웰니스 클리닉',
          zh: '天津百年中医门诊部 / 约翰医生国际健康诊所',
          ja: '天津百年中医クリニック & ドクター・ジョン統合クリニック',
        },
        details: {
          en: 'Overseeing integrative patient care, acupuncture protocols, and international patient consultations.',
          ko: '동서양 환자 맞춤형 침구 치료 프로토콜 총괄 및 통합 진료 운영.',
          zh: '统筹多学科综合诊疗、针灸核心方案制定及跨文化国际患者医疗。',
          ja: '総合診療体制の統括、鍼灸プロトコルの策定、国際的な患者ケアを推進。',
        },
      },
      {
        period: '2008 - 2010',
        role: {
          en: 'Physician / Fellow',
          ko: '전임의 / 침구추나 전문의',
          zh: '主治医师 / 临床研究员',
          ja: '鍼灸臨床医',
        },
        hospital: {
          en: 'Department of Acupuncture & Tuina (Stroke Rehabilitation Center), First Affiliated Hospital of Tianjin TCM Univ',
          ko: '톈진중의약대학 제1부속병원 침구추나과 (뇌졸중 재활 센터)',
          zh: '天津中医药大学第一附属医院针灸推拿科（国家脑卒中康复中心）',
          ja: '天津中医薬大学第一付属病院 鍼灸推拿科（脳卒中リハビリセンター）',
        },
      },
      {
        period: '2005 - 2008',
        role: {
          en: 'Clinical Resident',
          ko: '임상 수련의',
          zh: '住院医师',
          ja: '臨床研修医',
        },
        hospital: {
          en: 'Gastroenterology Department, First Affiliated Hospital of Tianjin TCM Univ',
          ko: '톈진중의약대학 제1부속병원 소화기내과',
          zh: '天津中医药大学第一附属医院消化科',
          ja: '天津中医薬大学第一付属病院 消化器内科',
        },
      },
    ],
    researchPublications: [
      {
        title: {
          en: 'Doctoral Thesis: Clinical Study of Acupuncture at ST9 on Hypertensive Urgencies in Patients with Primary Hypertension',
          ko: '박사 학위 논문: 본태성 고혈압 환자의 인영혈(ST9) 침술 치료에 관한 임상 연구 (지도교수: 스쉐민 원사)',
          zh: '博士毕业论文：针刺人迎穴(ST9)治疗原发性高血压急症的临床研究（导师：石学敏院士）',
          ja: '博士論文：本態性高血圧患者における人迎穴（ST9）への鍼治療に関する臨床研究（指導教員：石学敏 院士）',
        },
        details: 'Tianjin University of Traditional Chinese Medicine',
      },
      {
        title: {
          en: 'Master’s Thesis: Clinical Study of Treatment Based on Blood-Stasis Theory on Chronic Atrophic Gastritis (CAG)',
          ko: '석사 학위 논문: 만성 위축성 위염(CAG)의 어혈 이론에 기반한 변증 치료 임상 연구',
          zh: '硕士毕业论文：基于血瘀理论辨治慢性萎缩性胃炎(CAG)的临床研究',
          ja: '修士論文：オ血理論に基づく慢性萎縮性胃炎（CAG）治療の臨床研究',
        },
        details: 'Advisor: Prof. Chen Daquan, Chief Physician',
      },
      {
        title: {
          en: 'Advances in Acupuncture Treatment of Post-Stroke Urinary Incontinence',
          ko: '학술 논문: 뇌졸중 후 요실금의 침술 치료 연구 진전',
          zh: '学术期刊：针灸治疗脑卒中后尿失禁的最新临床进展',
          ja: '学術論文：脳卒中後排尿障害に対する鍼治療の臨床的進展',
        },
        details: 'Liaoning Journal of Traditional Chinese Medicine, Vol. 11, Issue 9 (2009)',
      },
      {
        title: {
          en: 'Feasibility Analysis of Awakening Brain and Opening Orifices Acupuncture Combined with Rehabilitation for Stroke',
          ko: '학술 논문: 성뇌개규 침법과 뇌졸중 재활 치료의 병용 타당성 분석',
          zh: '学术期刊：醒脑开窍针刺法结合现代康复技术治疗脑卒中的可行性分析',
          ja: '学術論文：醒脳開竅鍼法とリハビリテーション療法の併用妥当性分析',
        },
        details: 'Liaoning Journal of Traditional Chinese Medicine, Vol. 37 (2010)',
      },
    ],
    membershipsOrHonors: {
      en: [
        'Member, Korean Association of Traditional Chinese Medicine',
        'Member, World Association of Traditional Medicine',
        'Medical Volunteer, World Federation of Acupuncture-Moxibustion Societies (WFAS)',
        'Member, China Medicinal Diet Association',
        'Recipient of Outstanding Graduate Award (July 2010)',
      ],
      ko: [
        '대한중의학회 정회원',
        '세계전통의학학회 정회원',
        '세계침구학회연합회(WFAS) 의료봉사단',
        '중국약선연구협회 회원',
        '톈진중의약대학 우수 졸업생 표창 수상 (2010)',
      ],
      zh: [
        '韩国中医学会 正会员',
        '世界传统医学学会 会员',
        '世界针灸学会联合会 (WFAS) 医疗志愿者',
        '中国药膳研究会 会员',
        '天津中医药大学 优秀毕业生奖项获得者 (2010)',
      ],
      ja: [
        '大韓中医学会 正会員',
        '世界伝統医学学会 会員',
        '世界鍼灸学会連合会（WFAS）医療ボランティア',
        '中国薬膳研究会 会員',
        '天津中医薬大学 優秀卒業生賞受賞（2010年）',
      ],
    },
  },
  {
    id: 'dr-nava',
    name: 'Dr. Nava Subramanya Bharathi BSMS',
    nameLocal: {
      en: 'Dr. Nava Subramanya Bharathi BSMS',
      ko: '나바 수브라마냐 바라티 의사 (Dr. Nava Subramanya Bharathi BSMS)',
      zh: '纳瓦·巴拉蒂 医师 (Dr. Nava Subramanya Bharathi BSMS)',
      ja: 'Dr. ナヴァ・バーラティ (Dr. Nava Subramanya Bharathi BSMS)',
    },
    title: {
      en: 'Consultant · Siddha Medical Officer (BSMS)',
      ko: '컨설턴트 · 싯다 의학 전문의 / 바르맘 치료 전문',
      zh: '会诊专家 · 锡达医学外科学士 / 瓦玛手法专科',
      ja: '顧問医師 · シッダ専門医 / ヴァルマム手技専門',
    },
    roleLabel: {
      en: 'Consultant',
      ko: '컨설턴트',
      zh: '专家顾问',
      ja: '顧問医',
    },
    credentials: 'BSMS (The Tamil Nadu Dr. M.G.R Medical University)',
    image: '/assets/aistudio/dr-nava-bharathi_22f63621.png',
    cvPdf: '/assets/aistudio/NAVA_SUBRAMANYA_BHARATHI_up4_31e5f707.pdf',
    phone: '+91 99626 76974',
    email: 'bharathisubramanyam.l.n.s@gmail.com',
    experienceYears: '5+ Years Experience',
    aboutText: {
      en: 'Dr. Nava Subramanya Bharathi L is a dedicated Siddha Medical Officer with over 5 years of rigorous clinical practice and scientific health research. Trained at Sri Sairam Siddha Medical College (Dr. M.G.R Medical University), Dr. Bharathi is renowned for expertise in Varmam pressure node manipulation and Thokkanam musculoskeletal therapy, having authored breakthrough research in virtual drug screening for mycobacterial targets.',
      ko: '나바 수브라마냐 바라티(Dr. Nava Bharathi)는 타밀나두 Dr. M.G.R 의과대학교를 졸업하고 5년 이상의 집중적인 임상과 보건과학 연구를 수행해 온 싯다 전문의입니다. 바르맘(Varmam) 인체 급소 치료술과 토크카남(Thokkanam) 정골 수기요법에 깊은 조예가 있으며, 항결핵성 한약 제제 컴퓨터 가상 스크리닝 논문을 주저자로 발표하는 등 과학적 근거 창출에 기여하고 있습니다.',
      zh: '纳瓦·巴拉蒂医生毕业于著名的泰米尔纳德Dr. M.G.R医科大学，持有锡达医学外科学士学位，具有5年三级医院临床与科研资历。擅长运用古传瓦玛(Varmam)点穴通络及托卡南(Thokkanam)正骨推拿调理脊椎椎间盘突出与关节运动创伤，并作为第一作者在国际植物学期刊发表关于中草药抑制抗结核杆菌蛋白的计算机分子筛选科研论文。',
      ja: 'ナヴァ・バーラティ医師は、タミル・ナードゥ Dr. M.G.R 医科大学を卒業し、5年以上にわたり病院臨床とヘルスサイエンス研究に取り組んできたシッダ医学の専門医です。ヴァルマム（Varmam）急所療法やトッカナム（Thokkanam）徒手療法に精通し、結核菌に対する伝統生薬化合物のスクリーニング研究論文を筆頭著者として発表しています。',
    },
    specialties: {
      en: [
        'Varmam (Vital Pressure Points) Therapy for Neuromuscular Disorders',
        'Thokkanam Musculoskeletal & Fascial Manipulation',
        'Lumbar & Cervical Spondylosis, Disc Bulges & Sciatica Care',
        'Classical Siddha Herbal Formulations (Kudineer & Chooranam)',
        'Clinical Research & Pharmacological Protocol Adherence',
        'Integrative Preventive Care with Yoga & Lifestyle Regimens',
      ],
      ko: [
        '신경근 질환을 위한 바르맘(Varmam) 급소 자극 치료',
        '토크카남(Thokkanam) 근막 이완 및 척추 관절 수기요법',
        '경추증, 요추 추간판 탈출증(디스크) 및 좌골신경통',
        '정통 싯다 허브 탕약(쿠디네르) 및 가루약(초르남) 처방',
        '임상 연구 및 약리학적 프로토콜 규명',
        '요가 및 체질별 생활 리듬을 결합한 통합 예방 관리',
      ],
      zh: [
        '瓦玛 (Varmam) 神经穴位点穴法与运动神经功能恢复',
        '托卡南 (Thokkanam) 9种肌筋膜松解与脊椎整复手法',
        '颈椎病、腰椎间盘突出及坐骨神经痛保守治疗',
        '经典锡达草药煎剂 (Kudineer) 与散剂 (Chooranam) 调配',
        '临床试验方案设计与药理活性机制研究',
        '结合传统瑜伽与体质节律的整体抗衰防病体系',
      ],
      ja: [
        '神経・運動器疾患に対するヴァルマム（要点手技）療法',
        'トッカナム（Thokkanam）による筋膜リリースと関節調整',
        '頸椎症、腰椎椎間板ヘルニア、坐骨神経痛の保存療法',
        '伝統シッダ生薬煎じ薬（クディニール）および散剤処方',
        '臨床試験プロトコルに基づく薬理研究',
        'ヨーガと生活リズムを取り入れた統合的予防医療',
      ],
    },
    education: [
      {
        period: '2014 - 2020',
        degree: {
          en: 'Bachelor of Siddha Medicine and Surgery (BSMS)',
          ko: '싯다 의학 및 외과학 학사 (BSMS)',
          zh: '锡达医学与外科学士 (BSMS)',
          ja: 'シッダ医学外科学士 (BSMS)',
        },
        institution: {
          en: 'Sri Sairam Siddha Medical College, Chennai (The Tamil Nadu Dr. M.G.R Medical University)',
          ko: '첸나이 스리 사이람 싯다 의과대학 (타밀나두 Dr. M.G.R 의과대학교)',
          zh: '金奈赛拉姆锡达医学院（泰米尔纳德Dr. M.G.R医科大学）',
          ja: 'チェンナイ スリ・サイラム・シッダ医科大学（タミル・ナードゥ Dr. M.G.R 医科大学）',
        },
      },
    ],
    experience: [
      {
        period: 'April 2023 - Present',
        role: {
          en: 'Siddha Medical Officer',
          ko: '싯다 진료 원장',
          zh: '锡达主治医师',
          ja: 'シッダ常勤医師',
        },
        hospital: {
          en: 'Shathvigam Siddha Hospital, Chennai',
          ko: '첸나이 샤트비감 싯다 병원',
          zh: '金奈沙特维加姆锡达综合医院',
          ja: 'チェンナイ シャトヴィガム・シッダ病院',
        },
        details: {
          en: 'Providing advanced Siddha consultations, Varmam therapeutics, and integrating traditional therapies with modern clinical metrics.',
          ko: '고급 싯다 진료 및 바르맘 치료 수행, 전통 치료와 현대 임상 지표의 융합.',
          zh: '主持重症门诊与病房会诊，开展瓦玛神经手法治疗并结合现代临床检验评估。',
          ja: '高度シッダ診療およびヴァルマム治療を担当し、最新の臨床知見と融合。',
        },
      },
      {
        period: 'Sept 2020 - March 2023',
        role: {
          en: 'Consultant Physician',
          ko: '컨설턴트 의사',
          zh: '顾问医师',
          ja: '顧問医師',
        },
        hospital: {
          en: 'Amirthajothi Siddha Varma Hospital, Chennai',
          ko: '첸나이 아미르타조티 싯다 바르마 병원',
          zh: '金奈阿米尔塔约蒂锡达瓦玛专科医院',
          ja: 'チェンナイ アミルタジョティ・シッダ・ヴァルマ病院',
        },
      },
    ],
    researchPublications: [
      {
        title: {
          en: 'Virtual Screening of Siddha Formulation Shaya Chooranam towards Identification of Potential Inhibitor Targeting Enoyl-Acyl Carrier Protein Reductase (InhA) in Mycobacterium tuberculosis',
          ko: '학술 논문: 결핵균(M. tuberculosis)의 InhA 단백질 표적 억제제 규명을 위한 싯다 복합 처방 샤야 초르남의 가상 컴퓨터 분자 스크리닝 (제1저자)',
          zh: '国际期刊第一作者：计算机虚拟筛选传统锡达方剂Shaya chooranam抑制结核分枝杆菌InhA还原酶潜在活性靶点之研究',
          ja: '学術論文（筆頭著者）：結核菌InhA酵素阻害化合物の同定に向けたシッダ伝統方剤Shaya chooranamの分子ドッキング解析',
        },
        details: 'International Journal of Botany Studies (ISSN: 2455-541X)',
      },
      {
        title: {
          en: 'Experimental Study: Iranavairavi Chendooram and its Wound Healing Properties',
          ko: '실험 연구: 이라나바이라이 체두람(Iranavairavi Chendooram)의 상처 치유 촉진 특성',
          zh: '实验科研：锡达矿物草本制剂Iranavairavi Chendooram促进伤口愈合理化特性研究',
          ja: '実験研究：伝統外用製剤Iranavairavi Chendooramの創傷治癒促進特性に関する検討',
        },
        details: 'Sri Sairam Siddha Medical Research Centre',
      },
      {
        title: {
          en: 'Poster: Neeragaram - A Hidden Treasure in the World of Probiotics',
          ko: '학술 발표: 전통 발효 쌀물(Neeragaram)의 프로바이오틱 생물학적 가치',
          zh: '学术海报：传统米发酵饮品Neeragaram作为天然益生菌宝库的价值发现',
          ja: 'ポスター発表：プロバイオティクスの宝庫としての伝統発酵飲料ニーラガラムの科学的意義',
        },
        details: 'World Siddha Day 2019',
      },
      {
        title: {
          en: 'Paper Presentation: Role of Yoga in Children with Special Needs',
          ko: '논문 발표: 특수 아동을 위한 요가 및 신체 균형 요법의 임상적 역할',
          zh: '学术报告：特殊需要儿童中的瑜伽干预与身心康复实践',
          ja: '学会発表：特別支援を要する小児におけるヨーガ療法の臨床的役割',
        },
        details: 'SAI YOGA MAHIMA 2017',
      },
    ],
    membershipsOrHonors: {
      en: [
        'Registered Practitioner, Tamil Nadu Siddha Medical Council (TNSMC Reg. No. 6476/A)',
        'Gaja Cyclone Relief: Awarded for exemplary humanitarian emergency healthcare service',
        'CSIR-sponsored Workshop Certification in Lab Animal Handling and Biomedical Research',
        'Ardent NCC Cadet and NSS Volunteer for community public health outreach',
      ],
      ko: [
        '타밀나두 싯다 의료위원회 등록 의사 (TNSMC 면허 번호: 6476/A)',
        '가자 사이클론 재난 구호 특별 봉사 공로상 수상',
        '인도 국립과학산업연구회(CSIR) 연구 동물 취급 및 생체실험 인증',
        '국가 공공 보건 봉사단(NSS) 및 NCC 출신',
      ],
      zh: [
        '泰米尔纳德邦锡达医学委员会正式注册医师（执业编号：6476/A）',
        '印度加贾强热带风暴抢险救灾医疗杰出人道主义表彰',
        '印度科学与工业研究委员会(CSIR)实验动物学与生物医学研究认证',
        '国家青年骨干(NCC)及国家服务计划(NSS)基层公共卫生志愿者',
      ],
      ja: [
        'タミル・ナードゥ州シッダ医師会登録医師（登録番号：6476/A）',
        'ガジャ・サイクロン被災地救援における顕著な人道医療貢献賞を受賞',
        'インド科学産業研究会議（CSIR）動物実験・医学生物学研究プログラム修了',
        'NCCカデットおよびNSSボランティアとして地域公衆衛生支援に従事',
      ],
    },
  },
];
