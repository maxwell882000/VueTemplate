import cookies from "vue-cookies";

class LangService {
    getLang() {
        const lang = cookies.get('lang');
        if (lang) {
            return lang;
        } else {
            console.error('[LangService]: No lang found!');
            return "ru";
        }
    }

    setLang(lang) {
        cookies.set('lang', lang);
    }
}

export default new LangService();