export default function sout() {
  const str2 = "%c gitHub:https://github.com/coderxiaoluo/ \n %c gitee:https://gitee.com/coderxiaoluo \n  CSDN https://blog.csdn.net/m0_62336865?spm=1000.2115.3001.5343 \n bilibili: https://space.bilibili.com/1810497501?spm_id_from=333.1007.0.0"
  var arg2 = "color:pink;  font-weight: 600;";
  var arg3 = "padding:5px 0; color:red;";
  console.log("%c 罗建波 coderxiaoluo", arg2)
  console.log('%c qq:1195646651@qq.com',"color:green; font-weight: 600;")
  console.log("%c 技术栈：%c H5c3、JavaScript、jQuery、nodejs、axios、vue、uniapp、React、TypeScript、javaee","color:red;","color:#fff;")
  console.log(str2, arg3, arg3)
}