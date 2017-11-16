import parser from './parser'
import complier from './compiler'

module.export = (code) => {
  console.log('execute code:', typeof code, code)
  const result = parser(code)

  /* istanbul ignore next */
  if (result.error) {
    console.error(result.error.message)
    return
  }

  const compiledCode = compiler(result)

  return compiledCode.result
  
}