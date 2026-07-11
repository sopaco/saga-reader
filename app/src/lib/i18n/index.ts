import { init } from "svelte-i18n";
import { addMessages } from "svelte-i18n";
import { fallbackLocale, getLocale } from "./settings";
import en from "./locales/en.json";
import zh from "./locales/zh.json";
import ko from "./locales/ko.json";

addMessages("en", en);
addMessages("zh", zh);
addMessages("ko", ko);

init({
  fallbackLocale,
  initialLocale: getLocale(),
});
