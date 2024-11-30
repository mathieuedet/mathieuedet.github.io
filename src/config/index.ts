import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Mathieu EDET — Senior Android Developer",
  author: "Mathieu EDET",
  description:
  "Senior Android developer based in France, have worked on various sectors (banking, tourism, social networks, DRM...)",
  lang: "en",
  siteLogo: "/mathieu-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/mathieu-edet/" },
    { text: "Github", href: "https://github.com/mathieuedet/" }
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Mathieu EDET",
    specialty: "Senior Android Developer",
    summary:
      "Senior Android developer based in France, have worked on various sectors (banking, tourism, social networks, DRM...)",
    email: "mathieu.edet@email.com",
  },
  experience: [
    {
      company: "Buddies",
      image: "buddies.png",
      position: "Senior Android Developer",
      startDate: "Dec 2024",
      endDate: "Today",
      summary: [
        "Contribution to the development of famous french suspense social network",
      ],
    },
    {
      company: "Payplug",
      image: "payplug.jpg",
      position: "Senior Android Developer",
      startDate: "Jun 2022",
      endDate: "Dec 2024",
      summary: [
        "Contribution to the development of a banking application for Point of Sale (POS) terminals in France / Italy / Spain.",
        "Enhancement of the architecture through the implementation of Clean Architecture across a significant portion of the project.",
        "Participation in the evolution and maintenance of a Kotlin Multiplatform SDK designed for integration with store cash registers."
      ],
    },
    {
      company: "Fastpoint",
      image: "fastpoint.png",
      position: "Android/iOS Developer",
      startDate: "Oct 2018",
      endDate: "Jun 2022",
      summary: [
        "Development of the Fastpoint mobile application (iOS with Swift and Android with Kotlin), providing access to a catalog of content (movies, series, books, newspapers) through ultra-fast downloads. Media storage is secure and time-limited on the phone/tablet through the use of Digital Rights Management (DRM)",
        "Get Google Widevine Modular DRM certification (N°00758MD) to make sure media storage is secure and time-limited on phone/tablet thought DRM.",
        "Development of an Android (Kotlin) application for synchronizing nuclear waste barrel repositories (between Backend / Phone) with offline data access from the phone. Named N-Waste, this application was developed for Onet Technologies and Bouygues Construction."
      ]
    },
    {
      company: "SoyHuCe",
      image: "soyhuce.png",
      position: "Android/iOS Developer",
      startDate: "Nov 2014",
      endDate: "Sep 2018",
      summary: [
        "Development of iOS (Objective-C/Swift) and Android mobile applications related to the sectors of events, tourism, participatory democracy",
        "Lead company mobile developers about best practises around apps development. Make sure that Android and iOS apps codebases was coherents.",
      ]
    },
  ],
  projects: [
    {
      name: "Payment app",
      summary: "Payment app distributed on Android Pax terminals for merchants to collect money on shops.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/payplug_app_collect_pax.png",
    },
    {
      name: "PhotoBooth",
      summary: "PhotoBooth Android app running on Android device to make great memories for personal or professional events.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/photobooth.png",
    },
    {
      name: "Fastpoint",
      summary: "Android / iOS apps to download movies or series in seconds, to watch it during their trip by train, bus, plane...",
      linkPreview: "https://www.fast-point.net/site/connectivity/",
      image: "/fastpoint_app.png",
    },
  ],
  about: {
    description: `
      Hi! I'm Mathieu EDET. I started mobile development with Objective-C during my studies for an iOS application. Since then, I've been able to continue with mobile development in Swift and then move on to Java for Android, then Kotlin.

I was able to work on applications in various sectors: tourism, services during my first experience, during which I accompanied other iOS and Android mobile app developers.

I then moved on to Fastpoint for DRM-secured downloading and playback after Widevine Modular training at Google in Brussels.

After this experience, I decided to come up against the demands and rigours of the banking world ) Payplug (a BPCE fintech) by taking part in the development of an Eftpos terminal payment application.

    `,
    image: "/mathieu-big.jpg",
  },
};

// #5755ff
