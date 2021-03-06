import evalJS from './transform'

export default function ({ template, script = 'module.exports={}', styles }) {
  try {
    if (script === 'module.exports={}' && !template) throw Error('no data')
    const result = evalJS(script)
    if (template) {
      result.template = template
    }
    result.style = styles && styles.join(' ')
    return {
      result: result,
     
    }
  } catch (error) {
    return { error }
  }
}
