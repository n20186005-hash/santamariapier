import type { Lang } from './utils';

type T = { zh: string; en: string; pt: string; cri?: string };

export const t = (s: Record<string, string> | string, lang: Lang): string =>
  typeof s === 'string' ? s : (s[lang] || s.pt || '');

// ── Nav ──
export const nav = {
  overview: { zh: `前言`, en: `Preamble`, pt: `Preâmbulo`, cri: `Preâmbulu` } as T,
  highlights: { zh: `亮点`, en: `Highlights`, pt: `Destaques`, cri: `Destaki` } as T,
  guide: { zh: `游览指南`, en: `Guide`, pt: `Guia`, cri: `Gia` } as T,
  transport: { zh: `交通`, en: `Transport`, pt: `Transporte`, cri: `Transporti` } as T,
  reviews: { zh: `评价`, en: `Reviews`, pt: `Avaliações`, cri: `Avaliason` } as T,
  encyclopedia: { zh: `百科`, en: `Encyclopedia`, pt: `Enciclopédia`, cri: `Enciklopédia` } as T,
  ecology: { zh: `生态`, en: `Ecology`, pt: `Ecologia`, cri: `Ekologia` } as T,
  gallery: { zh: `图集`, en: `Gallery`, pt: `Galeria`, cri: `Galeria` } as T,
  faq: { zh: `问答`, en: `FAQ`, pt: `Perguntas`, cri: `Purguntas` } as T,
};

// ── Hero ──
export const hero = {
  title: {
    zh: `圣玛丽亚<br/><span class="italic text-[color:var(--color-sun)]">栈桥</span>`,
    en: `The Pier of<br/><span class="italic text-[color:var(--color-sun)]">Santa Maria</span>`,
    pt: `O <span class="italic text-[color:var(--color-sun)]">Pontão</span><br/>de Santa Maria`,
    cri: `Puntan<br/><span class="italic text-[color:var(--color-sun)]">di Santa Maria</span>`,
  } as T,
  subtitle: {
    zh: `圣玛丽亚栈桥 · 萨尔岛南部伸入大西洋的木质栈桥 —— 清晨的渔获拍卖、随波停泊的彩绘渔船，以及连接 Praia de Santa Maria 绝美白沙滩的起点，是体验佛得角原生态渔民文化的核心地标。`,
    en: `The Pier of Santa Maria · a timber jetty reaching into the Atlantic off southern Sal — dawn fish auctions, painted boats at their moorings, and the gateway to Praia de Santa Maria's white sand: the heart of Cape Verde's raw fishing culture.`,
    pt: `O Pontão de Santa Maria · uma ponte de madeira que se estende pelo Atlântico no sul do Sal — leilões de peixe ao amanhecer, barcos pintados nas amarrações e a porta da areia branca da Praia de Santa Maria, o coração da cultura pesqueira de Cabo Verde.`,
    cri: `Puntan di Santa Maria · un ponton di madeira na Atlántiku di Sul di Sal — vendason di piski na madrugada, barquinhu pintadu na amarason y entrada pa aria branku di Praia di Santa Maria, korason di kultura peskador di Cabo Verde.`,
  } as T,
  viewMap: {
    zh: `在 Google 地图上查看位置`,
    en: `View location on Google Maps`,
    pt: `Ver a localização no Google Maps`,
    cri: `Bitxá local na Google Maps`,
  } as T,
  statLength: { zh: `评分`, en: `Rating`, pt: `Avaliação`, cri: `Avaliasan` } as T,
  statReviews: { zh: `评价`, en: `reviews`, pt: `avaliações`, cri: `avaliason` } as T,
  statFalls: { zh: `类型`, en: `Type`, pt: `Tipo`, cri: `Tipu` } as T,
  statFlow: { zh: `所在地`, en: `Location`, pt: `Local`, cri: `Lugar` } as T,
  ratingVal: { zh: `4.5`, en: `4.5`, pt: `4.5`, cri: `4.5` } as T,
  reviewsVal: { zh: `7,420`, en: `7,420`, pt: `7.420`, cri: `7.420` } as T,
  categoryVal: { zh: `旅游胜地`, en: `Tourist attraction`, pt: `Atração turística`, cri: `Atrazon turístiku` } as T,
  statusVal: { zh: `暂停营业`, en: `Temporarily closed`, pt: `Temporariamente encerrado`, cri: `Tampam provizóriu` } as T,
  chip1: { zh: `渔获拍卖`, en: `Fish auction`, pt: `Leilão do peixe`, cri: `Vendason di piski` } as T,
  chip2: { zh: `渔民文化`, en: `Fishing culture`, pt: `Cultura pesqueira`, cri: `Kultura peskador` } as T,
  chip3: { zh: `白沙海滩`, en: `White-sand beach`, pt: `Praia de areia branca`, cri: `Praia di aria branku` } as T,
  chip4: { zh: `旅游胜地`, en: `Tourist attraction`, pt: `Atração turística`, cri: `Atrazon turístiku` } as T,
};

// ── Manifesto (网站前言) ──
export const manifesto = {
  sectionNum: { zh: `前言`, en: `Preamble`, pt: `Preâmbulo`, cri: `Preâmbulu` } as T,
  heading: {
    zh: `一座桥，<br/><em class="text-[color:var(--color-emerald)]">半座岛的渔火</em>`,
    en: `One pier.<br/><em class="text-[color:var(--color-emerald)]">Half an island's fishing soul.</em>`,
    pt: `Um pontão.<br/><em class="text-[color:var(--color-emerald)]">Metade da alma pescadora da ilha.</em>`,
    cri: `Un ponton.<br/><em class="text-[color:var(--color-emerald)]">Metadi di alma peskador di ilha.</em>`,
  } as T,
  subheading: { zh: `致每一位抵达萨尔岛的旅人`, en: `To every traveller who reaches Sal`, pt: `A todo viajante que chega a Sal`, cri: `Pa kaminhu viajanti ki txiga na Sal` } as T,
  p1: {
    zh: `欢迎来到圣玛丽亚栈桥。当地人习惯称它为"Pontão"——一座从 Praia de Santa Maria 白沙滩伸入大西洋的木质栈桥。它既不是景点也不是公园，而是圣玛丽亚镇最鲜活的脉搏：每天清晨，归航的渔船在这里卸下渔获，码头上响起此起彼伏的叫卖与拍卖。`,
    en: `Welcome to the Pier of Santa Maria. Locals simply call it the "Pontão" — a timber jetty stretching from the white sand of Praia de Santa Maria into the Atlantic. It is neither a theme park nor a museum, but the liveliest pulse of Santa Maria town: every dawn the fishing boats come home and the pier fills with the shouts and bidding of the fish auction.`,
    pt: `Bem-vindo ao Pontão de Santa Maria. Os locais chamam-no simplesmente de "Pontão" — uma ponte de madeira que se estende da areia branca da Praia de Santa Maria para o Atlântico. Não é parque nem museu, mas o pulso mais vivo da vila de Santa Maria: cada amanhecer os barcos de pesca voltam e o pontão enche-se de gritos e licitações do leilão do peixe.`,
    cri: `Bem-vindu na Puntan di Santa Maria. Purtubanu txoma-l "Puntan" — un ponton di madeira ki stende di aria branku di Praia di Santa Maria pa Atlántiku. Nha é parki ni muzeu, ma pulsason más vivu di Santa Maria: kadankada burakinhu di piska volta y ponton txiga xintidu ku gritus y vendason di piski.`,
  } as T,
  p2: {
    zh: `这里没有门票、没有围栏——只有海风、咸腥的渔网与一排排随浪轻摇的彩绘渔船。清晨是码头最热闹的时候，渔妇们分拣叫卖，金枪鱼与鲯鳅在木板上闪光；黄昏时分，栈桥又变作全镇最浪漫的落日看台。`,
    en: `There are no tickets, no fences — only sea wind, the salt tang of nets and rows of painted boats rocking on the swell. Dawn is the pier's busiest hour, as the fishwives sort and call out their catch and tuna and dolphinfish glint on the planks; at dusk the jetty turns into the town's most romantic sunset stand.`,
    pt: `Não há bilhete nem vedação — só vento do mar, o cheiro salgado das redes e filas de barcos pintados a balançar na ondulação. A madrugada é a hora mais agitada do pontão, as peixeiras separam e anunciam o pescado, o atum e a dourada brilham nas tábuas; ao entardecer a ponte vira a arquibancada mais romântica da vila.`,
    cri: `Nha ten bilheti ni barreira — so ventu di mar, cheiru salgadu di rêdi y filera di barquinhu pintadu balansandu. Madrugada é ora más animadu di ponton, peixeira separa y grita so piski, atum y doradu brilha na táboa; na fin di tardi ponton txiga móre romántiku di vila.`,
  } as T,
  p3: {
    zh: `作为一家独立科普团队，我们搭建本网站，不仅为了告诉你栈桥在哪里，更想邀请你以"见证者"而非"旁观者"的身份来到这里。当你站在被无数渔鞋磨亮的木板上，你既是圣玛丽亚渔火千年的见证者，也是这片海岸得以延续的共谋者。`,
    en: `As an independent editorial team, we built this site not only to tell you where the pier is, but to invite you to arrive as a witness rather than a mere bystander. When you stand on planks polished by countless fishing boots, you become both a witness to Santa Maria's age-old fishing lights and a co-keeper of its continuing coast.`,
    pt: `Como uma equipe editorial independente, criamos este site não apenas para dizer onde fica o pontão, mas para convidá-lo a chegar como testemunha e não apenas espectador. Quando pisa nas tábuas polidas por inúmeras botas de pescador, torna-se testemunha dos milénios de luzes pesqueiras de Santa Maria e co-zelador da sua costa.`,
    cri: `Komo ekipa editoriál independenti, nós fta site nha pa fla ondi ponton fika, ma pa konvida-bu txiga komu testemunha y nha komu espetador. Kuandu bu pisa na táboa polidu pa botas di piskador, bu fika testemunha di miléniu di luz peskador di Santa Maria y kuzelador di sua kosta.`,
  } as T,
  closing: {
    zh: `带走一张渔火的照片，留下栈桥本来的样子。<br/>让"Pontão"，在每个清晨依旧为圣玛丽亚闪烁。`,
    en: `Take a photo of the fishing lights. Leave the pier as you found it.<br/>Let the Pontão keep glowing for Santa Maria, every single dawn.`,
    pt: `Leve uma foto das luzes pesqueiras. Deixe o pontão como o encontrou.<br/>Que o Pontão continue a brilhar para Santa Maria, a cada amanhecer.`,
    cri: `Leva un foto di luz peskador. Deixa ponton komu bu diskobri-l.<br/>Ku Pontan kontinua brilha pa Santa Maria, kadankada.`,
  } as T,
  chip1: { zh: `木质栈桥`, en: `Wooden pier`, pt: `Pontão de madeira`, cri: `Ponton di madeira` } as T,
  chip2: { zh: `渔获交易`, en: `Fish trade`, pt: `Comércio do peixe`, cri: `Kumérsiu di piski` } as T,
  chip3: { zh: `白沙海滩`, en: `White-sand beach`, pt: `Praia de areia branca`, cri: `Praia di aria branku` } as T,
  chip4: { zh: `圣玛丽亚 · 佛得角`, en: `Santa Maria · Cabo Verde`, pt: `Santa Maria · Cabo Verde`, cri: `Santa Maria · Cabo Verde` } as T,
};

