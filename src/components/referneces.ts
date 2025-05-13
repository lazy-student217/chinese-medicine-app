export type Refernence =
    | { type: "link"; name: string; link: string }
    | { type: "book"; name: string };
export const referneces: Refernence[] = [
    { type: "book", name: "《黃帝內經》" },
    { type: "book", name: "《傷寒雜病論》" },
    { type: "book", name: "《金匱要略》" },
    { type: "book", name: "《太平惠民和劑局方》" },
    { type: "book", name: "《脾胃論》" },
    { type: "book", name: "《醫林改錯》" },
    { type: "book", name: "《醫學衷中參西錄》" },
    { type: "book", name: "《五十二病方》" },
    { type: "book", name: "《嶺南中草藥典籍》" },
    { type: "book", name: "《中藥大辭典》" },
    { type: "book", name: "《生草藥性備要》" },
    { type: "book", name: "《廣東涼茶》"},
    { type: "book", name: "《神農本草經》"},
    {type: "book", name: "《溫病條辨》"},
    {type: "book", name: "《廣西中藥志》"},
    {type: "book", name: "《中華本草》"},
    {
        type: "link",
        name: "香港經濟日報「經期飲涼茶傷體質　中醫：子宮虛寒誘發經痛」",
        link: "https://topick.hket.com/article/2114638/%E7%B6%93%E6%9C%9F%E9%A3%B2%E6%B6%BC%E8%8C%B6%E5%82%B7%E9%AB%94%E8%B3%AA%E3%80%80%E4%B8%AD%E9%86%AB%EF%BC%9A%E5%AD%90%E5%AE%AE%E8%99%9A%E5%AF%92%E8%AA%98%E7%99%BC%E7%B6%93%E7%97%9B",
    },
    {
        type: "link",
        name: "東華三院上醫館〈中醫九種體質分類〉",
        link: "https://www.tungwah.org.hk/upload/Medical/Constitution_Types.pdf",
    },
    {
        type: "link",
        name: "Yahoo新聞「消暑飲品〡夏天消暑解熱唔一定飲可樂食雪糕！ 5款超易DIY中式涼茶推介（附配方做法）」",
        link: "https://hk.news.yahoo.com/%E6%B6%88%E6%9A%91-%E9%A3%B2%E5%93%81-%E5%A4%8F%E5%A4%A9-%E9%A3%9F%E8%AD%9C-%E8%87%AA%E8%A3%BD-%E8%A7%A3%E7%86%B1-%E6%B6%BC%E8%8C%B6-%E6%8E%A8%E4%BB%8B-235113472.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAGZ-QA88eMhuLxx2cxTEpnsfTbip-YbhXoZv-FuxNnWa1osdyxnSbwoG-uTLzB0unJOhCXu8THuRgcbADDHEv3lrPxx9D1v8JIIP8uTACj_ne5t53NygYZQC5TzLdM_eZLUX-YFeBeH5FgTuPYhJoYApLkLqET-lWhWCskvLa5qa",
    }
];
