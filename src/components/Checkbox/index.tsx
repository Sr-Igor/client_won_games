import { InputHTMLAttributes, useEffect, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  onCheck?: (status: boolean) => void
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'black',
  onCheck,
  isChecked = false,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)
    !!onCheck && onCheck(status)
  }

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        checked={checked}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