// ── Highlights ──
export const highlights = {
  sectionNum: { zh: `游览亮点`, en: `Highlights`, pt: `Destaques`, cri: `Destaki` } as T,
  heading: {
    zh: `三种<em class="text-[color:var(--color-sun)]">体验</em>`,
    en: `Three ways<br/><em class="text-[color:var(--color-sun)]">to feel it</em>`,
    pt: `Três formas<br/><em class="text-[color:var(--color-sun)]">de senti-lo</em>`,
    cri: `Tres manera<br/><em class="text-[color:var(--color-sun)]">di sinti-l</em>`,
  } as T,
  items: [
    {
      icon: '🐟', num: '01',
      title: { zh: `凝望渔获拍卖`, en: `Watch the fish auction`, pt: `Ver o leilão do peixe`, cri: `Bitxá vendason di piski` } as T,
      desc: { zh: `清晨五六点，归航的渔船在栈桥卸货，渔妇们按种类与鲜度叫卖、过秤、装筐。这是圣玛丽亚最原生态的市集，也是了解佛得角渔业的第一现场。`, en: `Around five or six in the morning the boats unload at the jetty and the fishwives call, weigh and basket the catch by species and freshness. It is Santa Maria's rawest market and your front-row seat to Cape Verdean fishing.`, pt: `Pelas cinco ou seis da manhã os barcos descarregam no pontão e as peixeiras anunciam, pesam e cestam o pescado por espécie e frescura. É o mercado mais puro de Santa Maria e a primeira fila para a pesca de Cabo Verde.`, cri: `Pelas 5 o 6 di madrugada barquinhu diskarrega na ponton y peixeira grita, pesa y meti piski na kesta. É móre di Santa Maria y bu priméira fila pa piska di Cabo Verde.` } as T,
      img: '/gallery/the-pier-of-santa-maria-1.jpg',
    },
    {
      icon: '🚤', num: '02',
      title: { zh: `彩绘渔船`, en: `The painted boats`, pt: `Os barcos pintados`, cri: `Barquinhu pintadu` } as T,
      desc: { zh: `一艘艘手写船名、刷着蓝绿黄三色的小渔船停泊在栈桥两侧。它们白天出海、傍晚归航，是萨尔岛渔民与大海之间最朴素也最浪漫的纽带。`, en: `Handsome little boats with hand-lettered names and blue-green-yellow paint moor along both sides of the jetty. They sail by day and return at dusk — the plainest, most romantic tie between Sal's fishers and the sea.`, pt: `Pequenos barcos com nomes pintados à mão e tinta azul-verde-amarela atracam dos dois lados do pontão. Saem de dia e voltam ao entardecer — o elo mais simples e romântico entre os pescadores do Sal e o mar.`, cri: `Barquinhu ku nomi na manu y kór azul-verdri-amarelu atraka nos dois ladus di ponton. Sai di dia y volta na fin di tardi — elo más simpli y romántiku antri piskador di Sal y mar.` } as T,
      img: '/gallery/the-pier-of-santa-maria-2.jpg',
    },
    {
      icon: '🌅', num: '03',
      title: { zh: `白沙日落`, en: `White-sand sunset`, pt: `Pôr do sol na areia`, cri: `Pôr di sol na aria` } as T,
      desc: { zh: `黄昏时分，栈桥尽头正对西海。太阳沉入大西洋，整片 Praia de Santa Maria 被染成金红。许多游客把清晨看渔获与黄昏送落日，安排在同一程里。`, en: `At dusk the far end of the jetty faces the open west. The sun drops into the Atlantic and all of Praia de Santa Maria glows gold and red. Many visitors pair the morning auction with the evening sunset in a single trip.`, pt: `Ao entardecer a ponta do pontão enfrenta o oeste aberto. O sol cai no Atlântico e toda a Praia de Santa Maria fica a ouro e vermelho. Muitos visitantes juntam o leilão da manhã com o pôr do sol da tarde numa só viagem.`, cri: `Na fin di tardi ponta di ponton txiga oesti. Sol kai na Atlántiku y Praia di Santa Maria fika tugadu di oru y verdéri. Barantes visitanti junta vendason di manhan ku pôr di sol di tardi.` } as T,
      img: '/gallery/the-pier-of-santa-maria-3.jpg',
    },
  ],
};

// ── Rebuild Update (栈桥重建通告) ──
export const rebuild = {
  sectionNum: { zh: `重建通告`, en: `Rebuild update`, pt: `Atualização da reconstrução`, cri: `Atualizason di rekonstruson` } as T,
  heading: {
    zh: `目前栈桥重建中<br/><em class="text-[color:var(--color-sun)]">我们同步建设进度</em>`,
    en: `The pier is under reconstruction<br/><em class="text-[color:var(--color-sun)]">we track the progress</em>`,
    pt: `O pontão está em reconstrução<br/><em class="text-[color:var(--color-sun)]">vamos acompanhar o progresso</em>`,
    cri: `Puntan sta na rekonstruson<br/><em class="text-[color:var(--color-sun)]">nós ta sigi progreso</em>`,
  } as T,
  lede: {
    zh: `Google 地图显示“暂停营业”并非整片海滩关闭：封闭的是木质栈桥主体（<em>Pontão de Santa Maria</em>），沙滩与近海仍开放。`,
    en: `“Temporarily closed” on Google Maps does not mean the whole beach is closed: the fenced-off area is the timber jetty itself (<em>Pontão de Santa Maria</em>). The beach and nearshore remain open.`,
    pt: `“Temporariamente encerrado” no Google Maps não significa que toda a praia esteja fechada: a área vedada é o próprio pontão de madeira (<em>Pontão de Santa Maria</em>). A praia e o mar raso continuam abertos.`,
    cri: `“Tampam provizóriu” na Google Maps ka ta fla ki praia tudu fechadu: área ku vedason é propiu ponton di madeira (<em>Puntan di Santa Maria</em>). Praia y mar ribeira inda sta abértu.`,
  } as T,
  blocks: [
    {
      kicker: { zh: `2024 年 10 月`, en: `Oct 2024`, pt: `Out. 2024`, cri: `Outubru 2024` } as T,
      title: { zh: `巨浪损毁栈桥主体`, en: `Storm swell damaged the structure`, pt: `A ondulação destruiu a estrutura`, cri: `Mári estraga struktur` } as T,
      body: {
        zh: `这座 <em>Pontão de Santa Maria</em> 指的是延伸入海的木质码头本身。2024 年 10 月热带风暴带来的巨浪冲垮了大半结构，栈道与支撑柱大面积损毁，存在坍塌风险，随后被官方封锁，禁止行人登上栈桥。<br/><br/>它不仅是观景点，更是渔民卸货与售卖渔获、游客浮潜与打卡的关键平台；损毁后这些活动被迫转移或暂停。`,
        en: `<em>Pontão de Santa Maria</em> refers to the timber jetty reaching into the sea — not the whole beach. In Oct 2024, tropical-storm swell tore away much of the structure, damaging planks and supporting posts and creating a collapse risk. Authorities fenced it off and banned access to the pier.<br/><br/>This is not only a photo spot: fishers land and sell the catch here, and visitors often start snorkelling and walks from the pier. With the damage, those routines have moved or paused.`,
        pt: `<em>Pontão de Santa Maria</em> refere-se ao cais de madeira que avança para o mar — não à praia inteira. Em outubro de 2024, a ondulação de uma tempestade tropical derrubou grande parte da estrutura, com danos extensos nas tábuas e pilares e risco de colapso. A zona foi vedada e o acesso ao pontão foi proibido.<br/><br/>Não é só um ponto de fotos: aqui os pescadores descarregam e vendem o pescado, e muitos visitantes iniciam snorkel e passeios a partir do pontão. Com os danos, essas rotinas foram deslocadas ou suspensas.`,
        cri: `<em>Puntan di Santa Maria</em> é propiu ponton di madeira ki ta bai pa mar — ka é praia tudu. Na Outubru 2024, ondason di tempestadi tropikál derruba grande parti di struktur, danifika táboa y pilar, ku riska di kai. Autoridadi fecha ku vedason y proibi entrada na ponton.<br/><br/>Nha é só lugal di foto: piskador ta diskarrega y bendi piski li, y turista txoma-l komu pontu di saida pa snorkel y paseiu. Dipôs di danu, kel rotinas mudadu o paradu.`,
      } as T,
    },
    {
      kicker: { zh: `2025 年 9 月—2027 年上半年`, en: `Sep 2025—H1 2027`, pt: `Set. 2025—1.º sem. 2027`, cri: `Set. 2025—priméru semestri 2027` } as T,
      title: { zh: `890 万欧元 · 18 个月工期`, en: `€8.9M · 18-month schedule`, pt: `8,9 M€ · 18 meses`, cri: `8,9 M€ · 18 mez` } as T,
      body: {
        zh: `2025 年 9 月政府敲定重建合同，预算约 890 万欧元，工期 18 个月，预计到 2027 年上半年完工。施工期间全程围挡，游客无法走上栈桥。<br/><br/>Google 地图依据现场管制与官方信息，将景点条目标注为 “暂停营业（Temporarily Closed）”。`,
        en: `In Sep 2025, the government finalised a reconstruction contract with a budget of about €8.9 million and an 18-month schedule, aiming for completion in the first half of 2027. The site remains fenced during works, and visitors cannot walk onto the pier.<br/><br/>Based on official controls and on-site restrictions, Google Maps marks the attraction as “Temporarily Closed”.`,
        pt: `Em setembro de 2025, o governo fechou o contrato de reconstrução, com orçamento de cerca de 8,9 milhões de euros e prazo de 18 meses, com previsão de conclusão no primeiro semestre de 2027. Durante as obras, o local permanece vedado e não é possível caminhar sobre o pontão.<br/><br/>Com base no controlo oficial e nas restrições no terreno, o Google Maps assinala a atração como “Temporariamente encerrado”.`,
        cri: `Na Setenbru 2025, govérnu fecha kontratu di rekonstruson, ku orzamentu di mas o ménus 8,9 milhon di euro y prazu di 18 mez, ku previsão di termina na priméru semestri di 2027. Durante obra, lugal ta fika ku vedason y turista ka podi subi na ponton.<br/><br/>Pamodi kontrolu ofisial y restrison na teren, Google Maps ta marca atrason komu “Tampam provizóriu”.`,
      } as T,
    },
    {
      kicker: { zh: `地图标注逻辑`, en: `How the map label works`, pt: `Como funciona a marcação`, cri: `Kuma marcaçon ta funsiona` } as T,
      title: { zh: `栈桥景点 ≠ 海滩`, en: `Pier ≠ the whole beach`, pt: `Pontão ≠ praia inteira`, cri: `Puntan ≠ praia tudu` } as T,
      body: {
        zh: `Google 地图把栈桥码头本身作为独立景点（The Pier of Santa Maria）列出；海滩（Praia de Santa Maria）依旧开放，没有停业标记。<br/><br/>许多游客会把“海边沙滩”和“栈桥景点”混为一谈，从而误以为整片海关闭。实际情况是：<strong>沙滩可正常游玩，栈桥区域因危险与施工禁止进入</strong>。`,
        en: `On Google Maps, the pier itself is listed as a standalone attraction (“The Pier of Santa Maria”). The beach (“Praia de Santa Maria”) remains open and is not marked as closed.<br/><br/>Many travellers confuse “the beach” with “the pier attraction” and assume the whole coastline is shut. In reality: <strong>the beach is open; only the pier area is off-limits due to danger and construction</strong>.`,
        pt: `No Google Maps, o próprio pontão aparece como atração separada (“The Pier of Santa Maria”). A praia (“Praia de Santa Maria”) continua aberta e não está marcada como fechada.<br/><br/>Muitos visitantes confundem “praia” com “pontão” e pensam que toda a orla está encerrada. Na prática: <strong>a praia está aberta; apenas a área do pontão é proibida por segurança e obras</strong>.`,
        cri: `Na Google Maps, propiu puntan ta aparési komu atrason separadu (“The Pier of Santa Maria”). Praia (“Praia de Santa Maria”) inda sta abértu y ka ten marka di fechadu.<br/><br/>Txeu viajanti ta misturá “praia” ku “ponton” y pensa ki kosta tudu fechadu. Ma na verdadi: <strong>praia sta abértu; só área di puntan é proibidu pamodi perigu y obra</strong>.`,
      } as T,
    },
  ],
  tipLabel: { zh: `现在去的方式`, en: `If you visit now`, pt: `Se for agora`, cri: `Si bu bai agora` } as T,
  tips: [
    { zh: `可以在 Praia de Santa Maria 沙滩远拍栈桥工地，但<em>不能</em>踏上栈道。`, en: `You can photograph the site from Praia de Santa Maria, but you <em>cannot</em> walk onto the pier.`, pt: `Pode fotografar a obra a partir da Praia de Santa Maria, mas <em>não</em> é permitido caminhar sobre o pontão.`, cri: `Bu pode tirá retratu di obra na Praia di Santa Maria, ma bu <em>ka pode</em> subi na ponton.` } as T,
    { zh: `渔民临时在沙滩岸边摆摊卖鱼；原本栈桥上的市集已迁移到海滩侧边。`, en: `Fish sellers are temporarily set up on the beach; the market that used to run on the pier has shifted to the beach side.`, pt: `Os vendedores de peixe estão provisoriamente na areia; o mercado que antes funcionava no pontão foi deslocado para o lado da praia.`, cri: `Vendedór di piski ta sta provizóriu na areia; merkadu ki era na ponton muda pa ladun di praia.` } as T,
    { zh: `以现场围栏与官方通告为准，切勿翻越进入施工区。`, en: `Follow fences and official notices on site, and never cross into the work zone.`, pt: `Respeite as vedações e avisos oficiais no local; não entre na zona de obra.`, cri: `Sigi vedason y avisus ofisial na lugal; ka entra na zona di obra.` } as T,
  ],
};

