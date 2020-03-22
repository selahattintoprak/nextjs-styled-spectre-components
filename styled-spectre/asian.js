import { css } from "styled-components";

export default css`
  /* Optimized for East Asian CJK */
  html:lang(zh),
  html:lang(zh-Hans),
  .lang-zh,
  .lang-zh-hans {
    font-family: ${({ theme }) => theme.fonts.cjkZhHans};
  }

  html:lang(zh-Hant),
  .lang-zh-hant {
    font-family: ${({ theme }) => theme.fonts.cjkZhHant};
  }

  html:lang(ja),
  .lang-ja {
    font-family: ${({ theme }) => theme.fonts.cjkJp};
  }

  html:lang(ko),
  .lang-ko {
    font-family: ${({ theme }) => theme.fonts.cjkKo};
  }

  :lang(zh),
  :lang(ja),
  .lang-cjk {
    ins,
    u {
      border-bottom: ${({ theme }) => theme.sizes.borderWidth} solid;
      text-decoration: none;
    }

    del + del,
    del + s,
    ins + ins,
    ins + u,
    s + del,
    s + s,
    u + ins,
    u + u {
      margin-left: 0.125em;
    }
  }
`;
