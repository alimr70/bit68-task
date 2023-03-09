import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

function LangSwitcher() {
  const { locale, push, reload, asPath, pathname } = useRouter();
  const nextLocale = locale === "en" ? "ar" : "en";
  const onClick = async () => {
    await push(pathname, asPath, { locale: nextLocale });
    reload();
  };

  return (
    <Button
      onClick={onClick}
      variant='unstyled'
      minW='fit-content'
      minH='fit-content'
      mx={3}
      fontWeight='semibold'>
      {locale === "en" ? "العربية" : "English"}
    </Button>
  );
}

export default LangSwitcher;
