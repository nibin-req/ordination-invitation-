export type Language = 'en' | 'ml';

export type TimelineItem = {
  time: string;
  title: string;
  desc: string;
};

export type TranslationSet = {
  hero: {
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    subtitle: string;
    scrollHint: string;
  };
  card: {
    label: string;
    name: string;
    scripture: string;
    scriptureRef: string;
    message: string;
    dateLabel: string;
    dateValue: string;
    dateSub: string;
    timeLabel: string;
    timeValue: string;
    timeSub: string;
    churchName: string;
    churchAddr1: string;
    churchAddr2: string;
    calendarBtn: string;
    directionsBtn: string;
  };
  order: {
    label: string;
    title: string;
    items: TimelineItem[];
  };
  countdown: {
    label: string;
    title: string;
    subtitle: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    dateText: string;
  };
  church: {
    label: string;
    title: string;
    photoLabel: string;
    photoAddr: string;
    mapsBtn: string;
    addressLine: string;
  };
  blessing: {
    label: string;
    text: string;
    ref: string;
    closing: string;
    family: string;
    parish: string;
    soliDeo: string;
  };
  toggle: {
    en: string;
    ml: string;
  };
};

export const translations: Record<Language, TranslationSet> = {
  en: {
    hero: {
      eyebrow: 'With Great Joy',
      titleTop: 'You Are Cordially',
      titleBottom: 'Invited',
      subtitle:
        "To celebrate the sacred priestly ordination of a beloved deacon, as he answers God's call to a lifetime of service.",
      scrollHint: 'Scroll to explore',
    },
    card: {
      label: 'Ministerial Priesthood & First Holy Qurbana',
      name: 'Dn. Noyal B Varghese',
      scripture: '“Christ Jesus has made me his own.”',
      scriptureRef: '— Philippians 3:12',
      message:
        'With hearts full of gratitude to the Almighty, the family of Mr. & Mrs. Baby Varghese joyfully invites you to share in the sacred celebration as their son is ordained into the holy priesthood.',
      dateLabel: 'Date',
      dateValue: 'December 30',
      dateSub: '2026 · Wednesday',
      timeLabel: 'Time',
      timeValue: '3:00 PM',
      timeSub: 'Holy Qurbana',
      churchName: "St. Joseph's Church",
      churchAddr1: 'Punnakunnathussery',
      churchAddr2: 'Kerala, India',
      calendarBtn: 'Add to Calendar',
      directionsBtn: 'Get Directions',
    },
    order: {
      label: 'Order of the Day',
      title: 'The Celebration',
      items: [
        {
          time: '2:00 PM',
          title: 'Assembly & Prayer',
          desc: 'Guests gather in the church as the choir sings preparatory hymns.',
        },
        {
          time: '3:00 PM',
          title: 'Holy Qurbana & Ordination',
          desc: 'The Most Rev. Archbishop celebrates the Holy Qurbana with the Rite of Ordination.',
        },
        {
          time: '5:30 PM',
          title: 'First Blessing',
          desc: 'The newly ordained priest offers his first priestly blessing to the congregation.',
        },
        {
          time: '6:00 PM',
          title: 'Reception',
          desc: 'Join us for a celebratory reception in the parish hall with light refreshments.',
        },
      ],
    },
    countdown: {
      label: 'Counting Down',
      title: 'The Sacred Day',
      subtitle: 'Every moment brings us closer to the celebration',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
      dateText: 'December 30, 2026',
    },
    church: {
      label: 'The Church',
      title: "St. Joseph's Church",
      photoLabel: "St. Joseph's Church",
      photoAddr: 'Punnakunnathussery · Kerala, India',
      mapsBtn: 'Open in Google Maps',
      addressLine: "St. Joseph's Church, Punnakunnathussery, Kerala, India",
    },
    blessing: {
      label: 'A Blessing',
      text: '"The Lord bless you and keep you; the Lord make His face shine upon you, and be gracious to you; the Lord lift up His countenance upon you, and give you peace."',
      ref: '— Numbers 6:24–26',
      closing: 'With love and prayers,',
      family: 'The Thanniyath & Mulappancheril Family',
      parish: "& the Parish of St. Joseph's",
      soliDeo: 'Soli Deo Gloria',
    },
    toggle: {
      en: 'EN',
      ml: 'മലയാളം',
    },
  },
  ml: {
    hero: {
      eyebrow: 'സന്തോഷപൂർവ്വം',
      titleTop: 'സ്നേഹപൂർവ്വം',
      titleBottom: 'ക്ഷണിക്കുന്നു',
      subtitle:
        'ദൈവവിളിക്ക് പൂർണമായി സമർപ്പിച്ച് പൗരോഹിത്യ ശുശ്രൂഷയിലേക്ക് പ്രവേശിക്കുന്ന പ്രിയപ്പെട്ട ഡീക്കന്റെ തിരുപ്പട്ട സ്വീകരണത്തിൽ പങ്കെടുക്കാൻ നിങ്ങളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു.',
      scrollHint: 'താഴേക്ക് സ്ക്രോൾ ചെയ്യുക',
    },
    card: {
      label: 'പൗരോഹിത്യ സ്വീകരണവും പ്രഥമ വിശുദ്ധ കുർബാനയും',
      name: 'ഡീക്കൻ നോയൽ ബി വർഗീസ്',
      scripture: '“ക്രിസ്തുയേശു എന്നെ സ്വന്തമാക്കിയിരിക്കുന്നു.”',
      scriptureRef: '— ഫിലിപ്പിയർ 3:12',
      message:
        'സർവശക്തനായ ദൈവത്തിന് നന്ദിയർപ്പിച്ചുകൊണ്ട്, തങ്ങളുടെ മകൻ തിരുപ്പട്ടം സ്വീകരിക്കുന്ന ഈ വിശുദ്ധ കർമ്മത്തിൽ പങ്കുചേരാൻ ശ്രീ. ബേബി വർഗീസും കുടുംബവും നിങ്ങളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു.',
      dateLabel: 'തീയതി',
      dateValue: 'ഡിസംബർ 30',
      dateSub: '2026 · ബുധനാഴ്ച',
      timeLabel: 'സമയം',
      timeValue: '3:00 PM',
      timeSub: 'വിശുദ്ധ കുർബാന',
      churchName: 'സെന്റ് ജോസഫ് പള്ളി',
      churchAddr1: 'പുന്നക്കുന്നത്തുശ്ശേരി',
      churchAddr2: 'കേരളം, ഇന്ത്യ',
      calendarBtn: 'കലണ്ടറിൽ ചേർക്കുക',
      directionsBtn: 'വഴി കണ്ടെത്തുക',
    },
    order: {
      label: 'പരിപാടിക്രമം',
      title: 'ആഘോഷം',
      items: [
        {
          time: '2:00 PM',
          title: 'സമാഗമവും പ്രാർത്ഥനയും',
          desc: 'വിശ്വാസികൾ പള്ളിയിൽ ഒരുമിച്ചുകൂടുന്നു; ഗായകസംഘം ഒരുക്കൽ ഗാനങ്ങൾ പാടുന്നു.',
        },
        {
          time: '3:00 PM',
          title: 'വിശുദ്ധ കുർബാനയും തിരുപ്പട്ട സ്വീകരണവും',
          desc: 'അഭിവന്ദ്യ മെത്രാപ്പോലീത്തയുടെ മുഖ്യകാർമ്മികത്വത്തിൽ വിശുദ്ധ കുർബാനയും തിരുപ്പട്ട ശുശ്രൂഷയും നടക്കും.',
        },
        {
          time: '5:30 PM',
          title: 'പ്രഥമ ആശീർവാദം',
          desc: 'പുതുതായി തിരുപ്പട്ടം സ്വീകരിച്ച വൈദികൻ വിശ്വാസികൾക്ക് പ്രഥമ ആശീർവാദം നൽകും.',
        },
        {
          time: '6:00 PM',
          title: 'സ്വീകരണം',
          desc: 'പള്ളി ഹാളിൽ നടക്കുന്ന സ്നേഹവിരുന്നിലേക്ക് എല്ലാവരെയും ക്ഷണിക്കുന്നു.',
        },
      ],
    },
    countdown: {
      label: 'ദിവസത്തിലേക്ക് ഇനി',
      title: 'വിശുദ്ധ ദിനം',
      subtitle: 'ഓരോ നിമിഷവും ഈ അനുഗ്രഹീത ദിനത്തിലേക്ക് നമ്മെ അടുപ്പിക്കുന്നു',
      days: 'ദിവസം',
      hours: 'മണിക്കൂർ',
      minutes: 'മിനിറ്റ്',
      seconds: 'സെക്കൻഡ്',
      dateText: 'ഡിസംബർ 30, 2026',
    },
    church: {
      label: 'ദേവാലയം',
      title: 'സെന്റ് ജോസഫ് പള്ളി',
      photoLabel: 'സെന്റ് ജോസഫ് പള്ളി',
      photoAddr: 'പുന്നക്കുന്നത്തുശ്ശേരി · കേരളം, ഇന്ത്യ',
      mapsBtn: 'ഗൂഗിൾ മാപ്പിൽ തുറക്കുക',
      addressLine: 'സെന്റ് ജോസഫ് പള്ളി, പുന്നക്കുന്നത്തുശ്ശേരി, കേരളം, ഇന്ത്യ',
    },
    blessing: {
      label: 'ആശീർവാദം',
      text: '"കർത്താവ് നിന്നെ അനുഗ്രഹിക്കട്ടെ, നിന്നെ കാത്തുസൂക്ഷിക്കട്ടെ; കർത്താവ് തന്റെ മുഖം നിന്നിൽ പ്രകാശിപ്പിക്കട്ടെ, നിന്നോട് കൃപ കാണിക്കട്ടെ; കർത്താവ് തന്റെ മുഖം നിന്നിലേക്ക് തിരിക്കട്ടെ, നിനക്ക് സമാധാനം നൽകട്ടെ."',
      ref: '— സംഖ്യാപുസ്തകം 6:24–26',
      closing: 'സ്നേഹത്തോടും പ്രാർത്ഥനയോടും കൂടെ,',
      family: 'തന്നിയത്ത് & മുളപ്പഞ്ചേരിൽ കുടുംബം',
      parish: 'സെന്റ് ജോസഫ് ഇടവക സമൂഹവും',
      soliDeo: 'ദൈവത്തിന് മാത്രം മഹത്വം',
    },
    toggle: {
      en: 'EN',
      ml: 'മലയാളം',
    },
  },
};
