import dayjs from 'dayjs'
export const dateFormat = (timeStr: string, b?: string) => {
  return dayjs(timeStr).format(b)
}
