import * as yup from 'yup'

const schema = yup.object().shape({
  move: yup.array().of(yup.string().trim()).required()
})

export default schema
