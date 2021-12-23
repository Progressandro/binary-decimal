import { Col, Row, Typography } from "antd"
import ConversionInput from "components/molecule/ConversionInput"
import { useState } from "react"

export interface ValuesState {
  binary: number | string
  decimal: number | string
}
export enum OPTypes {
  TO_DECIMAL = "TO_DECIMAL",
  TO_BINARY = "TO_BINARY",
}

const dec2bin = (num: number | string) => {
  let acum = Number(num)
  console.log(acum)
  let binaryString = ""
  while (acum > 0) {
    console.log(binaryString)
    binaryString += acum % 2
    acum = Math.trunc(acum / 2)
  }
  return binaryString.toString().split("").reverse().join("")
}

const bin2dec = (num: number | string) => {
  const ret = String(num)
    .split("")
    .reverse()
    .reduce((prev, current, idx) => {
      console.log(prev, current, idx)
      return Number(prev) + Number(current) * Math.pow(2, idx)
    }, 0)
  console.log("bin2dec", ret)
  return ret
}
const ConversionPanel = () => {
  const [values, setValues] = useState<ValuesState>({
    binary: 0,
    decimal: 0,
  })

  const handleConversion = (value: number | string, operation: OPTypes) => {
    console.log(value, operation)
    setValues({
      decimal: operation === OPTypes.TO_BINARY ? value : bin2dec(value),
      binary: operation === OPTypes.TO_DECIMAL ? value : dec2bin(value),
    })
  }

  return (
    <Row>
      <Col span={12}>
        <Row justify="center">
          <Typography.Title>Binary Value</Typography.Title>
        </Row>
        <Row justify="center">
          <ConversionInput
            value={values.binary}
            operation={OPTypes.TO_DECIMAL}
            handleChange={handleConversion}
          />
        </Row>
      </Col>
      <Col span={12}>
        <Row justify="center">
          <Typography.Title>Decimal Value</Typography.Title>
        </Row>
        <Row justify="center">
          <ConversionInput
            value={values.decimal}
            operation={OPTypes.TO_BINARY}
            handleChange={handleConversion}
          />
        </Row>
      </Col>
    </Row>
  )
}

export default ConversionPanel