// ── Practical Info ──
export const practical = {
  sectionNum: { zh: `实用游览指南`, en: `Practical Guide`, pt: `Guia prático`, cri: `Gia prátiku` } as T,
  heading: { zh: `出发前<em class="text-[color:var(--color-emerald)]">必读</em>`, en: `Read this<br/><em class="text-[color:var(--color-emerald)]">before you go</em>.`, pt: `Leia<br/><em class="text-[color:var(--color-emerald)]">antes de ir</em>.`, cri: `Lê<br/><em class="text-[color:var(--color-emerald)]">antis di bai</em>.` } as T,
  cards: [
    { icon: '🕒', label: { zh: `当前状态`, en: `Status`, pt: `Estado`, cri: `Stadu` } as T, value: { zh: `暂停营业`, en: `Temporarily closed`, pt: `Temporariamente encerrado`, cri: `Tampam provizóriu` } as T, desc: { zh: `2024 年 10 月热带风暴巨浪导致栈桥木结构大面积损毁，现围挡封闭重建，因此在 Google 地图上标注为“暂停营业”。<strong>海滩本身仍开放</strong>。`, en: `In Oct 2024, tropical-storm swell severely damaged the wooden structure. The pier is now fenced off for reconstruction, so Google Maps marks it as “temporarily closed”. <strong>The beach itself remains open</strong>.`, pt: `Em outubro de 2024, a ondulação de uma tempestade tropical causou danos extensos na estrutura de madeira. O pontão está vedado para reconstrução e por isso o Google Maps o marca como “temporariamente encerrado”. <strong>A praia continua aberta</strong>.`, cri: `Na Outubru 2024, ondason di tempestadi tropikál danifika txeu struktur di madeira. Puntan sta ku vedason pa rekonstruson, y pamodi es, Google Maps ta marca-l komu “tampam provizóriu”. <strong>Praia inda sta abértu</strong>.` } as T },
    { icon: '🎟️', label: { zh: `门票与入口`, en: `Ticket & entry`, pt: `Ingresso`, cri: `Bilheti` } as T, value: { zh: `海滩开放`, en: `Beach open`, pt: `Praia aberta`, cri: `Praia abértu` } as T, desc: { zh: `沙滩与步道无需门票，可正常通行；但栈桥区域围栏封闭，禁止进入或翻越。`, en: `The beach and promenade are free and open; the pier area is fenced off and entry is prohibited.`, pt: `A praia e a avenida marginal são gratuitas e abertas; a área do pontão está vedada e o acesso é proibido.`, cri: `Praia y marginal é grátis y abértu; área di puntan sta ku vedason y entrada é proibidu.` } as T },
    { icon: '⏱️', label: { zh: `游览时长`, en: `Duration`, pt: `Duração`, cri: `Durasan` } as T, value: '30 min–2 h', desc: { zh: `只看渔获拍卖约 30 分钟；加上散步、看船、拍照与等一场日落，可轻松逗留 1–2 小时。`, en: `The auction alone: ~30 min. Add a stroll, the boats, photos and a sunset and you can linger 1–2 h.`, pt: `Só o leilão: ~30 min. Com passeio, barcos, fotos e um pôr do sol, dá para ficar 1–2 h.`, cri: `Só vendason: ~30 min. Kun paseiu, barquinhu, foto y un pôr di sol, bu fika 1–2 h.` } as T },
    { icon: '⚠️', label: { zh: `重要贴士`, en: `Key tips`, pt: `Dicas`, cri: `Dika` } as T, value: '', desc: '', tips: [{ zh: `清晨是渔获拍卖的唯一时段，想看热闹请赶早（约 05:00–08:00）`, en: `The fish auction happens only at dawn — come early (≈05:00–08:00) for the action`, pt: `O leilão do peixe só acontece de madrugada — venha cedo (≈05:00–08:00) para ver`, cri: `Vendason di piski só na madrugada — txiga sedu (≈05:00–08:00)` } as T, { zh: `栈桥木板湿滑、有缝隙，请注意脚下，勿翻越护栏或靠近作业区`, en: `Planks are wet and gapped — watch your step, don't climb rails or enter the work zone`, pt: `As tábuas são molhadas e com frestas — cuidado com o passo, não suba nas grades nem entre na zona de trabalho`, cri: `Táboa molhadu y ku fresta — kuidadu ku pásu, nha sobi grades ni entra na zona di trabadju` } as T, { zh: `岛上日照极强、无遮荫，请带足饮水与防晒`, en: `Intense sun and no shade — bring plenty of water and sun protection`, pt: `Sol forte e sem sombra — leve água e proteção solar`, cri: `Sol forti y nha ten sombra — leva agua y protesons di sol` } as T] },
  ],
};

// ── Transport ──
export const transport = {
  sectionNum: { zh: `交通指南`, en: `Transport`, pt: `Transporte`, cri: `Transporti` } as T,
  heading: { zh: `三种方式<br/><em class="text-[color:var(--color-emerald)]">到达栈桥</em>`, en: `Three ways<br/><em class="text-[color:var(--color-emerald)]">to arrive</em>`, pt: `Três formas<br/><em class="text-[color:var(--color-emerald)]">de chegar</em>`, cri: `Tres manera<br/><em class="text-[color:var(--color-emerald)]">di txiga</em>` } as T,
  subtitle: { zh: `栈桥位于圣玛丽亚镇中心、Praia de Santa Maria 海滩北端，从绝大多数酒店步行即可到达，无公交直达，建议步行、租车或出租车。`, en: `The pier sits at the north end of Praia de Santa Maria, in the heart of Santa Maria town. It is walkable from most hotels — there is no direct bus, so walk, rent a car or take a taxi.`, pt: `O pontão fica no extremo norte da Praia de Santa Maria, no centro da vila de Santa Maria. Dá para ir a pé da maioria dos hotéis — não há autocarro direto, por isso caminhe, alugue carro ou use táxi.`, cri: `Ponton fika na ponta norti di Praia di Santa Maria, sentru di vila. Pode txiga a pé di barantes hotel — nha ten autokaru diretu, enton kaminha, aluga karru o táxi.` } as T,
  items: [
    { icon: '🚶', title: { zh: `从镇中心步行`, en: `Walk from town centre`, pt: `A pé do centro`, cri: `A pé di sentru` } as T, meta: '~0.5–1 km · 5–10 min', details: [{ icon: '🏖️', text: { zh: `<strong>沿海步道</strong> · 从圣玛丽亚镇中心沿海滨大道（Avenida da Praia）向南步行，约 5–10 分钟即可抵达栈桥与渔港。`, en: `<strong>Seafront promenade</strong> · From the centre of Santa Maria, walk south along the beachfront avenue (Avenida da Praia); the pier and fishing harbour are about 5–10 min away.`, pt: `<strong>Avenida marginal</strong> · Do centro de Santa Maria, siga a pé para sul pela Avenida da Praia; o pontão e o porto de pesca ficam a cerca de 5–10 min.`, cri: `<strong>Marginal</strong> · Di sentru di Santa Maria, kaminha sul na Avenida da Praia; ponton y portu di piska fika a 5–10 min.` } as T }, { icon: '🚕', text: { zh: `<strong>出租车</strong> · 从岛上任一酒店打车到栈桥，车费便宜、随叫随到，适合携带行李或烈日时段。`, en: `<strong>Taxi</strong> · A taxi from any hotel on the island to the pier is cheap and quick — handy with luggage or in the midday sun.`, pt: `<strong>Táxi</strong> · Um táxi de qualquer hotel da ilha até o pontão é barato e rápido — útil com bagagem ou no sol do meio-dia.`, cri: `<strong>Táxi</strong> · Un táxi di kalker hotel di ilha pa ponton é baratu y rapinhu — util ku bagagem o na sol di dia.` } as T }] },
    { icon: '✈️', title: { zh: `从 Espargos 机场`, en: `From Espargos airport`, pt: `Do aeroporto de Espargos`, cri: `Di aeroportu di Espargos` } as T, meta: '~20 km · 25 min', details: [{ icon: '🚐', text: { zh: `<strong>接机 + 顺路</strong> · 从 Amílcar Cabral 国际机场出发约 20 公里，多数游客会先入住圣玛丽亚镇，栈桥即在镇内步行范围内。`, en: `<strong>Transfer + stop</strong> · About 20 km from Amílcar Cabral international airport; most visitors stay in Santa Maria town, with the pier within walking distance.`, pt: `<strong>Transfer + paragem</strong> · Cerca de 20 km do aeroporto internacional Amílcar Cabral; a maioria fica em Santa Maria, com o pontão a poucos passos.`, cri: `<strong>Transfer + parada</strong> · Cerca di 20 km di aeroportu Amílcar Cabral; barantes turista fika na Santa Maria, ponton a pouku pásu.` } as T }, { icon: '🚗', text: { zh: `<strong>自驾</strong> · 沿 EN1 从机场南下至圣玛丽亚镇，按路标进入海滨停车场，最后一段为铺装路面，驾驶轻松。`, en: `<strong>Self-drive</strong> · South from the airport on the EN1 into Santa Maria, follow signs to the seafront car park; the final stretch is paved and easy.`, pt: `<strong>Carro próprio</strong> · Sul do aeroporto pela EN1 até Santa Maria, siga as indicações para o estacionamento marginal; o último trecho é asfaltado e fácil.`, cri: `<strong>Karru própiu</strong> · Sul di aeroportu na EN1 até Santa Maria, sigui signal pa parque di marginal; últimu trexu é asfaltadu y fásil.` } as T }] },
    { icon: '🚲', title: { zh: `骑行或步行`, en: `On foot / by bike`, pt: `A pé ou de bike`, cri: `A pé o di bici` } as T, meta: '平坦 · 无遮荫', details: [{ icon: '', text: { zh: `<strong>推荐</strong> · 圣玛丽亚镇地势平坦、道路整齐，骑行或步行都十分舒适；沿途即是绵延的白沙滩，随时可停下戏水。`, en: `<strong>Recommended</strong> · Santa Maria is flat and tidy, ideal on foot or by bike; the long white beach is right alongside, so you can stop for a swim anytime.`, pt: `<strong>Recomendado</strong> · Santa Maria é plana e arrumada, ideal a pé ou de bike; a longa praia branca fica ao lado, pode parar para um banho quando quiser.`, cri: `<strong>Rekomendadu</strong> · Santa Maria é planu y aruma, idial a pé o di bici; praia branku longu fika ladante, pode para pa un banhu.` } as T }] },
  ],
};

