# Animation Reference

> Cinematic motion design extracted from live DOM. Follow these specs exactly to recreate the experience.

## Motion Technology Stack

| Library | Type | Notes |
|---------|------|-------|
| **Anime.js v2.2.0** | animation |  |

## Scroll Journey

The page is **6,930px** tall. Each frame below shows what the user sees at that scroll depth.

> **Use these screenshots to understand WHAT animates, WHEN it animates, and HOW it moves.**

### 0% — Top / Hero
Scroll position: 0px

![Scroll 0%](../screens/scroll/scroll-000.png)

### 17% — Opening Section
Scroll position: 1,025px

![Scroll 17%](../screens/scroll/scroll-017.png)

### 33% — First Feature Section
Scroll position: 1,990px

![Scroll 33%](../screens/scroll/scroll-033.png)

### 50% — Mid-Page
Scroll position: 3,015px

![Scroll 50%](../screens/scroll/scroll-050.png)

### 67% — Lower Content
Scroll position: 4,040px

![Scroll 67%](../screens/scroll/scroll-067.png)

### 83% — Near Footer
Scroll position: 5,005px

![Scroll 83%](../screens/scroll/scroll-083.png)

### 100% — Bottom / Footer
Scroll position: 6,030px

![Scroll 100%](../screens/scroll/scroll-100.png)

## CSS Keyframes (79 extracted)

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes fade`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.jet-tabs-fade-effect > .jet-tabs__content-wrapper > .jet-tabs__content.active-c`, `.jet-tabs-column-fade-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-fade-effect.active-toggle .jet-toggle__content .jet-toggle__content-`, `.jet-switcher-fade-effect .jet-tabs__content.active-content`

```css
@keyframes fade {
  0%, 50% {
    opacity: 0;
    transform: scale(0);
  }
}
```

> Fade + motion enter animation

### `@keyframes moveUp`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Fill: `backwards`

Used by: `.jet-tabs-move-up-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-tabs-column-move-up-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-move-up-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-move-up-effect .jet-switcher__content.active-content`

```css
@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes moveUp`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)` · Fill: `backwards`

Used by: `.jet-tabs-move-up-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-tabs-column-move-up-effect > .jet-tabs__content .elementor-top-column`, `.jet-toggle-move-up-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-move-up-effect .jet-switcher__content.active-content`

```css
@keyframes moveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes zoomIn`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-in-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-toggle-zoom-in-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-zoom-in-effect .jet-switcher__content.active-content`

```css
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomIn`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-in-effect > .jet-tabs__content-wrapper > .jet-tabs__content.activ`, `.jet-toggle-zoom-in-effect.active-toggle .jet-toggle__content .jet-toggle__conte`, `.jet-switcher-zoom-in-effect .jet-switcher__content.active-content`

```css
@keyframes zoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomOut`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-out-effect > .jet-tabs__content-wrapper > .jet-tabs__content.acti`, `.jet-toggle-zoom-out-effect.active-toggle .jet-toggle__content .jet-toggle__cont`, `.jet-switcher-zoom-out-effect .jet-switcher__content.active-content`

```css
@keyframes zoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes zoomOut`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-zoom-out-effect > .jet-tabs__content-wrapper > .jet-tabs__content.acti`, `.jet-toggle-zoom-out-effect.active-toggle .jet-toggle__content .jet-toggle__cont`, `.jet-switcher-zoom-out-effect .jet-switcher__content.active-content`

```css
@keyframes zoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes fallPerspective`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-fall-perspective-effect > .jet-tabs__content-wrapper > .jet-tabs__cont`, `.jet-toggle-fall-perspective-effect.active-toggle .jet-toggle__content .jet-togg`, `.jet-switcher-fall-perspective-effect .jet-switcher__content.active-content`

```css
@keyframes fallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes fallPerspective`

Duration: `500ms` · Easing: `cubic-bezier(0.26, 0.69, 0.37, 0.96)`

Used by: `.jet-tabs-fall-perspective-effect > .jet-tabs__content-wrapper > .jet-tabs__cont`, `.jet-toggle-fall-perspective-effect.active-toggle .jet-toggle__content .jet-togg`, `.jet-switcher-fall-perspective-effect .jet-switcher__content.active-content`

