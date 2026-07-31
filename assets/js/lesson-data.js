window.LESSON_DATA = {
  meem: {
    id:'meem', letter:'م', name:'الميم', color:'#6557d9', symbol:'🌊',
    intro:'السَّلامُ عليكم يا أبطالُ. اليومَ نتعلَّمُ حرفَ الميمِ. رَدِّدوا معي: مْ... مْ... مْ. هَيَّا نبدأُ رحلتَنا.',
    story:'جلستِ الأسرةُ لتناولِ الإفطارِ. وضعتِ الأمُّ مريمُ الموزَ على المائدةِ، فأخذَ ياسرٌ موزةً وقالَ: موزٌ تبدأُ بحرفِ الميمِ. ابتسمَ الأبُ سعدٌ، وردَّدَ الجميعُ: ميمٌ... موزٌ.',
    words:[['مَوْز','🍌'],['مِفْتَاح','🔑'],['مَاء','💧'],['كِتَاب','📘']], correct:[0,1,2],
    game:['م','مَوْز','م','مِفْتَاح','م','مَاء'],
    sounds:{
      intro:'أحسنتَ حتى الآن! هَيَّا نستمعُ إلى الأصواتِ، ثم نكتشفُ الكلماتِ التي تحتوي عليها.',
      short:[
        {sound:'مَ',word:'مَدْرَسَة',before:'',target:'مَ',after:'دْرَسَة',image:'🏫',audio:'assets/audio/meem/sounds/short-a.webm'},
        {sound:'مُ',word:'مُثَلَّث',before:'',target:'مُ',after:'ثَلَّث',image:'🔺',audio:'assets/audio/meem/sounds/short-u.webm'},
        {sound:'مِ',word:'مِفْتَاح',before:'',target:'مِ',after:'فْتَاح',image:'🔑',audio:'assets/audio/meem/sounds/short-i.webm'}
      ],
      long:[
        {sound:'مَا',word:'حِمَار',before:'حِ',target:'مَا',after:'ر',image:'🫏',audio:'assets/audio/meem/sounds/long-aa.webm'},
        {sound:'مُو',word:'عَمُود',before:'عَ',target:'مُو',after:'د',image:'🏛️',audio:'assets/audio/meem/sounds/long-uu.webm'},
        {sound:'مِي',word:'جَمِيل',before:'جَ',target:'مِي',after:'ل',image:'😊',audio:'assets/audio/meem/sounds/long-ii.webm'}
      ]
    },
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة التي تحتوي كلمتُها على الصوت الصحيح.',soundIndex:4},
    success:'أحسنتَ يا بطلُ! تعرَّفتَ اليومَ إلى حرفِ الميمِ، وأتقنتَ أصواتَه القصيرةَ والطويلةَ. أنا فخورٌ بك.',
    audio:{intro:'assets/audio/meem/intro.webm',story:'assets/audio/meem/story.webm',success:'assets/audio/meem/success.webm'}
  },
  baa: {
    id:'baa', letter:'ب', name:'الباء', color:'#1b91c9', symbol:'🎈',
    intro:'السَّلامُ عليكم يا أبطالُ. اليومَ نتعلَّمُ حرفَ الباءِ. رَدِّدوا معي: بْ... بْ... بْ. هَيَّا نبدأُ.',
    story:'أحضرَ فوَّازٌ بالونًا أزرقَ، ووضعَه بجانبِ البابِ. قالَ الجدُّ مشعلٌ: بالونٌ وبابٌ كلمتانِ تبدآنِ بحرفِ الباءِ. فرحَ ياسرٌ وردَّدَ: باءٌ... بالونٌ... بابٌ.',
    words:[['بَالُون','🎈'],['بَاب','🚪'],['بَطَّة','🦆'],['مَوْز','🍌']], correct:[0,1,2], game:['ب','بَالُون','ب','بَاب','ب','بَطَّة'],
    sounds:{intro:'هَيَّا نستمعُ إلى أصواتِ حرفِ الباءِ القصيرةِ والطويلةِ، ثم نكتشفُها داخلَ الكلماتِ.',short:[
      {sound:'بَ',word:'بَطَّة',before:'',target:'بَ',after:'طَّة',image:'🦆',audio:'assets/audio/baa/sounds/short-a.webm'},
      {sound:'بُ',word:'بُرْتُقَال',before:'',target:'بُ',after:'رْتُقَال',image:'🍊',audio:'assets/audio/baa/sounds/short-u.webm'},
      {sound:'بِ',word:'بِسَاط',before:'',target:'بِ',after:'سَاط',image:'🧶',audio:'assets/audio/baa/sounds/short-i.webm'}],long:[
      {sound:'بَا',word:'بَاب',before:'',target:'بَا',after:'ب',image:'🚪',audio:'assets/audio/baa/sounds/long-aa.webm'},
      {sound:'بُو',word:'حُبُوب',before:'حُ',target:'بُو',after:'ب',image:'🌾',audio:'assets/audio/baa/sounds/long-uu.webm'},
      {sound:'بِي',word:'كَبِير',before:'كَ',target:'بِي',after:'ر',image:'🐘',audio:'assets/audio/baa/sounds/long-ii.webm'}]},
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة الصحيحة.',soundIndex:3}, success:'رائعٌ يا بطلُ! تعرَّفتَ إلى حرفِ الباءِ وأتقنتَ أصواتَه. استمرَّ في رحلتِكَ الجميلةِ.',
    audio:{intro:'assets/audio/baa/intro.webm',story:'assets/audio/baa/story.webm',success:'assets/audio/baa/success.webm'}
  },
  laam: {
    id:'laam', letter:'ل', name:'اللام', color:'#e7b529', symbol:'🍋',
    intro:'مرحبًا يا أبطالُ. اليومَ نتعلَّمُ حرفَ اللامِ. رَدِّدوا معي: لْ... لْ... لْ. هَيَّا نكتشفُه.',
    story:'زارتِ الأسرةُ الجدَّ مشعلًا. قدَّمتِ الجدةُ فاطمةُ ليمونًا ولَبَنًا. قالتْ نورةُ: ليمونٌ ولبنٌ يبدآنِ بحرفِ اللامِ. ابتسمَ الجميعُ وردَّدوا: لامٌ... ليمونٌ.',
    words:[['لَيْمُون','🍋'],['لَبَن','🥛'],['لُعْبَة','🧸'],['بَاب','🚪']],correct:[0,1,2],game:['ل','لَيْمُون','ل','لَبَن','ل','لُعْبَة'],
    sounds:{intro:'هَيَّا نستمعُ إلى أصواتِ حرفِ اللامِ، ونلاحظُ موقعَ الصوتِ داخلَ الكلمةِ.',short:[
      {sound:'لَ',word:'لَبَن',before:'',target:'لَ',after:'بَن',image:'🥛',audio:'assets/audio/laam/sounds/short-a.webm'},
      {sound:'لُ',word:'لُعْبَة',before:'',target:'لُ',after:'عْبَة',image:'🧸',audio:'assets/audio/laam/sounds/short-u.webm'},
      {sound:'لِ',word:'لِسَان',before:'',target:'لِ',after:'سَان',image:'👅',audio:'assets/audio/laam/sounds/short-i.webm'}],long:[
      {sound:'لَا',word:'لَاعِب',before:'',target:'لَا',after:'عِب',image:'⚽',audio:'assets/audio/laam/sounds/long-aa.webm'},
      {sound:'لُو',word:'حُلُول',before:'حُ',target:'لُو',after:'ل',image:'💡',audio:'assets/audio/laam/sounds/long-uu.webm'},
      {sound:'لِي',word:'جَلِيل',before:'جَ',target:'لِي',after:'ل',image:'⭐',audio:'assets/audio/laam/sounds/long-ii.webm'}]},
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة الصحيحة.',soundIndex:4},success:'أحسنتَ يا بطلُ! أتقنتَ حرفَ اللامِ وأصواتَه. أنتَ تتقدَّمُ خطوةً خطوةً.',audio:{intro:'assets/audio/laam/intro.webm',story:'assets/audio/laam/story.webm',success:'assets/audio/laam/success.webm'}
  },
  daal: {
    id:'daal',letter:'د',name:'الدال',color:'#ef8f2f',symbol:'🚲',intro:'السَّلامُ عليكم يا أبطالُ. اليومَ نتعلَّمُ حرفَ الدالِ. رَدِّدوا معي: دْ... دْ... دْ. هَيَّا نبدأُ.',
    story:'رتَّبتِ الأمُّ مريمُ غرفةَ ياسرٍ، فوجدتْ دميةً ودفترًا. قالَ الأبُ سعدٌ: دميةٌ ودفترٌ يبدآنِ بحرفِ الدالِ. حملَ ياسرٌ دميتَه وردَّدَ: دالٌ... دميةٌ.',
    words:[['دُمْيَة','🧸'],['دَفْتَر','📒'],['دَجَاجَة','🐔'],['لَيْمُون','🍋']],correct:[0,1,2],game:['د','دُمْيَة','د','دَفْتَر','د','دَجَاجَة'],
    sounds:{intro:'هَيَّا نستمعُ إلى أصواتِ حرفِ الدالِ القصيرةِ والطويلةِ.',short:[
      {sound:'دَ',word:'دَجَاجَة',before:'',target:'دَ',after:'جَاجَة',image:'🐔',audio:'assets/audio/daal/sounds/short-a.webm'},
      {sound:'دُ',word:'دُبّ',before:'',target:'دُ',after:'بّ',image:'🐻',audio:'assets/audio/daal/sounds/short-u.webm'},
      {sound:'دِ',word:'دِيك',before:'',target:'دِ',after:'يك',image:'🐓',audio:'assets/audio/daal/sounds/short-i.webm'}],long:[
      {sound:'دَا',word:'دَار',before:'',target:'دَا',after:'ر',image:'🏠',audio:'assets/audio/daal/sounds/long-aa.webm'},
      {sound:'دُو',word:'حُدُود',before:'حُ',target:'دُو',after:'د',image:'🚧',audio:'assets/audio/daal/sounds/long-uu.webm'},
      {sound:'دِي',word:'جَدِيد',before:'جَ',target:'دِي',after:'د',image:'✨',audio:'assets/audio/daal/sounds/long-ii.webm'}]},
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة الصحيحة.',soundIndex:5},success:'ممتازٌ يا بطلُ! تعرَّفتَ إلى حرفِ الدالِ وأتقنتَ أصواتَه. واصلْ نجاحَكَ.',audio:{intro:'assets/audio/daal/intro.webm',story:'assets/audio/daal/story.webm',success:'assets/audio/daal/success.webm'}
  },
  noon: {
    id:'noon',letter:'ن',name:'النون',color:'#9d61c7',symbol:'🐝',intro:'مرحبًا يا أبطالُ. اليومَ نتعلَّمُ حرفَ النونِ. رَدِّدوا معي: نْ... نْ... نْ. هَيَّا نبدأُ.',
    story:'جلستْ نورةُ في الحديقةِ ترسمُ نجمةً ونخلةً. قالَ فوَّازٌ: نجمةٌ ونخلةٌ تبدآنِ بحرفِ النونِ. رفعَ ياسرٌ رسمتَه وردَّدَ: نونٌ... نجمةٌ.',
    words:[['نَجْمَة','⭐'],['نَخْلَة','🌴'],['نَمِر','🐯'],['مِفْتَاح','🔑']],correct:[0,1,2],game:['ن','نَجْمَة','ن','نَخْلَة','ن','نَمِر'],
    sounds:{intro:'هَيَّا نستمعُ إلى أصواتِ حرفِ النونِ، ونربطُ كلَّ صوتٍ بصورتِه.',short:[
      {sound:'نَ',word:'نَجْمَة',before:'',target:'نَ',after:'جْمَة',image:'⭐',audio:'assets/audio/noon/sounds/short-a.webm'},
      {sound:'نُ',word:'نُقُود',before:'',target:'نُ',after:'قُود',image:'💰',audio:'assets/audio/noon/sounds/short-u.webm'},
      {sound:'نِ',word:'نِمْر',before:'',target:'نِ',after:'مْر',image:'🐯',audio:'assets/audio/noon/sounds/short-i.webm'}],long:[
      {sound:'نَا',word:'نَافِذَة',before:'',target:'نَا',after:'فِذَة',image:'🪟',audio:'assets/audio/noon/sounds/long-aa.webm'},
      {sound:'نُو',word:'جُنُود',before:'جُ',target:'نُو',after:'د',image:'🪖',audio:'assets/audio/noon/sounds/long-uu.webm'},
      {sound:'نِي',word:'مُنِير',before:'مُ',target:'نِي',after:'ر',image:'💡',audio:'assets/audio/noon/sounds/long-ii.webm'}]},
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة الصحيحة.',soundIndex:3},success:'رائعٌ يا بطلُ! أتقنتَ حرفَ النونِ وأصواتَه. أنتَ نجمٌ في رحلةِ الحروفِ.',audio:{intro:'assets/audio/noon/intro.webm',story:'assets/audio/noon/story.webm',success:'assets/audio/noon/success.webm'}
  },
  raa: {
    id:'raa',letter:'ر',name:'الراء',color:'#e15555',symbol:'🍎',intro:'السَّلامُ عليكم يا أبطالُ. اليومَ نتعلَّمُ حرفَ الراءِ. رَدِّدوا معي: رْ... رْ... رْ. هَيَّا نبدأُ.',
    story:'خرجتِ الأسرةُ في رحلةٍ جميلةٍ. أحضرَ الجدُّ مشعلٌ رمانًا، ورأتْ نورةُ ريشةً قربَ الشجرةِ. قالَ الأبُ سعدٌ: رمانٌ وريشةٌ يبدآنِ بحرفِ الراءِ.',
    words:[['رُمَّان','🍎'],['رِيشَة','🪶'],['رَجُل','👨'],['نَجْمَة','⭐']],correct:[0,1,2],game:['ر','رُمَّان','ر','رِيشَة','ر','رَجُل'],
    sounds:{intro:'هَيَّا نستمعُ إلى أصواتِ حرفِ الراءِ القصيرةِ والطويلةِ.',short:[
      {sound:'رَ',word:'رَمَّان',before:'',target:'رَ',after:'مَّان',image:'🍎',audio:'assets/audio/raa/sounds/short-a.webm'},
      {sound:'رُ',word:'رُزّ',before:'',target:'رُ',after:'زّ',image:'🍚',audio:'assets/audio/raa/sounds/short-u.webm'},
      {sound:'رِ',word:'رِيشَة',before:'',target:'رِ',after:'يشَة',image:'🪶',audio:'assets/audio/raa/sounds/short-i.webm'}],long:[
      {sound:'رَا',word:'رَامِي',before:'',target:'رَا',after:'مِي',image:'🏹',audio:'assets/audio/raa/sounds/long-aa.webm'},
      {sound:'رُو',word:'حُرُوف',before:'حُ',target:'رُو',after:'ف',image:'🔤',audio:'assets/audio/raa/sounds/long-uu.webm'},
      {sound:'رِي',word:'سَرِير',before:'سَ',target:'رِي',after:'ر',image:'🛏️',audio:'assets/audio/raa/sounds/long-ii.webm'}]},
    assessment:{question:'استمع إلى الصوت، ثم اختر الصورة الصحيحة.',soundIndex:5},success:'أحسنتَ يا بطلُ! أتقنتَ حرفَ الراءِ وأصواتَه، وأكملتَ حروفَ الوحدةِ الأولى. تستحقُّ وسامَ التميُّزِ.',audio:{intro:'assets/audio/raa/intro.webm',story:'assets/audio/raa/story.webm',success:'assets/audio/raa/success.webm'}
  }
};
