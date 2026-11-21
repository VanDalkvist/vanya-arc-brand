# Ресёрч: бренд-кит, носители и режимы Vanya Arc

Дата: 2026-11-22. Выделение из `vanya-ui` в публичный независимый бренд-пакет.

## Проблема

Прежние `VanyaArcMark.tsx`, `VanyaArcLockup.tsx`, `VanyaArcArtwork.ts`, SVG и стили лежали в дизайн-системе. При каждом изменении знака пришлось бы обновлять код сразу в нескольких проектах.

## Что сделали

Перенесли контур, SVG и React-компоненты в `@vanya/brand`. `@vanya/ui` подключает выбранный коммит и реэкспортирует прежние имена компонентов. После обновления бренда нужно отдельно обновить зависимость в UI.

## Носители

- Два фона, монохром и отдельный символ для небольших мест.
- Две текстовые сборки: родительская `Vanya Arc` и `Vanya Arc / UI` с акцентным названием продукта.
- Favicon из того же пути в квадратной области (без изменения контура).
- OG/социальные карточки делать растровыми PNG на основе утверждённой композиции: SVG и внешние шрифты поддерживаются не всеми генераторами превью.

## Источники

- [Google Fonts FAQ, license and distribution](https://developers.google.com/fonts/faq) — технические варианты веб-шрифтов и открытые лицензии.
- [W3C SVG 2](https://www.w3.org/TR/SVG2/) — масштабируемая форма, viewBox и независимость контура от пикселей.
- [GitHub documentation: social preview image](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/configuring-your-repositorys-social-preview) — назначение карточки репозитория.
- [Open Graph Protocol](https://ogp.me/) — изображение `og:image` для внешних ссылок.

## Осталось проверить

Favicon на 16/24/32/48 px; читаемость надписи в шапке; тёмную тему; вид SVG без Manrope; пригодность файлов для печати. Векторные версии с `<text>` требуют Manrope в среде просмотра; это не считается финальным outlined-wordmark.