```css
@keyframes fallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes edit-button-pulse`

Duration: `5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-tabs__edit-cover`, `.jet-toggle__edit-cover`, `.jet-switcher__edit-cover`

```css
@keyframes edit-button-pulse {
  0% {
    box-shadow: rgba(183, 8, 78, 0.6) 0px 0px 2px 0px;
  }
  30% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 10px;
  }
  100% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 0px;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes edit-button-pulse`

Duration: `5s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-tabs__edit-cover`, `.jet-toggle__edit-cover`, `.jet-switcher__edit-cover`

```css
@keyframes edit-button-pulse {
  0% {
    box-shadow: rgba(183, 8, 78, 0.6) 0px 0px 2px 0px;
  }
  30% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 10px;
  }
  100% {
    box-shadow: rgba(183, 8, 78, 0) 0px 0px 2px 0px;
  }
}
```

> Shadow pulse/glow effect

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes spCircRot`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-loader`, `.jet-tabs-loader`, `.jet-elements-loader`

```css
@keyframes spCircRot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes eicon-spin`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.elementor-custom-embed-play.elementor-playing i, .elementor-custom-embed-play.e`, `.eicon-animation-spin`

```css
@keyframes eicon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner-animation`

Duration: `1.1s` · Easing: `cubic-bezier(0.645, 0.045, 0.355, 1)` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-ajax-search__spinner .rect, .jet-ajax-search-block .jet-ajax-search__spinne`, `.jet-search-suggestions__spinner .rect, .jet-search-suggestions-block .jet-searc`

```css
@keyframes jet-spinner-animation {
  0% {
    transform: scaleY(0.4);
  }
  25% {
    transform: scaleY(0.9);
  }
  50% {
    transform: scaleY(0.2);
  }
  80% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
}
```

> Transform/motion animation

### `@keyframes animatetopfix_ur_web`

Duration: `0.4s`

Used by: `.fix_ur_web_modal-content_Disclaimer`, `.fix_ur_web_modal-content`

```css
@keyframes animatetopfix_ur_web {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes animatetopfix_ur_web`

Duration: `0.4s`

Used by: `.fix_ur_web_modal-content_Disclaimer`, `.fix_ur_web_modal-content`

```css
@keyframes animatetopfix_ur_web {
  0% {
    top: -300px;
    opacity: 0;
  }
  100% {
    top: 0px;
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes checked-radio-4`

