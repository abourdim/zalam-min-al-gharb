/* ظلام من الغرب — DARKNESS FROM THE WEST — app.js v1.0 */
/* Based on "Zalam min al-Gharb" by Sheikh Mohammed al-Ghazali (1917-1996) */
/* 256 pages, 20 chapters — Responding to Orientalists & Westernization */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'ظلام من الغرب',
    splashSub: 'نور الإسلام في مواجهة ظلمات التغريب',
    splashHint: 'اضغط للتخطي',
    sacredAyah: 'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',
    sacredRef: 'الصف ٦١: ٨',
    tabHome: 'الرئيسية', tabAnalysis: 'التحليل', tabLight: 'النور', tabQuiz: 'اختبار', tabCompare: 'مقارنة', tabAbout: 'الكتاب',
    analysisTitle: 'نور مقابل ظلام',
    analysisDesc: '٢٠ بطاقة تحليلية تقارن بين القيم الإسلامية والانتقادات الغربية — من كتاب ظلام من الغرب',
    lightTitle: 'أنوار الحقيقة',
    lightDesc: 'كيف يكشف الغزالي زيف ادعاءات المستشرقين ودعاة التغريب',
    quizTitle: 'اختبر تفكيرك النقدي',
    quizDesc: 'هل تستطيع التمييز بين الحق والباطل في الادعاءات الثقافية؟',
    compareTitle: 'قارن وتأمل',
    compareDesc: 'مقارنات مباشرة بين ما يقوله المستشرقون وما يقوله الإسلام حقاً',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ فكرة اليوم',
    dark: '🌑 الادعاء الغربي',
    light: '☀️ النور الإسلامي',
    action: '💡 تأمل وتعلم',
    quizAgain: 'أعد الاختبار',
    verse: 'الآية',
    chapter: 'الفصل',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في التحليل...',
    xpLabel: 'نقاط الخبرة',
    badgesLabel: 'الأوسمة',
    levelBeginner: 'مبتدئ',
    levelReader: 'قارئ',
    levelScholar: 'عالم',
    levelPersistent: 'مثابر',
    levelExpert: 'خبير',
    streakMsg: 'يوم متتالي!',
    splashFeatures: [
      '٢٠ بطاقة: نور مقابل ظلام',
      'اختبار التفكير النقدي',
      'مقارنة الادعاءات بالحقائق',
      'أوسمة ونقاط خبرة + أدعية'
    ],
    youngMode: 'مستكشف صغير 🌱',
    teenMode: 'باحث شاب 📚',
    claim: 'الادعاء',
    reality: 'الحقيقة',
    quizCorrect: 'أحسنت! إجابة صحيحة',
    quizWrong: 'ليست الإجابة الصحيحة — حاول مرة أخرى',
    lifeline5050: '50/50',
    lifelineHint: 'اسأل الشيخ',
    quizScore: 'النتيجة',
    nextQuestion: 'السؤال التالي',
    quizComplete: 'أكملت الاختبار!',
    quizTryAgain: 'حاول مرة أخرى',
  },
  en: {
    appTitle: 'Darkness from the West',
    splashSub: 'The light of Islam against the darkness of Westernization',
    splashHint: 'tap to skip',
    sacredAyah: 'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',
    sacredRef: 'As-Saff 61:8',
    tabHome: 'Home', tabAnalysis: 'Analysis', tabLight: 'Light', tabQuiz: 'Quiz', tabCompare: 'Compare', tabAbout: 'Book',
    analysisTitle: 'Light vs Darkness',
    analysisDesc: '20 analysis cards comparing Islamic values with Western critiques — from Darkness from the West',
    lightTitle: 'Lights of Truth',
    lightDesc: 'How Al-Ghazali exposes the falsehood of Orientalist and Westernization claims',
    quizTitle: 'Test Your Critical Thinking',
    quizDesc: 'Can you distinguish truth from falsehood in cultural claims?',
    compareTitle: 'Compare and Reflect',
    compareDesc: 'Direct comparisons between what Orientalists say and what Islam truly teaches',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Insight',
    dark: '🌑 Western Claim',
    light: '☀️ Islamic Light',
    action: '💡 Reflect & Learn',
    quizAgain: 'Retake Quiz',
    verse: 'Verse',
    chapter: 'Chapter',
    share: 'Share',
    searchPlaceholder: 'Search analysis...',
    xpLabel: 'Experience Points',
    badgesLabel: 'Badges',
    levelBeginner: 'Beginner',
    levelReader: 'Reader',
    levelScholar: 'Scholar',
    levelPersistent: 'Persistent',
    levelExpert: 'Expert',
    streakMsg: 'day streak!',
    splashFeatures: [
      '20 cards: Light vs Darkness',
      'Critical thinking quiz',
      'Compare claims with facts',
      'Badges, XP & duas'
    ],
    youngMode: 'Young Explorer 🌱',
    teenMode: 'Teen Scholar 📚',
    claim: 'Claim',
    reality: 'Reality',
    quizCorrect: 'Well done! Correct answer',
    quizWrong: 'Not the correct answer — try again',
    lifeline5050: '50/50',
    lifelineHint: 'Ask the Sheikh',
    quizScore: 'Score',
    nextQuestion: 'Next Question',
    quizComplete: 'Quiz complete!',
    quizTryAgain: 'Try Again',
  },
  fr: {
    appTitle: 'Ombre de l\'Occident',
    splashSub: 'La lumiere de l\'Islam face aux tenebres de l\'occidentalisation',
    splashHint: 'appuyez pour passer',
    sacredAyah: 'يُرِيدُونَ لِيُطْفِئُوا نُورَ اللَّهِ بِأَفْوَاهِهِمْ وَاللَّهُ مُتِمُّ نُورِهِ',
    sacredRef: 'As-Saff 61:8',
    tabHome: 'Accueil', tabAnalysis: 'Analyse', tabLight: 'Lumiere', tabQuiz: 'Quiz', tabCompare: 'Comparaison', tabAbout: 'Livre',
    analysisTitle: 'Lumiere contre Obscurite',
    analysisDesc: '20 fiches d\'analyse comparant les valeurs islamiques aux critiques occidentales — du livre Ombre de l\'Occident',
    lightTitle: 'Lumieres de la Verite',
    lightDesc: 'Comment Al-Ghazali demontre la faussete des pretentions orientalistes et occidentalistes',
    quizTitle: 'Testez Votre Esprit Critique',
    quizDesc: 'Pouvez-vous distinguer le vrai du faux dans les pretentions culturelles ?',
    compareTitle: 'Comparer et Reflechir',
    compareDesc: 'Comparaisons directes entre ce que disent les orientalistes et ce qu\'enseigne vraiment l\'Islam',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Pensee du Jour',
    dark: '🌑 Pretention Occidentale',
    light: '☀️ Lumiere Islamique',
    action: '💡 Reflechissez',
    quizAgain: 'Refaire le Quiz',
    verse: 'Verset',
    chapter: 'Chapitre',
    share: 'Partager',
    searchPlaceholder: 'Rechercher dans l\'analyse...',
    xpLabel: 'Points d\'Experience',
    badgesLabel: 'Badges',
    levelBeginner: 'Debutant',
    levelReader: 'Lecteur',
    levelScholar: 'Savant',
    levelPersistent: 'Perseverant',
    levelExpert: 'Expert',
    streakMsg: 'jours consecutifs !',
    splashFeatures: [
      '20 fiches : Lumiere contre Obscurite',
      'Quiz d\'esprit critique',
      'Comparer pretentions et faits',
      'Badges, XP & duas'
    ],
    youngMode: 'Jeune Explorateur 🌱',
    teenMode: 'Jeune Savant 📚',
    claim: 'Pretention',
    reality: 'Realite',
    quizCorrect: 'Bravo ! Bonne reponse',
    quizWrong: 'Ce n\'est pas la bonne reponse — reessayez',
    lifeline5050: '50/50',
    lifelineHint: 'Demander au Cheikh',
    quizScore: 'Score',
    nextQuestion: 'Question Suivante',
    quizComplete: 'Quiz termine !',
    quizTryAgain: 'Reessayer',
  }
};