// ── Encyclopedia ──
export const encyclopedia = {
  sectionNum: { zh: `深度百科`, en: `Encyclopedia`, pt: `Enciclopédia`, cri: `Enciklopédia` } as T,
  heading: { zh: `名字、渔火与<em class="text-[color:var(--color-emerald)]">一座岛的清晨</em>`, en: `Name, fish &amp;<br/><em class="text-[color:var(--color-emerald)]"> an island's dawn</em>`, pt: `Nome, peixe e<br/><em class="text-[color:var(--color-emerald)]"> a madrugada de uma ilha</em>`, cri: `Nomi, piski y<br/><em class="text-[color:var(--color-emerald)]"> madrugada di un ilha</em>` } as T,
  subtitle: {
    zh: `从一道伸入海中的木质栈桥，到清晨那场热闹的渔获拍卖，再到小镇最浪漫的落日看台——这座码头背后，藏着圣玛丽亚几段关键的生活记忆。`,
    en: `From a timber jetty reaching into the sea, to the bustling dawn fish auction, to the town's most romantic sunset stand — behind this pier lie a few key memories of Santa Maria's everyday life.`,
    pt: `De uma ponte de madeira para o mar, ao agitado leilão do peixe ao amanhecer, à arquibancada mais romântica da vila — atrás deste pontão estão memórias essenciais do dia a dia de Santa Maria.`,
    cri: `Di un ponton di madeira pa mar, ka vendason di piski na madrugada, ka móre romántiku di vila — tras di ponton sta varias memorias di vida di Santa Maria.`,
  } as T,
  items: [
    {
      icon: '🌋',
      title: { zh: `"Pontão" 名字的由来`, en: `The name "Pontão"`, pt: `O nome "Pontão"`, cri: `Nomi "Puntan"` } as T,
      body: {
        zh: `<p>"Pontão" 在葡萄牙语中意为"突堤、栈桥"，指从岸边伸入水中的木质或石砌平台。圣玛丽亚栈桥建在 Praia de Santa Maria 北端，是数百年来渔民出海、卸货与交易的天然落点。</p><p>它并非旅游设施，而是小镇生产生活的延伸。正因如此，栈桥的朝向与长度，决定了渔船能否在风浪中安稳停泊，也决定了清晨渔获能否顺畅上岸。</p>`,
        en: `<p>"Pontão" is Portuguese for a jetty or landing stage — a timber or stone platform reaching from the shore into the water. The Pier of Santa Maria stands at the north end of Praia de Santa Maria and has been the natural point where fishers sail out, land and trade for centuries.</p><p>It is not a tourist facility but an extension of the town's working life. That is exactly why the jetty's orientation and length decide whether boats can moor safely in the swell and whether the dawn catch comes ashore smoothly.</p>`,
        pt: `<p>"Pontão" é português para pontão ou cais — uma plataforma de madeira ou pedra que avança da terra para a água. O Pontão de Santa Maria fica no extremo norte da Praia de Santa Maria e, há séculos, é o ponto natural donde os pescadores saem, atracam e negociam.</p><p>Não é instalação turística, mas extensão da vida produtiva da vila. É por isso que a orientação e o comprimento do pontão decidem se os barcos atracam seguros na ondulação e se o pescado da madrugada chega a terra sem problema.</p>`,
        cri: `<p>"Puntan" na portugês é un ponton — plataforma di madeira o di pedra ki stende di terra pa agua. Puntan di Santa Maria fika na ponta norti di Praia di Santa Maria y, durante seku, é lugal natural undi piskador sai, atraka y negosia.</p><p>Nha é instalason turístiku, ma extenson di vida di vila. É pa isu ki orientason y kumprimentu di ponton decide se barquinhu atraka siguru na mari y se piski di madrugada txiga na terra.</p>`,
      } as T,
      img: '/gallery/the-pier-of-santa-maria-4.jpg',
    },
    {
      icon: '💡',
      title: { zh: `渔获拍卖的传统`, en: `The fish-auction tradition`, pt: `A tradição do leilão`, cri: `Tradison di vendason` } as T,
      body: {
        zh: `<p>每天清晨，归航的渔船在栈桥卸下渔获，渔妇们（peixeiras）按种类、鲜度与重量现场叫卖、过秤、装筐，再由餐馆与居民分购一空。这是圣玛丽亚延续数代的生活仪式。</p><p>拍卖不只关乎买卖，更是信息的交汇：哪片海域鱼群密集、哪天风浪太大无法出海，都在这一声声叫卖里传递。游客安静旁观，便能读懂半个萨尔岛的海洋脉搏。</p>`,
        en: `<p>Every dawn the returning boats unload at the jetty and the fishwives (peixeiras) call, weigh and basket the catch by species, freshness and weight, then sell it off to restaurants and residents. It is a ritual of Santa Maria life handed down for generations.</p><p>The auction is more than trade — it is where information flows: which grounds are full of fish, which days the swell keeps boats in. Stand quietly and you can read half the ocean's pulse of Sal.</p>`,
        pt: `<p>Cada amanhecer os barcos que voltam descarregam no pontão e as peixeiras anunciam, pesam e cestam o pescado por espécie, frescura e peso, vendendo-o a restaurantes e moradores. É um ritual da vida de Santa Maria passado por gerações.</p><p>O leilão é mais que comércio — é onde a informação corre: que bancos têm peixe, que dias a ondulação impede a saída. Quem assiste em silêncio lê metade do pulso do mar do Sal.</p>`,
        cri: `<p>Kadankada barquinhu ki volta diskarrega na ponton y peixeira grita, pesa y meti piski na kesta pa espési, freskura y pesu, y bendi pa restoranti y morador. É ritual di vida di Santa Maria di gerasan pa gerasan.</p><p>Vendason nha é só kumérsiu — é undi informason korri: ki lugal ten piski, ki dia mari impidi saida. Kenha fika na silénsiu le mitadi di pulsason di mar di Sal.</p>`,
      } as T,
      img: '/gallery/the-pier-of-santa-maria-5.jpg',
    },
    {
      icon: '🌅',
      title: { zh: `彩绘渔船的故事`, en: `The painted fishing boats`, pt: `Os barcos pintados`, cri: `Barquinhu pintadu` } as T,
      body: {
        zh: `<p>萨尔岛的渔船多刷着蓝、绿、黄三色，船身上手写船名与祝福。色彩既是为了在浪里更易辨识，也是渔民家庭对平安归航的祈愿。</p><p>这些小船白天驶向近海，傍晚随落日归航、停泊在栈桥两侧。它们承载的，是佛得角"以海为田"的生存哲学，也是圣玛丽亚最上镜的风景之一。</p>`,
        en: `<p>Sal's fishing boats are painted blue, green and yellow, with hand-lettered names and blessings on the hull. The colours make them easier to spot in the swell and carry each family's wish for a safe return.</p><p>These little boats sail the nearshore by day and come home at dusk, mooring along both sides of the jetty. They carry Cape Verde's philosophy of "the sea as a field" and are among Santa Maria's most photogenic sights.</p>`,
        pt: `<p>Os barcos de pesca do Sal usam azul, verde e amarelo, com nomes e bênçãos pintados à mão no casco. As cores ajudam a avistá-los na ondulação e levam o desejo de cada família por um regresso seguro.</p><p>Estes barcos saem para a costa de dia e voltam ao entardecer, atracando dos dois lados do pontão. Carregam a filosofia de Cabo Verde de "o mar como campo" e são um dos cartões-postais de Santa Maria.</p>`,
        cri: `<p>Barquinhu di piska di Sal ten kór azul, verdri y amarelu, ku nomi y bendsan pintadu na manu. Kór ajuda txiga-l na mari y lexa desejus di familia pa volta siguru.</p><p>Barquinhu nha sai pa kosta di dia y volta na fin di tardi, atraka nos dois ladus di ponton. Nha léva filozofia di Cabo Verde di "mar komu kampu" y é un di postal di Santa Maria.</p>`,
      } as T,
      img: '/gallery/the-pier-of-santa-maria-6.jpg',
    },
    {
      icon: '🤝',
      title: { zh: `社区与在地守护`, en: `Community & stewardship`, pt: `Comunidade e zelo`, cri: `Komunidadi y zelu` } as T,
      body: {
        zh: `<p>今天的栈桥由当地渔民社区与圣玛丽亚镇共同维护，渔获交易、船只停泊都在这里有序进行。许多渔妇与船主都是土生土长的岛民，最懂这片海的脾气。</p><p>这种"社区共管"让渔业收益留在当地，也让你的到访成为守护这片海岸的一部分——请尊重作业、轻声旁观，把栈桥留给真正以海为生的人。</p>`,
        en: `<p>Today the jetty is cared for by the local fishing community together with the town of Santa Maria; the auctions and mooring run in good order. Many of the fishwives and boat owners were born on the island and know the sea's moods best.</p><p>This community stewardship keeps fishing income local and makes your visit part of protecting the coast — respect the work, watch quietly, and leave the pier to those who truly live by the sea.</p>`,
        pt: `<p>Hoje o pontão é cuidado pela comunidade pescadora com a vila de Santa Maria; leilões e amarrações correm em boa ordem. Muitas peixeiras e donos de barco são da ilha e conhecem melhor o humor do mar.</p><p>Esta gestão comunitária mantém o rendimento da pesca local e faz da sua visita parte da proteção da costa — respeite o trabalho, veja em silêncio e deixe o pontão a quem vive do mar.</p>`,
        cri: `<p>Oji ponton é kuidadu pa komunidadi peskador y vila di Santa Maria; vendason y atrakson korri na ordin. Barantes peixeira y donu di barquinhu é di ilha y konxi melhor humor di mar.</p><p>Kel gestion komunitáriu manten rendimentu di piska lokal y fa bu visita partii di protesons di kosta — respetxa trabaju, bitxá na silénsiu y dexas ponton pa kenha vida di mar.</p>`,
      } as T,
      img: '/gallery/the-pier-of-santa-maria-7.jpg',
    },
  ],
};

// ── Climate & Tides (气候与潮汐) ──
export const climate = {
  sectionNum: { zh: `气候与潮汐`, en: `Climate & Tides`, pt: `Clima e Marés` } as T,
  heading: { zh: `今天，<em class="text-[color:var(--color-emerald)]">风与光</em>的实时节拍`, en: `Today's live rhythm<br/><em class="text-[color:var(--color-emerald)]"> of wind & light</em>`, pt: `O ritmo ao vivo<br/><em class="text-[color:var(--color-emerald)]"> de vento e luz</em>` } as T,
  subtitle: { zh: `日落时间与光照角度直接决定蓝光与落日的观感。以下数据由公开 API 实时获取，供您规划行程。`, en: `Sunset time and the angle of light shape what you see. Data is fetched live from public APIs to help you plan.`, pt: `A hora do pôr do sol e o ângulo da luz definem o que vê. Dados ao vivo de APIs públicas para ajudar no planeamento.` } as T,
  sunsetLabel: { zh: `今日日落`, en: `Today's sunset`, pt: `Pôr do sol hoje` } as T,
  tideLabel: { zh: `当前潮位`, en: `Current tide`, pt: `Maré atual` } as T,
  rising: { zh: `涨潮中`, en: `Rising`, pt: `Subindo` } as T,
  falling: { zh: `退潮中`, en: `Falling`, pt: `Baixando` } as T,
  nextHigh: { zh: `下次高潮`, en: `Next high`, pt: `Próx. cheia` } as T,
  nextLow: { zh: `下次低潮`, en: `Next low`, pt: `Próx. baixa` } as T,
  loading: { zh: `正在获取实时数据…`, en: `Loading live data…`, pt: `Carregando dados…` } as T,
  error: { zh: `实时数据暂时不可用，请参考上方游览指南。`, en: `Live data unavailable — see the guide above.`, pt: `Dados indisponíveis — veja o guia acima.` } as T,
  source: { zh: `数据来源：Sunrise-Sunset.org · Open-Meteo`, en: `Source: Sunrise-Sunset.org · Open-Meteo`, pt: `Fonte: Sunrise-Sunset.org · Open-Meteo` } as T,
};

// ── Gallery ──
export const gallery = {
  sectionNum: { zh: `视觉图集`, en: `Gallery`, pt: `Galeria` } as T,
  heading: { zh: `光、岩、蓝、落日`, en: `Light. Rock. Blue. Sunset.`, pt: `Luz. Rocha. Azul. Pôr do sol.` } as T,
  viewMorePhotos: { zh: `在 Google 地图上查看更多照片`, en: `View more photos on Google Maps`, pt: `Ver mais fotos no Google Maps`, cri: `Odja más fotos na Google Maps` } as T,
};

