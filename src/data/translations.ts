export type Language = 'en' | 'ko' | 'zh' | 'ja';

export interface TranslationStrings {
  clinicName: string;
  clinicTagline: string;
  directorTitle: string;
  consultantTitle: string;
  nav: {
    home: string;
    about: string;
    doctors: string;
    treatments: string;
    resourceCenter: string;
    timings: string;
    contact: string;
    bookAppointment: string;
    callNow: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    bookBtn: string;
    whatsappBtn: string;
    callBtn: string;
    quickStats: {
      timing: string;
      timingDetail: string;
      sundayTiming: string;
      location: string;
      locationDetail: string;
      integration: string;
      integrationDetail: string;
    };
  };
  philosophy: {
    title: string;
    subtitle: string;
    tcmTitle: string;
    tcmDesc: string;
    ayushTitle: string;
    ayushDesc: string;
    synergyTitle: string;
    synergyDesc: string;
  };
  doctors: {
    sectionTitle: string;
    sectionSubtitle: string;
    drMinRole: string;
    drMinSubtitle: string;
    drMinBio: string;
    drNavaRole: string;
    drNavaSubtitle: string;
    drNavaBio: string;
    viewCv: string;
    bookConsultation: string;
    specialties: string;
    qualifications: string;
    researchAndTheses: string;
  };
  treatments: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: {
      id: string;
      title: string;
      category: string;
      desc: string;
      benefits: string[];
    }[];
  };
  resourceCenter: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allTab: string;
    tcmTab: string;
    siddhaTab: string;
    safetyTab: string;
    downloadPdfs: string;
    tcmDocName: string;
    siddhaDocName: string;
    readMore: string;
    closeModal: string;
    verifiedSource: string;
    disclaimerTitle: string;
    disclaimerText: string;
  };
  booking: {
    title: string;
    subtitle: string;
    selectDoctor: string;
    selectDoctorAny: string;
    drMin: string;
    drNava: string;
    selectTreatment: string;
    preferredDate: string;
    preferredTime: string;
    fullName: string;
    phone: string;
    email: string;
    notes: string;
    notesPlaceholder: string;
    submitWhatsapp: string;
    directCall: string;
    successTitle: string;
    successMessage: string;
    refNumber: string;
    calendarDownload: string;
    bookAnother: string;
    lunchNotice: string;
  };
  locationHours: {
    title: string;
    subtitle: string;
    addressTitle: string;
    address: string;
    city: string;
    mapsBtn: string;
    getDirections: string;
    interactiveMapTitle: string;
    landmarkInfo: string;
    copyAddress: string;
    addressCopied: string;
    hoursTitle: string;
    weekdayHours: string;
    weekdayLunch: string;
    sundayHours: string;
    callForAppt: string;
  };
}

