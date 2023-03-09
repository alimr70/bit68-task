import { useRouter } from "next/router";

function LangSwitcher() {
  const { locale, push, reload, asPath, pathname } = useRouter();
  const nextLocale = locale === "en" ? "ar" : "en";
  const onClick = async () => {
    await push(pathname, asPath, { locale: nextLocale });
    reload();
  };

  return (
    <button onClick={onClick}>{locale === "en" ? "العربية" : "English"}</button>
  );
}

export default LangSwitcher;
