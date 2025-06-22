import { render, screen } from '@testing-library/react'
import Experiences from '../Experiences'

describe('Experiences', () => {
  test('renders work experience heading', () => {
    render(<Experiences />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  test('renders experience items', () => {
    render(<Experiences />)
    const companyLogos = screen.getAllByRole('img')
    expect(companyLogos.length).toBeGreaterThan(0)
  })

  test('renders company information', () => {
    render(<Experiences />)
    expect(screen.getByText('Bionic Teknologi Indonesia')).toBeInTheDocument()
  })
})