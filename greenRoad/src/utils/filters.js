import moment from 'moment'

//时间格式化
const dateInit = date => (date ? moment(date).format('YYYY.MM.DD') : '')
//时间格式化
const timeInit = date => (date ? moment(date).format('YYYY-MM-DD HH:mm') : '')

//道钉编号过滤
const ddInit = str => str.split(',')[0]
export { dateInit,ddInit,timeInit }