Duration: `0.6s` · Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_green:checked + .fix_ur_web_color_radio_boxe`, `.fix_ur_web_color_radio_boxes_radio_white:checked + .fix_ur_web_color_radio_boxe`

```css
@keyframes checked-radio-4 {
  0% {
    transform: rotate(0deg) translateY(-4.8vw) scale(0.2);
  }
  83% {
    transform: rotate(360deg) translateY(-2.5vw) scale(1);
    transform-origin: 2vw center;
  }
  88% {
    transform: translateY(0.6vw) scale(1);
  }
  93% {
    transform: translateY(-0.9vw) scale(1);
  }
  100% {
    transform: translateY(0px) scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes unchecked-radio-4`

Duration: `0.5s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_green + .fix_ur_web_color_radio_boxes_label:`, `.fix_ur_web_color_radio_boxes_radio_white + .fix_ur_web_color_radio_boxes_label:`

```css
@keyframes unchecked-radio-4 {
  25% {
    top: -1vw;
  }
  50% {
    top: 1vw;
  }
  75% {
    top: -1vw;
  }
  100% {
    top: -1vw;
    transform: scale(0);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-listing-grid__loader-spinner`

```css
@keyframes jet-engine-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-listing-grid__loader-spinner`

```css
@keyframes jet-engine-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-map-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-map-box .jet-map-preloader .jet-map-loader`

```css
@keyframes jet-engine-map-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-engine-map-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-map-box .jet-map-preloader .jet-map-loader`

```css
@keyframes jet-engine-map-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-mailchimp__submit::before`

```css
@keyframes jet-spinner {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes jet-spinner`

Duration: `0.6s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.jet-popup-mailchimp__submit::before`

```css
@keyframes jet-spinner {
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes hide-scroll`

Duration: `0.3s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `backwards`

Used by: `.elementor-nav-menu--toggle .elementor-menu-toggle.elementor-active + .elementor`

```css
@keyframes hide-scroll {
  0%, 100% {
    overflow-x: hidden;
    overflow-y: hidden;
  }
}
```

### `@keyframes elementor-animation-pulse-grow`

Duration: `0.3s` · Easing: `linear` · Iteration: `infinite`

Used by: `.elementor-animation-pulse-grow:active, .elementor-animation-pulse-grow:focus, .`

```css
@keyframes elementor-animation-pulse-grow {
  100% {
    transform: scale(1.1);
  }
}
```

> Transform/motion animation

### `@keyframes swiper-preloader-spin`

Duration: `1s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader, .swiper:not`

```css
@keyframes swiper-preloader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes loadingOpacityAnimation`

Duration: `1s` · Easing: `ease` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.elementor-widget-loop-grid.e-loading-overlay`

```css
@keyframes loadingOpacityAnimation {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}
```

> Opacity fade

### `@keyframes spin_fix_ur_web`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.loader_fix_ur_web`

```css
@keyframes spin_fix_ur_web {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes spin_fix_ur_web`

Duration: `2s` · Easing: `linear` · Delay: `0s` · Iteration: `infinite` · Fill: `none`

Used by: `.loader_fix_ur_web`

```css
@keyframes spin_fix_ur_web {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes roll`

Duration: `2s` · Easing: `ease` · Delay: `0s` · Iteration: `1` · Fill: `none`

Used by: `.fix_ur_web_side_icon:hover .fix_ur_web_enable_icon`

```css
@keyframes roll {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

> Transform/motion animation

### `@keyframes dot-anim`

Duration: `1.6s` · Easing: `ease-in-out` · Iteration: `infinite`

Used by: `.fix_ur_web_color_radio_boxes_label`

```css
@keyframes dot-anim {
  0% {
    top: -0.2vw;
  }
  50% {
    top: 0.2vw;
  }
  100% {
    top: -0.2vw;
  }
}
```

### `@keyframes checked-radio-3`

Duration: `0.4s` · Easing: `ease-in-out` · Fill: `both`

Used by: `.fix_ur_web_color_radio_boxes_radio_teal:checked + .fix_ur_web_color_radio_boxes`

```css
@keyframes checked-radio-3 {
  0% {
    top: -1vw;
    transform: scale(0);
  }
  100% {
    top: 0px;
    transform: scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes unchecked-radio-3`

Duration: `0.2s` · Easing: `ease-in-out`

Used by: `.fix_ur_web_color_radio_boxes_radio_teal + .fix_ur_web_color_radio_boxes_label::`

```css
@keyframes unchecked-radio-3 {
  0% {
    bottom: 0px;
    transform: scale(1);
  }
  100% {
    bottom: -1vw;
    transform: scale(0);
  }
}
```

> Transform/motion animation

### `@keyframes show-content-image`

```css
@keyframes show-content-image {
  0% {
    visibility: hidden;
  }
  99% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

### `@keyframes turn-on-visibility`

```css
@keyframes turn-on-visibility {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes turn-off-visibility`

```css
@keyframes turn-off-visibility {
  0% {
    opacity: 1;
    visibility: visible;
  }
  99% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
```

> Opacity fade

### `@keyframes lightbox-zoom-in`

```css
@keyframes lightbox-zoom-in {
  0% {
    transform: translate(calc(((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position))*-1),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
  }
  100% {
    transform: translate(50%, -50%) scale(1);
  }
}
```

> Transform/motion animation

### `@keyframes lightbox-zoom-out`

```css
@keyframes lightbox-zoom-out {
  0% {
    transform: translate(50%, -50%) scale(1);
    visibility: visible;
  }
  99% {
    visibility: visible;
  }
  100% {
    transform: translate(calc(((-100vw + var(--wp--lightbox-scrollbar-width))/2 + var(--wp--lightbox-initial-left-position))*-1),calc(-50vh + var(--wp--lightbox-initial-top-position))) scale(var(--wp--lightbox-scale));
    visibility: hidden;
  }
}
```

> Transform/motion animation

### `@keyframes overlay-menu__fade-in-animation`

```css
@keyframes overlay-menu__fade-in-animation {
  0% {
    opacity: 0;
    transform: translateY(0.5em);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes columnMoveUp`

```css
@keyframes columnMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes columnMoveUp`

```css
@keyframes columnMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFade`

```css
@keyframes jetFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes jetFade`

```css
@keyframes jetFade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```

> Opacity fade

### `@keyframes jetZoomIn`

```css
@keyframes jetZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomIn`

```css
@keyframes jetZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomOut`

```css
@keyframes jetZoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetZoomOut`

```css
@keyframes jetZoomOut {
  0% {
    opacity: 0;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUp`

```css
@keyframes jetMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUp`

```css
@keyframes jetMoveUp {
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUpBig`

```css
@keyframes jetMoveUpBig {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveUpBig`

```css
@keyframes jetMoveUpBig {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDown`

```css
@keyframes jetMoveDown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDown`

```css
@keyframes jetMoveDown {
  0% {
    opacity: 0;
    transform: translateY(-25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDownBig`

```css
@keyframes jetMoveDownBig {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveDownBig`

```css
@keyframes jetMoveDownBig {
  0% {
    opacity: 0;
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeft`

```css
@keyframes jetMoveLeft {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeft`

```css
@keyframes jetMoveLeft {
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeftBig`

```css
@keyframes jetMoveLeftBig {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveLeftBig`

```css
@keyframes jetMoveLeftBig {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRight`

```css
@keyframes jetMoveRight {
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRight`

```css
@keyframes jetMoveRight {
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRightBig`

```css
@keyframes jetMoveRightBig {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetMoveRightBig`

```css
@keyframes jetMoveRightBig {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFallPerspective`

```css
@keyframes jetFallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFallPerspective`

```css
@keyframes jetFallPerspective {
  0% {
    opacity: 0;
    transform: perspective(1000px) translateY(50px) translateZ(-300px) rotateX(-35deg);
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) translateY(0px) translateZ(0px) rotateX(0deg);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInX`

```css
@keyframes jetFlipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInX`

```css
@keyframes jetFlipInX {
  0% {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInY`

```css
@keyframes jetFlipInY {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

### `@keyframes jetFlipInY`

```css
@keyframes jetFlipInY {
  0% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }
  100% {
    transform: perspective(400px);
  }
}
```

> Fade + motion enter animation

## Global Transition Declarations

These `transition` values were extracted from CSS rules across the site:

```css
transition: transform var(--rm-related-transition),box-shadow var(--rm-related-transition);
transition: color 0.2s;
transition: transform 0.3s;
transition: background 0.2s, transform 0.2s;
transition: 150ms linear;
transition: 0.2s linear;
transition: opacity 0.2s linear;
transition: 0.3s;
transition: 0.2s ease-in-out;
transition: max-height 0.3s, transform 0.3s;
transition: 0.2s;
transition: opacity 1s;
```

## How to Recreate This Motion Design

### Step 1 — Install Dependencies

```bash
npm install animejs
```

### Step 2 — Scroll-Reveal Pattern

Elements that animate into view follow this pattern:

```css
/* Initial hidden state */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Step 3 — Key Motion Principles

- **Duration scale:** `0.2s` · `0.3s` · `150ms` — use these values, never invent new durations
- **Always add** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`

### Step 4 — Scroll Journey Reference

Match what happens at each scroll position:

- **0%** (`0px`) → `screens/scroll/scroll-000.png`
- **17%** (`1025px`) → `screens/scroll/scroll-017.png`
- **33%** (`1990px`) → `screens/scroll/scroll-033.png`
- **50%** (`3015px`) → `screens/scroll/scroll-050.png`
- **67%** (`4040px`) → `screens/scroll/scroll-067.png`
- **83%** (`5005px`) → `screens/scroll/scroll-083.png`
- **100%** (`6030px`) → `screens/scroll/scroll-100.png`

