# Vanya Arc — бренд и исходники айдентики

`@vanya/brand` — общий брендбук, эталонные SVG, React-рендереры и брендовые токены Vanya Arc. Текущая исходная версия — **0.2.0** ([package.json](package.json)). `@vanya/ui` 1.0.0 использует закреплённый коммит этого пакета.

## Семейство брендов

| Уровень | Знак и применение |
| --- | --- |
| Vanya Arc | Зонтичный бренд, утверждённый V→A |
| Vanya Arc / UI | Исходный V→A дизайн-системы |
| Vanya Arc / Product | Собственная утверждённая волновая геометрия, индивидуальный favicon |

Синусоида — общий генеративный принцип. Родство задают пластика штриха, цветовые роли, Manrope и структура `Vanya Arc / Product`. Продуктовый знак связан с назначением сервиса. Для квадратной аватарки рекомендуется тот же знак, что и у favicon. Индивидуальные активы и история их согласования хранятся в соответствующих продуктах. Перед созданием знака прочитайте [брендбук](docs/brand-guidelines.md) и [процедуру для агента](docs/product-identity.md).

## Лицензирование
- Код React и CSS — MIT. В метаданных пакета указано `SEE LICENSE IN LICENSING.md`, поскольку он содержит разные типы материалов. Оригинальный рисунок и SVG — отдельные условия `LicenseRef-VanyaArc-Brand`. См. [LICENSING.md](LICENSING.md) и [BRAND.md](BRAND.md).

## Пакет

```sh
bun add 'github:VanDalkvist/vanya-arc-brand#83ade0e4b8bc486c0fbc52df8b04b317d8e40bb9'
```

```tsx
import { VanyaArcMark, VanyaArcLockup } from "@vanya/brand";
import "@vanya/brand/tokens.css";

<VanyaArcLockup />
<VanyaArcLockup product="UI" />
<VanyaArcLockup product="UI" monochrome />
// ProductMark — утверждённый компонент символа конкретного сервиса.
// <VanyaArcLockup product="Product" productMark={ProductMark} />
// <VanyaArcLockup product="Product" productMark={ProductMark} monochrome />
<VanyaArcLockup product="Product" showMark={false} /> // временный текстовый lockup
<VanyaArcMark label="Vanya Arc" />
```

Компоненты также доступны из `@vanya/ui` через реэкспорт. Исходный контур и SVG изменяются здесь. Пакет содержит TSX без предварительной компиляции; требуется React 18/19 и сборщик с поддержкой TSX из зависимостей. `VanyaArcProductMarkProps` задаёт контракт `monochrome`. Для нового сервиса с ожидающим согласования знаком используйте `showMark={false}`. Сохраняйте lockfile.

Коммит установки содержит 0.2.0 и прошёл интеграционные проверки в UI 1.0.0. Изменения смержены в main через [PR #1](https://github.com/VanDalkvist/vanya-arc-brand/pull/1). На 26.11.2026 тег `v0.2.0` отсутствует; актуальный статус — [Tags](https://github.com/VanDalkvist/vanya-arc-brand/tags).

## Эталонные материалы родительского бренда и UI

| Файл | Назначение |
| --- | --- |
| [mark-light.svg](assets/mark-light.svg), [mark-dark.svg](assets/mark-dark.svg), [mark-mono.svg](assets/mark-mono.svg) | Знак в двух темах и в одном цвете |
| [favicon.svg](assets/favicon.svg) | Знак в квадратном поле |
| [lockup-parent-light.svg](assets/lockup-parent-light.svg), [lockup-parent-dark.svg](assets/lockup-parent-dark.svg) | Vanya Arc |
| [lockup-ui-light.svg](assets/lockup-ui-light.svg), [lockup-ui-dark.svg](assets/lockup-ui-dark.svg) | Vanya Arc / UI |

**SVG с надписью зависят от Manrope.** Без шрифта просмотрщик подставит другой. Для печати ещё нужен вариант с буквами в кривых и соблюдением лицензии шрифта.

## Документация и исследования

- [Брендбук](docs/brand-guidelines.md)
- [Процедура индивидуальной айдентики продукта](docs/product-identity.md)
- [Иерархия бренда и логотип](docs/research/brand-architecture-and-mark-2026-11.md)
- [Носители, читаемость и схема использования](docs/research/brand-assets-and-usage-2026-11.md)
- [Защита знака и границы лицензий](docs/research/brand-rights-and-trademark-2026-11.md)
- [Правила источников, цитирования и разрешений](docs/source-citation-policy.md)
- [Аудит источников и лицензий](docs/research/provenance-and-license-review-2026-11.md)
- [Список задач для финальной визуальной приёмки](docs/acceptance.md)

Локальная проверка пакета: `npm test` (Node.js). Визуальная приёмка отдельных носителей выполняется по [чек-листу](docs/acceptance.md); финальная независимая визуальная приёмка не подтверждена.

Основной сайт: https://vanya-arc.dev · Дизайн-система: https://ui.vanya-arc.dev.
