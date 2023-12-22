import React, { createContext, useState } from "react";

// createContext는 Context가 제공할 기본값을 받는다.
const LocaleContext = createContext();

function LocaleProvider({ defaultValue = "ko", children }) {
  const [locale, setLocale] = useState(defaultValue);
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
// 훅(갈고리 같은 것.)
// 커스텀 훅

export default LocaleProvider;
