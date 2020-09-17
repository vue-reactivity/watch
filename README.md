# vue-reactivity-watch

The missing `watch` for `@vue/reactivity`. Works without Vue.

## Install

```bash
npm i @vue-reactivity/watch
```

### Usage

> Note: since there is no Vue instance to be bond, `watch` will not be auto disposed. You need to always **explicitly** call the returning function to stop it.

Just like what you do in Vue.

```ts
import { ref, reactive, computed } from '@vue/reactivity'
import { watch, watchEffect } from '@vue-reactivity/watch'

const count = ref(1)

const stopWatch = watch(
  count,
  (newValue) => {
    console.log(`Count: ${newValue}`)
  }
)

count.value += 1
// Count: 2

stopWatch()
```

## License

MIT