// ── Reviews ──
export const reviews = {
  sectionNum: { zh: `游客评价`, en: `Reviews`, pt: `Avaliações` } as T,
  heading: { zh: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · 来自 4,750 位旅行者`, en: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · from 4,750 travelers`, pt: `4.3<span class="text-[color:var(--color-emerald)]">/5</span> · de 4.750 viajantes` } as T,
  viewMoreReviews: { zh: `在 Google 地图上查看更多评价`, en: `View more reviews on Google Maps`, pt: `Ver mais avaliações no Google Maps`, cri: `Odja más avaliason na Google Maps` } as T,
  items: [
    { stars: '★★★★★', date: '2025-05', title: { zh: `"正午的蓝光名不虚传"`, en: `"The noon blue lives up to it"`, pt: `"O azul do meio-dia é real"` } as T, desc: { zh: `听向导说正午来，果然没错。约 12 点站在洞口，池水蓝得像被点亮的宝石，手机都拍不出十分之一。`, en: `Our guide said come at noon — he was right. Around 12 the pool glows like a lit gem; no phone captures a tenth of it.`, pt: `O guia disse para vir ao meio-dia — tinha razão. Pelas 12 a poça brilha como gema acesa; nem o telemóvel apanha um décimo.` } as T, author: 'Marina C. · 海洋爱好者 · 🇧🇷' },
    { stars: '★★★★★', date: '2025-04', title: { zh: `"向导让旅程更有温度"`, en: `"Guides made it warmer"`, pt: `"Os guias deram calor"` } as T, desc: { zh: `买票含向导，本地小哥讲了蓝眼的光学原理和落日之窗的传说，比自己瞎逛有意义多了。`, en: `Ticket includes a guide; the local lad explained the optics of the Blue Eye and the sunset-window legend — far better than wandering alone.`, pt: `O bilhete inclui guia; o rapaz local explicou a ótica do Olho Azul e a lenda do pôr do sol — bem melhor que ir sozinho.` } as T, author: 'James W. · 🇺🇸' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2025-03', title: { zh: `"路远但值得"`, en: `"Far but worth it"`, pt: `"Longe mas vale"` } as T, desc: { zh: `从 Santa Maria 包车过来要四十分钟土路，但看到蓝眼那一刻全值了。建议自备饮水，沿途真的什么都没有。`, en: `About 40 min of track from Santa Maria by taxi, but the Blue Eye made it worthwhile. Bring your own water — there is nothing on the way.`, pt: `Cerca de 40 min de terra de Santa Maria de táxi, mas o Olho Azul compensou. Leve água — não há nada no caminho.` } as T, author: 'Lin Y. · 🇨🇳' },
    { stars: '★★★★★', date: '2025-06', title: { zh: `"落日之窗太治愈"`, en: `"The sunset window healed me"`, pt: `"A janela do sol curou-me"` } as T, desc: { zh: `看完蓝眼没走，留在落日之窗等到太阳落海。风很大但特别安静，是这趟萨尔岛之行最难忘的十分钟。`, en: `After the Eye we stayed for the sunset window until the sun hit the sea. Windy but deeply quiet — the most unforgettable ten minutes of the trip.`, pt: `Depois do Olho ficámos na janela do sol até o sol cair no mar. Vento forte mas quieto — os dez minutos mais memoráveis da viagem.` } as T, author: 'Sofía R. · 🇦🇷' },
    { stars: '★★★★★', date: '2025-02', title: { zh: `"泳池清凉舒服"`, en: `"The pool was refreshing"`, pt: `"A poça foi refrescante"` } as T, desc: { zh: `蓝眼不能下水，但旁边的火山岩潮池可以浮潜，水清见底、温度刚好，孩子玩得很开心。`, en: `You can't swim in the Eye, but the neighbouring volcanic pool is great for snorkelling — clear, just the right temperature, kids loved it.`, pt: `No Olho não se nada, mas a poça vulcânica ao lado é ótima para snorkel — água limpa, temperatura certa, as crianças adoraram.` } as T, author: 'Rafael M. · 🇧🇷' },
    { stars: '★★★★<span class="text-black/20">★</span>', date: '2024-11', title: { zh: `"鞋一定要穿对"`, en: `"Wear the right shoes"`, pt: `"Use o calçado certo"` } as T, desc: { zh: `火山岩又尖又烫，我穿凉鞋差点磨破脚。后来向导提醒才换上运动鞋。提醒后来的朋友一定穿包裹好的鞋。`, en: `The lava is sharp and hot; in sandals I nearly shredded my feet. The guide told me to switch to trainers — a tip for friends who come later: wear closed shoes.`, pt: `A lava é afiada e quente; de sandália quase cortei os pés. O guia mandou calçar ténis — aviso aos amigos: usem calçado fechado.` } as T, author: 'Wang H. · 🇨🇳' },
  ],
};

// ── Surrounding ──
export const surrounding = {
  sectionNum: { zh: `周边联动`, en: `Nearby`, pt: `Arredores` } as T,
  heading: { zh: `还可以<em class="text-[color:var(--color-emerald)]">连着玩</em>`, en: `Extend the trip<em class="text-[color:var(--color-emerald)]"> further</em>`, pt: `Estenda a viagem<em class="text-[color:var(--color-emerald)]"> ainda mais</em>` } as T,
  items: [
    { img: '/gallery/the-pier-of-santa-maria-8.jpg', title: '🏖️ Praia de Santa Maria', desc: { zh: `栈桥尽头即是无垠的金色沙滩，绵延数公里、以风帆与风筝冲浪闻名。多数游客以这片海滩为基地，步行即可串联栈桥与小镇。`, en: `Right beyond the jetty lies endless golden sand — kilometres of beach famous for windsurfing and kitesurfing. Most visitors base here and walk between the pier and the town.`, pt: `Logo além do pontão começa a areia dourada sem fim — quilómetros de praia famosa pelo windsurf e kitesurf. A maioria baseia aqui e vai a pé entre o pontão e a vila.` } as T },
    { img: '/gallery/the-pier-of-santa-maria-9.jpg', title: '🐟 Mercado do Peixe', desc: { zh: `紧邻栈桥的渔市与码头，是圣玛丽亚当日渔获的集散地。清晨最热闹，可以近距离看渔妇分拣、叫卖与过秤。`, en: `The fish market and harbour right next to the pier — the hub where Santa Maria's daily catch is landed. Liveliest at dawn, when the fishwives sort, call and weigh the catch.`, pt: `O mercado e o porto de pesca junto ao pontão — o elo onde o pescado diário de Santa Maria chega. Mais vivo ao amanhecer, quando as peixeiras separam, anunciam e pesam.` } as T },
    { img: '/gallery/the-pier-of-santa-maria-10.jpg', title: '🌅 Ponta do Sinó', desc: { zh: `圣玛丽亚镇南端的海角，步行可达。这里是观赏大西洋日落与眺望栈桥灯火的最佳地点，黄昏时常有 locals 静坐看海。`, en: `The headland at the south end of Santa Maria town, an easy walk away. The best spot for the Atlantic sunset and a view back to the pier's lights; locals often sit here at dusk.`, pt: `O promontório no extremo sul de Santa Maria, a poucos passos. O melhor lugar para o pôr do sol no Atlântico e para ver as luzes do pontão; os locais sentam-se aqui ao entardecer.` } as T },
  ],
};

// ── Ecology (海岸生态与物种名录) ──
export const ecology = {
  sectionNum: { zh: `生态名录`, en: `Ecology`, pt: `Ecologia` } as T,
  heading: { zh: `荒野间的<em class="text-[color:var(--color-emerald)]">生命脉动</em>`, en: `The pulse of life<br/><em class="text-[color:var(--color-emerald)]"> in the wild</em>`, pt: `O pulso da vida<br/><em class="text-[color:var(--color-emerald)]"> no sertão</em>` } as T,
  intro: {
    zh: `Buracona 虽身处火山荒原，却是海陆交汇的生态节点。潮池里的珊瑚鱼、岩缝间的螃蟹，以及掠过海面的海鸟，共同构成萨尔岛最容易被忽略的生命网络。请放慢脚步，你与这些海岸居民的相遇，往往只在一潮之间。`,
    en: `Though it sits in volcanic wilderness, Buracona is an ecological node where land meets sea. The reef fish in the pools, the crabs in the cracks, and the birds skimming the waves together form the most overlooked web of life on Sal. Slow down — your encounter with these coastal dwellers often lasts but a single tide.`,
    pt: `Embora no sertão vulcânico, a Buracona é um nó ecológico onde terra e mar se encontram. Os peixes das poças, os caranguejos nas fendas e as aves sobre as ondas formam a teia de vida mais esquecida do Sal. Vá devagar — o encontro dura só uma maré.`,
  } as T,
  iucnVU: { zh: `易危 VU`, en: `Vulnerable VU`, pt: `Vulnerável VU` } as T,
  iucnNT: { zh: `近危 NT`, en: `Near Threatened NT`, pt: `Quase Ameaçado NT` } as T,
  iucnLC: { zh: `无危 LC`, en: `Least Concern LC`, pt: `Pouco Preocupante LC` } as T,
  iucnEN: { zh: `极危 EN`, en: `Endangered EN`, pt: `Em Perigo EN` } as T,
  secUmbrella: { zh: `旗舰与伞护物种`, en: `Flagship & Umbrella Species`, pt: `Espécies Bandeira e Guarda-chuva` } as T,
  secCommensal: { zh: `常见共生物种`, en: `Commensal & Observable Species`, pt: `Espécies Comensais e Observáveis` } as T,
  secFlora: { zh: `海岸植物群`, en: `Coastal Flora`, pt: `Flora Costeira` } as T,
  species: [
    {
      name: { zh: `军士鱼`, en: `Sergeant major`, pt: `Castanheta` } as T,
      latin: 'Abudefduf saxatilis',
      niche: { zh: `潮池居民`, en: `Tide-pool resident`, pt: `Morador de poça de maré` } as T,
      desc: {
        zh: `潮池里黄蓝相间的斑马纹小鱼，胆大不怕人，是 Buracona 火山岩池中最容易观察的海洋生物之一。`,
        en: `Yellow-and-blue zebra-striped fish in the tide pools, bold and unafraid — among the easiest marine life to observe in Buracona's volcanic pools.`,
        pt: `Peixinhos amarelo-azuis nas poças de maré, audazes — uma das vidas marinhas mais fáceis de observar nas poças vulcânicas da Buracona.`,
      } as T,
      iucn: 'LC',
      icon: '🐠',
    },
    {
      name: { zh: `岩蟹`, en: `Sally Lightfoot crab`, pt: `Caranguejo` } as T,
      latin: 'Grapsus grapsus',
      niche: { zh: `礁石清道夫`, en: `Rock scavenger`, pt: `Carniça de rocha` } as T,
      desc: {
        zh: `橙红相间的礁石蟹在浪花边缘飞快爬行，以藻类与落果为食，是海岸线重要的分解者。`,
        en: `Orange-and-red rock crabs scuttling at the water's edge, eating algae and fallen fruit — key decomposers of the shoreline.`,
        pt: `Caranguejos vermelho-alaranjados que correm na borda da onda, comem algas e frutos caídos — decompositores da costa.`,
      } as T,
      iucn: 'LC',
      icon: '🦀',
    },
    {
      name: { zh: `海龟`, en: `Loggerhead turtle`, pt: `Tartaruga` } as T,
      latin: 'Caretta caretta',
      niche: { zh: `海中访客`, en: `Sea visitor`, pt: `Visitante do mar` } as T,
      desc: {
        zh: `萨尔岛周边海域是 loggerhead 海龟的觅食与产卵地，Buracona 清澈的水域偶尔可见其身影（请勿靠近或触摸）。`,
        en: `The waters around Sal are feeding and nesting grounds for loggerhead turtles; Buracona's clear water occasionally reveals one (do not approach or touch).`,
        pt: `As águas do Sal são zona de alimentação e desova da tartaruga-comum; a água limpa da Buracona por vezes a mostra (não se aproxime).`,
      } as T,
      iucn: 'VU',
      icon: '🐢',
    },
    {
      name: { zh: `鹲（热带鸟）`, en: `Red-billed tropicbird`, pt: `Rabo-de-palha` } as T,
      latin: 'Phaethon aethereus',
      niche: { zh: `掠海飞鸟`, en: `Sea skimmer`, pt: `Ave do mar` } as T,
      desc: {
        zh: `雪白长尾的热带鸟在海面上方盘旋捕食，是萨尔岛荒岸上最优雅的剪影之一。`,
        en: `Snow-white, long-tailed tropicbirds wheel above the waves — among the most elegant silhouettes along Sal's wild coast.`,
        pt: `Aves brancas de cauda longa planam sobre as ondas — uma das silhuetas mais elegantes do litoral do Sal.`,
      } as T,
      iucn: 'LC',
      icon: '🐦',
    },
    {
      name: { zh: `佛得角壁虎`, en: `Cape Verde wall gecko`, pt: `Lagarto` } as T,
      latin: 'Tarentola caboverdiana',
      niche: { zh: `熔岩居民`, en: `Lava resident`, pt: `Morador da lava` } as T,
      desc: {
        zh: `萨尔岛特有的壁虎，白天躲在熔岩缝隙，黄昏出来捕食昆虫，是这片火山荒原最古老的"原住民"。`,
        en: `A gecko endemic to Sal, hiding in lava cracks by day and hunting insects at dusk — among the oldest "natives" of this volcanic wilderness.`,
        pt: `Lagarto endémico do Sal, esconde-se nas fendas de lava de dia e caça insetos à tarde — dos "nativos" mais antigos do sertão.`,
      } as T,
      iucn: 'LC',
      icon: '🦎',
    },
    {
      name: { zh: `耐旱灌木`, en: `Drought-tolerant scrub`, pt: `Arbusto resistente` } as T,
      latin: 'Frankenia spp.',
      niche: { zh: `海岸植被`, en: `Coastal vegetation`, pt: `Vegetação costeira` } as T,
      desc: {
        zh: `贴着熔岩生长的耐旱盐生灌木，根系固沙、为昆虫与爬行动物提供荫蔽，是荒原生态的骨架。`,
        en: `Drought-hardy coastal scrub clinging to the lava, its roots holding the sand and sheltering insects and reptiles — the backbone of the wilderness.`,
        pt: `Arbusto resistente colado à lava, as raízes fixam a areia e abrigam insetos e répteis — a espinha do sertão.`,
      } as T,
      iucn: 'LC',
      icon: '🌿',
    },
  ],
};

// ── FAQ (官方访客指南与常见问题) ──
export const faq = {
  sectionNum: { zh: `官方访客指南`, en: `Official Visitor Guide`, pt: `Guia Oficial do Visitante` } as T,
  heading: { zh: `访客指南与<em class="text-[color:var(--color-emerald)]">常见问题</em>`, en: `Visitor Guide &<em class="text-[color:var(--color-emerald)]"> FAQ</em>`, pt: `Guia do visitante &<em class="text-[color:var(--color-emerald)]"> perguntas frequentes</em>` } as T,
  disclaimer: {
    zh: `以下信息由 buracona 独立科普团队根据公开资料整理，仅供访客参考。出行前请通过佛得角官方旅游渠道核实最新政策。`,
    en: `The following information has been compiled by the independent buracona editorial team from publicly available sources and is provided for visitor reference only. Please verify the latest policies through official Cape Verde tourism channels before your visit.`,
    pt: `As informações a seguir foram compiladas pela equipe editorial independente do buracona a partir de fontes públicas e são fornecidas apenas para referência. Verifique as políticas mais recentes pelos canais oficiais de turismo de Cabo Verde antes de sua visita.`,
  } as T,
  items: [
    {
      q: { zh: `需要门票吗？开放时间是？`, en: `Is there an entrance fee? What are the hours?`, pt: `Tem entrada? Qual o horário?` } as T,
      a: {
        zh: `Buracona 由当地社区协会管理，需购票并由向导陪同进入，每日 09:00–18:00 开放。价格以现场公示为准，建议备好现金。`,
        en: `Buracona is managed by a local community association — paid entry with a guide, open daily 09:00–18:00. Price as posted on site; bring cash.`,
        pt: `A Buracona é gerida por associação comunitária — entrada paga com guia, aberta diariamente 09:00–18:00. Preço conforme aviso no local; leve dinheiro.`,
      } as T,
    },
    {
      q: { zh: `如何前往 Buracona？`, en: `How do I get to Buracona?`, pt: `Como chego à Buracona?` } as T,
      a: {
        zh: `最方便的方式是从 Santa Maria 包车或搭乘 aluguer 共享出租车北上约 30 公里；也可从 Espargos 机场租车自驾，最后一段为非铺装路面。无公交直达。`,
        en: `The easiest way is a taxi or shared aluguer from Santa Maria, ~30 km north. Or rent a car from Espargos airport — the final stretch is unpaved. There is no direct bus.`,
        pt: `O mais fácil é táxi ou aluguer de Santa Maria, ~30 km norte. Ou alugue carro em Espargos — o último trecho é de terra. Não há autocarro direto.`,
      } as T,
    },
    {
      q: { zh: `什么时候是最佳到访时间？`, en: `When is the best time to visit?`, pt: `Qual o melhor horário para visitar?` } as T,
      a: {
        zh: `<strong>看蓝眼：</strong>正午前后（约 11:00–14:00）太阳最高，蓝光最盛。<br/><br/><strong>看落日：</strong>留到黄昏，步行几分钟到"落日之窗"目送太阳沉入大西洋。`,
        en: `<strong>Blue Eye:</strong> around midday (≈11:00–14:00) the sun is highest and the blue glow peaks.<br/><br/><strong>Sunset:</strong> stay till dusk and walk a few minutes to the "Last Breath of the Sun" ledge as the sun drops into the Atlantic.`,
        pt: `<strong>Olho Azul:</strong> perto do meio-dia (≈11:00–14:00) o sol está mais alto e o azul é mais forte.<br/><br/><strong>Pôr do sol:</strong> fique até a tarde e caminhe poucos minutos até a plataforma do "Último Suspiro do Sol".`,
      } as T,
    },
    {
      q: { zh: `参观安全吗？`, en: `Is it safe to visit?`, pt: `É seguro visitar?` } as T,
      a: {
        zh: `地面是锋利且吸热火山熔岩，容易割伤与烫伤，请穿包裹性好的运动鞋、带足饮水与防晒，并全程跟随向导，勿翻越护栏或跳水。`,
        en: `The ground is sharp, heat-holding volcanic lava — wear closed sturdy shoes, bring water and sun protection, and stay with your guide at all times. Do not climb rails or dive.`,
        pt: `O chão é lava vulcânica afiada e quente — use calçado fechado e resistente, leve água e protetor solar, e fique com o guia. Não suba nas grades nem mergulhe.`,
      } as T,
    },
  ],
};

// ── Leave No Trace (荒野游览公约) ──
export const leaveNoTrace = {
  sectionNum: { zh: `游览公约`, en: `Visitor Code`, pt: `Código do Visitante` } as T,
  heading: { zh: `荒野游览<em class="text-[color:var(--color-emerald)]">公约</em>`, en: `Leave No Trace<em class="text-[color:var(--color-emerald)]"> Code</em>`, pt: `Código de<em class="text-[color:var(--color-emerald)]"> Não Deixe Rastros</em>` } as T,
  subtitle: {
    zh: `作为萨尔岛的公共空间，Buracona 属于每一位岛民与旅人。请在到访前阅读并承诺遵守以下行为准则，让这片蓝光长久清澈。`,
    en: `As a public space on Sal, Buracona belongs to every islander and traveller. Please read and commit to the following code before your visit, so this blue stays clear for all.`,
    pt: `Como espaço público do Sal, a Buracona é de todos. Leia e comprometa-se com este código antes de ir, para que o azul fique claro para todos.`,
  } as T,
  rules: [
    {
      icon: '🚯',
      title: { zh: `不留垃圾`, en: `Pack It In, Pack It Out`, pt: `Leve seu lixo embora` } as T,
      desc: {
        zh: `荒原上没有垃圾桶。所有废弃物（包括果皮、纸巾、水瓶）请自行带走。塑料被风吹入蓝池，会伤害潮间生物。`,
        en: `There are no bins in the wilderness. Carry out all waste (peels, tissues, bottles). Plastic blown into the blue pool harms tide-pool life.`,
        pt: `Não há lixeiras no sertão. Leve tudo (cascas, lenços, garrafas). O plástico no azul fere a vida da maré.`,
      } as T,
    },
    {
      icon: '👣',
      title: { zh: `不偏离步道`, en: `Stay on Paths`, pt: `Permaneça nos caminhos` } as T,
      desc: {
        zh: `火山岩上的潮池生态极其脆弱。请走既有小径，不要踩踏岩池与附着的贝类。`,
        en: `The tide-pool life on the lava is extremely fragile. Use existing paths; don't trample pools or attached shellfish.`,
        pt: `A vida das poças na lava é frágil. Use os caminhos; não pise poças nem moluscos presos.`,
      } as T,
    },
    {
      icon: '🤫',
      title: { zh: `保持安静，尊重落日`, en: `Keep Quiet, Respect the Sunset`, pt: `Mantenha silêncio, respeite o sol` } as T,
      desc: {
        zh: `黄昏时分，请收起外放音响，将交谈声降到最低。当"落日之窗"的太阳沉海，请安静目送，而非喧哗盖过它。`,
        en: `At dusk, put away speakers and lower your voice. When the sun sinks at the "Last Breath of the Sun", watch in quiet, don't drown it with noise.`,
        pt: `Ao entardecer, guarde silêncio e baixe a voz. Quando o sol se põe no "Último Suspiro do Sol", veja em silêncio.`,
      } as T,
    },
    {
      icon: '🐢',
      title: { zh: `不投喂、不触碰野生动物`, en: `No Feeding or Touching Wildlife`, pt: `Não alimente nem toque a fauna` } as T,
      desc: {
        zh: `潮池鱼、蟹与海龟看似亲近，但投喂与触碰会改变其行为并带来风险。请只远观，把食物收好。`,
        en: `The pool fish, crabs and turtles look friendly, but feeding or touching changes their behaviour and risks them. Observe from afar and keep food stowed.`,
        pt: `Os peixes, caranguejos e tartarugas parecem amigáveis, mas alimentar ou tocar muda o comportamento. Observe de longe.`,
      } as T,
    },
    {
      icon: '🏊',
      title: { zh: `只在指定水域戏水`, en: `Swim Only in Designated Water`, pt: `Nade só na água indicada` } as T,
      desc: {
        zh: `蓝眼洞本身禁止下水；仅可在向导指定的开放潮池浮潜戏水，避免扰动洞底生态。`,
        en: `The Blue Eye itself is off-limits for swimming; only snorkel in the open pool your guide indicates, to avoid disturbing the cave floor.`,
        pt: `O próprio Olho Azul é proibido para banho; só mergulhe na poça aberta que o guia indicar.`,
      } as T,
    },
    {
      icon: '🪨',
      title: { zh: `注意安全，远离锋利熔岩`, en: `Stay Safe, Off the Sharp Lava`, pt: `Cuidado, longe da lava afiada` } as T,
      desc: {
        zh: `火山熔岩长期暴晒、边缘锋利；大浪来袭时会没过脚下的平台。请穿包裹鞋，与浪花保持距离，切勿背对大海。`,
        en: `The lava is sun-baked and sharp; big waves can wash over the platform. Wear closed shoes, keep clear of the surf, and never turn your back on the sea.`,
        pt: `A lava é quente e afiada; ondas grandes cobrem a plataforma. Use calçado fechado, longe da onda, nunca de costas para o mar.`,
      } as T,
    },
  ],
  closing: {
    zh: `带走一张蓝光的照片，留下熔岩本来的样子。<br/>让"蓝眼"，在每个正午依旧为萨尔闪烁。`,
    en: `Take a photo of the blue. Leave the lava as you found it.<br/>Let the Blue Eye keep glowing for Sal, every single noon.`,
    pt: `Leve uma foto do azul. Deixe a lava como a encontrou.<br/>Que o Olho Azul continue a brilhar para o Sal, a cada meio-dia.`,
  } as T,
};

// ── Partners (佛得角官方旅游伙伴) ──
export const partners = {
  heading: {
    zh: `佛得角官方旅游伙伴`,
    en: `Official Cape Verde Tourism Partners`,
    pt: `Parceiros Oficiais de Turismo de Cabo Verde`,
    cri: `Parceirus Ofisiais di Turismu di Cabo Verde`,
  } as T,
  items: [
    {
      name: { zh: `Turismo de Cabo Verde（佛得角国家旅游局 - 萨尔岛专页）`, en: `Turismo de Cabo Verde (Sal page)`, pt: `Turismo de Cabo Verde (página de Sal)`, cri: `Turismu di Cabo Verde (pájina di Sal)` } as T,
      url: 'https://www.turismo.cv/page/sal',
      abbr: 'TCV',
      note: { zh: `佛得角国家旅游局 · 萨尔岛`, en: `Cape Verde Tourism Board · Sal`, pt: `Turismo de Cabo Verde · Sal`, cri: `Turismu di Cabo Verde · Sal` } as T,
      attr: { zh: `佛得角负责管理和推介全国旅游的最高官方职能机构。此专属页面详细介绍了萨尔岛（Sal）的旅游资源，其中圣玛丽亚栈桥（Pontão de Santa Maria）作为体验当地原生态渔民文化、清晨渔获交易以及连接绝美白沙滩的核心地标，是游客不可错过的体验中心。`, en: `Cape Verde's highest official body for managing and promoting national tourism. This Sal (Sal Island) page highlights the Santa Maria Pier (Pontão de Santa Maria) as the key landmark for fishing culture, dawn catch trading, and access to the white-sand beach.`, pt: `A mais alta entidade oficial de Cabo Verde para gerir e promover o turismo nacional. A página dedicada à ilha do Sal destaca o Pontão de Santa Maria como marco central da cultura piscatória, do comércio de pescado ao amanhecer e da ligação à praia de areia branca.`, cri: `Órgán ofisial máximu di Cabo Verde pa geri y promové turismu nasionál. Kel pajina di ilha di Sal ta mostra Puntan di Santa Maria komu marku prinsipal pa kultura di peska, tranzason di piski na madrugada y ligason ku praia di aria branku.` } as T,
    },
    {
      name: { zh: `Cabo Verde Airports（佛得角国家机场管理署 - 萨尔岛指南）`, en: `Cabo Verde Airports (Sal guide)`, pt: `Cabo Verde Airports (guia de Sal)`, cri: `Aeroportus di Cabo Verde (gia di Sal)` } as T,
      url: 'https://www.caboverde-airports.cv/en/cape-verde/sal/',
      abbr: 'CV AIR',
      note: { zh: `佛得角机场管理署 · 萨尔岛`, en: `Cabo Verde Airports · Sal`, pt: `Cabo Verde Airports · Sal`, cri: `Aeroportus di Cabo Verde · Sal` } as T,
      attr: { zh: `国家级航空与机场基础设施官方门户。该页面为降落在阿米尔卡·卡布拉尔国际机场（SID）的游客提供了全岛官方指南，明确指出了圣玛丽亚（Santa Maria）作为全岛度假与商业中心的地位，而栈桥正是该区域的标志性起点。`, en: `The national aviation and airport infrastructure portal. This page provides an official island guide for travellers arriving at Amílcar Cabral International Airport (SID), identifying Santa Maria as Sal's resort and commercial centre — and the pier as the area's landmark starting point.`, pt: `Portal oficial nacional de aviação e infraestrutura aeroportuária. A página fornece um guia oficial para quem chega ao Aeroporto Internacional Amílcar Cabral (SID), destacando Santa Maria como centro turístico e comercial da ilha — e o pontão como ponto de partida emblemático da zona.`, cri: `Portal ofisial di aviason y infraestrutura aeroportuária. Kel pajina ta da un gia ofisial pa kenha txiga na Aeroportu Internasional Amílcar Cabral (SID), ta indika Santa Maria komu sentru di ferias y kumérsiu di ilha — y puntan komu es zona si puntu markanti di partida.` } as T,
    },
    {
      name: { zh: `EASE - Governo de Cabo Verde（佛得角政府官方入境预登记系统）`, en: `EASE — Governo de Cabo Verde`, pt: `EASE — Governo de Cabo Verde`, cri: `EASE — Govérnu di Cabo Verde` } as T,
      url: 'https://www.ease.gov.cv/',
      abbr: 'EASE',
      note: { zh: `佛得角政府 · 入境预登记`, en: `Cape Verde Government · Entry Pre-Registration`, pt: `Governo de Cabo Verde · Pré-registo de Entrada`, cri: `Govérnu di Cabo Verde · Pré-registu` } as T,
      attr: { zh: `纯 .gov.cv 政府域名。这是佛得角政府为国际游客设立的“电子旅行授权（EASE）”和“机场安全税（TSA）”官方支付平台。所有前往萨尔岛圣玛丽亚游览的国际游客，均需通过此官方渠道完成出行前的强制性入境申报。`, en: `A pure .gov.cv government domain. Cape Verde's official platform for EASE (electronic travel authorisation) and TSA (airport security tax) payments. All international travellers visiting Santa Maria, Sal must complete the mandatory pre-travel entry registration here.`, pt: `Domínio governamental .gov.cv. Plataforma oficial do Governo de Cabo Verde para pagamento da autorização eletrónica EASE e da taxa TSA. Todos os viajantes internacionais que visitam Santa Maria, Sal, devem fazer aqui o pré-registo obrigatório antes da viagem.`, cri: `Domíniu gov.cv. Plataforma ofisial di Govérnu di Cabo Verde pa pagamentu di autorizason eletróniku EASE y taxa TSA. Tudu viajanti internasional ki ta bai visita Santa Maria, Sal, ten di fazé pré-registu obrigatóriu antis di viaji li.` } as T,
    },
    {
      name: { zh: `ENAPOR - Portos de Cabo Verde（佛得角国家港口与海事管理局）`, en: `ENAPOR — Portos de Cabo Verde`, pt: `ENAPOR — Portos de Cabo Verde`, cri: `ENAPOR — Portus di Cabo Verde` } as T,
      url: 'https://www.enapor.cv/',
      abbr: 'ENAPOR',
      note: { zh: `佛得角 · 港口与海事`, en: `Cabo Verde · Ports & Maritime`, pt: `Cabo Verde · Portos e Marítima`, cri: `Cabo Verde · Portus y Marítimu` } as T,
      attr: { zh: `佛得角官方港口与海事基础设施管理机构。圣玛丽亚栈桥（Pontão de Santa Maria）历史上具有重要的海事装卸功能，如今仍是当地小型渔船停泊与出海活动的枢纽，该网站提供了国家海事发展与航运安全的最高权威背景。`, en: `Cape Verde's official ports and maritime infrastructure authority. The Santa Maria Pier (Pontão de Santa Maria) historically served maritime loading and remains a hub for local fishing boats — the site provides the highest-authority context on maritime development and shipping safety.`, pt: `A autoridade oficial de portos e infraestrutura marítima de Cabo Verde. O Pontão de Santa Maria teve importância histórica no carregamento marítimo e continua a ser um eixo para barcos de pesca locais — o site oferece o enquadramento de maior autoridade sobre desenvolvimento marítimo e segurança da navegação.`, cri: `Autoridadi ofisial di portus y infraestrutura marítimu di Cabo Verde. Puntan di Santa Maria ten importánsia stóriku na karregamentu marítimu y inda é un nô pa barquinhu di piska lokal — site ta da kontextu di más grande autoridadi riba dizenvolvimentu marítimu y sigurança di navegaçon.` } as T,
    },
    {
      name: { zh: `INMG - Instituto Nacional de Meteorologia e Geofísica（佛得角国家气象局）`, en: `INMG — Instituto Nacional de Meteorologia e Geofísica`, pt: `INMG — Instituto Nacional de Meteorologia e Geofísica`, cri: `INMG — Institutu Nasionál di Meteorologia y Geofízika` } as T,
      url: 'https://inmg.gov.cv/',
      abbr: 'INMG',
      note: { zh: `佛得角 · 气象与海洋`, en: `Cabo Verde · Weather & Ocean`, pt: `Cabo Verde · Meteorologia e Oceano`, cri: `Cabo Verde · Tempu y Oseanu` } as T,
      attr: { zh: `纯 .gov.cv 政府域名。佛得角国家级气象与海洋环境发布机构。游览圣玛丽亚栈桥、观看渔获交易或参与周边海滩的水上运动高度依赖天气与海况，该网站为游客提供萨尔岛最权威、准确的实时天气和风力预报。`, en: `A pure .gov.cv government domain. Cape Verde's national meteorology and ocean-environment agency. Visiting the pier, watching the fish trade, or doing watersports nearby depends on weather and sea state — this site provides the most authoritative live weather and wind forecasts for Sal.`, pt: `Domínio governamental .gov.cv. A entidade nacional de meteorologia e ambiente oceânico de Cabo Verde. Visitar o Pontão de Santa Maria, ver o comércio de pescado ou praticar desportos aquáticos depende do tempo e do mar — o site fornece previsões em tempo real, de vento e meteorologia, com a maior autoridade para o Sal.`, cri: `Domíniu gov.cv. Órgán nasionál di meteorologia y ambienti oseániku di Cabo Verde. Visita Puntan di Santa Maria, odja tranzason di piski o fazé desportu aquátiku na praia dependi di tempu y mar — kel site ta da previson di vento y tempu, ao bibu, ku más autoridadi pa Sal.` } as T,
    },
  ],
};

// ── Footer (updated) ──
export const footer = {
  cta: { zh: `今天，去<br/><em class="text-[color:var(--color-sun)]">遇见渔火</em>。`, en: `Today, go<br/><em class="text-[color:var(--color-sun)]">meet the catch</em>.`, pt: `Hoje, vá<br/><em class="text-[color:var(--color-sun)]">encontrar o pescado</em>.`, cri: `Oji, bai<br/><em class="text-[color:var(--color-sun)]">inkontra piski</em>.` } as T,
  address: { zh: `圣玛丽亚栈桥 · Santa Maria, Sal · 佛得角（Cabo Verde）`, en: `The Pier of Santa Maria · Santa Maria, Sal · Cape Verde`, pt: `Pontão de Santa Maria · Santa Maria, Sal · Cabo Verde`, cri: `Puntan di Santa Maria · Santa Maria, Sal · Cabo Verde` } as T,
  copyright: { zh: `© 2026 Santa Maria Pier 保留所有权利。`, en: `© 2026 Santa Maria Pier. All rights reserved.`, pt: `© 2026 Santa Maria Pier. Todos os direitos reservados.`, cri: `© 2026 Santa Maria Pier. Tudu direitu reservadu.` } as T,
  disclaimer: { zh: `本网站是一个独立的第三方旅游资讯项目。我们与当地政府或其他官方机构没有任何关联。`, en: `This website is an independent third-party tourism information project. We are not affiliated with any local government or official entity.`, pt: `Este site é um projeto independente de informações turísticas de terceiros. Não temos vínculo com nenhum governo local ou entidade oficial.`, cri: `Kel site é un projétu independenti di informason turístiku di terceiru. Nós nha ten ligason ku govérnu lokal o entidadi ofisial.` } as T,
  privacy: { zh: `隐私政策`, en: `Privacy Policy`, pt: `Política de Privacidade`, cri: `Polítika di Privacidad` } as T,
  terms: { zh: `服务条款`, en: `Terms of Service`, pt: `Termos de Serviço`, cri: `Termus di Sirvisu` } as T,
  cookies: { zh: `Cookie 设置`, en: `Cookie Settings`, pt: `Configurações de Cookies`, cri: `Kukis` } as T,
  leaveNoTrace: { zh: `游览公约`, en: `Visitor Code`, pt: `Código do Visitante`, cri: `Kódigu di Visitanti` } as T,
};

// ── Privacy Policy Page ──
export const privacy = {
  title: { zh: `隐私政策 — buracona`, en: `Privacy Policy — buracona`, pt: `Política de Privacidade — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `隐私政策`, en: `Privacy Policy`, pt: `Política de Privacidade` } as T,
  h2_collect: { zh: `我们收集的信息`, en: `Information We Collect`, pt: `Informações que coletamos` } as T,
  p_collect: {
    zh: `我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：浏览数据（IP 地址、浏览器类型、访问页面）、Cookie 和类似技术、您通过联系表格或电子邮件自愿提供的任何信息。`,
    en: `We collect only the minimum data necessary to provide our services. This may include: browsing data (IP address, browser type, pages visited), cookies and similar technologies, and any information you voluntarily provide through contact forms or email.`,
    pt: `Coletamos apenas os dados mínimos necessários para fornecer nossos serviços. Isso pode incluir: dados de navegação (endereço IP, tipo de navegador, páginas visitadas), cookies e tecnologias similares, e qualquer informação que você fornecer voluntariamente por meio de formulários de contato ou e-mail.`,
  } as T,
  h2_use: { zh: `我们如何使用您的信息`, en: `How We Use Your Information`, pt: `Como usamos suas informações` } as T,
  p_use: {
    zh: `我们使用收集到的信息用于：改善网站内容和用户体验、分析流量和使用模式、回应请求、遵守我们的法律义务。`,
    en: `We use the collected information to: improve website content and user experience, analyze traffic and usage patterns, respond to inquiries, and comply with our legal obligations.`,
    pt: `Usamos as informações coletadas para: melhorar o conteúdo do site e a experiência do usuário, analisar o tráfego e padrões de uso, responder a solicitações, e cumprir nossas obrigações legais.`,
  } as T,
  h2_third: { zh: `第三方服务`, en: `Third-Party Services`, pt: `Serviços de terceiros` } as T,
  p_third: {
    zh: `我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）和谷歌分析（用于流量分析）。本站图片均为 Buracona 实地拍摄并存储于本服务器。这些服务均有各自的隐私政策。`,
    en: `Our website may use third-party services, such as Google Maps (for embedded maps and location data) and Google Analytics (for traffic analysis). All photographs on this site are taken at Buracona and hosted on our own server. These services have their own privacy policies.`,
    pt: `Nosso site pode usar serviços de terceiros, como Google Maps (para mapas incorporados e dados de localização) e Google Analytics (para análise de tráfego). Todas as fotos do site foram feitas na Buracona e hospedadas em nosso próprio servidor. Esses serviços têm suas próprias políticas de privacidade.`,
  } as T,
  h2_rights: { zh: `您的权利`, en: `Your Rights`, pt: `Seus direitos` } as T,
  p_rights: {
    zh: `根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：访问您的个人数据、要求更正或删除、反对处理、向监管机构提出投诉。`,
    en: `Under the General Data Protection Regulation (GDPR) and related regulations, you have the following rights: access your personal data, request correction or deletion, object to processing, and lodge a complaint with a supervisory authority.`,
    pt: `De acordo com o Regulamento Geral de Proteção de Dados (GDPR) e regulamentações relacionadas, você tem os seguintes direitos: acessar seus dados pessoais, solicitar correção ou exclusão, opor-se ao processamento, e apresentar uma reclamação a uma autoridade supervisora.`,
  } as T,
};

// ── Terms of Service Page ──
export const terms = {
  title: { zh: `服务条款 — buracona`, en: `Terms of Service — buracona`, pt: `Termos de Serviço — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `服务条款`, en: `Terms of Service`, pt: `Termos de Serviço` } as T,
  h2_acceptance: { zh: `接受条款`, en: `Acceptance of Terms`, pt: `Aceitação dos termos` } as T,
  p_acceptance: {
    zh: `访问和使用 buracona，即表示您同意受这些服务条款的约束。`,
    en: `By accessing and using buracona, you agree to be bound by these Terms of Service.`,
    pt: `Ao acessar e usar o buracona, você concorda em ficar vinculado a estes Termos de Serviço.`,
  } as T,
  h2_content: { zh: `内容使用`, en: `Content Usage`, pt: `Uso do conteúdo` } as T,
  p_content: {
    zh: `本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。`,
    en: `All content on this website is for informational purposes only. We are an independent third-party tourism information website and are not affiliated with any tourist attractions, government agencies, or commercial operators.`,
    pt: `Todo o conteúdo deste site é apenas para fins informativos. Somos um site independente de informações turísticas de terceiros e não temos vínculo com nenhuma atração turística, agência governamental ou operador comercial.`,
  } as T,
  h2_accuracy: { zh: `信息的准确性`, en: `Accuracy of Information`, pt: `Precisão das informações` } as T,
  p_accuracy: {
    zh: `我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。`,
    en: `We strive to provide accurate and timely information, but we cannot guarantee the completeness or accuracy of the information. Schedules, conditions, and services are subject to change without notice. Please always verify important information through official channels before traveling.`,
    pt: `Nos esforçamos para fornecer informações precisas e oportunas, mas não podemos garantir a integridade ou exatidão das informações. Horários, condições e serviços estão sujeitos a alterações sem aviso prévio. Sempre verifique informações importantes pelos canais oficiais antes de viajar.`,
  } as T,
  h2_ip: { zh: `知识产权`, en: `Intellectual Property`, pt: `Propriedade intelectual` } as T,
  p_ip: {
    zh: `本网站设计和原创内容受版权保护。站内图片均为 Buracona 实地拍摄，版权归本网站所有。Google 地图数据的使用符合 Google 的服务条款。`,
    en: `The website design and original content are protected by copyright. All photographs on this site are taken at Buracona and are owned by this website. Google Maps data is used in accordance with Google's Terms of Service.`,
    pt: `O design do site e o conteúdo original são protegidos por direitos autorais. Todas as fotos do site foram feitas na Buracona e pertencem a este site. Os dados do Google Maps são usados de acordo com os Termos de Serviço do Google.`,
  } as T,
  h2_liability: { zh: `责任限制`, en: `Limitation of Liability`, pt: `Limitação de responsabilidade` } as T,
  p_liability: {
    zh: `本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。`,
    en: `This website is provided "as is" without any warranties. We are not responsible for any losses resulting from the use of information on this website, including but not limited to travel decisions made based on the content of this website.`,
    pt: `Este site é fornecido "como está" sem qualquer garantia. Não nos responsabilizamos por quaisquer perdas resultantes do uso das informações deste site, incluindo, mas não se limitando a, decisões de viagem tomadas com base no conteúdo deste site.`,
  } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, pt: `← Voltar ao início` } as T,
};

