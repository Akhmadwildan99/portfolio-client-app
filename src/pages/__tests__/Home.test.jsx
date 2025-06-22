import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from '../Home'

const HomeWithRouter = () => (
  <BrowserRouter>
    <Home />
  </BrowserRouter>
)

describe('Home', () => {
  test('renders hero section', () => {
    render(<HomeWithRouter />)
    expect(screen.getByText('A Software Engineer')).toBeInTheDocument()
  })

  test('renders articles section', () => {
    render(<HomeWithRouter />)
    expect(screen.getByText('Articles')).toBeInTheDocument()
  })

  test('renders experiences section', () => {
    render(<HomeWithRouter />)
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
  })

  test('renders skills section', () => {
    render(<HomeWithRouter />)
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
  })
})