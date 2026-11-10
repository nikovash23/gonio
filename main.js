/* ============================================================
   GONIO BATUMI HOTEL & RESIDENCES — Shared JavaScript
   ============================================================ */
"use strict";

(function () {
  /* ══════════════════════════════════════════════════════════════
   CONFIG — edit this block
   ══════════════════════════════════════════════════════════════ */
  const CONFIG = {
    // Booking form endpoint. Examples:
    //   Formspree:  'https://formspree.io/f/xxxxxxxx'
    //   Web3Forms:  'https://api.web3forms.com/submit'  + extraFields: { access_key: '...' }
    // While this is empty the form does NOT pretend to send: it opens the
    // visitor's email app with the request filled in (fallback below).
    endpoint: "https://api.web3forms.com/submit",
    extraFields: {
      access_key: "aa96a781-9711-406d-a952-3e3eb25886f1",
      from_name: "Gonio Website",
    },

    // TODO: confirm real contact details
    fallbackEmail: "reservations@fcgoniohotel.ge",
    fallbackPhone: "+995 577 92 93",

    requestTimeoutMs: 15000,
  };

  // TODO: confirm real maximum guests (adults + children) for each suite.
  // These numbers are placeholders.
  const SUITES = [
    { id: "deluxe", name: "Deluxe Sea View Suite", maxGuests: 3 },
    { id: "executive", name: "Panoramic Executive Haven", maxGuests: 4 },
    { id: "garden", name: "Garden Terrace Residence", maxGuests: 3 },
    { id: "penthouse", name: "Penthouse Maritime Grand Suite", maxGuests: 6 },
  ];

  /* ══════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════ */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const pad = (n) => String(n).padStart(2, "0");
  // Local date (not UTC) as YYYY-MM-DD
  const toISO = (d) =>
    d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const todayISO = () => toISO(new Date());
  function addDays(iso, n) {
    const [y, m, d] = iso.split("-").map(Number);
    return toISO(new Date(y, m - 1, d + n));
  }

  const store = {
    get(k) {
      try {
        return localStorage.getItem(k);
      } catch (_) {
        return null;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem(k, v);
      } catch (_) {
        /* private mode etc. */
      }
    },
  };

  function findSuite(value) {
    if (!value) return null;
    const v = String(value).trim().toLowerCase();
    return SUITES.find((s) => s.id === v || s.name.toLowerCase() === v) || null;
  }

  /* ══════════════════════════════════════════════════════════════
   I18N ENGINE
   English text lives in the HTML. For KA/RU the dictionary is used,
   and any missing key falls back to the HTML text (never the key name).
   ══════════════════════════════════════════════════════════════ */
  const I18N = (() => {
    const KEY = "gonio_lang";
    const OLD_KEY = "fcgonio_lang";
    const SUPPORTED = ["en", "ka", "ru"];
    let lang = "en";
    const originals = new WeakMap();

    const dict = (l) => (window.FCGI18N && window.FCGI18N[l]) || {};

    function format(str, vars) {
      return String(str).replace(/\{(\w+)\}/g, (m, k) =>
        vars && k in vars ? vars[k] : m,
      );
    }

    // For JavaScript-generated messages
    function t(key, vars) {
      const s = dict(lang)[key] ?? dict("en")[key] ?? key;
      return format(s, vars);
    }

    function phrase(text) {
      const map = dict(lang).phrases;
      return (map && map[text]) || text;
    }

    function detect() {
      const saved = store.get(KEY) || store.get(OLD_KEY);
      if (saved && SUPPORTED.includes(saved)) return saved;
      const b = (navigator.language || "en").slice(0, 2).toLowerCase();
      return SUPPORTED.includes(b) ? b : "en";
    }

    // Remember what the HTML originally said, per element and field
    function original(el, field, read) {
      let rec = originals.get(el);
      if (!rec) {
        rec = {};
        originals.set(el, rec);
      }
      if (!(field in rec)) rec[field] = read();
      return rec[field];
    }

    function pick(el, field, key, read) {
      const def = original(el, field, read);
      const hasDef = def && def.trim() !== "";
      if (lang === "en") return hasDef ? def : (dict("en")[key] ?? def ?? "");
      return dict(lang)[key] ?? (hasDef ? def : (dict("en")[key] ?? ""));
    }

    function applyAll() {
      const vars = { n: $$(".suite-card[data-category]").length };

      $$("[data-i18n]").forEach((el) => {
        el.textContent = format(
          pick(el, "text", el.dataset.i18n, () => el.textContent),
          vars,
        );
      });
      $$("[data-i18n-ph]").forEach((el) => {
        el.placeholder = pick(
          el,
          "ph",
          el.dataset.i18nPh,
          () => el.placeholder,
        );
      });
      $$("[data-i18n-html]").forEach((el) => {
        el.innerHTML = pick(
          el,
          "html",
          el.dataset.i18nHtml,
          () => el.innerHTML,
        );
      });
      $$("[data-i18n-aria]").forEach((el) => {
        el.setAttribute(
          "aria-label",
          pick(
            el,
            "aria",
            el.dataset.i18nAria,
            () => el.getAttribute("aria-label") || "",
          ),
        );
      });
      // <select data-i18n-opts="key1,key2,..."> — one key per option
      $$("select[data-i18n-opts]").forEach((sel) => {
        const keys = sel.dataset.i18nOpts.split(",").map((k) => k.trim());
        Array.from(sel.options).forEach((opt, i) => {
          if (keys[i])
            opt.textContent = pick(opt, "text", keys[i], () => opt.textContent);
        });
      });

      document.documentElement.lang = lang;
      $$(".lang-switcher button[data-lang]").forEach((btn) => {
        const on = btn.dataset.lang === lang;
        btn.classList.toggle("active", on);
        btn.setAttribute("aria-pressed", String(on));
      });
      document.dispatchEvent(
        new CustomEvent("langchange", { detail: { lang } }),
      );
    }

    function setLang(next) {
      if (!SUPPORTED.includes(next)) return;
      lang = next;
      store.set(KEY, next);
      applyAll();
    }

    function init() {
      lang = detect();
      $$(".lang-switcher button[data-lang]").forEach((btn) => {
        btn.addEventListener("click", () => setLang(btn.dataset.lang));
      });
      applyAll();
    }

    return {
      init,
      setLang,
      t,
      phrase,
      get lang() {
        return lang;
      },
    };
  })();

  /* ══════════════════════════════════════════════════════════════
   HEADER, NAV, REVEAL, SCROLL-SPY
   ══════════════════════════════════════════════════════════════ */
  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    const update = () =>
      header.classList.toggle("scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileNav() {
    const toggle = $(".nav-toggle");
    const nav = $(".site-nav");
    if (!toggle || !nav) return;
    if (nav.id && !toggle.hasAttribute("aria-controls"))
      toggle.setAttribute("aria-controls", nav.id);

    function setOpen(open) {
      nav.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      const icon = $(".material-symbols-outlined", toggle);
      if (icon) icon.textContent = open ? "close" : "menu";
    }

    toggle.addEventListener("click", () =>
      setOpen(!nav.classList.contains("open")),
    );
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a, .btn")) setOpen(false);
    });
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) setOpen(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function setActiveNav(page) {
    $$(".site-nav a[data-page]").forEach((a) => {
      const on = a.dataset.page === page;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function initActiveNav() {
    const page = document.body.dataset.page || "";
    setActiveNav(page);
    if (page !== "home") return;

    // Scroll-spy on the home page
    const ids = {
      about: "why-choose-hotel",
      facilities: "facilities",
      gallery: "gallery",
      location: "location",
      contact: "contact",
    };
    const sections = Object.entries(ids)
      .map(([p, id]) => ({ page: p, el: document.getElementById(id) }))
      .filter((s) => s.el);
    if (!sections.length) return;

    let ticking = false;
    let current = "";
    function spy() {
      ticking = false;
      const line = 140;
      let best = null;
      sections.forEach((s) => {
        const top = s.el.getBoundingClientRect().top;
        if (top <= line && (!best || top > best.top))
          best = { page: s.page, top };
      });
      const next = best ? best.page : "home";
      if (next !== current) {
        current = next;
        setActiveNav(next);
      }
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(spy);
        }
      },
      { passive: true },
    );
    spy();
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
  }

  function initGalleryIcons() {
    $$(".gallery-cell").forEach((cell) => {
      if (cell.querySelector(".zoom-icon")) return;
      const zoom = document.createElement("div");
      zoom.className = "zoom-icon";
      zoom.setAttribute("aria-hidden", "true");
      zoom.innerHTML = '<span class="material-symbols-outlined">zoom_in</span>';
      cell.appendChild(zoom);
    });
  }

  function initYear() {
    $$("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ══════════════════════════════════════════════════════════════
   MODAL MANAGER (stack, focus trap, safe close timing)
   ══════════════════════════════════════════════════════════════ */
  const FOCUSABLE =
    'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';
  const modalStack = [];
  const closeTimers = new WeakMap();
  const returnFocus = new WeakMap();

  function openOverlay(overlay, focusSelector) {
    clearTimeout(closeTimers.get(overlay));
    if (!modalStack.includes(overlay)) {
      modalStack.push(overlay);
      returnFocus.set(overlay, document.activeElement);
    }
    overlay.style.display = "flex";
    requestAnimationFrame(() => overlay.classList.add("open"));
    document.body.style.overflow = "hidden";
    const target =
      (focusSelector && $(focusSelector, overlay)) || $(FOCUSABLE, overlay);
    setTimeout(() => {
      if (target) target.focus({ preventScroll: true });
    }, 60);
  }

  function closeOverlay(overlay, instant) {
    const i = modalStack.indexOf(overlay);
    if (i === -1) return;
    modalStack.splice(i, 1);
    overlay.classList.remove("open");
    const finish = () => {
      overlay.style.display = "none";
      if (!modalStack.length) document.body.style.overflow = "";
    };
    clearTimeout(closeTimers.get(overlay));
    if (instant) {
      finish();
    } else {
      closeTimers.set(overlay, setTimeout(finish, 350));
      const prev = returnFocus.get(overlay);
      if (prev && typeof prev.focus === "function")
        prev.focus({ preventScroll: true });
    }
  }

  function initModals() {
    ["bookingModal", "suiteDetailsModal"].forEach((id) => {
      const overlay = document.getElementById(id);
      if (!overlay) return;
      // Close on backdrop only if the press AND the release were on the backdrop
      let downOnBackdrop = false;
      overlay.addEventListener("pointerdown", (e) => {
        downOnBackdrop = e.target === overlay;
      });
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay && downOnBackdrop) closeOverlay(overlay);
        downOnBackdrop = false;
      });
    });

    document.addEventListener("keydown", (e) => {
      if (!modalStack.length) return;
      const top = modalStack[modalStack.length - 1];
      if (e.key === "Escape") {
        e.preventDefault();
        closeOverlay(top);
        return;
      }
      if (e.key === "Tab") {
        const items = $$(FOCUSABLE, top).filter(
          (el) => el.offsetParent !== null,
        );
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ══════════════════════════════════════════════════════════════
   BOOKING MODAL
   ══════════════════════════════════════════════════════════════ */
  let currentSuite = "";
  let sending = false;

  function setupDates() {
    const cin = $("#res-checkin");
    const cout = $("#res-checkout");
    const today = todayISO();
    if (cin) {
      cin.min = today;
      if (!cin.value || cin.value < today) cin.value = today;
    }
    if (cout) {
      const min = addDays(cin && cin.value ? cin.value : today, 1);
      cout.min = min;
      if (!cout.value || cout.value < min) cout.value = min;
    }
  }

  function initDateInputs() {
    const cin = $("#res-checkin");
    if (cin) cin.addEventListener("change", setupDates);
    // Any other date inputs on the page (e.g. a hero booking bar)
    $$('input[type="date"]').forEach((inp) => {
      if (inp.id === "res-checkin" || inp.id === "res-checkout") return;
      const isOut = /check-?out/i.test(inp.id);
      inp.min = isOut ? addDays(todayISO(), 1) : todayISO();
    });
  }

  function showState(state) {
    const form = $("#reservationForm");
    const spinner = $("#reservationLoading");
    const success = $("#reservationSuccess");
    if (form) form.style.display = state === "form" ? "block" : "none";
    if (spinner) spinner.style.display = state === "loading" ? "flex" : "none";
    if (success) success.style.display = state === "success" ? "flex" : "none";
    setMessage("");
  }

  function setMessage(text) {
    const box = $("#formErrorMessage");
    if (!box) return;
    box.textContent = text || "";
    box.classList.toggle("visible", Boolean(text));
  }

  function openBookingModal(suite) {
    const overlay = $("#bookingModal");
    if (!overlay) return;
    const s = findSuite(suite);
    currentSuite = s ? s.name : suite || "";
    const sel = $("#res-roomtype");
    if (sel && currentSuite) sel.value = currentSuite;
    setupDates();
    showState("form");
    openOverlay(overlay, "#res-name");
  }

  function closeBookingModal() {
    const overlay = $("#bookingModal");
    if (overlay) closeOverlay(overlay);
  }

  function digitsOf(s) {
    return String(s).replace(/\D/g, "");
  }

  // Phone WITH country code, e.g. "+995555123456"
  function getFullPhone(input) {
    if (!input) return "";
    const raw = (input.value || "").trim();
    if (raw.startsWith("+")) return raw;

    // 1) Ask intl-tel-input for the full number
    try {
      let iti = null;
      if (
        window.intlTelInput &&
        typeof window.intlTelInput.getInstance === "function"
      ) {
        iti = window.intlTelInput.getInstance(input);
      } else if (window.intlTelInputGlobals) {
        iti = window.intlTelInputGlobals.getInstance(input);
      }
      if (iti && typeof iti.getNumber === "function") {
        const full = iti.getNumber();
        if (full) return full;
      }
    } catch (_) {}

    // 2) Fallback: read the dial code shown next to the flag
    const wrap = input.closest(".iti");
    const dial = wrap && wrap.querySelector(".iti__selected-dial-code");
    const code = dial ? dial.textContent.trim() : "";
    return code ? code + " " + raw.replace(/^0+/, "") : raw;
  }

  async function submitReservationForm(e) {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget || $("#reservationForm");
    const val = (id) =>
      ((document.getElementById(id) || {}).value || "").trim();

    const data = {
      name: val("res-name"),
      phone: getFullPhone(document.getElementById("res-phone")),
      email: val("res-email"),
      checkin: val("res-checkin"),
      checkout: val("res-checkout"),
      adults: parseInt(val("res-adults"), 10) || 1,
      children: parseInt(val("res-children"), 10) || 0,
      suite: val("res-roomtype"),
      notes: val("res-notes"),
      language: I18N.lang,
      page: location.href,
    };

    // Validation
    if (!data.checkin || !data.checkout || data.checkout <= data.checkin) {
      setMessage(I18N.t("err_dates"));
      return;
    }
    if (data.checkin < todayISO()) {
      setMessage(I18N.t("err_past"));
      return;
    }
    const digits = digitsOf(data.phone).length;
    if (digits < 7 || digits > 15) {
      setMessage(I18N.t("err_phone"));
      return;
    }
    const suite = findSuite(data.suite);
    if (suite && data.adults + data.children > suite.maxGuests) {
      setMessage(I18N.t("err_guests", { max: suite.maxGuests }));
      return;
    }

    // Honeypot: bots fill hidden fields. Pretend success, send nothing.
    const trap = form && form.querySelector('[name="_gotcha"]');
    if (trap && trap.value) {
      showState("success");
      return;
    }

    const subject = "Reservation request — " + (data.suite || "Gonio");

    // No backend configured: do not fake success. Open the email app instead.
    if (!CONFIG.endpoint) {
      const body = [
        "Name: " + data.name,
        "Phone: " + data.phone,
        "Email: " + data.email,
        "Suite: " + data.suite,
        "Check-in: " + data.checkin,
        "Check-out: " + data.checkout,
        "Adults: " + data.adults + ", Children: " + data.children,
        "Notes: " + (data.notes || "-"),
      ].join("\n");
      window.location.href =
        "mailto:" +
        CONFIG.fallbackEmail +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      setMessage(
        I18N.t("err_no_service", {
          email: CONFIG.fallbackEmail,
          phone: CONFIG.fallbackPhone,
        }),
      );
      return;
    }

    sending = true;
    showState("loading");
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), CONFIG.requestTimeoutMs);
    try {
      const res = await fetch(CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(
          Object.assign({}, CONFIG.extraFields, data, {
            subject,
            _subject: subject,
          }),
        ),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      if (form) form.reset();
      showState("success");
    } catch (err) {
      console.error("Reservation request failed:", err);
      showState("form");
      setMessage(
        I18N.t("err_send", {
          phone: CONFIG.fallbackPhone,
          email: CONFIG.fallbackEmail,
        }),
      );
    } finally {
      clearTimeout(timer);
      sending = false;
    }
  }

  // Kept so an old hero booking bar (if any) still works
  function handleHeroBarSubmit(e) {
    e.preventDefault();
    const tier = document.getElementById("bar-tier");
    openBookingModal(tier ? tier.value : "");
  }

  function initHoneypot() {
    const form = $("#reservationForm");
    if (!form || form.querySelector('[name="_gotcha"]')) return;
    const h = document.createElement("input");
    h.type = "text";
    h.name = "_gotcha";
    h.tabIndex = -1;
    h.autocomplete = "off";
    h.setAttribute("aria-hidden", "true");
    h.style.cssText =
      "position:absolute;left:-9999px;width:1px;height:1px;opacity:0;";
    form.appendChild(h);
  }

  /* ══════════════════════════════════════════════════════════════
   SUITE DETAILS MODAL
   ══════════════════════════════════════════════════════════════ */
  function openSuiteDetails(title, area, bed, amenitiesStr) {
    const overlay = $("#suiteDetailsModal");
    if (!overlay) return;
    currentSuite = title; // stays English: used to preselect the booking form
    $("#modalSuiteTitle").textContent = I18N.phrase(title);
    $("#modalSuiteArea").textContent = I18N.phrase(area);
    $("#modalSuiteBed").textContent = I18N.phrase(bed);

    const box = $("#modalSuiteAmenities");
    if (box) {
      box.textContent = "";
      String(amenitiesStr || "")
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((text) => {
          const item = document.createElement("div");
          item.className = "amenity-item";
          const icon = document.createElement("span");
          icon.className = "material-symbols-outlined";
          icon.setAttribute("aria-hidden", "true");
          icon.textContent = "check_circle";
          item.append(icon, " " + I18N.phrase(text));
          box.appendChild(item);
        });
    }
    openOverlay(overlay);
  }

  function closeSuiteDetails() {
    const overlay = $("#suiteDetailsModal");
    if (overlay) closeOverlay(overlay);
  }

  function proceedFromDetails() {
    const overlay = $("#suiteDetailsModal");
    if (overlay) closeOverlay(overlay, true);
    openBookingModal(currentSuite);
  }

  /* ══════════════════════════════════════════════════════════════
   SUITE FILTER
   ══════════════════════════════════════════════════════════════ */
  function initFilter() {
    const btns = $$(".filter-btn");
    const cards = $$(".suite-card[data-category]");
    if (!btns.length) return;
    btns.forEach((b) =>
      b.setAttribute("aria-pressed", String(b.classList.contains("active"))),
    );
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        btns.forEach((b) => {
          const on = b === btn;
          b.classList.toggle("active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        cards.forEach((card) => {
          card.hidden = !(filter === "all" || card.dataset.category === filter);
        });
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════════════════════ */
  // Inline onclick="" handlers need these on window
  Object.assign(window, {
    I18N,
    openBookingModal,
    closeBookingModal,
    submitReservationForm,
    openSuiteDetails,
    closeSuiteDetails,
    proceedFromDetails,
    handleHeroBarSubmit,
  });

  function boot() {
    initHeader();
    initMobileNav();
    initActiveNav();
    initReveal();
    initGalleryIcons();
    initYear();
    initModals();
    initHoneypot();
    initDateInputs();
    initFilter();
    I18N.init();
  }

  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
