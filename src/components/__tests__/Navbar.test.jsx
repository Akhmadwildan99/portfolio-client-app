import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from '../Navbar'

const NavbarWithRouter = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
)

describe('Navbar', () => {
  test('renders logo', () => {
    render(<NavbarWithRouter />)
    expect(screen.getByText('nadliw')).toBeInTheDocument()
  })

  test('renders navigation links', () => {
    render(<NavbarWithRouter />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Articles')).toBeInTheDocument()
    expect(screen.getByText('Experiences')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  test('navigation buttons are clickable', () => {
    render(<NavbarWithRouter />)
    const homeButton = screen.getByText('Home')
    const articlesButton = screen.getByText('Articles')
    
    fireEvent.click(homeButton)
    fireEvent.click(articlesButton)
    
    expect(homeButton).toBeInTheDocument()
    expect(articlesButton).toBeInTheDocument()
  })
})