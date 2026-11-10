/* ============================================================
   GONIO — Translations (EN · KA · RU)

   How it works:
   - English text lives in the HTML. The `en` block below is only a
     fallback (for empty elements) and the source for JS messages.
   - KA / RU: if a key is missing, the HTML text is shown (never the key).
   - {n}, {max}, {phone}, {email} are filled in by main.js.
   - Brand name: still "FC GONIO" in the KA/RU text below. Once you
     decide, search & replace it in this file.
   ============================================================ */

window.FCGI18N = {
  /* ══════════════════════════════════════════════════
     ENGLISH
  ══════════════════════════════════════════════════ */
  en: {
    /* Nav */
    nav_home: "Home",
    nav_suites: "Suites",
    nav_about: "About",
    nav_facilities: "Facilities",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_contact: "Contact",
    nav_book_now: "Book Now",

    /* Hero */
    hero_badge: "Batumi Riviera · Georgia",
    hero_eyebrow: "A Sanctuary on the Black Sea Coast",
    hero_title_1: "FC GONIO",
    hero_title_2: "BATUMI",
    hero_sub:
      "Subtle elegance, coastal tranquility, and curated Georgian hospitality nestled where subtropical emerald hills meet the calm sea.",
    hero_cta_book: "Reserve Your Stay",
    hero_cta_disc: "Discover the Property",
    hero_scroll: "Scroll",
    hero_weather: "Maritime Stillness",

    /* Booking bar */
    bar_checkin: "Check-In",
    bar_checkout: "Check-Out",
    bar_guests: "Guests",
    bar_category: "Category",
    bar_book: "Book Now",
    bar_1adult: "1 Adult",
    bar_2adults: "2 Adults",
    bar_family: "2 Adults, 1 Child",
    bar_group: "3+ Guests",

    /* Suites */
    suite_deluxe: "Deluxe Sea View Suite",
    suite_exec: "Panoramic Executive Haven",
    suite_garden: "Garden Terrace Residence",
    suite_penthouse: "Penthouse Maritime Grand Suite",
    suite_penth_short: "Penthouse Maritime Suite",

    /* Introduction */
    intro_accent: "An Ode to Coastal Serenity",
    intro_h1: "Where Ancient Terroir Meets the Rhythm of the Black Sea",
    intro_p:
      "Perched along the protected waters of Gonio's shoreline, FC GONIO was conceived as an architectural retreat. Stripped of superficial excess, our sanctuary harmonizes clean Mediterranean lines with the time-honored warmth of Georgian hospitality.",
    intro_quote:
      '"In Gonio, the sea does not simply lap the shore — it sets the tempo for quiet reflection, private celebration, and restoration."',
    stat_suites: "Curated Suites",
    stat_coast: "Direct Coast Access",
    stat_concierge: "Dedicated Concierge",
    seal_label: "Seal of Distinction",
    pillar_arch: "Architectural Restraint",
    pillar_arch_b:
      "Natural travertine, light oak, and floor-to-ceiling panoramic glass.",
    pillar_view: "Uninterrupted Horizons",
    pillar_view_b:
      "Every living space commands a sweeping vista of the sea or sub-tropical hills.",
    pillar_conc: "Bespoke Concierge",
    pillar_conc_b:
      "Private yacht charters, Adjarian vineyard trails, personal wellness schedules.",
    pillar_food: "Authentic Terroir",
    pillar_food_b:
      "Artisanal breakfasts featuring regional alpine cheeses, wild mountain honey, and seaside pastries.",

    /* Suites section */
    suites_accent: "Accommodations",
    suites_h1: "Spaces Crafted for Stillness",
    suites_sub:
      "Generous private sanctuaries styled in warm organic textures, expansive verandas, and panoramic sea vistas.",
    btn_book_room: "Book This Room",
    btn_details: "Details",
    btn_view_all: "View All Suites & Residences",
    s1_meta: "48 m² · King Bed · Sea View",
    s1_desc:
      "Floor-to-ceiling glass doors opening to the ocean breeze. Fitted with natural oak cabinetry, linen draping, and an expansive sunset lounge.",
    s2_meta: "72 m² · King Bed · Panoramic",
    s2_desc:
      "A generous living area with wrap-around views, hand-woven Georgian textile accents, and a private plunge terrace above the sea.",
    s3_meta: "58 m² · King Bed · Garden",
    s3_desc:
      "Set amid subtropical gardens with a private stone terrace, outdoor daybed, and direct garden access — serene and utterly secluded.",
    from_label: "From",
    per_night: "per night",

    /* Facilities */
    fac_accent: "Wellness & Leisure",
    fac_h1: "Amenities Conceived for the Discerning",
    fac_p:
      "Every facility at FC GONIO has been conceived as an extension of the suite — a continuation of the calm, restorative atmosphere that defines our coastal sanctuary.",
    fac_pool: "Infinity Sea Pool",
    fac_pool_b:
      "Cascading infinity edge with direct Black Sea panorama. Heated season-round.",
    fac_spa: "Riviera Wellness Spa",
    fac_spa_b:
      "Georgian mineral baths, hammam rituals, and bespoke aromatherapy treatments.",
    fac_dining: "Coastal Dining Terrace",
    fac_dining_b:
      "Open-air table service with Adjarian wine pairings and freshly caught Black Sea seafood.",
    fac_gym: "Movement & Training Studio",
    fac_gym_b:
      "Floor-to-ceiling glazing, Technogym equipment, and in-room yoga programming on request.",

    /* Gallery */
    gal_accent: "Architectural Gallery",
    gal_h1: "Through Glass & Light",

    /* Location */
    loc_accent: "Riviera Location",
    loc_h1: "Where History Meets the Sea — Gonio, Batumi",
    loc_p:
      "Situated just south of central Batumi, Gonio has celebrated its pristine marine microclimate since Roman antiquity. The historic Gonio-Apsaros Fortress stands minutes away, while our seaside boulevard offers quiet morning strolls away from downtown commotion.",
    loc_airport: "Batumi International Airport (BUS)",
    loc_fortress: "Historic Gonio Fortress",
    loc_boulevard: "Batumi Boulevard & Old Town",
    loc_sarpi: "Sarpi Border & Coastal Cliffs",
    loc_hotel_name: "GONIO Batumi Hotel",
    loc_address:
      "Gonio Seaside Promenade, Autonomous Republic of Adjara, Georgia",

    /* CTA / Contact */
    cta_accent: "Begin Your Stay",
    cta_h1: "Reserve Your Corner of the Black Sea",
    cta_p:
      "Our reservation team is available around the clock to craft a bespoke itinerary that matches your vision of the perfect coastal retreat.",
    cta_reserve: "Make a Reservation",
    cta_email: "reservations@fcgoniohotel.ge",

    /* Footer */
    footer_desc:
      "An architectural haven perched along the Black Sea coastline. Curated hospitality, serene maritime living, and discreet luxury in Batumi, Georgia.",
    footer_nav: "Navigation",
    footer_contact: "Concierge & Inquiries",
    footer_copy: "© 2025 GONIO Batumi Hotel & Residences. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Stay",
    footer_imprint: "Imprint",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",
    footer_linkedin: "LinkedIn",

    /* Logo */
    logo_name: "Gonio Batumi Hotel",
    logo_name_full: "Gonio Batumi Hotel",

    /* FAB */
    fab_label: "Concierge",

    /* Booking modal */
    modal_eyebrow: "Gonio Batumi Hotel Reservation",
    modal_title: "Request Your Stay",
    modal_subtitle:
      "Our reservation administrator will review availability and contact you personally to finalize your booking.",
    field_name: "Guest Full Name",
    field_phone: "Contact Phone",
    field_email: "Email Address",
    field_checkin: "Check-In Date",
    field_checkout: "Check-Out Date",
    field_adults: "Adults",
    field_children: "Children",
    field_room: "Suite Category",
    field_notes: "Special Inquiries or Arrival Notes",
    notes_ph: "Airport transfer, dietary requests, floor preference...",
    btn_submit: "Submit Reservation Request",
    loading_msg: "Submitting to Concierge Desk…",
    success_badge: "Inquiry Received",
    success_title: "Your request is with our team",
    success_p:
      "Our concierge will reach out within 2 hours to confirm availability and finalize the details of your stay.",
    btn_close: "Close",
    adults_1: "1 Adult",
    adults_2: "2 Adults",
    adults_3: "3 Adults",
    adults_4: "4 Adults",
    children_0: "0 Children",
    children_1: "1 Child",
    children_2: "2 Children",

    /* Form messages (used by main.js) */
    err_dates: "Check-out date must be after check-in date.",
    err_past: "Check-in date cannot be in the past.",
    err_phone: "Please enter a valid phone number.",
    err_guests: "This suite accommodates up to {max} guests.",
    err_send:
      "We could not send your request. Please try again or call {phone}.",
    err_no_service:
      "We opened your email app with the request filled in — press Send to finish. If nothing opened, write to {email} or call {phone}.",

    /* Suite details modal */
    det_badge: "Suite Specification",
    det_area_label: "Floor Plan",
    det_bed_label: "Bedding",
    det_amenities: "Included Amenities",
    det_proceed: "Proceed to Reservation",

    /* Why section */
    why_eyebrow: "THE HOTEL EXPERIENCE",
    why_heading_main: "Why Choose",
    why_heading_span: "Gonio Batumi Hotel?",
    why_desc:
      "Discover a welcoming place to stay, where comfort, a remarkable location and the warmth of Georgian hospitality come together. Experience a stay designed around the things that matter most.",
    why_f1_title: "An Exceptional Location",
    why_f1_desc:
      "Discover the beauty of Gonio and enjoy the atmosphere of Georgia's Black Sea coast.",
    why_f2_title: "Comfort in Every Detail",
    why_f2_desc:
      "Thoughtfully designed accommodation focused on making every stay comfortable.",
    why_f3_title: "Georgian Hospitality",
    why_f3_desc:
      "A warm welcome inspired by Georgia's long-standing tradition of hospitality.",
    why_f4_title: "Thoughtful Service",
    why_f4_desc:
      "Attentive care and a welcoming atmosphere throughout your stay.",
    why_subtitle: "A PLACE TO FEEL AT HOME",

    /* Badges / nav links */
    badge_signature: "Signature Suite",
    badge_executive: "Executive",
    badge_garden: "Garden",
    penth_exclusive: "Most Exclusive Residence",
    nav_link_suites: "Accommodations & Suites",
    nav_link_fac: "Wellness & Pool Facilities",
    nav_link_gal: "Architectural Gallery",
    nav_link_loc: "Black Sea Riviera Location",
    nav_link_about: "The Heritage & Story",

    /* Suites page */
    sp_accent: "Gonio Living Collection",
    sp_h1: "Suites & Accommodations",
    sp_tagline: "Sanctuaries of Light & Tactile Comfort.",
    sp_p: "Framed by floor-to-ceiling glass, natural travertine masonry, and bleached oak millwork, every residence provides an uninterrupted sensory dialogue with the Black Sea horizon.",
    sp_horizons: "Unobstructed Horizons",
    sp_terraces: "Private Terraces",
    filter_all: "All Suites ({n})",
    filter_sea: "Sea Panorama",
    filter_res: "Residences",
    filter_garden: "Garden & Studios",
    filter_cta: "Discreet Inquiries & Custom Configurations",
    btn_reserve_pent: "Reserve Penthouse",
    btn_full_det: "Full Details",
    inc_breakfast: "Daily Breakfast",
    inc_breakfast_d: "Artisanal Georgian breakfast included with every suite.",
    inc_transfer: "Airport Transfer",
    inc_transfer_d: "Complimentary transfer from Batumi International Airport.",
    inc_beach: "Beach Access",
    inc_beach_d: "Exclusive 100m private beach strip with sun loungers.",
    inc_concierge: "24/7 Concierge",
    inc_concierge_d: "Personal concierge for every guest, day and night.",
  },

  /* ══════════════════════════════════════════════════
     GEORGIAN — ქართული  (needs native review)
  ══════════════════════════════════════════════════ */
  ka: {
    nav_home: "მთავარი",
    nav_suites: "სუიტები",
    nav_about: "ჩვენ შესახებ",
    nav_facilities: "სერვისები",
    nav_gallery: "გალერეა",
    nav_location: "მდებარეობა",
    nav_contact: "კონტაქტი",
    nav_book_now: "დაჯავშნა",

    hero_badge: "ბათუმის რივიერა · საქართველო",
    hero_eyebrow: "თავშესაფარი შავი ზღვის სანაპიროზე",
    hero_title_1: "GONIO",
    hero_title_2: "BATUMI",
    hero_sub:
      "დახვეწილი ელეგანტობა, სანაპირო სიმშვიდე და ქართული სტუმართმოყვარეობა, სადაც სუბტროპიკული ბორცვები ხვდება მშვიდ ზღვას.",
    hero_cta_book: "დაჯავშნეთ ნომერი",
    hero_cta_disc: "გაიცანით სასტუმრო",
    hero_scroll: "გადაახვიეთ",
    hero_weather: "საზღვაო სიმშვიდე",

    bar_checkin: "ჩამოსვლა",
    bar_checkout: "გამგზავრება",
    bar_guests: "სტუმრები",
    bar_category: "კატეგორია",
    bar_book: "დაჯავშნა",
    bar_1adult: "1 ზრდასრული",
    bar_2adults: "2 ზრდასრული",
    bar_family: "2 ზრდასრული, 1 ბავშვი",
    bar_group: "3+ სტუმარი",

    suite_deluxe: "დელუქს სუიტი ზღვის ხედით",
    suite_exec: "პანორამული აღმასრულებელი სუიტი",
    suite_garden: "ბაღის ტერასის რეზიდენცია",
    suite_penthouse: "პენტჰაუსი — საზღვაო გრანდ სუიტი",
    suite_penth_short: "პენტჰაუსი",

    intro_accent: "სანაპირო სიმშვიდის ოდა",
    intro_h1: "სადაც ძველი ტერუარი შეხვდება შავი ზღვის რიტმს",
    intro_p:
      "გონიოს სანაპიროზე მდებარე GONIO შექმნილია როგორც არქიტექტურული თავშესაფარი, სადაც ქართული სტუმართმოყვარეობა ხვდება ხმელთაშუა ზღვის სტილს.",
    intro_quote:
      '"გონიოში ზღვა მხოლოდ სანაპიროს ტალღებს არ ჰქმნის — ის განსაზღვრავს ჩვენი ჩაფიქრების, სიხარულისა და აღდგენის ტემპს."',
    stat_suites: "სუიტი",
    stat_coast: "პირდაპირი გასასვლელი სანაპიროზე",
    stat_concierge: "კონსიერჟი 24/7",
    seal_label: "განსხვავების ბეჭედი",
    pillar_arch: "არქიტექტურული სიზუსტე",
    pillar_arch_b: "ბუნებრივი ტრავერტინი, ღია მუხა და პანორამული შუშა.",
    pillar_view: "შეუფერხებელი ჰორიზონტი",
    pillar_view_b:
      "ყველა სივრცე ხსნის ზღვის ან სუბტროპიკული ბორცვების ფართო ხედს.",
    pillar_conc: "ინდივიდუალური კონსიერჟი",
    pillar_conc_b:
      "პირადი იახტის ქირავნობა, ვენახების ტური, პერსონალური ველნეს-პროგრამები.",
    pillar_food: "ავთენტური გემო",
    pillar_food_b:
      "საუზმე ადგილობრივი ყველით, მთის თაფლით და სანაპიროს ნამცხვრებით.",

    suites_accent: "განთავსება",
    suites_h1: "სივრცეები სიმშვიდისთვის",
    suites_sub:
      "პრივატული თავშესაფრები ვრცელი ვერანდებითა და ზღვის პანორამული ხედებით.",
    btn_book_room: "დაჯავშნა",
    btn_details: "დეტალები",
    btn_view_all: "ყველა სუიტის ნახვა",
    s1_meta: "48 მ² · კინგ საწოლი · ზღვის ხედი",
    s1_desc:
      "ზღვის ქარი სრულ სიმაღლეზე გახსნილი შუშის კარების გავლით. მუხის კარადები, სელის ქსოვილი და ვრცელი ვერანდა.",
    s2_meta: "72 მ² · კინგ საწოლი · პანორამა",
    s2_desc:
      "ფართო სხვადასხვა მხარეს მიმართული სივრცე ქართული ტექსტილით, პლუნჯ ტერასით ზღვაზე.",
    s3_meta: "58 მ² · კინგ საწოლი · ბაღი",
    s3_desc:
      "სუბტროპიკულ ბაღებში, პირადი ქვის ტერასით, გარე დივნებითა და ბაღის პირდაპირი გასასვლელით.",
    from_label: "დან",
    per_night: "ღამეში",

    fac_accent: "ველნესი და დასვენება",
    fac_h1: "სერვისები გამორჩეული სტუმრისთვის",
    fac_p:
      "GONIO-ს ყველა სერვისი სუიტის გაგრძელებაა — სიმშვიდის ატმოსფეროს გაგრძელება.",
    fac_pool: "ინფინიტი აუზი",
    fac_pool_b:
      "ინფინიტი კასკადი შავი ზღვის პანორამით. გათბობა მთელი სეზონის განმავლობაში.",
    fac_spa: "რივიერას სპა",
    fac_spa_b: "ქართული მინერალური აბაზანები, ჰამამი და არომათერაპია.",
    fac_dining: "სანაპირო სასადილო ტერასა",
    fac_dining_b:
      "ღია ცის ქვეშ, აჭარული ღვინით და ახლად დაჭერილი ზღვის პროდუქტებით.",
    fac_gym: "სპორტული სტუდია",
    fac_gym_b:
      "Technogym-ის სამუშაო ადგილები, პანორამული შუშა, იოგა მოთხოვნით.",

    gal_accent: "არქიტექტურული გალერეა",
    gal_h1: "შუშისა და სინათლის გავლით",

    loc_accent: "რივიერას მდებარეობა",
    loc_h1: "სადაც ისტორია შეხვდება ზღვას — გონიო, ბათუმი",
    loc_p:
      "ბათუმის სამხრეთით, გონიოს მდებარეობა დაფასებულია კეთილი ზღვის მიკროკლიმატის გამო. ისტორიული გონიო-აფსაროსის ციხე — რამდენიმე წუთის სავალზე.",
    loc_airport: "ბათუმის საერთაშორისო აეროპორტი (BUS)",
    loc_fortress: "გონიოს ციხე",
    loc_boulevard: "ბათუმის ბულვარი და ძველი ქალაქი",
    loc_sarpi: "სარფის საზღვარი და სანაპირო კლდეები",
    loc_hotel_name: "GONIO ბათუმი",
    loc_address:
      "გონიოს სანაპირო პრომენადი, აჭარის ავტონომიური რესპუბლიკა, საქართველო",

    cta_accent: "დაიწყეთ თქვენი დასვენება",
    cta_h1: "დაჯავშნეთ თქვენი კუთხე შავ ზღვაზე",
    cta_p:
      "ჩვენი სარეზერვო გუნდი მუდმივად მზადაა შეადგინოს ინდივიდუალური მარშრუტი.",
    cta_reserve: "დაჯავშნა",
    cta_email: "reservations@goniohotel.ge",

    footer_desc:
      "არქიტექტურული თავშესაფარი შავი ზღვის სანაპიროზე. დახვეწილი ლუქსი ბათუმში, საქართველო.",
    footer_nav: "ნავიგაცია",
    footer_contact: "კონსიერჟი და შეკითხვები",
    footer_copy: "© 2025 GONIO ბათუმი. ყველა უფლება დაცულია.",
    footer_privacy: "კონფიდენციალურობის პოლიტიკა",
    footer_terms: "ყოფნის პირობები",
    footer_imprint: "იურიდიული ინფორმაცია",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",
    footer_linkedin: "LinkedIn",

    logo_name: "Gonio Batumi Hotel",
    logo_name_full: "Gonio Batumi Hotel",

    fab_label: "კონსიერჟი",

    modal_eyebrow: "GONIO — ჯავშანი",
    modal_title: "მოითხოვეთ ნომერი",
    modal_subtitle:
      "ჩვენი ადმინისტრატორი გადაამოწმებს ხელმისაწვდომობას და დაგიკავშირდებათ.",
    field_name: "სტუმრის სრული სახელი",
    field_phone: "საკონტაქტო ტელეფონი",
    field_email: "ელ-ფოსტა",
    field_checkin: "ჩამოსვლის თარიღი",
    field_checkout: "გამგზავრების თარიღი",
    field_adults: "ზრდასრულები",
    field_children: "ბავშვები",
    field_room: "სუიტის კატეგორია",
    field_notes: "სპეციალური მოთხოვნები",
    notes_ph: "ტრანსფერი, კვების მოთხოვნები, სართული...",
    btn_submit: "ჯავშნის გაგზავნა",
    loading_msg: "კონსიერჟთან გაგზავნა…",
    success_badge: "მოთხოვნა მიღებულია",
    success_title: "თქვენი მოთხოვნა ჩვენს გუნდთანაა",
    success_p: "კონსიერჟი 2 საათის განმავლობაში დაგიკავშირდებათ.",
    btn_close: "დახურვა",
    adults_1: "1 ზრდასრული",
    adults_2: "2 ზრდასრული",
    adults_3: "3 ზრდასრული",
    adults_4: "4 ზრდასრული",
    children_0: "0 ბავშვი",
    children_1: "1 ბავშვი",
    children_2: "2 ბავშვი",

    err_dates: "გამგზავრების თარიღი უნდა იყოს ჩამოსვლის თარიღის შემდეგ.",
    err_past: "ჩამოსვლის თარიღი წარსულში ვერ იქნება.",
    err_phone: "გთხოვთ, მიუთითოთ სწორი ტელეფონის ნომერი.",
    err_guests: "ამ სუიტში მაქსიმუმ {max} სტუმარი თავსდება.",
    err_send:
      "მოთხოვნის გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან დაგვირეკეთ: {phone}.",
    err_no_service:
      "ელფოსტის პროგრამა გაიხსნა მზა მოთხოვნით — დასასრულებლად დააჭირეთ გაგზავნას. თუ არაფერი გაიხსნა, მოგვწერეთ {email} ან დაგვირეკეთ {phone}.",

    det_badge: "სუიტის სპეციფიკაცია",
    det_area_label: "ფართობი",
    det_bed_label: "საწოლი",
    det_amenities: "სერვისები",
    det_proceed: "ჯავშნის გაგრძელება",

    why_eyebrow: "სასტუმროს გამოცდილება",
    why_heading_main: "რატომ აირჩიოთ",
    why_heading_span: "გონიო ბათუმი?",
    why_desc:
      "აღმოაჩინეთ კომფორტული გარემო, სადაც ქართული სტუმართმოყვარეობა შეხვდება შავი ზღვის სანაპიროს სილამაზეს.",
    why_f1_title: "განსაკუთრებული მდებარეობა",
    why_f1_desc: "გონიოს სილამაზე და შავი ზღვის სანაპიროს ატმოსფერო.",
    why_f2_title: "კომფორტი თითოეულ დეტალში",
    why_f2_desc:
      "გულდასმით შექმნილი განთავსება, რომელიც ყოველ ვიზიტს კომფორტულს ხდის.",
    why_f3_title: "ქართული სტუმართმოყვარეობა",
    why_f3_desc:
      "თბილი მიღება, ქართული ტრადიციული სტუმართმოყვარეობის შთაგონებით.",
    why_f4_title: "ყურადღებიანი სერვისი",
    why_f4_desc: "ყურადღებიანი მომსახურება და სტუმართმოყვარე გარემო.",
    why_subtitle: "სახლივით გაგრძნობინებთ",

    badge_signature: "სიგნატურული სუიტი",
    badge_executive: "ექზეკუტივი",
    badge_garden: "ბაღი",
    penth_exclusive: "ყველაზე ექსკლუზიური რეზიდენცია",
    nav_link_suites: "განთავსება და სუიტები",
    nav_link_fac: "ველნესი და სერვისები",
    nav_link_gal: "გალერეა",
    nav_link_loc: "მდებარეობა",
    nav_link_about: "ისტორია",

    sp_accent: "Gonio — საცხოვრებელი კოლექცია",
    sp_h1: "სუიტები და განთავსება",
    sp_tagline: "სინათლისა და ტაქტილური კომფორტის თავშესაფრები.",
    sp_p: "ბუნებრივი ტრავერტინი, გაუხუნარი მუხა და სრული სიმაღლის შუშა — ყველა რეზიდენცია ზღვის ჰორიზონტთან უწყვეტ დიალოგს ქმნის.",
    sp_horizons: "შეუფერხებელი ჰორიზონტი",
    sp_terraces: "პირადი ტერასები",
    filter_all: "ყველა სუიტი ({n})",
    filter_sea: "ზღვის პანორამა",
    filter_res: "რეზიდენციები",
    filter_garden: "ბაღი",
    filter_cta: "ინდივიდუალური კონფიგურაციები",
    btn_reserve_pent: "პენტჰაუსის დაჯავშნა",
    btn_full_det: "სრული დეტალები",
    inc_breakfast: "ყოველდღიური საუზმე",
    inc_breakfast_d: "ტრადიციული ქართული საუზმე ყველა სუიტში.",
    inc_transfer: "აეროპორტის ტრანსფერი",
    inc_transfer_d: "უფასო ტრანსფერი ბათუმის საერთაშორისო აეროპორტიდან.",
    inc_beach: "სანაპიროზე გასვლა",
    inc_beach_d: "ექსკლუზიური 100 მ პირადი სანაპირო.",
    inc_concierge: "კონსიერჟი 24/7",
    inc_concierge_d: "პირადი კონსიერჟი ყოველი სტუმრისთვის.",
  },

  /* ══════════════════════════════════════════════════
     RUSSIAN — Русский  (needs native review)
  ══════════════════════════════════════════════════ */
  ru: {
    nav_home: "Главная",
    nav_suites: "Номера",
    nav_about: "О нас",
    nav_facilities: "Удобства",
    nav_gallery: "Галерея",
    nav_location: "Расположение",
    nav_contact: "Контакты",
    nav_book_now: "Забронировать",

    hero_badge: "Ривьера Батуми · Грузия",
    hero_eyebrow: "Тихая гавань на берегу Чёрного моря",
    hero_title_1: "GONIO",
    hero_title_2: "БАТУМИ",
    hero_sub:
      "Утончённая элегантность, покой у берега моря и грузинское гостеприимство там, где субтропические холмы встречаются со спокойным морем.",
    hero_cta_book: "Забронировать номер",
    hero_cta_disc: "Узнать об отеле",
    hero_scroll: "Листать",
    hero_weather: "Морская тишина",

    bar_checkin: "Заезд",
    bar_checkout: "Выезд",
    bar_guests: "Гости",
    bar_category: "Категория",
    bar_book: "Забронировать",
    bar_1adult: "1 взрослый",
    bar_2adults: "2 взрослых",
    bar_family: "2 взрослых, 1 ребёнок",
    bar_group: "3+ гостей",

    suite_deluxe: "Делюкс с видом на море",
    suite_exec: "Панорамный Executive",
    suite_garden: "Садовая терраса",
    suite_penthouse: "Пентхаус Гранд Сюит",
    suite_penth_short: "Пентхаус",

    intro_accent: "Ода прибрежному покою",
    intro_h1: "Там, где древний терруар встречает ритм Чёрного моря",
    intro_p:
      "Расположенный на берегу защищённой бухты Гонио, GONIO был задуман как архитектурный ретрит, сочетающий средиземноморские линии с грузинским гостеприимством.",
    intro_quote:
      '"В Гонио море не просто плещет о берег — оно задаёт темп тихому созерцанию, частным торжествам и восстановлению."',
    stat_suites: "Номеров",
    stat_coast: "Прямой выход к морю",
    stat_concierge: "Консьерж 24/7",
    seal_label: "Знак отличия",
    pillar_arch: "Архитектурная сдержанность",
    pillar_arch_b:
      "Натуральный травертин, светлый дуб и панорамное остекление от пола до потолка.",
    pillar_view: "Бескрайние горизонты",
    pillar_view_b:
      "Каждое пространство открывает виды на море или субтропические холмы.",
    pillar_conc: "Индивидуальный консьерж",
    pillar_conc_b:
      "Аренда яхты, виноградные туры по Аджарии, персональные велнес-программы.",
    pillar_food: "Аутентичный терруар",
    pillar_food_b:
      "Завтраки с горными сырами, диким мёдом и свежей выпечкой с побережья.",

    suites_accent: "Размещение",
    suites_h1: "Пространства для умиротворения",
    suites_sub:
      "Просторные уединённые резиденции с тёплыми натуральными текстурами, верандами и морскими панорамами.",
    btn_book_room: "Забронировать",
    btn_details: "Подробнее",
    btn_view_all: "Все номера и резиденции",
    s1_meta: "48 м² · Кровать King · Вид на море",
    s1_desc:
      "Стеклянные двери в пол открываются к морскому бризу. Шкафы из дуба, льняной текстиль, просторная лаунж-зона.",
    s2_meta: "72 м² · Кровать King · Панорама",
    s2_desc:
      "Просторная зона с круговым обзором, грузинский текстиль ручной работы и частная терраса с плунжем над морем.",
    s3_meta: "58 м² · Кровать King · Сад",
    s3_desc:
      "В субтропическом саду с частной каменной террасой, уличным диваном и прямым выходом в сад.",
    from_label: "От",
    per_night: "за ночь",

    fac_accent: "Велнес и отдых",
    fac_h1: "Удобства для взыскательных гостей",
    fac_p:
      "Каждый объект GONIO создан как продолжение номера — атмосфера покоя на всей территории.",
    fac_pool: "Инфинити-бассейн",
    fac_pool_b:
      "Каскадный бассейн с панорамой на Чёрное море. Отопление круглый год.",
    fac_spa: "СПА Ривьера",
    fac_spa_b: "Грузинские минеральные ванны, хаммам и ароматерапия.",
    fac_dining: "Прибрежная обеденная терраса",
    fac_dining_b:
      "Обслуживание под открытым небом с аджарскими винами и свежепойманной рыбой.",
    fac_gym: "Фитнес-студия",
    fac_gym_b:
      "Оборудование Technogym, панорамное остекление, йога по запросу.",

    gal_accent: "Архитектурная галерея",
    gal_h1: "Сквозь стекло и свет",

    loc_accent: "Расположение на ривьере",
    loc_h1: "Там, где история встречает море — Гонио, Батуми",
    loc_p:
      "К югу от центра Батуми, Гонио известен своим морским микроклиматом с античных времён. Крепость Гонио-Апсар — в нескольких минутах.",
    loc_airport: "Международный аэропорт Батуми (BUS)",
    loc_fortress: "Крепость Гонио",
    loc_boulevard: "Бульвар Батуми и старый город",
    loc_sarpi: "Граница Сарпи и прибрежные скалы",
    loc_hotel_name: "GONIO Батуми",
    loc_address: "Приморская набережная Гонио, Аджария, Грузия",

    cta_accent: "Начните отдых",
    cta_h1: "Забронируйте свой уголок у Чёрного моря",
    cta_p:
      "Наша команда по бронированию круглосуточно готова составить индивидуальный маршрут вашей мечты.",
    cta_reserve: "Забронировать",
    cta_email: "reservations@goniohotel.ge",

    footer_desc:
      "Архитектурный приют на берегу Чёрного моря. Сдержанная роскошь в Батуми, Грузия.",
    footer_nav: "Навигация",
    footer_contact: "Консьерж и запросы",
    footer_copy: "© 2025 GONIO Батуми. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия пребывания",
    footer_imprint: "Правовая информация",
    footer_instagram: "Instagram",
    footer_facebook: "Facebook",
    footer_linkedin: "LinkedIn",

    logo_name: "Gonio Batumi Hotel",
    logo_name_full: "Gonio Batumi Hotel",

    fab_label: "Консьерж",

    modal_eyebrow: "Бронирование GONIO",
    modal_title: "Запрос на проживание",
    modal_subtitle:
      "Наш администратор проверит наличие мест и свяжется с вами лично.",
    field_name: "Полное имя гостя",
    field_phone: "Контактный телефон",
    field_email: "Электронная почта",
    field_checkin: "Дата заезда",
    field_checkout: "Дата выезда",
    field_adults: "Взрослые",
    field_children: "Дети",
    field_room: "Категория номера",
    field_notes: "Особые пожелания",
    notes_ph: "Трансфер, диетические предпочтения, этаж...",
    btn_submit: "Отправить запрос",
    loading_msg: "Отправка консьержу…",
    success_badge: "Запрос получен",
    success_title: "Ваш запрос у нашей команды",
    success_p: "Консьерж свяжется с вами в течение 2 часов для подтверждения.",
    btn_close: "Закрыть",
    adults_1: "1 взрослый",
    adults_2: "2 взрослых",
    adults_3: "3 взрослых",
    adults_4: "4 взрослых",
    children_0: "0 детей",
    children_1: "1 ребёнок",
    children_2: "2 ребёнка",

    err_dates: "Дата выезда должна быть позже даты заезда.",
    err_past: "Дата заезда не может быть в прошлом.",
    err_phone: "Укажите корректный номер телефона.",
    err_guests: "В этом номере могут разместиться не более {max} гостей.",
    err_send:
      "Не удалось отправить запрос. Попробуйте ещё раз или позвоните: {phone}.",
    err_no_service:
      "Мы открыли вашу почтовую программу с готовым запросом — нажмите «Отправить». Если ничего не открылось, напишите на {email} или позвоните: {phone}.",

    det_badge: "Характеристики номера",
    det_area_label: "Площадь",
    det_bed_label: "Кровать",
    det_amenities: "Включено",
    det_proceed: "Перейти к бронированию",

    why_eyebrow: "ОПЫТ ОТЕЛЯ",
    why_heading_main: "Почему выбирают",
    why_heading_span: "Gonio Batumi Hotel?",
    why_desc:
      "Откройте для себя уютное место, где комфорт, выгодное расположение и грузинское гостеприимство сочетаются воедино.",
    why_f1_title: "Исключительное расположение",
    why_f1_desc: "Красота Гонио и атмосфера черноморского побережья Грузии.",
    why_f2_title: "Комфорт в каждой детали",
    why_f2_desc:
      "Продуманный интерьер, ориентированный на максимальный комфорт гостей.",
    why_f3_title: "Грузинское гостеприимство",
    why_f3_desc:
      "Тёплый приём, вдохновлённый многовековой грузинской традицией гостеприимства.",
    why_f4_title: "Внимательный сервис",
    why_f4_desc:
      "Забота о гостях и дружелюбная атмосфера на протяжении всего пребывания.",
    why_subtitle: "ПОЧУВСТВУЙТЕ СЕБЯ КАК ДОМА",

    badge_signature: "Сигнатурный номер",
    badge_executive: "Executive",
    badge_garden: "Садовый",
    penth_exclusive: "Самая эксклюзивная резиденция",
    nav_link_suites: "Размещение и номера",
    nav_link_fac: "Велнес и бассейн",
    nav_link_gal: "Галерея",
    nav_link_loc: "Расположение",
    nav_link_about: "История отеля",

    sp_accent: "Коллекция Gonio",
    sp_h1: "Номера и размещение",
    sp_tagline: "Пространства света и тактильного комфорта.",
    sp_p: "Натуральный травертин, беленый дуб и стекло в пол — каждая резиденция в непрерывном диалоге с горизонтом Чёрного моря.",
    sp_horizons: "Бескрайние горизонты",
    sp_terraces: "Частные террасы",
    filter_all: "Все номера ({n})",
    filter_sea: "Вид на море",
    filter_res: "Резиденции",
    filter_garden: "Сад",
    filter_cta: "Индивидуальные запросы",
    btn_reserve_pent: "Забронировать пентхаус",
    btn_full_det: "Все подробности",
    inc_breakfast: "Завтрак",
    inc_breakfast_d: "Грузинский завтрак в каждом номере.",
    inc_transfer: "Трансфер",
    inc_transfer_d: "Бесплатный трансфер из аэропорта Батуми.",
    inc_beach: "Пляж",
    inc_beach_d: "Эксклюзивный пляж 100 м с шезлонгами.",
    inc_concierge: "Консьерж 24/7",
    inc_concierge_d: "Личный консьерж для каждого гостя.",
  },
};