export const translations: Record<Language, TranslationStrings> = {
  en: {
    clinicName: "Dr John's Integrated Clinic",
    clinicTagline: "TCM & AYUSH Integrated Healing",
    directorTitle: "Director",
    consultantTitle: "Consultant",
    nav: {
      home: "Home",
      about: "Philosophy",
      doctors: "Our Doctors",
      treatments: "Treatments",
      resourceCenter: "Patient Resource Center",
      timings: "Hours & Location",
      contact: "Contact",
      bookAppointment: "Book Appointment",
      callNow: "Call Clinic",
    },
    hero: {
      badge: "Authentic East Asian & Indian Traditional Healthcare",
      titleStart: "Restoring Balance through",
      titleHighlight: "TCM & AYUSH",
      titleEnd: "Integrative Medicine",
      subtitle: "Personalized healing combining Traditional Chinese Medicine (Acupuncture, Tuina, Herbology) with AYUSH Siddha therapy.",
      bookBtn: "Book Appointment",
      whatsappBtn: "WhatsApp Us",
      callBtn: "Direct Call",
      quickStats: {
        timing: "Mon - Sat: 10 AM - 8 PM",
        timingDetail: "Lunch: 12:30 - 2:30 PM",
        sundayTiming: "Sun: 3:00 PM - 8:00 PM",
        location: "Taramani, Chennai",
        locationDetail: "Tamil Nadu, India",
        integration: "Dual System Expertise",
        integrationDetail: "TCM Doctorate & BSMS Siddha",
      },
    },
    philosophy: {
      title: "Integrative Healing Philosophy",
      subtitle: "Bridging the timeless wisdom of Traditional Chinese Medicine with the ancient science of Siddha & AYUSH",
      tcmTitle: "Traditional Chinese Medicine (TCM)",
      tcmDesc: "Centered on Qi (vital energy flow), Yin-Yang balance, and the meridian channels. Restores holistic equilibrium using precise acupuncture, tuina manual therapy, moxibustion, and herbal formulas.",
      ayushTitle: "AYUSH Siddha Medicine",
      ayushDesc: "Rooted in Tamil heritage and the 96 Thathuvam, balancing the three humours (Vali, Azhal, Iyyam) through herbal alchemy (Chooranam, Kudineer), vital point stimulation (Varmam), and bodywork (Thokkanam).",
      synergyTitle: "The Power of Integration",
      synergyDesc: "By combining meridian bio-energetics with Siddha vital point therapies, our patients experience deeper relief, accelerated recovery from neurological conditions, and sustainable systemic vitality.",
    },
    doctors: {
      sectionTitle: "Meet Our Clinical Leadership",
      sectionSubtitle: "Distinguished physicians dedicated to evidence-informed traditional healthcare",
      drMinRole: "Director · Traditional Chinese Medicine",
      drMinSubtitle: "Doctor of Medicine (TCM) · Acupuncture & Tuina Specialist",
      drMinBio: "Over 18 years of clinical hospital leadership across China, Korea, and India. Trained at the prestigious Tianjin University of Traditional Chinese Medicine under master acupuncturist Prof. Shi Xuemin. Specializes in stroke rehabilitation, gastrointestinal disorders, and refractory pain management.",
      drNavaRole: "Consultant · Siddha Medicine & Surgery",
      drNavaSubtitle: "BSMS (The Tamil Nadu Dr. M.G.R Medical University)",
      drNavaBio: "Dedicated Siddha Medical Officer with extensive clinical and health science research experience. Expert in Varmam vital point therapeutics, Thokkanam musculoskeletal manipulations, and herbal pharmacological formulations with published research in anti-tubercular compounds.",
      viewCv: "View Full Profile / CV",
      bookConsultation: "Consult This Doctor",
      specialties: "Core Clinical Specialties",
      qualifications: "Qualifications & Credentials",
      researchAndTheses: "Academic Research & Publications",
    },
    treatments: {
      sectionTitle: "Integrated Therapies & Clinical Services",
      sectionSubtitle: "Tailored multi-modality therapies designed to address the root causes of disease",
      items: [
        {
          id: "acupuncture",
          title: "Acupuncture & Electro-Acupuncture",
          category: "TCM Specialty",
          desc: "Targeted sterile micro-needle insertion along meridian pathways to stimulate Qi flow, modulate nervous system signaling, and trigger natural endorphin release.",
          benefits: ["Stroke rehabilitation", "Neurological recovery", "Hypertension relief", "Chronic migraine & back pain"],
        },
        {
          id: "varmam",
          title: "Varmam Vital Point Therapy",
          category: "Siddha Specialty",
          desc: "Precise stimulation and therapeutic manipulation of the 108 vital energy points (Varmam nodes) where life-energy converges.",
          benefits: ["Musculoskeletal disorders", "Nerve entrapment & sciatica", "Frozen shoulder & spondylosis", "Sports trauma"],
        },
        {
          id: "tuina-thokkanam",
          title: "Tuina & Thokkanam Medical Bodywork",
          category: "Integrative Manual Therapy",
          desc: "Harmonizing Chinese Tuina medical massage with Siddha Thokkanam physical manipulations to mobilize joints, relax fascia, and relieve deep somatic tension.",
          benefits: ["Spinal alignment support", "Postural rehabilitation", "Myofascial tension", "Circulatory stimulation"],
        },
        {
          id: "herbal-decoctions",
          title: "Herbal Formulations & Kudineer",
          category: "Internal Medicine",
          desc: "Customized natural decoctions (Kudineer, Chooranam) and classical TCM botanical combinations tailored to individual pulse diagnosis.",
          benefits: ["Gastritis & digestive ulcers", "Respiratory conditions", "Immune modulation", "Metabolic balance"],
        },
        {
          id: "gua-sha-moxa",
          title: "Gua Sha & Fire Therapy",
          category: "TCM External Therapy",
          desc: "Traditional therapeutic scraping and moxibustion warmth therapies that disperse stagnant blood, resolve pathogenic dampness, and stimulate microcirculation.",
          benefits: ["Soft tissue adhesions", "Fibromyalgia & fatigue", "Detoxification & microcirculation", "Muscle spasms"],
        },
        {
          id: "kayakarpam",
          title: "Kayakarpam & Preventive Rejuvenation",
          category: "Siddha Longevity Science",
          desc: "Comprehensive health-maintenance and anti-aging system utilizing seasonal herbal preparations, dietary rhythmics, and vital breathing practices.",
          benefits: ["Healthy cellular aging", "Chronic fatigue recovery", "Systemic detoxification", "Vital energy restoration"],
        },
      ],
    },
    resourceCenter: {
      title: "Patient Resource Center",
      subtitle: "Official educational repository on TCM and Siddha/AYUSH medicine based on authenticated clinical documents",
      searchPlaceholder: "Search concepts (e.g., Qi, Yin-Yang, Varmam, Thokkanam, Gua Sha)...",
      allTab: "All Resources",
      tcmTab: "TCM Knowledge Base",
      siddhaTab: "Siddha & AYUSH Base",
      safetyTab: "Safety & Notes",
      downloadPdfs: "View Original Educational PDFs",
      tcmDocName: "TCM Trilingual Resource Document",
      siddhaDocName: "Siddha Trilingual Resource Document",
      readMore: "Read Educational Breakdown",
      closeModal: "Close",
      verifiedSource: "Trilingual Clinical Documentation",
      disclaimerTitle: "Clinical & Educational Notice",
      disclaimerText: "The educational material provided is synthesized from authentic medical resources in Korean, English, and Japanese. It is intended for patient education and does not replace emergency clinical evaluation. For severe symptoms, consult our physicians or emergency medical services immediately.",
    },
    booking: {
      title: "Schedule Your Clinical Appointment",
      subtitle: "Choose your preferred physician, treatment modality, and convenient time slot",
      selectDoctor: "Select Consulting Physician",
      selectDoctorAny: "Integrated Consultation (Both Doctors)",
      drMin: "Dr. KYUNG JIN MIN TCM (Director - TCM & Acupuncture)",
      drNava: "Dr. Nava Subramanya Bharathi BSMS (Consultant - Siddha & Varmam)",
      selectTreatment: "Primary Treatment Interest",
      preferredDate: "Preferred Appointment Date",
      preferredTime: "Preferred Time Window",
      fullName: "Full Name",
      phone: "Phone / WhatsApp Number",
      email: "Email Address",
      notes: "Health Concerns / Reason for Visit",
      notesPlaceholder: "Describe your symptoms, previous treatments, or specific preferences...",
      submitWhatsapp: "Confirm & Request via WhatsApp",
      directCall: "Call Directly for Immediate Booking",
      successTitle: "Appointment Request Initiated!",
      successMessage: "Your appointment details have been prepared. Click below to instantly send your appointment voucher to clinic desk via WhatsApp or download a calendar invite.",
      refNumber: "Appointment Reference",
      calendarDownload: "Add to Calendar (.ics)",
      bookAnother: "Book Another Appointment",
      lunchNotice: "Clinic is open Mon-Sat (10:00 AM - 8:00 PM with lunch break 12:30 PM - 2:30 PM) & Sun (3:00 PM - 8:00 PM).",
    },
    locationHours: {
      title: "Clinic Location & Consultation Hours",
      subtitle: "Conveniently situated in Taramani, Chennai with modern treatment facilities",
      addressTitle: "Clinic Address",
      address: "No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani",
      city: "Chennai, Tamil Nadu 600113",
      mapsBtn: "Open in Google Maps",
      getDirections: "Get Directions",
      interactiveMapTitle: "Interactive Clinic Location Map",
      landmarkInfo: "Above Odd Man Out Elite store, Taramani, Chennai",
      copyAddress: "Copy Address",
      addressCopied: "Address Copied to Clipboard",
      hoursTitle: "Working Schedule",
      weekdayHours: "Monday to Saturday: 10:00 AM – 08:00 PM",
      weekdayLunch: "Lunch Break: 12:30 PM – 02:30 PM",
      sundayHours: "Sunday: 03:00 PM – 08:00 PM",
      callForAppt: "Prior appointment recommended for thorough integrative diagnostic consultation.",
    },
  },
  ko: {
    clinicName: "닥터 존 통합 클리닉",
    clinicTagline: "중의학(TCM) · 아유쉬(AYUSH) 싯다 통합 진료",
    directorTitle: "원장",
    consultantTitle: "진료원장 / 전문의",
    nav: {
      home: "홈",
      about: "진료 철학",
      doctors: "의료진 소개",
      treatments: "진료 분야",
      resourceCenter: "환자 정보 센터",
      timings: "진료 시간 및 위치",
      contact: "연락처",
      bookAppointment: "진료 예약",
      callNow: "전화 상담",
    },
    hero: {
      badge: "동아시아 정통 의학과 인도 전통 싯다 의학의 융합",
      titleStart: "몸과 마음의 조화를 회복하는",
      titleHighlight: "한의학 & 싯다(AYUSH)",
      titleEnd: "통합 웰니스 클리닉",
      subtitle: "한의학(침술, 추나, 한약)과 인도 남부 정통 싯다 의학(바르맘, 토크카남)을 접목하여 최적의 전인적 치료를 제공합니다.",
      bookBtn: "진료 예약하기",
      whatsappBtn: "카카오/왓츠앱 문의",
      callBtn: "즉시 전화하기",
      quickStats: {
        timing: "월 - 토: 오전 10시 - 오후 8시",
        timingDetail: "점심시간: 12:30 - 14:30",
        sundayTiming: "일요일: 15:00 - 20:00",
        location: "인도 첸나이 타라마니",
        locationDetail: "Taramani, Chennai, India",
        integration: "양대 전통의학 전문성",
        integrationDetail: "중의학 의학박사 & 싯다 전문의 협진",
      },
    },
    philosophy: {
      title: "통합 진료 철학",
      subtitle: "동양 전통 중의학의 기(氣)와 음양론, 인도 싯다 의학의 96 타투밤 지혜가 만납니다",
      tcmTitle: "전통 중의학 (TCM)",
      tcmDesc: "인체의 기(氣)의 원활한 순환과 음양의 조화를 중시하며, 정밀한 침술, 추나요법, 뜸, 부항 및 증상별 맞춤 한약 처방을 통해 근본적인 원인을 다스립니다.",
      ayushTitle: "AYUSH 싯다(Siddha) 의학",
      ayushDesc: "인간과 우주의 조화를 바탕으로 판차 부탐(5원소)과 3대 생명 기능(발리, 아잘, 이얌)의 균형을 도모하며, 급소 치료인 바르맘(Varmam)과 수기 치료를 시행합니다.",
      synergyTitle: "통합 치료의 시너지",
      synergyDesc: "경락 침술과 바르맘 경혈 자극의 결합으로 뇌졸중 후유증, 만성 신경통, 위장관 질환 및 근골격계 질환에서 탁월한 임상 개선 효과를 실현합니다.",
    },
    doctors: {
      sectionTitle: "의료진 소개",
      sectionSubtitle: "풍부한 임상경험과 학술적 깊이를 갖춘 전문 의료진",
      drMinRole: "원장 · 중의학 의학박사",
      drMinSubtitle: "Dr. 민경진 (KYUNG JIN MIN TCM) · 침구추나학 전문의",
      drMinBio: "중국 톈진중의약대학에서 학사, 석사(중의내과), 박사(침구추나학) 학위를 취득하고 톈진중의약대학 부속병원 등에서 18년 이상 풍부한 임상 수련과 클리닉 원장을 역임하였습니다. 석학 스쉐민(石學敏) 원사를 사사하여 뇌졸중 재활 및 심뇌혈관, 난치성 질환 치료에 탁월합니다.",
      drNavaRole: "컨설턴트 · 싯다 의사 (BSMS)",
      drNavaSubtitle: "Dr. Nava Subramanya Bharathi BSMS",
      drNavaBio: "타밀나두 Dr. M.G.R 의과대학교 졸업 후 샤트비감 싯다병원 등에서 다년간 임상 진료를 수행한 싯다 전문의입니다. 바르맘(Varmam) 신경 경혈 요법 및 토크카남 수기 치료와 결핵균 억제물질 스크리닝 등 전통 의학의 과학적 규명에 앞장서고 있습니다.",
      viewCv: "상세 이력서 / 프로필 보기",
      bookConsultation: "이 의사에게 진료 신청",
      specialties: "주요 전문 진료 분야",
      qualifications: "학력 및 자격 면허",
      researchAndTheses: "학술 연구 및 논문",
    },
    treatments: {
      sectionTitle: "특화 진료 프로그램",
      sectionSubtitle: "환자의 체질과 병인에 맞춘 1:1 맞춤형 통합 치료",
      items: [
        {
          id: "acupuncture",
          title: "정밀 침술 및 전침 치료",
          category: "중의학 특화",
          desc: "경락의 기 순환을 촉진하고 자율신경계 조절과 통증 전달 억제를 돕는 정밀 멸균 침술 및 전기 자극 치료.",
          benefits: ["뇌졸중 재활 및 편마비 회복", "고혈압 및 자율신경 실조", "만성 편두통 및 요통", "신경통 개선"],
        },
        {
          id: "varmam",
          title: "바르맘 (Varmam) 신경 급소 치료",
          category: "싯다 의학 특화",
          desc: "인체의 108개 생명 에너지 거점(바르맘)을 세밀하게 자극하여 신경 압박을 풀고 기혈 소통을 원활하게 합니다.",
          benefits: ["좌골신경통 및 디스크", "오십견 및 경추증", "운동 기능 장애 회복", "신경 마비 완화"],
        },
        {
          id: "tuina-thokkanam",
          title: "추나(Tuina) 및 토크카남(Thokkanam) 수기요법",
          category: "통합 수기 치료",
          desc: "중의학 추나 관절 가동술과 싯다 토크카남 근막 이완 마사지를 결합하여 척추 교정과 만성 결림을 해소합니다.",
          benefits: ["척추 자세 교정", "근막 통증 증후군", "관절 가동 범위 확대", "혈액 및 림프 순환"],
        },
        {
          id: "herbal-decoctions",
          title: "전통 탕약 및 생약 처방 (쿠디네르·초르남)",
          category: "내과 치료",
          desc: "환자의 맥진과 사진합참(四診合參)을 바탕으로 배합된 순수 천연 허브 제제로 체내 독소를 배출하고 장부 기능을 보강합니다.",
          benefits: ["만성 위축성 위염 및 소화장애", "면역력 강화", "호흡기 정화", "만성 피로 회복"],
        },
        {
          id: "gua-sha-moxa",
          title: "괄사(Gua Sha) 및 온열 요법",
          category: "외치법",
          desc: "물소뿔 또는 특수 도구로 피부 표면을 자극해 어혈을 풀고, 뜸의 온열 자극으로 냉기를 몰아내고 정기를 북돋웁니다.",
          benefits: ["어혈 제거 및 국소 혈행 촉진", "감기 몸살 및 근육 뭉침", "체온 조절 및 냉증 완화", "해독 작용"],
        },
        {
          id: "kayakarpam",
          title: "카야카르팜 (Kayakarpam) 회복·양생",
          category: "싯다 양생 과학",
          desc: "식이요법, 호흡법, 계절별 생활 리듬 관리와 전통 항노화 요법으로 활력을 회복하고 노화를 예방합니다.",
          benefits: ["원기 회복", "만성 염증 완화", "심신 안정", "자가 치유력 극대화"],
        },
      ],
    },
    resourceCenter: {
      title: "환자 정보 센터 (Patient Resource Center)",
      subtitle: "병원 공식 검증 자료에 기반한 중의학 및 싯다(AYUSH) 의학 다국어 지식 저장소",
      searchPlaceholder: "의학 용어 검색 (기, 음양, 괄사, 바르맘, 토크카남, 침술 등)...",
      allTab: "전체 자료",
      tcmTab: "중의학(TCM) 지식 베이스",
      siddhaTab: "싯다 & AYUSH 지식 베이스",
      safetyTab: "안전 수칙 및 주의사항",
      downloadPdfs: "공식 교육 자료 원본 PDF 열람",
      tcmDocName: "중의학 3개국어 자료 문서",
      siddhaDocName: "싯다 의학 3개국어 자료 문서",
      readMore: "상세 학술 설명 보기",
      closeModal: "닫기",
      verifiedSource: "3개국어 공인 임상 자료",
      disclaimerTitle: "임상 안내 및 안전 고지",
      disclaimerText: "본 정보는 한국어, 영어, 일본어로 정리된 교육용 개요입니다. 개별 환자에 대한 진단이나 치료 지침을 대신할 수 없으며, 고열, 호흡곤란, 흉통 등 응급 상황 발생 시에는 즉시 전문 의료진의 진료나 응급 서비스를 이용하시기 바랍니다.",
    },
    booking: {
      title: "진료 예약 신청",
      subtitle: "원하시는 원장님과 치료 프로그램, 일정을 편리하게 선택하세요",
      selectDoctor: "진료 의사 선택",
      selectDoctorAny: "통합 협진 상담 (두 원장님 공동 진료)",
      drMin: "민경진 원장 (중의학 박사 / 침구추나 전문)",
      drNava: "Dr. Nava Subramanya Bharathi BSMS (싯다 / 바르맘 전문)",
      selectTreatment: "희망 치료 과목",
      preferredDate: "예약 희망일",
      preferredTime: "예약 희망 시간대",
      fullName: "환자 성명",
      phone: "전화번호 / 왓츠앱 번호",
      email: "이메일 주소",
      notes: "주요 증상 및 내원 목적",
      notesPlaceholder: "현재 겪고 계신 통증, 증상 발현 시기, 복용 중인 약물 등을 기재해 주세요...",
      submitWhatsapp: "왓츠앱으로 예약 전송",
      directCall: "전화로 즉시 예약하기",
      successTitle: "예약 신청서 작성 완료!",
      successMessage: "예약 정보가 준비되었습니다. 아래 버튼을 눌러 병원 왓츠앱으로 즉시 전송하시거나 캘린더에 일정을 저장하세요.",
      refNumber: "예약 접수 번호",
      calendarDownload: "캘린더에 일정 추가 (.ics)",
      bookAnother: "추가 예약하기",
      lunchNotice: "진료 시간: 월~토 10:00~20:00 (점심시간 12:30~14:30), 일요일 15:00~20:00.",
    },
    locationHours: {
      title: "진료 시간 및 클리닉 위치",
      subtitle: "첸나이 타라마니 위치, 쾌적하고 조용한 진료 환경",
      addressTitle: "클리닉 주소",
      address: "No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani",
      city: "Chennai, Tamil Nadu 600113, India",
      mapsBtn: "구글 지도에서 보기",
      getDirections: "길찾기 / 경로 안내 (Get Directions)",
      interactiveMapTitle: "클리닉 대화형 지도 미리보기",
      landmarkInfo: "첸나이 타라마니 (랜드마크: Odd Man Out Elite 매장 위층)",
      copyAddress: "주소 복사",
      addressCopied: "주소가 클립보드에 복사되었습니다",
      hoursTitle: "진료 시간 안내",
      weekdayHours: "월요일 ~ 토요일: 오전 10:00 ~ 오후 08:00",
      weekdayLunch: "점심시간: 오후 12:30 ~ 오후 02:30",
      sundayHours: "일요일: 오후 03:00 ~ 오후 08:00",
      callForAppt: "원활한 진료 및 맥진을 위해 사전 예약을 권장합니다.",
    },
  },
  zh: {
    clinicName: "约翰医生综合医疗诊所",
    clinicTagline: "传统中医学(TCM)与印度阿育吠陀锡达(AYUSH)综合诊疗",
    directorTitle: "院长 / 主任医师",
    consultantTitle: "会诊专家 / 锡达医师",
    nav: {
      home: "首页",
      about: "医疗理念",
      doctors: "医疗团队",
      treatments: "特色诊疗",
      resourceCenter: "患者知识中心",
      timings: "开诊时间与位置",
      contact: "联系我们",
      bookAppointment: "预约挂号",
      callNow: "致电诊所",
    },
    hero: {
      badge: "东亚正统中医学与印度传统医学的深度融合",
      titleStart: "调和气血，融汇古今",
      titleHighlight: "中医 (TCM) 与 锡达 (AYUSH)",
      titleEnd: "综合一体化医疗",
      subtitle: "结合传统中医疗法（针灸、推拿、本草配方）与锡达医学（点穴、手法复位），为您的身心健康提供全方位个性化调理。",
      bookBtn: "立即预约诊疗",
      whatsappBtn: "WhatsApp 咨询",
      callBtn: "一键致电",
      quickStats: {
        timing: "周一至周六: 上午 10:00 - 晚上 8:00",
        timingDetail: "午休: 12:30 - 14:30",
        sundayTiming: "周日: 15:00 - 20:00",
        location: "钦奈塔拉马尼 (Taramani, Chennai)",
        locationDetail: "印度泰米尔纳德邦",
        integration: "双体系医学资深专家",
        integrationDetail: "中医学医学博士与锡达医师联合会诊",
      },
    },
    philosophy: {
      title: "综合诊疗理念",
      subtitle: "传承千年东方中医学之精髓，汇通古印度锡达与AYUSH自然疗法",
      tcmTitle: "传统中医学 (TCM)",
      tcmDesc: "以“气”与“阴阳”为核心理论，通过经络针灸、推拿整复、拔罐刮痧及辨证论治的中药方剂，调和体内阴阳偏盛偏衰，恢复人体自我疗愈机能。",
      ayushTitle: "AYUSH 锡达 (Siddha) 医学",
      ayushDesc: "植根于南印度泰米尔文化，依据96基本原理(Thathuvam)调理风(Vali)、胆(Azhal)、痰(Iyyam)三体液平衡，配合瓦玛点穴(Varmam)与手法疗法(Thokkanam)。",
      synergyTitle: "中印传统医学协同效能",
      synergyDesc: "经络穴位与瓦玛要穴的双重干预，配合个体化本草内服外敷，在中风康复、顽固性神经痛、退行性关节病和胃肠调理中表现出卓越的互补效果。",
    },
    doctors: {
      sectionTitle: "名医团队介绍",
      sectionSubtitle: "兼具深厚学术造诣与丰富三甲医院临床经验的资深专家",
      drMinRole: "院长 · 中医学医学博士 (PhD)",
      drMinSubtitle: "闵庚珍 博士 (Dr. KYUNG JIN MIN TCM) · 针灸推拿专科",
      drMinBio: "毕业于中国天津中医药大学，先后获得学士、中医内科学硕士及针灸推拿学博士学位。师从国医大师石学敏院士，曾在天津中医药大学第一附属医院消化科及针灸推拿脑卒中康复中心工作，并拥有十余年中医诊所管理经验，擅长中风后遗症、面瘫、胃炎及顽固性疼痛诊疗。",
      drNavaRole: "专家顾问 · 锡达医学外科学士 (BSMS)",
      drNavaSubtitle: "Dr. Nava Subramanya Bharathi BSMS",
      drNavaBio: "毕业于泰米尔纳德Dr. M.G.R医科大学，资深锡达医师。精通瓦玛点穴经络疗法与传统整骨手法，并在国际植物学期刊发表关于中草药抑制抗结核杆菌蛋白的科学研究，致力于传统医学的现代化与实证化。",
      viewCv: "查阅完整个人履历 / CV",
      bookConsultation: "预约该医生问诊",
      specialties: "核心专长与主治",
      qualifications: "教育背景与专业认证",
      researchAndTheses: "学术研究与出版论文",
    },
    treatments: {
      sectionTitle: "特色诊疗项目",
      sectionSubtitle: "标本兼治，提供针对不同体质与慢性病症的多维度疗法",
      items: [
        {
          id: "acupuncture",
          title: "辨证毫针与电针疗法",
          category: "中医特色",
          desc: "循经取穴，运用醒脑开窍等名家针法，激发经气，疏通经络气血，改善局部神经营养与传导。",
          benefits: ["中风后遗症与偏瘫康复", "原发性高血压调理", "顽固性三叉神经痛与偏头痛", "颈肩腰腿痛"],
        },
        {
          id: "varmam",
          title: "瓦玛 (Varmam) 能量点穴疗法",
          category: "锡达特色",
          desc: "针对人体108处关键瓦玛能量节点施加特定指压手法，解除神经卡压与气血淤阻。",
          benefits: ["坐骨神经痛与椎间盘突出", "肩周炎与颈椎病", "运动系统损伤", "神经性麻木"],
        },
        {
          id: "tuina-thokkanam",
          title: "推拿 (Tuina) 与 托卡南 (Thokkanam) 综合手技",
          category: "中印综合手法",
          desc: "结合中医正骨滚法与南印传统药油推拿，松解深层肌筋膜粘连，整复脊柱错位。",
          benefits: ["脊柱侧弯与不良体态矫正", "慢性肌筋膜疼痛综合征", "关节功能受限恢复", "促进全身气血淋巴循环"],
        },
        {
          id: "herbal-decoctions",
          title: "道地本草汤剂与锡达配方 (Kudineer/Chooranam)",
          category: "内服调理",
          desc: "严格遵循古典经方与四诊结果，量身定制天然植物草本颗粒或汤剂，清热解毒、温中健脾。",
          benefits: ["慢性萎缩性胃炎与消化道溃疡", "呼吸道慢性炎症", "免疫力低下易感冒", "代谢平衡调节"],
        },
        {
          id: "gua-sha-moxa",
          title: "传统刮痧与温灸疗法",
          category: "中医外治",
          desc: "使用水牛角等工具循经刮拭皮肤表面以出痧透邪，配合艾灸之温热纯阳之气温经通络。",
          benefits: ["排毒活血散瘀", "感冒风寒头痛", "虚寒腹痛及手足冰凉", "慢性软组织劳损"],
        },
        {
          id: "kayakarpam",
          title: "卡雅卡尔帕姆 (Kayakarpam) 抗衰养生",
          category: "抗衰与体质调理",
          desc: "锡达医学的长寿回春学说，配合食疗、季节作息调适及调息训练，延缓衰老，增强生机。",
          benefits: ["慢性疲劳综合征改善", "抗自由基与细胞修护", "心神安定与睡眠调理", "增强机体抗病防御"],
        },
      ],
    },
    resourceCenter: {
      title: "患者健康知识中心",
      subtitle: "依据三语医学原著文献整理的传统中医学与锡达(AYUSH)知识库",
      searchPlaceholder: "搜索医学概念（如：气、阴阳、正气与邪气、刮痧、瓦玛等）...",
      allTab: "全部知识点",
      tcmTab: "传统中医学 (TCM)",
      siddhaTab: "锡达与AYUSH医学",
      safetyTab: "用药安全与提示",
      downloadPdfs: "查阅权威原著文献 PDF",
      tcmDocName: "中医三语知识原件 (PDF)",
      siddhaDocName: "锡达三语知识原件 (PDF)",
      readMore: "阅读学术解析",
      closeModal: "关闭",
      verifiedSource: "多语种正统临床文献记录",
      disclaimerTitle: "学术资料与安全就医须知",
      disclaimerText: "本中心资料基于中、英、韩、日四种语言整理，旨在增进患者对传统医学机理的了解，不构成独立的急诊诊断依据。若出现急性高热、呼吸困难或剧烈胸痛等危急症状，请立即就近就医或接受急诊救治。",
    },
    booking: {
      title: "在线预约门诊",
      subtitle: "挑选适合您的医生、治疗方案与门诊时间",
      selectDoctor: "选择主诊医生",
      selectDoctorAny: "中印两名专家联合会诊",
      drMin: "闵庚珍 院长 (中医学博士 / 针灸推拿)",
      drNava: "Dr. Nava Subramanya Bharathi BSMS (锡达医学 / 瓦玛点穴)",
      selectTreatment: "意向诊疗科目",
      preferredDate: "期望就诊日期",
      preferredTime: "期望时间段",
      fullName: "患者姓名",
      phone: "联系电话 / WhatsApp",
      email: "电子邮箱",
      notes: "主要症状及就诊诉求",
      notesPlaceholder: "请简要描述您的身体不适、持续时间或既往就医经历...",
      submitWhatsapp: "通过 WhatsApp 确认并发送预约单",
      directCall: "直接拨打诊所电话预约",
      successTitle: "预约信息已生成！",
      successMessage: "您的就诊信息已整理完毕。您可以点击下方按钮直接将预约单发送给前台 WhatsApp，或将日程添加至日历。",
      refNumber: "预约流水号",
      calendarDownload: "添加至日历 (.ics)",
      bookAnother: "重新填写预约",
      lunchNotice: "开诊时间：周一至周六 10:00-20:00 (午休 12:30-14:30)，周日 15:00-20:00。",
    },
    locationHours: {
      title: "就诊时间与地理位置",
      subtitle: "坐落于印度钦奈塔拉马尼 (Taramani)，环境清幽雅致，交通便利",
      addressTitle: "诊所详细地址",
      address: "No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani",
      city: "Chennai, Tamil Nadu 600113, India",
      mapsBtn: "在谷歌地图中查看",
      getDirections: "获取路线指引 (Get Directions)",
      interactiveMapTitle: "诊所地理位置交互式实景地图",
      landmarkInfo: "钦奈塔拉马尼（地标：Odd Man Out Elite 专卖店楼上）",
      copyAddress: "复制地址",
      addressCopied: "地址已复制到剪贴板",
      hoursTitle: "门诊作息时间表",
      weekdayHours: "周一至周六: 上午 10:00 – 晚上 08:00",
      weekdayLunch: "午休及消毒: 中午 12:30 – 下午 02:30",
      sundayHours: "周日特别门诊: 下午 03:00 – 晚上 08:00",
      callForAppt: "为保证充分的望闻问切与脉诊评估时间，建议提前预约。",
    },
  },
  ja: {
    clinicName: "ドクター・ジョンズ統合クリニック",
    clinicTagline: "中医学(TCM) · アーユシュ(AYUSH) シッダ医学統合診療",
    directorTitle: "院長",
    consultantTitle: "顧問医師 / シッダ専門医",
    nav: {
      home: "ホーム",
      about: "診療理念",
      doctors: "医師紹介",
      treatments: "診療案内",
      resourceCenter: "患者リソースセンター",
      timings: "診療時間・アクセス",
      contact: "お問い合わせ",
      bookAppointment: "診療予約",
      callNow: "お電話",
    },
    hero: {
      badge: "東アジアの伝統中医学とインド正統シッダ医学の融合",
      titleStart: "心身の調和を取り戻す",
      titleHighlight: "中医学 & シッダ (AYUSH)",
      titleEnd: "統合医療クリニック",
      subtitle: "伝統中医学（鍼灸、推拿、漢方薬）と南インドの古伝シッダ医学（ヴァルマム療法、トッカナム手技）を統合し、質の高い包括的ケアを提供します。",
      bookBtn: "オンライン診療予約",
      whatsappBtn: "WhatsAppで相談",
      callBtn: "今すぐ電話する",
      quickStats: {
        timing: "月〜土: 10:00 - 20:00",
        timingDetail: "昼休憩: 12:30 - 14:30",
        sundayTiming: "日曜: 15:00 - 20:00",
        location: "インド チェンナイ タラマニ",
        locationDetail: "Taramani, Chennai, India",
        integration: "二大伝統医学の高度な専門性",
        integrationDetail: "中医学医学博士 & シッダ専門医の共同診療",
      },
    },
    philosophy: {
      title: "統合診療の理念",
      subtitle: "伝統中医学の「気・陰陽」とシッダ医学の「96のタットゥヴァム（原理）」が調和する医療",
      tcmTitle: "伝統中医学 (TCM)",
      tcmDesc: "生命力である「気」と「陰陽」のバランスを整え、経絡に沿った精密な鍼灸、推拿手技療法、漢方生薬の処方によって病の根本原因にアプローチします。",
      ayushTitle: "AYUSH シッダ医学",
      ayushDesc: "タミル文化に伝わる三大生命機能（ヴァータ、ピッタ、カパ）の不均衡を整え、108の要穴を刺激するヴァルマム療法や生薬煎じ薬（クディニール）で自然治癒力を高めます。",
      synergyTitle: "統合による相乗効果",
      synergyDesc: "経絡への鍼治療とシッダの急所刺激手技を組み合わせることで、脳卒中後の麻痺回復、頑固な神経痛、運動器疾患、自律神経失調において優れた回復を導きます。",
    },
    doctors: {
      sectionTitle: "医師紹介",
      sectionSubtitle: "豊富な臨床実績と学術的研究に裏打ちされた熟練の医療チーム",
      drMinRole: "院長 · 中医学医学博士 (PhD)",
      drMinSubtitle: "ミン・ギョンジン 博士 (Dr. KYUNG JIN MIN TCM) · 鍼灸推拿専門医",
      drMinBio: "中国・天津中医薬大学にて学士・修士（中医内科）・博士（鍼灸推拿）を取得。天津中医薬大学第一付属病院脳卒中リハビリセンター等で18年以上にわたる病院臨床および医院長を務めました。中国鍼灸界の巨匠・石学敏院士に師事し、脳卒中リハビリや消化器疾患の専門的治療を展開しています。",
      drNavaRole: "顧問医 · シッダ医学外科士 (BSMS)",
      drNavaSubtitle: "Dr. Nava Subramanya Bharathi BSMS",
      drNavaBio: "タミル・ナードゥ Dr. M.G.R 医科大学を卒業後、複数のシッダ専門病院にて高度な臨床医療を提供。ヴァルマム急所療法やトッカナム徒手医学に精通し、抗結核菌に対する伝統製剤の薬理スクリーニングなど最新の学術研究にも力を注いでいます。",
      viewCv: "履歴書 / プロフィールを開く",
      bookConsultation: "この医師を予約",
      specialties: "専門領域・得意疾患",
      qualifications: "学歴・資格・認証",
      researchAndTheses: "研究論文・学会発表",
    },
    treatments: {
      sectionTitle: "専門診療案内",
      sectionSubtitle: "患者様一人ひとりの体質と症状に寄り添うオーダーメイド治療",
      items: [
        {
          id: "acupuncture",
          title: "精密鍼灸および低周波電針療法",
          category: "中医学専門",
          desc: "滅菌単回使用の極細鍼を用い、経絡上のツボを刺激して気血の巡りを整え、神経系の回復と自律神経の調整を促します。",
          benefits: ["脳卒中後遺症・麻痺のリハビリ", "本態性高血圧の改善", "慢性頭痛・頑固な腰痛", "末梢神経痛の緩和"],
        },
        {
          id: "varmam",
          title: "ヴァルマム (Varmam) 急所手技療法",
          category: "シッダ医学専門",
          desc: "体内に存在する108の生命エネルギー拠点（ヴァルマム）に適切な圧と手技を施し、神経圧迫を解除して生命エネルギーの流れを回復させます。",
          benefits: ["坐骨神経痛・椎間板トラブル", "五十肩・頸椎症", "スポーツ外傷のリハビリ", "手足のしびれ改善"],
        },
        {
          id: "tuina-thokkanam",
          title: "推拿 (Tuina) & トッカナム (Thokkanam) 徒手療法",
          category: "中印統合マニュアルセラピー",
          desc: "中国伝統の推拿マッサージとシッダの筋膜アプローチを融合し、深部筋肉の緊張をほぐし関節の可動域を拡大します。",
          benefits: ["姿勢改善・脊椎バランス調整", "筋膜性疼痛症候群", "慢性疲労の解消", "全身の血行・リンパ循環促進"],
        },
        {
          id: "herbal-decoctions",
          title: "伝統漢方生薬およびシッダ煎じ薬 (クディニール)",
          category: "内科的アプローチ",
          desc: "舌診や脈診に基づき、天然由来の植物生薬を個別に調合。体の内側から解毒・滋養し、臓腑の調和を取り戻します。",
          benefits: ["慢性胃炎・胃腸機能障害", "呼吸器系のトラブル", "免疫力の底上げ", "体質改善と代謝促進"],
        },
        {
          id: "gua-sha-moxa",
          title: "刮痧（かっさ）および温灸療法",
          category: "外治療法",
          desc: "水牛角などの道具で皮膚を擦り滞ったオ血を流す「かっさ」と、ヨモギの温熱で深部まで温めるお灸を組み合わせます。",
          benefits: ["血行促進とオ血の排出", "風邪・寒冷による筋肉痛", "冷え性の根本改善", "デトックス効果"],
        },
        {
          id: "kayakarpam",
          title: "カーヤカルパム (Kayakarpam) 若返り・養生",
          category: "シッダ養生科学",
          desc: "規則正しい生活リズム、呼吸法、季節に応じた食事療法と伝統的な滋養強壮法により、健やかなエイジングをサポートします。",
          benefits: ["活力の増進", "慢性疲労の克服", "ストレス緩和と安眠", "自然治癒力の活性化"],
        },
      ],
    },
    resourceCenter: {
      title: "患者リソースセンター",
      subtitle: "提供された公式3言語文献に基づく伝統中医学およびシッダ医学の確かな知識ベース",
      searchPlaceholder: "キーワード検索（気、陰陽、かっさ、ヴァルマム、推拿など）...",
      allTab: "すべてのリソース",
      tcmTab: "伝統中医学 (TCM)",
      siddhaTab: "シッダ & AYUSH 医学",
      safetyTab: "安全性と注意事項",
      downloadPdfs: "公式教育文献 PDF を閲覧",
      tcmDocName: "中医学3言語文献 (PDF)",
      siddhaDocName: "シッダ医学3言語文献 (PDF)",
      readMore: "詳細な学術解説を読む",
      closeModal: "閉じる",
      verifiedSource: "3言語公認臨床資料",
      disclaimerTitle: "教育資料および安全に関する注記",
      disclaimerText: "本書は提供された原文を整理した教育用資料であり、個人の診断や救急医療の代替ではありません。高熱、激しい胸痛、呼吸困難などの緊急事態には、直ちに救急医療機関を受診してください。",
    },
    booking: {
      title: "診察のご予約",
      subtitle: "ご希望の担当医師、治療プログラム、日時をお選びいただけます",
      selectDoctor: "担当医師の選択",
      selectDoctorAny: "中印両医師による統合診療（おすすめ）",
      drMin: "ミン・ギョンジン 院長 (中医学博士 / 鍼灸推拿専門)",
      drNava: "Dr. Nava Subramanya Bharathi BSMS (シッダ医学 / ヴァルマム専門)",
      selectTreatment: "ご希望の診療内容",
      preferredDate: "ご希望の日時",
      preferredTime: "ご希望の時間帯",
      fullName: "お名前",
      phone: "お電話番号 / WhatsApp",
      email: "メールアドレス",
      notes: "主な症状・ご相談内容",
      notesPlaceholder: "気になっている症状、発症時期、現在服用中のお薬などをご記入ください...",
      submitWhatsapp: "WhatsAppで予約詳細を送信",
      directCall: "お電話で直接予約する",
      successTitle: "予約リクエストが作成されました",
      successMessage: "予約内容が整いました。以下のボタンからクリニックのWhatsAppに送信いただくか、カレンダーに予定を登録してください。",
      refNumber: "予約受付番号",
      calendarDownload: "カレンダーに追加 (.ics)",
      bookAnother: "別の予約を入力する",
      lunchNotice: "診療時間：月〜土 10:00〜20:00（昼休み 12:30〜14:30）、日曜 15:00〜20:00。",
    },
    locationHours: {
      title: "診療時間・所在地案内",
      subtitle: "インド チェンナイ タラマニ（Taramani）の清潔で落ち着いた医療環境",
      addressTitle: "クリニック所在地",
      address: "No.5A, 1st Floor, Thandhai Periyar Nagar, Taramani",
      city: "Chennai, Tamil Nadu 600113, India",
      mapsBtn: "Google マップで開く",
      getDirections: "ルート・経路案内 (Get Directions)",
      interactiveMapTitle: "クリニック所在地 インタラクティブマップ",
      landmarkInfo: "チェンナイ・タラマニ（目印：Odd Man Out Elite 店の上階）",
      copyAddress: "住所をコピー",
      addressCopied: "クリップボードに住所をコピーしました",
      hoursTitle: "診療スケジュール",
      weekdayHours: "月曜日 〜 土曜日: 午前 10:00 ～ 午後 08:00",
      weekdayLunch: "昼休憩: 午後 12:30 ～ 午後 02:30",
      sundayHours: "日曜日: 午後 03:00 ～ 午後 08:00",
      callForAppt: "丁寧な問診と脈診のため、事前のご予約をおすすめしております。",
    },
  },
};
