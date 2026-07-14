/**
 * i18n: EN lives in the HTML (single source for crawlers / no-JS),
 * PT lives here, indexed by the same data-i18n keys.
 * On first load the EN text is captured from the DOM so the toggle
 * can switch back without a second dictionary.
 */
(function () {
  "use strict";

  var PT = {
    "a11y.skip": "Pular para o conteúdo",

    "nav.experience": "Experiência",
    "nav.research": "Pesquisa",
    "nav.projects": "Projetos",
    "nav.publications": "Publicações",
    "nav.contact": "Contato",
    "nav.cv": "Baixar CV",

    "hero.role2": "Pesquisador de Visão Computacional",
    "hero.sub":
      "Construo sistemas de visão que rodam em produção e pesquiso as arquiteturas por trás deles.",
    "hero.cta": "Ver trabalhos",
    "hero.photoAlt": "Lucas Couto, sentado, sorrindo, vestindo camiseta escura",

    "about.title": "Sobre",
    "about.body":
      "Sou Lucas Couto, 25 anos. Programo desde os 12. Hoje divido meu tempo entre colocar sistemas de visão computacional em produção numa deeptech e pesquisar arquiteturas de recomendação visual no mestrado. Antes disso, fui CTO de uma startup de verificação de identidade e AI Lead num grupo de franquias.",

    "hud.years": "anos programando",
    "hud.papers": "papers publicados · ICEIS 2025 e 2026",
    "hud.models": "modelos de deep learning construídos · 3 em produção",
    "hud.engineers": "engenheiros liderados como AI Lead",

    "exp.title": "Experiência",
    "exp.kasco.period": "mai 2026 – presente · remoto",
    "exp.kasco.b1":
      "Deeptech brasileira, spin-off da Unicamp, atuando em Energia, Agro e Indústria.",
    "exp.kasco.b2":
      "Desenvolvo sistema de contagem de gado por imagens de drone com algoritmos de detecção e segmentação de instâncias.",
    "exp.kasco.b3":
      "Trabalho no pipeline assíncrono de processamento de vídeo baseado em filas de mensageria distribuídas.",
    "exp.kasco.b4": "Atuo na plataforma web de gestão das operações de campo.",
    "exp.kasco.b5":
      "Escrevi o guia de convenções de Git e fluxo de trabalho adotado pelo time.",
    "exp.e300.period": "nov 2025 – abr 2026",
    "exp.e300.b1":
      "Liderei time de 4 engenheiros construindo IA interna para 170+ colaboradores.",
    "exp.e300.b2": "Arquitetei sistemas multi-agente e pipelines de RAG.",
    "exp.e300.b3": "Operei 2 LLMs on-premise (32 GB de VRAM).",
    "exp.lumus.period": "ago 2024 – mai 2026",
    "exp.lumus.b1":
      "Liderei a construção de uma plataforma SaaS de verificação de identidade.",
    "exp.lumus.b2": "9 modelos de deep learning desenvolvidos, 3 em produção.",
    "exp.lumus.b3": "Detector de deepfake com 90% de acurácia.",
    "exp.lumus.b4":
      "Curadoria de dataset proprietário de ~200 GB / 1M imagens.",

    "res.title": "Pesquisa &amp; Academia",

    "res.bsc.level": "Engenheiro",
    "res.bsc.name": "Engenharia de Produção, Ênfase em Software",
    "res.bsc.period": "2019 – 2024",
    "res.bsc.school": "Universidade Estadual de Maringá (UEM)",

    "res.msc.level": "Mestrado",
    "res.msc.name": "Ciência da Computação",
    "res.msc.period": "mar 2025 – presente",
    "res.msc.school": "Universidade Estadual de Maringá (UEM)",

    "res.now.body": "Orientador: Prof. Dr. Marcos Aurélio Domingues.",
    "res.prism.label": "projeto de pesquisa",
    "res.prism.heading":
      "Extração Híbrida de Características Visuais para Recomendação de Produtos de Moda Baseada em Deep Learning",
    "res.prism.body":
      "Redes Neurais Convolucionais (CNNs) e <em>Vision Transformers</em> (ViTs) são usadas como extratores visuais na recomendação de moda, mas sempre de forma isolada. Este projeto investiga se hibridizá-las, por fusão tardia de <em>embeddings</em> ou por arquiteturas híbridas que combinam convolução e autoatenção, produz representações visuais mais informativas e, consequentemente, recomendações mais precisas do que cada família usada isoladamente.",
    "res.prism.link": "Ver o Prism VRec no Zenodo →",

    "res.academic.heading": "projetos acadêmicos",
    "res.academic.p1.title":
      "Aplicação de Técnicas de Mineração de Dados na Aquisição de Informação Contextual para a Recomendação de Pontos de Interesse",
    "res.academic.p1.period": "mar 2023 – fev 2024",
    "res.academic.p1.body":
      "Mineração de dados de pontos de interesse para extrair embeddings contextuais via redes neurais, comparando técnicas de recomendação para sistemas de POI.",
    "res.academic.p1.advisor":
      "Orientador: Prof. Dr. Marcos Aurélio Domingues. Coorientadora: Profa. Dra. Gislaine Camila Lapasini Leal.",
    "res.academic.p2.title":
      "Mudando Hábitos de Consumo de Energia Elétrica com Gamificação e Recomendação em um Jogo Educativo",
    "res.academic.p2.period": "set 2022 – set 2023",
    "res.academic.p2.body":
      "Jogo mobile educativo que combina gamificação e sistemas de recomendação para conscientizar e mudar hábitos de consumo de energia elétrica.",
    "res.academic.p2.advisor": "Orientador: Prof. Dr. Marcos Aurélio Domingues.",
    "res.academic.p3.title":
      "Um Aplicativo Mobile para Exploração de Relacionamentos de Artistas em Redes de Músicas",
    "res.academic.p3.period": "set 2021 – ago 2022",
    "res.academic.p3.body":
      "Aplicativo mobile para explorar relacionamentos entre artistas como um grafo, ouvir músicas gratuitamente e receber recomendações personalizadas.",
    "res.academic.p3.advisor": "Orientador: Prof. Dr. Marcos Aurélio Domingues.",
    "res.academic.p4.title":
      "Uma Plataforma Web para Visualização e Interação com Redes de Músicas",
    "res.academic.p4.period": "set 2020 – ago 2021",
    "res.academic.p4.body":
      "Plataforma web para visualizar e interagir com redes de músicas como um grafo, com reprodução gratuita e recomendações personalizadas.",
    "res.academic.p4.advisor": "Orientador: Prof. Dr. Marcos Aurélio Domingues.",

    "res.interests.heading": "interesses de pesquisa",

    "proj.title": "Projetos",
    "proj.p1.name": "Contagem de Gado por Imagens de Drone",
    "proj.p1.context": "visão computacional para o agro · Kasco AI",
    "proj.p1.body":
      "Contar rebanhos manualmente a partir de filmagens aéreas é lento e sujeito a erro. Trabalho com segmentação de instâncias para contagem automática de gado em vídeos de drone, com pipeline de mensageria para processamento em escala.",
    "proj.p2.name": "Plataforma de Operações de Campo",
    "proj.p2.context": "plataforma web · Kasco AI",
    "proj.p2.body":
      "As operações de contagem envolvem pilotos, voos e clientes espalhados por fazendas. Atuo na plataforma web que orquestra as operações de campo de ponta a ponta, do planejamento de voo ao relatório final.",
    "proj.p3.name": "Plataforma de Verificação de Identidade (Lumus)",
    "proj.p3.context": "SaaS · Lumus Tech",
    "proj.p3.body":
      "O onboarding digital precisa barrar fraude sem travar usuários reais. Liderei a construção de um SaaS de verificação de identidade com detecção de deepfake (90% de acurácia) e 3 modelos em produção.",

    "pub.title": "Publicações",
    "pub.p1.summary":
      "Estudo empírico de ResNet50, ViT-B/16 e uma representação híbrida CNN–ViT como backbones visuais para recomendação de moda no dataset Amazon Reviews 2023.",
    "pub.p2.summary":
      "RNN dual sensível a contexto que aprende embeddings contextuais de POIs a partir de sequências de check-in, superando o estado da arte em quatro recomendadores sensíveis a contexto em dois datasets.",

    "contact.title": "Contato",
    "contact.lead":
      "Aberto a consultoria, vagas de engenharia e colaboração em pesquisa.",
    "contact.location": "Brasil · trabalhando remotamente para o mundo todo",
  };

  var STORAGE_KEY = "lang";
  var EN = { text: {}, attr: {}, svg: {} };

  function captureEnglish() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (el.hasAttribute("data-i18n-attr")) {
        EN.attr[key] = el.getAttribute(el.getAttribute("data-i18n-attr"));
      } else {
        EN.text[key] = el.innerHTML;
      }
    });
    document.querySelectorAll("[data-i18n-svg]").forEach(function (el) {
      EN.svg[el.getAttribute("data-i18n-svg")] = el.textContent;
    });
  }

  function applyLang(lang) {
    var isPt = lang === "pt";
    document.documentElement.lang = isPt ? "pt-BR" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (el.hasAttribute("data-i18n-attr")) {
        var value = isPt ? PT[key] : EN.attr[key];
        if (value) el.setAttribute(el.getAttribute("data-i18n-attr"), value);
      } else {
        var html = isPt ? PT[key] : EN.text[key];
        if (html !== undefined) el.innerHTML = html;
      }
    });

    document.querySelectorAll("[data-i18n-svg]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-svg");
      var text = isPt ? PT[key] : EN.svg[key];
      if (text !== undefined) el.textContent = text;
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.setAttribute(
        "aria-pressed",
        String(btn.getAttribute("data-lang") === lang),
      );
    });

    document.querySelectorAll(".cv-download-link").forEach(function (link) {
      link.setAttribute(
        "href",
        isPt ? "assets/cv-pt.pdf" : "assets/cv-en.pdf",
      );
      link.setAttribute(
        "download",
        isPt ? "Lucas_Couto_CV_PT.pdf" : "Lucas_Couto_CV_EN.pdf",
      );
      link.setAttribute("data-track-lang", isPt ? "pt" : "en");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* private mode */
    }
  }

  function initialLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "pt" || saved === "en") return saved;
    } catch (err) {
      /* private mode */
    }
    return "en";
  }

  captureEnglish();

  var current = initialLang();
  if (current !== "en") applyLang(current);

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });
})();
