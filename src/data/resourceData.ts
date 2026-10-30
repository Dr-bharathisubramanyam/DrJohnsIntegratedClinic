import { Language } from './translations';

export interface ResourceArticle {
  id: string;
  category: 'tcm' | 'siddha' | 'safety' | 'integrative';
  title: Record<Language, string>;
  originalSectionNum: number;
  badge: Record<Language, string>;
  summary: Record<Language, string>;
  content: Record<Language, string[]>;
  keyTerms?: {
    term: string;
    transliteration?: string;
    meaning: Record<Language, string>;
  }[];
  pdfSource: 'tcm' | 'siddha';
}

export const tcmPdfUrl = '/assets/aistudio/Docs_tcm-resource-trilingual_7178c599.pdf';
export const siddhaPdfUrl = '/assets/aistudio/Docs_siddha-resource-trilingual_b05ce0fb.pdf';
export const drMinCvUrl = '/assets/aistudio/Dr_Min_Kyung_Jin_-_Profile__1__a056f519.pdf';
export const drNavaCvUrl = '/assets/aistudio/NAVA_SUBRAMANYA_BHARATHI_up4_31e5f707.pdf';

export const resourceArticles: ResourceArticle[] = [
  // TCM ARTICLES
  {
    id: 'tcm-basic-theory',
    category: 'tcm',
    originalSectionNum: 1,
    pdfSource: 'tcm',
    title: {
      en: '1. Basic Theory of Traditional Chinese Medicine',
      ko: '1. 중의학의 기본 이론 (Basic Theory of TCM)',
      zh: '1. 中医学基本理论与阴阳平衡',
      ja: '1. 中医学の基本理論 (Basic Theory of TCM)',
    },
    badge: {
      en: 'TCM Core Theory',
      ko: '중의학 기초 이론',
      zh: '中医基础理论',
      ja: '中医学基礎理論',
    },
    summary: {
      en: 'Disease arises from an imbalance in qi, the vital force flowing through the body, restored by balancing the opposing forces of yin and yang.',
      ko: '중의학은 신체를 통해 흐르는 생명력인 기(氣)의 불균형으로 인해 질병이 발생한다는 이론에 근거하며, 음양의 조화로 건강을 회복합니다.',
      zh: '中医学基于生命活力“气”的失衡导致疾病的理论，通过调和阴与阳的对立统一关系恢复机体平衡。',
      ja: '中医学は、身体を流れる生命力である「気」の不均衡によって病が生じるという理論に基づき、陰陽の調和を通じて回復を目指します。',
    },
    content: {
      en: [
        'Traditional Chinese medicine is based on the theory that disease arises from an imbalance in qi, the vital force that flows through the body.',
        'Qi is understood to be restored by balancing the opposing forces of yin and yang. In the body, yin and yang may be expressed as cold and heat, interior and exterior, or deficiency and excess.',
        'Traditional Chinese medicine uses formulas combining various natural herbs to treat a wide range of chronic and acute conditions, harmonizing the functional relationships among the internal organs (Zang-Fu).'
      ],
      ko: [
        '중의학은 신체를 통해 흐르는 생명력인 기(氣)의 불균형으로 인해 질병이 발생한다는 이론에 근거합니다.',
        '기는 음과 양이라는 상반된 힘의 균형을 통해 회복된다고 봅니다. 음양은 인체에서 냉기와 열기, 내부와 외부, 결핍과 과다 등의 형태로 나타납니다.',
        '중의학에서는 다양한 질병을 치료하기 위해 여러 약초를 배합한 처방을 사용하며, 오장육부의 유기적인 기능을 조화롭게 다스립니다.'
      ],
      zh: [
        '传统中医学认为，疾病源于运行于人体内部的生命活力——“气”的失调或阻滞。',
        '“气”的正常运行依赖于阴阳两个相对立力量的动态平衡。在人体中，阴阳表现为寒热、表里、虚实等不同病理生理状态。',
        '中医学通过辨证施治，运用多种地道中药组成的方剂，调理脏腑功能，恢复机体整体的平衡与生机。'
      ],
      ja: [
        '中医学は、身体を流れる生命力である「気」の不均衡によって病気が生じるという理論に基づいています。',
        '気は、相反する力である陰と陽のバランスを整えることで回復すると考えられています。陰陽は、身体において寒と熱、内と外、虚と実などとして現れます。',
        '中医学では、さまざまな病気に対して複数の生薬を組み合わせた処方を用い、五臓六腑の調和を図ります。'
      ],
    },
    keyTerms: [
      {
        term: 'Qi (氣)',
        meaning: {
          en: 'Vital bio-energy that drives physiological and mental functioning.',
          ko: '신체 기능과 정신 활동을 포괄하는 생명 활동의 원동력.',
          zh: '构成人体和维持人体生命活动的最基本能量与生理功能。',
          ja: '人体の生命力やエネルギーを表す根本概念。',
        },
      },
      {
        term: 'Yin-Yang (陰陽)',
        meaning: {
          en: 'Complementary opposing principles: Yin (cold, internal, rest) & Yang (warmth, external, activity).',
          ko: '상호 의존하며 균형을 이루는 대립적 자연 원리 (음과 양).',
          zh: '天地万物对立统一、相互滋生转化的根本法则。',
          ja: '互いに対立しながら補い合う相対的な生命の平衡概念。',
        },
      },
    ],
  },
  {
    id: 'tcm-treatment-methods',
    category: 'tcm',
    originalSectionNum: 2,
    pdfSource: 'tcm',
    title: {
      en: '2. TCM Treatment Methods & Holistic Modalities',
      ko: '2. 중의학 치료 방법 (Treatment Methods)',
      zh: '2. 中医治法与内治外治综合调理',
      ja: '2. 治療方法 (Treatment Methods)',
    },
    badge: {
      en: 'Therapeutic Modalities',
      ko: '임상 치료법',
      zh: '临床治疗学',
      ja: '治療技術',
    },
    summary: {
      en: 'A wide range of modalities including internal herbal administration, external applications, warm compresses, acupuncture, cupping, and massage.',
      ko: '한약재를 이용한 내복 치료와 외용 약제, 온열 찜질, 훈증뿐 아니라 침술, 부항, 마사지 등 독특하고 전인적인 치료 체계를 포괄합니다.',
      zh: '涵盖中药汤剂内服、外敷、热熨、熏蒸、洗浴，以及毫针针刺、拔罐、推拿等多元综合疗法。',
      ja: '生薬の内服をはじめ、外用薬、温罨法、燻蒸、洗浄、鍼、吸い玉（カッピング）、マッサージなど多岐にわたる全人的治療。',
    },
    content: {
      en: [
        'Traditional Chinese medicine offers a wide range of approaches. Internal treatments include oral administration of herbal medicines, while external treatments may include topical medicines, warm compresses, fumigation, and washing.',
        'Other methods include acupuncture, cupping (suction therapy), and massage (tuina).',
        'A comprehensive traditional medicine plan may include guidance on emotional regulation, dietary precautions, exercise such as swimming or running, acupuncture, moxibustion, and massage. This reflects a holistic approach that considers the body and mind together.'
      ],
      ko: [
        '중의학은 다양한 치료법을 제공합니다. 중국의 한약재를 이용한 경구 투여 등의 내과적 치료, 외용 약제, 온열 찜질, 훈증, 세척 등의 외치법이 활발히 쓰입니다.',
        '또한 침술(鍼術), 부항(吸筒), 마사지(추나) 등 다양하고 독특한 비약물 치료법이 결합됩니다.',
        '일반적으로 종합적인 한의학 처방에는 정서 관리 지침, 식이상 주의사항, 수영이나 달리기 등의 운동 제안, 침, 뜸, 마사지 등의 활용이 포함되어 몸과 마음을 통합적으로 바라보는 전체론적 접근을 취합니다.'
      ],
      zh: [
        '传统中医学拥有丰富的治法体系。内治法主要包括根据辨证拟定的中药汤剂与丸散膏丹；外治法则涵盖敷贴、温熨、熏蒸、浸洗等。',
        '同时，结合针刺、艾灸、拔罐、推拿等物理刺激手法，疏通经络脉道。',
        '完善的中医调理方案通常包含情志调节、饮食起居调护、适度运动及针灸推拿等，充分体现“形神共养、天人相应”的整体健康理念。'
      ],
      ja: [
        '中医学には幅広い治療法があります。内治法には生薬の内服などがあり、外治法には外用薬、温罨法、燻蒸、洗浄などがあります。',
        'また、鍼、吸い玉（カッピング）、マッサージ（推拿）などの方法も多用されます。',
        '総合的な中医学の治療計画には、感情の調整に関する助言、食事上の注意、水泳やランニングなどの運動提案、鍼、灸、マッサージなどが含まれます。このように心身を一如として捉える全人的なアプローチを取ります。'
      ],
    },
  },
  {
    id: 'tcm-modern-developments',
    category: 'tcm',
    originalSectionNum: 3,
    pdfSource: 'tcm',
    title: {
      en: '3. Developments in Modern Traditional Chinese Medicine',
      ko: '3. 현대 중의학의 발전 (Developments in Modern TCM)',
      zh: '3. 现代中医学的科研发展与创新',
      ja: '3. 現代中医学の発展 (Developments in Modern TCM)',
    },
    badge: {
      en: 'Evidence & Innovation',
      ko: '현대 임상 연구',
      zh: '现代科学研究',
      ja: '現代的発展',
    },
    summary: {
      en: 'Natural origin medicines, injectable preparations, and scientific laboratory and clinical research advancing traditional practices.',
      ko: '천연 물질에서 유래한 전통 약재와 침술의 과학적 연구, 현대화된 제형 연구를 통해 전통 치료법의 혁신이 이루어지고 있습니다.',
      zh: '基于动植物与矿物天然成分，结合现代药理学、针刺神经科学及临床随机对照试验，推动传统医学的科学化发展。',
      ja: '天然素材に基づく伝統生薬と科学的研究が融合し、鍼治療の神経生理学的解明や新規製剤の開発など進化を続けています。',
    },
    content: {
      en: [
        'In recent years, modern Chinese medicine has progressed through rigorous research-based approaches and standardized pharmaceutical preparation.',
        'Many traditional medicinal substances originate from natural sources, including plants, minerals, and carefully vetted organic sources.',
        'Building on traditional practices, modern Chinese medicine has developed in several areas, including acupuncture neuro-mechanisms, specialized preparations, and multi-center clinical trials for stroke and chronic disease management.'
      ],
      ko: [
        '최근에는 근육 내 또는 정맥 내 투여를 위한 전통 약물 주사 제제 등 현대적 약학 연구가 발전해 왔습니다.',
        '전통적으로 사용되는 약재의 상당수는 동물·식물·광물에서 유래한 천연 물질입니다.',
        '현대 중의학은 전통적 치료법을 바탕으로 침술, 과학적 임상 연구를 통한 중의학의 발전 등 다양한 분야에서 변화와 혁신을 이루고 있습니다.'
      ],
      zh: [
        '近年来，现代中医学紧密结合循证医学与现代生命科学，在有效成分提取与机制研究方面取得显著进展。',
        '绝大多数经典药材均源自植物草本、天然矿物等天然原料。',
        '立足于千年传承，现代中医在脑卒中醒脑开窍针法、心脑血管调理、抗肿瘤辅助治疗等领域开展了大量深层次科学探索。'
      ],
      ja: [
        '近年、伝統医学由来の成分研究や科学的根拠に基づくアプローチが進展しています。',
        '伝統的に用いられる薬物の多くは、植物や鉱物などに由来する天然物です。',
        '現代の中医学は、伝統的な治療法を基盤として、鍼治療の科学的メカニズムの解明など、さまざまな学術分野で革新を遂げています。'
      ],
    },
  },
  {
    id: 'tcm-gua-sha',
    category: 'tcm',
    originalSectionNum: 4,
    pdfSource: 'tcm',
    title: {
      en: '4. Gua Sha (刮痧) Therapy & Microcirculation',
      ko: '4. 괄사(刮痧)의 원리와 임상 적용',
      zh: '4. 传统刮痧疗法与皮下微循环改善',
      ja: '4. 刮痧（グアシャ / かっさ）療法',
    },
    badge: {
      en: 'Manual & External Therapy',
      ko: '전통 수기 외치법',
      zh: '传统非药物疗法',
      ja: '手技・外用療法',
    },
    summary: {
      en: 'Traditional scraping technique using water-buffalo horn or smooth tools to stimulate skin, resolve blood stasis, and promote local circulation.',
      ko: '피부 표면을 도구로 긁거나 문질러 자극하는 치료법으로, 어혈을 해소하고 혈액순환을 돕기 위해 시행됩니다.',
      zh: '使用水牛角等光滑边缘器具循经推刮皮肤，达到出痧、活血化瘀、疏经通络的良效。',
      ja: '水牛の角などの道具で皮膚を擦り、局所の血行を促してオ血を取り除く伝統的な手技療法です。',
    },
    content: {
      en: [
        'Gua sha (刮痧) is a traditional technique in which the skin is gently scraped or rubbed with a specialized tool.',
        'Tools made from materials such as water-buffalo horn, jade, or medical metal have been utilized across generations.',
        'The technique is performed with the aim of stimulating the skin and subcutaneous fascia, supporting local microcirculation, releasing myofascial restrictions, and dispersing stagnant blood (sha).'
      ],
      ko: [
        '괄사(刮痧)는 피부 표면을 도구로 긁거나 문질러 자극하는 전통적인 치료법입니다.',
        '물소뿔이나 옥, 금속 도구 등이 사용되어 왔으며, 피부를 자극해 혈액순환을 돕는 목적으로 시행됩니다.',
        '오늘날에도 비교적 안전하고 효과적인 수기 치료법으로 널리 활용되고 있으며, 어혈과 근막 긴장 완화에 탁월합니다.'
      ],
      zh: [
        '刮痧（Gua Sha）是用特制器具在患者体表经络穴位处进行反复刮拭的传统外治疗法。',
        '常用工具有水牛角刮痧板、天然玉石或医用金属刮板，配合专用活血润肤介质。',
        '其机制在于温和刺激皮下微血管，促进局部新陈代谢与淋巴回流，消除肌肉疲劳与结节粘连。'
      ],
      ja: [
        '刮痧（グアシャ / かっさ）は、道具を用いて皮膚表面をこすったり、押しながら刺激したりする伝統的な療法です。',
        '水牛の角や金属製の道具などが使われてきました。',
        '皮膚への刺激を通じて局所の血行を促すことを目的とし、現在も筋膜リリースや手技療法の一つとして重用されています。'
      ],
    },
  },
  {
    id: 'tcm-what-is-qi',
    category: 'tcm',
    originalSectionNum: 5,
    pdfSource: 'tcm',
    title: {
      en: '5. What is Qi (氣)? Vital Energy & Modern Biophysics',
      ko: '5. 기(氣)란 무엇인가? 생명력과 현대적 해석',
      zh: '5. 论“气”：人体的生命原动力与生理代谢',
      ja: '5. 「気」とは何か？ 生命活動の原動力',
    },
    badge: {
      en: 'Bio-Energy Physiology',
      ko: '생명 에너지 생리학',
      zh: '生命本源与生理',
      ja: '生命エネルギー',
    },
    summary: {
      en: 'Qi is the central concept representing vitality, physical functions, and mental energy, closely related to modern cellular metabolism and bio-signaling.',
      ko: '한의학에서 기(氣)는 인체의 생명력과 에너지를 나타내는 핵심 개념으로, 신체 기능과 정신 활동을 포괄하는 활동 에너지입니다.',
      zh: '“气”在中医里代表生命机能与活力的核心概念，涵括物质能量代谢与神经内分泌调节的总体反应。',
      ja: '「気」は人体の生命力やエネルギーを表す中心概念であり、身体機能と精神活動の基盤となる活動エネルギーです。',
    },
    content: {
      en: [
        "In traditional medicine, qi is a central concept representing the body's vitality and energy. It is understood as an activity or functional energy encompassing both physical functions and mental activity.",
        "Qi is described as an unseen force found in the human body and throughout nature, and as a driving force of life. Traditional medicine considers qi important for regulating bodily functions and maintaining balance.",
        "From a modern perspective, substantial research has attempted to interpret the concept of qi in relation to cellular ATP metabolism, autonomic nervous tone, and bio-electromagnetic signaling."
      ],
      ko: [
        '한의학에서 기(氣)는 인체의 생명력과 에너지를 나타내는 핵심 개념으로, 신체 기능과 정신 활동을 포괄하는 활동 에너지로 이해됩니다.',
        '기는 인체와 자연 만물에 존재하는 보이지 않는 힘이자 생명 활동의 원동력으로 설명됩니다. 한의학에서는 기가 신체 기능을 조절하고 균형을 유지하는 데 중요하다고 봅니다.',
        '현대적 관점에서는 기 개념을 인체의 에너지 대사, 미토콘드리아 기능 및 생물학적 신경 전달 기전과 연관 지어 활발히 해석하고 있습니다.'
      ],
      zh: [
        '在中医学中，“气”是无形而又真实存在的极细微物质，是生命机体运化与精神活动的推动力。',
        '气充沛则生命力旺盛，气虚滞则机体免疫与抗病能力低下。中医通过调气、理气、补气来维护生命机体的稳态。',
        '现代生物物理学和系统生物学研究表明，中医学的“气”与细胞能量代谢（ATP生成）、自主神经调节及微循环灌注具有高度对应性。'
      ],
      ja: [
        '伝統医学において「気」は、人体の生命力やエネルギーを表す重要な概念であり、身体機能と精神活動の両方に関わる活動エネルギーとして理解されています。',
        '気は、人体や自然界に存在する目に見えない力であり、生命活動の原動力と説明されます。伝統医学では、気が身体機能の調整やバランスの維持に重要だと考えます。',
        '現代的な観点から、気の概念をエネルギー代謝や生物学的機序と関連づけて解釈しようとする研究も行われています。'
      ],
    },
  },
  {
    id: 'tcm-yin-yang',
    category: 'tcm',
    originalSectionNum: 7,
    pdfSource: 'tcm',
    title: {
      en: '7. What Are Yin and Yang? (陰陽의 조화)',
      ko: '7. 음양(陰陽)이란? 인체 평형과 치료의 대원칙',
      zh: '7. 阴阳辨证：阴平阳秘，精神乃治',
      ja: '7. 陰陽とは何か？ (What Are Yin and Yang?)',
    },
    badge: {
      en: 'Dual Equilibrium',
      ko: '음양 대원칙',
      zh: '阴阳学说',
      ja: '陰陽の調和',
    },
    summary: {
      en: 'Yang signifies warmth, brightness, and movement; Yin signifies coolness, inward orientation, and stillness. Disease arises when their dynamic balance is broken.',
      ko: '양은 따뜻하고 활동적인 성질, 음은 서늘하고 정적인 성질을 나타내며, 치료에서는 부족한 부분을 보하고 과도한 부분을 사하여 균형을 회복합니다.',
      zh: '阳主温煦升发、动者为阳；阴主沉降濡润、静者为阴。两者互根互用，阴阳失调即为诸病之始。',
      ja: '温かさや活動性は陽に、冷涼さや静止性は陰に関連づけられ、治療では不足を補い過剰を取り除いて調和を取り戻します。',
    },
    content: {
      en: [
        'Yang is associated with brightness, warmth, upward movement, an outward orientation, and activity. Yin is associated with darkness, coldness, downward movement, an inward orientation, and stillness.',
        'Yin and yang are relative concepts that oppose yet complement each other. They depend on one another and may transform into each other under certain physiological conditions.',
        'Traditional medicine holds that a relative balance between yin and yang is necessary for normal physiological functioning. Disease arises when this balance is disrupted and one side becomes excessive or deficient. Treatment principles aim to supplement what is deficient and clear what is excessive to restore balance.'
      ],
      ko: [
        '밝고 따뜻하며 상승하고 외부 지향적이며 동적인 성질은 양(陽)으로, 어둡고 차가우며 하강하고 내부 지향적이며 정적인 성질은 음(陰)으로 설명됩니다.',
        '음양은 서로 대립하면서도 보완하는 상대적 개념입니다. 음과 양은 서로 의존하며, 일정한 조건에서는 서로 전환될 수 있다고 봅니다.',
        '한의학에서는 인체의 음양이 상대적인 평형을 유지해야 정상적인 생리 상태가 유지된다고 설명합니다. 음양의 균형이 깨져 한쪽이 지나치게 강하거나 부족해지면 질병이 발생할 수 있으며, 치료에서는 부족한 부분을 보하고 과도한 부분을 사하여 균형을 회복하는 것을 원칙으로 삼습니다.'
      ],
      zh: [
        '阳代表光明、温暖、上升、外向和活跃；阴代表幽暗、寒凉、沉降、内敛与宁静。',
        '阴与阳并非孤立存在，而是既对立又统一的相成关系。阴在内，阳之守也；阳在外，阴之使也。',
        '《黄帝内经》云：“阴平阳秘，精神乃治；阴阳离决，精气乃绝。”治疗的最高准则即是“损其有余，补其不足”，使偏盛偏衰之体复归中和。'
      ],
      ja: [
        '明るさ、温かさ、上昇、外向性、活動性は陽に、暗さ、冷たさ、下降、内向性、静止性は陰に関連づけられます。',
        '陰陽は、互いに対立しながらも補い合う相対的な概念です。陰と陽は相互に依存し、一定の条件下では互いに転化すると考えられています。',
        '伝統医学では、人体の陰陽が相対的な平衡を保つことが正常な生理機能に必要だと説明します。バランスが崩れると病気につながるため、治療では不足を補い、過剰を取り除いてバランスを回復することを目指します。'
      ],
    },
  },
  {
    id: 'tcm-zheng-qi',
    category: 'tcm',
    originalSectionNum: 8,
    pdfSource: 'tcm',
    title: {
      en: '8. Zheng Qi & Pathogenic Factors (正氣와 邪氣)',
      ko: '8. 정체(正氣)와 사기(邪氣)의 대립과 해독',
      zh: '8. 正气与邪气：扶正祛邪的免疫防护之道',
      ja: '8. 正気と邪気の概念 (Zheng Qi and Pathogens)',
    },
    badge: {
      en: 'Immune Defense',
      ko: '면역 방어 기전',
      zh: '免疫与扶正',
      ja: '免疫防御',
    },
    summary: {
      en: 'Zheng Qi is the body’s innate defense against disease; Xie Qi represents pathogenic invaders. Treatments clear heat, resolve toxins, and strengthen vital resistance.',
      ko: '정기(正氣)는 질병에 대항하는 신체의 정상적인 방어 능력을 뜻하며, 사기(邪氣)의 침입에 맞서 청열해독과 거사의 치료 원칙을 적용합니다.',
      zh: '正气存内，邪不可干。正气代表机体的防御抵抗与自我修复机能；邪气泛指一切致病因素与内生毒邪。',
      ja: '正気（せいき）は病気に対抗する身体本来の自己防御力であり、邪気の侵入に対して清熱解毒や祛邪の原則で治療します。',
    },
    content: {
      en: [
        "Some traditional medicine explanations describe zheng qi (正氣) as the body's normal defensive capacity against disease and external pathogens.",
        'Conditions such as infectious fever arise when the balance of yin and yang is disrupted during the struggle between zheng qi and pathogenic factors (xie qi, 邪氣).',
        'Traditional treatment principles include clearing heat and resolving toxins (qingre jiedu, 淸熱解毒), expelling pathogenic factors (qu xie, 祛邪), and supporting constitutional vital resistance through targeted acupoints and herbs.'
      ],
      ko: [
        '한의학의 일부 설명에서는 정기(正氣)를 질병에 대항하는 신체의 정상적인 방어 능력으로 봅니다.',
        '감염성 발열과 같은 병증은 정기와 사기(邪氣)가 다투는 과정에서 음양의 평형이 깨져 발생하며, 사독(邪毒)의 침입과 관련지어 설명됩니다.',
        '전통 의학의 치료 원칙에는 열을 내리고 열독을 없애는 청열해독(淸熱解毒), 병적 요인을 제거하는 거사(祛邪) 등이 포함되며 체질을 보강합니다.'
      ],
      zh: [
        '正气乃机体抗病、修复之本。当机体正气充盈，外在风、寒、暑、湿、燥、火等六淫邪气便难以侵袭。',
        '当正邪相争剧烈，阴阳失衡，便会出现急性发热、炎症及机体机能紊乱。',
        '治法以“扶正固本”与“清热解毒、祛邪外出”为主，通过针刺特定经穴调动人体的天然防御防线。'
      ],
      ja: [
        '伝統医学の一部の説明では、正気（せいき）を病気に対抗する身体本来の防御能力と捉えます。',
        '感染症による発熱などは、正気と邪気が争う過程で陰陽のバランスが崩れることによって生じると説明されます。',
        '伝統医学の治療原則には、熱を冷まし毒を取り除く「清熱解毒」や、病的要因を取り除く「祛邪」などがあり、身体の本来の治癒力を高めます。'
      ],
    },
  },

  // SIDDHA & AYUSH ARTICLES
  {
    id: 'siddha-overview',
    category: 'siddha',
    originalSectionNum: 1,
    pdfSource: 'siddha',
    title: {
      en: '1. Overview of Siddha Medicine & The 96 Principles (Thathuvam)',
      ko: '1. 싯다(Siddha) 의학의 개요와 96 타투밤(Thathuvam)',
      zh: '1. 印度锡达医学概览与96基本原理 (Thathuvam)',
      ja: '1. シッダ医学の概要と96の基本原理 (Thathuvam)',
    },
    badge: {
      en: 'Siddha Core Foundations',
      ko: '싯다 핵심 기초',
      zh: '锡达医学总论',
      ja: 'シッダ医学基礎',
    },
    summary: {
      en: 'Siddha is a traditional system rooted in Tamil culture, viewing health holistically via 96 Thathuvam, Pancha Bootham (5 elements), and Mukkutram (3 humours).',
      ko: '인도 남부 타밀 문화에 뿌리를 둔 전통 의학 체계로, 96 타투밤과 판차 부탐(5요소), 3대 생명 기능(발리, 아잘, 이얌)의 조화를 지향합니다.',
      zh: '植根于南印度泰米尔古文明，以96基本原理、五大元素及三体液学说为核心的古老整体医学。',
      ja: 'インド南部タミル文化に根ざした伝統医学で、身体・心・生活環境を一体として捉える全人的な健康観を重視します。',
    },
    content: {
      en: [
        'Siddha medicine is a traditional medical system rooted in Tamil culture in southern India. It takes a holistic view of health, considering the person, mind, habits, and environment together.',
        'Its literature is associated with the ancient Siddhars (enlightened sages), and the system describes preventive, health-promoting, therapeutic, rejuvenative, and rehabilitative care.',
        'Siddha theory describes a microcosm-macrocosm relationship between the universe and the human body using the framework of 96 Thathuvam (fundamental principles). These include Pancha Bootham (earth, water, fire, air, space), Mukkutram (three vital humours: Vali/Vatham, Azhal/Pitham, Iyyam/Kabam), and seven physical constituents (Udal Kattukal).'
      ],
      ko: [
        '싯다 의학(Siddha)은 인도 남부 타밀 지역의 전통 의학 체계로, 신체·마음·생활환경을 함께 고려하는 전인적 접근을 강조합니다.',
        '전통적으로 싯다르(Siddhar)라 불리는 현자들의 지식과 타밀 의학 문헌에 뿌리를 두며, 예방·건강증진·치료·회복 및 재활을 지향합니다.',
        '싯다 의학은 우주와 인간이 서로 대응한다는 관점과 96 타투밤(Thathuvam)을 설명 체계로 삼습니다. 판차 부탐(흙·물·불·공기·공간의 다섯 요소), 무쿠트람(세 가지 생명 기능인 발리/바탐, 아잘/피탐, 이얌/카팜), 그리고 일곱 신체 구성 요소가 조화를 이룰 때 건강이 유지됩니다.'
      ],
      zh: [
        '锡达医学（Siddha Medicine）起源于印度南部泰米尔纳德邦，是人类最古老的传统医学流派之一。其核心在于将人、心志、生活习性与外部自然环境融为一个不可分割的有机整体。',
        '由古代大成圣者（Siddhars）通过灵性实修与医学观察而建立，体系涵盖预防医学、治疗医学、抗衰养生与康复医学。',
        '其理论体系包含96种宇宙生理对应法则（96 Thathuvam）、地水火风空五大基本元素（Pancha Bootham）、三大生命体液机能（Vali风、Azhal火胆、Iyyam水痰）以及七大身体组织构成。'
      ],
      ja: [
        'シッダ医学は、インド南部のタミル文化に根ざした伝統医学体系です。身体だけでなく、心、生活習慣、環境をあわせて捉える全人的な健康観を重視します。',
        'シッダルと呼ばれる古代の賢者たちの伝承やタミル語の医学文献に結びつき、予防、健康増진、治療、若返り、リハビリテーションを目指します。',
        'シッダ医学では、宇宙と人体は対応関係にあると考え、96のタットゥヴァム（基本原理）を枠組みとします。地・水・火・風・空の五元素、三つの生命機能（ヴァータ、ピッタ、カパ）、七つの身体構成要素の調和が健康の本質です。'
      ],
    },
    keyTerms: [
      {
        term: 'Pancha Bootham (பஞ்ச பூதம்)',
        meaning: {
          en: 'The five universal elements: Earth (Nilam), Water (Neer), Fire (Thee), Air (Kaatru), Space (Aakasam).',
          ko: '만물을 구성하는 5대 요소 (흙, 물, 불, 공기, 공간).',
          zh: '构成宇宙与人体的五大根元：土、水、火、风、空。',
          ja: '万物を構成する五大元素（地・水・火・風・空）。',
        },
      },
      {
        term: 'Mukkutram (முக்குற்றம்)',
        meaning: {
          en: 'Three biological humours: Vali (Kinetic/Nerve), Azhal (Metabolic/Heat), Iyyam (Structural/Fluid).',
          ko: '세 가지 생명 유지 기능 (발리/바탐, 아잘/피탐, 이얌/카팜).',
          zh: '三种维持生命机能的体液枢纽：风质(Vali)、火质(Azhal)、黏液(Iyyam)。',
          ja: '人体の生理・病理を司る三つの機能的体液。',
        },
      },
    ],
  },
  {
    id: 'siddha-diagnostics',
    category: 'siddha',
    originalSectionNum: 2,
    pdfSource: 'siddha',
    title: {
      en: '2. Diagnostic Approaches: Envagai Thervu (8-Fold Assessment)',
      ko: '2. 싯다 진단법: 엔바가이 테르부(Envagai Thervu 8가지 진단)',
      zh: '2. 锡达八纲诊断体系 (Envagai Thervu) 与脉尿诊',
      ja: '2. 診断方法: エンヴァガイ・テルヴ（八つの評価法）',
    },
    badge: {
      en: 'Traditional Diagnostics',
      ko: '싯다 정밀 진단',
      zh: '诊断评估',
      ja: '診断技術',
    },
    summary: {
      en: 'Eightfold assessment including pulse (Naadi), eyes, tongue, complexion, voice, stool, and unique urine oil spread examination (Neikuri).',
      ko: '맥진(Naadi), 소변 관찰(Neerkuri), 기름 떨어뜨림 검사(Neikuri)를 비롯해 신체 전반을 평가하는 엔바가이 테르부 8가지 진단법.',
      zh: '包含脉诊(Naadi)、舌诊、目诊、肤色声音评估以及独具特色的尿样油滴扩散形态分析(Neikuri)。',
      ja: '脈診（ナーディ）、尿の観察（ニールクリ）、尿に油を垂らすオイル検査（ネーイクリー）など8つの精密な総合診断。',
    },
    content: {
      en: [
        'Traditional Siddha diagnostic approaches include thorough history-taking, physical observation, and specialized clinical techniques.',
        'Envagai Thervu is the classical eightfold assessment evaluating: 1. Naadi (Pulse), 2. Kan (Eyes), 3. Naa (Tongue), 4. Niram (Complexion/Skin color), 5. Mozhi (Speech/Voice), 6. Malam (Stool), 7. Moothiram (Urine), and 8. Sparsam (Touch/Body condition).',
        'Unique to Siddha is Neerkuri (urine examination) and Neikuri (observing the droplet pattern and spread speed when sesame oil is dropped onto fresh morning urine), providing deep insight into humoral dominance.'
      ],
      ko: [
        '전통적인 진단에는 세밀한 문진과 신체 관찰, 맥진(나디, Naadi), 소변 관찰(네르쿠리, Neerkuri) 등이 포함됩니다.',
        '엔바가이 테르부(Envagai Thervu)는 1. 맥박(Naadi), 2. 피부색(Niram), 3. 말/음성(Mozhi), 4. 눈(Kan), 5. 혀(Naa), 6. 대변(Malam), 7. 소변(Moothiram), 8. 촉진 및 전반적인 신체 상태(Sparsam)를 살피는 8가지 평가법입니다.',
        '특히 소변 표면에 참기름을 떨어뜨려 퍼지는 모양과 속도를 관찰하는 네이쿠리(Neikuri)는 3대 체액의 병리적 치우침을 판별하는 싯다 의학만의 독창적인 진단 기술입니다.'
      ],
      zh: [
        '锡达医学的诊断结合了详尽的望闻问切与八纲评估法（Envagai Thervu）。',
        '八大评估要素包括：脉象(Naadi)、双眼神态(Kan)、舌苔形态(Naa)、面容肤色(Niram)、语声明暗(Mozhi)、大便性状(Malam)、小便色质(Moothiram)以及机体触感(Sparsam)。',
        '其中最负盛名的“尿油试验”（Neikuri）通过在清晨初尿上滴入一滴芝麻油，观察油滴扩散的环形、蛇行或网状形态，精准判断体内哪一种能量处于病态失衡。'
      ],
      ja: [
        '伝統的な診断には、問診や身体観察、脈診（ナーディ）、尿の観察（ニールクリ）などが含まれます。',
        'エンヴァガイ・テルヴは、脈、顔色、話し方、目、舌、便、尿、全身状態（触診）を観察する八つの伝統的評価体系です。',
        'さらに尿の上にゴマ油を一滴落とし、その広がり方や模様から体内の不均衡を読み解く「ネーイクリー」などの特徴的な手法があります。'
      ],
    },
  },
  {
    id: 'siddha-varmam-thokkanam',
    category: 'siddha',
    originalSectionNum: 4,
    pdfSource: 'siddha',
    title: {
      en: '4. Varmam (Vital Point Stimulation) & Thokkanam Manual Therapy',
      ko: '4. 바르맘(Varmam 급소 요법)과 토크카남(Thokkanam 수기 요법)',
      zh: '4. 瓦玛 (Varmam) 能量点穴与托卡南 (Thokkanam) 筋膜整复',
      ja: '4. ヴァルマム (Varmam) とトッカナム (Thokkanam) 特殊療法',
    },
    badge: {
      en: 'Special Manual Therapies',
      ko: '특수 치료 및 수기 요법',
      zh: '能量手法医学',
      ja: '特殊手技療法',
    },
    summary: {
      en: 'Varmam manipulates the vital energy junctions on the body, while Thokkanam provides medical massage, physical manipulation, and joint mobilization.',
      ko: '신체의 중요 급소 지점에 대한 압박과 자극을 가하는 바르맘과, 관절 가동 및 마사지를 결합한 토크카남 수기 치료.',
      zh: '瓦玛疗法作用于人体神经血管丛汇聚的108个要穴；托卡南通过9种医学手法调治筋膜肌肉粘连与骨骼位移。',
      ja: '伝統的に重要とされる身体の要点への圧迫・刺激を行うヴァルマムと、身体操作・関節可動を含むトッカナム手技。',
    },
    content: {
      en: [
        'Varmam therapy involves the gentle, calibrated stimulation of vital anatomic points where Prana (life-force energy), nerves, joints, and tendons converge. It is used clinically for acute and chronic neuromuscular conditions, disc herniation, and nerve entrapments.',
        'Thokkanam is an advanced manual therapy consisting of physical manipulation, targeted pressure, mobilization, and therapeutic massage across 9 distinct technical strokes, often combined with medicinal herbal oils.',
        'Other classical external procedures include Ottradam (warm herbal fomentation), Patru (herbal medicinal poultice), Poochu (therapeutic application/anointing), Pugai (fumigation), and Vethu (steam inhalation).'
      ],
      ko: [
        '바르맘(Varmam)은 전통적으로 중요한 신체 신경-혈관-에너지 교차 지점에 대한 정밀한 압박과 자극을 활용하여 신경 마비와 통증을 완화하는 싯다 의학의 최고급 치료 기술입니다.',
        '토크카남(Thokkanam)은 9가지 특수 수기 기법을 포괄하는 마사지·신체 조작·관절 가동술로, 약용 오일과 함께 근막 이완 및 척추 교정에 활용됩니다.',
        '이외에도 온찜질 요법인 오트라담(Ottradam), 습포 요법인 파트루(Patru), 약물 도포(푸차, Poochu), 한방 훈증(푸가이, Pugai), 증기 흡입(베투, Vethu) 등의 외치법이 유기적으로 병행됩니다.'
      ],
      zh: [
        '瓦玛（Varmam）疗法是锡达医学的掌上明珠，通过对遍布全身的108处关键神经节与生命能量枢纽进行特殊手法调理，以迅速解除神经压迫、镇痛消炎并恢复肢体肌力。',
        '托卡南（Thokkanam）包含揉法、按法、拉伸法、抖动法等9大分级医学推拿手法，配合特制药用草本油，针对颈腰椎病及运动创伤疗效显著。',
        '此外，尚有草药热敷（Ottradam）、草药糊包扎（Patru）、药油涂抹（Poochu）、药物熏蒸（Pugai）及蒸汽吸入（Vethu）等多重外治法。'
      ],
      ja: [
        'ヴァルマム（Varmam）は、伝統的に重要とされる神経やエネルギーの要点への精密な圧迫や刺激を用い、神経麻痺や激しい痛みを和らげます。',
        'トッカナム（Thokkanam）は、薬用オイルを用いながらマッサージ、身体操作、関節などの可動を行う高度な徒手療法です。',
        'そのほか、温罨法（オットラダム）、湿布（パットル）、塗布（プーチュ）、燻蒸（プガイ）、蒸気吸入（ヴェートゥ）など多様な外用法が体系化されています。'
      ],
    },
  },
  {
    id: 'siddha-kayakarpam',
    category: 'siddha',
    originalSectionNum: 5,
    pdfSource: 'siddha',
    title: {
      en: '5. Kayakarpam (카야카르팜) & Longevity Science',
      ko: '5. 카야카르팜(Kayakarpam)과 활력·건강 유지 체계',
      zh: '5. 锡达回春养生长寿学 (Kayakarpam)',
      ja: '5. カーヤカルパム (Kayakarpam) と健康維持・養生法',
    },
    badge: {
      en: 'Rejuvenation Science',
      ko: '장수·항노화 과학',
      zh: '抗衰与养生',
      ja: '若返り・養生',
    },
    summary: {
      en: 'Kayakarpam supports vitality and healthy ageing through seasonal herbal elixirs, breathwork, disciplined daily routines, and mental resilience.',
      ko: '카야카르팜은 활력과 건강한 노화를 지향하는 싯다 고유의 회복·수양 체계로, 특화 제제와 식이, 요가, 호흡법을 결합합니다.',
      zh: '结合定制草本药剂、季节作息律动、调息瑜伽与心性修炼，致力于提升生命活力、延缓衰老与预防未病。',
      ja: '活力や健やかな加齢を目指す若返り・養生法で、特定の製剤、生活習慣、呼吸法、食事のリズムを調和させます。',
    },
    content: {
      en: [
        'Kayakarpam (Kaya = Body, Karpam = Transform into stone/strength) is described in classical texts as a rejuvenative and health-maintenance approach intended to support vitality and healthy ageing.',
        'Traditionally, it combines selected adaptogenic plant formulations with disciplined lifestyle practices, Pranayama (breathwork), and mental discipline.',
        'Siddha also emphasizes dietetics according to seasonal climate changes, ensuring the body cellular reserves remain uncompromised by stress and environmental toxins.'
      ],
      ko: [
        '카야카르팜(Kayakarpam)은 활력과 건강한 노화를 지향하는 회복·수양 체계로 설명됩니다.',
        '전통적으로 특정 회복 약제, 건강한 식습관, 요가 및 호흡법(프라나야마)을 유기적으로 포함합니다.',
        '싯다 의학은 계절에 따른 생활 리듬, 신체 운동, 정신적 수양을 매우 중요하게 다루어 인체의 자연 치유력을 보존합니다.'
      ],
      zh: [
        '卡雅卡尔帕姆（Kayakarpam，意为“如磐石般坚韧的身体”）是锡达传统医学中最高层级的防衰养生学。',
        '该系统通过甄选具有强力抗氧化与免疫修护功效的天然草本配方，结合调息修心法，维持机体组织细胞的旺盛活性。',
        '同时强调依据节气变换调整三餐饮食与作息规律，实现人与自然生态节律的同步共振。'
      ],
      ja: [
        'カーヤカルパム（Kayakarpam）は、活力や健やかな加齢を目指す若返り・養生法として説明されます。',
        '伝統的には特定の製剤、生活習慣、ヨーガ、呼吸法などを組み合わせ、心身の活力を高めます。',
        'シッダ医学では、食事、日々や季節に応じた生活リズム、適度な運動、精神の鍛錬も重要視されます。'
      ],
    },
  },
  {
    id: 'siddha-safety-notes',
    category: 'safety',
    originalSectionNum: 8,
    pdfSource: 'siddha',
    title: {
      en: '8. Patient Safety, Clinical Red Flags & Verification Notes',
      ko: '8. 환자 안전 지침 및 응급 징후 안내 (Safety & Notes)',
      zh: '8. 患者就医安全、危急红旗征象与诊疗规范',
      ja: '8. 注記と安全上の注意 (Notes & Patient Safety)',
    },
    badge: {
      en: 'Clinical Safety Protocol',
      ko: '임상 안전 규정',
      zh: '临床安全指引',
      ja: '安全ガイドライン',
    },
    summary: {
      en: 'Essential safety information: traditional medicine complements modern medical care. Warning signs require immediate emergency intervention.',
      ko: '전통 의학의 올바른 활용과 안전 수칙: 고열, 호흡곤란, 흉통 등 응급 징후 시에는 즉시 상급 응급 의료를 받아야 합니다.',
      zh: '传统医疗与现代医学相辅相成。如出现高热抽搐、剧烈胸痛、呼吸窘迫或脑卒中突发先兆，必须立即就医。',
      ja: '教育用概要としての注記：激しい痛み、呼吸困難、意識変化、胸痛、脳卒中兆候などの緊急時には直ちに救急医療を受診してください。',
    },
    content: {
      en: [
        'This clinical resource serves as an educational overview of TCM and Siddha treatment categories; it does not replace individualized diagnostic workups or emergency medical intervention.',
        'Always consult with our licensed physicians regarding any existing prescription medications before modifying treatments.',
        'Seek immediate emergency clinical care for warning signs such as severe sudden-onset pain, acute difficulty breathing, altered consciousness, chest tightness/pain, or stroke symptoms (facial drooping, slurred speech, acute limb weakness).'
      ],
      ko: [
        '이 문서는 중의학 및 싯다 의학의 개념과 치료 범주를 소개하는 교육용 개요이며 개별 환자에 대한 진단이나 치료 지침을 대체할 수 없습니다.',
        '처방약을 임의로 중단하거나 대체하지 마시고, 자격을 갖춘 의료인과 상담하시기 바랍니다.',
        '심한 급성 통증, 호흡곤란, 의식 변화, 흉통, 뇌졸중 의심 증상(편마비, 언어 장애 등)과 같은 응급 징후가 있을 때는 지체 없이 즉시 응급 의료서비스를 이용하여야 합니다.'
      ],
      zh: [
        '本知识中心内容基于权威多语种临床文献整理，属患者医学普及与常识指导，不可直接替代针对个体的临床确诊或急救处方。',
        '患者在接受传统医学调理前，应如实告知既往病史与正在服用的现代西药，切勿擅自停用正规降压、降糖或抗凝药物。',
        '若出现突发剧烈头痛、肢体偏瘫麻木、言语不利、急性胸闷剧痛或神志模糊等危急重症征象，应立即前往设有急诊重症科的综合医院就医。'
      ],
      ja: [
        '本資料は中医学およびシッダ医学の概念と治療分類を紹介する教育用の概要であり、個人の診断や治療計画ではありません。',
        '現在服用中のお薬を自己判断で中止・変更せず、資格のある医療従事者にご相談ください。',
        '激しい痛み、呼吸困難、意識の変化、胸痛、脳卒中が疑われる症状（片側の麻痺やろれつが回らない等）がある場合は、直ちに救急医療を受診してください。'
      ],
    },
  },
];
