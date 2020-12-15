[TOC]

#### исправление отображения лого в IE11

___по умолчанию будет изображение формата desktop___

```
 <a class="header__link header__logo">
  <picture>
    ...
      <img src="img/logo_desk@1x.png" srcset="img/logo_desk@2x.png 2x" alt="Smart Device" width="202" height="52">
  </picture>
</a>
```

#### исправление отображения контентных изображений в IE11

___по умолчанию будет изображение формата desktop___

```
<picture>
  ...
    <img src="img/board_desk@1x.png" srcset="img/board_desk@2x.png 2x" alt="Образец печатной платы" width="705" height="515">
</picture>
```

Всего исправлено 3 изображения:
```
<picture>
  ...
    <img src="img/production_desk@1x.png" srcset="img/production_desk@2x.png 2x" alt="Линия производства" width="370" height="620">

    <img src="img/mounting_desk@1x.png" srcset="img/mounting_desk@2x.png 2x" alt="Линия производства" width="370" height="620">

    <img src="img/components_desk@1x.png" srcset="img/components_desk@2x.png 2x" alt="Линия производства" width="370" height="620">
</picture>
```
