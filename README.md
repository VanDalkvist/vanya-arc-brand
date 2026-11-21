# Vanya Arc — бренд и исходники айдентики

Здесь хранятся SVG, контур логотипа, React-компоненты и цвета Vanya Arc. `@vanya/ui` подключает этот пакет с закреплённого GitHub-коммита.

- **Vanya Arc** — родительский бренд; **Vanya Arc / UI** — продукт дизайн-системы.
- Знак — одна линия с двумя гребнями: коротким тёмным и высоким терракотовым. Контур одинаковый во всех вариантах.
- Код React и CSS — MIT. В метаданных пакета указано `SEE LICENSE IN LICENSING.md`, поскольку он содержит разные типы материалов. Оригинальный рисунок и SVG — отдельные условия `LicenseRef-VanyaArc-Brand`. См. [LICENSING.md](LICENSING.md) и [BRAND.md](BRAND.md).

## Пакет

```sh
bun add github:VanDalkvist/vanya-arc-brand
```

```tsx
import { VanyaArcMark, VanyaArcLockup } from "@vanya/brand";
import "@vanya/brand/tokens.css";

<VanyaArcLockup />
<VanyaArcLockup product="UI" />
<VanyaArcLockup product="UI" monochrome />
<VanyaArcMark label="Vanya Arc" />
```

Компоненты также доступны из `@vanya/ui` через реэкспорт. Исходный контур и SVG изменяются здесь. Пакет содержит TSX без предварительной компиляции.

## Готовые материалы

| Файл | Назначение |
| --- | --- |
| [mark-light.svg](assets/mark-light.svg), [mark-dark.svg](assets/mark-dark.svg), [mark-mono.svg](assets/mark-mono.svg) | Знак в двух темах и в одном цвете |
| [favicon.svg](assets/favicon.svg) | Знак в квадратном поле |
| [lockup-parent-light.svg](assets/lockup-parent-light.svg), [lockup-parent-dark.svg](assets/lockup-parent-dark.svg) | Vanya Arc |
| [lockup-ui-light.svg](assets/lockup-ui-light.svg), [lockup-ui-dark.svg](assets/lockup-ui-dark.svg) | Vanya Arc / UI |

**SVG с надписью зависят от Manrope.** Без шрифта просмотрщик подставит другой. Для печати ещё нужен вариант с буквами в кривых и соблюдением лицензии шрифта.

## Документация и исследования

- [Брендбук](docs/brand-guidelines.md)
- [Иерархия бренда и логотип](docs/research/brand-architecture-and-mark-2026-11.md)
- [Носители, читаемость и схема использования](docs/research/brand-assets-and-usage-2026-11.md)
- [Защита знака и границы лицензий](docs/research/brand-rights-and-trademark-2026-11.md)
- [Правила источников, цитирования и разрешений](docs/source-citation-policy.md)
- [Аудит источников и лицензий](docs/research/provenance-and-license-review-2026-11.md)
- [Список задач для финальной визуальной приёмки](docs/acceptance.md)

Основной сайт: https://vanya-arc.dev · Дизайн-система: https://ui.vanya-arc.dev.
