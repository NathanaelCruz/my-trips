import { render, screen } from '@testing-library/react'
import LinkWrapper from './index'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/link">Anything</LinkWrapper>)
    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/link')
  })
})
