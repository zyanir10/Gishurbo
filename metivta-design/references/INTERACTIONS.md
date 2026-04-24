# Interaction Reference

> Micro-interactions extracted from live DOM. Recreate these exactly for authentic feel.

## Coverage

| Component Type | Count | States Captured |
|----------------|-------|----------------|
| Button | 2 | default, hover, focus |
| Role Button | 1 | default, hover, focus |
| Link | 3 | default, hover, focus |
| Input | 3 | default, hover, focus |

## Transition System

These transition declarations were extracted from interactive elements:

```css
transition: 0.3s;
transition: all;
```

Apply these to all interactive elements. Never invent new durations or easings.

## Button Interactions

### Button 1 — `שליחה`

**States:**

- Default: `../screens/states/button-1-default.png`
- Hover: `../screens/states/button-1-hover.png`
- Focus: `../screens/states/button-1-focus.png`

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s`

### Button 2 — `הרשמה`

**States:**

- Default: `../screens/states/button-2-default.png`
- Hover: `../screens/states/button-2-hover.png`
- Focus: `../screens/states/button-2-focus.png`

**On hover:**

```css
/* background-color: rgb(19, 68, 57) → */ background-color: rgb(255, 255, 255);
/* color: rgb(255, 255, 255) → */ color: rgb(244, 154, 195);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(244, 154, 195);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(244, 154, 195) none 3px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(244, 154, 195);
```

**On focus:**

```css
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `0.3s`

## Role Button Interactions

### Role Button 1 — `חיפוש`

**States:**

- Default: `../screens/states/role-button-1-default.png`
- Hover: `../screens/states/role-button-1-hover.png`
- Focus: `../screens/states/role-button-1-focus.png`

**On hover:**

```css
/* color: rgb(255, 255, 255) → */ color: rgb(211, 181, 116);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(211, 181, 116);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(211, 181, 116) none 3px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(211, 181, 116);
```

**On focus:**

```css
/* color: rgb(255, 255, 255) → */ color: rgb(211, 181, 116);
/* border-color: rgb(255, 255, 255) → */ border-color: rgb(211, 181, 116);
/* outline: rgb(255, 255, 255) none 3px → */ outline: rgb(16, 16, 16) auto 1px;
/* outline-color: rgb(255, 255, 255) → */ outline-color: rgb(16, 16, 16);
```

**Transition:** `all`

## Link Interactions

### Link 1 — `קליניקות מטפלים`

**States:**

- Default: `../screens/states/link-1-default.png`
- Hover: `../screens/states/link-1-hover.png`
- Focus: `../screens/states/link-1-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

### Link 2 — `איזור אישי`

**States:**

- Default: `../screens/states/link-2-default.png`
- Hover: `../screens/states/link-2-hover.png`
- Focus: `../screens/states/link-2-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

### Link 3 — `youtube chanel link`

**States:**

- Default: `../screens/states/link-3-default.png`
- Hover: `../screens/states/link-3-hover.png`
- Focus: `../screens/states/link-3-focus.png`

**On hover:**

```css
/* color: rgb(204, 51, 102) → */ color: rgb(51, 51, 102);
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(51, 51, 102);
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(51, 51, 102) none 3px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(51, 51, 102);
```

**On focus:**

```css
/* border-color: rgb(204, 51, 102) → */ border-color: rgb(255, 255, 255);
/* border-width: 0px → */ border-width: 1px;
/* outline: rgb(204, 51, 102) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(204, 51, 102) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `all`

## Input Interactions

### Input 1 — `שם`

**States:**

- Default: `../screens/states/input-1-default.png`
- Hover: `../screens/states/input-1-hover.png`
- Focus: `../screens/states/input-1-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

### Input 2 — `אימייל`

**States:**

- Default: `../screens/states/input-2-default.png`
- Hover: `../screens/states/input-2-hover.png`
- Focus: `../screens/states/input-2-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

### Input 3 — `טלפון`

**States:**

- Default: `../screens/states/input-3-default.png`
- Hover: `../screens/states/input-3-hover.png`
- Focus: `../screens/states/input-3-focus.png`

**On focus:**

```css
/* border-color: rgb(19, 185, 161) → */ border-color: rgb(255, 255, 255);
/* box-shadow: none → */ box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset;
/* outline: rgb(19, 185, 161) none 3px → */ outline: rgb(0, 0, 0) solid 1px;
/* outline-color: rgb(19, 185, 161) → */ outline-color: rgb(0, 0, 0);
```

**Transition:** `0.3s`

## Interaction Rules

- Hover effects include **color transitions** — use the extracted values, not approximations
- Focus states use **outline** (not box-shadow) — always match the extracted focus ring
- Transition durations in use: `0.3s`
- Always respect `prefers-reduced-motion` — set all transitions to `0s` when enabled

