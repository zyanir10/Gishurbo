# Layout Reference

> Auto-extracted from live DOM. Use this to understand how the site is structured spatially.

## Spacing System

**Base grid:** 5px

**Scale:** `5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80` px

| Spacing | Semantic Use |
|---------|-------------|
| 5px | Tight — within a component |
| 10px | Medium — between sibling items |
| 20px | Wide — between sections |
| 40px | Vast — major section breaks |

## Flex Layouts

| Element | Direction | Justify | Align | Gap | Children |
|---------|-----------|---------|-------|-----|----------|
| `header#header_pop.elementor-element.elementor-element-a3a90` | column | — | center | 0px | 2 |
| `footer.elementor-element.elementor-element-911bc95` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b6b71fc` | column | — | — | — | 2 |
| `div.elementor-element.elementor-element-447ddc1` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-45de3de` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b20b720` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-3cfff61` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-d9f3a8a` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-b558bce` | column | — | — | — | 1 |
| `div.elementor-element.elementor-element-a1dfeb8` | column | — | — | — | 1 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |
| `div.jet-popup__container` | row | center | stretch | — | 2 |

## Structural Containers

### `<header>` (`header.elementor.elementor-14324`)

```
display:          block
children:         1
```

### `<footer>` (`footer.elementor.elementor-592`)

```
display:          block
children:         2
```

### `<header>` (`header#header_pop.elementor-element.elementor-element-a3a90`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      center
gap:              0px
max-width:        100%
children:         2
```

### `<footer>` (`footer.elementor-element.elementor-element-911bc95`)

```
display:          flex
flex-direction:   column
justify-content:  —
align-items:      —
padding:          0px 10px
max-width:        100%
children:         1
```

## Layout Rules

- **Container max-width:** `100%` — always center with `margin: auto`
- Primary layout system: **Flexbox**
- Every spacing value must be a multiple of **5px**
- Never use arbitrary margin/padding values outside the spacing scale

