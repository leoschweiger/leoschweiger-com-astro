export const staticUrl = "https://leoschweiger.com";
export const aboutMeLong =
    `Ich bin Student und Spieleentwickler aus Salzburg, Österreich, mit dem Fokus auf effektive, interessante und spaßige Software. Seit 2018 arbeite ich an Projekten – von nützlichen Tools bis hin zu vollständig veröffentlichten Spielen. Mein technischer und künstlerischer Hintergrund ermöglichte es mir, bereits mehrere <a href="${staticUrl}/games#developed">Spielprojekte</a> zu realisieren.`;
export const aboutMeShort =
    'Ich bin Spieleentwickler mit Fokus auf interessante und spaßige Software. Mein technischer und künstlerischer Hintergrund ermöglichte es mir, bereits mehrere Spiele zu entwickeln.';

export const mainTitle = "leo schweiger";

export const resume = "/resume-leo-schweiger.pdf"
export const email = "leo@leoschweiger.com"
export const emailDisplay = "leo＠leoschweiger.com"
export const links = {
    [email]: `mailto:${email}`,
    "linked in": "https://www.linkedin.com/in/leo-schweiger-256987339/",
    "itch": "https://leoschweiger.itch.io/",
    "github": "https://github.com/leoschweiger",
    "leoschweiger.com": staticUrl,
};

export const footerLinks = {
    [emailDisplay]: links[email],
    "linked in": links["linked in"],
    "itch": links["itch"],
    "github": links["github"]
};