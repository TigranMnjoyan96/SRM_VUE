export default function dateFilter(val) {
 return new Intl.DateTimeFormat('ru-RU').format(new Date(val))
}