// ── Cookie Settings Page ──
export const cookies = {
  title: { zh: `Cookie 设置 — buracona`, en: `Cookie Settings — buracona`, pt: `Configurações de Cookies — buracona` } as T,
  lastUpdated: { zh: `最后更新时间：2026年7月`, en: `Last updated: July 2026`, pt: `Última atualização: Julho de 2026` } as T,
  h1: { zh: `Cookie 设置`, en: `Cookie Settings`, pt: `Configurações de Cookies` } as T,
  intro: {
    zh: `我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。`,
    en: `We use cookies to improve your browsing experience. You can manage your preferences below.`,
    pt: `Usamos cookies para melhorar sua experiência de navegação. Você pode gerenciar suas preferências abaixo.`,
  } as T,

  cat_necessary: { zh: `必要 Cookie`, en: `Necessary Cookies`, pt: `Cookies necessários` } as T,
  cat_necessary_desc: { zh: `这些 Cookie 对于网站正常运行至关重要，无法禁用。`, en: `These cookies are essential for the website to function properly and cannot be disabled.`, pt: `Estes cookies são essenciais para o funcionamento do site e não podem ser desativados.` } as T,
  alwaysActive: { zh: `始终保持活跃`, en: `Always active`, pt: `Sempre ativo` } as T,

  cat_analytics: { zh: `分析型 Cookie`, en: `Analytics Cookies`, pt: `Cookies analíticos` } as T,
  cat_analytics_desc: { zh: `它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。`, en: `They help us understand how visitors interact with our website by collecting anonymous usage data.`, pt: `Eles nos ajudam a entender como os visitantes interagem com nosso site, coletando dados de uso anônimos.` } as T,
  ga_label: 'Google Analytics',
  ga_desc: { zh: `它会收集访客如何使用我们网站的匿名信息。`, en: `Collects anonymous information about how visitors use our website.`, pt: `Coleta informações anônimas sobre como os visitantes usam nosso site.` } as T,
  activated: { zh: `激活`, en: `Active`, pt: `Ativado` } as T,

  cat_preference: { zh: `偏好 Cookie`, en: `Preference Cookies`, pt: `Cookies de preferência` } as T,
  cat_preference_desc: { zh: `它们会记住您的设置，例如语言和主题偏好。`, en: `They remember your settings, such as language and theme preferences.`, pt: `Eles lembram suas configurações, como preferências de idioma e tema.` } as T,
  pref_label: { zh: `用户偏好`, en: `User Preferences`, pt: `Preferências do usuário` } as T,
  pref_desc: { zh: `保存您的语言偏好和网站设置。`, en: `Saves your language preferences and website settings.`, pt: `Salva suas preferências de idioma e configurações do site.` } as T,

  cat_marketing: { zh: `营销 Cookie`, en: `Marketing Cookies`, pt: `Cookies de marketing` } as T,
  cat_marketing_desc: { zh: `它们用于展示相关广告并衡量广告活动的有效性。`, en: `They are used to display relevant advertisements and measure the effectiveness of ad campaigns.`, pt: `São usados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.` } as T,
  ads_label: { zh: `个性化广告`, en: `Personalized Ads`, pt: `Anúncios personalizados` } as T,
  ads_desc: { zh: `它可以根据你的兴趣为你展示相关的广告。`, en: `Shows you relevant ads based on your interests.`, pt: `Mostra anúncios relevantes com base nos seus interesses.` } as T,
  deactivated: { zh: `停用`, en: `Inactive`, pt: `Desativado` } as T,

  consent_title: { zh: `同意管理`, en: `Consent Management`, pt: `Gerenciamento de consentimento` } as T,
  consent_desc: { zh: `您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。`, en: `You can change your cookie settings at any time. Please note that disabling certain cookies may affect the website's functionality.`, pt: `Você pode alterar suas configurações de cookies a qualquer momento. Observe que desativar certos cookies pode afetar a funcionalidade do site.` } as T,
  savePrefs: { zh: `保存偏好设置`, en: `Save Preferences`, pt: `Salvar preferências` } as T,
  rejectAll: { zh: `拒绝一切`, en: `Reject All`, pt: `Rejeitar tudo` } as T,
  backLink: { zh: `← 返回首页`, en: `← Back to home`, pt: `← Voltar ao início` } as T,
};

// ── Meta ──
export const meta = {
  title: { zh: `Buracona · 蓝眼洞 — 佛得角萨尔岛的火山岩蓝洞`, en: `Buracona · Cape Verde's Blue Eye Cave in Sal`, pt: `Buracona · O Olho Azul de Cabo Verde no Sal` } as T,
  description: { zh: `Buracona（蓝眼洞）完整指南：火山岩蓝洞的光学秘密、正午蓝光、落日之窗、开放时间 09:00–18:00、交通、真实评价与常见问题。`, en: `The complete guide to Buracona (Blue Eye Cave) in Sal, Cape Verde: the optics of the blue glow, midday light, the sunset window, hours 09:00–18:00, transport, real reviews and FAQ.`, pt: `O guia completo da Buracona (Olho Azul) no Sal, Cabo Verde: a ótica do azul, a luz do meio-dia, a janela do sol, horário 09:00–18:00, transporte, avaliações e FAQ.` } as T,
};
