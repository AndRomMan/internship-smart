[TOC]

# Smart Device project

***
## Mockup setting
#### Breakpoints & paddings
- 320px - 767px — mobile версия,
  * 320/290 padding 15px

- 768px - 1023px — tablet версия,
  * 770/720 padding 25px

- больше 1024px — desktop версия
  * 1920/1413 padding 30px

#### Размеры макетов

* 320px
* 770px
* 1920px
***
***
## Font set

*  400:  Regular
*  500:  Medium
*  700:  Bold

```
    font-family: Roboto Condensed;

    font-weight: 700;
    font-weight: 400;
```

```
    font-family: Roboto;
    font-weight: 500;

```

```
    font-family: PT Mono;
    font-weight: 400;

```
#### Резервный безопасный шрифт
```
font-family: "PT Mono", "Courier New", "Lucida Console", "Monaco", monospace;

font-family: "Roboto", "Arial", "Helvetica", "Helvetica Neue", sans-serif;

font-family: "Montserrat", "Arial", "Helvetica", "Helvetica Neue", sans-serif;
```


***
## Basic colors & color effects

### Font colors

```
    $font_lightgray: #788891;
    $font_darkgray: #666666;
```

```
    color: $basic_light;
    color: $basic_dark;
    color: $basic_skyblue;
    color: $font_lightgray;
    color: $font_darkgray;
```


###### Логотип: цвет надписи - не включать
```
    color: $font_logo_dark;
    $font_logo_dark: #203c42;
```


### Popup
```
    $back_dark: #000000;
    opacity: 0.5;
```

### Basic colors
```
    $basic_light: #ffffff;
    $basic_dark: #1b2d37;
    $basic_skyblue: #00b2ff;
```

### Background form input
```
    background: $basic_light;
    opacity: 0.1;
```
### Background body
```
background: $body_back;
$body_back: #fafafa;
```

### Decorative SVG triangles
```
    $triangles_line_gray: #ebebeb;
    $triangles_circle_gray: #f2f2f2;
```

***
### Advantage card border
```
    $advantage_border: #ebebeb;
    border: 1px solid $advantage_border;
```

***
### Footer section border

```
$footer_border:  #626962;

opacity: 0.2;
/* #353735 */

border: 1px solid $footer_border;
```

***

### Accordeon SVG toggle: "+" , "-"
```
   $accordeon_toggle: #c4c4c4;
```

***
***
## header

---
### header__logo
___исключить: логотип = рисунок + надпись___
Smart Device
```
desktop:
font-family: Roboto Condensed;
font-weight: 700;
font-size: 25px;
line-height: 29px;
color: $basic_light;
```
умные технологии
```
desktop:
font-family: Roboto;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: $font_lightgray;
```
---


***
### header__contacts
info@sd.ru
+7 (495) 000 52 52
```
desktop:

font-family: PT Mono;
font-weight: 400;
font-size: 16px;
line-height: 18px;
color: $basic_light;
```
### header__btn
Заказать звонок
```
desktop:
font-family: Roboto Condensed;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.05em;
text-transform: uppercase;

```
***
***
## promo

### promo__title
Печатные платы
```
desktop:
font-family: Roboto Condensed;
font-weight: 700;
font-size: 80px;
line-height: 94px;
letter-spacing: 0.07em;
text-transform: uppercase;
color: $basic_light;
```

```
tablet:

font-size: 60px;
line-height: 70px;
```

```
mobile:
font-size: 40px;
line-height: 47px;
```

### promo__subtitle
производство и монтаж, поставка комплектующих, блоков и модулей
```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 22px;
line-height: 34px;
color: $basic_light;
```

```
tablet:
font-size: 18px;
line-height: 28px;
```

```
mobile:
font-size: 16px;
line-height: 25px;
```

### promo__link
Получить бесплатную консультацию

ссылка “Получить бесплатную консультацию” - якорная, плавно прокручивающими страницу до формы в подвале
```
desktop:
font-family: Roboto Condensed;
font-weight: 700;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: $basic_light;
```

### promo__btn
Скролл вниз

ссылка “Скролл вниз” - якорная, плавно прокручивающими страницу до блока преимуществ

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: $basic_light;

opacity: 0.5;
transform: rotate(-90deg)
```

***
***
## advantages

### advantages__item advantages-item
#### advantages-item__title
Оперативные сроки
Крупные поставщики
Полная конфиденциальность
Персонализация стоимости

```
desktop:

font-family: Roboto Condensed;
font-weight: 400;
font-size: 24px;
line-height: 34px;
color: $basic_skyblue;

hover: focus:
color: $basic_light;
```

```
tablet:
```

```
mobile:
font-size: 20px;
line-height: 28px
```
#### advantages-item__text
Усовершенствованная логистическая система позволяет нам просчитывать стоимость, производить и доставлять заказы плат и комплектующих в самые короткие сроки

Нашими поставщиками являются такие крупные мировые компании как: OSRAM, CREE, HOLGLITRONIC, REFOND. Сотрудничество с такими компаниями обеспечивает хорошее качество нашей продукции.

По желанию клиента  мы обеспечиваем полную конфиденциальность.

Мы  подбираем определенную фабрику, поставщиков, вид доставки, чтобы установить ту цену, которая Вас устраивает.

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: $font_darkgray;

hover: focus:
color: $basic_light;
```