/* ── Additions: missing keys, brand fixes, suite-details phrases ── */
Object.assign(window.FCGI18N.en, {
  logo_name: "GONIO BATUMI HOTEL",
  modal_eyebrow: "Gonio Batumi Hotel Reservation",
  loc_hotel_name: "Gonio Batumi Hotel",
  footer_rights: "Gonio Batumi Hotel & Residences. All rights reserved.",
  loc_d_airport: "12 km · 15 min",
  loc_d_fortress: "1.5 km · 3 min",
  loc_d_boulevard: "14 km · 20 min",
  loc_d_sarpi: "6 km · 8 min",
});

Object.assign(window.FCGI18N.ka, {
  logo_name: "GONIO BATUMI HOTEL",
  hero_title_1: "GONIO",
  hero_title_2: "BATUMI",
  why_heading_span: "Gonio Batumi Hotel?",
  modal_eyebrow: "Gonio Batumi — ჯავშანი",
  loc_hotel_name: "Gonio Batumi Hotel",
  footer_rights: "Gonio Batumi Hotel & Residences. ყველა უფლება დაცულია.",
  loc_d_airport: "12 კმ · 15 წთ",
  loc_d_fortress: "1.5 კმ · 3 წთ",
  loc_d_boulevard: "14 კმ · 20 წთ",
  loc_d_sarpi: "6 კმ · 8 წთ",
  phrases: {
    "Deluxe Sea View Suite": "დელუქს სუიტი ზღვის ხედით",
    "Panoramic Executive Haven": "პანორამული აღმასრულებელი სუიტი",
    "Garden Terrace Residence": "ბაღის ტერასის რეზიდენცია",
    "48 m²": "48 მ²",
    "72 m²": "72 მ²",
    "58 m²": "58 მ²",
    "King Size Bed & Balcony": "კინგ საწოლი და აივანი",
    "King Bed & Plunge Terrace": "კინგ საწოლი და პლუნჯ ტერასა",
    "King Bed & Garden Access": "კინგ საწოლი და ბაღში გასასვლელი",
    "High-speed Fiber": "მაღალსიჩქარიანი ოპტიკური ინტერნეტი",
    "Marble Rainfall Shower": "მარმარილოს საშხაპე ტროპიკული წვიმით",
    "In-room Bar": "მინი-ბარი ნომერში",
    "24/7 Concierge": "კონსიერჟი 24/7",
    "Sea-view Terrace": "ტერასა ზღვის ხედით",
    "Linen Robes": "სელის ხალათები",
    "Panoramic Glazing": "პანორამული შუშა",
    "Espresso Machine": "ესპრესოს აპარატი",
    "Butler Service": "ბატლერის სერვისი",
    "Deep-soak Tub": "ღრმა აბაზანა",
    "Walk-in Wardrobe": "გარდერობის ოთახი",
    "Private Terrace": "პირადი ტერასა",
    "Private Stone Terrace": "პირადი ქვის ტერასა",
    "Outdoor Daybed": "გარე დივანი",
    "Botanical Garden Access": "ბოტანიკურ ბაღში გასასვლელი",
    "Rainfall Shower": "ტროპიკული შხაპი",
    "Mini Library": "მინი-ბიბლიოთეკა",
  },
});

