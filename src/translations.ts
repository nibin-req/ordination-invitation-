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
    messageTitle: string;
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
  livestream: {
    label: string;
    platformLabel: string;
    title: string;
    description: string;
    upcomingButton: string;
    linkPendingButton: string;
    watchButton: string;
    notStartedMessage: string;
    linkPendingMessage: string;
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
        'To join us in thanking God by participating in the blessed ceremonies of the Priestly Ordination and the First Holy Qurbana, making this spiritual celebration more grace-filled.',
      scrollHint: 'Scroll to explore',
    },
    card: {
      label: 'Ministerial Priesthood & First Holy Qurbana',
      name: 'Dn. Varghese (Noyal) Thanniyath',
      scripture: '“Christ Jesus has made me his own.”',
      scriptureRef: '{Philippians 3:12}',
      messageTitle: 'Beloved in Jesus Christ',
      message:
        'With hearts overflowing with love for Jesus Christ, we joyfully announce that Almighty God has chosen our beloved son, Deacon Varghese Thanniyath, to share in the eternal priesthood of our Lord Jesus Christ. He will be ordained on Wednesday, December 30, 2026, at 2:15 PM, at St Joseph\'s Church, Punnakunnathusserry, through the laying on of hands by His Eminence Cardinal Mar George Koovakad. We cordially invite you to join us for the Priestly Ordination and First Holy Qurbana, and the Fraternal Meal thereafter.',
      dateLabel: 'Date',
      dateValue: 'December 30',
      dateSub: '2026 · Wednesday',
      timeLabel: 'Time',
      timeValue: '2:15 PM',
      timeSub: '',
      churchName: "St. Joseph's Church",
      churchAddr1: 'Punnakunnathussery',
      churchAddr2: 'Kerala, India',
      calendarBtn: 'Add to Calendar',
      directionsBtn: 'Get Directions',
    },
    order: {
      label: 'Programme Schedule',
      title: 'Priestly Ordination Ceremony',
      items: [
        {
          time: '2:00 PM',
          title: 'Welcome of the Bishop',
          desc: '',
        },
        {
          time: '2:15 PM',
          title: 'Solemn Procession',
          desc: '',
        },
        {
          time: '2:30 PM',
          title: 'Rite of Priestly Ordination',
          desc: '',
        },
        {
          time: '3:30 PM',
          title: 'First Holy Qurbana Celebrated by the Newly Ordained Priest',
          desc: '',
        },
        {
          time: '5:00 PM',
          title: 'Reception',
          desc: '',
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
    livestream: {
      label: 'Join Us Online',
      platformLabel: 'YouTube Live',
      title: 'Watch the Celebration Live',
      description: 'The YouTube stream will be available here when the ceremony begins at 2:15 PM IST.',
      upcomingButton: 'Livestream opens at 2:15 PM',
      linkPendingButton: 'YouTube link coming soon',
      watchButton: 'Watch live on YouTube',
      notStartedMessage: 'The livestream has not started yet. Please come back at 2:15 PM IST on December 30, 2026.',
      linkPendingMessage: 'The YouTube link has not been added yet. Please check back closer to the ceremony.',
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
      family: 'Thanniyath & Mulappancheril Family',
      parish: '',
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
        'പൗരോഹിത്യ തിരുപ്പട്ട സ്വീകരണത്തിന്റെയും പ്രഥമ വിശുദ്ധ കുർബാനയുടെയും അനുഗ്രഹീതമായ തിരുക്കർമ്മങ്ങളിൽ പങ്കുചേർന്ന് ദൈവത്തിന് നന്ദിയർപ്പിക്കാനും ഈ ആത്മീയ ആഘോഷത്തെ കൂടുതൽ കൃപാനിർഭരമാക്കാനും ഞങ്ങളോടൊപ്പം ചേരാൻ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു.',
      scrollHint: 'താഴേക്ക് സ്ക്രോൾ ചെയ്യുക',
    },
    card: {
      label: 'പൗരോഹിത്യ സ്വീകരണവും പ്രഥമ വിശുദ്ധ കുർബാനയും',
      name: 'ഡീക്കൻ വർഗീസ് (നോയൽ) തന്നിയത്ത്',
      scripture: '“ക്രിസ്തുയേശു എന്നെ സ്വന്തമാക്കിയിരിക്കുന്നു.”',
      scriptureRef: '{ഫിലിപ്പിയർ 3:12}',
      messageTitle: 'ഈശോമിശിഹായിൽ പ്രിയപ്പെട്ടവരേ',
      message:
        'ഈശോമിശിഹായോടുള്ള അളവറ്റ സ്നേഹത്തോടെ, നമ്മുടെ കർത്താവായ ഈശോമിശിഹായുടെ നിത്യ പൗരോഹിത്യത്തിൽ പങ്കുചേരാൻ നമ്മുടെ പ്രിയപുത്രനായ ഡീക്കൻ വർഗീസ് തന്നിയത്തിനെ സർവശക്തനായ ദൈവം തിരഞ്ഞെടുത്ത വിവരം സന്തോഷപൂർവ്വം അറിയിക്കുന്നു. 2026 ഡിസംബർ 30 ബുധനാഴ്ച ഉച്ചകഴിഞ്ഞ് 2:15-ന് പുന്നക്കുന്നത്തുശ്ശേരി സെന്റ് ജോസഫ് പള്ളിയിൽ അഭിവന്ദ്യ കർദ്ദിനാൾ ജോർജ് കൂവക്കാടിന്റെ കൈവയ്പിലൂടെ അദ്ദേഹം തിരുപ്പട്ടം സ്വീകരിക്കുന്നതാണ്. പൗരോഹിത്യ തിരുപ്പട്ട സ്വീകരണത്തിലും പ്രഥമ വിശുദ്ധ കുർബാനയിലും തുടർന്ന് നടക്കുന്ന സഹോദരസ്നേഹ വിരുന്നിലും പങ്കെടുക്കാൻ നിങ്ങളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു.',
      dateLabel: 'തീയതി',
      dateValue: 'ഡിസംബർ 30',
      dateSub: '2026 · ബുധനാഴ്ച',
      timeLabel: 'സമയം',
      timeValue: '2:15 PM',
      timeSub: '',
      churchName: 'സെന്റ് ജോസഫ് പള്ളി',
      churchAddr1: 'പുന്നക്കുന്നത്തുശ്ശേരി',
      churchAddr2: 'കേരളം, ഇന്ത്യ',
      calendarBtn: 'കലണ്ടറിൽ ചേർക്കുക',
      directionsBtn: 'വഴി കണ്ടെത്തുക',
    },
    order: {
      label: 'പരിപാടി ക്രമം',
      title: 'പൗരോഹിത്യ തിരുപ്പട്ട സ്വീകരണ ശുശ്രൂഷ',
      items: [
        {
          time: '2:00 PM',
          title: 'മെത്രാനെ സ്വീകരിക്കൽ',
          desc: '',
        },
        {
          time: '2:15 PM',
          title: 'ഘോഷയാത്ര',
          desc: '',
        },
        {
          time: '2:30 PM',
          title: 'പൗരോഹിത്യ തിരുപ്പട്ട സ്വീകരണ കർമ്മം',
          desc: '',
        },
        {
          time: '3:30 PM',
          title: 'നവാഭിഷിക്ത വൈദികൻ അർപ്പിക്കുന്ന പ്രഥമ വിശുദ്ധ കുർബാന',
          desc: '',
        },
        {
          time: '5:00 PM',
          title: 'സ്വീകരണം',
          desc: '',
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
    livestream: {
      label: 'ഓൺലൈനായി പങ്കുചേരുക',
      platformLabel: 'യൂട്യൂബ് തത്സമയം',
      title: 'ആഘോഷം തത്സമയം കാണുക',
      description: 'ഡിസംബർ 30-ന് ഉച്ചകഴിഞ്ഞ് 2:15 മണിക്ക് ശുശ്രൂഷ ആരംഭിക്കുമ്പോൾ യൂട്യൂബ് തത്സമയ സംപ്രേഷണം ഇവിടെ ലഭ്യമാകും.',
      upcomingButton: 'തത്സമയ സംപ്രേഷണം 2:15 മണിക്ക്',
      linkPendingButton: 'യൂട്യൂബ് ലിങ്ക് ഉടൻ ലഭ്യമാകും',
      watchButton: 'യൂട്യൂബിൽ തത്സമയം കാണുക',
      notStartedMessage: 'തത്സമയ സംപ്രേഷണം ഇതുവരെ ആരംഭിച്ചിട്ടില്ല. 2026 ഡിസംബർ 30-ന് ഉച്ചകഴിഞ്ഞ് 2:15 മണിക്ക് വീണ്ടും സന്ദർശിക്കുക.',
      linkPendingMessage: 'യൂട്യൂബ് ലിങ്ക് ഇതുവരെ ചേർത്തിട്ടില്ല. ശുശ്രൂഷയ്ക്ക് അടുത്ത് വീണ്ടും പരിശോധിക്കുക.',
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
      parish: '',
      soliDeo: 'ദൈവത്തിന് മാത്രം മഹത്വം',
    },
    toggle: {
      en: 'EN',
      ml: 'മലയാളം',
    },
  },
};
