(function () {
  "use strict";

  const translations = {
    id: {
      menu_home: "Halaman Utama",
      menu_about: "Tentang Kami",
      menu_services: "Layanan & Operasional",
      menu_structure: "Struktur Organisasi",
      menu_gallery: "Galeri Armada",
      menu_contact: "Hubungi Kami",
      welcome_title: "Selamat Datang di Diamond Taxi",
      welcome_subtitle:
        "Anda Nyaman dan Aman Bersama Kami, Komitmen Kami Segalanya Untuk Anda",
      btn_start: "Pelajari Tentang Diamond Taxi",
      featured_title_1: "Layanan Antar Jemput",
      featured_desc_1: "Antar Jemput Reguler, Harian, dan Bandara/Stasiun.",
      featured_title_2: "Layanan Korporasi",
      featured_desc_2:
        "Kerjasama dengan perusahaan / bisnis untuk kebutuhan transportasi.",
      featured_title_3: "Layanan 24/7",
      featured_desc_3:
        "Layanan taksi yang tersedia sepanjang waktu, baik siang maupun malam.",
      about_title: "Tentang Kami",
      about_intro1:
        "PT. Intan Pusaka Pratama (IPP) adalah perusahaan jasa transportasi terpercaya yang berfokus pada layanan taksi di wilayah Jabodetabek. Didirikan pada tahun 2004, IPP senantiasa beradaptasi dengan perkembangan industri transportasi yang dinamis untuk memastikan kepuasan pelanggan melalui manajemen profesional dan layanan berkualitas.",
      about_intro2: `Intan Pusaka Trans Sdn. Bhd. ("IPTSB"), yang didirikan di Malaysia berdasarkan Undang-Undang Perusahaan 2016, telah didirikan oleh para pemegang saham PT Intan Pusaka Pratama (“PT IPP”) sebagai perusahaan Malaysia yang berdedikasi untuk mempelopori ekspansi strategis PT IPP ke sektor taksi Kendaraan Listrik (EV) di Indonesia. PT IPP, operator berpengalaman selama 20 tahun dengan merek "Diamond Taxi", merupakan pelopor dalam transportasi berkelanjutan di Indonesia. Perusahaan saat ini mengoperasikan 100 kendaraan di wilayah Jabodetabek dengan lisensi A yang mengizinkan hingga 400 taksi dan memegang otorisasi khusus untuk menggunakan taksi EV di dalam Area Operasional Bandara.`,
      vision_mission_title: "Visi & Misi",
      vision_title: "Visi:",
      mission_title: "Misi:",
      vision:
        "Menjadi perusahaan jasa transportasi yang terpercaya dan profesional.",
      mission_1: "Memberikan rasa aman dan nyaman bagi pelanggan.",
      mission_2: "Menyediakan armada yang selalu siap melayani.",
      mission_3: "Mengembangkan manajemen melalui inovasi.",
      legalitas_title_1: "Legalitas Perusahaan",
      legalitas_subtitle_1:
        "Akta Pendirian Perseroan No.20 Tgl.19-10-2004 + SK Kemenkumham.",
      service_title: "Layanan & Operasional",
      service_description:
        "Kami menyediakan layanan taksi profesional dan terpercaya untuk memenuhi kebutuhan transportasi Anda. Dengan armada kendaraan yang nyaman dan mitra pengemudi berpengalaman, kami siap mengantar Anda ke tujuan dengan aman dan tepat waktu. Kami beroperasi 24 jam sehari, 7 hari seminggu, sehingga Anda dapat memesan layanan kapan saja sesuai kebutuhan.",
      service_point_1: "Layanan Antar-Jemput",
      service_point_1_desc:
        "Solusi transportasi harian Anda untuk perjalanan ke kantor, sekolah, atau tempat lainnya.",
      service_point_2: "Taksi Bandara",
      service_point_2_desc:
        "Layanan cepat dan nyaman menuju atau dari bandara dengan harga bersaing.",
      service_point_3: "Layanan Korporasi",
      service_point_3_desc:
        "Kerjasama dengan perusahaan untuk kebutuhan transportasi karyawan.",
      service_point_4: "Standar Keamanan Tinggi",
      service_point_4_desc:
        "Semua kendaraan kami dilengkapi dengan fitur keamanan modern untuk melindungi penumpang.",
      service_point_5: "Kebersihan dan Kenyamanan",
      service_point_5_desc:
        "Setiap kendaraan selalu dalam kondisi bersih dan nyaman.",
      service_point_6: "Dukungan Pelanggan",
      service_point_6_desc:
        "Tim layanan pelanggan kami siap membantu Anda selama 24/7 untuk setiap pertanyaan atau keluhan.",
      structure_title: "Struktur Organisasi",
      structure_sub_1: "Dewan Direksi PT. Intan Pusaka Pratama",
      stucture_position_1: "Direktur Utama",
      stucture_position_2: "Direktur",
      stucture_position_3: "Komisaris",
      structure_sub_2: "Dewan Direksi Intan Pusaka Trans Sdn. Bhd",
      gallery_title: "Galeri Armada",
      gallery_subtitle: "Koleksi foto dari armada yang kami miliki",
      car_1: "Armada Tahun 2022 - 2023",
      car_2: "Armada Tahun 2022",
      car_3: "Peremajaan Armada Tahun 2012",
      car_4: "Armada Awal Berdiri 2008",
      contact_title: "Hubungi Kami",
      contact_sub: `Jika Anda membutuhkan informasi lebih lanjut, memiliki saran, atau ingin berbicara langsung dengan tim kami, jangan ragu untuk menghubungi kami. Anda dapat menghubungi kami melalui email ke <a href="mailto:ippsiliwangi@gmail.com">ippsiliwangi@gmail.com</a>. Kami akan segera merespons dan memberikan bantuan yang Anda butuhkan.`,
      head_office: "Kantor Pusat",
    },

    en: {
      menu_home: "Home",
      menu_about: "About Us",
      menu_services: "Services & Operations",
      menu_structure: "Organizational Structure",
      menu_gallery: "Fleet Gallery",
      menu_contact: "Contact Us",
      welcome_title: "Welcome to Diamond Taxi",
      welcome_subtitle:
        "Comfortable and Safe with Us — Your Satisfaction Is Our Commitment",
      btn_start: "Learn About Diamond Taxi",
      featured_title_1: "Pickup & Drop-off Services",
      featured_desc_1: "Regular, daily, and airport/train transport services.",
      featured_title_2: "Corporate Services",
      featured_desc_2: "Partnerships with businesses for transportation needs.",
      featured_title_3: "24/7 Service",
      featured_desc_3:
        "Taxi services available day and night, anytime you need.",
      about_title: "About Us",
      about_intro1:
        "PT. Intan Pusaka Pratama (IPP) is a trusted transportation company focused on taxi services in Greater Jakarta (Jabodetabek). Founded in 2004, IPP continuously adapts to the dynamic transportation industry to ensure customer satisfaction through professional management and high-quality services.",
      about_intro2: `Intan Pusaka Trans Sdn. Bhd. (“IPTSB”), incorporated in Malaysia under the Companies Act 2016, was established by the shareholders of PT Intan Pusaka Pratama (“PT IPP”) as a Malaysian entity dedicated to spearheading PT IPP’s strategic expansion into the Electric Vehicle (EV) taxi sector in Indonesia. PT IPP, the operator behind the “Diamond Taxi” brand for over 20 years, is a pioneer in sustainable transportation in Indonesia. The company currently operates 100 vehicles in the Greater Jakarta area under an A-license allowing up to 400 taxis and holds special authorization to operate EV taxis within Airport Operational Areas.`,
      vision_mission_title: "Vision & Mission",
      vision_title: "Vision:",
      mission_title: "Mission:",
      vision:
        "To become a trusted and professional transportation service company.",
      mission_1: "To provide safety and comfort for customers.",
      mission_2: "To maintain a fleet that is always ready to serve.",
      mission_3: "To enhance management through innovation.",
      legalitas_title_1: "Company Legality",
      legalitas_subtitle_1:
        "Company Establishment Deed No. 20 dated 19-10-2004 + Ministry of Law approval",
      service_title: "Services & Operations",
      service_description:
        "We provide professional and reliable taxi services to meet your transportation needs. With comfortable vehicles and experienced driver partners, we ensure a safe and timely journey. We operate 24 hours a day, 7 days a week, allowing you to book our services anytime.",
      service_point_1: "Pickup & Drop-off",
      service_point_1_desc:
        "Your daily transportation solution for commuting to the office, school, and other destinations.",
      service_point_2: "Airport Taxi",
      service_point_2_desc:
        "Fast and convenient travel to and from the airport at competitive rates.",
      service_point_3: "Corporate Services",
      service_point_3_desc:
        "Transportation solutions for company staff and business operations.",
      service_point_4: "High Safety Standards",
      service_point_4_desc:
        "All vehicles are equipped with modern safety features to protect passengers.",
      service_point_5: "Clean & Comfortable",
      service_point_5_desc:
        "Every vehicle is maintained in clean and comfortable condition.",
      service_point_6: "Customer Support",
      service_point_6_desc:
        "Our customer service team is available 24/7 to assist with any inquiries or concerns.",
      structure_title: "Organizational Structure",
      structure_sub_1: "Board of Directors – PT Intan Pusaka Pratama",
      stucture_position_1: "President Director",
      stucture_position_2: "Director",
      stucture_position_3: "Commissioner",
      structure_sub_2: "Board of Directors – Intan Pusaka Trans Sdn. Bhd.",
      gallery_title: "Fleet Gallery",
      gallery_subtitle: "A collection of photos from our operating fleet",
      car_1: "Fleet 2022 – 2023",
      car_2: "Fleet 2022",
      car_3: "Fleet Renewal 2012",
      car_4: "Initial Fleet 2008",
      contact_title: "Contact Us",
      contact_sub: `If you need further information, have suggestions, or would like to speak directly with our team, feel free to contact us. You can reach us via email at <a href="mailto:ippsiliwangi@gmail.com">ippsiliwangi@gmail.com</a>. We will respond promptly and provide all necessary assistance.`,
      head_office: "Head Office",
    },
  };

  function setLanguage(lang) {
    localStorage.setItem("siteLang", lang); // Save language
    applyLanguage(lang);
  }

  function applyLanguage(lang) {
    document.querySelectorAll("[data-translate]").forEach((el) => {
      const key = el.getAttribute("data-translate");
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update dropdown label
    const label = lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
    document.querySelector(".lang-switcher > a").innerHTML =
      label + ' <i class="bi bi-chevron-down"></i>';
  }

  // Detect stored language or default id
  document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("siteLang") || "id";
    applyLanguage(saved);
  });

  document.querySelectorAll(".lang-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
    });
  });
})();
