import moment from 'moment'

//时间格式化
const dateInit = date => (date ? moment(date).format('YYYY.MM.DD') : '')

export { dateInit }