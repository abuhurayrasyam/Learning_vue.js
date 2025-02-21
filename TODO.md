1. Text Interpolation
```vue
<template>
  <h1>{{ message }}</h1>
  <h1>{{2+2}}</h1>
</template>

<script setup>
  const message="Hello Vue"
</script>
```

2. Raw HTML
```vue
<template>
    <div v-html="rawHtml"></div>
</template>
<script setup>
  const rawHtml = '<span style="color: red;">This is red text</span>';
</script>
```


3. Attribute Bindings
```vue
<template>
   <img v-bind:src="imgURL">
</template>
<script setup>
  const imgURL = 'https://laravel.com/img/logomark.min.svg';
</script>
```


4. JavaScript Expressions
```vue
<template>
    {{number1+number2}}
</template>
<script setup>
const number1 = 5;
const number2 = 10;
</script>
```

5. v-bind: Bind an Attribute to an Expression
```vue
<template>
   <img v-bind:src="imgURL">
</template>
<script setup>
  const imgURL = 'https://laravel.com/img/logomark.min.svg';
</script>
```


6. v-model: Two-Way Binding for Form Inputs
```vue
<template>
    <input v-model="name" type="text" placeholder="Enter your name">
    <p>{{name}}</p>
</template>

<script setup>
import {ref} from "vue";
const name = ref('');
</script>
```


7. v-if: Conditionally Render Elements
```vue
<template>
    <h1 v-if="isLogin">Welcome back</h1>
</template>
<script setup>
    const isLogin=false
</script>
```

8. v-else: Used with v-if to Display Content
```vue
<template>
    <h1 v-if="isLogin">Welcome back</h1>
    <h1 v-else>Please Login</h1>
</template>

<script setup>
    const isLogin=true
</script>
```

9. v-else-if: Adds Additional Conditional Renderings
```vue
<template>
  <h1 v-if="marks<=100 && marks>=80">A+</h1>
  <h1 v-else-if="marks<80 && marks>=70">A</h1>
  <h1 v-else-if="marks<70 && marks>=60">A</h1>
  <h1 v-else>Please Login</h1>
</template>

<script setup>
  const marks =75
</script>
```


10. v-show: Toggles Element Visibility via CSS Display
```vue
<template>
  <h1 v-show="isVisible">This is text</h1>
</template>

<script setup>
  const isVisible=true
</script>
```


11. v-for: Render a List of Elements by Iterating
```vue
<template>
    <ul>
      <li v-for="(item,index) in fruits">{{item}}</li>
    </ul>
</template>
<script setup>
  const fruits = ['Apple', 'Banana', 'Cherry'];
</script>
```


12. v-pre: Skip Compilation for This Element
```vue
<template>
    <div v-pre>{{msg}}</div>
</template>

<script setup>
    const msg='{{2+2}}'
</script>
```