Object.assign(window.FCGI18N.ru, {
  logo_name: "GONIO BATUMI HOTEL",
  hero_title_1: "GONIO",
  hero_title_2: "BATUMI",
  modal_eyebrow: "Бронирование Gonio Batumi",
  loc_hotel_name: "Gonio Batumi Hotel",
  footer_rights: "Gonio Batumi Hotel & Residences. Все права защищены.",
  loc_d_airport: "12 км · 15 мин",
  loc_d_fortress: "1,5 км · 3 мин",
  loc_d_boulevard: "14 км · 20 мин",
  loc_d_sarpi: "6 км · 8 мин",
  phrases: {
    "Deluxe Sea View Suite": "Делюкс с видом на море",
    "Panoramic Executive Haven": "Панорамный Executive",
    "Garden Terrace Residence": "Садовая терраса",
    "48 m²": "48 м²",
    "72 m²": "72 м²",
    "58 m²": "58 м²",
    "King Size Bed & Balcony": "Кровать King и балкон",
    "King Bed & Plunge Terrace": "Кровать King и терраса с купелью",
    "King Bed & Garden Access": "Кровать King и выход в сад",
    "High-speed Fiber": "Высокоскоростной оптоволоконный интернет",
    "Marble Rainfall Shower": "Мраморный тропический душ",
    "In-room Bar": "Мини-бар в номере",
    "24/7 Concierge": "Консьерж 24/7",
    "Sea-view Terrace": "Терраса с видом на море",
    "Linen Robes": "Льняные халаты",
    "Panoramic Glazing": "Панорамное остекление",
    "Espresso Machine": "Эспрессо-машина",
    "Butler Service": "Услуги дворецкого",
    "Deep-soak Tub": "Глубокая ванна",
    "Walk-in Wardrobe": "Гардеробная",
    "Private Terrace": "Частная терраса",
    "Private Stone Terrace": "Частная каменная терраса",
    "Outdoor Daybed": "Уличный диван-кровать",
    "Botanical Garden Access": "Выход в ботанический сад",
    "Rainfall Shower": "Тропический душ",
    "Mini Library": "Мини-библиотека",
  },
});
