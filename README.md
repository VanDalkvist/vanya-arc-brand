# Vanya Arc — бренд и исходники айдентики

**Единый источник фирменного знака, написания, цветовых токенов и правил для семейства продуктов.**

- **Vanya Arc** — родительский бренд; **Vanya Arc / UI** — продукт дизайн-системы.
- Утверждённый знак: малая тёмная волна плавно переходит в высокую тёплую. Это не симметричная синусоида; геометрия одна на все носители.
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

**Публичные компоненты остаются доступными через `@vanya/ui`**, который зависит от этого пакета и реэкспортирует их для обратной совместимости. Стили, SVG и контур живут только здесь. Пакет с исходными TSX требует сборщик, работающий с TSX из зависимостей.

## Готовые материалы

| Файл | Назначение |
| --- | --- |
| [mark-light.svg](assets/mark-light.svg), [mark-dark.svg](assets/mark-dark.svg), [mark-mono.svg](assets/mark-mono.svg) | Знак в двух темах и в одном цвете |
| [favicon.svg](assets/favicon.svg) | Знак в квадратном поле |
| [lockup-parent-light.svg](assets/lockup-parent-light.svg), [lockup-parent-dark.svg](assets/lockup-parent-dark.svg) | Vanya Arc |
| [lockup-ui-light.svg](assets/lockup-ui-light.svg), [lockup-ui-dark.svg](assets/lockup-ui-dark.svg) | Vanya Arc / UI |

**Ограничение SVG с текстом:** вордмарк в экспортируемых SVG использует Manrope как шрифт и может выглядеть иначе там, где он не установлен. Для сайтов предпочтительны React-lockup и подключённый Manrope. Перед типографским/печатным использованием подготовить обведённый в кривые вариант, соблюдая лицензию шрифта.

## Документация и исследования

- [Брендбук](docs/brand-guidelines.md)
- [Иерархия бренда и логотип](docs/research/brand-architecture-and-mark-2026-11.md)
- [Носители, читаемость и схема использования](docs/research/brand-assets-and-usage-2026-11.md)
- [Защита знака и границы лицензий](docs/research/brand-rights-and-trademark-2026-11.md)
- [Правила источников, цитирования и разрешений](docs/source-citation-policy.md)
- [Аудит источников и лицензий](docs/research/provenance-and-license-review-2026-11.md)
- [Список задач для финальной визуальной приёмки](docs/acceptance.md)

Основной сайт: https://vanya-arc.dev · Дизайн-система: https://ui.vanya-arc.dev.
