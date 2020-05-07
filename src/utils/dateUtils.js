
/**
 * 传入时间字符串，得到给定格式的时间字符串
 */
export function formateDate(time){
    if(!time) return ''
    let date = new Date(time)
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()+' '+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
}