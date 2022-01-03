import { Input } from "antd"
import { OPTypes } from "components/organism/ConversionPanel"

interface Props {
  value: string | number
  operation: OPTypes
  handleChange: (value: number | string, operation: OPTypes) => void
}

const validate = (
  newValue: number | string,
  operation: OPTypes,
  prevValue: number | string
) => {
  if (newValue === "") return 0
  if (operation === OPTypes.TO_BINARY) {
    return !isNaN(Number(newValue)) ? Number(newValue) : prevValue
  } else {
    return String(newValue).match(/\b[01]+\b/) ? Number(newValue) : prevValue
  }
}

const ConversionInput = ({ value, operation, handleChange }: Props) => (
  <Input
    type="text"
    value={value}
    onChange={(e) =>
      handleChange(validate(e.target.value, operation, value), operation)
    }
  />
)

export default ConversionInput