***
***
## company
### company__title
О компании
```
desktop:
font-family: Roboto Condensed;
font-weight: 400;
font-size: 36px;
line-height: 51px;
color: $font_darkgray;
```

```
tablet:
font-size: 32px;
line-height:45px;
```

```
mobile:
font-size: 28px;
line-height: 39px
```
### company__text
Мы поставляем электронные комплектующие, производим печатные платы и предоставляем мировые технологии с 1997 года. Выполняем срочные заказы и пилотные образцы до 10 дней.

Наши поставщики - мировые производители электронных компонентов: OSRAM, CREE, HOLGLITRONIC, REFOND. Печатные платы и комплектующие Service Devices применяются на предприятиях Российских Железных Дорог (РЖД), РоссАвтоПрома (ВАЗ, АвтоГАЗ), МинАтома, СпецМедТехники. Среди наших клиентов крупнейшие Производители светотехники России.

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: $font_darkgray;
```

### company__btn button

```
desktop:
ont-family: Roboto Condensed;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: $basic_skyblue;
```

***
***
## services

### services__title
Service Device предлагает следующие товары и услуги

```
desktop:
ont-family: Roboto Condensed;
font-weight: 400;
font-size: 36px;
line-height: 51px;
color: $basic_light;
```

```
tablet:
font-size: 32px;
line-height: 45px;
```

```
mobile:
font-size: 28px;
line-height: 39px;
```


### services__item = services-item services__link
#### services-item__title
Производство печатных плат

Монтаж печатных плат

Комплектующие для светотехники

```
desktop:
font-family: Roboto Condensed;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: $basic_light;
```

***
***
## callback

### callback__title
Остались вопросы? Задайте их нам!
```
desktop:
font-family: Roboto Condensed;
font-weight: 400;
font-size: 36px;
line-height: 51px;
color: $basic_light;
```

```
tablet:
font-size: 32px;
line-height: 45px;
```

```
mobile:
font-size: 28px;
line-height: 39px;
```

### callback__subtitle
Мы проконсультируем Вас бесплатно
```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: $basic_light;
```

### callback-form

#### callback-form input
#### callback-form placeholder
Имя
Телефон
Ваш вопрос

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: $basic_light;
```
#### callback-form label input[type="radio"]
Я согласен на обработку  персональных данных

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: $basic_light;
opacity: 0.8;
```

#### callback-form__btn button
Задать вопрос

```
desktop:
font-family: Roboto Condensed;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: $basic_light;
```
***
***
## footer

---
### footer__logo = header__logo (кроме цвета)
___исключить: логотип = рисунок + надпись___
Smart Device
```
desktop:
color: $font_logo_dark;
```
умные технологии

---


## footer__menu
## footer__contacts
Разделы сайта
Наш офис
```
desktop:
font-family: Roboto Condensed;
font-weight: 400;
font-size: 15px;
line-height: 16px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: $basic_dark;
```

## footer__nav footer-nav__item
О компании
Продукты
Производство печатных плат
Монтаж печатных плат
Комплектующие
Доставка
Контакты
## footer__contacts footer-contacts__item
г. Мытищи, Олимпийский проспект, д.10
+7 (495) 589-40-50
+7 (925) 003-87-67
+7 (926) 926-080-79

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 15px;
line-height: 25px;
color: $basic_dark;
opacity: 0.5;
```
***
## footer__copyright
Все права защищены
1999-2018 SD Service Devices
Условия конфиденциальности
Developed by wow studio

```
desktop:
font-family: PT Mono;
font-weight: 400;
font-size: 13px;
line-height: 24px;
color: $basic_dark;
letter-spacing: 0.04em;
opacity: 0.5;

text-transform: uppercase;

```

***
*  400:  Regular
*  500:  Medium
*  700:  Bold

@include font_robotcon($size, $line_height, $weight, $color);

@include font_robot($size, $line_height, $weight, $color);

@include font_ptmono($size, $line_height, $weight, $color);

***

## callback-modal
___Стили совпадают со стилями формы обратной связи для mobile___

### callback-modal__title
Закажите звонок

```
@include font_robotcon(28px, 39px, 400, $basic_light);
```

### callback-modal__subtitle
Оставьте контакты, мы проконсультируем вас бесплатно в удобное время

```
@include font_ptmono(16px, 22px, 400, $basic_light);
```


### callback-modal__subtitle input placeholder
Имя
Телефон
Ваш вопрос

```
@include font_ptmono(16px, 22px, 400, $basic_light);
```
### callback-modal__label agreement

Я согласен на обработку  персональных данных

```
@include font_ptmono(14px, 16px, 400, $basic_light);

opacity: 0.8;
```


### callback-modal__btn button
Отправить
```
@include font_robotcon(14px, 16px, 400, $basic_light);

text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
```

***
***
### decor components



***
***
### button
```
desktop:
font-family: Roboto Condensed;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.05em;
text-transform: uppercase;
color: $basic_light;
```

***
***
```
desktop:

```

```
tablet:

```

```
mobile:

```
