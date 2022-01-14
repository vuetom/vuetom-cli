---
title: Button
---
# {{ $frontmatter.title }}

## Basic

### button

<p>Use type, plain, round, and circle to define the style of the button.</p>
<p>The shadow property allows the button to be suspended with a shadow.</p>

:::demo  
button/btn-basic 
:::

### text
<p>Adding the text attribute allows the button to become a text button.</p>

:::demo  
button/btn-text 
:::

### disabled
<p>You can use the disabled property to define whether the button is disabled.</p>

:::demo  
button/btn-disable 
:::

### icon

:::demo 
button/btn-icon 
:::

### link

:::demo 
button/btn-link 
:::

## Attribute

| Attribute   | Description                            | Type    | Accepted Values                                    | Default |
| ----------- | -------------------------------------- | ------- | -------------------------------------------------- | ------- |
| size        | button size                            | string  | medium / small / mini                              | —       |
| type        | button type                            | string  | primary / success / warning / danger / info / text | —       |
| plain       | determine whether it's a plain button  | boolean | —                                                  | false   |
| round       | determine whether it's a round button  | boolean | —                                                  | false   |
| circle      | determine whether it's a circle button | boolean | —                                                  | false   |
| loading     | determine whether it's loading         | boolean | —                                                  | false   |
| disabled    | disable the button                     | boolean | —                                                  | false   |
| icon        | icon class name                        | string  | —                                                  | —       |
| autofocus   | same as native button's `autofocus`    | boolean | —                                                  | false   |
| native-type | same as native button's `type`         | string  | button / submit / reset                            | button  |

## Attribute

| Attribute | Description                                      | Type   | Accepted Values       | Default |
| --------- | ------------------------------------------------ | ------ | --------------------- | ------- |
| size      | control the size of buttons in this button-group | string | medium / small / mini | —       |
