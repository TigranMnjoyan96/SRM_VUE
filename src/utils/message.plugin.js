export default {
 install(Vue, option) {
  Vue.prototype.$message = function(text) {
   M.toast({html: text})
  }

  Vue.prototype.$error = function() {
   M.toast({html: `[Error]: ${html}`})
  }
 }

 
}
