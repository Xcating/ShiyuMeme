
// 使用说明
// 1. 使用前现在\Yunzai-Bot\resources 这里创建一个"shiyu" 文件夹。
// 2. 在这个文件夹放入n个.jpg文件，或者使用仓库https://github.com/Xcating/ShiyuMeme 里的图片 (不定期更新) 
// 3. 修改下面的jpg_number的值为n个图片的n

// 适当玩梗，尊重他人
// 适当玩梗，尊重他人
// 适当玩梗，尊重他人

import plugin from'../../lib/plugins/plugin.js'
import cfg from'../../lib/config/config.js'
import common from'../../lib/common/common.js'
const path=process.cwd()
//图片需要从1开始用数字命名并且保存为jpg或者gif格式，存在Yunzai-Bot/resources/shiyu/目录下
let jpg_number = 9 //输入jpg图片数量

export class example extends plugin {
  constructor () {
    super({
      /** 功能名称 */
      name: '🍵随机时雨🍵',
      /** 功能描述 */
      dsc: '[Shiyu-Meme PREVIEW ]适当玩梗，尊重他人 [1.0.0 Preview] ',
      /** https://oicqjs.github.io/oicq/#events */
      event: 'message',
      /** 优先级，数字越小等级越高 */
      priority: 5000,
      rule: [
        {
          /** 命令正则匹配 */
          reg: '^#随机时雨$',
          /** 执行方法 */
          fnc: 'rdshiyu'
        }
      ]
    })
  }
    async rdshiyu(e){
	logger.info('[时雨开始发作..]')
	//回复随机图片
        let photo_number = Math.ceil(Math.random() * (jpg_number))
            
        if(photo_number<=jpg_number){
            e.reply(segment.image('file:///' + path + '/resources/shiyu/'+ photo_number + '.jpg'))
        }
        else{
            photo_number = photo_number - jpg_number
            e.reply(segment.image('file:///' + path + '/resources/shiyu/'+ photo_number + '.gif'))
            }
	logger.info('[时雨成功..]')
    }
}
//by https://github.com/Xcating