import { isFunction, isPromise } from '@vue/shared'

export function callWithErrorHandling(
  fn: Function,
  type: string,
  args?: unknown[],
) {
  let res
  try {
    res = args ? fn(...args) : fn()
  }
  catch (err) {
    handleError(err, type)
  }
  return res
}

export function callWithAsyncErrorHandling(
  fn: Function | Function[],
  type: string,
  args?: unknown[],
): any[] {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, type, args)
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, type)
      })
    }
    return res
  }

  const values = []
  for (let i = 0; i < fn.length; i++)
    values.push(callWithAsyncErrorHandling(fn[i], type, args))

  return values
}

export function handleError(
  err: unknown,
  type: String,
) {
  console.error(new Error(`[@vue-reactivity/watch]: ${type}`))
  console.error(err)
}

export function raise(message: string): never {
  throw createError(message)
}

export function warn(message: string) {
  console.warn(createError(message))
}

export function createError(message: string) {
  return new Error(`[reactivue]: ${message}`)
}
