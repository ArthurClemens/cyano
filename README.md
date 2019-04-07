# Cyano

Takes a base component and returns a Mithril or React component. This is useful if you want to support both libraries with a minimum of duplicate code.

- [Online examples](#online-examples)
- [Getting started](#getting-started)
  - [Install](#install)
  - [Import](#import)
  - [Configuring](#configuring)
  - [Code example](#code-example)
- [Usage](#usage)
  - [Write a single codebase, deploy twice](#write-a-single-codebase-deploy-twice)
  - [Shared language](#shared-language)
  - [Using hooks](#using-hooks)
    - [Supported hooks](#supported-hooks)
    - [Custom hooks](#custom-hooks)
  - [Passing or nesting components](#passing-or-nesting-components)
- [API](#api)
  - [cast](#cast)
  - [h (render function)](#h-render-function)
    - [Inserting trusted content](#inserting-trusted-content)
  - [a (HTML attributes)](#a-html-attributes)
  - [getDom](#getdom)
  - [Children](#children)
  - [jsx](#jsx)
- [Additional setup](#additional-setup)
  - [Bundler configuration](#bundler-configuration)
    - [Configuring Webpack](#configuring-webpack)
    - [Configuring Rollup](#configuring-rollup)
    - [Configuring Browserify](#configuring-browserify)
  - [Configuring JSX](#configuring-jsx)
  - [React and Webpack](#react-and-webpack)
- [Compatibility](#compatibility)
- [Size](#size)
- [Supported browsers](#supported-browsers)
- [License](#license)


## Online examples

* Simple toggle
  * [Mithril](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIAqB7A5jmAdAFZggA0IAZgJYymoDaoAdgIYC2EaIBAFvOyjkQsLM0TjuAHiTUAbgAJqSALwAdEKwAOWjQD4pAelly9wyDATUx9EAAZUARgBMIAL5kWHLumx5CJMKi4hCS6NTsWlgATvAKwAqwrGDwZAoArpAAyvCsiGm8aawKbgqU0VjsChqwAJ6szFgAtOzU8LzRtBoA3GrMhgBUfdgK7KwA1hAK7dRgiZVRzKFxUNQARtGs0bUKrDiNKdSwaZkQqH19EVGx8YnJqRnZufkKhbslZRVVNfWNPRdsZhIRLRCB5KYNXarZKfSrVES-LAaBQqPTwuoNZqtdqdKDIwzoxFNUGsBDIy7MBS1LDpaIKNbpIEwOnBGg4Wl5azMAh9AaGAHBFIKAD6fnwUxUCgAFAl4G0YCUAJQotHAPoKebMIUMWCrWCTJBpSDwADCeoNAF0UY8IDlwVLKKwoJBFb1KdV3aD4LTKbwpRoTBo0uqNfEQ6HElBkmAAHLeVDw+C4cUacMlMhphhpjV+jS8ZxB6byiCKjPuiO5kAM+BJ5hB7OhtXliOh3XRuOcBMAA2rtYUABJgLqjgaFAB+eGzJrUZiUJEgBQJ1PuLtllsthisAhiYf6i0JqXK1EKY1mkfIKUAQl3BsVDY1Hnv8LFMFTzY1pYblcD5CfTfXEZtmAsbxpOs7zk+j7vq25rIOO8IAPJ1guS4gAhlCUG+653s2Fohq6fRuG6fQQAAHtccRIBAjrpFAcRJCkUqismMAEcw5jQHAco2NwDh2E0jioHY7ieCAbCcNwxCkBQwQSPA3BXDEcQvlM5RwhoBCGCp-x1swgpxAAgjo1r-gocjUBAADuB5HnoabsFKKlpLKxaoVklltLAvCXsibg4W4ALsAQ7A0uI-rukgWCwOknDiAQACO6QQNsWScQgMT+iAADE2i6CAn7ukZujMGxHGWNxWrcAAHKgADMwkeF4EnoAQsDAUEYhydwOXGaZWisEgsjMDgCbOHYWikW6AXMD1WivM4YbunO4hNJZEDUDg-AJmsWBQEgboamM0Q4DOCaOBAVR2FNfSzQoBBJv4UwEDOc6LYdWwncwCYEAArBdCh2ADAPXbpfRlVxXK2C4QnuBaFCrMw4z0EwYneNw2IdLQAACSykfJFC0kI6D8PAWhgKghiGIyWjjDgrWVIYGO4ljzgEHYbPErABAACyM20mNQFJwjwLUWg+OAsCdFo8mNajzUIpiLT88zUaICkwiE9wJNkxTVPMDTdOiOwhgYo0Ss4tj7Pc2zxizPAJtEkztDC6L4tgJL1DSyJTXiwyUBjMFM6te1BPRETIDa+TlOwEgzAkK1UA0kglBRqC9PG6wRCsKRhirGsYCGH7YyGOzADsPMm8Bhe0QHrTcm10kgCLYvcCktQwLDbhAA)
  * [React](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIAqB7A5jmAdAFZggA0IAZgJYymoDaoAdgIYC2EaIBAFvOyjkQsLM0TjuAHiTUAbgAJqSALwAdEKwAOWjQD4pAelly9IAL5kWHLumx5CJYaPERJ6F2HgLgC2Ky8yBQBXSABleFZEIN4g1gVzBRU-AE9WZiwAJQhWBABuNWZDACpC7AV2VgBrCAV4XmowPyx2LTE3byhqACMAJ1ZelIVWHAyvalgg0IhUQsLqVqxe719-QJDwyOiFWOGEhUpeloUNWDSMjQLmQvSkP16cxGHmYa6Ag6P2E5FzrA0kvTfM7pLAAWnY1HqvVo-0MQN+oIeuXg-3mLxSWGCvQU3WCzCQMGxLhoOCxUWoYgIhWKhjmzE83gA+vZ8LVkgAKXzwSEwBIASgBPkKCmazC8CgYsC6sBqSCCkHgAGFpbKALpJDYQCJRCDsyisKCQPlXEXChQPeBYl68dkaEwaIJmkXAJ0ivxQAJgAByNlQ33guFZGldlldDFdIptGl4ACYHXUeRA+WQIztbSBcfAA9dyKnnXm3VLPT7OH6AAaZ7MKAAkwClE1lCgA-N9GqDqMxKH8QAo-cGLGWUy83SORQxWAQxPWZaq-eyBSpAQrlQ3kOyAITT2V8guh4ej74smDB-du5OpqMge2508jl230dFsDe32tzvd3dDg8irfIZvfAB5HNe0AyhKBPA8d1PVUzWNQpzCuQoIAADzaZYFCQCB9WCKBvDWeB2WZQMYDg5hnBaLRaAgXpuG6VhumgYRIBgBAKTFbgAGZUAABgsKwQDYThuGIUgKBcCR4G4BY0O8I9akOY4NAIQw5MuOlsmRAARACAFkCAefFqNta54CkOSE3gGB1BAMIAHdIVgXh11hPRCjiHQ+XI1oqJo9A6IYoQKGYuBuTEegQAAFlQAA2PjrCE9ACFgZ9yNcdwQAAYm0LQhWHLRWCQWRmBwP0Y24rRkKucxCiynQdhjXKRS7cRQVsiBqBwfg-W6LAoCQE0KgGHAOz9ABGCAvm4qqauyhQCADBxagIDsu0awbemG5g-QIABWCaFG4g6Dum65TqY6AQrY8LRpjHiLFVCgumYKp6CYASbG4JEEAITC5GgLAtE4cQROELEhHQfh4C0MBUEMQw8S0KocCSlpDC++B4fYJA0Zyb7fv+wGOhBih4BSLRbHAWBoS0STLHiin0dBJAWh+iA-qgAGgfgYmQDB7hIeh2H4eYRHkdEdgceRJnUeCLHJYQaX2FZ9nOaJpwSbJimwCp6gabi96Ep+EFEVx+AAAEPUQLxQd6cGQAFmG4YRpGUYl4EMhN5Eze4ggIoIbjjEaDH3bBdHhFJ8nuG16nJIofL4EciBXoYBhuIoaBKE8h6GFBUaKHDEAQGzvOeCLshU7E34y5zkvEWrkvMmrtOQFN6vc4oDRVRUCAC-rihu4IJvK5BNva5o4uKEb7Pm9b7P25ATuh5AAAfZfgEsCBB7nkvx-Lhul9nsgIoADiPtPRoAdg4shL447OK5EFEQDyOQBgUUeKFYPuBKX6zMOwoQD1L43wvmQGMEUIpgIgffZueJWJiHftvCgWBv67wfuyCAZB4AUCQZob+ZFp4UD5MAC0Voy4xmvhQsBx884xhoTAigVhX5QGCDMD+eCJ4-0IeQNwstqJfyAaA4BHEOKgJERfBhIAGDwC7uwgRe8KAEPLs3MgEBzCv2xOwpRDAS4oO4SoQw7IGBl2AcIgAnDGMgHELGSMZKgUEqoADUfJDA4PLvPNBJd5EPwMQAPTUGoAgy8MqGBMUI0BEVwFH3AZIww-jAnBNcew0gnDYC-0oHA0KYSQFHw4pAiKeTJEaMQe4rxZAsBkDAGQNJnDmBkF6NUypS8yBQBUOuExO0b6dIihfaKR9emSM3mALQXQCJaO-no5RRCyDBBUMwHCgCcnAJ2txSBKyIqSJmXMhZeR2GeM-kveaScCLUGMYInJO1RprKuZIrsvR2TsNgCoKaNSFHgGeXkFJUyQBSGoAQRZo1r6ArIDtCKfTQXRUkTgeouzcGvJ0UFJejjnEPNwVgFQpz4U7wxQwL5D9VR8gAGSEtRaUoKKhJkIpECoNBzckq8HkTGPpTKQXRTzjtNlkiNAqB5ckps7JWAqG8SXWA-LmBzKXqvBgqoTGQKuSCsxp8dqKskQSggWhQg2nYZSnehywDBG6F4aE2TgFsrzmayRNpegEH1Ya+A0JirshLmi1BhyYDFXqHyPksxMrct5Q9ERVjr5stASGyR3qNAZT9SoZJ394XN2JVAYl7JuYmtDZEsg0VImSOTdzZQMaXWcNpRQG1BqjXUDTZm0FVaNnlwfvajsOAnVuJrsg113D-luGhbwLOSzQ3RVPtFAd4bUCzO1caYVFBejGm0QmklkkgGWJupm4+nSB07Ukc+EsEBiVyPwYcjVYAbSpvOcAi+3E87ntGpI4sNgC1ko4W82dJaiBYA7OmEppjQFX2vj+opGgELFMed-PFzcVAZPpFk0937j6WIvrBwZKaW3zwqdone5Sl7EOoJQExedRp52PhesghHr11pnpaXoLxdR7tqYcgAYv0HAQNK2ruvqxyRCysHGnabgtDbbuHJo0OWljV9iNX0GVgSgpLW0gF6BS7+gri0gD5KvDQuGb4EcVcRlVZH+4RwgJJkpMn9mPofqvAAgr0foKQt59rIGY4BDmJG6dk6wFI0mPEKcw3yflWiKUYc4eihpSmVDr17aNU+EX7McVPmYmLgyPW8GTeMwLv9pXGg0ZWsxF9LHZZjEUt+ey8jop1Z-PIcmlNNgAt0IgJigXX0VX0xrkjOSWG1e2753r16wofaV2ThykBRA6V0m+3FuJmNG+NyR30agpDAB53RHWH4-SiAECAC67OjW4hxTpW2ds3sgPOcwxp2tFqXgXQbkRQRqegxpk+d3j6SKuxoRxMj70yb60plbkQFSVvw2yjTnKXPrYYBAVUx3kOLbOx2y7a2Ntfo070xHkKXNyDfXcbiJ3C1vK+1EBtuI-ujTMXKontaU7NxmxAObC3+M48OXj6EBPbs3RjHhmMrOWtJlANjqlSnQeyJ57qjtePZU3zlTGZVN8JdmMGWAfnEPTt0+F1mRnwQ-sxng1L+DOaU3vfnvN7BfXYBIaU16l+hW4UgbS9gxXvOl6qhRuQ5lfTAUstdyj8nJaXD+DGbxiZmHyvrbIczvJE3AURRly5wPFGXg0afYcqmjwIAAFE-s7bD+nyRIz3NyOqfgpp3C+SAfU-hm+MXdvl8kf0XQfFqB65FVb7heQ-n2tCPD8JVizHRTEV35znvn6kMo0Z+eWLEXcKQ8AQbxVK0RW4tFNOs-59cufsUsduDJ1cO+UlJEiBU+3YioCvOB+OKkf7x0HrMnN7TEVAaKAdEZQqG5tf2-9+qiqIINMZPYEQqP4-5AL-lAIU7+0wAAMm5piPAAAT-k-pAGARiMEJAd-ggMAZADpBNOijARAGgewBUlfpANkEgMELANRL-tMAQUQdRCgRANkJQKQfgVhFQdqIgO9iXNVkQCFKzDQMwBAAAApHDkzLDuaYIaDP5QB365BVAOjAC8KcD9DdAwCoDrhpw4DraoAQbwLMDzgkJB5D6YE35iGv7mAQ5sEcH-wdi8H8HUSkwYIpi8z-5IFPxWAyH8LyEzBKFkAqHwBqGZJsRaGD4vCYFQEIBGHJgmF4xYTmF8EAxWFCG2GgHgEIFBGOHSHzKyH0QKHuGeHeGQa+HEL+F1B-4QBwEQFJEhFkBhHcxmHcFRECHWHCF2FYHoFSHOFyEZHKGqHqGhSaF5E6EBGFHYFYBlEVGcGRGWGCE2EiH0GEHEG9DNGpEuFtEeEdE+FiB+G9EFFkHIAUG9BDE1amERHVFjF1FxH0HgTkApF8KtFuHtFeGdG5HaEx4bGnG7HsHhFcEWHRHjH1HTBMEQBzGXHpHXFLG3ErHdEPFWhGbNwwFhLmqjR9IH6XJHyjSXIcabA6jfwhHNKbyCpQCqImIu4TY9LRTdK9IbouZglAbr77r6JDR8JKII4nxRaMmPYubIrEKUkPob7PogDbJiHrhCoz5xaElCmbrSKzjryQ6KL+76LDGClI4R4DIuaU7U5x5UrclwRUCZKClmIL5mI6mSLsA9SGjJa8YSqBbyYdre5RCkpE43wTbrLXwOmSJhApCGm9TzaqklzqkEA0C4TUSVorLHyOncRBnTYxxLA06mZelYl8gEAyEBlXLXLQIuauHHZeqSmb5UqUp0p3LJ65C8AJlZogpwlk7oLwDEK25C7fI2E25Um0bcJinha7adKXI6nFn6nA7mCtZYIZlcneZGHv44ABms4tkjmqgPTgAXQaHhS3S8R0wGwUy4hQCVAEAQjMBJQpQUB8wQxZiCxwywBIDMAkBJQczBBICUAegPCuyGCsBECsDISGBdCGqGBLmVCGA+wXy+yGDJRgAvk4QrlrkbmiQgD6ZRykwwD3TmBAA)
* "Building Your Own Hooks" chat API example (this roughly follows the [React documentation on custom hooks](https://reactjs.org/docs/hooks-custom.html))
  * [Mithril](https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEAMwEskZUBtUKTAW2TQDoALAF0fmPSk6IBqEAB585AG4ACcvgC8AHRA5sygHyiA9BMnrFUEAF8i9JixCsAVtRKQBQziPKNsEAE6dpjaaXcQfZS5OXBQtLQBXKGwAawBzVkhGLUZyTnZ3SgABACZWAAYCgFp3MFYAFgB+Rgh8CKRlAG4DFzdPaWBpMEwYTiJpdn7Mfoi8AGVOTEFpI19-QPAAT0woCCLU9Mz4JoMtACoDABUIb0wYxGl08hgugLcoR2l4cgAjd0x3RelMONXe8jAIzwKAMLVcHi8nW6vSBiAmU0Q-UG3xmcwC0mUYGWqx2UAMK3wXXciAR3yg32ePTRCyxKwgymk8nUGKWdPWaQylAZWhZtNWJRJYE4DJa5MWEAi7mkLyi+CQUvsFDikqm5GgrAMey0oKgrQhc3IQnwMAAIlNMNSWawtH5DVBjUV8ObcXr2gBhdhTABKiDA5Gwds4AAUAecpX50cprR7vb7-YGQ2Awy7we0AGKZI2WqNaDN2-BNDF4qD2XrSAD6AEFsNhGdIABQASkZzM6Bmkt1gXhonpgMc41fI-TwnAAEj1+4OALp10ZwyaCeukTDwPCN5rk6TEziS8nsevKXTKIjtjsdLpYGAwABy5hQvM9wpAMxPm47NFPZ4GB5AR+In6-c8wEvG8715aBOH8VcGRMACv33ZQZU4ThoGPODAOAdDAIvHpQOYe9e0nANpEqFkkJQvFn3vRCImQ6BZBgIpnigGI0LfbCzxoTBWGgYDQyne8mxbaQR3HPtH0HesAEJCIkgNGyws9YPY7DZKmQcSJZE1BU4KRSTAR8GWokBKyFPTpgMqZlEUhSVOkRtX1Uic5PITT937H0-QDRxEzDZt7ygep4EcwCEN-KQ2I4oCQNvfCWVtI0YBgkLsIS+1TXNVhGBwJdM3tYSDzs+D6zzI1+kworAPORZ7zS-BWDkFKooNMrFPg5z1IDJrsKMWyosbPrAMGjsp1PdcDCMAxSy8ata3kLoek4esqxrWyDHYLKJQEQqO3wCAwAiZgBFYABHCJEE+MZECQIUPB-ABiVRlAc09ZoMRs+DwG7dOgag0AANhQfJjFMEAGGYERLM4IocHIaxbH4QRhDQaaWvSs1JjrCqO2UfJlHvbGz16KZRgJ9DrgAeSgZjEHvSDzoAybN2UnGQAARnxjoAOJncYDJuzKep8gHjp9wGfYpmOxZlkck5wmOx50muYFmAqZp2qVzwRnTyZowNwMRAAA82i8VHYax08YAiF4YDATIXkQY5SvteFecEuqAEl8CRAkkFd0YYygOJEGbJlla-VG6rrOqMsmGhPfwKcNwj36EEQVh4AgOJ6wAAytm27deYW4hEhdRl8DxpAAEmABOjBz8b2Lq1hFZgBrVaFh5o7y-AvcZeR5uUWWQHQ0jl1XRB0NF87k7PVH8GuzAvnmnJ8nyaQAGppDZtfpD2aQAFkpg2957QCJtZ4VxBOEOFxEAlJahLDnbQt9+cSfElZg9y-MW7LmBhr2X6AvLAixBrSyiPnW29tEAZgCM7fA-s+YNgTj7e0ft-6B2DqHVsAFI4927vmWOmB449y9knACzdW7tzVsLC481ArwHgJfTscAkAZyzrnSB1toFFyDqXD+FcpQ1zrg3Fhnp0Hv15lgxAP8jR-w-o3KWE0Nx8CSAGeUIgXiYAdrwEgX1fQ-VgCIAAzAAdiBiDMwEMUajBQowIo7AIAQBiG3GwaiIKOGcKmSE3xiKzAjAsa0UMYYBhTCbc8c5XaImkHOAAoqQUghjUSBN5NiNYGxOTbBAPrB4xt9SoznAgpBhCjR9zDoTVGNBBY02HNfD2HcaYznmlEhcsjGHwCUUWDspAohmXohIuUUiA4SO-q3Zs8sRL1MaXQ+s1Cal0K6UzU88TEmGJfh2J+uC7KwxbjwwuDsnY9yQXI+0Xs0FDKQTIrpX5ty7gbDg8OHFdncILjAuBjBin-1Ob3b2Aw35XNGSHFhyiJZNRoKNTcjdTx3PcOSBZDwNx6wMB41wlALpaJ0ddT611DFqmMWgCxwMTDWIsAg+GHiHDIxAK6Xx0I+gDBSfMNJbJMlbHCfqL5gjUk5i5bzXEU1fpeHLAgus9ZOh1R9p-Ac-jHmE1hXuH8f4mpQhimBZQdVkoAQ-HZMKyrFKTOwsBXCsVaYskwJIc07hIrNV6IsJA-Nmpnm0UmOI-hZQe2ysHe8OdJTwHrCInurALVWt6jnNqMxFKSyGt1b8h4IrEGiia9VYNzDJTRvVcGIdY16oTeVHCV5TXGRgNgTAYALowRerqjqMryCKVIrmyQx5pAdNjapEqxz-5to4oap1Gava1SDXICNX5o1OsAdhCdgEApBQApCjsjdkXFiNhEhey56im0WstBBjdUUaIxWgbRuicXfXxX9EAJi2aWJJammxIA+WjApXYTx1LaVAUWkiJlkZWT8jZVyHJYIImdCKZ2wRATmU5gOr0AIjjnGuIFSWIVFYH03HmuK-thJerCUqUhhF9DYl4BQz8r2XSFUMVoV3AeDDZ3sQbUqvNSbC0ptbo6CAXgogxFWAAd0ojMQB948OjzjeFJtibVXJrisoFje0vDQBppWqewnlWMbwmaqT-9WOycSfJ58vUkW5JXfqNdmAN0LV6Nu0DvNd3PrRZow9WK9EgAMf0glIAACs17QZZpEB5OM3kBC+Quk+xGXi0BvqhB+gjUiYnIgtOB79fIMkcnZQBqA+wjgnGyucS47Bri3HBA8AQTxXjvE+N8X4EB-iAiiyCYs4WzMMtaQiJEQwv00nSQhgkRISTTBWBScgVIeU-vpM+MOmIOvPh5ONtkxIy1PiLMLaQ4pJTSllPKTsSoVRGI1FALUOo30oezJYXMlnRgcvaDHDGFohvWhjo6Z0qXBVdgrL5ryCZQwXTFXK08VTiRvccOcqZnBPLxgB4nWc4w2k-g5iAaFm4yONptR2cTTHJOIygklXT4L0L7hQ923tX5qr3j+6DgQ5yI0J2J35wMXso3oSre2+Non8cFtU8W3FQotWVTCs5p83bkcjukFxHiJYgUCWkPQ5kI4Qf+c4F7es6dJjuGDpwVglr4DnQZ329X50qf-bJwWSqUt+cZuIVlHKUdn6C7ChAbARikd9oJ81HXZrm6NUF4TxANUM0NW9h7l8-vm5ZsF1Or8A0bL07nWNFROpDPtGM6Z+ly1Xuk+DB99w1mnMc6MeenI5QUD-Ssbeiwd2nSTGC-YJGTg0Bx68An+A3ZTyTLkMZPG-52JZuMh7BgDuQ1K+MsEbAYQtAfHSJKYCiAjptziBya2DUIAj6vNfGAWg3DwEWOkIQiAtBGyYNgKgI-LVK6KGzVg2Ag42uls3-AxkYdNU7yyAAUisSe7evx94+AP5CQ-wij-YOPpAKfVgGfMfF4efRfEcFfNfDfdgLfHfQ2PfA-D-dwIoPIc-OIS-EKa-YyYee-FNI+fAfARYXvI-T-FkQfYfP-AAyfIQafWfMAtUCA5fVfBAGAuA3fVwJA0glAkxM-C-N-SNKAChQwGzfddwTFY9fRbPM9EQNmIlIvbzNgMAK8SlKvLRWoL4QmUgCCIoZcVIdfe8GAFYRiPATIUgJFAwVgKOQmCQEtUBWqJAQ2WeFccgX4IoNISfZBctBwdwWeF1eId1e0e8e6RJcw08UtQg4ue8NmNzbAJwiaSwqOLeKwghQmF4DwBeFAlCIfbeOIkSBAOQaQe6RAEoiwqAYNbgp5LjOQdIe8NzfIOI2eWA1wrgOoho+IzcdI9wTIkoTACQJWeogAUj8LLQCK2hvyKJKMQBGNdUCPwCKBgHIAAC8zVIBJALoyjWAs0nltCBAFjlizU2Z-pGjTxspldhZ7x14rjpATF2jNiS0y1PsbDrh98l4HCjZZ5SBHCig3UIAuNoj7j-4didDFiVjojygTjNxIBM53BgjMB4TASP5NMqiaj2Boi7jTxmi4hWjt4MTOiMiLpej+jkEhjZ4EjyjpM2MRcaYnl-DfjZR7xnhmBETeZNMeJtM6FaTRj6SgitwCAWTRg2SONuNyQ0juS5jgjCD8)
  * [React](https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEAMwEskZUBtUKTAW2TQDoALAF0fmPSk6IBqEAB585AG4ACcvgC8AHRA5sygHyiA9BMnrFUEAF8i9JixCsAVtRKQBQziPsxO04NLCZXRae1+YvgCueADKnJiC0kbS8p4AnphQEABKiJhgnADcBgZaAFQGACoQ0oyYANaI0pzs5DCeEIzY0I7S8OQARgBOmN3x0pgA5smu5GDBeCi5UOTNEN1uHl4+0iGI4ZGIvv6D0dKk3U3SymCJyco5UAZJ+J7d6VFJgx3eB0eMJ+DnEMqx6l8zkkIABaRjkWrdSh-LSAn4gh4ZTh-AzkKDSeIQILdaSdIJQfBIHH2ChDbGRcjQVgGfJaGZzFqLd7kIT4GAAEUimHex2UrC0hxZBJgIPwXMuqPmTIAwuxImkwORsELOAAFcZVHGHXmWLSy+WIRXKxzqsCaiWzKVuABiUNZPM+fK0tqF+EuJ2uUBcbgA+gBBbDYWLSAAUAEp-u4PdJGrA3DQ5TB9ZwA+RfHhOAAJbzJ1MAXWD602ghDpEw8DwYauMYenGx6PYIeUumURAMMZjyywMBgADlzChAXLkSBom30R2aO2OzHG82pK3pzPO55u32B4DoJwjhW-iYl8u5yA8ZxONBFxPlx3gAerzGwGv+8xB4nc8rpAB+L4ns-XUeD5Qf2gWQRQ6KAKgvO9lxoTBWGgB8NTzQdw0jDNsyTYdUxDABCV9MOVMNb2XfdLzvPDIlTT8vnZdJMikLZPGHP4AJAP06MkBiwCYkAiJjQjSL48cr3IlN3y-RtkwVJUVVNTUI0HKAgngeAhMPJsQBbYheKjB9vHXZ8vkFVkYD3VSryM4VOQiVhymwUs7QJSMmwEtSXVZXwbxcq8qniQcLPwVg5DMqDmXc7SZxE1NgqvIx+KgsM4uXRKYzzacqwMIwDG9aQAyDOIVk4EN-UDfiDDSJF2QAeQAWVYB4CUQbpnMUWoQ1ysMAhKgw+DwJA6Ogag0AAJhQIbjFMEAGGYZxhxBHByGsWx+EEYQ0Gy-yOS5YNPJjZQAAZlEHHaO1cSIQiOoj6kqqAwMQQdtyCRAD0yicSN2kAAEZDvcA9TrrGALpcq6brRO6am6R7nunN6viG77jpjP7zp+oGYGu26-PLPAodejKrgMRAAA9GTcbL5u26cYCCToYDAKFOkQEo3IJYtkfs10AEl8B2W4kFZjCkiGRAI3kAEEdjVxQscuINqszAaH8rm82rDsXAQRBWHgCAhhDAADKmabpro0SGaQkYaUgFmkAASYBFfwIxdfS0j-NYc3ArRkGoGqGWHPwLnYnkOJlDhniXK-MsKyelz7ohxAVfvAa3HwRAsAGOIhr2vbpAAamkD6s+kfJpGqyJ2Dq24mnDBOzcQTgijmRAsUKlDRdDIi5QJPmIn+-UoCF9nWTdnuQmS6QOukFO08SmH8QN2n6cQW0mmZ-B+eQ+2ea7jYR4F-vhcjcX1r94NZa5BW-aVmvXfd4HbuDRTlJrtWkE17W9bn6mF+N-uzd3g4ra23to7Z2EVeY7zOnvAeN9d6gOiHjbqdgmjKiJCITomAGa8BIL1Q0nBKSwBEAAZgAOwoD2uNMw001ohDPIwEE7AIAQAqDARafB7ArScGtJOUYiw922GsPAABRUgpBcH7Hyj8cqmQrgMgWEsQY74YjakdLqLikQ5rKgtATYmciJZuHWKvfmp9L53DbsdbKNA76g3THXDmntboFjiLwrYIZH7wDgdOUg+J+oNnAfzPuA9zYRnFhmOx6NQYhlvvY0GcCXrTnWMI0RmRnIzlbmLIi803ZfyNgzJmft+aDwJFzLehIIG907kLOBM5az1lDCLdJXkFELU-obRey9GCGN3oU-23M-B+N3gE4WNcYwvRnDDGMNBUoTmdtOGp3R0RWO9lcIwVw2HIMoI1NBGDU49VTrg-Bg0QB7RQAAFkISCY55CTCUIsKvVhSCHCrX4JLZY3hOA7HEQkYEUjsiShJtITpkCHRfH5IC-6WivTcJ9KvYMIYPD+R5gLUS5Boj1JRjWOutSjyaWCl2PST4wbKH8qZA8U4XLYoXFpRp4sry6R7ASlimAOIRG6JBEKrh4hIEBiFDs6CzRDCOPif25QhaDl1tieAIYgF+1YEyrk3RYq63CvAxpoykrRT8OpHFOlHwbmUFNJ6o4TBSwCgajqHctWUo8qufFeqQAwGwBkRqe5zXkpzPhcg2lxKWskK2aQbiNXCRDGCkIga7w0p5SarmfkZVyGVWM+N49lVjyvApJS8ADxTL4ss-G3sdFMhTmWJSpM3lFVXs7NZzQNndC2Zgihk1zAiBDSwmwazHmcOefIgqHyYgSO+bRX5lp-keAMfk-+SiPggq0GAGhTR6GMOYRC7K0Kx1AriHCqNdxYqH2nNlRZPsBFL1Xf9bpXM4FzIWdE72gc4huIPN6+cvriA6ttQZZQ5tRQQH0eBZIAB3P8qKDyDn3URB9GkrUvvpXaj9+Av3SGgLdF1REXw+r9XiqDb77W70-W4CAIjENGudismYRN-mFswMWzwpaV2un5hWpBVbUFoHQXW65DaqEgEkoaaSJoNSNXuctRwzhuGvNWM4wQOwAifKBMkH5VwCjFFKOUKoNQ6gNEgPMb2Ah2hdF6P0QYIwIBjAmIe6YnpZFMlE+8w9xZ+G7G5BOnUMnfggFzbce4jxqjPHLOQN4yi4TAj+G3U4PwYQBeSAiAdKJZjokxNiXEQqiSxlJOSPBVIaR0nM1aAFx6QjAqdM2i0Fm3BnwiPl3UG1RTilczMZdXGjQyT4ziddaLzHcJoA8Brjhim104FJY0AglaFjCHw9SX0QAzInBezVj62UrjpfpQly0dwmSNcFMlQbm1hojTOHyg5Os8cG9zZV9t9vcYG5wLm2k1UzldUG2bVKoLocWyxHBmQSWNKPG9kcYbOyJpgnBL0FTEBIWkD7AEGZ+sqi5iGDWLKhacFYBxeAj07uRuR49M7XWjvKvGXeUrsFbLdKcomo8EBsBpb-L95cO2QoY7Bq7IKibduIF8iawKx3GkxWpzOV2BrE0pqSoLviREx5ZqTVAYjnpSO6PI5RgqRV6uHbVE1itbGDUiEq2KayraHkcJEDLgtiAi3wHjNOcWcgWIHUex2A1LEOYMDm4MZlfQWJcE4NgFAWgtB9FqNiB8iBmCwFYEMCE7BqaBQgD7nsdcYBaBaPAeItQhCIC0ETJg2AqA+5d90EEH1WDYH7mymGFv8AsXG8FO3XwABSSRDXBTlSyt3p5Pfe99+H7oAeg8sND37zokfo8ZjjwnpP7AU9p8JhnrPje+ggiGgXovNuS8Hkt7DJ3VflCl3wPgeITuZ-dGbx7r3PvFgd670IHvYeI+UkH7H+PCBR-j-T80afOeQSEIX0MYvBhlaIPQIxzZZjbZLBe1PZHxQ5D6UhK5CaDXNgMAHsNtfXZjCAHfdFABAQEEMscERPQcGAJIEUPAKEUgZZAwVgfyNAiQB1NOPyJAQmFWHzEYEECEQPAGTwRwRqFWPlCoAVLEAkQcAAYhEWIOnEdW3xNkHA+gAFZsA6CMpSDyC84yCT5jpOgFgU5c8zxPd84ZCzYEA5BpB+DEAjCSCoBZUc80Df05BahBxJC9oZCVYx9yAhguAbC7DZCJxVDuh1CERMAJBkZbCABSTgjIbgwVPggwow+OacLgngoVEEGAcgAALzBkgEkA4LkNMINTQMtgwISOSIkIADZ7DpxyhuhQ8oBBxs4qjpBCE3CTC3ZHUwBGoKD6hM9MA2dSBaCVZOiiYQQeDf0JD6jzZsitx4ikiwYPoTliiJxIAtYD8DDMBFihjsNYMlhpxLD8BrD846jpxHDnDOAJCdiPC1DGofC-DWDAiVYMjh5IEcNAd74VCQjYjwiOhmBljbjVi4J8NQY0CYiwiy9pAHh8B3j-o7j8QKg-10RHj+V-iBDt9gTrj2EVtfiTjc9VDTwmgJCdC4AOg7h+D4SVZRCJB+4JDpD3CYxKC2iOiujpwrAaFyBSB4gQR2FHAaDejTpFh6COhGDmDGBWCmiHBuh6ikSEAGhvs0DSjyjKjp)


## Getting started

Usage of Cyano requires setting an alias setting in your bundler configuration. Read on for details.

### Install

With Mithril:

```bash
npm install cyano-mithril
```

With React:

```bash
npm install cyano-react
```

### Import

We use an import from alias "cyano". By making this import library agnostic, we can use indentical code for either library.

```javascript
import { cast /*, useState, h, a, etcetera */ } from "cyano"
```

### Configuring

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. See instructions for bundlers below:

- [Configuring Webpack](#configuring-webpack)
- [Configuring Rollup](#configuring-rollup)
- [Configuring Browserify](#configuring-browserify)

### Code example

Due to our agnostic (aliased) import from "cyano", the component code for React and Mithril is identical.

**Hyperscript**

```javascript
import { cast, useState, h, a } from "cyano"

const _Toggle = ({ title }) => {
  const [clicked, setClicked] = useState(false)
  
  return h(".toggle", [
    h("h2", title),
    h("button",
      {
        [a.onclick]: () => setClicked(!clicked)
      },
      "Toggle"
    ),
    h("div",
      clicked ? "On" : "Off"
    )
  ])
}

const Toggle = cast(_Toggle)

// Use:
h(Toggle, { title: "Switch!" })
```

**JSX**

The same code written in JSX. See [Configuring JSX](#configuring-jsx) how to setup JSX rendering.

```jsx
import { cast, useState, a, jsx } from "cyano"
/* jsx needs to be in scope for JSX to work */

const _Toggle = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="toggle">
      <h2>{title}</h2>
      <div
        className={`button ${clicked ? "is-info" : ""}`}
        {...{
          [a.onclick]: () => setClicked(!clicked)
        }}>
        Toggle
      </div>
      <div className="info">
        {clicked ? "On" : "Off"}
      </div>
    </div>
  )
}

const Toggle = cast(_Toggle)

// Use:
<Toggle title="Switch!" />
```

Note the HTML attribute "onclick" that must be passed in the properties object, because we can't use dynamic keys for JSX attributes.


## Usage

### Write a single codebase, deploy twice

The basic idea behind Cyano is to make code portable to both Mithril and React.

Perhaps you are a library author who wants to have more users benefit from your solution. You can write once and deploy twice.

Or you are introducing Mithril in a company that is inclined to use React. By supporting both libraries you can hold out a decision until the team has had some more experience.

Cyano lets you create Mithril and React components from shared base components. To make these base components interoperable, they need to understand a shared language.

### Shared language

**Hooks instead of lifecycle methods**

Base components are "functional components" - render functions without lifecycle/class methods.

[React Hooks](https://reactjs.org/docs/hooks-intro.html) are a replacement for functionality that was previously available only in (React) classes. By replacing class lifecycles with hooks, code becomes more succinct and easier to reason about. Hooks make it trivial to define logic outside of the component and to import parts where needed. Local state and lifecycle methods can be implemented using hooks with little effort.

* React Hooks have been introduced in React 16.8.
* For Mithril hooks are implemented with helper library [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks).


**Hyperscript or JSX**

Base components can be written in hyperscript or JSX.

If you choose hyperscript: [React Without JSX](https://reactjs.org/docs/react-without-jsx.html) demonstrates how to use `React.createElement` to write component code. Cyano uses an enhanced version by means of [react-hyperscript](https://github.com/mlmorg/react-hyperscript), which is more lenient in omitting properties and keys.

If you choose JSX, see [Configuring JSX](#configuring-jsx) how to setup JSX rendering. JSX can be used for both React and Mithril.

**Dictionary of HTML attributes**

React follows the camelCase convention for "official" HTML attributes, whereas Mithril uses lowercase names. Helper variable `a` maps the lowercase attribute name to an accepted one.

For example:

`a.onclick` returns "onclick" for Mithril and "onClick" for React.

**Helper functions**

| **Variable**      | **Description** | **API doc** |
| ----------------- | --------------- | ----------- |
| `cast`            | Takes a base component and returns a Mithril or React component. | [cast](#cast) | 
| `h`               | The render function for hyperscript. | [h (render function)](#h-render-function) |
| `getDom`          | Callback function that gets a reference to the DOM element. | [getDom](#getdom) |
| `a`               | Dictionary of accepted HTML attributes. | [a (Accepted HTML attributes)](#a-accepted-html-attributes) |
| `jsx`             | Babel pragma, import this when writing JSX. | [jsx](#jsx) |


### Using hooks

Base components have access to default hooks (see "supported hooks" below) and custom hooks.

```javascript
import { h, a, useState, useEffect } from "cyano"

const SharedCounter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount)

  useEffect(
    () => {
      // ...
    },
    [count] // Only re-run when value has changed
  )

  return (
    h("div",
      [
        h(".count",
          { key: "count" },
          count
        ),
        h("button",
          {
            key: "increment",
            [a.onclick]: () => setCount(count + 1),
          },
          "More"
        ),
      ]
    )
  )
}
```

#### Supported hooks

* `useState`
* `useEffect`
* `useLayoutEffect`
* `useReducer`
* `useRef`
* `useMemo`
* `useCallback`

These React hooks make little sense with Mithril and are not included:

* `useContext`
* `useImperativeHandle`
* `useDebugValue`


#### Custom hooks

General introduction in React's documentation: [Building Your Own Hooks](https://reactjs.org/docs/hooks-custom.html)

Using hooks with Mithril: see [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks) for examples.


### Passing or nesting components

Example: a Navigation component that contains Link components.

Either convert the Link before using:

```javascript
import { cast, h, a } from "cyano"

const _Link = () => {
  // ...
}
const Link = cast(_Link)

const _Navigation = () => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]
const Navigation = cast(_Navigation)
```

Or pass the converted Link as initial parameter to Navigation:

```javascript
import { cast, h, a } from "cyano"

const _Link = () => {
  // ...
}

const _Navigation = ({ Link }) => [
  h(Link, { label: "Home",    path: "/"} ),
  h(Link, { label: "Contact", path: "/contact"} ),
]

const Link = cast(_Link)
const Navigation = cast(_Navigation, { Link })
```


## API

### cast

Takes a base component and returns a Mithril or React component.

**Signature**

`cast(renderFunction, initialProps?) => Component`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | 
| `renderFunction` | Function component | Yes | The base/common/shared functional component to be converted for Mithril or React |
| `initialProps`   | Object | No | Any variable to pass to `renderFunction`; see also [Passing or nesting components](#passing-or-nesting-components) | 
| **Returns** | Component |||

The returned `Component` can be called as any component:

```javascript
h(Component, {
  // component props
})
```

The component render function that is called will receive a combined object of `initialProps` and component props, plus property [children](#children):

```javascript
const _Component = ({ defaultTitle, title, children )} => {
  // ...
}

const Component = cast(_Component, { defaultTitle: "a blue sky" })

h(Component,
  { title: "casting a shadow" },
  h("div", "Cloud child")  
)
```

### h (render function)

The render function for hyperscript.

**Signature**

`h(selector, properties?, children?) => Element`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | 
| `selector` | `String|Object` | Yes | A CSS selector or a component |
| `properties` | `Object` | No | HTML attributes or element properties |
| `children` | `Array<Vnode|ReactElement>|String|Number|Boolean` | No | Child nodes |
| **Returns** | `Vnode` (for Mithril); `ReactElement` for React |||

#### Inserting trusted content

Mithril's API contains [m.trust](https://mithril.js.org/trust.html) that "turns an HTML or SVG string into unescaped HTML or SVG". The documentation continues with the warning

> Do not use m.trust on unsanitized user input. Always try to use an [alternative method](https://mithril.js.org/trust.html#avoid-trusting-html) first, before considering using m.trust.

With this caveat, it is sometimes useful to insert a piece of HTML or SVG into a container.

The render function `h` is enhanced with method `trust` to do that:

```javascript
const iconBack = h.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>")
```

`cyano-react` uses `dangerouslySetInnerHTML` to set trusted content with a "div" as wrapper element. The element tag can be set with the second parameter.

For consistency, `cyano-mithril` function `h.trust` is enhanced with this second parameter too.

**Signature**

`h.trust(html, wrapper) => Element`

| **Argument**    | **Type**  | **Required** | **Default** | **Description** |
| --- | --- | --- | --- | --- | 
| `html` | `String` | Yes | | A string containing HTML or SVG text. |
| `wrapper` | Element tag name | No | `cyano-react`: "div"; `cyano-mithril`: undefined | Wrapper element |
| **Returns** | `Vnode` (for Mithril); `ReactElement` for React |||

### a (HTML attributes)

Dictionary of accepted HTML attributes.

`a` maps the lowercase attribute name to an accepted one. Instead of `onClick` (for React) or (`onclick` (for Mithril) you write:

```javascript
[a.onclick]: () => setClicked(!clicked)
```

or in JSX:

```jsx
{...{
  [a.onclick]: () => setClicked(!clicked)
}}
```

Complete list of included html attributes:

* [for Mithril](https://github.com/ArthurClemens/cyano/blob/master/packages/cyano-mithril/src/htmlAttributes.js)
* [for React](https://github.com/ArthurClemens/cyano/blob/master/packages/cyano-react/src/htmlAttributes.js)

### getDom

Callback function `getDom` gets a reference to the DOM element.

**Signature**

`getDom(fn)`

| **Argument**    | **Type**  | **Required** | **Description** |
| --- | --- | --- | --- | --- | 
| `fn` | `Function` | Yes | Function that receives the DOM reference. |
| **Returns** | `function(dom) { /* use dom */}` |||

`getDom` accepts a function that receives the DOM reference.

DOM reference are commonly stored in a `useRef` object, with property `current` to store the data. Note that setting or updating `useRef` will not cause a re-render.

```javascript
import { useRef, h, a, getDom } from "cyano"

const _Component = () => {
  const domRef = useRef()
  
  return (
    h("div", 
      {
        ...getDom(dom => domRef.current = domRef.current || dom) // React will call this each render
      },
      "My component"
    )
  )
}
```

The example above contains a check to prevent superfluous updates to the variable `domRef`.

**Under the hood**

* `cyano-mithril`: `getDom` uses Mithril's lifecycle method `oncreate` to access the DOM element. This method will be called once.
* `cyano-react`: `getDom` uses React's `ref` method to access the DOM element. This method will be called on each render. When the element is removed from the DOM, `getDom` will receive `null`. Using an update check as shown above will prevent that the reference will be lost.

### Children

Child elements are accessed through the component prop `children`:

```javascript
const _Component = ({ children }) => {
  return [
    m("h2", "My title"),
    children
  ]
}
```
### jsx

Babel pragma. Only import this when writing JSX.


## Additional setup

### Bundler configuration

This is a required step in the setup.

We need to let the bundler point from "cyano" to `cyano-react` or `cyano-mithril`. 

Each bundler has a different method to to this - it is generally called "map" or "alias".

**Environment variable setup**

The examples below show how to direct from "cyano" to "cyano-mithril". When you are using the same bundler scripts for both Mithril and React, you should consider to configure the alias, for instance by using an environment variable.

Example (using Webpack):

* [Setting the environment variable](https://github.com/ArthurClemens/cyano/blob/master/packages/tests-cyano-mithril/package.json#L13)
* [Reading the environment variable](https://github.com/ArthurClemens/cyano/blob/master/scripts/webpack.config.js#L7)
* [Using the environment variable to set an alias](https://github.com/ArthurClemens/cyano/blob/master/scripts/webpack.config.js#L30)


#### Configuring Webpack

```javascript
// webpack.config.js

const path = require("path");
const baseDir = process.cwd();
```

Then add to the configuration:

```javascript
resolve: {
  alias: {
    "cyano": path.resolve(baseDir, "node_modules/cyano-mithril"),
  }
}
```

#### Configuring Rollup

Use [rollup-plugin-pathmodify](https://www.npmjs.com/package/rollup-plugin-pathmodify):

```javascript
// rollup.config.js

import path from "path";
import pathmodify from "rollup-plugin-pathmodify";

const baseDir = process.cwd();
```

Then add to plugins:

```javascript
pathmodify({
  aliases: [
    {
      id: "cyano",
      resolveTo: path.resolve(baseDir, "node_modules/cyano-mithril/dist/cyano-mithril.mjs"),
    },
  ]
})
```

#### Configuring Browserify

Use the [pathmodify](https://www.npmjs.com/package/pathmodify) plugin to change the default config path to your custom file:

```javascript
const path = require("path");
const pathmodify = require('pathmodify');

const baseDir = process.cwd();
```

Then add to `browserify()`:

```javascript
.plugin(pathmodify, {
  mods: [
    pathmodify.mod.id("cyano", path.resolve(baseDir, "node_modules/cyano-mithril")),
  ]
})
// ...
```

### Configuring JSX

This is an optional step.

Install `@babel/plugin-transform-react-jsx` and add to the `plugins` in your Babel configuration:

```javascript
["@babel/plugin-transform-react-jsx", {
  "pragma": "jsx"
}]
```

`jsx` is a variable exported by Cyano. This needs to be in scope when using JSX in component code (but does not need to be called explicitly):

```javascript
import { jsx } from "cyano"
```

### React and Webpack

It may be necessary to point Webpack to the React module. Add an entry to `resolve.alias` in the config:

```javascript
resolve: {
  alias: {
    "react": path.resolve(baseDir, "node_modules/react"),
  },
},
```

## Compatibility

* Mithril: tested with Mithril 1.1.6 and Mithril 2.x
* React: tested with React 16.8.4


## Size

* `cyano-mithril.js`:
  * 2.5 Kb gzipped
  * Includes [mithril-hooks](https://github.com/ArthurClemens/mithril-hooks)
* `cyano-react.js`:
  * 2.3 Kb gzipped
  * Includes [react-hyperscript](https://github.com/mlmorg/react-hyperscript)


## Supported browsers

Output from `npx browserslist`:

```
and_chr 71
and_ff 64
and_qq 1.2
and_uc 11.8
android 67
baidu 7.12
chrome 72
chrome 71
edge 18
edge 17
firefox 65
firefox 64
ie 11
ie_mob 11
ios_saf 12.0-12.1
ios_saf 11.3-11.4
op_mini all
op_mob 46
opera 57
safari 12
samsung 8.2
```


## License

MIT
