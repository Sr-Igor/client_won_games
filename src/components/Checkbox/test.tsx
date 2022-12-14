import { render, screen } from 'utils/test-utils'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the heading whith label', () => {
    render(<Checkbox label={'label'} labelFor="action" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/label/i)).toBeInTheDocument()
    expect(screen.getByText(/label/i)).toHaveAttribute('for', 'action')
  })

  it('should render the heading whithout label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('sholud render a black label', () => {
    render(<Checkbox label="label" labelColor="black" />)

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('sholud render a white label', () => {
    render(<Checkbox label="label" labelColor="white" />)

    expect(screen.getByText(/label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should dispatch onCheck when status changes', () => {
    const onCheck = jest.fn()

    render(<Checkbox label="label" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    screen.getByRole('checkbox').click()

    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should render checked by default', () => {
    const onCheck = jest.fn()

    render(<Checkbox label="label" onCheck={onCheck} isChecked={true} />)

    expect(onCheck).not.toHaveBeenCalled()

    screen.getByRole('checkbox').click()

    expect(onCheck).toHaveBeenCalledTimes(1)
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    render(<Checkbox label="labelText" labelFor="action" />)

    expect((screen.getByLabelText(/labelText/i).tabIndex = 0))
  })
})