// ═══════════════ ANALYSIS CARDS DATA (20 — Light vs Dark) ═══════════════
const ANALYSIS = [
  {
    id:1, emoji:'🕌', chapter:1,
    ar:{title:'منابع الإثم',dark:'الإسلام دين يشجع الانحلال لأنه يبيح تعدد الزوجات',light:'يرد الغزالي على المستشرقين: الإسلام نظّم العلاقات وحارب الفوضى الأخلاقية. تعدد الزوجات مشروط بالعدل، بينما الغرب أباح العلاقات خارج الزواج بلا ضوابط — فمن الذي يشجع الانحلال حقاً؟',action:'قارن بين نظام الأسرة في الإسلام وما يحدث في المجتمعات المعاصرة',verse:'وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا بَيْنَ النِّسَاءِ',verseRef:'النساء ٤: ١٢٩'},
    en:{title:'Sources of Sin',dark:'Islam is a religion that encourages immorality because it permits polygamy',light:'Al-Ghazali responds: Islam regulated relationships and fought moral chaos. Polygamy is conditioned on justice, while the West allowed relationships outside marriage without controls',action:'Compare the family system in Islam with what happens in contemporary societies',verse:'وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا بَيْنَ النِّسَاءِ',verseRef:'An-Nisa 4:129'},
    fr:{title:'Sources du Peche',dark:'L\'Islam est une religion qui encourage l\'immoralite car il permet la polygamie',light:'Al-Ghazali répond: L\'Islam a reglemente les relations et combattu le chaos moral. La polygamie est conditionnee par la justice, tandis que l\'Occident a permis les relations hors mariage sans controle',action:'Comparez le systeme familial en Islam avec ce qui se passe dans les societes contemporaines',verse:'وَلَن تَسْتَطِيعُوا أَن تَعْدِلُوا بَيْنَ النِّسَاءِ',verseRef:'An-Nisa 4:129'}
  },
  {
    id:2, emoji:'🧠', chapter:2,
    ar:{title:'العقل والعاطفة',dark:'المسلمون لا يستخدمون العقل ويعتمدون فقط على العاطفة الدينية',light:'يرد الغزالي: القرآن فيه أكثر من ٧٥٠ آية تحث على التفكر والتدبر والنظر. الإسلام دين العقل والبرهان لا التقليد الأعمى',action:'اقرأ الآيات التي تبدأ بـ "أفلا يعقلون" و"أفلا يتفكرون"',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'النساء ٤: ٨٢'},
    en:{title:'Mind vs Emotion',dark:'Muslims don\'t use reason and rely only on religious emotion',light:'Al-Ghazali responds: The Quran contains over 750 verses urging reflection, contemplation, and observation. Islam is a religion of reason and evidence, not blind imitation',action:'Read the verses that begin with "Do they not reason?" and "Do they not reflect?"',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'An-Nisa 4:82'},
    fr:{title:'Raison et Emotion',dark:'Les musulmans n\'utilisent pas la raison et ne comptent que sur l\'emotion religieuse',light:'Al-Ghazali répond: Le Coran contient plus de 750 versets incitant a la reflexion, la contemplation et l\'observation. L\'Islam est une religion de raison et de preuve, pas d\'imitation aveugle',action:'Lisez les versets qui commencent par "Ne raisonnent-ils pas ?" et "Ne reflechissent-ils pas ?"',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ',verseRef:'An-Nisa 4:82'}
  },
  {
    id:3, emoji:'⚖️', chapter:3,
    ar:{title:'قانون السببية',dark:'الإسلام يجعل المسلمين يتركون الأسباب ويعتمدون على القدر فقط',light:'يرد الغزالي: الإسلام يأمر بالأخذ بالأسباب والتوكل على الله معاً. "اعقلها وتوكل" هو منهج يجمع بين العمل والإيمان',action:'فكّر: هل تأخذ بالأسباب في حياتك أم تكتفي بالدعاء فقط؟',verse:'وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ',verseRef:'الأنفال ٨: ٦٠'},
    en:{title:'Law of Causality',dark:'Islam makes Muslims abandon practical effort and rely solely on fate',light:'Al-Ghazali responds: Islam commands taking practical measures alongside trusting God. "Tie your camel and trust God" is a methodology combining work and faith',action:'Think: Do you take practical steps in your life or just rely on prayers?',verse:'وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ',verseRef:'Al-Anfal 8:60'},
    fr:{title:'Loi de Causalite',dark:'L\'Islam fait abandonner l\'effort pratique aux musulmans pour ne compter que sur le destin',light:'Al-Ghazali répond: L\'Islam ordonne de prendre des mesures pratiques tout en faisant confiance a Dieu. "Attache ton chameau et fais confiance a Dieu" est une methode combinant travail et foi',action:'Reflechissez : Prenez-vous des mesures pratiques ou comptez-vous seulement sur les prieres ?',verse:'وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِّن قُوَّةٍ',verseRef:'Al-Anfal 8:60'}
  },
  {
    id:4, emoji:'🌍', chapter:4,
    ar:{title:'عروبة الإسلام',dark:'الإسلام دين عربي فقط ولا يصلح لباقي الشعوب',light:'يرد الغزالي: الإسلام رسالة عالمية نزلت بالعربية. بلال الحبشي وسلمان الفارسي وصهيب الرومي خير دليل على عالمية الإسلام',action:'ابحث عن مسلمين من ثقافات مختلفة ساهموا في الحضارة الإسلامية',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ٢١: ١٠٧'},
    en:{title:'Arabism of Islam',dark:'Islam is an Arab-only religion and is not suitable for other nations',light:'Al-Ghazali responds: Islam is a universal message revealed in Arabic. Bilal the Abyssinian, Salman the Persian, and Suhaib the Roman are proof of Islam\'s universality',action:'Research Muslims from different cultures who contributed to Islamic civilization',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'Al-Anbiya 21:107'},
    fr:{title:'Arabite de l\'Islam',dark:'L\'Islam est une religion exclusivement arabe et ne convient pas aux autres peuples',light:'Al-Ghazali répond: L\'Islam est un message universel revele en arabe. Bilal l\'Abyssinien, Salman le Persan et Suhaib le Romain sont la preuve de l\'universalite de l\'Islam',action:'Recherchez des musulmans de differentes cultures qui ont contribue a la civilisation islamique',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'Al-Anbiya 21:107'}
  },
  {
    id:5, emoji:'🏴', chapter:5,
    ar:{title:'مخططات الاستعمار',dark:'الاستعمار جلب الحضارة والتقدم للعالم الإسلامي',light:'الاستعمار دمّر التعليم الأصيل وفرض لغته وثقافته لقطع المسلمين عن هويتهم. الغزالي يكشف أن الهدف كان التبعية لا التحضير',action:'قارن بين أحوال التعليم قبل الاستعمار وبعده في بلد إسلامي',verse:'وَلَا يَزَالُونَ يُقَاتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ',verseRef:'البقرة ٢: ٢١٧'},
    en:{title:'Colonial Schemes',dark:'Colonialism brought civilization and progress to the Muslim world',light:'Al-Ghazali responds: Colonialism destroyed authentic education and imposed its language and culture to disconnect Muslims from their identity. Al-Ghazali reveals the goal was dependency, not development',action:'Compare the state of education before and after colonialism in a Muslim country',verse:'وَلَا يَزَالُونَ يُقَاتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ',verseRef:'Al-Baqarah 2:217'},
    fr:{title:'Plans Coloniaux',dark:'Le colonialisme a apporte la civilisation et le progres au monde musulman',light:'Al-Ghazali répond: Le colonialisme a detruit l\'education authentique et impose sa langue et sa culture pour couper les musulmans de leur identite. Al-Ghazali revele que l\'objectif etait la dependance, pas le developpement',action:'Comparez l\'etat de l\'education avant et apres le colonialisme dans un pays musulman',verse:'وَلَا يَزَالُونَ يُقَاتِلُونَكُمْ حَتَّىٰ يَرُدُّوكُمْ عَن دِينِكُمْ',verseRef:'Al-Baqarah 2:217'}
  },
  {
    id:6, emoji:'📜', chapter:6,
    ar:{title:'الغزو الثقافي في التشريع',dark:'القوانين الغربية أكثر عدلاً وتطوراً من الشريعة الإسلامية',light:'يرد الغزالي: الشريعة سبقت القوانين الوضعية في حقوق المرأة والميراث والعقود. القوانين الغربية نفسها تطورت بتأثير من الفقه الإسلامي',action:'ابحث عن حق واحد أعطاه الإسلام للمرأة قبل الغرب بقرون',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢: ٢٢٨'},
    en:{title:'Cultural Invasion in Legislation',dark:'Western laws are more just and advanced than Islamic Sharia',light:'Al-Ghazali responds: Sharia preceded man-made laws in women\'s rights, inheritance, and contracts. Western laws themselves evolved under the influence of Islamic jurisprudence',action:'Research one right Islam gave women centuries before the West',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 2:228'},
    fr:{title:'Invasion Culturelle dans la Legislation',dark:'Les lois occidentales sont plus justes et avancees que la Charia islamique',light:'Al-Ghazali répond: La Charia a precede les lois positives dans les droits des femmes, l\'heritage et les contrats. Les lois occidentales elles-memes ont evolue sous l\'influence de la jurisprudence islamique',action:'Recherchez un droit que l\'Islam a donne aux femmes des siecles avant l\'Occident',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 2:228'}
  },
  {
    id:7, emoji:'🌑', chapter:7,
    ar:{title:'الجاهلية الحديثة',dark:'العصر الحديث تجاوز الحاجة للدين وأصبح العلم كافياً',light:'الغزالي يكشف أن الجاهلية الحديثة أشد ظلاماً: حربان عالميتان، أسلحة دمار شامل، تفكك أسري — كل ذلك في عصر "التنوير"',action:'فكّر: هل التقدم المادي وحده يكفي لسعادة الإنسان؟',verse:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ',verseRef:'المائدة ٥: ٥٠'},
    en:{title:'Modern Jahiliyya',dark:'The modern era has surpassed the need for religion; science is sufficient',light:'Al-Ghazali reveals that modern ignorance is darker: two world wars, weapons of mass destruction, family breakdown — all in the age of "Enlightenment"',action:'Think: Is material progress alone enough for human happiness?',verse:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ',verseRef:'Al-Ma\'idah 5:50'},
    fr:{title:'Jahiliyya Moderne',dark:'L\'ere moderne a depasse le besoin de religion ; la science suffit',light:'Al-Ghazali revele que l\'ignorance moderne est plus sombre : deux guerres mondiales, armes de destruction massive, eclatement familial — tout cela a l\'ere des "Lumieres"',action:'Reflechissez : Le progres materiel seul suffit-il au bonheur humain ?',verse:'أَفَحُكْمَ الْجَاهِلِيَّةِ يَبْغُونَ',verseRef:'Al-Ma\'idah 5:50'}
  },
  {
    id:8, emoji:'🛡️', chapter:8,
    ar:{title:'كيف نحمي الأخلاق',dark:'الأخلاق نسبية وتتغير بتغير الزمان والمكان',light:'الأخلاق الإسلامية ثابتة في أصولها ومرنة في تطبيقها. الصدق والعدل والأمانة لا تتغير بتغير العصر',action:'اكتب ثلاث قيم أخلاقية تعتبرها ثابتة عبر الزمن',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'القلم ٦٨: ٤'},
    en:{title:'How to Protect Morals',dark:'Morals are relative and change with time and place',light:'Islamic ethics are fixed in their foundations and flexible in application. Honesty, justice, and trustworthiness do not change with the age',action:'Write three moral values you consider timeless',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'Al-Qalam 68:4'},
    fr:{title:'Comment Proteger la Morale',dark:'La morale est relative et change avec le temps et le lieu',light:'L\'ethique islamique est fixe dans ses fondements et flexible dans son application. L\'honnetete, la justice et la fiabilite ne changent pas avec l\'epoque',action:'Ecrivez trois valeurs morales que vous considerez intemporelles',verse:'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',verseRef:'Al-Qalam 68:4'}
  },
  {
    id:9, emoji:'📊', chapter:9,
    ar:{title:'الأمم بين النمو والاضمحلال',dark:'الأمة الإسلامية انتهت تاريخياً ولا مستقبل لها',light:'التاريخ يثبت أن الأمم تنهض وتسقط. الأمة الإسلامية بنت أعظم حضارة في العصور الوسطى وهي قادرة على النهوض مجدداً',action:'اذكر ثلاثة إنجازات علمية للحضارة الإسلامية',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'آل عمران ٣: ١٤٠'},
    en:{title:'Nations Between Growth and Decay',dark:'The Muslim nation is historically finished with no future',light:'History proves nations rise and fall. The Muslim nation built the greatest civilization in the Middle Ages and is capable of rising again',action:'Name three scientific achievements of Islamic civilization',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'Aal-Imran 3:140'},
    fr:{title:'Les Nations entre Croissance et Declin',dark:'La nation musulmane est historiquement finie sans avenir',light:'L\'histoire prouve que les nations montent et tombent. La nation musulmane a bati la plus grande civilisation au Moyen Age et est capable de se relever',action:'Nommez trois realisations scientifiques de la civilisation islamique',verse:'وَتِلْكَ الْأَيَّامُ نُدَاوِلُهَا بَيْنَ النَّاسِ',verseRef:'Aal-Imran 3:140'}
  },
  {
    id:10, emoji:'🤝', chapter:10,
    ar:{title:'نحو وحدة إسلامية',dark:'المسلمون لا يمكنهم الاتحاد بسبب خلافاتهم المذهبية',light:'الغزالي يؤكد أن الوحدة الإسلامية ممكنة إذا تمسكنا بالأصول واحترمنا الفروع. التنوع المذهبي ثراء لا فرقة',action:'فكّر في قواسم مشتركة تجمع المسلمين رغم اختلاف مذاهبهم',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'آل عمران ٣: ١٠٣'},
    en:{title:'Toward Islamic Unity',dark:'Muslims cannot unite due to their sectarian differences',light:'Al-Ghazali confirms that Islamic unity is possible if we hold to fundamentals and respect differences. Diversity of schools is richness, not division',action:'Think about common ground that unites Muslims despite different schools of thought',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Aal-Imran 3:103'},
    fr:{title:'Vers l\'Unite Islamique',dark:'Les musulmans ne peuvent pas s\'unir a cause de leurs differences sectaires',light:'Al-Ghazali confirme que l\'unite islamique est possible si nous tenons aux fondamentaux et respectons les differences. La diversite des ecoles est une richesse, pas une division',action:'Pensez aux points communs qui unissent les musulmans malgre les differences d\'ecoles',verse:'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا',verseRef:'Aal-Imran 3:103'}
  },
  {
    id:11, emoji:'🧭', chapter:11,
    ar:{title:'أين نوجه ثقافتنا',dark:'يجب استيراد الثقافة الغربية بالكامل للتقدم',light:'الغزالي يدعو لأخذ العلم النافع من أي مصدر مع الحفاظ على الهوية الإسلامية. نأخذ التقنية ونرفض التبعية الفكرية',action:'فرّق بين الاستفادة من الغرب والتبعية العمياء له',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٣٩: ٩'},
    en:{title:'Where to Direct Our Culture',dark:'We must import Western culture entirely to progress',light:'Al-Ghazali advocates taking beneficial knowledge from any source while preserving Islamic identity. Take the technology, reject intellectual dependency',action:'Distinguish between benefiting from the West and blind imitation of it',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9'},
    fr:{title:'Ou Diriger Notre Culture',dark:'Il faut importer entierement la culture occidentale pour progresser',light:'Al-Ghazali preconise de prendre le savoir utile de toute source tout en preservant l\'identite islamique. Prendre la technologie, rejeter la dependance intellectuelle',action:'Distinguez entre beneficier de l\'Occident et l\'imiter aveuglement',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9'}
  },
  {
    id:12, emoji:'👥', chapter:12,
    ar:{title:'المستشرقون العرب',dark:'المثقفون المسلمون المعجبون بالغرب هم الأكثر تنويراً',light:'الغزالي يكشف أن بعض المسلمين يرددون كلام المستشرقين دون فهم أو تحقيق. هؤلاء "مستشرقون عرب" يروّجون للتغريب باسم التقدم',action:'تعلّم كيف تتحقق من المعلومات قبل تصديقها',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'الحجرات ٤٩: ٦'},
    en:{title:'Arab Orientalists',dark:'Muslim intellectuals who admire the West are the most enlightened',light:'Al-Ghazali reveals that some Muslims repeat Orientalist claims without understanding or verification. These "Arab Orientalists" promote Westernization in the name of progress',action:'Learn how to verify information before believing it',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'Al-Hujurat 49:6'},
    fr:{title:'Orientalistes Arabes',dark:'Les intellectuels musulmans qui admirent l\'Occident sont les plus eclaires',light:'Al-Ghazali revele que certains musulmans repetent les pretentions orientalistes sans comprendre ni verifier. Ces "orientalistes arabes" promeuvent l\'occidentalisation au nom du progres',action:'Apprenez a verifier les informations avant de les croire',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا إِن جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',verseRef:'Al-Hujurat 49:6'}
  },
  {
    id:13, emoji:'📚', chapter:13,
    ar:{title:'التعليم بين الأصالة والتبعية',dark:'المناهج التعليمية الغربية هي الأفضل مطلقاً',light:'الغزالي يرى أن التعليم يجب أن يجمع بين العلوم الحديثة والقيم الإسلامية. المنهج الذي يخرج أجيالاً بلا هوية هو منهج فاشل',action:'فكّر: ما الفرق بين تعليم يبني الشخصية وتعليم يصنع أدوات؟',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ٩٦: ١'},
    en:{title:'Education Between Authenticity and Dependency',dark:'Western educational curricula are absolutely the best',light:'Al-Ghazali sees that education must combine modern sciences with Islamic values. A curriculum that produces generations without identity is a failed curriculum',action:'Think: What is the difference between education that builds character and education that creates tools?',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Al-Alaq 96:1'},
    fr:{title:'Education entre Authenticite et Dependance',dark:'Les programmes educatifs occidentaux sont absolument les meilleurs',light:'Al-Ghazali voit que l\'education doit combiner les sciences modernes et les valeurs islamiques. Un programme qui produit des generations sans identite est un programme echoue',action:'Reflechissez : Quelle est la difference entre une education qui construit le caractere et une qui cree des outils ?',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'Al-Alaq 96:1'}
  },
  {
    id:14, emoji:'🗞️', chapter:14,
    ar:{title:'الإعلام وتشويه الصورة',dark:'الإعلام الغربي يقدم صورة موضوعية عن الإسلام',light:'الغزالي يوضح أن الإعلام يختار ما يشوّه الإسلام ويتجاهل الإنجازات والقيم الإيجابية. الصورة المشوّهة مقصودة',action:'قارن بين ما تراه عن الإسلام في الإعلام وما تعرفه من مصادره الأصلية',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ',verseRef:'البقرة ٢: ٤٢'},
    en:{title:'Media and Image Distortion',dark:'Western media presents an objective image of Islam',light:'Al-Ghazali explains that media selects what distorts Islam and ignores achievements and positive values. The distorted image is intentional',action:'Compare what you see about Islam in media versus what you know from original sources',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ',verseRef:'Al-Baqarah 2:42'},
    fr:{title:'Medias et Deformation de l\'Image',dark:'Les medias occidentaux presentent une image objective de l\'Islam',light:'Al-Ghazali explique que les medias selectionnent ce qui deforme l\'Islam et ignorent les realisations et valeurs positives. L\'image deformee est intentionnelle',action:'Comparez ce que vous voyez sur l\'Islam dans les medias avec ce que vous savez des sources originales',verse:'وَلَا تَلْبِسُوا الْحَقَّ بِالْبَاطِلِ',verseRef:'Al-Baqarah 2:42'}
  },
  {
    id:15, emoji:'👩', chapter:15,
    ar:{title:'المرأة بين الإسلام والغرب',dark:'الإسلام يظلم المرأة والغرب حررها',light:'الإسلام أعطى المرأة حق التملك والميراث والتعليم قبل الغرب بقرون. "تحرير" المرأة الغربي حوّلها إلى سلعة في كثير من الأحيان',action:'اكتشف حقوق المرأة في الإسلام مقارنة بأوروبا في القرون الوسطى',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'البقرة ٢: ٢٢٨'},
    en:{title:'Women Between Islam and the West',dark:'Islam oppresses women while the West liberated them',light:'Islam gave women the right to own property, inherit, and seek education centuries before the West. Western "liberation" often turned women into commodities',action:'Discover women\'s rights in Islam compared to Europe in the Middle Ages',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 2:228'},
    fr:{title:'La Femme entre l\'Islam et l\'Occident',dark:'L\'Islam opprime les femmes tandis que l\'Occident les a liberees',light:'L\'Islam a donne aux femmes le droit de propriete, d\'heritage et d\'education des siecles avant l\'Occident. La "liberation" occidentale a souvent transforme les femmes en marchandises',action:'Decouvrez les droits des femmes en Islam compares a l\'Europe au Moyen Age',verse:'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',verseRef:'Al-Baqarah 2:228'}
  },
  {
    id:16, emoji:'💰', chapter:16,
    ar:{title:'الاقتصاد بين الربا والزكاة',dark:'النظام الاقتصادي الغربي أنجح وأكثر عدلاً',light:'النظام الربوي خلق أزمات اقتصادية عالمية متكررة. الاقتصاد الإسلامي يقوم على الزكاة والمشاركة في الربح والخسارة — أكثر عدلاً واستقراراً',action:'قارن بين أثر الربا والزكاة على توزيع الثروة',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'البقرة ٢: ٢٧٥'},
    en:{title:'Economy: Usury vs Zakat',dark:'The Western economic system is more successful and just',light:'The usury-based system created recurring global economic crises. The Islamic economy is based on zakat and profit-loss sharing — more just and stable',action:'Compare the impact of usury and zakat on wealth distribution',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'Al-Baqarah 2:275'},
    fr:{title:'Economie : Usure contre Zakat',dark:'Le systeme economique occidental est plus reussi et juste',light:'Le systeme base sur l\'usure a cree des crises economiques mondiales recurrentes. L\'economie islamique est basee sur la zakat et le partage des profits et pertes — plus juste et stable',action:'Comparez l\'impact de l\'usure et de la zakat sur la distribution des richesses',verse:'وَأَحَلَّ اللَّهُ الْبَيْعَ وَحَرَّمَ الرِّبَا',verseRef:'Al-Baqarah 2:275'}
  },
  {
    id:17, emoji:'🔬', chapter:17,
    ar:{title:'العلم والإيمان',dark:'العلم يتعارض مع الدين والإيمان يعيق التقدم العلمي',light:'العلماء المسلمون هم من أسسوا علم الجبر والبصريات والطب الحديث. الإسلام يرى أن العلم والإيمان وجهان لعملة واحدة',action:'ابحث عن عالم مسلم واحد أسس علماً يدرّس اليوم في الجامعات',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٣٩: ٩'},
    en:{title:'Science and Faith',dark:'Science contradicts religion and faith hinders scientific progress',light:'Muslim scholars founded algebra, optics, and modern medicine. Islam sees science and faith as two sides of the same coin',action:'Research one Muslim scholar who founded a science still taught in universities today',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9'},
    fr:{title:'Science et Foi',dark:'La science contredit la religion et la foi empeche le progres scientifique',light:'Les savants musulmans ont fonde l\'algebre, l\'optique et la medecine moderne. L\'Islam voit la science et la foi comme les deux faces d\'une meme piece',action:'Recherchez un savant musulman qui a fonde une science encore enseignee dans les universites aujourd\'hui',verse:'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'Az-Zumar 39:9'}
  },
  {
    id:18, emoji:'🏛️', chapter:18,
    ar:{title:'الديمقراطية والشورى',dark:'الإسلام لا يعرف الديمقراطية ويفرض الاستبداد',light:'الشورى في الإسلام سبقت الديمقراطية الحديثة. "وأمرهم شورى بينهم" — الإسلام يرفض الاستبداد ويوجب مشاركة الأمة في القرار',action:'قارن بين مبدأ الشورى في الإسلام والديمقراطية المعاصرة',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'الشورى ٤٢: ٣٨'},
    en:{title:'Democracy and Shura',dark:'Islam knows no democracy and imposes tyranny',light:'Shura (consultation) in Islam preceded modern democracy. "Their affairs are by consultation among them" — Islam rejects tyranny and obligates community participation in decision-making',action:'Compare the principle of Shura in Islam with contemporary democracy',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 42:38'},
    fr:{title:'Democratie et Choura',dark:'L\'Islam ne connait pas la democratie et impose la tyrannie',light:'La Choura (consultation) en Islam a precede la democratie moderne. "Leurs affaires sont decidees par consultation" — l\'Islam rejette la tyrannie et oblige la participation communautaire',action:'Comparez le principe de Choura en Islam avec la democratie contemporaine',verse:'وَأَمْرُهُمْ شُورَىٰ بَيْنَهُمْ',verseRef:'Ash-Shura 42:38'}
  },
  {
    id:19, emoji:'🌐', chapter:19,
    ar:{title:'العولمة والهوية',dark:'العولمة تعني التخلي عن الهوية الخاصة لصالح ثقافة موحدة',light:'الغزالي يرى أن الحفاظ على الهوية لا يتناقض مع الانفتاح. الإسلام يشجع التعارف لا التذويب، والتنوع لا التنميط',action:'فكّر: كيف تحافظ على هويتك وأنت منفتح على العالم؟',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'الحجرات ٤٩: ١٣'},
    en:{title:'Globalization and Identity',dark:'Globalization means abandoning your unique identity for a unified culture',light:'Al-Ghazali sees that preserving identity doesn\'t contradict openness. Islam encourages knowing each other, not dissolving into one — diversity, not uniformity',action:'Think: How do you preserve your identity while being open to the world?',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'Al-Hujurat 49:13'},
    fr:{title:'Mondialisation et Identite',dark:'La mondialisation signifie abandonner son identite pour une culture uniforme',light:'Al-Ghazali voit que preserver l\'identite ne contredit pas l\'ouverture. L\'Islam encourage la connaissance mutuelle, pas la dissolution — la diversite, pas l\'uniformite',action:'Reflechissez : Comment preservez-vous votre identite tout en etant ouvert au monde ?',verse:'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا',verseRef:'Al-Hujurat 49:13'}
  },
  {
    id:20, emoji:'🌅', chapter:20,
    ar:{title:'الفجر القادم',dark:'الإسلام في طريقه للانقراض والتراجع الحتمي',light:'الغزالي يختم بأن الإسلام ليس مجرد دين بل حضارة متكاملة. النهوض قادم إذا عاد المسلمون لأصولهم مع الأخذ بأسباب العصر',action:'ماذا يمكنك أنت شخصياً أن تفعل لنهضة أمتك؟',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'الرعد ١٣: ١١'},
    en:{title:'The Coming Dawn',dark:'Islam is on its way to extinction and inevitable decline',light:'Al-Ghazali concludes that Islam is not merely a religion but a complete civilization. Revival is coming if Muslims return to their foundations while embracing modern means',action:'What can you personally do for the revival of your community?',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'Ar-Ra\'d 13:11'},
    fr:{title:'L\'Aube a Venir',dark:'L\'Islam est en voie d\'extinction et de declin inevitable',light:'Al-Ghazali conclut que l\'Islam n\'est pas simplement une religion mais une civilisation complete. Le renouveau viendra si les musulmans reviennent a leurs fondements tout en adoptant les moyens modernes',action:'Que pouvez-vous personnellement faire pour le renouveau de votre communaute ?',verse:'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',verseRef:'Ar-Ra\'d 13:11'}
  }
];

// ═══════════════ QUIZ DATA (15 critical thinking questions) ═══════════════
const QUIZ_DATA = [
  {
    ar:{q:'ما الهدف الرئيسي من حركة الاستشراق حسب الغزالي؟',a:['تشويه صورة الإسلام وإضعاف المسلمين','فهم الإسلام بموضوعية','نشر السلام العالمي','دعم الحوار بين الأديان'],correct:0},
    en:{q:'What is the main goal of Orientalism according to Al-Ghazali?',a:['Distorting Islam\'s image and weakening Muslims','Understanding Islam objectively','Spreading world peace','Supporting interfaith dialogue'],correct:0},
    fr:{q:'Quel est l\'objectif principal de l\'orientalisme selon Al-Ghazali ?',a:['Deformer l\'image de l\'Islam et affaiblir les musulmans','Comprendre l\'Islam objectivement','Repandre la paix mondiale','Soutenir le dialogue interreligieux'],correct:0}
  },
  {
    ar:{q:'ماذا يقصد الغزالي بـ "المستشرقين العرب"؟',a:['مسلمون يرددون كلام المستشرقين ضد الإسلام','علماء عرب درسوا في أوروبا','مؤرخون عرب كتبوا عن الشرق','دبلوماسيون عرب في الغرب'],correct:0},
    en:{q:'What does Al-Ghazali mean by "Arab Orientalists"?',a:['Muslims who repeat Orientalist anti-Islam rhetoric','Arab scholars who studied in Europe','Arab historians who wrote about the East','Arab diplomats in the West'],correct:0},
    fr:{q:'Que veut dire Al-Ghazali par "orientalistes arabes" ?',a:['Des musulmans qui repetent la rhetorique anti-Islam des orientalistes','Des savants arabes qui ont etudie en Europe','Des historiens arabes qui ont ecrit sur l\'Orient','Des diplomates arabes en Occident'],correct:0}
  },
  {
    ar:{q:'كم آية في القرآن تحث على التفكر والتعقل تقريباً؟',a:['أكثر من 750','أقل من 100','حوالي 200','لا توجد'],correct:0},
    en:{q:'Approximately how many Quran verses urge reflection and reasoning?',a:['Over 750','Less than 100','About 200','None'],correct:0},
    fr:{q:'Combien de versets du Coran environ incitent a la reflexion et au raisonnement ?',a:['Plus de 750','Moins de 100','Environ 200','Aucun'],correct:0}
  },
  {
    ar:{q:'ما موقف الغزالي من أخذ العلوم من الغرب؟',a:['نأخذ العلم النافع ونحافظ على هويتنا','نرفض كل ما يأتي من الغرب','نقبل كل شيء بلا تمييز','نأخذ الفنون فقط'],correct:0},
    en:{q:'What is Al-Ghazali\'s position on taking sciences from the West?',a:['Take beneficial knowledge while preserving our identity','Reject everything from the West','Accept everything without discrimination','Only take the arts'],correct:0},
    fr:{q:'Quelle est la position d\'Al-Ghazali sur l\'adoption des sciences de l\'Occident ?',a:['Prendre le savoir utile tout en preservant notre identite','Rejeter tout ce qui vient de l\'Occident','Accepter tout sans discrimination','Ne prendre que les arts'],correct:0}
  },
  {
    ar:{q:'ما مبدأ "اعقلها وتوكل" في الإسلام؟',a:['الجمع بين الأخذ بالأسباب والتوكل على الله','ترك الأسباب والاعتماد على القدر فقط','الاعتماد على العقل فقط','عدم التخطيط للمستقبل'],correct:0},
    en:{q:'What does "Tie your camel and trust God" mean in Islam?',a:['Combining practical effort with trust in God','Abandoning effort and relying only on fate','Relying only on reason','Not planning for the future'],correct:0},
    fr:{q:'Que signifie "Attache ton chameau et fais confiance a Dieu" en Islam ?',a:['Combiner l\'effort pratique avec la confiance en Dieu','Abandonner l\'effort et ne compter que sur le destin','Ne compter que sur la raison','Ne pas planifier l\'avenir'],correct:0}
  },
  {
    ar:{q:'أي من هؤلاء دليل على عالمية الإسلام؟',a:['بلال الحبشي وسلمان الفارسي وصهيب الرومي','الخلفاء الراشدون فقط','علماء الأندلس','التجار العرب'],correct:0},
    en:{q:'Which of these prove Islam\'s universality?',a:['Bilal the Abyssinian, Salman the Persian, Suhaib the Roman','Only the Rightly Guided Caliphs','Andalusian scholars','Arab traders'],correct:0},
    fr:{q:'Lesquels prouvent l\'universalite de l\'Islam ?',a:['Bilal l\'Abyssinien, Salman le Persan, Suhaib le Romain','Seulement les Califes bien guides','Les savants andalous','Les commercants arabes'],correct:0}
  },
  {
    ar:{q:'ما الذي يكشفه الغزالي عن "الجاهلية الحديثة"؟',a:['أنها أشد ظلاماً رغم التقدم المادي','أنها أفضل من الجاهلية القديمة','أنها لا توجد في العصر الحديث','أنها محصورة في بلاد معينة'],correct:0},
    en:{q:'What does Al-Ghazali reveal about "modern Jahiliyya"?',a:['It is darker despite material progress','It is better than ancient ignorance','It doesn\'t exist in the modern era','It is limited to certain countries'],correct:0},
    fr:{q:'Que revele Al-Ghazali sur la "Jahiliyya moderne" ?',a:['Elle est plus sombre malgre le progres materiel','Elle est meilleure que l\'ignorance ancienne','Elle n\'existe pas a l\'ere moderne','Elle est limitee a certains pays'],correct:0}
  },
  {
    ar:{q:'ما موقف الإسلام من الأخلاق حسب الكتاب؟',a:['ثابتة في الأصول ومرنة في التطبيق','نسبية تتغير مع الزمن','جامدة لا تتغير أبداً','غير مهمة'],correct:0},
    en:{q:'What is Islam\'s position on morals according to the book?',a:['Fixed in foundations, flexible in application','Relative, changing with time','Rigid, never changing','Not important'],correct:0},
    fr:{q:'Quelle est la position de l\'Islam sur la morale selon le livre ?',a:['Fixe dans les fondements, flexible dans l\'application','Relative, changeant avec le temps','Rigide, ne changeant jamais','Pas importante'],correct:0}
  },
  {
    ar:{q:'ما الفرق بين الشورى والديمقراطية حسب الغزالي؟',a:['الشورى مبنية على قيم ثابتة والديمقراطية على رأي الأغلبية فقط','لا فرق بينهما','الشورى أقدم فقط','الديمقراطية أفضل في كل الأحوال'],correct:0},
    en:{q:'What\'s the difference between Shura and democracy according to Al-Ghazali?',a:['Shura is built on fixed values while democracy is based only on majority opinion','There is no difference','Shura is just older','Democracy is always better'],correct:0},
    fr:{q:'Quelle est la difference entre Choura et democratie selon Al-Ghazali ?',a:['La Choura est fondee sur des valeurs fixes tandis que la democratie ne repose que sur l\'opinion majoritaire','Il n\'y a pas de difference','La Choura est juste plus ancienne','La democratie est toujours meilleure'],correct:0}
  },
  {
    ar:{q:'كيف يرى الغزالي العلاقة بين العلم والإيمان؟',a:['وجهان لعملة واحدة','متعارضان تماماً','العلم أهم من الإيمان','الإيمان يغني عن العلم'],correct:0},
    en:{q:'How does Al-Ghazali view the relationship between science and faith?',a:['Two sides of the same coin','Completely contradictory','Science is more important than faith','Faith replaces science'],correct:0},
    fr:{q:'Comment Al-Ghazali voit-il la relation entre science et foi ?',a:['Deux faces d\'une meme piece','Completement contradictoires','La science est plus importante que la foi','La foi remplace la science'],correct:0}
  },
  {
    ar:{q:'ما رأي الغزالي في الحفاظ على الهوية في عصر العولمة؟',a:['لا يتناقض مع الانفتاح على العالم','يعني الانعزال التام','مستحيل في العصر الحديث','غير ضروري'],correct:0},
    en:{q:'What does Al-Ghazali think about preserving identity in the age of globalization?',a:['It doesn\'t contradict openness to the world','It means total isolation','Impossible in the modern era','Unnecessary'],correct:0},
    fr:{q:'Que pense Al-Ghazali de la preservation de l\'identite a l\'ere de la mondialisation ?',a:['Cela ne contredit pas l\'ouverture au monde','Cela signifie l\'isolement total','Impossible a l\'ere moderne','Pas necessaire'],correct:0}
  },
  {
    ar:{q:'ما الذي سبّبته الحروب العالمية حسب الكتاب؟',a:['أثبتت فشل الحضارة المادية وحدها','أثبتت تفوق الغرب','لم يذكرها الكتاب','كانت ضرورية للتقدم'],correct:0},
    en:{q:'What did the World Wars prove according to the book?',a:['Material civilization alone has failed','Western superiority','The book didn\'t mention them','They were necessary for progress'],correct:0},
    fr:{q:'Qu\'ont prouve les guerres mondiales selon le livre ?',a:['La civilisation materielle seule a echoue','La superiorite occidentale','Le livre ne les mentionne pas','Elles etaient necessaires au progres'],correct:0}
  },
  {
    ar:{q:'كيف ينظر الإسلام للتنوع المذهبي حسب الغزالي؟',a:['ثراء وتنوع محمود','فرقة يجب القضاء عليها','لا أهمية له','ضعف يجب إخفاؤه'],correct:0},
    en:{q:'How does Islam view diversity of schools according to Al-Ghazali?',a:['A praised richness and diversity','A division that must be eliminated','Of no importance','A weakness to be hidden'],correct:0},
    fr:{q:'Comment l\'Islam voit-il la diversite des ecoles selon Al-Ghazali ?',a:['Une richesse et diversite louable','Une division a eliminer','Sans importance','Une faiblesse a cacher'],correct:0}
  },
  {
    ar:{q:'ما موقف القرآن من حقوق المرأة؟',a:['أعطاها حقوقها كاملة قبل الغرب بقرون','لم يتحدث عن حقوق المرأة','منحها حقوقاً جزئية فقط','ترك الأمر للعادات'],correct:0},
    en:{q:'What is the Quran\'s position on women\'s rights?',a:['Gave her full rights centuries before the West','Didn\'t address women\'s rights','Gave only partial rights','Left it to customs'],correct:0},
    fr:{q:'Quelle est la position du Coran sur les droits des femmes ?',a:['Lui a donne tous ses droits des siecles avant l\'Occident','N\'a pas aborde les droits des femmes','N\'a donne que des droits partiels','A laisse la question aux coutumes'],correct:0}
  },
  {
    ar:{q:'ما رسالة الغزالي الأخيرة في الكتاب؟',a:['النهوض ممكن إذا عاد المسلمون لأصولهم مع العصر','الوضع ميؤوس منه','يجب تقليد الغرب بالكامل','الانعزال هو الحل'],correct:0},
    en:{q:'What is Al-Ghazali\'s final message in the book?',a:['Revival is possible if Muslims return to their foundations with modernity','The situation is hopeless','We must fully imitate the West','Isolation is the solution'],correct:0},
    fr:{q:'Quel est le dernier message d\'Al-Ghazali dans le livre ?',a:['Le renouveau est possible si les musulmans reviennent a leurs fondements avec la modernite','La situation est desesperee','Il faut imiter entierement l\'Occident','L\'isolement est la solution'],correct:0}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  {ar:{label:'دعاء الهداية',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'اللهم اهدنا فيمن هديت'},en:{label:'Dua for Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'O God, guide us among those You have guided'},fr:{label:'Dua pour la Guidance',text:'اللَّهُمَّ اهْدِنَا فِيمَنْ هَدَيْتَ',tr:'O Dieu, guide-nous parmi ceux que Tu as guides'}},
  {ar:{label:'دعاء النور',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'اللهم اجعل في قلبي نوراً وفي بصري نوراً'},en:{label:'Dua for Light',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'O God, place light in my heart and light in my sight'},fr:{label:'Dua pour la Lumiere',text:'اللَّهُمَّ اجْعَلْ فِي قَلْبِي نُورًا وَفِي بَصَرِي نُورًا',tr:'O Dieu, mets de la lumiere dans mon coeur et dans ma vue'}},
  {ar:{label:'دعاء الثبات',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'يا مقلب القلوب ثبت قلبي على دينك'},en:{label:'Dua for Steadfastness',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Turner of hearts, make my heart firm upon Your religion'},fr:{label:'Dua pour la Constance',text:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ',tr:'O Celui qui retourne les coeurs, affermis mon coeur sur Ta religion'}},
  {ar:{label:'دعاء العلم النافع',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',tr:'اللهم إني أسألك علماً نافعاً'},en:{label:'Dua for Beneficial Knowledge',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',tr:'O God, I ask You for beneficial knowledge'},fr:{label:'Dua pour le Savoir Utile',text:'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا',tr:'O Dieu, je Te demande un savoir utile'}},
  {ar:{label:'دعاء الحق',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'اللهم أرنا الحق حقاً وارزقنا اتباعه'},en:{label:'Dua for Truth',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'O God, show us truth as truth and grant us to follow it'},fr:{label:'Dua pour la Verite',text:'اللَّهُمَّ أَرِنَا الْحَقَّ حَقًّا وَارْزُقْنَا اتِّبَاعَهُ',tr:'O Dieu, montre-nous la verite comme verite et accorde-nous de la suivre'}},
  {ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'ربنا أفرغ علينا صبراً وثبت أقدامنا'},en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet'},fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, accorde-nous patience et affermis nos pas'}}
];

// ═══════════════ XP & BADGES SYSTEM ═══════════════
const BADGES = [
  {id:'beginner',emoji:'🌟',xp:0},
  {id:'reader',emoji:'📖',xp:100},
  {id:'scholar',emoji:'🧠',xp:300},
  {id:'persistent',emoji:'🔥',xp:500},
  {id:'expert',emoji:'🏆',xp:1000}
];

function getXPData() {
  return JSON.parse(localStorage.getItem('zg-xp') || '{"xp":0,"cardsRead":[],"quizDone":false,"streak":0,"lastDate":""}');
}
function saveXPData(data) { localStorage.setItem('zg-xp', JSON.stringify(data)); }

function addXP(amount, reason) {
  const data = getXPData();
  data.xp += amount;
  saveXPData(data);
  updateXPDisplay();
  checkBadges(data);
  if (reason) showToast(`+${amount} XP — ${reason}`);
}

function markCardRead(cardId) {
  const data = getXPData();
  if (!data.cardsRead.includes(cardId)) {
    data.cardsRead.push(cardId);
    data.xp += 10;
    saveXPData(data);
    updateXPDisplay();
    checkBadges(data);
  }
}

function checkBadges(data) {
  const currentBadge = BADGES.filter(b => data.xp >= b.xp).pop();
  const stored = localStorage.getItem('zg-badge');
  if (currentBadge && currentBadge.id !== stored) {
    localStorage.setItem('zg-badge', currentBadge.id);
    const t = T[lang];
    const name = t['level' + currentBadge.id.charAt(0).toUpperCase() + currentBadge.id.slice(1)] || currentBadge.id;
    showToast(`${currentBadge.emoji} ${name}!`);
    playSound('success');
  }
}

function updateXPDisplay() {
  const data = getXPData();
  const xpEl = document.getElementById('xpDisplay');
  if (!xpEl) return;
  if (xpEl) {
    const currentBadge = BADGES.filter(b => data.xp >= b.xp).pop();
    const nextBadge = BADGES.find(b => b.xp > data.xp);
    const pct = nextBadge ? Math.min(100, (data.xp / nextBadge.xp) * 100) : 100;
    xpEl.innerHTML = `
      <div class="xp-bar-wrap">
        <div class="xp-bar-bg"><div class="xp-bar-fill" style="width:${pct}%"></div></div>
        <span class="xp-text">${currentBadge ? currentBadge.emoji : '🌟'} ${data.xp} XP</span>
      </div>`;
  }
}

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('zg-lang') || 'ar';
let theme = localStorage.getItem('zg-theme') || 'charcoal';
const themes = ['charcoal','moonlight','dawn'];
const themeIcons = ['🌑','🌙','🌅'];
const themeNames = {charcoal:'ظلام فحمي',moonlight:'ضوء قمري',dawn:'فجر'};
let ageMode = localStorage.getItem('zg-age') || 'teen';
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderAnalysis();
  renderLight();
  renderQuiz();
  renderCompare();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
  updateXPDisplay();
  // Mark app opened — beginner badge
  const data = getXPData();
  if (data.xp === 0) { addXP(5, lang === 'ar' ? 'مرحباً بك!' : lang === 'fr' ? 'Bienvenue !' : 'Welcome!'); }
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  if (!el) return;
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (!s) return;
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('zg-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabAnalysis', t.tabAnalysis); set('tabLight', t.tabLight);
  set('tabQuiz', t.tabQuiz); set('tabCompare', t.tabCompare); set('tabAbout', t.tabAbout);
  set('analysisTitle', t.analysisTitle); set('analysisDesc', t.analysisDesc);
  set('lightTitle', t.lightTitle); set('lightDesc', t.lightDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('compareTitle', t.compareTitle); set('compareDesc', t.compareDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  renderHome(); renderAnalysis(); renderLight(); renderQuiz(); renderCompare(); renderAbout(); renderHelp(); renderDuas();
  updateXPDisplay();
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('zg-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (!el) return;
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ AGE MODE ═══════════════
function toggleAgeMode() {
  ageMode = ageMode === 'teen' ? 'young' : 'teen';
  localStorage.setItem('zg-age', ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  const t = T[lang];
  showToast(ageMode === 'young' ? t.youngMode : t.teenMode);
  playSound('click');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % ANALYSIS.length;
  const a = ANALYSIS[dayIdx];
  const ad = a[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${ad.title}</div>
    <div class="daily-body">${ad.light}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=analysis]').click()">${t.tabAnalysis} &#8594;</div>
  `;
  const sections = [
    {icon:'⚔️',tab:'analysis',title:t.tabAnalysis,desc:lang==='ar'?'٢٠ بطاقة نور مقابل ظلام':lang==='fr'?'20 fiches lumiere vs ombre':'20 light vs dark cards'},
    {icon:'☀️',tab:'light',title:t.tabLight,desc:lang==='ar'?'أنوار الحقيقة':lang==='fr'?'Lumieres de la verite':'Lights of truth'},
    {icon:'🧪',tab:'quiz',title:t.tabQuiz,desc:lang==='ar'?'اختبر تفكيرك':lang==='fr'?'Testez votre esprit':'Test your thinking'},
    {icon:'📊',tab:'compare',title:t.tabCompare,desc:lang==='ar'?'قارن وتأمل':lang==='fr'?'Comparez et reflechissez':'Compare & reflect'},
    {icon:'📖',tab:'about',title:t.tabAbout,desc:lang==='ar'?'عن الكتاب والمؤلف':lang==='fr'?'Le livre et l\'auteur':'Book & author'},
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
  // XP display
  updateXPDisplay();
}

// ═══════════════ RENDER: ANALYSIS (Light vs Dark cards) ═══════════════
function renderAnalysis() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="analysisSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterAnalysis(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = ANALYSIS.map((a, i) => {
    const d = a[lang];
    return `
    <div class="analysis-card scroll-reveal" id="analysis-${a.id}" data-search="${d.title.toLowerCase()}">
      <div class="analysis-head" onclick="toggleCard('analysis-${a.id}');markCardRead(${a.id})">
        <span class="analysis-num">${a.id}</span>
        <span class="analysis-emoji">${a.emoji}</span>
        <span class="analysis-title">${d.title}</span>
        <span class="analysis-chev">&#9660;</span>
      </div>
      <div class="analysis-body">
        <div class="analysis-inner">
          <div class="comparison-box">
            <div class="comparison-side dark-side">
              <div class="comp-label">${t.dark}</div>
              <div class="comp-text">${d.dark}</div>
            </div>
            <div class="comparison-side light-side">
              <div class="comp-label">${t.light}</div>
              <div class="comp-text">${d.light}</div>
            </div>
          </div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('analysisContainer')||{}).innerHTML= searchBar + cards;
}

function filterAnalysis(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.analysis-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.analysis-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    const match = !q || searchText.includes(q) || titleText.includes(q);
    card.style.display = match ? '' : 'none';
  });
}

// ═══════════════ RENDER: LIGHT (truth highlights) ═══════════════
function renderLight() {
  const t = T[lang];
  (document.getElementById('lightContainer')||{}).innerHTML= ANALYSIS.map(a => {
    const d = a[lang];
    return `
    <div class="light-card scroll-reveal">
      <div class="light-header">
        <span class="light-emoji">${a.emoji}</span>
        <span class="light-title">${d.title}</span>
      </div>
      <div class="light-claim">
        <span class="light-label">${t.dark}</span>
        ${d.dark}
      </div>
      <div class="light-truth">
        <span class="light-label">${t.light}</span>
        ${d.light}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: QUIZ (Critical Thinking — Millionaire Style) ═══════════════
let quizState = { current: 0, score: 0, answered: [], lifelines: { fifty: true, hint: true } };

function renderQuiz() {
  quizState = { current: 0, score: 0, answered: [], lifelines: { fifty: true, hint: true } };
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  const result = document.getElementById('quizResult');
  if (!result) return;
  if (result) result.classList.add('hidden');

  if (quizState.current >= QUIZ_DATA.length) {
    // Quiz complete
    const pct = Math.round((quizState.score / QUIZ_DATA.length) * 100);
    let emoji, title, desc;
    if (pct >= 80) {
      emoji = '🏆'; title = lang==='ar'?'ممتاز!':lang==='fr'?'Excellent !':'Excellent!';
      desc = lang==='ar'?'تفكيرك النقدي ممتاز! أنت تميز بين الحق والباطل':lang==='fr'?'Votre esprit critique est excellent !':'Your critical thinking is excellent!';
    } else if (pct >= 50) {
      emoji = '☀️'; title = lang==='ar'?'جيد':lang==='fr'?'Bien':'Good';
      desc = lang==='ar'?'أنت على الطريق الصحيح — واصل القراءة والتعلم':lang==='fr'?'Vous etes sur la bonne voie — continuez a lire et apprendre':'You\'re on the right track — keep reading and learning';
    } else {
      emoji = '📖'; title = lang==='ar'?'تحتاج مزيداً من القراءة':lang==='fr'?'Lisez davantage':'Read More';
      desc = lang==='ar'?'راجع بطاقات التحليل لتقوي تفكيرك النقدي':lang==='fr'?'Revisez les fiches d\'analyse pour renforcer votre esprit critique':'Review the analysis cards to strengthen your critical thinking';
    }
    if (pct === 100) addXP(50, lang==='ar'?'خبير!':lang==='fr'?'Expert !':'Expert!');
    else addXP(20, t.quizComplete);

    container.innerHTML = '';
    if (result) {
      result.classList.remove('hidden');
      result.innerHTML = `
        <div class="qr-emoji">${emoji}</div>
        <div class="qr-score">${quizState.score}/${QUIZ_DATA.length} (${pct}%)</div>
        <div class="qr-title">${title}</div>
        <div class="qr-desc">${desc}</div>
        <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${t.quizAgain}</button>
      `;
      result.scrollIntoView({ behavior: 'smooth' });
    }
    playSound('success');
    return;
  }

  const qData = QUIZ_DATA[quizState.current][lang];
  const qNum = quizState.current + 1;

  container.innerHTML = `
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" style="width:${(quizState.current / QUIZ_DATA.length) * 100}%"></div>
    </div>
    <div class="quiz-status">${t.quizScore}: ${quizState.score}/${QUIZ_DATA.length} | ${qNum}/${QUIZ_DATA.length}</div>
    <div class="quiz-lifelines">
      <button class="lifeline-btn ${!quizState.lifelines.fifty?'used':''}" onclick="useFiftyFifty()" ${!quizState.lifelines.fifty?'disabled':''}>${t.lifeline5050}</button>
      <button class="lifeline-btn ${!quizState.lifelines.hint?'used':''}" onclick="useHint()" ${!quizState.lifelines.hint?'disabled':''}>${t.lifelineHint}</button>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-q-text">${qNum}. ${qData.q}</div>
      <div class="quiz-options" id="quizOptions">
        ${qData.a.map((ans, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${ans}</button>`).join('')}
      </div>
      <div id="quizHint" class="quiz-hint hidden"></div>
    </div>
  `;
}

function answerQuiz(idx) {
  const qData = QUIZ_DATA[quizState.current][lang];
  const correct = qData.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  if (idx === correct) {
    quizState.score++;
    addXP(5, T[lang].quizCorrect);
    playSound('success');
  } else {
    playSound('click');
  }
  quizState.answered.push(idx);
  quizState.current++;
  setTimeout(() => renderQuizQuestion(), 1200);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const qData = QUIZ_DATA[quizState.current][lang];
  const correct = qData.correct;
  const wrong = qData.a.map((_, i) => i).filter(i => i !== correct);
  // Remove 2 random wrong answers
  const toRemove = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
  toRemove.forEach(i => {
    const el = document.getElementById('qopt-' + i);
    if (el) { el.style.opacity = '0.3'; el.disabled = true; }
  });
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const a = ANALYSIS[quizState.current % ANALYSIS.length];
  const d = a[lang];
  const hintEl = document.getElementById('quizHint');
  if (!hintEl) return;
  if (hintEl) {
    hintEl.classList.remove('hidden');
    hintEl.innerHTML = `<div class="verse-box"><div class="verse-arabic">${d.verse}</div><div class="verse-ref">${d.verseRef}</div></div>`;
  }
  document.querySelectorAll('.lifeline-btn')[1].classList.add('used');
  playSound('click');
}

// ═══════════════ RENDER: COMPARE ═══════════════
function renderCompare() {
  const t = T[lang];
  (document.getElementById('compareContainer')||{}).innerHTML= ANALYSIS.map(a => {
    const d = a[lang];
    return `
    <div class="compare-card scroll-reveal">
      <div class="compare-header">
        <span class="compare-num">${a.id}</span>
        <span class="compare-emoji">${a.emoji}</span>
        <span class="compare-title">${d.title}</span>
      </div>
      <div class="compare-grid">
        <div class="compare-col claim-col">
          <div class="compare-col-label">${t.dark}</div>
          <p>${d.dark}</p>
        </div>
        <div class="compare-vs">VS</div>
        <div class="compare-col truth-col">
          <div class="compare-col-label">${t.light}</div>
          <p>${d.light}</p>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ SHARE CARD ═══════════════
async function shareCard(idx) {
  const a = ANALYSIS[idx];
  const d = a[lang];
  const text = `${a.emoji} ${d.title}\n\n${T[lang].light}: ${d.light}\n\n💡 ${d.action}\n\n— ظلام من الغرب | Darkness from the West`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch(e) {}
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch(e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"ظلام من الغرب" كتاب يرد فيه الشيخ الغزالي على المستشرقين ودعاة التغريب. يكشف أن بعض المسلمين يرددون ادعاءات المستشرقين ضد الإسلام دون تحقيق — ويسميهم "مستشرقين عرب". يتناول الكتاب في ٢٠ فصلاً و٢٥٦ صفحة مواضيع: مصادر الذنوب، العقل والعاطفة، السببية، عروبة الإسلام، الاستعمار، الغزو الثقافي، الجاهلية الحديثة، حماية الأخلاق، نمو الأمم واضمحلالها، والوحدة الإسلامية.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "ظلام من الغرب" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending intellectual freedom in Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Darkness from the West" is a book where Sheikh al-Ghazali responds to Orientalists and Westernization advocates. He reveals that some Muslims repeat Orientalist claims against Islam without verification — calling them "Arab Orientalists." The book covers 20 chapters across 256 pages: sources of sin, mind vs emotion, causality, Arabism of Islam, colonialism, cultural invasion, modern ignorance, protecting morals, nations between growth and decay, and Islamic unity.',
      sourcesTitle: 'Sources',
      sources: ['"Darkness from the West" (Zalam min al-Gharb) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme « Le Litteraire de la Predication ». Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal. Connu pour le renouveau et la lutte contre la rigidite.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Ombre de l\'Occident » est un livre ou le Sheikh al-Ghazali repond aux orientalistes et aux partisans de l\'occidentalisation. Il revele que certains musulmans repetent les accusations orientalistes contre l\'Islam sans verification — les appelant "orientalistes arabes". Le livre couvre 20 chapitres sur 256 pages : sources du peche, raison et emotion, causalite, arabite de l\'Islam, colonialisme, invasion culturelle, ignorance moderne, protection de la morale, nations entre croissance et declin, et unite islamique.',
      sourcesTitle: 'Sources',
      sources: ['« Ombre de l\'Occident » (Zalam min al-Gharb) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "ظلام من الغرب" للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ٢٠ بطاقة تحليل، اختبار تفكير نقدي، مقارنات، أوسمة ونقاط خبرة.'},
      {title:'⌨️ اختصارات',body:'استخدم الأسهم (يمين/يسار) للتنقل بين البطاقات. اضغط Escape لإغلاق اللوحات.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/zalam-min-al-gharb'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Darkness from the West" by Sheikh Mohammed al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 20 analysis cards, critical thinking quiz, comparisons, badges and XP.'},
      {title:'⌨️ Shortcuts',body:'Use arrow keys (left/right) to navigate between cards. Press Escape to close panels.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/zalam-min-al-gharb'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'« Ombre de l\'Occident » par Sheikh Mohammed al-Ghazali, le Saint Coran, la Sunnah Prophetique.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 20 fiches d\'analyse, quiz critique, comparaisons, badges et XP.'},
      {title:'⌨️ Raccourcis',body:'Utilisez les fleches (gauche/droite) pour naviguer entre les fiches. Echap pour fermer les panneaux.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/zalam-min-al-gharb'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() { document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el)); }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => { tab.addEventListener('click', () => setTimeout(observeAll, 100)); });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel) return;
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel) return;
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.analysis-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const analysisPanel = document.getElementById('panel-analysis');
      if (!analysisPanel) return;
      if (!analysisPanel || !analysisPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'analysisSearch') return;
      e.preventDefault();
      const cards = document.querySelectorAll('.analysis-card');
      const visibleCards = Array.from(cards).filter(c => c.style.display !== 'none');
      if (visibleCards.length === 0) return;
      if (currentCardIdx >= 0 && currentCardIdx < visibleCards.length) visibleCards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(visibleCards.length - 1, currentCardIdx + dir));
      visibleCards[currentCardIdx].classList.add('open');
      visibleCards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const m = document.getElementById('toastMsg');
  if (!m) return;
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 600; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; gain.gain.value = 0.06; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}
