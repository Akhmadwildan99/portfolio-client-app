import { render, screen } from '@testing-library/react'
import Skills from '../Skills'

describe('Skills', () => {
  test('renders skills heading', () => {
    render(<Skills />)
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
  })

  test('renders skill items', () => {
    render(<Skills />)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Spring Boot')).toBeInTheDocument()
  })

  test('renders skill grid layout', () => {
    render(<Skills />)
    const skillsContainer = screen.getByText('Skills & Technologies').closest('div')
    expect(skillsContainer).toHaveClass('rounded-2xl')
  })
})