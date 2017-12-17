import parser from './parser'
import compiler from './compiler'

export default (code) => {
  const result = parser(code)
  /* istanbul ignore next */
  if (result.error) {
    console.error(result.error.message)
    return
  }

  const compiledCode = compiler(result)
  return compiledCode.result
  
}